"use client";

import { useEffect } from "react";
//import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  useEffect(() => {
    async function test() {
      const { data, error } =
        await supabase.auth.getSession();

      console.log(data);
      console.log(error);
    }

    test();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">
        Dashboard PAC
      </h1>
    </main>
  );
}
