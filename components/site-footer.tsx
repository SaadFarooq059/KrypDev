'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, GitBranch, MessageCircle, Link as LinkIcon, Globe } from 'lucide-react'
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

const contactInfo = [
  {
    icon: <Mail size={18} className="text-primary" />,
    text: 'Email — Coming soon',
  },
  {
    icon: <Phone size={18} className="text-primary" />,
    text: 'Phone — Coming soon',
  },
  {
    icon: <MapPin size={18} className="text-primary" />,
    text: 'Remote · Worldwide',
  },
]

const socialLinks = [
  { icon: <GitBranch size={20} />, label: 'GitHub', href: '#' },
  { icon: <MessageCircle size={20} />, label: 'Community', href: '#' },
  { icon: <LinkIcon size={20} />, label: 'LinkedIn', href: '#' },
  { icon: <Globe size={20} />, label: 'Website', href: '#' },
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
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-t border-border" />

        {/* Footer bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row md:gap-0">
          <div className="flex gap-6 text-muted-foreground">
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
          <p className="text-center text-muted-foreground md:text-left">
            © {new Date().getFullYear()} KrypDev. We build what comes next.
          </p>
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
