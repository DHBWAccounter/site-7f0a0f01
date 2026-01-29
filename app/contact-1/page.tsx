import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-8">
            Contact
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Get in touch with Bitcoin Association Switzerland.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}