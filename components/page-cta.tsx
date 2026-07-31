import StackFeatureSection from '@/components/ui/stack-feature-section'

export function PageCta({
  title = 'Ready to build what comes next?',
  description = 'Tell us about your project and our team will get back to you within one business day.',
}: {
  title?: string
  description?: string
}) {
  return (
    <div className="relative overflow-hidden border-t border-border py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 100%, rgba(192,132,252,0.25), transparent 55%)',
        }}
      />
      <div className="relative">
        <StackFeatureSection title={title} description={description} />
      </div>
    </div>
  )
}
