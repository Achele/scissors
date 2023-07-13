import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import Loading from "../Loader";
import { increment } from "firebase/firestore";

const LinkRedirect = () => {
  const { shortCode } = useParams();
  const [loading, setLoading] = useState(true);
  const [isValidLink, setIsValidLink] = useState(false);

  useEffect(() => {
    const fetchLinkDoc = async () => {
      const linkRef = doc(db, "links", shortCode);
      const linkDoc = await getDoc(linkRef);

      if (linkDoc.exists()) {
        const { longURL, linkID, userUid } = linkDoc.data();
        const userLinksRef = doc(db, "users", userUid, "links", linkID);
        await updateDoc(userLinksRef, {
          totalClicks: increment(1),
        });
        window.location.href = longURL;
        setIsValidLink(true);
      } else {
        setIsValidLink(false);
      }
      setLoading(false);
    };
    fetchLinkDoc();
  }, [shortCode]);
  return (
    <div className="w-1/2 my-12 mx-auto">
      {loading ? (
        <Loading />
      ) : isValidLink ? (
        <span className="">
          <Loading />
          <h1 className="text-center font-extrabold text-primary">
            Redirecting to the link....
          </h1>
        </span>
      ) : (
        <h1 className="w-1/2 my-4 mx-auto text-primary">Link not valid</h1>
      )}
    </div>
  );
};

export default LinkRedirect;
