"use client"
import NavAuth from "@/app/_components/nav_auth/NavAuth"
import {useState} from 'react';

export default function AuthLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {    

    const [text,setText ] = useState('')
    return (
      <div>
        <NavAuth/>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        {children}
        <h6>We are waiting for you</h6>
      </div>
    )
  }