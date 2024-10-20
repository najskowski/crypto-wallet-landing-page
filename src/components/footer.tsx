export default function Footer() {
  return (
    <footer className="border-t border-t-neutral-800 grid grid-cols-3 p-10 text-neutral-500">
      <div className="flex flex-col">
        <span className="text-xl font-medium mb-2">Product</span>
        <a href="/">Download</a>
        <a href="/">Security</a>
        <a href="/">Features</a>
        <a href="/">Blog</a>
        <a href="/">Support</a>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-medium mb-2">Resources</span>
        <a href="/">Explore</a>
        <a href="/">Learn</a>
        <a href="/">Blog</a>
        <a href="/">Docs</a>
        <a href="/">Taxes</a>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-medium mb-2">Company</span>
        <a href="/">About Us</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms of Service</a>
      </div>
    </footer>
  )
}