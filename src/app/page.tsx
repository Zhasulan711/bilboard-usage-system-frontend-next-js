import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen text-center flex flex-col justify-center space-y-[100px]">
      <h1 className="text-5xl text-gray-400">this is index page</h1>
      <Link href="/dashboard" className="text-9xl text-white">GO TO DASHBOARD</Link>
      <Link href="user/auth/sign-in" className="text-9xl text-white">LOGIN</Link>
      <Link href="/auth/sign-up" className="text-9xl text-white">SIGN UP</Link>
    </div>
  );
}
