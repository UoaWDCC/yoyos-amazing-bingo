import { protect } from "@/actions/authActions";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await protect();

  return <>{children}</>;
}
