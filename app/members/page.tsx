"use client";

import { motion } from "framer-motion";
import TeamShowcase from "@/components/ui/team-showcase";

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect width='300' height='300' fill='%23222'/%3E%3Ccircle cx='150' cy='120' r='50' fill='%23444'/%3E%3Cellipse cx='150' cy='260' rx='80' ry='60' fill='%23444'/%3E%3C/svg%3E";

const slideLeft = { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 } };
const slideRight = { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 } };
const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } };
const baseTransition = { duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] };

export default function MembersPage() {
  return (
    <div>
      {/* Current members */}
      <main style={{ backgroundColor: "#111111" }} className="w-full px-4 pt-20 pb-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">Our People</h1>
          <p className="text-white/40 text-sm uppercase tracking-widest">
            RNA-Binding Proteins Laboratory · IIT Guwahati
          </p>
        </div>

        {/* INSTANCE 1 — PI: centered, reversed */}
        <section>
          <SectionLabel>Principal Investigator</SectionLabel>
          <motion.div {...slideLeft} transition={baseTransition} viewport={{ once: true, amount: 0.2 }}>
            <div className="mx-auto [&>div]:md:flex-row-reverse">
              <TeamShowcase
                members={[
                  {
                    id: "1",
                    name: "Prof. Kusum K Singh",
                    role: "Principal Investigator · Assistant Professor",
                    image: PLACEHOLDER,
                    social: { twitter: "#", linkedin: "#" },
                  },
                ]}
              />
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* INSTANCE 2 — Postdoc: left-weighted, default */}
        <section>
          <SectionLabel>Current · Postdoctoral Researcher</SectionLabel>
          <motion.div {...slideRight} transition={{ ...baseTransition, delay: 0.1 }} viewport={{ once: true, amount: 0.2 }}>
            <div className="mr-auto">
              <TeamShowcase
                members={[
                  {
                    id: "1",
                    name: "Open Position",
                    role: "Postdoctoral Researcher",
                    image: PLACEHOLDER,
                    social: {},
                  },
                ]}
              />
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* INSTANCE 3 — PhD Scholars: right-weighted, reversed */}
        <section>
          <SectionLabel>Current · PhD Scholars</SectionLabel>
          <motion.div {...slideRight} transition={{ ...baseTransition, delay: 0.1 }} viewport={{ once: true, amount: 0.2 }}>
            <div className="ml-auto [&>div]:md:flex-row-reverse">
              <TeamShowcase
                members={[
                  {
                    id: "1",
                    name: "Priyanka Yadav",
                    role: "PhD Scholar · NMD & UPF3B Regulation",
                    image: PLACEHOLDER,
                    social: { twitter: "#" },
                  },
                  {
                    id: "2",
                    name: "Sourabh Chakrabarty",
                    role: "PhD Scholar · RNA-Protein Interactions",
                    image: PLACEHOLDER,
                    social: { twitter: "#" },
                  },
                  {
                    id: "3",
                    name: "Silpi Sikha Bora",
                    role: "PhD Scholar",
                    image: PLACEHOLDER,
                    social: { twitter: "#" },
                  },
                  {
                    id: "4",
                    name: "Anas Rehman",
                    role: "PhD Scholar · MAGOH/MAGOHB Paralog Biology",
                    image: PLACEHOLDER,
                    social: { twitter: "#" },
                  },
                ]}
              />
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* INSTANCE 4 — Masters: left-weighted, default */}
        <section>
          <SectionLabel>Current · Masters</SectionLabel>
          <motion.div {...slideLeft} transition={{ ...baseTransition, delay: 0.1 }} viewport={{ once: true, amount: 0.2 }}>
            <div className="mr-auto">
              <TeamShowcase
                members={[
                  {
                    id: "1",
                    name: "Jebasingh Winston R",
                    role: "M.Tech Scholar",
                    image: PLACEHOLDER,
                    social: { twitter: "#" },
                  },
                  {
                    id: "2",
                    name: "Lashika Goyal",
                    role: "M.Tech Scholar",
                    image: PLACEHOLDER,
                    social: { twitter: "#" },
                  },
                  {
                    id: "3",
                    name: "Priya Gautam",
                    role: "M.Tech Scholar",
                    image: PLACEHOLDER,
                    social: { twitter: "#" },
                  },
                ]}
              />
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* INSTANCE 5 — Interns: centered, reversed */}
        <section>
          <SectionLabel>Current · Interns</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mx-auto [&>div]:md:flex-row-reverse">
              <TeamShowcase
                members={[
                  {
                    id: "1",
                    name: "Abhiram Ganji",
                    role: "Summer Intern · Data Science & AI",
                    image: PLACEHOLDER,
                    social: { twitter: "#" },
                  },
                  {
                    id: "2",
                    name: "Open Position",
                    role: "Intern · Bioinformatics",
                    image: PLACEHOLDER,
                    social: {},
                  },
                  {
                    id: "3",
                    name: "Open Position",
                    role: "Intern · Molecular Biology",
                    image: PLACEHOLDER,
                    social: {},
                  },
                ]}
              />
            </div>
          </motion.div>
        </section>
      </main>

      {/* Alumni section */}
      <section style={{ backgroundColor: "#0f0f0f" }} className="w-full px-4 pt-16 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">Alumni</h2>
          <p className="text-white/30 text-sm">
            Former members of the RNA-Binding Proteins Laboratory
          </p>
        </div>

        {/* INSTANCE 6 — Alumni PhD: left-weighted, default */}
        <SectionLabel>Alumni · PhD Scholars</SectionLabel>
        <motion.div {...fadeUp} transition={baseTransition} viewport={{ once: true, amount: 0.2 }}>
          <div className="mr-auto">
            <TeamShowcase
              members={[
                { id: "1", name: "—", role: "PhD Scholar", image: PLACEHOLDER, social: {} },
                { id: "2", name: "—", role: "PhD Scholar", image: PLACEHOLDER, social: {} },
              ]}
            />
          </div>
        </motion.div>

        <Divider />

        {/* INSTANCE 7 — Alumni Masters: right-weighted, reversed */}
        <SectionLabel>Alumni · Masters</SectionLabel>
        <motion.div {...fadeUp} transition={baseTransition} viewport={{ once: true, amount: 0.2 }}>
          <div className="ml-auto [&>div]:md:flex-row-reverse">
            <TeamShowcase
              members={[
                { id: "1", name: "—", role: "M.Tech", image: PLACEHOLDER, social: {} },
                { id: "2", name: "—", role: "M.Tech", image: PLACEHOLDER, social: {} },
              ]}
            />
          </div>
        </motion.div>

        <Divider />

        {/* INSTANCE 8 — Alumni Interns: centered, default */}
        <SectionLabel>Alumni · Interns</SectionLabel>
        <motion.div {...fadeUp} transition={baseTransition} viewport={{ once: true, amount: 0.2 }}>
          <div className="mx-auto">
            <TeamShowcase
              members={[
                { id: "1", name: "—", role: "Intern", image: PLACEHOLDER, social: {} },
                { id: "2", name: "—", role: "Intern", image: PLACEHOLDER, social: {} },
              ]}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.25em] px-4 md:px-6 mb-2 max-w-5xl mx-auto">
      {children}
    </p>
  );
}

function Divider() {
  return (
    <div className="max-w-5xl mx-auto my-10 px-4 md:px-6" aria-hidden="true">
      <div style={{ height: "1px", backgroundColor: "#ffffff0f" }} />
    </div>
  );
}
