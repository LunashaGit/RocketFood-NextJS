"use client";

import { useState } from "react";
import { Client } from "back/client";
import { CREATE_REGISTER } from "back/request";
import { RegisterForm } from "back/types";
import Input from "components/input";
import Button from "components/button";

export default function Register() {
  const [form, setForm] = useState<RegisterForm>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  console.log(form);
  const [response, setResponse] = useState<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data } = await Client.mutate({
      mutation: CREATE_REGISTER,
      variables: {
        registerInput: {
          email: form.email,
          password: form.password,
          firstname: form.firstname,
          lastname: form.lastname,
        },
      },
    });
    setResponse(data);
  };

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
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Firstname"
          onChange={(e) => {
            setForm({
              ...form,
              firstname: e.target.value,
            });
          }}
        />
        <Input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Lastname"
          onChange={(e) => {
            setForm({
              ...form,
              lastname: e.target.value,
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
          Register
        </Button>
      </form>
    </>
  );
}
