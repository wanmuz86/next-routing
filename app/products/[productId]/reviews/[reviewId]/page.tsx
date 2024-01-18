import { notFound } from 'next/navigation';
import React from 'react'

export default function ReviewDetail({
    params}:{params:{productId:string,reviewId:string}}) {
      if (parseInt(params.reviewId)> 1000){
        notFound();
      }
 
  return (
    <div>
        <h1>Review Detail</h1>
        <p>This is a review detail page
            for review of id {params.reviewId} and product {params.productId}
        </p>
        </div>
  )
}
