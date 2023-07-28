"use client";

import { signOut, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export const SignIn = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return <>....</>;
  if (status === "authenticated") {
    return (
      <Link href='/'>
        <Image
          src={session.user?.image ?? "./mememan.webp"}
          width={32}
          height={32}
          alt='pic'
        />
      </Link>
    );
  }

  return <button onClick={() => signIn()}>Sign In</button>;
};

export const Signout = () => {
  return <button onClick={() => signOut()}></button>;
};
