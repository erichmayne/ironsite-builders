export default function BrandMessage() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-eggshell-100 via-blue-50/30 to-eggshell-100" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-100/20 blur-[120px]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="mx-auto mb-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-600/20">
          <span className="font-display text-3xl text-white leading-none mt-1">&ldquo;</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-800 tracking-tight leading-snug mb-6">
          Your Work Speaks for Itself.
          <br />
          <span className="text-gradient">Your Brand Should Too.</span>
        </h2>

        <p className="text-lg text-blue-900/50 leading-relaxed mb-4">
          In 2026, the first thing someone does before calling you is Google you.
          No website? You look temporary. A bad website? You look careless.
          Fair or not, that&apos;s the reality.
        </p>

        <p className="text-lg text-blue-900/50 leading-relaxed mb-6">
          <span className="text-blue-900/80 font-semibold">75% of people judge a business&apos;s credibility by its website.</span>{' '}
          The tradesmen who are booked out 6 weeks aren&apos;t necessarily better at the work —
          they&apos;re just easier to find and easier to trust at first glance.
        </p>

        <p className="font-display text-lg sm:text-xl md:text-2xl font-700 text-blue-900/80 italic">
          Your reputation took years to build.
          <br />
          Your online presence should reflect that.
        </p>

        <div className="h-[3px] w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-10 rounded-full" />
      </div>
    </section>
  )
}
