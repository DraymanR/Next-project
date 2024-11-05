import React from 'react';
import Link from 'next/link';
import { NavItem } from "@/app/types/navBar";

const navItems: NavItem[] = [
  { name: 'home', href: '/pages/home' },
  { name: 'login', href: '/pages/login' },
  { name: 'services', href: '/pages/services' },
  { name: 'contact', href: '/pages/contact' },
  { name: 'todos', href: '/pages/todos' },

];

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500">
        <div className="flex items-center justify-between h-16">

          <div className="text-lg font-bold text-white">
            MyBrand
          </div>

          <div className="flex ml-auto space-x-4">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
