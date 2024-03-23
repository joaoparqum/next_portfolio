import Image from "next/image";
import { Inter } from "next/font/google";

import Navbar from "./component/navbar";
import  Home  from "./component/home";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <div>
      <Home/>
    </div>
  );
}
