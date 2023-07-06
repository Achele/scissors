import { useParams } from "react-router-dom";

const LinkRedirect = () => {
  const params = useParams();
  return <div>{JSON.stringify(params, null, 2)}</div>;
};

export default LinkRedirect;
