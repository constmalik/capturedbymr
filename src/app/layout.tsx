import React from 'react';
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Open_Sans } from 'next/font/google';
import './global.css';



export const metadata: Metadata = {
  title: 'Malik Robinson',
  description: 'Web site created...',
};

const openSans = Open_Sans({
  weight: ['400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.className}>
      <head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <div id="root">{children}</div>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}