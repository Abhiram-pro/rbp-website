"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const colVariant = (delay: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: EASE } },
});

function ColLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-[#0CF2A0]/60 font-mono mb-4">
      {children}
    </p>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 leading-relaxed"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      className="border-t w-full"
      style={{
        background: "#0a0a0a",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 — Lab Identity */}
          <motion.div
            variants={colVariant(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-white font-semibold text-sm leading-snug mb-2">
              RNA-Binding Proteins Laboratory
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mb-5">
              Department of Biosciences and Bioengineering
              <br />
              Indian Institute of Technology Guwahati
              <br />
              Academic Complex, Room 3206
              <br />
              Amingaon, North Guwahati, Assam 781039
              <br />
              India
            </p>
            <div className="flex flex-col gap-1.5">
              <a
                href="mailto:kusumsingh@iitg.ac.in"
                className="text-xs text-gray-400 hover:text-white underline-offset-4 hover:underline transition-colors duration-200"
              >
                kusumsingh@iitg.ac.in
              </a>
              <a
                href="tel:+913612582250"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-200"
              >
                +91-361-2582250
              </a>
            </div>
          </motion.div>

          {/* Column 2 — Navigation */}
          <motion.div
            variants={colVariant(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ColLabel>Navigation</ColLabel>
            <div className="flex flex-col gap-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/research">Research</FooterLink>
              <FooterLink href="/members">Members</FooterLink>
              <FooterLink href="/publications">Publications</FooterLink>
              <FooterLink href="/news">News</FooterLink>
              <FooterLink href="/equipment">Equipment</FooterLink>
              <FooterLink href="/collaborators">Collaborators</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </div>
          </motion.div>

          {/* Column 3 — External Links */}
          <motion.div
            variants={colVariant(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <ColLabel>Institution</ColLabel>
              <div className="flex flex-col gap-2">
                <FooterLink href="https://iitg.ac.in" external>
                  IIT Guwahati
                </FooterLink>
                <FooterLink href="https://www.iitg.ac.in/biotech/" external>
                  Dept. of Biosciences &amp; Bioengineering
                </FooterLink>
                <FooterLink
                  href="https://www.iitg.ac.in/biotech/faculty_profile.php?fname=Kusum%20K&lname=Singh&iitg=1137&mail=kusumsingh@iitg.ac.in"
                  external
                >
                  Faculty Profile
                </FooterLink>
                <FooterLink
                  href="https://www.iitg.ac.in/biotech/publications.php"
                  external
                >
                  Department Publications
                </FooterLink>
              </div>
            </div>
            <div>
              <ColLabel>Community</ColLabel>
              <div className="flex flex-col gap-2">
                <FooterLink href="https://www.rnasociety.org/" external>
                  RNA Society
                </FooterLink>
                <FooterLink href="https://www.rnaindia.org/" external>
                  RNA India
                </FooterLink>
                <FooterLink
                  href="https://www.iitg.ac.in/biotech/rna2024/index.html"
                  external
                >
                  12th RNA Group Meeting
                </FooterLink>
              </div>
            </div>
          </motion.div>

          {/* Column 4 — Collaborators */}
          <motion.div
            variants={colVariant(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <ColLabel>International Collaborators</ColLabel>
              <div className="flex flex-col gap-3">
                {[
                  { name: "Prof. Niels H. Gehring", inst: "University of Cologne, Germany" },
                  { name: "Prof. Volker Boehm", inst: "University of Cologne, Germany" },
                  { name: "Prof. Andreas E. Kulozik", inst: "Heidelberg University Hospital, Germany" },
                ].map((c) => (
                  <div key={c.name}>
                    <p className="text-sm text-gray-300 leading-tight">{c.name}</p>
                    <p className="text-xs text-gray-600 leading-tight mt-0.5">{c.inst}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ColLabel>Domestic Collaborators</ColLabel>
              <div className="flex flex-col gap-3">
                {[
                  { name: "Dr. Shovamayee Maharana", inst: "IISc Bangalore" },
                  { name: "Prof. Bithiah G. Jaganathan", inst: "IIT Guwahati" },
                  { name: "Prof. Ashish Anand", inst: "IIT Guwahati" },
                ].map((c) => (
                  <div key={c.name}>
                    <p className="text-sm text-gray-300 leading-tight">{c.name}</p>
                    <p className="text-xs text-gray-600 leading-tight mt-0.5">{c.inst}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © 2026 RNA-Binding Proteins Laboratory, IIT Guwahati. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 font-mono">
            Funded by DBT · DST-SERB · IIT Guwahati Seed Grant
          </p>
        </div>
      </div>
    </footer>
  );
}
