import Link from "next/link";

export default function Home() {
  return (
    <div className="m-5 text-2xl flex flex-col">
      <Link href={"/performance"}>Performance</Link>
      <Link href={"/reliability"}>Reliability</Link>
      <Link href={"/scale"}>Scale</Link>
    </div>
  );
}
