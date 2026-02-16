import {
  BoltIcon,              
  WrenchScrewdriverIcon, 
  BuildingOffice2Icon,  
  Cog6ToothIcon,        
  HomeModernIcon,       
} from "@heroicons/react/24/outline";
import type { ComponentType } from "react";
export type Service = {
  title: string;
  desc: string;
  icn: ComponentType<{ className?: string }>;
};

export const services: Service[] = [
  {
    title: "High-Rise Maintenance",
    desc: "Comprehensive maintenance services for high-rise residential and commercial buildings.",
    icn: BuildingOffice2Icon
  },
  {
    title: "Electrical Systems",
    desc: "Troubleshooting, installations, and safe upgrades for residential electrical systems.",
    icn: BoltIcon
  },
  {
    title: "Plumbing Repairs",
    desc: "Leak detection, fixture replacement, pipe repairs, and general plumbing solutions.",
    icn: WrenchScrewdriverIcon
  },
  {
    title: "Carpentry",
    desc: "Precision carpentry work including framing, trim, cabinetry, and custom repairs.",
    icn: HomeModernIcon
  },
  {
    title: "Appliance Installation",
    desc: "Professional installation of household appliances with clean and efficient setup.",
    icn: Cog6ToothIcon
  },
  {
    title: "Full Unit Turnovers",
    desc: "Complete unit preparation including repairs, upgrades, and readiness for new tenants.",
    icn: HomeModernIcon
  }
];