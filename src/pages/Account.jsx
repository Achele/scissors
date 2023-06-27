import { Link } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";

const Account = () => {
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
          <article className="flex items-center justify-between">
            <span>
              <p>Created AT</p>
              <h1 className="font-bold">My website</h1>
              <Link>https....</Link>
              <span className="flex items-center">
                <p className="pr-5 text-primary">afshjkkk</p>
                <button className="border-primary border text-primary rounded px-2">
                  Copy
                </button>
              </span>
            </span>
            <span>
              <h3 className="font-bold">14</h3>
              <p>total clicks</p>
            </span>
          </article>
        </section>
      </main>
    </>
  );
};

export default Account;
