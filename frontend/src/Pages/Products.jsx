import React from 'react'
import ProductList from '../Components/ProductList'


const Products = () => {
  return (
    <div className='h-auto max-w-full'>
      <header>
        <div className="relative h-[600px] overflow-hidden bg-[url(https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat"></div>
      </header>
      {/* Product Title */}
        <ProductList />
      </div>
  )
}

export default Products

