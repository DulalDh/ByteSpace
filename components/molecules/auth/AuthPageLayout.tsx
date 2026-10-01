import type { ReactNode } from "react";
import { AuthMarketingPanel } from "@/components/molecules/auth/AuthMarketingPanel";

export function AuthPageLayout({
  children,
  mode,
}: {
  children: ReactNode;
  mode: "login" | "signup";
}) {
  return (
    <main
      id="home"
      className="isolate min-h-svh overflow-x-clip bg-transparent text-white min-[1280px]:h-svh min-[1280px]:overflow-hidden before:pointer-events-none before:fixed before:inset-0 before:-z-10 before:bg-[#0641e8] before:bg-[length:122px_122px] before:bg-[image:linear-gradient(#ffffff20_2px,transparent_2px),linear-gradient(90deg,#ffffff20_2px,transparent_2px)] before:content-['']"
    >
      <div className="grid min-h-svh w-full grid-cols-2 items-center min-[1280px]:h-svh max-[1279px]:mx-auto max-[1279px]:w-[min(calc(100%_-_48px),900px)] max-[1279px]:grid-cols-1 max-[1279px]:gap-8 max-[1279px]:px-0 max-[1279px]:pt-6 max-[1279px]:pb-[5vh] max-[600px]:w-[calc(100%_-_32px)] max-[600px]:gap-8 max-[600px]:pt-[18px]">
        <AuthMarketingPanel mode={mode} />
        {children}
      </div>
    </main>
  );
}
