"use client"

import React from 'react'
import { useRouter } from 'next/router'

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order...")
        router.push("/")
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
