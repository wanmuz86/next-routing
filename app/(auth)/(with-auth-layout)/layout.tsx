import Link from "next/link";
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
    return (
      <div>
        <ul>
        {
          navLinks.map((link)=>{
            return (
              <li key={link.name}>
                <Link href={link.href} >
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