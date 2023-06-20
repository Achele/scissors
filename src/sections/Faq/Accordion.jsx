import { useState } from "react";
import { MinusIcon, PlusIcon } from "../../components/Icon";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="bg-chat-gray-bg border rounded border-disabled-btn">
      <button
        className="w-full flex items-center justify-between p-3  focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="font-medium">{title}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </button>
      {isOpen && (
        // <summary>
        <p className="text-gray-700 flex items-center px-3 pb-3">{content}</p>
        // </summary>
      )}
    </article>
  );
};

export default Accordion;
