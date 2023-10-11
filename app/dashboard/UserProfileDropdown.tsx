import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image"; // Assuming you're using Next.js

interface UserProfileDropdownProps {
  session: any; // Replace 'any' with the actual type of your session data
  signOut: () => void; // Adjust the type according to your signOut function
  userNavigation: { name: string; href: string }[]; // Adjust the type as needed
}

const UserProfileDropdown: React.FC<UserProfileDropdownProps> = ({ session, signOut, userNavigation }) => {
  return (
    
    <Menu as="div" className="relative">
      <Menu.Button className="-m-1.5 flex items-center p-1.5">
        <span className="sr-only">Open user menu</span>
        {session?.data?.user?.image ? (
          <div className="relative h-10 w-10">
            <Image
              src={session.data.user.image}
              alt={session.data.user.image}
              className="inline-block rounded-full"
              fill
            />
          </div>
        ) : (
          <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100">
            <svg
              className="h-full w-full text-stone-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        )}
        <span className="hidden lg:flex lg:items-center">
          <span
            className="ml-4 text-sm font-semibold leading-6 text-gray-900"
            aria-hidden="true"
          >
            {session?.data?.user?.name}
          </span>
          <ChevronDownIcon
            className="ml-2 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </Menu.Button>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) =>
                item.name === "Sign out" ? (
                  <button
                    onClick={signOut}
                    className={
                      active
                        ? "bg-gray-50"
                        : "block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer"
                    }
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={
                      active
                        ? "bg-gray-50"
                        : "block px-3 py-1 text-sm leading-6 text-gray-900"
                    }
                  >
                    {item.name}
                  </a>
                )
              }
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
   
    
  );
};

export default UserProfileDropdown;
