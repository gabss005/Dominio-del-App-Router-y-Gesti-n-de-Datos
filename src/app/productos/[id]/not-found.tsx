import Link from 'next/link'

export default function NotFound() {
return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#FFF5F7] px-4 text-center">
    <h1 className="text-4xl font-medium text-[#3B1824] font-[family-name:var(--font-fraunces)]">
        404
    </h1>
    <p className="text-[#8C4A62]">No encontramos ese producto.</p>
    <Link
        href="/"
        className="rounded-full bg-[#D6336C] px-5 py-2 text-sm font-medium text-[#FFF5F7] hover:bg-[#B02255]"
    >
        Volver al catálogo
    </Link>
    </main>
)
}