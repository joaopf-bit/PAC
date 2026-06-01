export default function LoginPage() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md border rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6">
          Entrar
        </h1>

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Email"
        />

        <input
          type="password"
          className="w-full border p-3 rounded mb-4"
          placeholder="Senha"
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded">
          Entrar
        </button>
      </div>
    </main>
  );
}
