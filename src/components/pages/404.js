import { Link } from "react-router-dom";

import ErrorMessage from "../errorMessage/ErrorMessage";

const Page404 = () => {
  return (
    <div>
      <ErrorMessage/>
      <p style={{
        'textAlign': 'center',
        'font-weight': 'bold',
        'font-size': '24px',
        }}
      >
        Page doesn't exist
      </p>
      <Link
        style={{
          'textAlign': 'center',
          'display': 'block',
          'marginTop': '30px',
          'fontWeight': 'bold',
          'fontSize': '24px',
        }}
        to="/"
      >
        Back to main page
      </Link>
    </div>
  )
}

export default Page404;
