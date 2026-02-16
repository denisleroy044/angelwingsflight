'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, ChevronDown, ChevronUp, Plane, Home, Car, HelpCircle } from 'lucide-react'

const faqData = [
  {
    category: 'Flights',
    icon: Plane,
    questions: [
      {
        q: 'How can I change my password?',
        a: 'To change your password please follow the steps below, your new password will be sent to your e-mail address that you entered when you first created your membership account.\n\n1. Log into my account on our website.\n2. You will find on the left side of the page "Change Password"\n3. Carry out the recommended steps then click "submit"\n4. The new password will be sent to your registered e-mail address immediately.'
      },
      {
        q: 'How to select my destination?',
        a: 'Your destination can be selected by entering or typing the city name or IATA code in the appropriate box.'
      },
      {
        q: 'How can I modify/cancel a previous booking?',
        a: 'You can change/cancel your previous booking at any time, however the change of date or cancellation depends completely upon the terms and conditions of the airlines you have chosen, the fare and availability of your amended booking.\n\n1. Log into www.capitaltta.online\n2. Go to my account and choose the itinerary that need to be cancelled then press cancel button.\n3. Write down the reason for cancellation\n4. Submit your request.\n\nOur customer service team will review the terms and conditions that apply to your request and inform you about the cancellation policy. There is a possibility that additional service fee may be charged for cancellation/change of date depending upon the terms and conditions of the airlines.\n\nYou can change/cancel your reservation by calling Capital Trust Travel Agency at Our customer service agents are available 24 hours a day, 7 days a week.'
      },
      {
        q: 'How can I access more information about hotels, car rentals and cruise arrangements?',
        a: 'Capital Trust Travel Agency offers hotel, car rental and cruise arrangements. You can reach our customer service team and they will gladly extend support regarding bookings, payment and others.'
      },
      {
        q: 'What does online payment mean?',
        a: "It's the new booking service on capitaltta.online that makes it easy and instant to pay and issue your ticket."
      },
      {
        q: 'What do I need for making an online payment?',
        a: 'All that you need is to have a valid credit card.'
      },
      {
        q: 'Once the payment is done, where can I get my tickets?',
        a: 'The electronic tickets will be automatically issued; you can view and print the passenger receipt, invoice and e-ticket by logging into My account section on phptravels.net homepage. It will also be sent to your email.'
      },
      {
        q: 'What happens if I cancel my booking that I paid for online and collected my tickets?',
        a: 'By cancelling the booking online, the refunded amount will be automatically deposited into your account; several charges might be applied for each passenger in the booking.'
      },
      {
        q: 'After paying online, if I did not receive the ticket, what shall I do?',
        a: 'If you did not receive your e-ticket within 24 hour or your flight is soon, please contact Flyin.com customer service team.'
      },
      {
        q: 'Electronic ticket, what does it mean?',
        a: 'It is the electronic form of a paper ticket and a method to document the sale where the e-ticketing record is stored in the airline database and it can be retrieved at any time. The passenger will be provided with an e-ticket receipt instead of the normal paper ticket.'
      },
      {
        q: "What's the value of e-ticketing?",
        a: 'To provide passengers with the simplest, most efficient and convenient service.'
      },
      {
        q: 'How is electronic ticket useful?',
        a: 'E-Tickets bring an array of benefits to passengers as no hardcopy tickets to be carried during the trip, no lost tickets, easier modification of ticket itineraries, faster refund process, faster check-in at airports and self-service kiosks. In addition, e-tickets can be purchased through more convenient channels (i.e. internet).'
      },
      {
        q: "What's the value of booking information while issuing an e-ticket?",
        a: 'Having the proper booking information enables the airline to provide better customer service. Therefore, the passenger shall ensure that his/her name must be spelt as per the passport.'
      },
      {
        q: 'Are there any additional requirements to issue e-tickets?',
        a: 'As long as the passenger has spelt his/her name as shown on the passport and receives and maintain the e-ticket receipt, his journey is confirmed.\n\nOne of the following identification documents must be presented:\n- Passport (must be available in all international flights)\n- Residency ID\n- National ID'
      },
      {
        q: 'Do I have to carry a copy of the e-ticket receipt to check-in the flight?',
        a: 'We recommend that you show the e-ticket receipt along with same form of identification. This will facilitate and speed up the check in process.'
      },
      {
        q: 'Do I have to carry a copy of the e-ticket receipt to step in the airport?',
        a: 'We recommend the passenger to always have a copy of their e-ticket receipt to be shown to airport security if requested.'
      }
    ]
  },
  {
    category: 'Hotels',
    icon: Home,
    questions: [
      {
        q: 'Do children receive discounted prices?',
        a: 'The policy regarding child reductions varies between hotels. Please be assured that whenever child discounts apply, it will be passed onto you.'
      },
      {
        q: 'What does the total price includes?',
        a: 'The price displayed is the total cost of the room/s requested for the duration of your trip. The price also includes flyin.com service fees.'
      },
      {
        q: 'Can I book over the telephone?',
        a: 'Yes, our customers should have the choice of either booking on our website or, if they prefer, over the telephone. Click here (contact us) for more information.'
      },
      {
        q: 'Can I book without email address?',
        a: 'If you do not have one, please contact our customer services team who will be glad to make a reservation on your behalf.'
      },
      {
        q: 'Can I book on behalf of my friends or somebody else?',
        a: 'Yes you can. You may make the reservation online or via our customer service team.'
      },
      {
        q: "Why is the hotel's rate different to when I last visited?",
        a: "In fact, capitaltta.online uses different hotel suppliers to give you the best prices and ongoing availability. Prices can change regularly based on supply and demand, hotel availability and currency fluctuations. However the price will not change after we receive the payment, thus we encourage you to place your reservation immediately."
      },
      {
        q: 'Will the photo of the room displayed on the site be the one I\'ll get?',
        a: "Please be aware that room size, design, fixtures, furnishings and facilities may vary from those shown on the photographs. Also please note that some hotels don't make modifications for a while that's why the photos may differ from the real."
      },
      {
        q: 'How late can I check in to a hotel?',
        a: 'Most hotels will allow check in at any time during the day, however check out is usually restricted to a specific time. Please consult your hotel and check their check out policy. However for late check in please contact the hotel directly and inform them with the situation, because some hotels consider it as "No show".'
      },
      {
        q: 'How do I know if my hotel booking is confirmed?',
        a: "Once you complete your booking payment, we will send the hotel voucher to your email immediately including the booking reference number. You can also access all the bookings you have placed with us online through the 'My Account' section accessible via our homepage. After log in, you can review your travel itinerary and print additional copies of your hotel voucher."
      },
      {
        q: 'Do I have to re-confirm my booking?',
        a: 'You do not need to re-confirm your booking either with us or with the hotel directly. If you have any questions related to your booking before your departure please contact our customer services team who will be happy to help.'
      },
      {
        q: 'What documents do I need to check in at the Hotel?',
        a: 'You will receive a confirmation email and voucher; print it before your departure and show it to the hotel receptionist to avoid any inconvenience. Some hotels ask for a valid credit card for any optional charges/fees.'
      },
      {
        q: 'What are the methods of payment?',
        a: 'We can only accept valid credit cards, debit cards and cash as methods of payment. Because your protection against the loss of money, you should review the valid payment methods to understand how you can select a payment method and how protection differs depending on your payment method.'
      },
      {
        q: 'Should I be afraid to enter my credit/debit card details?',
        a: 'Capital Trust Travel Agency uses HSBC/SABB bank payment page which is fully secured and your credit card details will be encrypted (will be transferred into a secret code) once entered for your privacy. Capital Trust Travel Agency uses National bank of Egypt payment page which is fully secured and your credit card details will be encrypted (will be transferred into a secret code) once entered for your privacy.'
      },
      {
        q: 'I have contacted the hotel and they don\'t have my reservation?',
        a: "Generally, your name will be sent within 72 hours before your arrival date. Please rest assured that the room is booked and we will be sending the guest names closer to the arrival date."
      },
      {
        q: 'What happens if my arrival is delayed?',
        a: "Most of our hotel rooms will be held until 5am the following morning. However on certain occasions, the hotel will hold your reservation until 00.01 the day after your check in date. If your delay means that you will be arriving later than midnight we recommend you to either contact our customer services team or the hotel directly in order to make arrangements to hold your room for longer."
      },
      {
        q: 'How do I reach the hotel?',
        a: 'Once your booking is complete, we will send the voucher that includes the hotel address, phone number and reference number. It is your responsibility to arrange travel to and from the hotel.'
      }
    ]
  }
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">FAQ</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center space-x-3 mb-6">
                <HelpCircle className="w-8 h-8 text-blue-600" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
              </div>

              <div className="space-y-8">
                {faqData.map((category, categoryIndex) => {
                  const Icon = category.icon
                  return (
                    <div key={category.category}>
                      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Icon className="w-5 h-5 text-blue-600 mr-2" />
                        {category.category}
                      </h2>
                      <div className="space-y-3">
                        {category.questions.map((item, questionIndex) => {
                          const key = `${categoryIndex}-${questionIndex}`
                          const isOpen = openItems[key]
                          return (
                            <div key={questionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                              <button
                                onClick={() => toggleItem(categoryIndex, questionIndex)}
                                className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                              >
                                <span className="font-medium text-gray-900">{item.q}</span>
                                {isOpen ? (
                                  <ChevronUp className="w-5 h-5 text-gray-500" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-gray-500" />
                                )}
                              </button>
                              {isOpen && (
                                <div className="p-4 bg-gray-50 border-t border-gray-200">
                                  <p className="text-gray-700 whitespace-pre-line">{item.a}</p>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our customer service team is available 24/7 to help you with any questions or concerns.
              </p>
              
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Contact Us
                </Link>
                <Link
                  href="/support"
                  className="block w-full border border-blue-600 text-blue-600 text-center px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  Visit Support Center
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
