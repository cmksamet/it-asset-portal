"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1e1e1e] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/10">
          <CardContent className="p-6">
            <h1 className="text-2xl text-white font-bold mb-4 text-center">IT Asset Portal</h1>
            <div className="space-y-4">
              <Input placeholder="Username" className="bg-white/10 text-white placeholder-white/60" />
              <Input type="password" placeholder="Password" className="bg-white/10 text-white placeholder-white/60" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Login</Button>
            </div>
            <p className="text-sm text-white/70 mt-4 text-center">
              Standard users, please contact IT for access.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}