import React, { useEffect } from 'react';
import { Mic } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const BUZZSPROUT_CONTAINER_ID = 'buzzsprout-large-player';
const BUZZSPROUT_SCRIPT_ID = 'buzzsprout-large-player-script';
const BUZZSPROUT_SCRIPT_SRC =
  'https://www.buzzsprout.com/2569581.js?container_id=buzzsprout-large-player&player=large';

export default function Podcast() {
  useEffect(() => {
    const container = document.getElementById(BUZZSPROUT_CONTAINER_ID);
    if (container) {
      container.innerHTML = '';
    }

    const oldScript = document.getElementById(BUZZSPROUT_SCRIPT_ID);
    if (oldScript) {
      oldScript.remove();
    }

    const script = document.createElement('script');
    script.id = BUZZSPROUT_SCRIPT_ID;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = BUZZSPROUT_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const mountedScript = document.getElementById(BUZZSPROUT_SCRIPT_ID);
      if (mountedScript) {
        mountedScript.remove();
      }
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Mic}
          title="Podcast"
          subtitle="Conversations on civic technology, digital modernization, AI automation, and practical leadership for teams building better public-facing experiences."
        />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <section className="xl:col-span-2 rounded-2xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm p-4 md:p-6">
            <div
              id={BUZZSPROUT_CONTAINER_ID}
              className="w-full h-[700px] md:h-[760px] rounded-xl overflow-hidden"
            />
            <style>{`
              #${BUZZSPROUT_CONTAINER_ID},
              #${BUZZSPROUT_CONTAINER_ID} > div,
              #${BUZZSPROUT_CONTAINER_ID} iframe {
                width: 100%;
                height: 100% !important;
                min-height: 700px;
              }
            `}</style>
          </section>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                The Partisan Games Podcast is a civic-first podcast that rebuilds
                political conversation by restoring shared facts, clear rules, and
                real understanding — before outrage and opinion take over.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Why I Created This Podcast
              </h3>
              <p className="text-slate-300 leading-relaxed">
                The Partisan Games Podcast is dedicated to transcending the tumultuous
                landscape of contemporary politics by fostering a sanctuary of informed
                discourse, critical thinking, and respectful engagement. Our mission is
                to elevate the political conversation beyond the confines of
                partisanship, providing our listeners with a platform that not only
                enlightens but also empowers them to navigate the complexities of
                political issues with understanding and integrity. Through diverse
                perspectives, expert insights, and a commitment to factual accuracy, we
                aim to contribute positively to the political discourse, encouraging
                active and informed civic participation
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
