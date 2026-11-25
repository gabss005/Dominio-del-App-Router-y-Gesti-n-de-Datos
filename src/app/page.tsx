import { supabase } from '@/lib/supabase'
import { Producto } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'

async function getProductos(): Promise<Producto[]> {
  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .order('creado_en', { ascending: false })

  if (error) {
    throw new Error(`Error al cargar productos: ${error.message}`)
  }

  return data ?? []
}

export default async function Home() {
  const productos = await getProductos()

  const categorias = Array.from(
    new Set(productos.map((p) => p.categoria_slug))
  )

  return (
    <main className="min-h-screen bg-[#FFF5F7] px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-medium text-[#3B1824] sm:text-5xl font-[family-name:var(--font-fraunces)]">
            Catálogo de Productos
          </h1>
          <p className="mt-3 text-[#8C4A62]">
            Encontrá lo que buscás en nuestras categorías
          </p>
        </header>
        <nav className="mb-10 flex flex-wrap justify-center gap-3">
          {categorias.map((slug) => (
            <Link
              key={slug}
              href={`/categorias/${slug}`}
              className="rounded-full border border-[#F3C6D3] bg-[#FFFFFF] px-4 py-2 text-sm font-medium capitalize text-[#3B1824] transition hover:border-[#D6336C] hover:text-[#D6336C]"
            >
              {slug}
            </Link>
          ))}
        </nav>

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
                <span className="text-xs font-medium capitalize text-[#8C4A62]">
                  {producto.categoria_slug}
                </span>
                <h2 className="mt-1 font-medium text-[#3B1824] font-[family-name:var(--font-fraunces)] text-lg">
                  {producto.nombre}
                </h2>
                <p className="mt-1 font-medium text-[#D6336C]">
                  ${producto.precio.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}