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
    <section
      id="ai"
      className="relative overflow-hidden border-y border-border bg-secondary/20 py-16 sm:py-20 md:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-primary">// ai_development</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Intelligence, <span className="text-gradient">engineered in</span>
          </h2>
          <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Our AI-first approach embeds machine intelligence at the core of
            your products — premium, cutting-edge, and built to scale.
          </p>
        </div>

        <div className="mt-10 grid items-center gap-8 sm:mt-12 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {aiServices.map((a) => (
              <article
                key={a.title}
                className="rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-accent sm:p-6"
              >
                <a.icon className="size-6 text-primary sm:size-7" />
                <h3 className="mt-3 font-heading text-base font-semibold text-foreground sm:mt-4 sm:text-lg">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.desc}
                </p>
              </article>
            ))}
          </div>

          <div className="relative flex min-w-0 items-center justify-center overflow-x-auto pb-2">
            <AiAgentPipeline />
          </div>
        </div>
      </div>
    </section>
  )
}
