"use client";

import { useState } from "react";
import { supabase } from "/src/lib/supabase.ts";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  async function handleRegister() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username
        }
      }
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Conta criada com sucesso!");
    router.push("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 space-y-4">
        <h1 className="text-3xl font-bold">Criar Conta</h1>

        <input
          className="border p-3 w-full"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="border p-3 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-3 w-full"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-blue-600 text-white p-3 w-full"
        >
          Criar Conta
        </button>
      </div>
    </div>
  );
}
