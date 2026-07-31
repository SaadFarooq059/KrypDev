import { ContactForm } from '@/components/contact-form'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 100%, rgba(192,132,252,0.25), transparent 55%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <p className="font-mono text-sm text-primary">// let&apos;s build</p>
        <h2 className="mt-3 text-balance font-heading text-4xl font-bold tracking-tight md:text-5xl">
          Ready to build what comes next?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Tell us about your project and our team will get back to you within
          one business day.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
