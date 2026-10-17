import humanitarianImg from './photos/484275292_1059927132841856_4963947503579971487_n.jpg';
import advocacyImg from './photos/116119166_3278615802196061_9102246731101345400_n.jpg';
import culturalImg from './photos/115987798_3278615208862787_2680382839843755344_n.jpg';
import educationImg from './photos/597930153_25480494818248175_6982073370529403630_n.jpg';

export interface Project {
  id: number;
  title: string;
  badge: string;
  description: string;
  thumbnail: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Humanitarian Assistance",
    badge: "Aid",
    description: "Providing critical support and emergency relief to Arakanese families in need, both locally and internationally.",
    thumbnail: humanitarianImg
  },
  {
    id: 2,
    title: "Rights Advocacy",
    badge: "Advocacy",
    description: "Dedicated to protecting and promoting the fundamental rights and welfare of the Arakanese people globally.",
    thumbnail: advocacyImg
  },
  {
    id: 3,
    title: "Cultural Preservation",
    badge: "Heritage",
    description: "Preserving the rich Arakanese cultural heritage through educational programs, community events, and traditional celebrations.",
    thumbnail: culturalImg
  },
  {
    id: 4,
    title: "Community Education",
    badge: "Education",
    description: "Empowering our youth and community members through scholarships, workshops, and resource accessibility.",
    thumbnail: educationImg
  }
];
