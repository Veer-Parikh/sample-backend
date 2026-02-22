"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const load = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const create = async () => {
    await api.post("/tasks", { title, description });
    load();
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Tasks</h2>

      <div className="flex gap-3 mb-6">
        <Input placeholder="Title" onChange={(e)=>setTitle(e.target.value)} />
        <Input placeholder="Description" onChange={(e)=>setDescription(e.target.value)} />
        <Button onClick={create}>Add</Button>
      </div>

      <div className="space-y-3">
        {tasks.map((t) => (
          <div key={t.id} className="p-4 border rounded bg-white">
            <h3 className="font-semibold">{t.title}</h3>
            <p className="text-sm text-gray-500">{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}