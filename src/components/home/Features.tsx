import { Shield, Globe, Search, Heart } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Globe,
    title: 'You\'ll never roam alone',
    description: 'Find best travel services and book them instantly'
  },
  {
    icon: Search,
    title: 'Travel to anytime, anywhere',
    description: 'No limits and boundaries for your next destination'
  },
  {
    icon: Shield,
    title: 'Ease of mind, search filter and book',
    description: 'Let\'s help you find best travel deals and offers today'
  }
]

export default function Features() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-white/10 rounded-full mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
