// import React from "react";

// export default function StoresLayout ({ children }: { children: React.ReactNode }) {
//     return (
//         <div>
//             <header>Stores Page Header</header>
//             <main>{children}</main>
//         </div>
//     );
// };



import React, { ReactNode } from 'react';

interface ProductLayoutProps {
    children: ReactNode; // declaring the children prop will be passed in from the nested pages
}

const ProductLayout = ({ children}: ProductLayoutProps) => {
    console.log("Rendering ProductLayout"); // logging to the console to demonstrate the component's rendering
  return (
    <div>
      <header>
        <h1>Store and Product Layout</h1>
      </header>
      <main>
        {children} {/* This is where the nested pages will be rendered */}
      </main>
    </div>
  );
};

export default ProductLayout;




// export default function RootLayout({children}: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <header style={headerStyle}>
//           <h1>Welcome to Bitter Quest</h1>
//           <p>Find the amari and liqueur you need before you reach for your keys!</p> 
//         </header>
//         <main>
//           {children}
//           {/* <h2>What are you looking for?</h2>
//           <p>This is filler content!</p> */}
//         </main> 
//         <footer style={footerStyle}>
//           <p>2025 Bitter Quest </p>
//         </footer>
//       </body>
//     </html>
//   );
// }
