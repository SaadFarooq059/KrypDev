'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MenuIcon, XIcon } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavGridCard,
  NavItemMobile,
  NavSmallItem,
  type NavItemType,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

export const serviceLinks: NavItemType[] = [
  {
    title: 'Web App Development',
    href: '/services',
    description: 'Modern, scalable web applications',
    image: '/services/service-web.png',
  },
  {
    title: 'Mobile App Development',
    href: '/services',
    description: 'Native and cross-platform apps',
    image: '/services/service-mobile.png',
  },
  {
    title: 'Desktop Software',
    href: '/services',
    description: 'High-performance desktop tools',
    image: '/services/service-desktop.png',
  },
  {
    title: 'Custom API & Integrations',
    href: '/services',
    image: '/services/service-api.png',
  },
  {
    title: 'Cloud Infrastructure',
    href: '/services',
    image: '/services/service-cloud.png',
  },
  {
    title: 'IT Support & Helpdesk',
    href: '/it-support',
    image: '/services/service-support.png',
  },
]

export const aiLinks: NavItemType[] = [
  {
    title: 'AI Chatbots',
    href: '/ai-solutions',
    description: 'Conversational agents for support and sales',
    image: '/services/service-ai.png',
  },
  {
    title: 'Automation Pipelines',
    href: '/ai-solutions',
    description: 'Autonomous workflows with human oversight',
    image: '/services/service-automation.png',
  },
  {
    title: 'Machine Learning',
    href: '/ai-solutions',
    description: 'Custom models for prediction and classification',
    image: '/services/service-ai.png',
  },
  {
    title: 'LLM Integration',
    href: '/ai-solutions',
    image: '/services/service-llm.png',
  },
  {
    title: 'RAG & Knowledge Systems',
    href: '/ai-solutions',
    image: '/services/service-cloud.png',
  },
  {
    title: 'AI Safety & Governance',
    href: '/ai-solutions',
    image: '/services/service-governance.png',
  },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="glass mx-auto mt-3 flex h-14 w-[calc(100%-1.5rem)] max-w-6xl items-center justify-between rounded-xl border border-border px-4 md:px-5">
        <Link href="/" className="flex items-center" aria-label="KrypDev home">
          <Image
            src="/logo.png"
            alt="KrypDev"
            width={180}
            height={42}
            className="h-7 w-auto object-contain md:h-8"
            priority
          />
        </Link>

        <DesktopMenu />

        <MobileNav />
      </nav>
    </header>
  )
}

function DesktopMenu() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-full md:w-4xl md:grid-cols-[1fr_.30fr] md:items-start">
              <ul className="grid items-stretch gap-3 p-3 md:grid-cols-3 md:border-r md:border-border">
                {serviceLinks.slice(0, 3).map((link) => (
                  <li key={link.title} className="h-full min-w-0">
                    <NavGridCard link={link} />
                  </li>
                ))}
              </ul>
              <ul className="space-y-0.5 p-3">
                {serviceLinks.slice(3).map((link) => (
                  <li key={link.title}>
                    <NavSmallItem
                      item={link}
                      href={link.href}
                      className="gap-x-1"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>AI Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-full md:w-4xl md:grid-cols-[1fr_.30fr] md:items-start">
              <ul className="grid items-stretch gap-3 p-3 md:grid-cols-3 md:border-r md:border-border">
                {aiLinks.slice(0, 3).map((link) => (
                  <li key={link.title} className="h-full min-w-0">
                    <NavGridCard link={link} />
                  </li>
                ))}
              </ul>
              <ul className="space-y-0.5 p-3">
                {aiLinks.slice(3).map((link) => (
                  <li key={link.title}>
                    <NavSmallItem
                      item={link}
                      href={link.href}
                      className="gap-x-1"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/about" className="cursor-pointer">
              About Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/contact" className="cursor-pointer">
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNav() {
  const sections = [
    { id: 'services', name: 'Services', list: serviceLinks },
    { id: 'ai', name: 'AI Solutions', list: aiLinks },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary/50 lg:hidden"
        >
          <MenuIcon className="size-5" />
        </button>
      </SheetTrigger>
      <SheetContent
        className="w-full gap-0 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80"
        showClose={false}
      >
        <div className="flex h-14 items-center justify-between border-b border-border px-4">
          <Image
            src="/logo.png"
            alt="KrypDev"
            width={160}
            height={38}
            className="h-7 w-auto object-contain"
          />
          <SheetClose asChild>
            <button
              type="button"
              aria-label="Close menu"
              className="inline-flex size-9 items-center justify-center rounded-full hover:bg-secondary/50"
            >
              <XIcon className="size-5" />
            </button>
          </SheetClose>
        </div>
        <div className="grid gap-y-2 overflow-y-auto px-4 pt-5 pb-12">
          <Accordion type="single" collapsible>
            {sections.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger className="capitalize hover:no-underline">
                  {section.name}
                </AccordionTrigger>
                <AccordionContent className="space-y-1">
                  <ul className="grid gap-1">
                    {section.list.map((link) => (
                      <li key={link.title}>
                        <SheetClose asChild>
                          <NavItemMobile item={link} href={link.href} />
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <SheetClose asChild>
            <Link
              href="/about"
              className="mt-2 block rounded-lg px-2 py-3 text-sm font-medium hover:bg-secondary/50 hover:text-primary"
            >
              About Us
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/contact"
              className="mt-2 block rounded-lg px-2 py-3 text-sm font-medium hover:bg-secondary/50 hover:text-primary"
            >
              Contact
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
