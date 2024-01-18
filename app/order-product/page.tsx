"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order...")

        // check with router.place("/")
        router.push("/")

        //router.back -> Bring user to the previous page
    }
  
    return (
    <div>
        <h1>Order Page</h1>
        <button onClick={handleClick}>
            Place Order
        </button>
    </div>
  )
}
