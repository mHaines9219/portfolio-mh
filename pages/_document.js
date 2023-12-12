import { Html, Head, Main, NextScript } from 'next/document';
import Navbar from '@/components/NavBar';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Navbar />
      <body>
        <Main />
        <NextScript />
        <footer>Footer goes here</footer>
      </body>
    </Html>
  );
}
