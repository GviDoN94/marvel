import { useState, useCallback } from 'react';

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [process, setProcess] = useState('waiting');

  const request = useCallback(
    async (
      url,
      method = 'GET',
      body = null,
      headers = { 'Content-type': 'application/json' },
    ) => {
      setLoading(true);
      setProcess('loading');

      try {
        const res = await fetch(url, { method, body, headers });

        if (!res.ok) {
          throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        const data = await res.json();

        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        setProcess('error');
        throw e;
      }
    },
    [],
  );

  const clearError = useCallback(() => {
    setError(null);
    setProcess('loading');
  }, []);

  return { loading, error, request, clearError, process, setProcess };
};

export default useHttp;
