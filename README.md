# React Gallery SPA: Listado y Búsqueda de Imágenes

## Descripción
Esta aplicación React JS es una Single Page Application (SPA) diseñada para:

- Listar imágenes: Organizadas por grupos, permitiendo una navegación intuitiva entre las diferentes categorías.
- Ver detalles: Cada imagen cuenta con una vista detallada que muestra información adicional y una versión de mayor tamaño.
- Búsqueda avanzada: Un potente buscador que filtra las imágenes basadas en su descripción, ofreciendo resultados precisos y relevantes.

¡Explora la aplicación en acción!
https://xsoto-developer.github.io/react-gallery-spa/

## Credenciales de Acceso (para pruebas)
- **Usuario**: demo_user
- **Contraseña**: demo_pass
Usa estas credenciales para acceder a la versión de prueba de la aplicación.

## Características Técnicas

- SPA con múltiples rutas: Navegación fluida entre diferentes secciones de la aplicación sin recargas de página completas.
- Manejo del historial: Utilización de push y replace en el historial para controlar la navegación y el estado de la aplicación.
- Lectura de parámetros de URL: Extracción de información de la URL a través de queryParams para personalizar la experiencia del usuario.
- Filtros basados en queryStrings: Aplicación de filtros dinámicos a los resultados de búsqueda mediante la modificación de la URL.
- Protección de rutas: Implementación de mecanismos de autenticación para restringir el acceso a ciertas secciones de la aplicación.
- Rutas públicas y privadas: Definición clara de las rutas accesibles a todos los usuarios y aquellas que requieren autenticación.

## Tecnologías Utilizadas
- React JS: Framework de JavaScript para construir interfaces de usuario.
- React Router: Para gestionar la navegación y las rutas.
- CSS: Para estilizar los componentes.

## Decisiones de Diseño
- React Context: Utilizamos React Context para crear un contexto global de tareas, permitiendo que cualquier componente de la aplicación acceda y modifique la lista de tareas.
- useState: Utilizamos useState para gestionar el estado local de los componentes y useEffect para realizar efectos secundarios, como suscribirse a cambios en el estado y realizar operaciones asíncronas.
- useNavigate: Hook de React Router para programar la navegación, facilitando la transición entre páginas.
- useMemo: Optimización de rendimiento al memorizar resultados de cálculos costosos, evitando recalcularlos innecesariamente.
- Componentes funcionales: Optamos por componentes funcionales con hooks para una mejor gestión del estado y rendimiento.

## Beneficios de este enfoque
- Escalabilidad: La estructura basada en componentes y el uso de Context facilitan la escalabilidad de la aplicación.
- Reutilización de código: Los componentes pueden reutilizarse en diferentes partes de la aplicación.
- Mantenimiento: El código es más fácil de mantener y depurar gracias a su modularidad.
- Experiencia de usuario: La persistencia de los datos en el almacenamiento local mejora la experiencia del usuario

## Cómo Ejecutar el Proyecto

### 1. Clonar el repositorio:

`git clone https://github.com/xsoto-developer/react-gallery-spa.git`

### 2. Instalar dependencias:

`yarn install`

### 3. Iniciar el servidor de desarrollo:   

`yarn dev`

### Ejecuta la aplicación en el modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se volverá a cargar cuando realices cambios.\

`yarn build`

Compila la aplicación para producción en la carpeta `dist`.\



