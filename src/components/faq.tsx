import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Faq() {
  const faqs = [
    {
      question: "Are my cryptocurrencies safe with Holdr wallet?",
      answer:
        "Yes! We use industry-leading encryption and provide 2FA for added protection.",
    },
    {
      question: "How do I recover my wallet if I lose my phone?",
      answer:
        "You can easily recover your wallet using your recovery seed phrase.",
    },
    {
      question: "What cryptocurrencies are supported?",
      answer:
        "We support over 100+ cryptocurrencies, including Bitcoin, Ethereum, and more.",
    },
    {
      question: "Are there any fees?",
      answer:
        "Our wallet charges minimal transaction fees, with no hidden costs.",
    },
  ];
  const [expanded, setExpanded] = useState<number[]>([]);
  const handleClick = (index: number) => {
    setExpanded((prev) =>
      prev.includes(index)
        ? prev.filter((element) => element !== index)
        : [...prev, index]
    );
  };
  return (
    <section className="text-center py-10 px-2 lg:px-10">
      <h2 className="text-3xl lg:text-5xl font-semibold pb-1">Frequently asked questions</h2>
      <div className="flex flex-col m-10 divide-y divide-neutral-800 border border-neutral-800 rounded-xl bg-neutral-950 text-left">
        {faqs.map((faq, index) => {
          const isExpanded = expanded.includes(index);
          return (
            <button
              type="button"
              className="p-5"
              key={faq.question}
              onClick={() => handleClick(index)}
            >
              <div className="flex items-center gap-2 text-neutral-400">
                <motion.div
                  initial={{
                    transform: "rotate(0)",
                  }}
                  animate={{
                    transform: isExpanded ? "rotate(-180deg)" : "rotate(0deg)",
                  }}
                >
                  <FaAngleDown size={20} />
                </motion.div>
                <span className="text-xl font-semibold text-left">
                  {faq.question}
                </span>
              </div>
              <motion.p className="bg-red-90 text-left overflow-hidden"
                initial={{ height: "0px" }}
                animate={{ height: isExpanded ? "fit-content" : "0px", marginTop: isExpanded ? "4px" : "0px" }}
              >
                {faq.answer}
              </motion.p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
