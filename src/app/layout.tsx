import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ocean Maintenance - Autowerkstatt & Service Bern",
  description: "Professionelle Autowerkstatt in Bern. Reparaturen, Wartung, Inspektion und 24h Notdienst. Über 21 Jahr Erfahrung für Ihr Vertrauen.",
  keywords: "Autowerkstatt, Garage, Reparatur, Wartung, Service, Bern, Ocean Maintenance, Notdienst, Auto Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
