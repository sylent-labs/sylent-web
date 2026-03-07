"use client";

import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

const CAPABILITIES = [
  "Mobile Apps",
  "Web Platforms",
  "Backend Systems",
  "Integrations",
  "AI Tools",
  "Enterprise Solutions",
];

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Van Keith",
    role: "Chief Executive Officer",
    bio: "Hardcore full stack software engineer with over a decade of hands on, end to end development and technical leadership. Shipped production systems across fintech, banking, telecommunications, cryptocurrency and smart contracts, real estate platforms, media and broadcasting, food and retail, KYC verification and AI development including RAG pipelines. Built custom video calling platforms from scratch, led legacy system migrations at major banks handling race conditions and backward compatibility, and delivered an Airbnb competitor and platforms for some of the biggest news channels in Australia. Worked with major telecom carriers and enterprise clients across the US, Japan, Australia, Vietnam, Taiwan, Brazil and the Philippines. Lived in Kyoto, Japan for multiple years and Newcastle, Australia, sharpening his craft internationally. Multiple award winner in design and featured speaker at engineering conventions. AWS certified, internationally published author with multiple publications that have been widely cited across the industry.",
  },
  {
    name: "Bob",
    role: "Chief Technology Officer",
    bio: "30 years in software engineering spanning backend architecture, systems design and infrastructure at scale. Deep expertise in distributed systems, database performance tuning and platform reliability. Has architected production systems processing millions of transactions and led engineering organizations through multiple growth stages.",
  },
  {
    name: "Jonathan",
    role: "Senior Backend Engineer",
    bio: "Backend specialist with deep expertise in Python, Django and cloud infrastructure across AWS and Azure. Builds high-throughput API services, data pipelines and async processing systems. Strong track record in fintech and enterprise platforms where reliability and performance are non-negotiable.",
  },
  {
    name: "Blair",
    role: "Senior Frontend Engineer",
    bio: "Frontend engineer with production experience across React, React Native, Swift and Kotlin. Ships performant web applications and native mobile apps for iOS and Android. Focused on component architecture, accessibility and interfaces that feel fast on any device.",
  },
  {
    name: "Harvey",
    role: "Lead UI/UX Designer",
    bio: "Award-winning designer specializing in mobile app, web app and product experience design. Creates design systems, interaction patterns and visual identities that drive user adoption. Bridges the gap between design intent and engineering execution with pixel-level precision.",
  },
  {
    name: "Donna",
    role: "Chief Financial Officer",
    bio: "Manages financial operations, budgeting, forecasting and compliance across all Sylent engagements. Ensures project profitability and sustainable growth while keeping the business lean and accountable to every dollar spent.",
  },
];

