// import NavBar from "app/components/navbar";
import React from 'react';
import './globals.css';
import CSS from "csstype";

const headerStyle: CSS.Properties = {
  backgroundColor: 'lightblue',
  padding: '2rem',
  textAlign: 'center',
};

const footerStyle: CSS.Properties = {
  backgroundColor: 'ghostwhite',
  padding: '1rem',
  textAlign: 'center',
};



const h1Styles: CSS.Properties = {
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  position: "absolute",
  right: 0,
  bottom: "2rem",
  padding: "0.5rem",
  fontFamily: "sans-serif",
  fontSize: "1.5rem",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
};

export function Heading({ title } : { title: string } ) {
  return <h1 style={h1Styles}>{title}</h1>;
}

export const metadata = {
  title: 'Bitter Quest',
  description: 'Amari and Liqueur Finder',
}

export default function RootLayout({ children }: {children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={headerStyle}>
          <h1>Welcome to Bitter Quest</h1>
          
        </header>
        {/* <NavBar /> */}
        {children}
        <footer style={footerStyle}>
          <p>Footer Content</p>
        </footer>
      </body>
    </html>
  );
}