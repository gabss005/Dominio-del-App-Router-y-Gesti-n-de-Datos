'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
error,
reset,
}: {
error: Error & { digest?: string }
reset: () => void
}) {
useEffect(() => {
    console.error(error)
}, [error])

return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#FFF5F7] px-4 text-center">
    <h1 className="text-2xl font-medium text-[#3B1824] font-[family-name:var(--font-fraunces)]">
        Algo salió mal
    </h1>
    <p className="max-w-md text-[#8C4A62]">
        No pudimos cargar esta categoría.
    </p>
    <div className="flex gap-3">
        <button
        onClick={reset}
        className="rounded-full bg-[#D6336C] px-5 py-2 text-sm font-medium text-[#FFF5F7] hover:bg-[#B02255]"
        >
        Intentar de nuevo
        </button>
        <Link
        href="/"
        className="rounded-full border border-[#F3C6D3] px-5 py-2 text-sm font-medium text-[#3B1824] hover:border-[#D6336C]"
        >
        Volver al catálogo
        </Link>
    </div>
    </main>
)
}