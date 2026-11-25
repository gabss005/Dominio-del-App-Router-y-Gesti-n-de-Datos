
export type Producto = {
    id: string
    nombre: string
    descripcion: string | null
    precio: number
    categoria_slug: string
    imagen_url: string | null
    creado_en: string
}