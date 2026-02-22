import React from "react";
import {
  Pill,
  Activity,
  Stethoscope,
  Lightbulb,
  HeartHandshake,
  Scan,
} from "lucide-react";

export default function Treatments() {
  const treatments = [
    {
      title: "Medication Management",
      description:
        "Carefully chosen medications with ongoing monitoring to keep your child safe and comfortable.",
      icon: Pill,
    },
    {
      title: "EEG & Monitoring",
      description:
        "Non-invasive brain wave monitoring in a kid-friendly environment with colorful gear.",
      icon: Activity,
    },
    {
      title: "Neurological Exams",
      description:
        "Gentle, play-based exams that feel more like games than doctor visits.",
      icon: Stethoscope,
    },
    {
      title: "Cognitive Therapy",
      description:
        "Brain training exercises and therapies to boost memory, attention, and learning.",
      icon: Lightbulb,
    },
    {
      title: "Behavioral Therapy",
      description:
        "Collaborative approaches helping children manage emotions and social interactions.",
      icon: HeartHandshake,
    },
    {
      title: "Advanced Imaging",
      description:
        "When needed, we use the latest MRI and imaging technology designed for children.",
      icon: Scan,
    },
  ];

  return (
    <section className="relative bg-gray-50 
                        py-16 px-5
                        sm:py-20 sm:px-6
                        md:py-24 md:px-10
                        lg:py-28 lg:px-16
                        xl:py-32 xl:px-24
                        2xl:py-40 2xl:px-32">

      <div className="max-w-screen-2xl mx-auto">

        {/* Top Badge */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 
                           text-xs sm:text-sm md:text-base
                           font-medium px-4 py-1.5 rounded-full">
            Treatments
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-bold text-gray-800
                         text-2xl
                         sm:text-3xl
                         md:text-4xl
                         lg:text-5xl
                         xl:text-6xl
                         2xl:text-7xl">
            Gentle Care, Real Results 💊
          </h2>

          <p className="mt-4 mx-auto text-gray-500
                        text-sm
                        sm:text-base
                        md:text-lg
                        lg:text-xl
                        max-w-md
                        sm:max-w-xl
                        md:max-w-2xl
                        lg:max-w-3xl">
            Our treatments are designed to be effective for the brain and enjoyable for the child.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          2xl:grid-cols-4
        ">
          {treatments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white 
                  rounded-2xl
                  border border-gray-100
                  shadow-sm
                  hover:shadow-lg
                  transition-all duration-300
                  p-6
                  sm:p-8
                  md:p-10
                  lg:p-8
                  xl:p-10
                  2xl:p-12
                "
              >
                {/* Icon */}
                <div className="
                  w-12 h-12
                  sm:w-14 sm:h-14
                  md:w-16 md:h-16
                  flex items-center justify-center
                  rounded-xl
                  bg-blue-100
                  mb-6
                ">
                  <Icon className="
                    w-5 h-5
                    sm:w-6 sm:h-6
                    md:w-7 md:h-7
                    text-blue-600
                  " />
                </div>

                {/* Title */}
                <h3 className="
                  font-semibold text-gray-800 mb-4
                  text-lg
                  sm:text-xl
                  md:text-2xl
                ">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="
                  text-gray-500 leading-relaxed
                  text-sm
                  sm:text-base
                  md:text-lg
                ">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}