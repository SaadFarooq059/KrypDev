'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FooterBackgroundGradient, TextHoverEffect } from '@/components/ui/hover-footer'

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'AI Solutions', href: '/ai-solutions' },
      { label: 'IT Support', href: '/it-support' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Support', href: '/it-support' },
      { label: 'Start a Project', href: '/contact', pulse: true },
    ],
  },
]

const contactInfo: { icon: React.ReactNode; text: string; href?: string }[] = [
  {
    icon: <Mail size={18} className="text-primary" />,
    text: 'info@krypdev.com',
    href: 'mailto:info@krypdev.com',
  },
  {
    icon: <Phone size={18} className="text-primary" />,
    text: 'Phone — Coming soon',
  },
  {
    icon: <MapPin size={18} className="text-primary" />,
    text: 'London, United Kingdom',
  },
]

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

const socialLinks = [
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
  { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
]

export function SiteFooter() {
  return (
    <footer className="relative m-4 h-fit overflow-hidden rounded-3xl border border-border bg-card/30 backdrop-blur-sm md:m-8">
      <div className="relative z-40 mx-auto max-w-7xl p-8 md:p-14">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-16">
          {/* Brand section */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="KrypDev home" className="inline-flex w-fit">
              <Image
                src="/logo.png"
                alt="KrypDev"
                width={420}
                height={98}
                className="h-14 w-auto object-contain md:h-16"
              />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We design and engineer AI-powered software, building what comes
              next for ambitious teams.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-colors hover:text-primary"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 font-heading text-lg font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative inline-block">
                    <a
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute right-[-10px] top-0 size-2 animate-pulse rounded-full bg-primary" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="mb-6 font-heading text-lg font-semibold text-foreground">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  {item.icon}
                  {item.href ? (
                    <a href={item.href} className="transition-colors hover:text-primary">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="-mb-36 -mt-52 hidden h-[30rem] lg:flex">
        <TextHoverEffect text="KrypDev" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  )
}
