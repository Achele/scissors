import { useState, useEffect } from "react";
import LinkCard from "../components/LinkCard";
import UserNavbar from "../components/UserNavbar";

import ShortenURLModal from "../components/ShortenURLModal";
import { db, auth } from "../firebase/config";
import { nanoid } from "nanoid";
import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useCallback } from "react";
import copy from "copy-to-clipboard";
import Loading from "../components/Loader";
import { NoLinks } from "../components/Icon";
import { UseUserAuth } from "../context/authContext";

const Account = () => {
  const [links, setLinks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const userUid = auth?.currentUser?.uid;
  const { user } = UseUserAuth();
  console.log("ACCOUNT: ", user);

  const handleCreateLink = () => {
    setShowPopup(true);
  };

  const createShortenLink = async (citeName, longURL) => {
    const link = {
      citeName: citeName,
      longURL:
        longURL.includes("http://") || longURL.includes("https://")
          ? longURL
          : `http://${longURL}`,
      createdAt: Timestamp.fromDate(new Date()),
      shortCode: nanoid(6),
      totalClicks: 0,
    };

    const userLinksRef = collection(db, "users", userUid, "links");
    const docRef = await addDoc(userLinksRef, link);

    setLinks((links) => [...links, { ...link, id: docRef.id }]);

    setShowPopup(false);
  };

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        if (auth.currentUser) {
          const userLinksRef = collection(db, "users", userUid, "links");
          const linksSnapshot = await getDocs(userLinksRef);
          const tempLinks = [];
          linksSnapshot.docs.forEach((doc) =>
            tempLinks.push({ ...doc.data(), id: doc.id })
          );
          console.log(tempLinks);
          setLinks(tempLinks);
        }
      } catch (error) {
        console.log("Error fetching links:", error);
      } finally {
        setIsLoading(false); // Set isLoading to false
      }
    };

    fetchLinks();
  }, [userUid]);

  const handleDelete = async (linkDocID) => {
    try {
      if (window.confirm("Do you want to delete the link")) {
        await deleteDoc(doc(db, "users", userUid, "links", linkDocID));
        setLinks((oldLinks) =>
          oldLinks.filter((link) => link.id !== linkDocID)
        );
      }
    } catch (error) {
      console.log("Error deleting document:", error);
    }
  };

  const handleCopyClick = (shortUrl) => {
    console.log("Link to copy:", shortUrl);
    const isCopied = copy(shortUrl);
    console.log("Link copied:", isCopied);
    setIsCopied(isCopied);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  // const dummyFunction = useCallback(() => console.log("dummy function"), []);

  return (
    <div>
      <UserNavbar />
      <main
        className={`w-3/4 p-8 my-2 mx-auto container ${
          showPopup ? "blur" : ""
        }`}
      >
        <span className="flex items-center pb-4">
          <h1 className="font-bold text-lg">Links</h1>
          <button
            className="bg-primary text-white rounded py-1 px-3 ml-3"
            onClick={handleCreateLink}
          >
            Create new
          </button>
        </span>
        <section>
          {isLoading ? (
            <Loading /> // Render loading state
          ) : !links.length ? (
            <span className="text-center py-4">
              <NoLinks className={"w-1/3 my-7 mx-auto"} />
              <p>Let's make magic!!</p>
            </span>
          ) : (
            links
              .sort(
                (prevLink, nextLink) => nextLink.createdAt - prevLink.createdAt
              )
              .map((link, index) => (
                <LinkCard
                  key={index}
                  createdAt={link.createdAt}
                  citeName={link.citeName}
                  longURL={link.longURL}
                  shortCode={link.shortCode}
                  totalClicks={link.totalClicks}
                  isLastItem={index === links.length - 1}
                  // dummyFunction={dummyFunction}
                  deleteLink={() => handleDelete(link.id)}
                  copyLink={handleCopyClick}
                  shortUrl={`${window.location.host}/${link.shortCode}`}
                />
              ))
          )}
        </section>
        {isCopied && (
          <p className="bg-black border rounded text-white py-1 px-4 w-1/2">
            Link copied to clipboard
          </p>
        )}
      </main>
      {showPopup && (
        <ShortenURLModal
          setShowPopup={setShowPopup}
          createShortenLink={createShortenLink}
        />
      )}
    </div>
  );
};

export default Account;
