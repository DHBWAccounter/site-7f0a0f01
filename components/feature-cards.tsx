"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const features = [
  {
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg",
    title: "About",
    description: "Find out about our organization and mission.",
    link: "/about-1",
    linkText: "Learn More",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg",
    title: "Join Us",
    description: "You can become a contributor to our cause, or participate yourself.",
    link: "/meetups-events",
    linkText: "Find Out How",
  },
];

export function FeatureCards() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group"
            >
              <Link href={feature.link} className="block">
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <span className="inline-flex items-center text-primary font-medium hover:underline">
                  {feature.linkText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}