import { motion } from 'framer-motion';
import { IconBallpen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Education = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My education history';
  // mockup education data
  const educations = [
    {
      id: 1,
      image: '/vite.svg',
      position: 'SDN 1 Panulisan',
      startDate: '2013',
      endDate: '2019',
      duration: '6 years',
      location: 'Panulisan',
    },
    {
      id: 1,
      image: '/vite.svg',
      position: 'SMPN 2 Dayeuhluhur',
      startDate: '2019',
      endDate: '2022',
      duration: '3 years',
      location: 'Mergosari',
    },
    {
      id: 3,
      image: '/vite.svg',
      position: 'SMKN 1 Banjar',
      startDate: '2022',
      endDate: '2025',
      duration: '3 years',
      location: 'Banjar', 
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconBallpen />}
        label="Education"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {educations.map((education) => (
          <CommonCard key={education.id} {...education} />
        ))}
      </div>
    </motion.section>
  );
};
