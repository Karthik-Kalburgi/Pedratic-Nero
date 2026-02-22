import React from "react";
import {
  Brain,
  Sparkles,
  Puzzle,
  Cloud,
  Zap,
  Shield,
  Heart,
  Smile,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Epilepsy Care",
      description:
        "Comprehensive seizure evaluation, EEG monitoring, and personalized treatment plans for children of all ages.",
      icon: Brain,
      bg: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      title: "ADHD Management",
      description:
        "Behavioral assessments and individualized strategies to help your child focus and succeed.",
      icon: Sparkles,
      bg: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },
    {
      title: "Autism Spectrum",
      description:
        "Early screening, diagnosis, and therapy coordination for children on the spectrum.",
      icon: Puzzle,
      bg: "bg-purple-100",
      iconColor: "text-purple-500",
    },
    {
      title: "Headache & Migraine",
      description:
        "Identifying triggers and developing relief plans so your child can enjoy being a kid.",
      icon: Cloud,
      bg: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      title: "Movement Disorders",
      description:
        "Expert evaluation and treatment of tics, tremors, and other movement conditions.",
      icon: Zap,
      bg: "bg-pink-100",
      iconColor: "text-pink-500",
    },
    {
      title: "Developmental Delays",
      description:
        "Thorough assessments to support milestones and guide early intervention.",
      icon: Shield,
      bg: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      title: "Neuromuscular Care",
      description:
        "Specialized care for muscle and nerve conditions affecting growing bodies.",
      icon: Heart,
      bg: "bg-rose-100",
      iconColor: "text-rose-500",
    },
    {
      title: "Behavioral Neurology",
      description:
        "Understanding the brain-behavior connection to help kids thrive socially and emotionally.",
      icon: Smile,
      bg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            How We Help Little Minds Shine ✨
          </h2>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            Every brain is unique. We offer specialized care for a wide range
            of pediatric neurological conditions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 ${service.bg}`}
                >
                  <Icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}