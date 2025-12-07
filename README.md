# Markdown Editor

## Descripción

**Markdown Editor** es una aplicación web completa e interactiva que permite a los usuarios escribir, editar y visualizar texto en formato Markdown en tiempo real. Con una interfaz de editor de dos columnas, barra de herramientas de formato completa y actualización instantánea, es la herramienta perfecta para crear documentación, escribir artículos o aprender Markdown.

---

## 🚀 Características

### ✨ Editor Profesional

- 📝 **Editor de dos columnas**: Escribe Markdown a la izquierda y visualiza el resultado a la derecha
- ⚡ **Actualización en tiempo real**: Convierte texto Markdown en HTML automáticamente mientras escribes
- 🎨 **Sintaxis resaltada**: Editor con fuente monoespaciada para mejor legibilidad del código
- 💾 **Auto-guardado**: Tu trabajo se guarda automáticamente en localStorage
- 🔄 **Sincronización de scroll**: Los paneles se desplazan juntos para mejor navegación

### 🎛️ Controles de Visualización

- 👁️ **Toggle de paneles**: Oculta/muestra el editor o la vista previa según necesites
- 🖥️ **Modo solo editor**: Enfócate completamente en escribir
- 📖 **Modo solo vista previa**: Revisa tu documento renderizado
- ⚡ **Modo dual**: Trabaja con ambos paneles visibles

### 🛠️ Barra de Herramientas Completa

- **Formato de texto**:
  - **Negrita** (`Ctrl+B`)
  - _Cursiva_ (`Ctrl+I`)
  - ~~Tachado~~
- **Encabezados**: H1, H2, H3
- **Enlaces e imágenes**: Inserción rápida con atajos
- **Código**:
  - Código en línea
  - Bloques de código con sintaxis
- **Listas**:
  - Listas sin orden (bullets)
  - Listas ordenadas (numeradas)
- **Elementos adicionales**:
  - Citas (blockquotes)
  - Líneas horizontales
  - Tablas

### ⌨️ Atajos de Teclado

- `Ctrl+B` / `Cmd+B`: Aplicar negrita
- `Ctrl+I` / `Cmd+I`: Aplicar cursiva
- `Ctrl+K` / `Cmd+K`: Insertar enlace
- `Tab`: Indentación

### 📱 Diseño Responsivo

- **Pantallas grandes**: Editor y vista previa lado a lado
- **Pantallas pequeñas**: Paneles apilados verticalmente con altura optimizada
- **Barra de herramientas adaptativa**: Se ocultan herramientas en móviles para mejor uso del espacio

---

## Tecnologías Usadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Diseño moderno con Grid Layout, variables CSS y animaciones
- **JavaScript ES6+**: Lógica de la aplicación con sintaxis moderna
- **[Marked.js](https://github.com/markedjs/marked)**: Biblioteca potente para procesar Markdown a HTML con soporte GFM (GitHub Flavored Markdown)
- **LocalStorage API**: Persistencia de datos del usuario

---

## 🛠️ Instalación y Configuración

### Opción 1: Uso Directo

1. **Clona este repositorio**:

   ```bash
   git clone https://github.com/andres-olarte396/dev-laoz-markdown-viwer.git
   cd dev-laoz-markdown-viwer
   ```

2. **Abre el archivo `index.html`** directamente en tu navegador.

### Opción 2: Con Servidor Local

Para una mejor experiencia (especialmente si tienes dependencias externas):

```bash
# Con Node.js
npx http-server -p 5500

# Con Python 3
python -m http.server 5500

# Con PHP
php -S localhost:5500
```

Luego abre `http://localhost:5500` en tu navegador.

---

## 📂 Estructura del Proyecto

```
dev-laoz-markdown-viwer/
├── 📂 assets/
│   ├── 📂 css/
│   │   └── 📃 styles.css          # Estilos completos del editor
│   ├── 📂 js/
│   │   └── 📃 script.js           # Lógica del editor y herramientas
│   └── 📂 screenshots/
│       └── (capturas de pantalla)
├── 📃 index.html                   # Archivo principal
├── 📃 README.md                    # Documentación
├── 📃 LICENSE.txt                  # Licencia MIT
└── 📃 CONTRIBUTING.md              # Guía de contribución
```

---

## ✨ Uso

### Escritura Básica

1. **Escribe Markdown** en el panel izquierdo (Editor)
2. **Visualiza el resultado** instantáneamente en el panel derecho (Vista Previa)
3. Tu contenido se **guarda automáticamente** cada segundo

### Uso de la Barra de Herramientas

- **Selecciona texto** y haz clic en cualquier botón de formato para aplicarlo
- Si no hay texto seleccionado, se insertará un **placeholder** que puedes reemplazar
- Los **iconos SVG** proporcionan una interfaz visual clara de cada función

### Controles de Panel

- Haz clic en **"Editor"** para ocultar/mostrar el panel de edición
- Haz clic en **"Preview"** para ocultar/mostrar la vista previa
- No puedes ocultar ambos paneles simultáneamente

### Ejemplos de Markdown Soportado

El editor soporta todas las características de GitHub Flavored Markdown (GFM):

```markdown
# Encabezado 1

## Encabezado 2

**Texto en negrita** y _texto en cursiva_

- Lista de elementos
  - Sublista
- Otro elemento

1. Lista numerada
2. Segundo elemento

[Enlaces](https://example.com)

![Imágenes](url-de-imagen.jpg)

`código en línea`

\`\`\`javascript
// Bloque de código
console.log('Hello World');
\`\`\`

> Citas

| Columna 1 | Columna 2 |
| --------- | --------- |
| Dato 1    | Dato 2    |

---

~~Texto tachado~~
```

---

## Capturas de Pantalla

### Versión de escritorio

![Vista de escritorio](../assets/screenshots/desktop-view.png)

### Versión móvil

![Vista móvil](../assets/screenshots/mobile-view.png)

---

## 🛡️ Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcion`).
3. Realiza un pull request explicando tus cambios.

---

## 👤 Créditos

Desarrollado originalmente por [andres-olarte396](https://github.com/andres-olarte396).
