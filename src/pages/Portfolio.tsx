import { motion } from 'framer-motion';
import { IconBrandCodepen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';

export const Portfolio = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my portfolio projects';

  const portfolios = [
    {
      id: 1,
      name: 'Portfolio Project 1',
      image: 'portfolio 1.png',
      link: 'https://store.edudi.id/',
      description: 'Project ini adalah platform e-commerce untuk menjual produk pendidikan digital secara online.',
    },
    {
      id: 2,
      name: 'Portfolio Project 2',
      image: 'portfolio 2.png',
      link: 'https://style.edudi.id/',
      description: 'Project ini adalah website yang menyediakan layanan style fashion untuk pengguna.',
    },
    {
      id: 12,
      name: 'Bakery Project',
      image: 'bakery.png',
      link: 'https://bakery-pastry-farelxd.netlify.app/',
      description: 'Website ini menampilkan informasi tentang toko bakery dan pastry dengan menu digital interaktif.',
    },
    {
      id: 13,
      name: 'Personal Portfolio',
      image: 'rell.png',
      link: 'https://farelxd.netlify.app/#portfolios',
      description: 'Sebuah portfolio pribadi yang menampilkan pengalaman, keterampilan, dan proyek-proyek yang telah dikerjakan.',
    },
    {
      id: 15,
      name: 'IM-VI Project',
      image: 'project.png',
      link: 'https://www.im-vi.com/',
      description: 'Project ini adalah website untuk memperkenalkan brand fashion dengan tampilan yang modern dan stylish.',
    },
    {
      id: 16,
      name: 'Job Seekers',
      image: 'loker.png',
      link: 'https://jobseekers.id/',
      description: 'Website ini adalah platform pencarian lowongan kerja untuk membantu pencari kerja menemukan peluang baru.',
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
        icon={<IconBrandCodepen />}
        label="Portfolio"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <ProjectCard key={portfolio.id} {...portfolio} />
        ))}
      </div>
    </motion.section>
  );
};