export default function About() {
  const wrapRef = useRevealOnScroll();

  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24"
    >
      {/* soft transition from hero */}
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-32 bg-linear-to-b from-black to-transparent -z-10" />

      <div
        ref={wrapRef}
        className="mx-auto max-w-4xl space-y-24 sm:space-y-32 md:space-y-40"
      >
        {/* ── Team subsection ── */}
        <div id="team">
          <div
            data-reveal
            data-from="left"
            style={{ "--d": "0ms", "--dur": "1000ms" } as React.CSSProperties}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/70 backdrop-blur-xl sm:px-4 sm:py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            About Us
          </div>

          <h2
            data-reveal
            data-from="left"
            style={{ "--d": "100ms", "--dur": "1200ms" } as React.CSSProperties}
            className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl"
          >
            The people behind the systems.
          </h2>

          <p
            data-reveal
            data-from="left"
            style={{ "--d": "200ms", "--dur": "1200ms" } as React.CSSProperties}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base md:text-lg"
          >
            A tight, senior team with decades of combined experience shipping
            production systems across industries and continents.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5">
            {TEAM.map((member, idx) => (
              <div
                key={member.name}
                data-reveal
                data-from={idx % 2 === 0 ? "left" : "right"}
                style={
                  {
                    "--d": `${idx * 80 + 300}ms`,
                    "--dur": "1200ms",
                  } as React.CSSProperties
                }
                className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
              >
                <div className="mb-3">
                  <p className="text-base font-semibold text-white">
                    {member.name}
                  </p>
                  <p className="text-xs font-medium text-red-500">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-white/55 sm:text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mission subsection ── */}
        <div id="mission">
          <div
            data-reveal
            data-from="left"
            style={{ "--d": "0ms", "--dur": "1000ms" } as React.CSSProperties}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/70 backdrop-blur-xl sm:px-4 sm:py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            Our Mission
          </div>

          <h2
            data-reveal
            data-from="left"
            style={{ "--d": "100ms", "--dur": "1200ms" } as React.CSSProperties}
            className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl"
          >
            To help businesses build and scale reliable digital systems through
            focused engineering, thoughtful design and practical execution.
          </h2>

          <div className="mt-10 space-y-8 sm:mt-14 md:mt-16">
            <p
              data-reveal
              data-from="left"
              style={
                { "--d": "200ms", "--dur": "1200ms" } as React.CSSProperties
              }
              className="text-sm leading-relaxed text-white/65 sm:text-base md:text-lg"
            >
              We exist to deliver real solutions, not presentations and not
              promises. We work on systems that solve real problems.
            </p>

            <p
              data-reveal
              data-from="right"
              style={
                { "--d": "300ms", "--dur": "1200ms" } as React.CSSProperties
              }
              className="text-sm leading-relaxed text-white/65 sm:text-base md:text-lg"
            >
              As a California based company powered by global engineering
              talent, we combine startup agility with the resources of a large
              enterprise. Offering the technical depth of a large firm while
              maintaining the direct access and accountability of a small team.
            </p>

            <p
              data-reveal
              data-from="left"
              style={
                { "--d": "400ms", "--dur": "1200ms" } as React.CSSProperties
              }
              className="text-sm leading-relaxed text-white/65 sm:text-base md:text-lg"
            >
              We build mobile apps, web platforms, backend systems,
              integrations, AI tools and enterprise grade solutions with one
              goal: to simplify operations, reduce friction, and turn complex
              processes into reliable systems.
            </p>
          </div>

          <div
            data-reveal
            style={{ "--d": "500ms", "--dur": "1200ms" } as React.CSSProperties}
            className="mt-10 flex flex-wrap gap-2 sm:mt-14 sm:gap-3"
          >
            {CAPABILITIES.map((cap) => (
              <span
                key={cap}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 sm:px-4 sm:py-2 sm:text-sm"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* ── Vision subsection ── */}
        <div id="vision">
          <div
            data-reveal
            data-from="left"
            style={{ "--d": "0ms", "--dur": "1000ms" } as React.CSSProperties}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/70 backdrop-blur-xl sm:px-4 sm:py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            Our Vision
          </div>

          <h2
            data-reveal
            data-from="left"
            style={{ "--d": "100ms", "--dur": "1200ms" } as React.CSSProperties}
            className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl"
          >
            To become the trusted technology partner for growing businesses that
            value execution over noise.
          </h2>

          <div className="mt-10 space-y-8 sm:mt-14 md:mt-16">
            <p
              data-reveal
              data-from="right"
              style={
                { "--d": "200ms", "--dur": "1200ms" } as React.CSSProperties
              }
              className="text-sm leading-relaxed text-white/65 sm:text-base md:text-lg"
            >
              We envision a future where companies choose partners not by size
              or hype, but by reliability, clarity and consistent delivery.
            </p>

            <p
              data-reveal
              data-from="left"
              style={
                { "--d": "300ms", "--dur": "1200ms" } as React.CSSProperties
              }
              className="text-sm leading-relaxed text-white/65 sm:text-base md:text-lg"
            >
              Sylent aims to prove that a focused team with strong engineering
              discipline and clear communication can deliver better results than
              larger firms burdened by complexity and unnecessary overhead.
            </p>

            <p
              data-reveal
              data-from="right"
              style={
                { "--d": "400ms", "--dur": "1200ms" } as React.CSSProperties
              }
              className="text-sm leading-relaxed text-white/65 sm:text-base md:text-lg"
            >
              We strive to offer the capabilities of a large technology company
              while preserving the responsiveness, transparency and personal
              accountability of a startup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
