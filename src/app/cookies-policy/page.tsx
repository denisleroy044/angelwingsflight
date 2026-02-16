import Link from 'next/link'
import { ChevronRight, Cookie, Info, AlertTriangle, Settings, Shield } from 'lucide-react'

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Cookies Policy</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Cookie className="w-8 h-8 text-blue-600" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Cookies Policy</h1>
              </div>
              
              <p className="text-gray-600 mb-6">
                This is the Cookie Policy for CAPITAL TRUST TRAVEL AGENCY, accessible from www.capitaltta.online
              </p>

              <div className="space-y-8">
                {/* What Are Cookies */}
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Info className="w-5 h-5 text-blue-600 mr-2" />
                    What Are Cookies
                  </h2>
                  <p className="text-gray-700">
                    As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.
                  </p>
                </section>

                {/* How We Use Cookies */}
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Settings className="w-5 h-5 text-blue-600 mr-2" />
                    How We Use Cookies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
                  </p>
                </section>

                {/* Disabling Cookies */}
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-blue-600 mr-2" />
                    Disabling Cookies
                  </h2>
                  <p className="text-gray-700">
                    You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.
                  </p>
                </section>

                {/* The Cookies We Set */}
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">The Cookies We Set</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Account related cookies</h3>
                      <p className="text-gray-700">
                        If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Login related cookies</h3>
                      <p className="text-gray-700">
                        We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email newsletters related cookies</h3>
                      <p className="text-gray-700">
                        This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Orders processing related cookies</h3>
                      <p className="text-gray-700">
                        This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Surveys related cookies</h3>
                      <p className="text-gray-700">
                        From time to time we offer user surveys and questionnaires to provide you with interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part in a survey or to provide you with accurate results after you change pages.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Forms related cookies</h3>
                      <p className="text-gray-700">
                        When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Site preferences cookies</h3>
                      <p className="text-gray-700">
                        In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Third Party Cookies */}
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Third Party Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Google Analytics</h3>
                      <p className="text-gray-700">
                        This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Affiliate Tracking</h3>
                      <p className="text-gray-700">
                        Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see if our customers have come to the site through one of our partner sites so that we can credit them appropriately and where applicable allow our affiliate partners to provide any bonus that they may provide you for making a purchase.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Social Media Cookies</h3>
                      <p className="text-gray-700">
                        We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the following social media sites including Facebook, Twitter, and Instagram will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.
                      </p>
                    </div>
                  </div>
                </section>

                {/* More Information */}
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">More Information</h2>
                  <p className="text-gray-700">
                    For more information on cookies and how to manage them, you can visit{' '}
                    <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      www.aboutcookies.org
                    </a>
                    {' '}or the Wikipedia article on{' '}
                    <a href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      HTTP Cookies
                    </a>.
                  </p>
                </section>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cookie Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Essential Cookies</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Always Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Analytics Cookies</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Marketing Cookies</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Save Preferences
              </button>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Related Links</h4>
                <ul className="space-y-2">
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
