import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface TrailStep {
  letter: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface ClientSuccess {
  name: string;
  result: string;
  metric: string;
}
