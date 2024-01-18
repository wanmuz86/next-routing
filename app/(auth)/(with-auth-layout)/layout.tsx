export default function AuthLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
   
        {children}
        <h6>We are waiting for you</h6>
      </div>
    )
  }