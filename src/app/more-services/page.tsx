'use client'
import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, 
  Package, 
  Car, 
  Bus, 
  Train, 
  Plane, 
  Camera, 
  Globe, 
  Languages, 
  Tent, 
  Trophy,
  Phone,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

type ServiceCategory = {
  title: string
  icon: any
  services: {
    name: string
    type: string
    description?: string
  }[]
}

type PopupData = {
  title: string
  service: string
  description: string
  contactText: string
}

export default function MoreServicesPage() {
  const [selectedPopup, setSelectedPopup] = useState<PopupData | null>(null)
  const [expandedCategory, setExpandedCategory] = useState<string | null>('packages')

  const categories: ServiceCategory[] = [
    {
      title: 'Packages',
      icon: Package,
      services: [
        { name: 'Domestic packages', type: 'domestic', description: 'Explore your own country with our specially curated domestic travel packages.' },
        { name: 'Cruise packages', type: 'cruise', description: 'Luxurious cruise experiences to exotic destinations around the world.' },
        { name: 'Sports packages', type: 'sports', description: 'Watch live sports events with our exclusive sports travel packages.' },
        { name: 'Language course packages', type: 'language', description: 'Learn a new language while traveling with our language immersion packages.' },
        { name: 'Summer camps', type: 'summer', description: 'Fun-filled summer camps for kids and teens in exciting locations.' }
      ]
    },
    {
      title: 'Transportation',
      icon: Car,
      services: [
        { name: 'Car rental', type: 'car', description: 'Rent a car for your journey with our wide selection of vehicles.' },
        { name: 'Transfers', type: 'transfers', description: 'Airport and hotel transfers for a hassle-free travel experience.' },
        { name: 'Train tickets', type: 'train', description: 'Book train tickets for domestic and international routes.' },
        { name: 'Private jet', type: 'jet', description: 'Luxury private jet charter services for VIP travel.' }
      ]
    },
    {
      title: 'Sightseeing & activities',
      icon: Camera,
      services: [
        { name: 'Domestic activities', type: 'domestic-activities', description: 'Exciting activities and tours within your country.' },
        { name: 'International activities', type: 'international-activities', description: 'Adventure and cultural activities around the world.' }
      ]
    },
    {
      title: 'Visa Services',
      icon: Globe,
      services: [
        { name: 'Visa', type: 'visa', description: 'Visa assistance and processing for international travel.' },
        { name: 'Airport lounge passes', type: 'lounge', description: 'Access to airport lounges worldwide for a comfortable wait.' },
        { name: 'VIP meet & greet', type: 'vip', description: 'Personalized VIP services at airports.' },
        { name: 'International driving licence', type: 'driving-licence', description: 'Get your international driving permit for hassle-free car rentals abroad.' },
        { name: 'Cargo', type: 'cargo', description: 'Shipping and cargo services for personal and business needs.' },
        { name: 'Conference services', type: 'conference', description: 'Event and conference organization services.' },
        { name: 'Concierge services', type: 'concierge', description: 'Personal concierge services for all your travel needs.' }
      ]
    }
  ]

  const getPopupContent = (service: string, type: string): PopupData => {
    const popups: Record<string, PopupData> = {
      'domestic': {
        title: 'How to book',
        service: 'Domestic packages',
        description: 'Please contact us for the service',
        contactText: 'Call us'
      },
      'cruise': {
        title: 'How to book',
        service: 'Cruise packages',
        description: 'Please contact us for the service',
        contactText: 'Call us'
      },
      'sports': {
        title: 'How to book',
        service: 'Sports packages',
        description: 'Please contact us for the service',
        contactText: 'Call us'
      },
      'language': {
        title: 'How to book',
        service: 'Language course packages',
        description: 'Please contact us for the service',
        contactText: 'Call us'
      },
      'summer': {
        title: 'How to book',
        service: 'Summer camps',
        description: 'Please contact us for the service',
        contactText: 'Call us'
      },
      'car': {
        title: 'How to book',
        service: 'Car rental',
        description: 'Book online or contact us for assistance',
        contactText: 'Call us'
      },
      'transfers': {
        title: 'How to book',
        service: 'Transfers',
        description: 'Book your transfers online or contact us',
        contactText: 'Call us'
      },
      'train': {
        title: 'How to book',
        service: 'Train tickets',
        description: 'Book train tickets online',
        contactText: 'Call us'
      },
      'jet': {
        title: 'How to book',
        service: 'Private jet',
        description: 'Please contact us for private jet charter',
        contactText: 'Call us'
      },
      'domestic-activities': {
        title: 'How to book',
        service: 'Domestic activities',
        description: 'Browse and book activities online',
        contactText: 'Call us'
      },
      'international-activities': {
        title: 'How to book',
        service: 'International activities',
        description: 'Browse and book activities online',
        contactText: 'Call us'
      },
      'visa': {
        title: 'Visa Services',
        service: 'Visa',
        description: 'Visa assistance and processing',
        contactText: 'Call us'
      },
      'lounge': {
        title: 'How to book',
        service: 'Airport lounge passes',
        description: 'Book lounge passes online',
        contactText: 'Call us'
      },
      'vip': {
        title: 'VIP Services',
        service: 'VIP meet & greet',
        description: 'Book VIP services online',
        contactText: 'Call us'
      },
      'driving-licence': {
        title: 'How to apply',
        service: 'International driving licence',
        description: 'Apply online or contact us',
        contactText: 'Call us'
      },
      'cargo': {
        title: 'Cargo Services',
        service: 'Cargo',
        description: 'Contact us for cargo shipping',
        contactText: 'Call us'
      },
      'conference': {
        title: 'Conference Services',
        service: 'Conference services',
        description: 'Contact us for conference planning',
        contactText: 'Call us'
      },
      'concierge': {
        title: 'Concierge Services',
        service: 'Concierge services',
        description: '24/7 concierge for all your needs',
        contactText: 'Call us'
      }
    }
    return popups[type] || {
      title: 'How to book',
      service: service,
      description: 'Please contact us for the service',
      contactText: 'Call us'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">More Services</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">More Services</h1>
          <p className="text-gray-600">Discover all the additional services we offer</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.title} className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
                  className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                  </div>
                  {expandedCategory === category.title ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {/* Services List */}
                {expandedCategory === category.title && (
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {category.services.map((service) => (
                        <button
                          key={service.name}
                          onClick={() => setSelectedPopup(getPopupContent(service.name, service.type))}
                          className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors text-left group"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-blue-600">{service.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <p className="text-gray-700 text-center">
            Looking for something specific? Contact our customer service team for personalized assistance.
          </p>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full animate-fade-in">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{selectedPopup.title}</h3>
                <button
                  onClick={() => setSelectedPopup(null)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-lg font-semibold text-blue-600 mb-2">{selectedPopup.service}</p>
                <p className="text-gray-600 mb-4">{selectedPopup.description}</p>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">{selectedPopup.contactText}</p>
                  <a 
                    href="tel:+97141234567" 
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-semibold">+971 4 123 4567</span>
                  </a>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedPopup(null)}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
