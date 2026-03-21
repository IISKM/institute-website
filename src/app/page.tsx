"use client";

import { InteractiveHero } from "@/components/interactive-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Mail, Phone, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "3500+", label: "Members" },
  { value: "100+", label: "Partners" },
  { value: "50+", label: "Events" },
];

const keyProgrammes = [
  {
    title: "Fellowship Programme",
    body: "Outstanding professionals who exceed membership requirements and have built impact over years of service.",
  },
  {
    title: "Skill Partnership & Training",
    body: "Vocational and technical training tracks with practical apprenticeship opportunities.",
  },
  {
    title: "Academic Courses",
    body: "Professional courses bridging training, qualifications, and workplace experience.",
  },
];

const offerings = ["Self Learning", "Knowledge Exchange", "Research", "Creative Strategy"];

const certifications = [
  "Community Development",
  "Entrepreneurship Development",
  "Information Technology",
  "Crime and Urban Management",
  "Small Business Development",
  "Information Management",
];

const testimonials = [
  {
    name: "Chinenye Adakole",
    quote: "The course gave me practical strategies that benefit me personally and professionally. It exceeded my expectations.",
  },
  {
    name: "Wale Oyewobi",
    quote: "A valuable experience with a solid grounding in the basics and practical collaboration with other professionals.",
  },
  {
    name: "Tunde Agbabiaka",
    quote: "I underestimated how much value I would gain. The content was rich, practical, and immediately useful.",
  },
];

