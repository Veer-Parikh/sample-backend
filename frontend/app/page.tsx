import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-100 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center space-y-10">

        {/* HEADER */}
        <div className="space-y-4">
          <Badge className="px-4 py-1 text-sm">
            Backend Developer Internship Assignment
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-zinc-900">
            Secure Task Management System
          </h1>

          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Built with JWT authentication, role-based access control, Redis caching,
            and scalable backend architecture.  
            Designed to demonstrate production-ready backend engineering skills.
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button className="px-8 py-6 text-lg shadow-lg">
              Register
            </Button>
          </Link>

          <Link href="/login">
            <Button variant="outline" className="px-8 py-6 text-lg">
              Login
            </Button>
          </Link>

          {/* RESUME BUTTON */}
          <a
            href="https://drive.google.com/file/d/1LXdpyI3Os8u8e2gJWR_QhjCiFLM7oZ4g/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="px-8 py-6 text-lg">
              View Resume
            </Button>
          </a>
          <a
            href="https://v0-portfolio-omega-cyan-72.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="px-8 py-6 text-lg">
              View My Portfolio Website
            </Button>
          </a>
        </div>

        {/* DEMO CREDENTIALS */}
        <div className="flex justify-center mt-8">
          <Card className="w-full max-w-lg shadow-md">
            <CardContent className="p-6 space-y-3 text-left">
              <h3 className="text-lg font-semibold">
                Demo Credentials (for evaluation)
              </h3>

              <div className="text-sm text-zinc-600 space-y-1">
                <p>
                  <span className="font-medium">Admin:</span> admin@example.com
                </p>
                <p>
                  <span className="font-medium">User:</span> veer@example.com
                </p>
                <p>
                  <span className="font-medium">Password:</span> Veer123
                </p>
              </div>

              <p className="text-xs text-zinc-500 pt-2">
                Use the above credentials to explore role-based access,
                admin panel, and task management features.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FOOTER NOTE */}
        <p className="text-sm text-zinc-500 pt-6">
          Built using Next.js, Prisma, MongoDB, Redis & secure JWT authentication.
        </p>
      </div>
    </div>
  );
}