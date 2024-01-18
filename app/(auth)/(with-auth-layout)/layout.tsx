"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AuthLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const navLinks = [
      {"name":"Register", href:"/register"},
      {"name":"Login", href:"/login"},
      {"name":"Forgot Password", href:"/forgot-password"},
    ]
    const pathname = usePathname();
    return (
      <div>
        <p>Path name is {pathname}</p>
        <ul>
        {
          navLinks.map((link)=>{
            return (
              <li key={link.name}>
                <Link 
                href={link.href} 
                style={{
                  color: pathname.startsWith(link.href) ?
                  "green" 
                  : "blue"
                }}
                >
                {link.name}
              </Link>
               </li>
            )
          })
          
        }
        </ul>
   
        {children}
        <h6>We are waiting for you</h6>
      </div>
    )
  }