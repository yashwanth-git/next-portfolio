import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Yashwanth | Web Developer",
  description: "A Web-end developer ardent in learning new technologies specialized in frontend development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
