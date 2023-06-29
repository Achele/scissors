import { Link } from "react-router-dom";
// import { data } from "../utils/data";
import { Analytics } from "./Icon";
import format from "date-fns/format";

const LinkCard = ({
  id,
  createdAt,
  name,
  longURL,
  shortCode,
  totalClicks,
  isLastItem,
}) => {
  return (
    <article
      className={`flex items-center justify-between mb-4 ${
        isLastItem ? "" : "border-b-2 border-placeholder"
      }`}
    >
      <span>
        <p className="text-placeholder uppercase py-2 font-bold">
          Created at {format(createdAt, "d MMM, HH:mm")}
        </p>
        <h1 className="font-bold text-base py-2">{name}</h1>
        <Link>{longURL}</Link>
        <span className="flex items-center py-6">
          <p className="pr-5 text-primary">
            {window.location.host}/{shortCode}
          </p>
          <button className="border-primary border text-primary rounded px-2">
            Copy
          </button>
        </span>
      </span>
      <span>
        <span className="flex items-center">
          <h3 className="font-bold">{totalClicks}</h3>
          <Analytics />
        </span>

        <p>total clicks</p>
      </span>
    </article>
  );
};

export default LinkCard;
