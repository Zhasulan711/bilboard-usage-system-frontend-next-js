import Image from "next/image";

export default function SignInPage() {
  return (
    <main className="h-screen w-full flex flex-row">
      <div className="bg-[#010714] w-1/2 h-screen"></div>

      <div className="w-1/2 h-screen relative">
        <Image
          src="/images/Rectangle 2090.png"
          layout="fill"
          objectFit="cover"
          alt="sign in"
        />
      </div>
    </main>
  );
}
