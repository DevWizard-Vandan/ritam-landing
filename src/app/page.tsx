"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

import { supabase } from "@/lib/supabase";

const howItWorksItems = [
  {
    icon: "🔍",
    title: "Sense",
    body: "9 specialist AI agents scan FII positioning, options chains, sector rotation, global cues, and sentiment — every 5 minutes.",
  },
  {
    icon: "🧠",
    title: "Reason",
    body: "Gemini 2.5 Flash synthesizes all signals. Historical analog matching finds the closest market patterns from decades of data.",
  },
  {
    icon: "📈",
    title: "Perceive",
    body: "A self-improving prediction with a confidence score. Weights update every week based on what was actually right.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const { error: insertError } = await supabase.from("waitlist_signups").insert({
      email,
      use_case: useCase || null,
      created_at: new Date().toISOString(),
    });

    if (insertError) {
      setError("Something went wrong. Try again.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="text-lg font-semibold text-slate-900">
            ⟁ RITAM
          </a>
          <button
            type="button"
            onClick={scrollToWaitlist}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Join Waitlist
          </button>
        </nav>
      </header>

      <main>
        <section className="flex min-h-screen items-center justify-center px-4 pt-28 text-center sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="mx-auto inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
            >
              🧠 Powered by 9 AI Agents + Gemini 2.5
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-5xl font-bold leading-tight text-slate-900 md:text-7xl"
            >
              Markets don&apos;t repeat.
              <br />
              They <span className="text-[#3B82F6]">rhyme.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto mt-6 max-w-2xl text-xl text-slate-500"
            >
              RITAM perceives Ṛtam — the cosmic pattern underlying all market movement. Not
              a prediction engine. A perception engine.
            </motion.p>

            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              onClick={scrollToWaitlist}
              className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Request Early Access →
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto mt-16 h-48 max-w-3xl overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-lg"
            >
              <svg viewBox="0 0 800 240" className="h-full w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 220 C80 190 120 140 200 150 C280 160 320 70 400 90 C470 105 510 190 600 160 C680 130 720 80 800 110 L800 240 L0 240 Z"
                  fill="url(#chartGradient)"
                />
                <motion.path
                  d="M0 220 C80 190 120 140 200 150 C280 160 320 70 400 90 C470 105 510 190 600 160 C680 130 720 80 800 110"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="4"
                  strokeOpacity="0.6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 text-center text-3xl font-bold text-slate-900">
              How RITAM Perceives Markets
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {howItWorksItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <p className="mb-4 text-3xl" aria-hidden="true">
                    {item.icon}
                  </p>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="leading-relaxed text-slate-500">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">See RITAM in Action</h2>
            <p className="mb-12 text-center text-slate-500">
              Watch the Sandbox predict how markets would have reacted to any event in history.
            </p>
            <div className="mx-auto flex aspect-video max-w-4xl items-center justify-center rounded-2xl border border-slate-200 bg-slate-900 shadow-xl">
              <div className="text-center">
                <p className="text-5xl text-white/50">▶</p>
                <p className="mt-3 text-sm text-slate-400">Demo coming soon</p>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-3 text-center text-3xl font-bold text-slate-900">Get Early Access</h2>
            <p className="mx-auto mb-12 max-w-xl text-center text-slate-500">
              RITAM is invite-only. Join the waitlist and we&apos;ll reach out when your spot is
              ready.
            </p>

            <div className="mx-auto max-w-lg rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              {isSubmitted ? (
                <p className="text-center font-medium text-green-600">
                  ✅ You&apos;re on the list! We&apos;ll be in touch.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-900">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="use-case" className="mb-2 block text-sm font-medium text-slate-900">
                      What would you use RITAM for?
                    </label>
                    <textarea
                      id="use-case"
                      placeholder="Trading research, academic study, portfolio management..."
                      rows={3}
                      value={useCase}
                      onChange={(event) => setUseCase(event.target.value)}
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Request Access"}
                  </button>

                  {error ? <p className="text-sm text-red-500">{error}</p> : null}
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-semibold text-slate-900">⟁ RITAM</p>
            <p className="mt-1 text-sm text-slate-400">Markets don&apos;t repeat. They rhyme.</p>
          </div>
          <a
            href="https://discord.gg/placeholder"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
          >
            Join Discord →
          </a>
        </div>
        <p className="mt-8 text-center text-xs text-slate-400">Built with Ṛtam. © 2026 RITAM.</p>
      </footer>
    </div>
  );
}
