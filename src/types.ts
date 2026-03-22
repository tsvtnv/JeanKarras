/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Achievement {
  year: string;
  title: string;
  category: string;
  result: string;
}

export interface CareerMilestone {
  year: string;
  title: string;
  description: string;
  category: 'Karting' | 'Formula' | 'GT' | 'Other';
}

export interface GalleryItem {
  id: string;
  url: string;
  category: 'Action' | 'Podium' | 'Portrait' | 'Behind the Scenes';
  title: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  website?: string;
}

export interface NavItem {
  name: string;
  href: string;
}
