import InteractiveHero from "@/components/blocks/hero-section-nexus";
import MolecularShowcase from "@/components/home/MolecularShowcase";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function Home() {
  return (
    <div>
      <InteractiveHero />
      <MolecularShowcase />
      <section className="bg-[#111111] py-20 px-4">
        <div className="max-w-5xl mx-auto mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">
            Community
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What the Community Says
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Reflections from collaborators and colleagues in the RNA biology field.
          </p>
        </div>
        <StaggerTestimonials />
      </section>
    </div>
  );
}
