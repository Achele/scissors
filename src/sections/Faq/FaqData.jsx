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
    {
      title: "Are the shortened links permanent? Will they expire?",
      content: "COMING SOON",
    },
    {
      title: "Are there any limitations on the number of URLs I can shorten?",
      content: "COMING SOON",
    },
    {
      title:
        "Can I customize the shortened URLs to reflect my brand or content?",
      content: "COMING SOON",
    },
    {
      title: "Can I track the performance of my shortened URLs?",
      content: "COMING SOON",
    },
    {
      title:
        "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
      content: "COMING SOON",
    },
    {
      title:
        "Is there an API available for integrating the URL shortening service into my own applications or websites?",
      content: "COMING SOON",
    },
    {
      title: "What is a QR code and what can it do?",
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
