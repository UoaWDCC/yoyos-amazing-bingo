import { protect } from "@/actions/auth";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await protect();

  return <>{children}</>;
}
