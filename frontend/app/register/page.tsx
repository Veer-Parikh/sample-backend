"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/api";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const submit = async () => {
    await api.post("/auth/register", form);
    alert("Registered");
    router.push("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-[420px] shadow-xl">
        <CardContent className="p-8 space-y-3">
          <h1 className="text-2xl font-bold text-center">Create Account</h1>

          <Input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
          <Input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
          <Input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>

          <select
            className="border rounded p-2"
            onChange={(e)=>setForm({...form,role:e.target.value})}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <Button className="w-full" onClick={submit}>Register</Button>
        </CardContent>
      </Card>
    </div>
  );
}