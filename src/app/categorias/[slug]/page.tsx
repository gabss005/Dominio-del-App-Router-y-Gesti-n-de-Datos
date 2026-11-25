import { supabase } from '@/lib/supabase'
import { Producto } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

type PageProps = {
params: Promise<{ slug: string }>
}

async function getProductosPorCategoria(slug: string): Promise<Producto[]> {
const { data, error } = await supabase
    .from('productos')
    .select('*')
    .eq('categoria_slug', slug)
    .order('creado_en', { ascending: false })

if (error) {
    throw new Error(`Error al cargar la categoría: ${error.message}`)
}

return data ?? []
}

export default async function CategoriaPage({ params }: PageProps) {
const { slug } = await params
const productos = await getProductosPorCategoria(slug)

return (
    <main className="min-h-screen bg-[#FFF5F7] px-4 py-10 sm:px-8">
    <div className="mx-auto max-w-6xl">
        <Link
        href="/"
        className="mb-6 inline-block text-sm font-medium text-[#8C4A62] hover:text-[#D6336C]"
        >
        ← Volver al catálogo
        </Link>

        <h1 className="mb-8 text-3xl font-medium capitalize text-[#3B1824] font-[family-name:var(--font-fraunces)] sm:text-4xl">
        {slug}
        </h1>

        {productos.length === 0 ? (
        <p className="text-[#8C4A62]">No hay productos en esta categoría.</p>
        ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productos.map((producto) => (
            <Link
                key={producto.id}
                href={`/productos/${producto.id}`}
                className="group overflow-hidden rounded-lg border border-[#F3C6D3] bg-[#FFFFFF] transition hover:border-[#D6336C]"
            >
                <div className="relative h-48 w-full bg-[#FCE7EC]">
                {producto.imagen_url && (
                    <Image
                    src={producto.imagen_url}
                    alt={producto.nombre}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    />
                )}
                </div>
                <div className="p-4">
                <h2 className="font-medium text-[#3B1824] font-[family-name:var(--font-fraunces)] text-lg">
                    {producto.nombre}
                </h2>
                <p className="mt-1 font-medium text-[#D6336C]">
                    ${producto.precio.toFixed(2)}
                </p>
                </div>
            </Link>
            ))}
        </div>
        )}
    </div>
    </main>
)
}