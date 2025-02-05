"use client";
import { useUser } from "@clerk/nextjs"; // Import Clerk
import { useRouter } from "next/navigation";
import Dashboard from "@/app/admin/components/Dashboard"; // Your dashboard component

export default function AdminPage() {
  const { user } = useUser();
  const router = useRouter();

  if (!user) {
    return <p>Loading...</p>;
  }

  // Extract role from Clerk custom attributes
  const role = user.publicMetadata.role || "guest";

  // Redirect unauthorized users
  if (role !== "admin" && role !== "team" && role !== "developer") {
    router.push("/not-authorized");
    return null;
  }

  return <Dashboard />;
}