export default function Home() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text-main)]">
      <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[color:rgba(247,244,237,0.86)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* <div>
            <p className="text-xs tracking-[0.24em] text-[var(--text-muted)]">PAN AFRICAN INSTITUTE</p>
            <p className="font-display text-lg leading-none sm:text-xl">Entrepreneurship & Community Development</p>
          </div> */}
          <div className="">
            <Image src="/logo-black.png" alt="PAIECD Logo" width={700} height={200} className="object-contain h-16 w-auto" />
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#programmes" className="nav-link">
              Programmes
            </a>
            <a href="#courses" className="nav-link">
              Courses
            </a>
            <a href="#testimonials" className="nav-link">
              Testimonials
            </a>
          </nav>
          <Button className="bg-[var(--accent)] px-4 text-[var(--accent-foreground)] hover:bg-[var(--accent-strong)]">Become a Member</Button>
        </div>
      </header>

      <main>
        <section className="hero-bg relative overflow-hidden border-b border-[var(--line)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
            <div className="animate-rise space-y-6">
              <Badge className="bg-[var(--accent-soft)] text-[var(--accent)]">Professionalism Far Beyond Certification</Badge>
              <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Pan-African talent, leadership, and community impact at scale.
              </h1>
              <p className="max-w-2xl text-base text-[var(--text-muted)] sm:text-lg">
                PAIECD is an institute in special consultative status with UN ECOSOC, providing professional membership, skill development,
                certification, and capacity building for entrepreneurs and changemakers.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-strong)]">
                  2025 Induction / Training <ArrowRight className="ml-1" />
                </Button>
                <Button variant="outline" className="border-[var(--line)] bg-transparent text-[var(--text-main)]">
                  11th Fellowship Awards
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-3 sm:gap-4">
                {stats.map((stat) => (
                  <Card key={stat.label} className="border border-[var(--line)] bg-[color:rgba(255,255,255,0.68)]">
                    <CardHeader className="pb-2">
                      <CardTitle className="font-display text-2xl sm:text-3xl">{stat.value}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] sm:text-sm">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="animate-rise-delayed min-h-[360px] lg:min-h-[500px]">
              <InteractiveHero />
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="section-kicker">Value Statement</p>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                We value the uniqueness and power of each individual to transform the collective destiny.
              </h2>
              <p className="mt-4 text-[var(--text-muted)]">
                PAIECD is one of Africa's leading professional organizations for entrepreneurs, public and private sector professionals, and community
                development practitioners committed to socially positive work and high moral standards.
              </p>
              <p className="mt-4 text-[var(--text-muted)]">
                Key service areas include professional membership, skill acquisition and development, certification courses, business support,
                research, and strategic networking.
              </p>
            </div>
            <Card className="border border-[var(--line)] bg-[var(--surface)]">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Why People Join PAIECD</CardTitle>
                <CardDescription>Trusted by professionals seeking practical growth and recognized standards.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Recognized professional pathways",
                  "Mentorship and peer networks",
                  "Practical entrepreneurship training",
                  "Research-driven community development",
                ].map((item) => (
                  <p key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 text-[var(--accent)]" />
                    <span>{item}</span>
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="programmes" className="border-y border-[var(--line)] bg-[var(--surface)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="section-kicker">Core Programmes</p>
            <h3 className="font-display text-3xl sm:text-4xl">What We Provide</h3>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {keyProgrammes.map((programme) => (
                <Card key={programme.title} className="h-full border border-[var(--line)] bg-[var(--bg)]">
                  <CardHeader>
                    <CardTitle className="font-display text-2xl">{programme.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[var(--text-muted)]">{programme.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {offerings.map((item) => (
                <div key={item} className="rounded-xl border border-[var(--line)] bg-[color:rgba(255,255,255,0.72)] p-4">
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="courses" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="section-kicker">Professional Certification & Courses</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item) => (
              <Card key={item} className="border border-[var(--line)] bg-[var(--surface)]">
                <CardContent className="pt-5">
                  <p className="text-sm uppercase tracking-[0.16em] text-[var(--text-muted)]">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="testimonials" className="border-y border-[var(--line)] bg-[var(--surface)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="section-kicker">Our Testimonials</p>
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {testimonials.map((t) => (
                <Card key={t.name} className="border border-[var(--line)] bg-[var(--bg)]">
                  <CardContent className="pt-5">
                    <p className="text-sm text-[var(--text-muted)]">"{t.quote}"</p>
                    <div className="mt-5 flex items-center gap-3 border-t border-[var(--line)] pt-4">
                      <div className="grid size-10 place-items-center rounded-full bg-[var(--accent-soft)] text-xs font-semibold text-[var(--accent)]">
                        {t.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </div>
                      <p className="font-medium">{t.name}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="newsletter rounded-2xl border border-[var(--line)] p-6 sm:p-8">
            <p className="section-kicker">Newsletter</p>
            <h3 className="font-display text-3xl sm:text-4xl">Start Working Together?</h3>
            <p className="mt-3 max-w-2xl text-sm text-[var(--text-muted)] sm:text-base">
              Join our community updates for training opportunities, fellowships, and professional certification announcements.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                placeholder="you@example.com"
                className="h-11 w-full rounded-lg border border-[var(--line)] bg-[var(--bg)] px-3 text-sm outline-none ring-[var(--accent)]/40 transition focus:ring-2"
              />
              <Button className="h-11 bg-[var(--accent)] px-6 text-[var(--accent-foreground)] hover:bg-[var(--accent-strong)]">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <p className="font-display text-2xl">Pan African Institute</p>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              An institute in special consultative status with United Nations ECOSOC and member of UN Habitat partner initiatives.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">Quick Links</p>
            <div className="mt-3 space-y-2 text-sm">
              {["Certificate Programmes", "Diploma Programmes", "Advanced Diploma", "Certified Professional", "Membership"].map((item) => (
                <p key={item} className="hover:underline">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">Contact</p>
            <div className="mt-3 space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Users className="size-4 text-[var(--accent)]" /> Trusted by 5000+ People
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4 text-[var(--accent)]" /> +234 (0) 000 000 0000
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-4 text-[var(--accent)]" />
                ced@panafricaninstitute.org
              </p>
            </div>
          </div>
        </div>
        <p className="border-t border-[var(--line)] py-4 text-center text-xs text-[var(--text-muted)]">
          Copyright 2026 Pan African Institute for Entrepreneurship & Community Development. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
