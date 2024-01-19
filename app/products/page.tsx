import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import {Product} from '@/app/_types/product';


const getData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Something is wrong")

  }
  return res.json();
}

// Change to arrow notification so I can call async await
const Product = async () => {
  const products = await getData();
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Product page</h1>
      <p>This is product listing page</p>

      <Image
        src="https://anak2u.s3-ap-southeast-1.amazonaws.com/explore/logo/wonders-year-preschool.jpg"
        height={400}
        width={400}
        alt="School a"
      />
      <ul>
        {
          products.products.map((val : Product) => {
            return (
              <li key={val.id}>
                <Link href={`products/${val.id}`}>
                  {val.title}
                </Link></li>
            )
          }
          )
        }
      </ul>
      {/* <ul>
        <li> <Link href="products/1">Product 1</Link></li>
        <li><Link href="products/2">Product 2</Link></li>
        <li> <Link href="products/3">Product 3</Link></li>
      </ul>
*/}
    </div>
  )
}
export default Product;
