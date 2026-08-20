# Mundo Mejor Web

PROMPT MAESTRO — Sitio web Fundación por un Mundo Mejor

ROL Y CONTEXTO

Actuá como desarrollador Full Stack senior especializado en sitios institucionales para ONGs/fundaciones de salud mental. Vamos a construir el sitio web de la Fundación por un Mundo Mejor, institución cordobesa con 20 años de trayectoria dedicada a la prevención, asistencia y capacitación en materia de adicciones y salud mental.

Tono general del sitio: profesional, cálido, humano, sin golpe bajo ni estigmatización. Se dirige a tres públicos distintos: (1) familias y personas buscando ayuda, (2) obras sociales / organismos de gobierno / instituciones derivantes, (3) estudiantes, docentes y comunidad interesada en formación.

STACK TÉCNICO

React + TypeScript + Vite

Tailwind CSS

Estructura de componentes reutilizables, mobile-first, responsive

Formularios de contacto/derivación conectados vía n8n/Make (a definir en etapa 2) o mailto/endpoint simple en una primera etapa

Optimizado para SEO institucional (metatags, sitemap, semántica correcta de encabezados)

Accesibilidad básica (contraste, alt en imágenes, navegación por teclado)

IDENTIDAD VISUAL

Logo institucional: isotipo circular con degradé de verde menta (exterior) a turquesa (interior), nombre "Por Un Mundo Mejor" en tipografía bold color azul marino/gris oscuro, y tagline "Fundación para la atención y prevención de las adicciones" en turquesa, tipografía liviana.

Sistema de diseño a construir a partir de esto:

Color primario: turquesa/verde azulado (tono del isotipo, aprox. #2E8B8B – ajustar con cuentagotas sobre el archivo original)

Color secundario: verde menta claro (aro exterior del isotipo)

Color de texto principal: azul marino/gris oscuro (mismo tono que el nombre en el logo)

Tipografía: una familia sans-serif limpia y cálida, evitar fuentes "corporativas frías" (nada de Arial/Helvetica genérica) y evitar también estética clínica excesiva; buscar calidez, confianza y seriedad profesional a la vez

El logo va en el Header (tamaño moderado, no gigante) y en el Footer en versión reducida o monocromática

Usar el círculo del isotipo como elemento gráfico recurrente (blobs, separadores de sección, íconos) para dar identidad visual coherente en todo el sitio

ESTRUCTURA DEL SITIO (multi-sección + funcionalidades premium)

Inicio / Home

Hero con propuesta de valor institucional clara (ver fundamentación abajo, versión resumida)

Bajada de objetivos en 3 ejes: Preventivo / Asistencial / Formativo

CTA doble: "Necesito ayuda" (deriva a contacto/admisión) y "Quiero saber más" (deriva a institucional)

Bloque de trayectoria: 20 años, convenios con Obras Sociales y organismos de gobierno, alcance a Córdoba y otras provincias

Institucional (Quiénes somos)

Fundamentación (versión editorial resumida, no el texto académico completo — ver contenido base más abajo)

Objeto de la Fundación

Marco teórico: mencionar de forma breve y accesible (no técnica) que el equipo se nutre de distintas corrientes de la psicología y el psicoanálisis orientadas a la autonomía y el autogobierno del sujeto — SIN nombrar autores ni desarrollar teoría en el sitio público (eso queda para material interno/académico)

Equipo terapéutico (placeholder de fotos/bios — a completar)

Objetivos (podés usar como contenido base, reformulado a lenguaje web, no en formato de lista académica):

Preventivos: evitar el ingreso al consumo problemático; promover voluntariados barriales y trabajo comunitario con niños/adolescentes vulnerables; orientar a familias; favorecer inclusión social y laboral de jóvenes.

Asistenciales: acompañar la recuperación de personas afectadas por el consumo; detección precoz e intervención oportuna en adultos responsables de la crianza; reducción de daños y mejora de calidad de vida.

Formativos: investigación y capacitación en la problemática adictiva; actualización permanente del equipo; divulgación comunitaria de conceptos transformadores.

⚠️ Metodología / Programas terapéuticos — PENDIENTE No incluir esta sección todavía. El contenido actual del documento base está desactualizado (cambios en metodología y ya no cuenta con modalidad de internación). Dejar la sección como placeholder/"Próximamente" o directamente omitirla del menú hasta recibir el contenido actualizado.

A quién atendemos

Perfil de pacientes: trastornos por uso de sustancias psicotrópicas, patología dual, judicializados o no (redactado de forma sensible, sin tecnicismos excesivos)

Formación y capacitación

Cursos y jornadas abiertas a estudiantes, docentes y comunidad

Convenios con UNC, UPC e institutos privados (prácticas supervisadas)

Contacto / Derivación

Formulario diferenciado: "Consulta por un familiar/paciente" vs "Consulta institucional/derivación" vs "Quiero capacitarme"

Datos de contacto, ubicación (Córdoba), redes sociales

Funcionalidades premium sugeridas (para escalar el sitio)

Blog/Noticias institucionales (novedades, jornadas, capacitaciones)

Sección de recursos descargables (folletería PDF para derivantes)

Testimonios anonimizados / historias de recuperación (con consentimiento)

Integración de turnos/consultas vía WhatsApp Business

Panel de administración simple (CMS headless o similar) para que el equipo actualice noticias sin tocar código

Multilenguaje (si en el futuro atienden pacientes de otros países)

Certificados descargables para asistentes a cursos/jornadas

CONTENIDO BASE — FUNDAMENTACIÓN (resumen para reescritura web)

La Fundación promueve la salud mental y la educación integral de poblaciones vulnerables, trabajando por la autonomía y el autogobierno de las personas, desalentando alternativas ilusorias de realización personal como el abuso de alcohol y drogas, y acompañando a quienes se vieron afectados. Estimula a nivel comunitario la educación no formal, la organización barrial y la contención de niños y jóvenes, priorizando la prevención primaria. Atiende pacientes con trastornos por uso de sustancias y patología dual (judicializados o no), con tratamientos de 14 a 18 meses en modalidades ambulatoria, hospital de día y orientación familiar. Forma y capacita a su equipo y a la comunidad a través de cursos y jornadas, y funciona como unidad de prácticas supervisadas de carreras de la UNC y la UPC. Tiene 20 años de trayectoria con población juvenil y adulta de Córdoba y otras provincias, en convenio con Obras Sociales y organismos de gobierno.

(Nota de redacción: usar este resumen como base para el copy del Home/Institucional, no reproducir el documento académico completo en el sitio público — ese texto es material interno/fundacional, no copy web).

INSTRUCCIONES DE ENTREGA

Generar primero la estructura de carpetas y componentes base (Header, Footer, Layout, secciones como componentes independientes)

Trabajar sección por sección, un prompt/cambio por vez

Dejar comentarios // TODO: contenido metodología pendiente donde corresponda

Usar datos de ejemplo (lorem ipsum institucional) solo donde falte contenido real, marcado claramente como placeholder
El logo es la imagen1 que te adjunté y también te comparto el programa para que lo tengas en cuentas siempre sigue las instrucciones del prompt

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/25d701e3-f1e9-4bc4-ab02-4fc186b038c4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
