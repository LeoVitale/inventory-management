'use client';

import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  LucideIcon,
  Menu,
  SlidersHorizontal,
  User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === '/' && href === '/dashboard');

  return (
    <Link href={href}>
      <div
        className={`flex cursor-pointer items-center ${
          isCollapsed
            ? 'justify-center py-4'
            : 'justify-start px-8 py-4'
          } gap-3 transition-colors hover:bg-blue-100 hover:text-blue-500 ${
          isActive ? 'bg-blue-200 text-white' : '' } }`}
      >
        <Icon className="h-6 w-6 !text-gray-700" />

        <span
          className={`${isCollapsed ? 'hidden' : 'block'} font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const sidebarClassNames = `fixed flex flex-col w-72 md:w-64 bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div
        className={
          'flex items-center justify-between gap-3 px-8 pt-8 md:justify-normal'
        }
      >
        <Image
          src="https://img.logoipsum.com/300.svg"
          alt="edstock-logo"
          width={27}
          height={27}
          className="w-8 rounded"
        />
        <h1 className={'block text-2xl font-extrabold'}>EDSTOCK</h1>

        <button className="rounded-full bg-gray-100 px-3 py-3 hover:bg-blue-100 md:hidden">
          <Menu className="h-4 w-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="mt-8 flex-grow">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={false}
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={false}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={false}
        />
        <SidebarLink
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={false}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={false}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={false}
        />
      </div>

      {/* FOOTER */}
      <div className={'mb-10 block'}>
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 Edstock
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
