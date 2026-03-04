import Link from "next/link";

export default function ServiceNotFound() {
    return (
        <main className="flex min-h-[60svh] flex-col items-center justify-center px-4 text-center">
            <h1 className="text-2xl font-semibold text-white sm:text-3xl">
                Service not found
            </h1>
            <p className="mt-3 text-sm text-white/60">
                The service you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/#services"
                className="mt-6 inline-block rounded-xl bg-red-500 px-5 py-3 text-sm font-medium shadow-[0_0_24px_rgba(255,27,45,0.35)] transition-all hover:brightness-110"
            >
                View All Services
            </Link>
        </main>
    );
}
