"use client";

export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl bg-white">
          <h3 className="font-semibold">JWT Authentication</h3>
          <p className="text-sm text-gray-500">
            Secure login using token-based auth
          </p>
        </div>

        <div className="p-6 border rounded-xl bg-white">
          <h3 className="font-semibold">Role Based Access</h3>
          <p className="text-sm text-gray-500">
            Admin & user permission separation
          </p>
        </div>

        <div className="p-6 border rounded-xl bg-white">
          <h3 className="font-semibold">Redis Cache</h3>
          <p className="text-sm text-gray-500">
            Faster task reads via caching
          </p>
        </div>
      </div>
    </div>
  );
}