import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'A short story of me';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="About"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, i'm Farel</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
      Hi, I'm Farel! I'm a student at SMKN 1 Banjar with a strong passion for information technology. Currently, I'm an active member of the student council (OSIS) in the IT department, where I help manage various tech-related activities at school.

I have a growing interest in programming and web development, and I’m always looking to expand my knowledge in coding and web design. I enjoy working collaboratively and love taking on new challenges in the tech world.
      </p>
      <p>
      Outside of technology, I like spending my free time playing games and keeping up with the latest digital trends. I believe technology can be a powerful tool to solve problems and bring positive change to society.
      </p>
    </motion.section>
  );
};
