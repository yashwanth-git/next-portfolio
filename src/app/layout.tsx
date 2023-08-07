import "./globals.css";
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
        {children}
      </body>
    </html>
  );
}
