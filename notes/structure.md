# Database structure

## University x

- name
- city
- address
- phone_number
- logo_url
- url

## Study x

- id
- University (FK)
- Type (Carrera, Master, Doctorado)
- Title
- Date (Start date? Timestamp?)
- Info
- General skills (?)
- Specific skills (?)
- Enter profile
- Plan
- Courses (number)
- Price per credit (float)
- Total price (float)
- Normativa (?)
- Salidas Profesionales (?)
- Atribuciones Profesionales (?)
- Documentación Oficial (?)
- Garantía de Calidad (?)
- Tiempo Parcial (bool)
- Mode (Online...) -> define ENUM  
- Accesibilidad (? bool? text?)
- Buzón de Sugerencias (? link?)
- Matriculación (? date / timestamp)
- Oficial
- Periodo Examenes (timestamp)

## Contact -
- University (FK)
- Phone
- Fax
- Email
(?)

## Course x

- id
- Study (FK) --> (each course belongs to a specific study)
- Subjects (count)
- Credits (count)

## Subject X

- id
- Code (not a PK)
- Name
- Department (?)
- Study (FK) --> each subject belongs to a specific study. (note: what happens with subjects shared between studies, i.e. Databases UA Multimedia + Informática)
- Course (PK)
- Periodo (Semester, longchar)
- Title
- Hours
- Type (Formación Básica, Obligatoria, Optativa, Trabajo Final) --> enum
- Credits (count)
- Bibliography
- Description
- Requisites (longchar?)
- Link
- Tutoría
- Metodología
- Idiomas
- Departamento
- Facultad

Bibliography x
- id
- title
- link
- total_pages
- last_edition
- price

Author
- id
- fullname

BibliographyAuthorRelation X
BibliographySubjectRelation X
LanguageSubjectRelation x

Faculty x

Evaluación Asignatura
- id
- Asignatura (id)
- Tipo
- Duración
- Material
- Criterios
- Mínima nota para aprobar (sin evaluación continua)
- Mínima nota para aprobar (con evaluación continua)
- Mínima nota para sumar a la evaluación continua

Lecturer X
- id
- Asignatura (id)
- Nombre
- Departamento
- Correo
- Teléfono
- Facultad

Lecturer<>Subject x
Lecturer<>Department x

Practicas
- id
- Estudios (id)
- Curso (id)
- Periodo
- Tipo (Profesionales, Extracurriculares)

Reconocimiento de créditos
- id
- Estudios (id)
- Universidad  (id)
- Recursos
https://descargas.uned.es/publico/pdf/guias/NORMAS_RECONOCIMIENTOS_GRADOS.pdf

Permanencia
- id
- Estudios (id)
- Fecha
https://descargas.uned.es/publico/pdf/guias/grados/Permanencia_est_conducentes_titulos_UNED.pdf

Normativa Asignatura
https://descargas.uned.es/publico/pdf/guias/grados/NORMATIVA_TFG.pdf