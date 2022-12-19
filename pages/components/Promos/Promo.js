
import {FaAndroid, FaBox, FaMailBulk} from 'react-icons/fa'


const offers = [
    { name: 'Download the app', description: 'Get an exclusive $5 off code', href: '#', icon:<FaAndroid /> },
    { name: "Return when you're ready", description: '60 days of free returns', href: '#' , icon:<FaBox />},
    { name: 'Sign up for our newsletter', description: '15% off your first order', href: '#' ,icon:<FaMailBulk />},
  ]
  
  export default function PromoComponent() {
    return (
      <div className="">
        <div className="flex flex-col border-blg:border-0">
          <nav aria-label="Offers" className="order-last lg:order-first">
            <div className="max-w-7xl mx-auto lg:px-8">
              <ul
                role="list"
                className="grid grid-cols-1 divide-y lg:grid-cols-3 lg:divide-y-0 lg:divide-x"
              >
                {offers.map((offer) => (
                  <li key={offer.name} className="flex flex-col">
                    <span
                      href={offer.href}
                      className="relative flex-1 flex flex-col justify-center py-6 px-4 text-center focus:z-10"
                      >
                      <div className='m-auto p-3'>{offer.icon}</div>
                      <h5 className="text-sm">{offer.name}</h5>
                      <h6 className="font-semibold">{offer.description}</h6>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
  
          <div className="relative">
            <div aria-hidden="true" className="hidden absolute w-1/2 h-full lg:block" />
            <div className="relative lg:bg-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-rose-600 sm:text-5xl xl:text-6xl">
                      Focus on what matters
                    </h1>
                    <h6 className="mt-4 text-xl">
                      All the charts, datepickers, and notifications in the world cannot beat checking off some items on a
                      paper card.
                    </h6>
                    <h6>As we know a better design of a cloth, can make a better personality of a person and makes them attractive between peoples, and thats why we design our clothes from professionals all over the worldwide </h6>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-block bg-rose-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-rose-700 transition duration-600"
                      >
                        Shop Productivity
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-32 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  