import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

export default function Product() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Product page</h1>
      <p>This is product listing page</p>
      <Image
        src="/images/iklan.jpeg"
        height={300}
        width={300}
        alt='Ads on product'
      />
      <Image
      src="https://anak2u.s3-ap-southeast-1.amazonaws.com/explore/logo/wonders-year-preschool.jpg"
      height={400}
      width={400}
      alt="School a"
      />
      <ul>
        <li> <Link href="products/1">Product 1</Link></li>
        <li><Link href="products/2">Product 2</Link></li>
        <li> <Link href="products/3">Product 3</Link></li>
      </ul>

    </div>
  )
}
