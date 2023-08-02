import { Line } from "../../components/Icon";
import FaqData from "./FaqData";

const Faq = () => {
  return (
    <section className="p-8 my-0 mx-auto w-3/4" id="faqs">
      <span className="flex items-center justify-center">
        <Line className={"h-6 px-3"} />
        <h1 className="py-4 text-lg font-bold">FAQS</h1>
      </span>

      {/* <section> */}
      <FaqData />
      {/* </section> */}
    </section>
  );
};

export default Faq;
