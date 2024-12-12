# **Guía de Contribución**

¡Gracias por tu interés en contribuir a este proyecto de plantilla HTML! Apreciamos tus ideas y esfuerzos para mejorar el proyecto. Por favor, sigue estas pautas para que tu contribución sea útil y fácil de revisar.

---

## **Cómo contribuir**

1. **Reportar un problema o sugerir una mejora**  
   Si encuentras un problema o tienes una idea para mejorar la plantilla, abre un [Issue](https://github.com/andres-olarte396/dev-laoz-HTML-Project-Base/issues) y proporciona:
   - Una descripción clara y concisa.
   - Pasos para reproducir el problema (si aplica).
   - Propuestas de mejora o posibles soluciones (si aplica).

2. **Crear un Pull Request (PR)**  
   Si deseas realizar cambios directamente:
   - Haz un **fork** del repositorio.
   - Crea una nueva rama para tu contribución:

     ```bash
     git checkout -b feature/tu-nueva-funcion
     ```

   - Realiza tus cambios y realiza **commits** descriptivos:

     ```bash
     git commit -m "Añade [descripción clara del cambio]"
     ```

   - Haz un **push** de tu rama al repositorio fork:

     ```bash
     git push origin feature/tu-nueva-funcion
     ```

   - Abre un Pull Request en el repositorio principal, describiendo los cambios realizados y su propósito.

---

## **Pautas para contribuir**

1. **Estandarización de código**  
   - Sigue las mejores prácticas de HTML5 y CSS.
   - Usa una estructura de código clara y comentarios cuando sea necesario.
   - Asegúrate de que el HTML pase la validación en [W3C Validator](https://validator.w3.org/).

2. **Estilo de código**  
   - Usa sangría de **2 espacios**.
   - Nombra las clases y los IDs de manera descriptiva y en inglés (`kebab-case` recomendado).
   - Organiza las reglas CSS en orden alfabético.

3. **Pruebas y revisiones**  
   - Asegúrate de probar los cambios en múltiples navegadores y tamaños de pantalla.
   - Adjunta capturas de pantalla o GIFs al Pull Request si los cambios afectan la UI.

4. **No incluyas archivos innecesarios**  
   - No incluyas archivos compilados ni de configuración local en tus commits.  
   - Usa el archivo `.gitignore` para ignorar elementos como `node_modules`, `.env`, o `.DS_Store`.

5. **Actualización de la documentación**  
   Si tus cambios afectan la estructura o el propósito de la plantilla, actualiza el archivo `README.md` y cualquier documentación relevante.

---

## **Comunicación**

- Si tienes dudas, usa la sección de [Discussions](https://github.com/andres-olarte396/dev-laoz-HTML-Project-Base/discussions).
- Sé amable y respeta las opiniones de otros colaboradores.

---

## **Licencia**

Al contribuir a este repositorio, aceptas que tus contribuciones se publiquen bajo la misma [licencia](LICENSE) que rige el proyecto.
