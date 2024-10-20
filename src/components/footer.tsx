export default function Footer() {
  return (
    <footer className="border-t border-t-neutral-800 p-10 text-neutral-500">
      <div className="text-neutral-400 pb-3 space-y-0.5 text-lg">
        <span className="text-xl font-medium">Don't miss anything</span>
        <p>Sign to our newsletter</p>
        <input
          type="email"
          className="bg-neutral-800/75 px-2 py-1 rounded-lg"
          spellCheck={false}
          placeholder="E-mail address"
        />{" "}
        <button type="button" className="bg-neutral-800/75 px-2 py-1 rounded-lg">
          Notify me
        </button>
      </div>
      <div className="grid grid-cols-3">
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
      </div>
    </footer>
  );
}
