"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Learning at this music school has been life-changing. The instructors are so patient and knowledgeable, and I've progressed faster than I ever thought possible. I finally feel confident performing in front of others!",
    name: "Emily R.",
    title: "Beginner Guitar Student",
  },
  {
    quote:
      "I love the group classes here. Practicing with others has not only improved my skills but also taught me how to play in harmony. I highly recommend these classes to anyone wanting to experience the joy of making music together.",
    name: "Carlos M.",
    title: "Intermediate Piano Student",
  },
  {
    quote:
      "The performance opportunities have been invaluable. I used to be so nervous about playing on stage, but now it feels natural. The supportive environment at this school has helped me grow so much as a musician.",
    name: "Jasmine T.",
    title: "Advanced Violin Student",
  },
  {
    quote:
      "The personalized lessons are amazing! My instructor really took the time to understand my goals and helped me reach them step by step. I couldn't have asked for a better learning experience.",
    name: "David L.",
    title: "Drum Enthusiast",
  },
  {
    quote:
      "This music school has flexible scheduling options that make it easy to fit lessons into my busy life. I'm grateful for the convenience and the high-quality instruction. My skills have improved dramatically!",
    name: "Sophia K.",
    title: "Working Professional and Part-Time Vocalist",
  },
];

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold  text-center mb-8 z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Hear Our Harmony: Voices Of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
