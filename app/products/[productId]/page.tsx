import React from 'react'

export default function ProductDetail(
    {params}:{params:{productId:string}}
) {
  return (
    <div>
        <h1>Product Detail</h1>
        <p>This is product detail for {params.productId}</p>
    </div>
  )
}
