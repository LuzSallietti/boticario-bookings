import Image from "next/image";
import { roca } from "./ui/fonts";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={roca.className}>Home</h1>
    </main>
  );
}
