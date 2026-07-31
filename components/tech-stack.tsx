const stack = [
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'TypeScript',
  'AWS',
  'OpenAI',
  'PostgreSQL',
  'Docker',
  'Kubernetes',
  'TensorFlow',
  'Vercel',
]

export function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <div className="mb-12 text-center">
        <p className="font-mono text-sm text-primary">// tech_stack</p>
        <h2 className="mt-3 text-balance font-heading text-4xl font-bold tracking-tight md:text-5xl">
          Built on proven technology
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {stack.map((tech) => (
          <span
            key={tech}
            className="glass rounded-lg px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}
