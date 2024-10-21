import { motion } from 'framer-motion';
import {
  IconCodeCircle,
  IconBrandReact,
  IconBrandHtml5,
  IconBrandBootstrap,
  IconBrandJavascript,
  IconBrandCakephp,
  IconBrandCss3,
  IconBrandWordpress,
  IconBrandNuxt,
  IconBrandSvelte,
  IconBrandTailwind,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';

export const Skills = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my skills';
  // mockup skills data
  const skills = [
    { label: 'WORDPRES', icon: <IconBrandWordpress/> },
    { label: 'PHP', icon: <IconBrandCakephp/> },
    { label: 'HTML', icon: <IconBrandHtml5 /> },
    { label: 'CSS', icon: <IconBrandCss3 /> },
    { label: 'BOOTSTRAP', icon: <IconBrandBootstrap /> },
    { label: 'JAVA SCRIPT', icon: <IconBrandJavascript/> },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconCodeCircle />}
        label="Skills"
        description={sectionDescription}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
        {skills.map((skill) => (
          <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </motion.section>
  );
};
