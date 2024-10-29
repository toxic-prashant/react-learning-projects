"use client";

import Link from "next/link";
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Mastering Jazz Improvisation",
    description:
      "Learn the art of jazz improvisation with expert tips on scales, patterns, and techniques to enhance your creativity on the spot.",
    slug: "mastering-jazz-improvisation",
    isFeatured: true,
  },
  {
    title: "Vocal Techniques for Beginners",
    description:
      "A beginner-friendly session on essential vocal techniques, including breath control, pitch accuracy, and building confidence on stage.",
    slug: "vocal-techniques-for-beginners",
    isFeatured: false,
  },
  {
    title: "Recording Studio Essentials",
    description:
      "Get introduced to the basics of recording equipment, software, and techniques to produce quality sound in your home studio.",
    slug: "recording-studio-essentials",
    isFeatured: true,
  },
  {
    title: "Introduction to Music Production",
    description:
      "An introductory webinar that covers the fundamentals of music production, from DAW basics to layering sounds and structuring songs.",
    slug: "introduction-to-music-production",
    isFeatured: false,
  },
  {
    title: "Songwriting Secrets",
    description:
      "Unlock your creativity with songwriting tips from professionals, focusing on lyrics, melody, and finding your unique voice.",
    slug: "songwriting-secrets",
    isFeatured: true,
  },
  {
    title: "Percussion for Non-Drummers",
    description:
      "A guide to rhythm and percussion basics for musicians looking to expand their understanding of timing and groove.",
    slug: "percussion-for-non-drummers",
    isFeatured: false,
  },
  {
    title: "Classical Guitar Techniques",
    description:
      "Explore classical guitar techniques, including fingerpicking, chord progression, and hand positioning with renowned guitarists.",
    slug: "classical-guitar-techniques",
    isFeatured: true,
  },
  {
    title: "Essential Music Theory",
    description:
      "A deep dive into the essentials of music theory, covering scales, chords, and harmony to help you become a well-rounded musician.",
    slug: "essential-music-theory",
    isFeatured: false,
  },
  {
    title: "Electronic Music Basics",
    description:
      "An introductory webinar on electronic music production, exploring beats, synths, and how to create electronic music tracks.",
    slug: "electronic-music-basics",
    isFeatured: true,
  },
  {
    title: "Live Performance Tips",
    description:
      "Learn how to handle stage fright, engage with audiences, and deliver memorable live performances with confidence.",
    slug: "live-performance-tips",
    isFeatured: false,
  },
];

const UpcomingWebinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/webinars"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View all webinars
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
