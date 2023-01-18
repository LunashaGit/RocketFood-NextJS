"use client";

import { useState } from "react";
import { Client } from "back/client";
import { CREATE_LOGIN } from "back/request";
import { LoginForm } from "back/types";

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
    setResponse(data);
  };

  console.log(response);
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => {
            setForm({
              ...form,
              password: e.target.value,
            });
          }}
          autoComplete="off"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
