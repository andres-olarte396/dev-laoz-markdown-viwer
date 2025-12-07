// ========================================
// ELEMENTOS DEL DOM
// ========================================
const textarea = document.getElementById('markdown');
const output = document.getElementById('output');
const toggleEditorBtn = document.getElementById('toggleEditor');
const togglePreviewBtn = document.getElementById('togglePreview');
const editorContainer = document.querySelector('.editor-container');
const formatButtons = document.querySelectorAll('.btn-format');

// ========================================
// CONFIGURACIÓN DE MARKED
// ========================================
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: true,
  mangle: false,
  sanitize: false
});

// ========================================
// ACTUALIZACIÓN EN TIEMPO REAL
// ========================================
function updatePreview() {
  const markdownText = textarea.value;
  output.innerHTML = marked.parse(markdownText);
}

// Actualizar al escribir
textarea.addEventListener('input', updatePreview);

// Renderizar contenido inicial
updatePreview();

// ========================================
// TOGGLE DE PANELES
// ========================================
let editorVisible = true;
let previewVisible = true;

toggleEditorBtn.addEventListener('click', () => {
  editorVisible = !editorVisible;
  toggleEditorBtn.classList.toggle('active');
  
  if (!editorVisible && !previewVisible) {
    // Si ambos están ocultos, mostrar el otro
    previewVisible = true;
    togglePreviewBtn.classList.remove('active');
  }
  
  updatePanelVisibility();
});

togglePreviewBtn.addEventListener('click', () => {
  previewVisible = !previewVisible;
  togglePreviewBtn.classList.toggle('active');
  
  if (!editorVisible && !previewVisible) {
    // Si ambos están ocultos, mostrar el otro
    editorVisible = true;
    toggleEditorBtn.classList.remove('active');
  }
  
  updatePanelVisibility();
});

function updatePanelVisibility() {
  editorContainer.classList.remove('editor-only', 'preview-only');
  
  if (editorVisible && !previewVisible) {
    editorContainer.classList.add('editor-only');
  } else if (!editorVisible && previewVisible) {
    editorContainer.classList.add('preview-only');
  }
}

// ========================================
// HERRAMIENTAS DE FORMATO
// ========================================
function insertText(before, after = '', placeholder = '') {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selectedText = textarea.value.substring(start, end);
  const textToInsert = selectedText || placeholder;
  const newText = before + textToInsert + after;
  
  textarea.setRangeText(newText, start, end, 'end');
  textarea.focus();
  
  // Si no había texto seleccionado, seleccionar el placeholder
  if (!selectedText && placeholder) {
    textarea.setSelectionRange(start + before.length, start + before.length + placeholder.length);
  }
  
  updatePreview();
}

function insertAtLineStart(prefix) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;
  
  // Encontrar el inicio de la línea
  let lineStart = start;
  while (lineStart > 0 && text[lineStart - 1] !== '\n') {
    lineStart--;
  }
  
  // Encontrar el final de la línea
  let lineEnd = end;
  while (lineEnd < text.length && text[lineEnd] !== '\n') {
    lineEnd++;
  }
  
  const selectedLines = text.substring(lineStart, lineEnd);
  const lines = selectedLines.split('\n');
  const newLines = lines.map(line => {
    // Si la línea ya tiene el prefijo, no lo agregamos
    if (line.trim().startsWith(prefix.trim())) {
      return line;
    }
    return prefix + line;
  });
  
  textarea.setRangeText(newLines.join('\n'), lineStart, lineEnd, 'end');
  textarea.focus();
  updatePreview();
}

// ========================================
// MANEJADORES DE BOTONES DE FORMATO
// ========================================
formatButtons.forEach(button => {
  button.addEventListener('click', () => {
    const format = button.dataset.format;
    
    switch (format) {
      case 'bold':
        insertText('**', '**', 'texto en negrita');
        break;
      
      case 'italic':
        insertText('*', '*', 'texto en cursiva');
        break;
      
      case 'strikethrough':
        insertText('~~', '~~', 'texto tachado');
        break;
      
      case 'h1':
        insertAtLineStart('# ');
        break;
      
      case 'h2':
        insertAtLineStart('## ');
        break;
      
      case 'h3':
        insertAtLineStart('### ');
        break;
      
      case 'link':
        insertText('[', '](https://example.com)', 'texto del enlace');
        break;
      
      case 'image':
        insertText('![', '](https://example.com/image.jpg)', 'descripción de la imagen');
        break;
      
      case 'code':
        insertText('`', '`', 'código');
        break;
      
      case 'codeblock':
        insertText('```javascript\n', '\n```', 'tu código aquí');
        break;
      
      case 'ul':
        insertAtLineStart('- ');
        break;
      
      case 'ol':
        insertAtLineStart('1. ');
        break;
      
      case 'quote':
        insertAtLineStart('> ');
        break;
      
      case 'hr':
        insertText('\n---\n');
        break;
      
      case 'table':
        const table = '\n| Encabezado 1 | Encabezado 2 | Encabezado 3 |\n' +
                     '| ------------ | ------------ | ------------ |\n' +
                     '| Celda 1      | Celda 2      | Celda 3      |\n' +
                     '| Celda 4      | Celda 5      | Celda 6      |\n';
        insertText(table);
        break;
    }
  });
});

// ========================================
// ATAJOS DE TECLADO
// ========================================
textarea.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + B para negrita
  if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
    e.preventDefault();
    insertText('**', '**', 'texto en negrita');
  }
  
  // Ctrl/Cmd + I para cursiva
  if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
    e.preventDefault();
    insertText('*', '*', 'texto en cursiva');
  }
  
  // Ctrl/Cmd + K para enlace
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    insertText('[', '](https://example.com)', 'texto del enlace');
  }
  
  // Tab para indentación
  if (e.key === 'Tab') {
    e.preventDefault();
    insertText('  ');
  }
});

// ========================================
// AUTO-GUARDADO EN LOCALSTORAGE
// ========================================
const STORAGE_KEY = 'markdown-editor-content';

// Cargar contenido guardado al iniciar
const savedContent = localStorage.getItem(STORAGE_KEY);
if (savedContent) {
  textarea.value = savedContent;
  updatePreview();
}

// Guardar contenido automáticamente
let saveTimeout;
textarea.addEventListener('input', () => {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    localStorage.setItem(STORAGE_KEY, textarea.value);
  }, 1000);
});

// ========================================
// SINCRONIZACIÓN DE SCROLL (OPCIONAL)
// ========================================
let isEditorScrolling = false;
let isPreviewScrolling = false;

textarea.addEventListener('scroll', () => {
  if (!isPreviewScrolling) {
    isEditorScrolling = true;
    const scrollPercentage = textarea.scrollTop / (textarea.scrollHeight - textarea.clientHeight);
    output.scrollTop = scrollPercentage * (output.scrollHeight - output.clientHeight);
    setTimeout(() => { isEditorScrolling = false; }, 100);
  }
});

output.addEventListener('scroll', () => {
  if (!isEditorScrolling) {
    isPreviewScrolling = true;
    const scrollPercentage = output.scrollTop / (output.scrollHeight - output.clientHeight);
    textarea.scrollTop = scrollPercentage * (textarea.scrollHeight - textarea.clientHeight);
    setTimeout(() => { isPreviewScrolling = false; }, 100);
  }
});

console.log('✅ Editor de Markdown cargado correctamente');