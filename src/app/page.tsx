import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-5xl font-bold">PAC</h1>

      <p>Programação e Código</p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Entrar
        </Link>

        <Link
          href="/register"
          className="border px-6 py-3 rounded"
        >
          Registrar
        </Link>
      </div>
    </main>
  );
}
