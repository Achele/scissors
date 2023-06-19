import Accordion from "./Accordion";

const FaqData = () => {
  const faqs = [
    {
      title: "How does URL shortening work?",
      content:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
    },
    {
      title:
        "Is it necessary to create an account to use the URL shortening service?",
      content: "COMING SOON",
    },
  ];
  return (
    <div>
      {faqs.map((faq, index) => (
        <Accordion key={index} title={faq.title} content={faq.content} />
      ))}
    </div>
  );
};
export default FaqData;
