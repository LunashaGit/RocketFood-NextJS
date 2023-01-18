'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Transition, Menu } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import userImg from './../../public/images/user.png';

const routes = [
  { href: '/', name: 'Home' },
  { href: '/categories', name: 'Categories' },
  { href: '/orders', name: 'Orders' },
  { href: '/testing', name: 'Testing' },
];

export default function Navigation() {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <nav className="max-w-7xl mx-auto w-full p-4 flex justify-between">
      <Link href="/account">
        <Image
          src={userImg}
          alt="User image"
          placeholder="blur"
          className="w-10 h-10"
        />
      </Link>
      <Menu as="div" className="relative inline-block z-1">
        <div>
          <Menu.Button
            className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 drop-shadow-2xl"
            onClick={() => setToggle(!toggle)}
          >
            <Bars3Icon
              className=" h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          show={toggle}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
            {routes.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <Link
                    className={`${
                      active ? 'bg-[#70c4bc] text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
}
