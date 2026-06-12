/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Achievement, CareerMilestone, GalleryItem, NavItem, Sponsor } from './types';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Career', href: 'career' },
  { name: 'Gallery', href: 'gallery' },
  { name: 'Sponsors', href: 'sponsors' },
  { name: 'Contact', href: 'contact' },
];

export const ACHIEVEMENTS: Achievement[] = [
  { year: '2025', title: 'Greek Champion', category: 'Senior', result: '1st Place' },
  { year: '2024', title: 'IAME Series Greece', category: 'X30 Senior', result: 'Top 3 Overall' },
  { year: '2023', title: 'Greek Karting Championship', category: 'Junior', result: 'Vice Champion' },
  { year: '2022', title: 'Winter Cup Greece', category: 'Junior', result: '1st Place' },
];

export const CAREER_TIMELINE: CareerMilestone[] = [
  {
    year: '2025',
    title: 'Greek Senior Champion',
    description: 'Dominant season in the Senior category, securing the national title with multiple wins.',
    category: 'Karting',
  },
  {
    year: '2024',
    title: 'International Debut',
    description: 'Participated in European IAME events, gaining valuable experience at the highest level of karting.',
    category: 'Karting',
  },
  {
    year: '2023',
    title: 'Junior Category Success',
    description: 'Consistent podium finishes throughout the season, finishing as Vice Champion.',
    category: 'Karting',
  },
  {
    year: '2021',
    title: 'The Beginning',
    description: 'Started competitive karting, showing immediate pace and race craft.',
    category: 'Karting',
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: '1',
    url: '/122A0269.jpg',
    category: 'Action',
    title: 'F4 Pit Lane Exit',
  },
  {
    id: '2',
    url: '/DSC09734.jpg',
    category: 'Portrait',
    title: 'The #14 Signature Helmet',
  },
  {
    id: '3',
    url: '/122A7860.jpg',
    category: 'Podium',
    title: 'Champagne Celebration',
  },
  {
    id: '4',
    url: '/KARRAS_F4CHESTE_1025_D-MD.4.jpg',
    category: 'Action',
    title: 'Wheel-to-Wheel at Cheste',
  },
  {
    id: '5',
    url: '/DSC08359.jpg',
    category: 'Action',
    title: 'Mastering the Rain',
  },
  {
    id: '6',
    url: '/JeanPaulF4Barcelona-SATURDAY-15.jpg',
    category: 'Portrait',
    title: 'Focused in the Cockpit',
  },
  {
    id: '7',
    url: '/285A2248.jpg',
    category: 'Action',
    title: 'Precision at the Apex',
  },
  {
    id: '8',
    url: '/BA8A8633.jpg',
    category: 'Behind the Scenes',
    title: 'Pit Lane Preparation',
  },
  {
    id: '9',
    url: '/IMG-20251116-WA0007.jpg',
    category: 'Podium',
    title: 'F4 Spain Barcelona Podium',
  },
  {
    id: '10',
    url: '/GK__0182.jpg',
    category: 'Action',
    title: 'Kart #14 Through the Corner',
  },
  {
    id: '11',
    url: '/MOT_SWC_NB-3643.jpg',
    category: 'Portrait',
    title: 'Overhead Cockpit View',
  },
  {
    id: '12',
    url: '/GK__4649.jpg',
    category: 'Podium',
    title: 'Chequered Flag Victory',
  },
  {
    id: '13',
    url: '/285A6456.jpg',
    category: 'Action',
    title: 'Pit Lane Speed',
  },
  {
    id: '14',
    url: '/_DSC6333.jpg',
    category: 'Portrait',
    title: 'J. Karras #14 Helmet Detail',
  },
  {
    id: '15',
    url: '/122A1402.jpg',
    category: 'Action',
    title: 'Circuito de Jerez Run',
  },
  {
    id: '16',
    url: '/285A2428.jpg',
    category: 'Action',
    title: 'Sweeping Through the Curves',
  },
  {
    id: '17',
    url: '/GK__4668.jpg',
    category: 'Podium',
    title: 'Victory Lap with the Flag',
  },
  {
    id: '18',
    url: '/MOT_SWC_NB-7125.jpg',
    category: 'Portrait',
    title: 'Eyes on the Prize',
  },
  {
    id: '19',
    url: '/122A4497.jpg',
    category: 'Action',
    title: 'Wet Weather Battle at Jerez',
  },
  {
    id: '20',
    url: '/KARRAS_F4CHESTE_1025_D-MD.6.jpg',
    category: 'Behind the Scenes',
    title: 'Grid Preparation at Cheste',
  },
  {
    id: '21',
    url: '/POR_SWC_SR-1488.jpg',
    category: 'Action',
    title: 'Pit Exit Under Blue Skies',
  },
  {
    id: '22',
    url: '/285A6499.jpg',
    category: 'Action',
    title: 'Crossing the Start-Finish Line',
  },
  {
    id: '23',
    url: '/JeanPaulKarrasF4SpainBarcelona-SUNDAY-9.jpg',
    category: 'Behind the Scenes',
    title: 'Grid Walk at Barcelona',
  },
  {
    id: '24',
    url: '/GK__5290.jpg',
    category: 'Action',
    title: 'Leading the Pack in Karting',
  },
  {
    id: '25',
    url: '/122A0674.jpg',
    category: 'Behind the Scenes',
    title: 'Garage Detail Shot',
  },
  {
    id: '26',
    url: '/K___0120.jpg',
    category: 'Behind the Scenes',
    title: 'Kart #14 Pre-Race',
  },
  {
    id: '27',
    url: '/285A1888.jpg',
    category: 'Action',
    title: 'F4 Race Start',
  },
  {
    id: '28',
    url: '/DSC06901.jpg',
    category: 'Portrait',
    title: 'Helmet On - Game Time',
  },
  {
    id: '29',
    url: '/IMG_20250731_195135_694.webp',
    category: 'Podium',
    title: 'Champion with the Chequered Flag',
  },
  {
    id: '30',
    url: '/285A6776.jpg',
    category: 'Portrait',
    title: 'Ready to Race',
  },
  {
    id: '31',
    url: '/F4 Spain Barcelona - Saturday-08.jpg',
    category: 'Behind the Scenes',
    title: 'F4 Barcelona Pit Garage',
  },
  {
    id: '32',
    url: '/JeanPaulKarrasF4SpainBarcelona-SUNDAY-7.jpg',
    category: 'Portrait',
    title: 'Cockpit Dashboard View',
  },
  {
    id: '33',
    url: '/IMG-20251117-WA0012.jpg',
    category: 'Behind the Scenes',
    title: 'Barcelona Grid Formation',
  },
];

export const SPONSORS: Sponsor[] = [
  { name: 'Sparco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Sparco_logo.svg/2560px-Sparco_logo.svg.png' },
  { name: 'Bell Helmets', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bell_Helmets_logo.svg/2560px-Bell_Helmets_logo.svg.png' },
  { name: 'IAME', logo: 'https://www.iamemotors.com/wp-content/uploads/2021/03/logo-iame-motors.png' },
  { name: 'Alpinestars', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Alpinestars_logo.svg/2560px-Alpinestars_logo.svg.png' },
];

export const DRIVER_STATS = [
  { label: 'Nationality', value: 'Greek / French' },
  { label: 'Born', value: '2008' },
  { label: 'Number', value: '#14' },
  { label: 'Category', value: 'Senior / Formula 4 Prep' },
  { label: 'Championships', value: '1' },
  { label: 'Podiums', value: '24+' },
];
