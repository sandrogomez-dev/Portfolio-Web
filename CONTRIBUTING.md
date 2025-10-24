# Contributing to Sandro Gomez Portfolio

¡Gracias por tu interés en contribuir! 🎉

## 📋 Código de Conducta

Este proyecto y todos los que participan están comprometidos con mantener un ambiente acogedor y libre de acoso para todos.

## 🚀 Cómo Contribuir

### Reportar Bugs

Si encuentras un bug, por favor crea un issue con:
- Descripción clara del problema
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Screenshots si aplica
- Información del navegador/OS

### Sugerir Mejoras

Las sugerencias son bienvenidas! Crea un issue describiendo:
- ¿Qué problema resuelve?
- ¿Cómo mejoraría la experiencia?
- Mockups o ejemplos si es posible

### Pull Requests

1. **Fork el repositorio**
```bash
git clone https://github.com/tu-usuario/portfolio-web.git
cd portfolio-web
```

2. **Crea una rama para tu feature**
```bash
git checkout -b feature/nombre-descriptivo
# o para bugs
git checkout -b fix/nombre-del-bug
```

3. **Instala las dependencias**
```bash
npm install
```

4. **Realiza tus cambios**
   - Sigue el estilo de código existente
   - Escribe código TypeScript con tipos apropiados
   - Mantén componentes pequeños y reutilizables
   - Usa nombres descriptivos para variables y funciones

5. **Verifica tu código**
```bash
# Ejecuta el linter
npm run lint

# Verifica el formateo
npm run format:check

# Verifica tipos TypeScript
npm run type-check

# Prueba localmente
npm run dev
```

6. **Haz commit de tus cambios**
```bash
git add .
git commit -m "feat: descripción breve del cambio"
```

Usa conventional commits:
- `feat:` nueva funcionalidad
- `fix:` corrección de bugs
- `docs:` cambios en documentación
- `style:` formateo, punto y coma faltante, etc
- `refactor:` refactorización de código
- `test:` agregar tests
- `chore:` cambios en build, dependencies, etc

7. **Push y crea el Pull Request**
```bash
git push origin feature/nombre-descriptivo
```

Luego ve a GitHub y crea el PR con:
- Título descriptivo
- Descripción de los cambios
- Screenshots si hay cambios visuales
- Referencia a issues relacionados

## 📝 Guías de Estilo

### TypeScript/React
- Usa TypeScript para todos los archivos `.tsx`
- Define interfaces para props de componentes
- Prefiere functional components con hooks
- Usa `React.FC` para componentes cuando sea apropiado
- Evita `any`, usa tipos específicos

### CSS/SCSS
- Usa variables SCSS definidas en `variables.scss`
- Sigue metodología BEM para nombres de clases
- Mobile-first approach
- Usa Bootstrap utilities cuando sea posible

### Componentes
```typescript
// ✅ Bueno
interface HeroProps {
  title: string;
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="hero">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
};

// ❌ Evitar
export const Hero = (props: any) => {
  return <div>{props.title}</div>;
};
```

### Commits
- Mensajes claros y descriptivos
- Usa conventional commits
- Un commit por cambio lógico
- No incluyas archivos generados (dist, node_modules)

## 🔍 Revisión de Código

Todos los PRs serán revisados considerando:
- ✅ Código limpio y bien estructurado
- ✅ Tests pasando (cuando aplique)
- ✅ Sin errores de linting
- ✅ Documentación actualizada
- ✅ Commits bien estructurados
- ✅ Compatible con navegadores modernos

## 📦 Estructura del Proyecto

```
src/
├── components/        # Componentes React
│   ├── Layout/       # Header, Footer, etc
│   ├── UI/           # Componentes reutilizables
│   └── [Feature]/    # Componentes de feature
├── context/          # Context API providers
├── hooks/            # Custom hooks
├── utils/            # Funciones helper
├── types/            # Definiciones TypeScript
└── styles/           # Estilos globales SCSS
```

## 🤝 Proceso de Revisión

1. El PR será revisado por el maintainer
2. Se pueden solicitar cambios
3. Una vez aprobado, será merged
4. Tu contribución aparecerá en la página de créditos

## ❓ ¿Preguntas?

Si tienes preguntas, puedes:
- Abrir un issue con la etiqueta `question`
- Contactar a: sandrodevx@gmail.com
- Enviar mensaje en LinkedIn

## 📜 Licencia

Al contribuir, aceptas que tus contribuciones sean licenciadas bajo la Licencia MIT del proyecto.

---

¡Gracias por hacer este proyecto mejor! 🚀

