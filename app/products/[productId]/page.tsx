import { notFound } from 'next/navigation'
import {Product} from '@/app/_types/product';
import Image from 'next/image';

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
      <p>{product.description}</p>
      <p>USD {product.price}</p>
      <p>{product.brand}</p>
      {/* {
        product.images.map(val=>(
        <Image
        src={val}
        alt={product.title}
        width={400}
        height={300}/>
        ))
      } */}
    </div>
  )
}
export default ProductDetail;