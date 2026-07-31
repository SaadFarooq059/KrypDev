import type { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'
import AetherFlowHero from '@/components/ui/aether-flow-hero'
import { BuildSystemCta } from '@/components/build-system-cta'
import { AiProjectShowcase } from '@/components/ai-project-showcase'
import AiAgentPipeline from '@/components/ui/ai-agent-pipeline'

export const metadata: Metadata = {
  title: 'AI Solutions — KrypDev',
  description:
    'AI chatbots, machine learning models, automation pipelines, and LLM integration — production-grade AI engineering from KrypDev.',
}

const offerings = [
  {
    title: 'AI Chatbot Development',
    desc: 'Conversational agents that handle support, sales, and workflows around the clock — grounded in your data, deployed on your channels.',
    image: '/services/service-ai.png',
  },
  {
    title: 'Machine Learning Models',
    desc: 'Custom models for prediction, classification, and intelligent automation, trained and evaluated against your real-world metrics.',
    image: '/services/service-desktop.png',
  },
  {
    title: 'AI Automation Pipelines',
    desc: 'End-to-end agent pipelines that turn repetitive work into autonomous processes with human approval where it matters.',
    image: '/services/service-automation.png',
  },
  {
    title: 'LLM Integration',
    desc: 'Seamlessly embed large language models into your products and operations — prompt design, evals, and cost control included.',
    image: '/services/service-llm.png',
  },
  {
    title: 'RAG & Knowledge Systems',
    desc: 'Retrieval-augmented generation over your documents and databases, with vector search tuned for accuracy.',
    image: '/services/service-cloud.png',
  },
  {
    title: 'AI Safety & Governance',
    desc: 'Guardrails, audit trails, and evaluation suites so your AI systems stay reliable, compliant, and on-brand.',
    image: '/services/service-governance.png',
  },
] as const

function OfferingCard({
  title,
  desc,
  image,
}: {
  title: string
  desc: string
  image: string
}) {
  return (
    <article className="group glass flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:glow-accent">
      <div className="relative aspect-[16/11] w-full bg-[#0a0118] p-4 sm:p-5">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
      <div className="relative flex flex-1 flex-col p-6 pt-4">
        <h3 className="font-heading text-xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </article>
  )
}

const steps = [
  {
    num: '01',
    title: 'Audit & strategy',
    desc: 'We identify the workflows where AI delivers measurable ROI — not just demos.',
  },
  {
    num: '02',
    title: 'Prototype fast',
    desc: 'A working proof of concept on your data within weeks, evaluated against real tasks.',
  },
  {
    num: '03',
    title: 'Production hardening',
    desc: 'Evals, monitoring, fallbacks, and cost controls before anything reaches your users.',
  },
]

export default function AiSolutionsPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <AetherFlowHero
        eyebrow="AI-First Engineering"
        title="Intelligence, engineered in"
        description="Our AI-first approach embeds machine intelligence at the core of your products — premium, cutting-edge, and built to scale from prototype to production."
        ctaLabel="Talk to us"
        ctaHref="/contact"
      />

      <section className="relative overflow-hidden py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(192,132,252,0.15), transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="font-mono text-sm text-primary">// live_pipeline</p>
            <h2 className="mt-3 text-balance font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Agents that actually ship work
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              From trigger to tool call to result — this is the kind of
              autonomous pipeline we design, build, and operate.
            </p>
          </div>
          <AiAgentPipeline />
        </div>
      </section>

      <AiProjectShowcase />

      <section className="border-t border-border bg-secondary/20 py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-sm text-primary">// what_we_build</p>
            <h2 className="mt-3 text-balance font-heading text-4xl font-bold tracking-tight md:text-5xl">
              AI capabilities, end to end
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o) => (
              <OfferingCard key={o.title} {...o} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 md:px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-sm text-primary">// from_idea_to_prod</p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-bold tracking-tight md:text-5xl">
            How we take AI to production
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="glass rounded-2xl p-7">
              <span className="font-heading text-4xl font-bold text-primary/40">
                {s.num}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <BuildSystemCta />
      <SiteFooter />
    </main>
  )
}
