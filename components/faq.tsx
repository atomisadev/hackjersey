import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions: { question: string; answer: string }[] = [
  {
    question: "Who can attend?",
    answer:
      "Any high school student is welcome to attend! You must bring your high school ID or some form of photo identification to prove your age. You may attend if you are at least 13 years old, this includes middle school! Absolutely no coding experience is necessary.",
  },
  {
    question: "When will this event be held?",
    answer:
      "As of right now, event dates are not finalized. However, the plan is to host the event winter, February 2025.",
  },
  {
    question: "I've never been to a hackathon before, what do I do?",
    answer:
      "You can let us know that this is your first time in your application. hackJersey is designed with first time hackers in mind, and we have many mentors and workshops that will guide you to your hackathon success! First time hackers will have their own category, as to make it more fair!",
  },
  {
    question: "How long will the event last?",
    answer:
      "As of right now, as hackJersey is in its early stages, the event is planned to last for 24 hours. Although, this is heavily subject to change.",
  },
  {
    question: "I'm unable to come due to distance, what can I do?",
    answer:
      "Traveling by car, bus, or train? The Hack Club Gas Fund can reimburse your costs. As hackJersey will be a Hack Club hackathon listed on their website, you just need to upload a receipt of your travel!",
  },
  {
    question: "Who's running this?",
    answer:
      "hackJersey is a fiscally sponsored 501(c)(3) registered nonprofit under The Hack Foundation. hackJersey is led entirely by high school students, akin to yourself. We're part of Hack Club, an 8-year-old nonprofit organization whose mission is to foster a wholesome generation of coders, makers, founders, and builders.",
  },
];

export default function Faq() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-24">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-4xl lg:text-6xl text-center font-bold mb-12 lg:mb-24"
        >
          FAQ
        </motion.h1>
        <Accordion
          type="single"
          collapsible
          className="text-xl text-white/90 mx-4 md:w-3/5"
        >
          {questions.map((q, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="font-semibold text-left">
                {q.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-white/80">
                {q.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
