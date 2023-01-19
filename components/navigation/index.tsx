"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import Button from "components/button";
import { useState } from "react";
export default function Navigation() {
  const [login, setLogin] = useState<boolean>(false);
  return (
    <nav className="max-w-7xl mx-auto w-full p-4 flex justify-between items-center z-20">
      <Link href="/" className="flex items-start text-medium gap-1">
        <FontAwesomeIcon icon={faFire} className="text-2xl" />
        <h1 className="font-bold text-xl">RocketFood</h1>
      </Link>
      {login ? (
        <Link href="/account" className="w-24">
          <Button callToAction fullSize>
            Menu
          </Button>
        </Link>
      ) : (
        <Link href="/account" className="w-24">
          <Button callToAction fullSize>
            Login
          </Button>
        </Link>
      )}
    </nav>
  );
}
