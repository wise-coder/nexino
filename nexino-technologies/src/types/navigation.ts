export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface MegaMenuServiceItem {
  label: string;
  href: string;
  description?: string;
}

export interface MegaMenuServiceColumn {
  heading: string;
  items: MegaMenuServiceItem[];
}

export interface MegaMenuIndustryItem {
  label: string;
  href: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  megaMenu?: 'services' | 'industries';
}
