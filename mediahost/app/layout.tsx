import "./globals.css";
import  { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import { ClerkProvider } from "@clerk/nextjs";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/Sonner";
import AuthProvider from "@/components/AuthProvider";

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
            <main className="flex-1">
              <AuthProvider>
                {children}
              </AuthProvider>
              </main>
            <WhatsAppButton />
            <Footer />
          </div>
          <Toaster />            
      </body>
    </html>
  );
}
