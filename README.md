# HABITANA — Sitio institucional (fase 1)

Primera versión de presentación para HABITANA. Cinco rutas: Inicio, Servicios, Temporarios, Contacto y Nosotras.

## Tecnologías
- Next.js 16 (App Router), React 19 y TypeScript estricto.
- CSS Modules; sin Tailwind ni librerías de UI.
- Páginas estáticas. **Supabase todavía no está conectado**.

## Inicio
Requisitos: Node.js 20.9+ (preferentemente LTS actual), npm.

```bash
npm install
npm run dev
```

Abrir http://localhost:3000.

## Comprobaciones
```bash
npm run lint
npm run typecheck
npm run build
```

## Antes de publicar
1. Configurar `NEXT_PUBLIC_SITE_URL=https://dominio-real` en el entorno de hosting, sin barra final; se usa para canonicalización futura, metadatos y sitemap. Sin esta variable el sitio declara `noindex` y bloquea el rastreo en robots.txt.
2. Reemplazar los textos provisionales con información real y verificar afirmaciones comerciales.
3. Incorporar logo real, fotografías autorizadas y una imagen Open Graph.
4. Validar correo, WhatsApp y/o formulario antes de presentarlos como canales activos.
5. Revisar headers/CSP según integraciones reales (Supabase, imágenes externas, analítica); la CSP actual es una base, no una garantía integral de seguridad.
6. Ejecutar pruebas de accesibilidad, Lighthouse y SEO contra el dominio final.

## Organización
- `src/app`: rutas, estilos locales, metadatos, sitemap y robots.
- `src/components`: encabezado, pie, introducción de páginas.
- `src/lib/site.ts`: configuración compartida y navegación.

## Próxima fase: catálogo
Definir esquema `properties`, `property_images`, estados de publicación, políticas RLS, permisos de edición y estrategia de lectura pública. **Nunca** exponer la `service_role` de Supabase en el navegador. No se incluye contenido ficticio en el catálogo actual.
