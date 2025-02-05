"use client";

import { useEffect, useState } from 'react';
import localFont from "next/font/local";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation'; // Use usePathname from next/navigation
import "./globals.css";
import React from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface ChildProps {
  role: string | null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactElement<ChildProps> | React.ReactElement<ChildProps>[];
}) {
  const [role, setRole] = useState<string | null>(null);
  const [isLandingPage, setIsLandingPage] = useState<boolean>(false);
  const pathname = usePathname(); // Use usePathname hook to get the current pathname

  useEffect(() => {
    // Set the landing page status based on the current pathname
    setIsLandingPage(pathname === '/');
  }, [pathname]); // Only run when the pathname changes

  return (
    <ClerkProvider>
      <UserInfo setRole={setRole} />
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {/* Clerk Authentication Buttons */}
          <SignedOut>
            {!isLandingPage && <SignInButton />} {/* Render SignInButton only if not on the landing page */}
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Main content area */}
          <main className="flex-grow p-6 bg-gray-100">
            {React.Children.map(children, (child) =>
              React.isValidElement(child)
                ? React.cloneElement(child, { role }) // Pass role as prop
                : child
            )}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

function UserInfo({ setRole }: { setRole: (role: string | null) => void }) {
  const { user } = useUser(); // Get user information from Clerk

  useEffect(() => {
    // Set role from user metadata
    if (user) {
      const userRole = typeof user.publicMetadata?.role === 'string' ? user.publicMetadata.role : null; // Ensure userRole is a string or null
      setRole(userRole);
    }
  }, [user, setRole]);

  return null; // This component does not need to render anything
}
