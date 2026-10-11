import { AuthFormPanel } from "@/components/molecules/auth/AuthFormPanel";
import { AuthPageLayout } from "@/components/molecules/auth/AuthPageLayout";

export function LoginPage() {
  return (
    <AuthPageLayout mode="login">
      <AuthFormPanel mode="login" />
    </AuthPageLayout>
  );
}
