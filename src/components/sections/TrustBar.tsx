'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { target: 50, suffix: '+', label: 'Certified Orgs' },
  { target: 100, suffix: '%', label: 'Audit Success', display: 91 },
  { target: 15, suffix: '+', label: 'Years Exp.' },
  { target: 500, suffix: '+', label: 'Audits Conducted', display: 273 },
];

function Counter({ target, display }: { target: number; display?: number }) {
  const [count, setCount] = useState(display ?? 0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const speed = 200;
            const finalValue = display ?? target;
            let current = 0;

            const update = () => {
              const inc = target / speed;
              if (current < finalValue) {
                current = Math.min(current + inc, finalValue);
                setCount(Math.ceil(current));
                requestAnimationFrame(update);
              } else {
                setCount(finalValue);
              }
            };
            update();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, display]);

  return (
    <span ref={ref} className="counter tabular-nums">
      {count}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="py-12 bg-primary-container text-on-primary-container relative z-20 -mt-8 shadow-sm mx-4 lg:mx-grid-margin-desktop rounded border border-surface-dim overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-on-primary-container/10">
          {STATS.map(({ target, suffix, label, display }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center text-center px-4 pt-4 lg:pt-0"
            >
              <span className="text-[40px] font-display-lg tracking-[-0.02em] font-bold text-on-primary mb-2 block w-full tabular-nums">
                <Counter target={target} display={display} />
                {suffix}
              </span>
              <span className="text-label-md font-label-md text-on-primary-container/80 uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
