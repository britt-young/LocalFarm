import React from 'react'
// import ProductCards from '../Components/ProductCards'
import background from '../assets/imgs/background.jpg'
import ProductList from '../Components/ProductList'


const Products = () => {
  return (
    <div className='h-auto max-w-full'>
      {/* Product Title */}
      <div className="divide-y-2 divide-solid divide-lime-900 mx-20">
        <h2 className="flex justify-center pt-10 text-5xl">Product Catelog</h2>
        <div className="px-10">
          <p className="text-lg m-4 lg:mx-40 px-2 text-center">
            Explore our selection of fresh products grown with care and
            harvested at their peak. Each item is carefully cultivated to bring
            the best flavors and nutrients to your table. Taste the difference
            of naturally grown, fresh-from-the-farm goodness!
          </p>
        </div>
        <ProductList />
      </div>
      
    </div>
  )
}

export default Products

