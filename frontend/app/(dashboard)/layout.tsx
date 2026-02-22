"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  // 🔐 AUTH CHECK
  useEffect(() => {
    if (!user && !loading) {
      router.push("/login");
    }
  }, [user,loading]);

  // 🔐 ADMIN CHECK
  useEffect(() => {
    if (!loading && user && pathname.startsWith("/admin") && user.role !== "admin") {
      alert("Login as admin to access admin panel");
      router.push("/dashboard");
    }
  }, [pathname, user, loading]);

  if (!user && loading) return null;

  return (
    <div className="flex h-screen bg-gray-50">

      {/* SIDEBAR */}
      <div className="w-64 bg-white border-r p-6 flex flex-col justify-between">
        
        <div>
          <h1 className="text-xl font-bold mb-6">TaskSystem</h1>

          <div className="space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => router.push("/dashboard")}
            >
              Dashboard
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => router.push("/tasks")}
            >
              Tasks
            </Button>

            {user.role === "admin" && (
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => router.push("/admin")}
              >
                Admin
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <Badge className="w-full p-2">{user.role.toUpperCase()}</Badge>


          <Button
            variant="destructive"
            className="w-full"
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 overflow-y-auto p-10">
        {children}
      </div>
    </div>
  );
}