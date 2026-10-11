import { AuthFormPanel } from "@/components/molecules/auth/AuthFormPanel";
import { AuthPageLayout } from "@/components/molecules/auth/AuthPageLayout";

export function SignupPage() {
  return (
    <AuthPageLayout mode="signup">
      <AuthFormPanel mode="signup" />
    </AuthPageLayout>
  );
}
