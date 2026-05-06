# Francisco Solaiza · Landing Web
## Guía completa de instalación y deploy

---

## PASO 1 — Configurar Supabase Storage

Entra a tu proyecto en supabase.com y sigue estos pasos:

1. Ve a **Storage** en el menú izquierdo
2. Haz clic en **New bucket**
3. Nombre del bucket: `fotos`
4. Marca la opción **Public bucket** ✅
5. Haz clic en **Save**

Luego configura los permisos (RLS policies):
1. Haz clic en tu bucket `fotos`
2. Ve a la pestaña **Policies**
3. Haz clic en **New Policy**
4. Selecciona **For full customization**
5. Crea esta policy:
   - Policy name: `public access`
   - Allowed operation: SELECT, INSERT, DELETE
   - Target roles: anon, authenticated
   - USING expression: `true`
   - WITH CHECK expression: `true`
6. Guarda

---

## PASO 2 — Subir el código a GitHub

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
git init
git add .
git commit -m "primera version"
git branch -M main
git remote add origin https://github.com/Solaiza33/Solaiza.git
git push -u origin main
```

---

## PASO 3 — Conectar Vercel

1. Entra a vercel.com
2. Haz clic en **Add New Project**
3. Selecciona el repositorio **Solaiza** de GitHub
4. Antes de hacer deploy, ve a **Environment Variables** y agrega:

```
NEXT_PUBLIC_SUPABASE_URL = https://icltcaerhywybbssjycj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljbHRjYWVyaHl3eWJic3NqeWNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMDk1NzMsImV4cCI6MjA5MzY4NTU3M30.0UB83ZnoBTFCekHR23n80Ly2HomAwZe_7zJWyz5_baA
```

5. Haz clic en **Deploy**

En 2-3 minutos tu sitio estará en línea con una URL tipo:
`https://solaiza.vercel.app`

---

## PASO 4 — Actualizar el deploy (cuando hagas cambios)

Solo ejecuta:
```bash
git add .
git commit -m "descripcion del cambio"
git push origin main
```
Vercel detecta el push y publica automáticamente.

---

## Estructura del proyecto

```
/app
  page.tsx          → Página de inicio con hero y carreras
  /galeria
    page.tsx        → Galería con subida real de fotos a Supabase
  /patrocinadores
    page.tsx        → Media kit para patrocinadores
/components
  Navbar.tsx        → Menú de navegación
/lib
  supabase.ts       → Conexión a Supabase
```

---

## Páginas incluidas

- **/** → Landing principal con hero, stats y carreras
- **/galeria** → Galería con subida de fotos (guarda en Supabase Storage)
- **/patrocinadores** → Media kit completo para marcas

---

## Costo operativo para el cliente

| Servicio | Costo |
|----------|-------|
| Vercel (hosting) | Gratis |
| Supabase (fotos hasta 1 GB) | Gratis |
| Dominio propio (opcional) | ~$200 MXN/año |
