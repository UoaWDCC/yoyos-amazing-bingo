import { sendInvalidationCode } from "@/actions/sendInvalidationCode";
import { Button } from "@/components/ui/button";

export default async function Page() {
  return (
    <form action={sendInvalidationCode.bind(null, "test-code-123")}>
      <Button type="submit">Invalidate</Button>
    </form>
  );
}
