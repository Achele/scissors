import { useState } from "react";
import LinkCard from "../components/LinkCard";
import UserNavbar from "../components/UserNavbar";
import { data } from "../utils/data";

const Account = () => {
  const [links, setLinks] = useState(data);
  return (
    <>
      <UserNavbar />
      <main className="w-3/4 p-8 my-2 mx-auto">
        <span className="flex items center pb-4">
          <h1 className=" font-bold text-lg">Links</h1>
          <button className="bg-primary text-white rounded py-1 px-3 ml-3">
            Create new
          </button>
        </span>
        <section>
          {links.map((link, index) => (
            <LinkCard
              key={link.id}
              createdAt={link.createdAt}
              name={link.name}
              longURL={link.longURL}
              shortCode={link.shortCode}
              totalClicks={link.totalClicks}
              isLastItem={index === links.length - 1}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Account;
