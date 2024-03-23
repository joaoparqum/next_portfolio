import { Html, Head, Main, NextScript } from "next/document";

//compenents
import Navbar from "./component/navbar";
import Footer from "./component/footer";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body className="d-flex flex-column min-vh-100">
        <Navbar/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  );
}
