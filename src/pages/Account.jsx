import { useState, useEffect } from "react";
import LinkCard from "../components/LinkCard";
import UserNavbar from "../components/UserNavbar";

import ShortenURLModal from "../components/ShortenURLModal";
import { db, auth } from "../firebase/config";
import { nanoid } from "nanoid";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";

const Account = () => {
  const [links, setLinks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const userUid = auth.currentUser.uid;

  const handleCreateLink = () => {
    setShowPopup(true);
  };

  const createShortenLink = async (citeName, longURL) => {
    const link = {
      citeName: citeName,
      longURL: longURL,
      createdAt: Timestamp.fromDate(new Date()),
      shortCode: nanoid(6),
      totalClicks: 0,
    };

    const userLinksRef = collection(db, "users", userUid, "links");
    const docRef = await addDoc(userLinksRef, link);

    setLinks((links) => [...links, { ...link, id: docRef.id }]);

    setShowPopup(false);
  };

  // const createShortenLink = async (citeName, longURL) => {
  //   const link = {
  //     citeName: citeName,
  //     longURL: longURL,
  //     createdAt: Timestamp.fromDate(new Date()),
  //     shortCode: nanoid(6),
  //     totalClicks: 0,
  //   };

  //   const userRef = doc(db, "users", auth.currentUser.uid);
  //   const userDoc = await getDoc(userRef);

  //   if (userDoc.exists()) {
  //     const userData = userDoc.data();
  //     const existingLinks = Array.isArray(userData.links)
  //       ? userData.links
  //       : Object.values(userData.links || []);
  //     console.log("EXISTING LINKS: ", existingLinks);
  //     const updatedLinks = [...existingLinks, link];
  //     console.log("UPDATED LINKS: ", updatedLinks);
  //     await setDoc(userRef, { ...userData, links: updatedLinks });
  //     // Update the links state with the new link
  //     setLinks(updatedLinks);
  //   } else {
  //     await setDoc(userRef, { links: { link } });

  //     // Update the links state with the new link
  //     setLinks([link]);
  //   }
  //   setShowPopup(false);
  // };

  useEffect(() => {
    // const fetchLinks = async () => {
    //   try {
    //     const userRef = doc(db, "users", auth.currentUser.uid);
    //     const userDoc = await getDoc(userRef);

    //     if (userDoc.exists()) {
    //       const userData = userDoc.data();
    //       const existingLinks = Array.isArray(userData.links)
    //         ? userData.links
    //         : Object.values(userData.links || []);
    //       console.log("FETCH", existingLinks);
    //       setLinks(existingLinks);
    //     }
    //   } catch (error) {
    //     console.log("Error fetching links:", error);
    //   }
    // };

    const fetchLinks = async () => {
      try {
        if (auth.currentUser) {
          const userLinksRef = collection(db, "users", userUid, "links");
          const linksSnapshot = await getDocs(userLinksRef);
          const tempLinks = [];
          linksSnapshot.docs.map((doc) =>
            tempLinks.push({ ...doc.data(), id: doc.id })
          );
          console.log(tempLinks);
          setLinks(tempLinks);
        }
        // const userLinksRef = collection(
        //   db,
        //   "users",
        //   auth.currentUser.uid,
        //   "links"
        // );
        // const linksSnapshot = await getDocs(userLinksRef);
        // // const linksData = linksSnapshot.docs.map((doc) => doc.data());
        // const linksData = linksSnapshot.docs.forEach((doc) =>
        //   console.log(doc.data())
        // );
        // console.log("LINKS DATA: ", linksData);
        // setLinks(linksData);
      } catch (error) {
        console.log("Error fetching links:", error);
      }
    };

    fetchLinks();
  }, []);

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
          {links
            .sort(
              (prevLink, nextLink) => nextLink.createdAt - prevLink.createdAt
            )
            // .map((link, index) => (
            //   <LinkCard
            //     key={link.id}
            //     id={link.id}
            //     createdAt={link.createdAt}
            //     citeName={link.citeName}
            //     longURL={link.longURL}
            //     shortCode={link.shortCode}
            //     totalClicks={link.totalClicks}
            //     isLastItem={index === links.length - 1}
            //   />
            // ))
            .map((link, index) => (
              <LinkCard
                key={index}
                createdAt={link.createdAt}
                citeName={link.citeName}
                longURL={link.longURL}
                shortCode={link.shortCode}
                totalClicks={link.totalClicks}
                isLastItem={index === links.length - 1}
              />
            ))}
        </section>
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
