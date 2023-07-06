import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";

const LinkRedirect = () => {
  const { shortCode } = useParams();

  useEffect(() => {
    const fetchLinkDoc = async () => {
      const linkRef = doc(db, "links", shortCode);
      const linkDoc = await getDoc(linkRef);
      if (linkDoc.exists) {
        const { longURL } = linkDoc.data();
        window.location.href = longURL;
      }
    };
    fetchLinkDoc();
  }, []);

  return <div>link redirect</div>;
};

export default LinkRedirect;
