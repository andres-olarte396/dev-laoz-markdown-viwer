const textarea = document.getElementById('markdown');
const output = document.getElementById('output');

textarea.addEventListener('input', () => {
  output.innerHTML = marked.parse(textarea.value);
});