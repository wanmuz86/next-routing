import { notFound } from 'next/navigation'
import {Product} from '@/app/_types/product';
import ProductInfo from '@/app/_components/productInfo/ProductInfo';
import React from 'react'


// A promise -> an asynchronous type of function that will either return
// success with or without Data
// error
const getData = async(productId:string): Promise<Product> => {
  const response = await fetch(`https://dummyjson.com/products/${productId}`)
  if (!response.ok){
    throw new Error('failed to fetch product')
  }
  return response.json()
}

const ProductDetail = async (
  { params }: { params: { productId: string } }
)  => {
  const product = await getData(params.productId)
  return (
    <div>
    
      <ProductInfo product={product}/>
    </div>
  )
}
export default ProductDetail;