import React from 'react';
import type { Metadata } from 'next'
import './global.css';


export const metadata: Metadata = {
  title: 'Malik Robinson',
  description: 'Web site created...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}