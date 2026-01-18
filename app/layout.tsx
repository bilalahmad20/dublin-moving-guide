import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChecklistProvider } from "@/contexts/ChecklistContext";
import Navigation from "@/components/Navigation";
import PasswordGate from "@/components/PasswordGate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dublin Moving Guide | For Work Permit Holders",
  description: "A comprehensive interactive guide for moving to Dublin, Ireland on a work permit. Track your progress through PPS number, IRP registration, and all essential tasks.",
  keywords: "Dublin, Ireland, moving guide, work permit, PPS number, IRP, immigration, expat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChecklistProvider>
          <PasswordGate>
            <div className="min-h-screen bg-gray-50">
              <Navigation />
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
              </main>
              <footer className="bg-white border-t border-gray-200 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                  <p className="text-center text-sm text-gray-600">
                    Dublin Moving Guide • {new Date().getFullYear()}
                  </p>
                </div>
              </footer>
            </div>
          </PasswordGate>
        </ChecklistProvider>
      </body>
    </html>
  );
}
