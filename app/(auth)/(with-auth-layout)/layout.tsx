import NavAuth from "@/app/_components/nav_auth/NavAuth"
export default function AuthLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    
    return (
      <div>
        <NavAuth/>
        {children}
        <h6>We are waiting for you</h6>
      </div>
    )
  }