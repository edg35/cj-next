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
    <nav className="text-black rounded-sm bg-slate-100">
      <div>
        <div className="flex justify-between items-center py-4 h-full pr-4">
          <div className="flex flex-row gap-3">
            <Image
              src={"/pixelcut-export.png"}
              width={30}
              height={30}
              alt="logo"
              className="ml-6"
            />
            <h3 className="flex items-center font-bold text-md md:text-lg">
              CJ Environmental Solutions
            </h3>
          </div>

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
          className="md:hidden absolute top-16 right-6 w-48 bg-white shadow-lg rounded-md z-10"
        >
          <Link href="#services-section">
            <li className="px-4 py-2 hover:text-gray-600 cursor-pointer transition-all hover:font-semibold border-b">
              Services
            </li>
          </Link>
          <Link href="#about-us">
            <li className="px-4 py-2 hover:text-gray-600 cursor-pointer transition-all hover:font-semibold border-b">
              About
            </li>
          </Link>
          <Link href="#contact-us">
            <li className="px-4 py-2 hover:text-gray-600 cursor-pointer transition-all hover:font-semibold border-b">
              Contact
            </li>
          </Link>
          <Link href="#contact-us">
            <li className="px-4 py-2 cursor-pointer transition-all">
              Book Now
            </li>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
