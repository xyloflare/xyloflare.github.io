import { about } from "@/js/content";
import { motion } from "motion/react";

const TechList = () => {
  const pv = {
    initial: { scale: 1 },
    hover: { scale: 1.3, transition: { delay: 0.05 } },
  };
  const tv = {
    initial: { opacity: 0 },
    hover: { opacity: 0.9 },
  };
  return (
    <div>
      {about.skills.map((item, idx) => {
        return (
          <motion.div
            initial="initial"
            whileHover="hover"
            variants={pv}
            key={idx}
            className="relative rounded-xl border-2 inline-flex justify-center items-center mb-2 mr-2 w-fit p-2"
          >
            <img
              src={item.icon}
              alt={item.text}
              width="28"
              height="28"
              className="inline aspect-square opacity-90"
            />
            <motion.div
              variants={tv}
              className="absolute text-xs font-normal rounded-sm px-1 bottom-[-4%] translate-y-full backdrop-blur-sm h-fit z-20 line-clamp-1 w-max "
            >
              {item.text}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default TechList;
