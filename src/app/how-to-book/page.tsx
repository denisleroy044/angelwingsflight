import Link from 'next/link'
import { ChevronRight, Search, Filter, FileText, CreditCard, CheckCircle, ArrowRight } from 'lucide-react'

export default function HowToBookPage() {
  const steps = [
    {
      number: 1,
      title: 'SEARCH',
      icon: Search,
      description: 'Select your trip, type your departure and arrival cities, enter your travel dates and number of passengers.',
      color: 'blue'
    },
    {
      number: 2,
      title: 'COMPARE',
      icon: Filter,
      description: 'Compare available airfares, sorted by cheapest price and departure time. Click "Select" to continue.',
      color: 'green',
      features: [
        'Search different days by using arrow tabs',
        'Use filters on the left',
        'Click on flight price for more flight information'
      ]
    },
    {
      number: 3,
      title: 'REVIEW',
      icon: FileText,
      description: 'Check and confirm your details, scroll down and select optional extras if required. Enter your email address and click "Book Now" at the bottom of the page to continue.',
      color: 'purple',
      extras: ['Hotels', 'Cars', 'Travel Insurance']
    },
    {
      number: 4,
      title: 'CHECKOUT',
      icon: CreditCard,
      description: 'Add passenger information for all travellers in the space provided directly under your summary.',
      color: 'yellow'
    },
    {
      number: 5,
      title: 'PAYMENT',
      icon: CreditCard,
      description: 'Complete payment with your preferred method, accept terms and conditions, and click "Pay Now" to finalise your booking.',
      color: 'red'
    },
    {
      number: 6,
      title: 'CONFIRMATION',
      icon: CheckCircle,
      description: 'A confirmation page will appear to confirm your booking was successful. You will also be sent a confirmation email within 24 hours which contains all your booking details and important travel information.',
      color: 'green'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">How to Book</span>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How to Book</h1>
            
            <div className="space-y-8">
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <div key={step.number} className="relative">
                    {/* Connector line */}
                    {step.number < 6 && (
                      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
                    )}
                    
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Step Number */}
                      <div className={`w-16 h-16 rounded-full bg-${step.color}-100 flex items-center justify-center flex-shrink-0`}>
                        <span className={`text-2xl font-bold text-${step.color}-600`}>{step.number}</span>
                      </div>

                      {/* Step Content */}
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <Icon className={`w-6 h-6 text-${step.color}-600 mr-2`} />
                          <h2 className="text-xl font-bold text-gray-900">{step.title}</h2>
                        </div>
                        
                        <p className="text-gray-700 mb-4">{step.description}</p>

                        {/* Features */}
                        {step.features && (
                          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mb-3">
                            {step.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        )}

                        {/* Extras */}
                        {step.extras && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {step.extras.map((extra, i) => (
                              <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {extra}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Get Started Button */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <Link
                href="/flights"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Start Your Booking
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
