import Header from "@/components/Header";

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-svh">
            <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
                <Header />
            </div>
            {children}
        </div>
    );
}
