import Link from 'next/link'
import React from 'react'

export default function Product() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Product page</h1>
      <p>This is product listing page</p>
      <ul>
        <li> <Link href="products/1">Product 1</Link></li>
        <li><Link href="products/2">Product 2</Link></li>
        <li> <Link href="products/3">Product 3</Link></li>
      </ul>

    </div>
  )
}
