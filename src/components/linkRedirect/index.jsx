import { doc, getDoc, updateDoc, runTransaction } from "firebase/firestore";
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
          totalClicks: increment(1), // Increment the totalClicks value by 1
        });
        window.location.href = longURL;
        setIsValidLink(true);
      } else {
        setIsValidLink(false);
      }
      setLoading(false);
    };
    fetchLinkDoc();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : isValidLink ? (
        <h1>Redirecting to the link</h1>
      ) : (
        <h1 className="w-1/2 my-4 mx-auto text-primary">Link not valid</h1>
      )}
    </div>
  );
};

export default LinkRedirect;
