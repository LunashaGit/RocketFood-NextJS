"use client";

import { useEffect, useState } from "react";
import { Client } from "back/client";
import { CREATE_LOGIN } from "back/request";
import { LoginForm } from "back/types";
import { AUTH_TOKEN } from "back/constants";
import Input from "components/input";
import Button from "components/button";
import { setContext } from "@apollo/client/link/context";

export default function Login() {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [response, setResponse] = useState<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data } = await Client.mutate({
      mutation: CREATE_LOGIN,
      variables: {
        email: form.email,
        password: form.password,
      },
    });
    console.log(data.login);
    localStorage.setItem(AUTH_TOKEN, data.login.token);
    setResponse(data);
  };

  console.log(response);
  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col w-90% items-center gap-4 justify-center mx-auto mt-6"
      >
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => {
            setForm({
              ...form,
              password: e.target.value,
            });
          }}
        />
        <Button callToAction fullSize>
          Login
        </Button>
      </form>
    </>
  );
}
