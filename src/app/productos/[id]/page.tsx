import { supabase } from '@/lib/supabase'
import { Producto } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type PageProps = {
    params: Promise<{ id: string }>
}

async function getProducto(id: string): Promise<Producto | null> {
    const { data, error } = await supabase
    .from('productos')
    .select('*')
    .eq('id', id)
    .single()

    if (error || !data) return null

    return data
}

export default async function ProductoDetalle({ params }: PageProps) {
    const { id } = await params
    const producto = await getProducto(id)

if (!producto) {
    notFound()
}

return (
    <main className="min-h-screen bg-[#FFF5F7] px-4 py-10 sm:px-8">
    <div className="mx-auto max-w-4xl">
        <Link
            href="/"
            className="mb-6 inline-block text-sm font-medium text-[#8C4A62] hover:text-[#D6336C]"
        >
            ← Volver al catálogo
        </Link>

        <div className="overflow-hidden rounded-lg border border-[#F3C6D3] bg-[#FFFFFF] sm:flex">
            <div className="relative h-72 w-full bg-[#FCE7EC] sm:h-auto sm:w-1/2">
            {producto.imagen_url && (
                <Image
                src={producto.imagen_url}
                alt={producto.nombre}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
            />
            )}
            </div>

        <div className="p-6 sm:w-1/2 sm:p-8">
            <Link
                href={`/categorias/${producto.categoria_slug}`}
                className="text-xs font-medium capitalize text-[#D6336C] hover:underline"
            >
                {producto.categoria_slug}
            </Link>
            {/* Fraunces solo en el título, para que destaque como el elemento con más carácter de la página */}
            <h1 className="mt-2 text-3xl font-medium text-[#3B1824] font-[family-name:var(--font-fraunces)] sm:text-4xl">
                {producto.nombre}
            </h1>
            <p className="mt-3 text-2xl font-medium text-[#D6336C]">
                ${producto.precio.toFixed(2)}
            </p>
            {producto.descripcion && (
                <p className="mt-4 leading-relaxed text-[#8C4A62]">
                    {producto.descripcion}
                </p>
            )}
        </div>
        </div>
    </div>
    </main>
)
}