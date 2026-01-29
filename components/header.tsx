"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    isHome: true,
  },
  {
    label: "News",
    href: "#",
    children: [
      { label: "News", href: "/bitcoin-association-switzerland" },
      { label: "Archive", href: "/archive" },
    ],
  },
  {
    label: "Events",
    href: "#",
    children: [
      { label: "Roadshow 2025", href: "/roadshow-2025" },
      { label: "Bitcoin Meetup (Zurich)", href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland/" },
      { label: "Bitcoin Meetup Geneva", href: "https://www.meetup.com/Bitcoin-Meetup-Geneva" },
      { label: "Bitcoin Meetup Luzern", href: "https://www.meetup.com/Bitcoin-Meetup-Luzern/" },
      { label: "Bitcoin Meetup Neuchatel", href: "https://www.meetup.com/Bitcoin-Meetup-Neuchatel/" },
      { label: "Bitcoin Meetup Basel", href: "https://www.meetup.com/bitcoin-meetup-basel/" },
    ],
  },
  {
    label: "Membership",
    href: "#",
    children: [
      { label: "Private", href: "/private" },
      { label: "Corporate", href: "/corporate" },
      { label: "Our Corporate Members", href: "/our-corporate-members" },
    ],
  },
  {
    label: "Participate",
    href: "/meetups-events",
  },
  {
    label: "About",
    href: "#",
    children: [
      { label: "About", href: "/about-1" },
      { label: "Board", href: "/board" },
      { label: "Finances", href: "/finances" },
      { label: "Statutes", href: "/statutes" },
      { label: "Media Kit", href: "/media-kit" },
      { label: "Contact", href: "/contact-1" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header id="header" className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=1500w"
              alt="Bitcoin Association Switzerland"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative nav-item"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button className="flex items-center px-4 py-2 text-sm font-medium text-white hover:text-primary transition-colors">
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 bg-white shadow-lg min-w-[200px] py-2 rounded-sm">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-dark hover:text-primary hover:bg-gray-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      item.isHome
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark">
          <nav className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-700 last:border-0">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-3 text-white font-medium"
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 pb-3 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-sm text-gray-300 hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-3 font-medium ${
                      item.isHome ? "text-primary" : "text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}