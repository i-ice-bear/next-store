import React from 'react'

const CategoryShoppingComponent = () => {
  return (
    <>
    <div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight">Shop by Category</h2>
          <a href="#" className="hidden text-sm font-semibold text-rose-600 hover:text-rose-500 sm:block">
            Browse all categories<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="p-6 flex items-end">
              <div>
                <h3 className="font-semibold text-white">
                  <h2 className='text-rose-600 font-bold'>
                    <span className="absolute inset-0" />
                    New Arrivals
                  </h2>
                </h3>
                <h6 aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </h6>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <h2 className='font-bold text-rose-600'>
                    <span className="absolute inset-0" />
                    Accessories
                  </h2>
                </h3>
                <h6 aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </h6>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <h2 className='font-bold text-pink-600'>
                    <span className="absolute inset-0" />
                    Workspace
                  </h2>
                </h3>
                <h6 aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <button href="#" className="block text-sm font-semibold text-rose-600 hover:text-rose-500">
            Browse all categories<span aria-hidden="true"> &rarr;</span>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default CategoryShoppingComponent