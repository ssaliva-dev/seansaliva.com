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
              className="w-full min-h-[540px] rounded-xl overflow-hidden"
            />
          </section>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                My mission is to help leaders and teams turn complex digital goals
                into practical execution by sharing proven strategies for content,
                UX, automation, and public-sector communication.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Why I Created This Podcast
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I created this podcast to document lessons learned from real projects,
                spotlight what is working in the field, and give professionals a clear,
                no-fluff resource they can apply immediately to improve outcomes.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
