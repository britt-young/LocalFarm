import React from 'react'
import ProductList from '../Components/ProductList'


const Products = () => {
  return (
    <div className='h-auto max-w-full'>
      <header>
        <div className="relative h-[600px] overflow-hidden bg-[url(https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"></div>
      </header>
      {/* Product Title */}
        <ProductList />
      </div>
  )
}

export default Products

