export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string
  title: string
  highlight?: string
  description: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-16 pt-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(192,132,252,0.25), transparent 55%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(192,132,252,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(192,132,252,0.4) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(circle at 50% 0%, black, transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl animate-rise">
          <p className="font-mono text-sm text-primary">{eyebrow}</p>
          <h1 className="mt-3 text-balance font-heading text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            {title}
            {highlight ? (
              <>
                {' '}
                <span className="text-gradient">{highlight}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
