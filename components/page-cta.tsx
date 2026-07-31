import { BuildSystemCta } from '@/components/build-system-cta'

export function PageCta({
  title = 'Ready to build what comes next?',
  leftBadge = 'Custom Software',
  rightBadge = 'Global Support',
  href = '/contact',
}: {
  title?: string
  leftBadge?: string
  rightBadge?: string
  href?: string
}) {
  return (
    <BuildSystemCta
      title={title}
      leftBadge={leftBadge}
      rightBadge={rightBadge}
      href={href}
    />
  )
}
