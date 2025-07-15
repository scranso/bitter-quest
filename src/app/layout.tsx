import NavBar from "app/components/navbar";

export const metadata = {
  title: 'Bitter Quest',
  description: 'Amari and Liqueur Finder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          
        </header>
        <NavBar />
        {/* <ErrorWrapper> */}
        {children}
        {/* </ErrorWrapper> */}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}
        >
          
        </footer>
      </body>
    </html>
  );
}