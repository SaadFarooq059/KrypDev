'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="glass mx-auto max-w-md rounded-2xl p-8 text-center glow-accent">
        <p className="font-heading text-xl font-semibold text-primary">
          Thanks — we&apos;ll be in touch!
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Your message is on its way to the KrypDev team.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="glass mx-auto w-full max-w-md rounded-2xl p-6 text-left"
    >
      <label className="block">
        <span className="font-mono text-xs text-muted-foreground">name</span>
        <input
          required
          type="text"
          placeholder="Jane Doe"
          className="mt-1 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
        />
      </label>
      <label className="mt-4 block">
        <span className="font-mono text-xs text-muted-foreground">email</span>
        <input
          required
          type="email"
          placeholder="jane@company.com"
          className="mt-1 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
        />
      </label>
      <label className="mt-4 block">
        <span className="font-mono text-xs text-muted-foreground">project</span>
        <textarea
          required
          rows={4}
          placeholder="Tell us what you want to build..."
          className="mt-1 w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
        />
      </label>
      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-shadow hover:glow-accent"
      >
        Send Message <ArrowRight className="size-4" />
      </button>
      <p className="mt-4 text-center font-mono text-sm text-muted-foreground">
        Email &amp; phone — coming soon
      </p>
    </form>
  )
}
