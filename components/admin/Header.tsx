import {authOptions} from "@/lib/auth";
import {getServerSession} from "next-auth";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
        <div className="text-sm text-muted-foreground">
          Panel administracyjny
        </div>

        <div className="flex items-center gap-3">
          {session ? (
            <>
              <div className="hidden text-sm text-muted-foreground md:block">
                {session.user?.email}
              </div>
              <LogoutButton />
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
}
