"use client"
import React from 'react'
import Image from 'next/image'
import { Product } from '@/app/_types/product'

interface ProductProps  {
    product:Product
}

const ProductInfo: React.FC<ProductProps> = ({ product })=> {
  return (
    <div>
        <h1>Product Detail</h1>
      <p>Id: {product.id}</p>
      <p>Name: {product.title}</p>
      <p>{product.description}</p>
      <p>USD {product.price}</p>
      <p>{product.brand}</p>
      {
        product.images.map(val=>(
        <Image
        key={val}
        src={val}
        alt={product.title}
        width={400}
        height={300}/>
        ))
      }
    </div>
  )
}
export default ProductInfo;
