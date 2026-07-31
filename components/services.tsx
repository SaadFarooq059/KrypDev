import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Web App Development',
    desc: 'Fast, scalable web applications built with modern frameworks and pixel-perfect interfaces.',
    image: '/services/service-web.png',
    href: '/services',
  },
  {
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile experiences for iOS and Android that users love.',
    image: '/services/service-mobile.png',
    href: '/services',
  },
  {
    title: 'Desktop Software',
    desc: 'High-performance desktop applications tailored to your operational workflows.',
    image: '/services/service-desktop.png',
    href: '/services',
  },
  {
    title: 'Custom API & Integrations',
    desc: 'Robust APIs and seamless integrations that connect your tools and data.',
    image: '/services/service-api.png',
    href: '/services',
  },
  {
    title: 'Cloud Infrastructure',
    desc: 'Secure, auto-scaling cloud architecture designed for reliability and growth.',
    image: '/services/service-cloud.png',
    href: '/services',
  },
  {
    title: 'IT Support & Helpdesk',
    desc: 'Responsive 24/7 support and proactive monitoring to keep your systems running.',
    image: '/services/service-support.png',
    href: '/it-support',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative border-y border-border py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="font-mono text-sm text-primary">// what_we_do</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            End-to-end engineering services
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            From concept to deployment and beyond, we cover the full software
            and infrastructure lifecycle.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-accent"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-background">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
              </div>
              <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {s.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
