import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Link from 'next/link'


export const metadata: Metadata = {
  title: "Redux Toolkit",
};
 
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <Counter />
    </div>
  )
}