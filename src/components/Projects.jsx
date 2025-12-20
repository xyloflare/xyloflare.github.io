import { projects } from "@/js/content";
import { motion } from "motion/react";

const Projects = () => {
  const parentVariants = {
    hidden: {
      letterSpacing: "0.1em",
      fontWeight: "300",
      scaleY: 0
    },
    hover: {
      fontWeight: "500",
      letterSpacing: "0.15em",
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.05,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <div class="font-normal mb-4">Projects</div>
      <div class="">
        {projects.map((item, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            animate={{scaleY: 1}}
            whileHover="hover"
            class={`py-4 border-t relative group text-end tracking-wider ${projects.length == idx+1 && 'border-b'}`}
            variants={parentVariants}
          >
            <motion.img
              variants={imageVariants}
              src={item.image}
              width="100"
              alt=""
              class="absolute top-[50%] -translate-y-[50%] border left-4 w-72 rounded-2xl z-10 aspect-video pointer-events-none"
            />
            {item.title}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
