import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
// import { data } from "../utils/data";
import { Analytics } from "./Icon";
import format from "date-fns/format";

const LinkCard = ({
  id,
  createdAt,
  citeName,
  longURL,
  shortCode,
  totalClicks,
  isLastItem,
  deleteLink,
  copyLink,
}) => {
  console.log("link card rendered");
  const formattedDate =
    createdAt && createdAt.seconds
      ? format(new Date(createdAt.seconds * 1000), "MMM dd, yyyy")
      : "-";

  const shortUrl = `${window.location.host}/${shortCode}`;

  return (
    <article
      className={`flex items-center justify-between mb-4 ${
        isLastItem ? "" : "border-b-2 border-placeholder"
      }`}
    >
      <span className=" ">
        <p className="text-placeholder uppercase py-2 font-bold">
          Created at {formattedDate}
        </p>
        <h1 className="font-bold text-base py-2">{citeName}</h1>
        <Link href={longURL} className={"overflow-hidden text-ellipsis"}>
          {longURL}
        </Link>
        <span className="sm:flex items-center  py-6">
          <Link href={shortUrl} className="pr-5 text-primary xs:pt-3">
            shortly.web/{shortCode}
          </Link>

          <span className="flex  xs:my-2">
            <button
              className="border-primary border text-primary rounded px-2 py-1"
              onClick={() => copyLink(shortUrl)}
            >
              Copy
            </button>

            <button
              className="text-white rounded py-1 px-2 bg-gray-950 border mx-2"
              onClick={deleteLink}
            >
              Delete
            </button>
          </span>
        </span>
      </span>
      <span>
        <span className="flex items-center">
          <h3 className="font-bold">{totalClicks}</h3>
          <Analytics />
        </span>
        <p className="xs:hidden sm:hidden lg:block">total clicks</p>
      </span>
    </article>
  );
};

export default LinkCard;
