import Header from "@/components/Header";
import { ClerkLoaded } from "@clerk/nextjs";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkLoaded>
            <div className="flex flex-col flex-1 h-screen">
                <Header />
                <main className="flex-1 overflow-y-auto">{children}</main>
            </div>
        </ClerkLoaded>
    );
}
