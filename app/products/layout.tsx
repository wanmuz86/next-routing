export default function ProductLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
   
        {children}
        <hr/>
        <h2>Recommended products</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, officiis delectus iure eveniet necessitatibus debitis, optio animi modi dicta unde et consequatur sapiente iusto beatae totam. Dolorum sit quos cum.</p>
      </section>
    )
  }