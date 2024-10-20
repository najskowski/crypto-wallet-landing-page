import Feature from "./feature";

export default function Features() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 text-center gap-10 lg:gap-0 px-10 border-y border-y-neutral-800 py-10">
      <Feature
        h2={"Only for you"}
        p={`Only you have access to your assets and all transactions and data
          within your wallet are protected by cutting-edge encryption protocols.`}
      />
      <Feature
        h2={"Time is money"}
        p={"Our wallet is designed for speed, enabling near-instant cryptocurrency transactions with minimal delays and low fees. With optimized blockchain integration, you can send, receive, or swap coins quickly and efficiently."}
      />
      <Feature
        h2={"Anonymous"}
        p={"No email or phone number required. Transactions are pseudonymous, meaning they are tied only to your wallet address, not your identity, making it nearly impossible to trace your crypto activities."}
      />
    </section>
  );
}
