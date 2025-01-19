import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "./ui/accordion";

const faqData = [
  {
    value: "item1",
    question: "What is this platform about?",
    answer:
      "This platform streamlines video editing and publishing, enabling creators to manage their content efficiently with features like secure uploads, approval workflows, and direct YouTube publishing.",
  },
  {
    value: "item2",
    question: "How do I upload a video for approval?",
    answer:
      "To upload a video, simply go to the 'Uploads' section of the platform, add your video, and include metadata like title, description, and tags. The process is secure and user-friendly.",
  },
  {
    value: "item3",
    question: "Can I edit videos after uploading them?",
    answer:
      "Yes! You can request edits or make modifications to videos even after uploading them. Editors will be notified immediately to take action based on your feedback.",
  },
  {
    value: "item4",
    question: "Is my YouTube account secure when I use this platform?",
    answer:
      "Absolutely. We use OAuth to authenticate your YouTube account, ensuring that your login credentials remain private. This allows us to upload videos securely without requiring full account access.",
  },
  {
    value: "item5",
    question: "What kind of support is available if I need help?",
    answer:
      "We offer 24/7 customer support via email, chat, and a comprehensive help center to assist you with any questions or technical issues.",
  },
];

const FrequentAskedQuestions = () => {
  return (
    <div>
      <h1 className="text-center font-medium text-xl mt-12">
        Frequently Asked Questions
      </h1>
      <Accordion
        type="single"
        collapsible
        className="mx-auto px-12 md:px-20 mt-10"
      >
        {faqData.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-sm md:text-base font-thin ">
              {question}
            </AccordionTrigger>
            <AccordionContent className="font-thin text-xs md:text-xm text-black/70 dark:text-gray-300">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FrequentAskedQuestions;
