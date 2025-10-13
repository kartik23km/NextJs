import Link from "next/link";

const Header = () => {
  return (
    <div className="m-5 text-2xl flex gap-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/performance"}>Performance</Link>
      <Link href={"/reliability"}>Reliability</Link>
      <Link href={"/scale"}>Scale</Link>
    </div>
  );
};
export default Header;
