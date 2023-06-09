import { NextAuthProvider } from "../../context/NextAuthProvider";
import "./globals.css";

export const metadata = {
  title: "Chat App",
  description: "Generated by create next app",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}

export default RootLayout;
