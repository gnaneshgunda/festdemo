
// app/layout.tsx
export const metadata = {
    title: 'Space Fest',
    description: 'Welcome to Space Fest!',
  };
  
  export default function RootLayout({
    children,
    navbar
  }: {
    children: React.ReactNode;
    navbar: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        </head>
        <body>
            <header>
              {navbar}
            </header>
            <main style={{position:'relative',top:'10vh'}}>{children}</main>
            </body>
      </html>
    );
  }
  