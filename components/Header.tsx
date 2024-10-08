import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <Image
          src="/assets/icons/logo.svg"
          alt="Logo with name"
          width={120}
          height={32}
          className="hidden md:block"
          loading="eager"
          priority
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
          loading="eager"
          priority
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
