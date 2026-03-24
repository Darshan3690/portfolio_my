"use client";
import { useState } from "react";
import { experiences } from "@/data/experiences";
import { CompanyModal } from "./CompanyModal";

export const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const selectedExperience =
    selectedCompany !== null
      ? experiences.find((exp) => exp.company === selectedCompany) ?? null
      : null;

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white">
        Organizations I've worked with
      </h2>
      <div className="space-y-4 md:space-y-6">
        {experiences.map((exp, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedCompany(exp.company)}
            className="w-full text-left flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer relative"
          >
            <div className="text-2xl md:text-3xl flex-shrink-0">
              {exp.logo}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-white hover:text-purple-400 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {exp.company}
                </a>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>
              <p className="text-purple-400 mb-2">{exp.role}</p>
              {exp.description && (
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {exp.description}
                </p>
              )}
              <p className="text-blue-400 text-sm mt-1">
                Click to view featured contributions →
              </p>
            </div>
          </button>
        ))}
      </div>

      {selectedExperience && (
        <CompanyModal
          isOpen={!!selectedCompany}
          onClose={() => setSelectedCompany(null)}
          company={{
            name: selectedExperience.company,
            logo: selectedExperience.logo ?? "⭐",
            contributions: selectedExperience.contributions ?? [],
          }}
        />
      )}
    </section>
  );
};
