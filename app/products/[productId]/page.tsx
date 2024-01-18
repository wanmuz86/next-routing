import { notFound } from 'next/navigation'
import React from 'react'

export default function ProductDetail(
  { params }: { params: { productId: string } }
) {
  if (parseInt(params.productId) > 1000) {
    notFound()
  }
  return (
    <div>
      <h1>Product Detail</h1>
      <p>This is product detail for {params.productId}</p>
    </div>
  )
}
