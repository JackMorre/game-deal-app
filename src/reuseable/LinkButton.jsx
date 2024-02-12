import { Link } from "react-router-dom";

function LinkButton() {
  return (
    <Link className="flex">
      <p>Witcher</p>
      <span> - </span>
      <p>30.00</p>
    </Link>
  );
}

export default LinkButton;
