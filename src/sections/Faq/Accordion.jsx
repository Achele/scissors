import { useState } from "react";
import { MinusIcon, PlusIcon } from "../../components/Icon";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="  border-b-2 rounded ">
      <button
        className="w-full flex items-center justify-between p-3  focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="font-medium py-2">{title}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </button>
      {isOpen && (
        // <summary>
        <p className="text-gray-700 flex items-center px-3 pb-3 text-sm">
          {content}
        </p>
        // </summary>
      )}
    </article>
  );
};

export default Accordion;
