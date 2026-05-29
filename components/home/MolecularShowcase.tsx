"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const DUR = 0.9;

const sections = [
  {
    direction: "text-left" as const,
    accentColor: "#0CF2A0",
    radial: "radial-gradient(ellipse at 20% 50%, rgba(0,212,180,0.05) 0%, transparent 70%)",
    overline: "Crystal Structure · PDB 2XB2 · 3.4Å Resolution",
    name: "UPF3B–EJC Assembly",
    body: "UPF3B is a key NMD effector whose loss is linked to X-linked intellectual disability and neurodevelopmental disorders. Our lab uses CRISPR/Cas9-based knockout strategies in mammalian cell lines to dissect how UPF3B expression is regulated post-transcriptionally — and how its loss reshapes the transcriptome in neuronal contexts. This structure captures the precise molecular handshake between UPF3B and the EJC core.",
    badge: "X-Ray Crystallography",
    src: "https://molstar.org/viewer/?pdb=2XB2&hide-controls=1&bg-color=111111",
  },
  {
    direction: "text-right" as const,
    accentColor: "#a78bfa",
    radial: "radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)",
    overline: "Crystal Structure · PDB 1P27 · 2.0Å Resolution",
    name: "MAGOH–Y14 Heterodimer",
    body: "Vertebrate genomes encode two near-identical paralogs — MAGOH and MAGOHB — sharing over 90% sequence identity yet performing non-redundant roles. Using CRISPR-based endogenous tagging to distinguish them at the protein level, combined with quantitative proteomics, we are uncovering their distinct functions in cell proliferation. This heterodimer is the atomic core of that paralog dilemma.",
    badge: "X-Ray Crystallography",
    src: "https://molstar.org/viewer/?pdb=1P27&hide-controls=1&bg-color=111111",
  },
  {
    direction: "text-left" as const,
    accentColor: "#34d399",
    radial: "radial-gradient(ellipse at 20% 50%, rgba(52,211,153,0.05) 0%, transparent 70%)",
    overline: "Crystal Structure · PDB 4A8X",
    name: "ASAP Complex",
    body: "We apply BioID proximity-labeling proteomics to map the interactome of SAP18 within the prespliceosomal complex — work that has revealed novel interaction partners published in BBRC (2024). RNPS1, a component of this same complex, is also studied as an oncogenic splicing regulator in cervical cancer, where its serine-rich domain drives alternative splicing activation. This structure holds all three proteins together.",
    badge: "X-Ray Crystallography",
    src: "https://molstar.org/viewer/?pdb=4A8X&hide-controls=1&bg-color=111111",
  },
  {
    direction: "text-right" as const,
    accentColor: "#fbbf24",
    radial: "radial-gradient(ellipse at 80% 50%, rgba(251,191,36,0.05) 0%, transparent 70%)",
    overline: "Crystal Structure · PDB 3EX7",
    name: "EJC Transition State",
    body: "Our work published in Molecular Cell (Boehm et al., 2018) demonstrated that Exon Junction Complexes suppress spurious splice-site usage genome-wide, safeguarding transcriptome integrity. This structure captures the EJC core — MAGOH and Y14 locking eIF4AIII — at the exact moment of ATP hydrolysis transition state, revealing the mechanical basis of how the complex clamps onto mRNA.",
    badge: "X-Ray Crystallography",
    src: "https://molstar.org/viewer/?pdb=3EX7&hide-controls=1&bg-color=111111",
  },
];

function Divider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className="w-full h-px bg-gray-800 overflow-hidden">
      <motion.div
        className="h-full bg-gray-600"
        initial={{ scaleX: 0, originX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, ease: EASE }}
      />
    </div>
  );
}

function ShowcaseSection({ section }: { section: typeof sections[0] }) {
  const textLeft = section.direction === "text-left";

  const textVariant = {
    hidden: { opacity: 0, x: textLeft ? -30 : 30 },
    visible: { opacity: 1, x: 0, transition: { duration: DUR, ease: EASE } },
  };
  const modelVariant = {
    hidden: { opacity: 0, x: textLeft ? 60 : -60 },
    visible: { opacity: 1, x: 0, transition: { duration: DUR, ease: EASE, delay: 0.2 } },
  };

  const textPanel = (
    <motion.div
      variants={textVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      className="relative flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-16 min-h-[500px] lg:min-h-screen"
      style={{ background: section.radial }}
    >
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-16 rounded-full"
        style={{ background: section.accentColor, opacity: 0.7 }}
      />
      <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: section.accentColor, opacity: 0.7 }}>
        {section.overline}
      </p>
      <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
        {section.name}
      </h2>
      <p className="text-gray-400 text-lg leading-relaxed max-w-prose mb-8">
        {section.body}
      </p>
      <span
        className="inline-flex items-center self-start font-mono text-xs px-3 py-1.5 rounded-full border"
        style={{ color: section.accentColor, borderColor: `${section.accentColor}40`, background: `${section.accentColor}10` }}
      >
        {section.badge}
      </span>
    </motion.div>
  );

  const modelPanel = (
    <motion.div
      variants={modelVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      className="relative min-h-[500px] lg:min-h-screen overflow-hidden"
    >
      <iframe
        title={section.name}
        src={section.src}
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        allow="fullscreen; xr-spatial-tracking"
      />
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {textLeft ? <>{textPanel}{modelPanel}</> : <>{modelPanel}{textPanel}</>}
    </div>
  );
}

export default function MolecularShowcase() {
  return (
    <section className="bg-[#111111] relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center pt-24 pb-16 px-4"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">
          Structural Biology
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Research at Atomic Resolution
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Every protein we study has a structure. Every structure tells part of the story.
        </p>
      </motion.div>

      <Divider />

      {sections.map((section, i) => (
        <div key={i}>
          <ShowcaseSection section={section} />
          {i < sections.length - 1 && <Divider />}
        </div>
      ))}
    </section>
  );
}
