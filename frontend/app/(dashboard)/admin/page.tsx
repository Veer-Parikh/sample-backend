"use client";

import { useEffect,useState } from "react";
import api from "@/services/api";

export default function Admin(){
  const [users,setUsers]=useState([]);

  const load=async()=>{
    try{
      const res=await api.get("/admin/users");
      if(res.status===403) {
        return;
      }else {
        setUsers(res.data);
      }
  }catch(err){
    console.error(err);
  };
}

  const del=async(id:string)=>{
    await api.delete(`/admin/users/${id}`);
    load();
  };

  useEffect(()=>{load()},[]);

  return(
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {users.map((u:any)=>(
        <div key={u.id} className="flex justify-between border p-3 rounded mb-2 bg-white">
          <span>{u.email} ({u.role})</span>
          <button onClick={()=>del(u.id)} className="text-red-500">Delete</button>
        </div>
      ))}
    </div>
  );
}