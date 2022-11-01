import React from 'react';
import { Inter } from '@next/font/google';
import styles from './styles/layout.module.css';

const inter = Inter({
  variable: '--inter-font',
});

interface IRootLayout {
  children: React.ReactNode;
}
export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <title>FW NextJS 13</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body className={styles.base}>{children}</body>
    </html>
  );
}
