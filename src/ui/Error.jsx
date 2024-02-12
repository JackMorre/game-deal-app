import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops there was an error</h1>
      <p>{error.data || error.message}</p>
    </div>
  );
}

export default Error;
