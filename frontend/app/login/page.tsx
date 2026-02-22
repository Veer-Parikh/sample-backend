"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/api";
import { useAuth } from "@/context/AuthContext";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const res = await api.post("/auth/login", { email, password });
    login(res.data.token);
    router.push("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-[420px] shadow-xl">
        <CardContent className="p-8 space-y-4">
          <h1 className="text-2xl font-bold text-center">Backend Portal</h1>

          <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

          <Button className="w-full" onClick={submit}>
            Login
          </Button>

          <p
            className="text-sm text-center cursor-pointer"
            onClick={() => router.push("/register")}
          >
            Create account →
          </p>
        </CardContent>
      </Card>
    </div>
  );
}