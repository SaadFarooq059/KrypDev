'use client'

import { ProjectShowcase } from '@/components/ui/project-showcase'

const aiProjects = [
  {
    name: 'Support Copilot',
    quote:
      'A production AI chatbot grounded in your knowledge base — handling tier-1 support, escalating with context, and learning from resolved tickets.',
    designation: 'AI Chatbot · RAG + LLM',
    src: '/services/service-ai.png',
    link: '/contact',
  },
  {
    name: 'Ops Autopilot',
    quote:
      'An agent pipeline that turns repetitive back-office work into autonomous workflows — with tool calls, approvals, and full audit trails.',
    designation: 'Automation Pipeline · Agents',
    src: '/services/service-automation.png',
    link: '/contact',
  },
  {
    name: 'Demand Forecast Engine',
    quote:
      'Custom machine learning models for prediction and classification, trained on your operational data and evaluated against real business metrics.',
    designation: 'Machine Learning · Forecasting',
    src: '/services/service-cloud.png',
    link: '/contact',
  },
  {
    name: 'Knowledge Vault',
    quote:
      'Retrieval-augmented generation over documents and databases — vector search tuned for accuracy so answers stay grounded and on-brand.',
    designation: 'RAG · Knowledge Systems',
    src: '/services/service-api.png',
    link: '/contact',
  },
  {
    name: 'Safe Launch Kit',
    quote:
      'Guardrails, eval suites, and monitoring so your AI systems stay reliable, compliant, and cost-controlled from day one in production.',
    designation: 'AI Safety · Governance',
    src: '/services/service-support.png',
    link: '/contact',
  },
]

function openInNewTab(link: string) {
  if (!link) return
  window.open(link, '_blank', 'noopener,noreferrer')
}

export function AiProjectShowcase() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary/20 py-16 sm:py-20 md:py-24">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="font-mono text-sm text-primary">// featured_builds</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            AI products we engineer
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            From conversational agents to autonomous pipelines — a look at the
            kind of intelligence we design, ship, and harden for production.
          </p>
        </div>
        <ProjectShowcase
          testimonials={aiProjects}
          autoplay
          buttonInscriptions={{
            previousButton: 'Previous',
            nextButton: 'Next',
            openWebAppButton: 'Start a Project',
          }}
          onItemClick={openInNewTab}
        />
      </div>
    </section>
  )
}
