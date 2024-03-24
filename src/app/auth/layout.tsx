import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div>{children}</div>
      </div>
      <div className="w-1/2 h-screen relative">
        <Image
          src="/images/Rectangle 2090.png"
          layout="fill"
          objectFit="cover"
          alt="sign in"
        />
      </div>
    </div>
  );
}
