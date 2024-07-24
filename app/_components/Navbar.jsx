"use client";

import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="text-black backdrop-blur-md rounded-sm bg-transparent bg-gradient-to-br from-accentglass to-primaryglass">
      <div>
        <div className="flex justify-between items-center py-4 h-full pr-4">
          <Image
            src={"/pixelcut-export.png"}
            width={30}
            height={30}
            alt="logo"
            className="ml-6"
          />

          <ul className="hidden md:flex align-middle h-10">
            <li className="px-4 flex items-center hover:text-gray-600 cursor-pointer transition-all hover:font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="px-4 flex items-center hover:text-gray-600 cursor-pointer transition-all hover:font-semibold">
              <Link href="#services-section">Services</Link>
            </li>
            <li className="px-4 flex items-center hover:text-gray-600 cursor-pointer transition-all hover:font-semibold">
              <Link href="#about-us">About</Link>
            </li>
            <li className="px-4 flex items-center hover:text-gray-600 cursor-pointer transition-all hover:font-semibold">
              <Link href="#contact-us">Contact</Link>
            </li>
            <li className="px-4 mx-2 border rounded-md bg-primary text-white flex items-center cursor-pointer hover:bg-accent transition-all">
              <Link href="#contact-us">Book Now</Link>
            </li>
          </ul>
          <Button
            className="md:hidden bg-transparent hover:bg-transparent"
            onClick={toggleDropdown}
          >
            <MenuIcon className="text-black" />
          </Button>
        </div>
      </div>

      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="md:hidden absolute top-16 right-6 w-48 bg-white shadow-lg rounded-md z-1"
        >
          <ul className="flex flex-col">
            <li className="px-4 py-2 hover:text-gray-600 cursor-pointer transition-all hover:font-semibold border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="px-4 py-2 hover:text-gray-600 cursor-pointer transition-all hover:font-semibold border-b">
              <Link href="#services-section">Services</Link>
            </li>
            <li className="px-4 py-2 hover:text-gray-600 cursor-pointer transition-all hover:font-semibold border-b">
              <Link href="#about-us">About</Link>
            </li>
            <li className="px-4 py-2 hover:text-gray-600 cursor-pointer transition-all hover:font-semibold border-b">
              <Link href="#contact-us">Contact</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer transition-all">
              <Link href="#contact-us">Book Now</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
