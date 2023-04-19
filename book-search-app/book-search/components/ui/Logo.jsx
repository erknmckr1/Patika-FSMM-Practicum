import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="flex items-center h-[88px]">
      <Image src="/logo/x.png" width={120} height={60} alt="logo" className="rounded-full" />
    </div>
  );
}

export default Logo;
