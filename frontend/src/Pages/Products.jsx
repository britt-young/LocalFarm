import React from 'react'
import ProductCards from '../Components/ProductCards'


const Products = () => {
  return (
    <div className='m-20'>
      {/* Product Title */}
      <div className="divide-y-2 divide-solid divide-lime-900 mx-20">
        <h2 className="flex justify-center m-5 text-5xl">Product Catelog</h2>
        <div className="px-10">
          <p className="text-lg m-4 lg:mx-40 px-2 text-center">
            Explore our selection of fresh products grown with care and
            harvested at their peak. Each item is carefully cultivated to bring
            the best flavors and nutrients to your table. Taste the difference
            of naturally grown, fresh-from-the-farm goodness!
          </p>
        </div>
      </div>
      <ProductCards/>
    </div>
  )
}

export default Products
