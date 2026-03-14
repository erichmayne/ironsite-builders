import { Wrench, Zap, Droplets, Hammer, Paintbrush, Home, TreePine, HardHat, Thermometer, SprayCan } from 'lucide-react'

const trades = [
  { icon: Droplets, label: 'Plumbers' },
  { icon: Zap, label: 'Electricians' },
  { icon: Thermometer, label: 'HVAC Techs' },
  { icon: Hammer, label: 'Carpenters' },
  { icon: Paintbrush, label: 'Painters' },
  { icon: Home, label: 'Roofers' },
  { icon: TreePine, label: 'Landscapers' },
  { icon: Wrench, label: 'Handymen' },
  { icon: HardHat, label: 'Concrete' },
  { icon: SprayCan, label: 'Pressure Washers' },
]

const doubled = [...trades, ...trades]

export default function TradeMarquee() {
  return (
    <section className="py-12 border-y border-eggshell-300/50 overflow-hidden bg-white/30">
      <div className="relative">
        <div className="flex gap-10 w-max animate-marquee">
          {doubled.map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-eggshell-200/50 border border-eggshell-300/40 whitespace-nowrap"
            >
              <Icon className="w-5 h-5 text-blue-600/60" strokeWidth={1.8} />
              <span className="text-sm font-medium text-blue-900/50">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
