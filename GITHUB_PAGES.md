# GitHub Pages Deployment

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

## Configuración Realizada

### 1. Configuración de Astro (`astro.config.mjs`)
- **site**: `https://caalzate91.github.io` - El dominio base de GitHub Pages
- **base**: `/devfest-page/` - El nombre del repositorio como ruta base

### 2. Workflow de GitHub Actions (`.github/workflows/deploy.yml`)
El workflow se ejecuta automáticamente cuando:
- Se hace push a la rama `main`
- Se activa manualmente desde GitHub Actions

### 3. Rutas de Assets
Todas las referencias a assets públicos ahora usan `import.meta.env.BASE_URL` para asegurar que funcionen correctamente con el path base.

## Activar GitHub Pages

Para activar el despliegue en GitHub Pages:

1. Ve a la configuración del repositorio en GitHub
2. Navega a **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Guarda los cambios

Una vez configurado, cada push a la rama `main` desplegará automáticamente el sitio.

## URL del Sitio

El sitio estará disponible en: https://caalzate91.github.io/devfest-page/

## Desarrollo Local

Para desarrollo local, los comandos siguen siendo los mismos:

```bash
npm install          # Instalar dependencias
npm run dev          # Servidor de desarrollo
npm run build        # Compilar para producción
npm run preview      # Vista previa del build
```

## Notas Importantes

- El path base `/devfest-page/` se aplica automáticamente en producción
- En desarrollo local (`npm run dev`), el sitio funciona sin el path base
- Todos los assets públicos se sirven correctamente con ambas configuraciones
