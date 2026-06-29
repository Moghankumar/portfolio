export interface Experience {
  id: string;
  role: string;
  company: string;
  client?: string;
  duration: string;
  current?: boolean;
  description?: string;
  bullets: string[];
}

export interface Project {
  id: string;
  icon: string;
  domain: string;
  title: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  icon: string;
  title: string;
  tags: string[];
}

export interface Certification {
  id: string;
  icon: string;
  title: string;
  issuer: string;
  date: string;
  highlighted?: boolean;
}

export interface ContactItem {
  id: string;
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface NavLink {
  href: string;
  label: string;
}
