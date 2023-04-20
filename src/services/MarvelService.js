import useHttp from "../hooks/http.hook";

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=c1342aa838289b5b2b2c933847e87d35";
  const _baseOffset = 0;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const getAllComics = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformComic);
  };

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComic(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? char.description.length > 210
          ? `${char.description.slice(0, 210)}...`
          : char.description
        : "There is no description for this character",
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  const _transformComic = (comic) => {
    return {
      id: comic.id,
      title: comic.title,
      description: comic.description || "There is no description",
      thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      pageCount: comic.pageCount
        ? `${comic.pageCount} pages`
        : "No information about the nubmer of pages",
      language: comic.textObjects.language || "en-us",
      price: comic.prices[0].price
        ? `${comic.prices[0].price}$`
        : "not available",
    };
  };

  return {
    loading,
    error,
    getAllCharacters,
    getCharacter,
    getAllComics,
    getComic,
    clearError,
  };
};

export default useMarvelService;
