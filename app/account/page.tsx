"use client";

import { useState } from "react";
import Login from "components/auth/login";
import Register from "components/auth/register";
import Button from "components/button";
import { Transition } from "@headlessui/react";
export default function Page() {
  const [login, setLogin] = useState<Boolean>(true);
  return (
    <div>
      <Transition
        show={login === true}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Login />
      </Transition>
      <Transition
        show={login === false}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Register />
      </Transition>
    </div>
  );
}
