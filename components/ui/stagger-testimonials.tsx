"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SQRT_5000 = Math.sqrt(5000);
const VISIBLE_COUNT = 5;

const testimonials = [
  {
    tempId: 0,
    testimonial: "The RBP Lab's work on UPF3B regulation opened a completely new avenue for our understanding of NMD in neuronal contexts.",
    by: "Prof. A. Kumar, Dept. of Biochemistry, IISc Bangalore",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 1,
    testimonial: "Their CRISPR-based approach to distinguishing MAGOH paralogs is elegant — exactly the kind of precision genomics we need in RNA biology.",
    by: "Dr. S. Menon, RNA Biology Group, TIFR Mumbai",
    imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 2,
    testimonial: "The BioID proximity proteomics data from this lab reshaped how we think about SAP18 and its spliceosomal interactions.",
    by: "Dr. L. Bhatt, Centre for Cellular & Molecular Biology",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 3,
    testimonial: "A landmark study. The EJC suppression of cryptic splicing paper is now required reading in our graduate RNA splicing course.",
    by: "Prof. R. Iyer, Dept. of Molecular Biology, IIT Bombay",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 4,
    testimonial: "Collaborating with the RBP Lab on RNPS1 and cervical cancer was one of the most productive partnerships our group has had.",
    by: "Dr. P. Nair, Oncology Genomics Lab, ACTREC",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 5,
    testimonial: "The miRNA-NMD crosstalk review is comprehensive and beautifully written. We cite it in nearly every grant we submit.",
    by: "Prof. V. Rao, RNA Medicine Initiative, IIT Madras",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 6,
    testimonial: "Singh Lab's quantitative proteomics workflow for EJC components is now the gold standard we reference in our core facility.",
    by: "Dr. A. Desai, Proteomics Core, NCBS Bangalore",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 7,
    testimonial: "The discovery of MAGOH-delta37 as an EJC-independent isoform is a paradigm shift. We immediately incorporated it into our models.",
    by: "Dr. K. Sharma, Translational RNA Lab, JNCASR",
    imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&auto=format&fit=crop"
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;
  const absPos = Math.abs(position);
  if (absPos > Math.floor(VISIBLE_COUNT / 2)) return null;

  return (
    <div
      onClick={() => handleMove(position)}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: cardSize,
        height: cardSize,
        cursor: 'pointer',
        border: `2px solid ${isCenter ? '#1f7a8c' : '#3f3f46'}`,
        padding: '2rem',
        transition: 'all 500ms ease-in-out',
        zIndex: isCenter ? 10 : 0,
        backgroundColor: isCenter ? '#1f7a8c' : '#1a1a1a',
        color: '#ededed',
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? '0px 8px 0px 4px #3f3f46' : 'none',
      }}
    >
      <span
        style={{
          position: 'absolute',
          display: 'block',
          transformOrigin: 'top right',
          transform: 'rotate(45deg)',
          backgroundColor: '#3f3f46',
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(',')[0]}
        style={{
          marginBottom: '1rem',
          height: '3.5rem',
          width: '3rem',
          objectFit: 'cover',
          objectPosition: 'top',
          boxShadow: '3px 3px 0px #111111',
        }}
      />
      <h3 style={{ fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.5 }}>
        "{testimonial.testimonial}"
      </h3>
      <p style={{
        position: 'absolute',
        bottom: '2rem',
        left: '2rem',
        right: '2rem',
        marginTop: '0.5rem',
        fontSize: '0.8rem',
        fontStyle: 'italic',
        color: isCenter ? 'rgba(255,255,255,0.6)' : '#71717a',
      }}>
        — {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 270);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const half = Math.floor(VISIBLE_COUNT / 2);

  return (
    <div style={{ position: 'relative', width: '100%', height: 600, overflow: 'hidden', backgroundColor: 'rgba(255,255,255,0.03)' }}>
      {testimonialsList.map((testimonial, index) => {
        const position = index - half;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem' }}>
        <button
          onClick={() => handleMove(-1)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '3.5rem', height: '3.5rem', fontSize: '1.5rem',
            backgroundColor: '#111111', border: '2px solid #3f3f46',
            color: '#ededed', cursor: 'pointer', transition: 'all 200ms',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1f7a8c'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#111111'; (e.currentTarget as HTMLElement).style.color = '#ededed'; }}
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => handleMove(1)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '3.5rem', height: '3.5rem', fontSize: '1.5rem',
            backgroundColor: '#111111', border: '2px solid #3f3f46',
            color: '#ededed', cursor: 'pointer', transition: 'all 200ms',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1f7a8c'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#111111'; (e.currentTarget as HTMLElement).style.color = '#ededed'; }}
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
