import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950 text-slate-400 text-sm select-none overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[150px] bg-indigo-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-wider text-white">
                REVU
              </span>
              <span className="p-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                {/* <FontAwesomeIcon icon={faSparkles} className="w-3 h-3" /> */}
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Smart active recall, Kanji tracing, and spaced repetition
              engineered to turn temporary words into permanent memory.
            </p>

            {/* Newsletter Input */}
            <div className="pt-2 max-w-sm">
              <p className="text-xs font-semibold text-slate-300 mb-2">
                Subscribe to learning tips & updates
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center bg-slate-900 border border-slate-800 rounded-full p-1 focus-within:border-indigo-500/50 transition-colors"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent px-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shrink-0"
                  aria-label="Subscribe"
                >
                  <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a
                  href="#features"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Interactive Demo
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Pricing Plans
                </a>
              </li>
              <li>
                <a
                  href="#kanji"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Kanji Tracing Mode
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a
                  href="#blog"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Learning Guide
                </a>
              </li>
              <li>
                <a
                  href="#srs"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Spaced Repetition Science
                </a>
              </li>
              <li>
                <a
                  href="#anki"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Anki Importer
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Community Decks
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Legal & Support
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a
                  href="#terms"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Cookie Settings
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} REVU App. All rights reserved.</p>

          <div className="flex items-center space-x-4 text-slate-400">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:text-indigo-400 hover:border-slate-700 transition-colors"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:text-indigo-400 hover:border-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:text-indigo-400 hover:border-slate-700 transition-colors"
              aria-label="Discord"
            >
              <FontAwesomeIcon icon={faDiscord} className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
