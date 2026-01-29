"use client";

import Link from "next/link";
import Image from "next/image";

// Custom Meetup icon since it's not in lucide-react
function MeetupIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.6 15.8c-.3-.3-.7-.4-1.1-.2-.3.1-.5.4-.5.7v.2c-.1.3-.2.6-.4.8-.2.2-.5.3-.8.2-.3-.1-.5-.3-.6-.6-.1-.3 0-.6.2-.9.2-.2.5-.3.8-.2.3.1.6.4.6.7 0 .3.3.5.6.4.3 0 .5-.3.4-.6-.1-.5-.4-.9-.9-1.1-.4-.2-.9-.2-1.3 0-.4.2-.7.6-.8 1-.1.4 0 .9.3 1.3.3.3.7.5 1.1.5.4 0 .8-.2 1.1-.5.3-.3.5-.7.6-1.1v-.3c0-.2.2-.4.4-.4.2 0 .4.2.4.4v.1c-.1.5-.3 1-.7 1.4-.4.4-.9.6-1.4.6-.6 0-1.1-.2-1.5-.6-.4-.4-.6-1-.5-1.5.1-.6.4-1.1.9-1.4.5-.3 1.1-.4 1.6-.2.6.2 1 .6 1.2 1.2.1.3.4.4.6.3.3-.1.4-.4.3-.6-.3-.7-.9-1.3-1.6-1.5-.8-.3-1.6-.1-2.2.4-.6.5-.9 1.3-.8 2.1.1.8.6 1.5 1.3 1.9.7.4 1.6.4 2.3 0 .7-.4 1.2-1.1 1.3-1.9v-.4c0-.2.1-.3.3-.3.2 0 .3.1.3.3v.2c-.1.6-.4 1.2-.9 1.6-.5.4-1.1.7-1.8.7-.7 0-1.3-.3-1.8-.7-.5-.5-.8-1.1-.8-1.8 0-.7.3-1.4.8-1.8.5-.5 1.2-.7 1.9-.6.7.1 1.3.5 1.7 1.1.1.2.4.3.6.2.2-.1.3-.4.2-.6-.5-.8-1.3-1.3-2.2-1.4-.9-.1-1.8.2-2.4.8-.6.6-.9 1.5-.8 2.3.1.9.6 1.7 1.4 2.2.7.5 1.6.6 2.4.3.8-.3 1.4-.9 1.7-1.7v-.5c0-.1.1-.2.2-.2.1 0 .2.1.2.2v.3c-.2.7-.6 1.3-1.2 1.7-.6.4-1.3.6-2 .5-.7-.1-1.4-.4-1.9-1-.4-.5-.7-1.2-.6-1.9 0-.7.3-1.4.8-1.9.5-.5 1.2-.7 1.9-.7.7.1 1.4.4 1.8 1 .1.2.4.2.6.1.2-.1.2-.4.1-.6-.6-.8-1.5-1.3-2.5-1.4-1-.1-1.9.3-2.6 1-.7.7-1 1.7-.8 2.6.2 1 .8 1.8 1.7 2.3.9.5 1.9.5 2.8.1.9-.4 1.5-1.2 1.8-2.1v-.6c0-.1 0-.1.1-.1 0 0 .1 0 .1.1v.4c-.2.8-.7 1.5-1.4 1.9-.7.4-1.5.6-2.3.4-.8-.2-1.5-.6-2-1.3-.4-.6-.6-1.4-.5-2.1.1-.8.5-1.5 1.1-2 .6-.5 1.4-.7 2.2-.6.8.1 1.5.5 2 1.2.1.2.4.2.6.1.2-.2.2-.4.1-.6z"/>
    </svg>
  );
}

const socialLinks = [
  {
    name: "Meetup",
    href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland",
    icon: MeetupIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.81zM9.55 15.5V8.5l6.27 3.5-6.27 3.5z"/>
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/bitcoin_ch",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link href="/" className="mb-8">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486226923132-GES7LLNU167XSPW77W83/image-asset.png"
              alt="Bitcoin Association Switzerland"
              width={60}
              height={60}
              className="h-16 w-auto"
            />
          </Link>

          {/* Social Links */}
          <div className="flex items-center space-x-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-dark"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <a
            href="#header"
            className="text-sm text-gray-500 hover:text-primary transition-colors mb-8"
          >
            Back to Top
          </a>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}