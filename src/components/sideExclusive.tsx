import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Exclusive = () => {
  // Array of objects for menu items
  const menuItems = [
    { text: "Woman's Fashion", path: '/', hasArrow: true },
    { text: "Men's Fashion", path: '/', hasArrow: true },
    { text: "Electronics", path: '/' },
    { text: "Home & Lifestyle", path: '/' },
    { text: "Medicine", path: '/' },
    { text: "Sports & Outdoor", path: '/' },
    { text: "Baby's & Toys", path: '/' },
    { text: "Groceries & Pets", path: '/' },
    { text: "Health & Beauty", path: '/' },
  ];

  return (
    <section className="w-fit hidden md:block">
      <ul className="flex flex-col gap-y-3 xl:gap-y-4">
        {menuItems.map((item, index) => (
          <li key={index} className="leading-loose hover:underline cursor-pointer">
            <Link className="flex items-center justify-between gap-x-4 lg:gap-x-14" href={item.path}>
              <span className="text-sm lg:text-base">{item.text}</span>
              {item.hasArrow && <FaAngleRight className="text-sm" />}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Exclusive;