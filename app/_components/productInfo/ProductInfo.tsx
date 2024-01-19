"use client"
import React from 'react'
import Image from 'next/image'
export default function ProductInfo({product}) {
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
        src={val}
        alt={product.title}
        width={400}
        height={300}/>
        ))
      }
    </div>
  )
}
