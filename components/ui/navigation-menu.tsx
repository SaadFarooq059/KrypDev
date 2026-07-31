import * as React from 'react'
import Image from 'next/image'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { ArrowRightIcon, ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type NavItemType = {
  title: string
  href: string
  description?: string
  image?: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center',
        className,
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        'group flex flex-1 list-none items-center justify-center gap-1',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn('relative', className)}
      {...props}
    />
  )
}

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        'group inline-flex w-max items-center justify-center rounded-md px-4 py-1.5 font-mono text-sm text-muted-foreground transition-[color,box-shadow] outline-none hover:bg-secondary/50 hover:text-primary focus:bg-secondary/50 focus:text-primary focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-secondary/50 data-[state=open]:text-primary',
        className,
      )}
      {...props}
    >
      {children}{' '}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full md:absolute md:w-auto',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="absolute top-full left-1/2 isolate z-50 flex -translate-x-1/2 justify-center">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          'origin-top-center relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl border border-border bg-card/95 text-popover-foreground shadow-lg backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "flex flex-col justify-center gap-1 rounded-sm px-4 py-1.5 font-mono text-sm text-muted-foreground outline-none transition-all hover:bg-secondary/50 hover:text-primary focus:bg-secondary/50 focus:text-primary focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[active=true]:bg-secondary/50 data-[active=true]:text-primary [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
        className,
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

function NavGridCard({
  link,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  link: NavItemType
}) {
  return (
    <NavigationMenuPrimitive.Link asChild>
      <a href={link.href} className="block h-full">
        <div
          className={cn(
            'group relative isolate flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:border-primary/50 hover:glow-accent',
            className,
          )}
          {...props}
        >
          {link.image ? (
            <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
              <Image
                src={link.image}
                alt=""
                fill
                sizes="220px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
            </div>
          ) : link.icon ? (
            <div className="flex items-center px-3 pt-3">
              <link.icon className="size-8 text-primary" />
            </div>
          ) : null}
          <div className="relative flex min-h-[3.75rem] flex-col justify-center gap-0.5 px-3 py-2.5">
            <span className="line-clamp-2 text-sm font-medium leading-snug text-foreground">
              {link.title}
            </span>
            {link.description && (
              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                {link.description}
              </p>
            )}
          </div>
        </div>
      </a>
    </NavigationMenuPrimitive.Link>
  )
}

function NavSmallItem({
  item,
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & {
  item: Omit<NavItemType, 'description'>
}) {
  return (
    <NavigationMenuLink
      className={cn(
        'group relative h-max flex-row items-center gap-x-3 px-2 py-2',
        className,
      )}
      {...props}
    >
      {item.image ? (
        <span className="relative size-9 shrink-0 overflow-hidden rounded-lg border border-border">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="36px"
            className="object-cover"
          />
        </span>
      ) : (
        item.icon && <item.icon className="size-4 shrink-0 text-primary" />
      )}
      <p className="text-sm">{item.title}</p>
      <div className="relative ml-auto flex h-full w-4 items-center">
        <ArrowRightIcon className="size-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    </NavigationMenuLink>
  )
}

function NavLargeItem({
  link,
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & {
  link: NavItemType
}) {
  return (
    <NavigationMenuLink
      className={cn(
        'group relative flex flex-col justify-center overflow-hidden border border-border bg-background/40 p-0 hover:border-primary/40',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        {link.image ? (
          <span className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-border">
            <Image
              src={link.image}
              alt=""
              fill
              sizes="48px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </span>
        ) : (
          link.icon && (
            <link.icon className="size-6 shrink-0 text-muted-foreground" />
          )
        )}
        <div className="min-w-0 space-y-1">
          <span className="text-sm font-medium leading-none">{link.title}</span>
          {link.description && (
            <p className="line-clamp-1 text-xs text-muted-foreground">
              {link.description}
            </p>
          )}
        </div>
      </div>
    </NavigationMenuLink>
  )
}

function NavItemMobile({
  item,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  item: NavItemType
}) {
  return (
    <a
      className={cn(
        'group relative flex gap-x-2 rounded-lg p-2 text-sm outline-none transition-all hover:bg-secondary/50 hover:text-primary focus:bg-secondary/50 focus:text-primary focus-visible:ring-[3px] focus-visible:ring-ring/50',
        className,
      )}
      {...props}
    >
      <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-muted/20">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            fill
            sizes="48px"
            className="object-cover"
          />
        ) : (
          item.icon && <item.icon className="size-4 text-primary" />
        )}
      </div>
      <div className="flex h-12 flex-col justify-center">
        <p className="text-sm">{item.title}</p>
        <span className="line-clamp-1 text-xs leading-snug text-muted-foreground">
          {item.description}
        </span>
      </div>
    </a>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavGridCard,
  NavSmallItem,
  NavLargeItem,
  NavItemMobile,
  type NavItemType,
}
