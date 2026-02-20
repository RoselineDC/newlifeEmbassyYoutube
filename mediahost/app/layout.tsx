import "./globals.css";
import  { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import { ClerkProvider } from "@clerk/nextjs";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/Sonner";

export const metadata: Metadata = {
  title: {
    template: "NewLife Youtube Media Host | %s",
    default: "NewLife Youtube Media Host",
  },
  description: "A light to the nations ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
          <div className="flex flex-col min-h-screen">
            <Header />        
            <main className="flex-1">{children}</main>
            <WhatsAppButton />
            <Footer />
          </div>

          <Toaster
            // position="bottom-right"
            // toastOptions={{
            //   style: {
            //     background: "#000000",
            //     color: "#ffffff",
            //   },
            // }}
          />
        {/* </ClerkProvider> */}
      </body>
    </html>
  );
}
