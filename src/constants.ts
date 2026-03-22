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
    url: 'https://picsum.photos/seed/kart-racing-1/1200/800',
    category: 'Action',
    title: 'Championship Decider at Night',
  },
  {
    id: '2',
    url: 'https://picsum.photos/seed/driver-focus/800/1200',
    category: 'Portrait',
    title: 'The Zone: Pre-Race Rituals',
  },
  {
    id: '3',
    url: 'https://picsum.photos/seed/podium-win/1200/1200',
    category: 'Podium',
    title: 'Victory in the Greek Senior Cup',
  },
  {
    id: '4',
    url: 'https://picsum.photos/seed/racing-team/1200/800',
    category: 'Behind the Scenes',
    title: 'Engineering for Perfection',
  },
  {
    id: '5',
    url: 'https://picsum.photos/seed/kart-wet/800/1200',
    category: 'Action',
    title: 'Mastering the Rain',
  },
  {
    id: '6',
    url: 'https://picsum.photos/seed/kart-corner/1200/800',
    category: 'Action',
    title: 'Precision at the Apex',
  },
  {
    id: '7',
    url: 'https://picsum.photos/seed/helmet-detail/1200/800',
    category: 'Portrait',
    title: 'The #14 Signature Helmet',
  },
  {
    id: '8',
    url: 'https://picsum.photos/seed/paddock-life/800/1200',
    category: 'Behind the Scenes',
    title: 'Paddock Preparation',
  },
  {
    id: '9',
    url: 'https://picsum.photos/seed/trophy-close/1200/1200',
    category: 'Podium',
    title: 'Hardware for the Cabinet',
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
