import { Bot, BrainCircuit, Workflow, Sparkles } from 'lucide-react'
import AiAgentPipeline from '@/components/ui/ai-agent-pipeline'

const aiServices = [
  {
    icon: Bot,
    title: 'AI Chatbot Development',
    desc: 'Conversational agents that handle support, sales, and workflows around the clock.',
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning Models',
    desc: 'Custom models for prediction, classification, and intelligent automation.',
  },
  {
    icon: Workflow,
    title: 'AI Automation Pipelines',
    desc: 'End-to-end pipelines that turn repetitive work into autonomous processes.',
  },
  {
    icon: Sparkles,
    title: 'LLM Integration',
    desc: 'Seamlessly embed large language models into your products and operations.',
  },
]

export function AiSpotlight() {
  return (
    <section id="ai" className="relative overflow-hidden border-y border-border bg-secondary/20 py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 50%, rgba(192,132,252,0.18), transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-primary">// ai_development</p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Intelligence, <span className="text-gradient">engineered in</span>
          </h2>
          <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Our AI-first approach embeds machine intelligence at the core of
            your products — premium, cutting-edge, and built to scale.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_1.25fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {aiServices.map((a) => (
              <article
                key={a.title}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-accent"
              >
                <a.icon className="size-7 text-primary" />
                <h3 className="mt-4 font-heading text-lg font-semibold">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.desc}
                </p>
              </article>
            ))}
          </div>

          {/* Live agent pipeline visual */}
          <div className="relative flex items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(192,132,252,0.22), transparent 65%)',
              }}
            />
            <AiAgentPipeline />
          </div>
        </div>
      </div>
    </section>
  )
}
