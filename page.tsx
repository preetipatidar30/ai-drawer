import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Login from "@/components/main/login";
import Mainw from "@/components/main/mainwindow";
import Link from 'next/link';
import SIGNUP from "@/components/main/mainwindow";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Login/>
        <SIGNUP/>
      </div>
    </main>
  );
}
