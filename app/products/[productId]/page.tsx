import { notFound } from 'next/navigation'
import {Product} from '@/app/_types/product';
import React from 'react'


const getData = async(productId:string) =>{
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
      <h1>Product Detail</h1>
      <p>Id: {product.id}</p>
      <p>Name: {product.title}</p>
    </div>
  )
}
export default ProductDetail;