# Catálogo de Productos

Landing page de un catálogo de productos construida con Next.js 16 (App Router) y Supabase como backend serverless. Proyecto desarrollado para la actividad evaluada "Dominio del App Router y Gestión de Datos con Next.js" de la Universidad Don Bosco.

## Funcionalidades

- Listado de productos consumidos desde Supabase en un Server Component.
- Ruta dinámica `/productos/[id]` con el detalle de cada producto.
- Ruta dinámica `/categorias/[slug]` con los productos filtrados por categoría.
- Loading states (skeletons) y manejo de errores con `loading.tsx` y `error.tsx`.
- Diseño responsive con Tailwind CSS.
- Row Level Security (RLS) configurado en Supabase: solo lectura pública, sin permisos de escritura desde el cliente.

## Tecnologías

- [Next.js 16](https://nextjs.org/) (App Router)
- [Supabase](https://supabase.com/) (base de datos Postgres + API autogenerada)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## Instalación local

1. Cloná el repositorio:

   \`\`\`bash
   git clone https://github.com/Gabomart17/catalogo-produstos-Kodigo_GM.git
   cd catalogo-produstos-Kodigo_GM
   \`\`\`

2. Instalá las dependencias:

   \`\`\`bash
   npm install
   \`\`\`

3. Creá un archivo `.env.local` en la raíz del proyecto con las variables de entorno (ver sección de abajo).

4. Corré el servidor de desarrollo:

   \`\`\`bash
   npm run dev
   \`\`\`

5. Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

## Variables de entorno

Creá un archivo `.env.local` con las siguientes variables (no incluidas en el repositorio por seguridad):

\`\`\`
NEXT_PUBLIC_SUPABASE_URL=tu_project_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_publishable_key_de_supabase
\`\`\`

Estos valores se obtienen desde el dashboard de Supabase, en **Project Settings → API Keys**.

## Estructura de datos

La tabla `productos` en Supabase contiene los siguientes campos:

| Campo          | Tipo      | Descripción                               |
| -------------- | --------- | ----------------------------------------- |
| id             | uuid      | Identificador único (generado automático) |
| nombre         | text      | Nombre del producto                       |
| descripcion    | text      | Descripción del producto                  |
| precio         | numeric   | Precio del producto                       |
| categoria_slug | text      | Categoría (usado en la ruta dinámica)     |
| imagen_url     | text      | URL de la imagen del producto             |
| creado_en      | timestamp | Fecha de creación del registro            |

## Imagenes del proyecto

![catalogo general](image.png)
![catalogo por categoria](image-1.png)
