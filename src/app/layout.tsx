import React from 'react';
import './globals.css';
import CSS from 'csstype';

const headerStyle: CSS.Properties = {
  backgroundColor: 'lightblue',
  padding: '2rem',
  textAlign: 'center',
  borderBottom: '2px solid #ddd',
};

const footerStyle: CSS.Properties = {
  backgroundColor: 'ghostwhite',
  padding: '1rem',
  textAlign: 'center',
  borderTop: '2px solid #ddd',
};

export const metadata = {
  title: 'Bitter Quest',
  description: 'Amari and Liqueur Finder: Discover the best amari and liqueur options in your area!',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={headerStyle}>
          <h1>Welcome to Bitter Quest</h1>
          <p>Find the amari and liqueur you need before you reach for your keys!</p> 
        </header>
        <main>
          {children}
          {/* <h2>What are you looking for?</h2>
          <p>This is filler content!</p> */}
        </main> 
        <footer style={footerStyle}>
          <p>2025 Bitter Quest </p>
        </footer>
      </body>
    </html>
  );
}
