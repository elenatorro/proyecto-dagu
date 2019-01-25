# Learning Resources

These are the resources I used to set up and learn how to create a PSQL database for the Unknownversity project.

## Apps
* https://postgresapp.com/downloads.html

## Links
* Install: https://www.youtube.com/watch?v=xaWlS9HtWYw
* Queries: http://www.postgresqltutorial.com/postgresql-cheat-sheet/
* Node JS + PSQL: https://mherman.org/blog/postgresql-and-nodejs/

## Queries

### Create tables

Universities

```sql
CREATE TABLE university(
 university_id serial PRIMARY KEY,
 name VARCHAR (255) UNIQUE NOT NULL,
 city VARCHAR (255) UNIQUE NOT NULL,
 address VARCHAR (255) UNIQUE NOT NULL,
 url VARCHAR (50) UNIQUE NOT NULL,
 logo_url VARCHAR (255) UNIQUE NOT NULL,
 phone_number INTEGER UNIQUE NOT NULL,
);
```

Studies

```sql
CREATE TABLE study(
  study_id serial PRIMARY KEY,
  university_id INTEGER,
  FOREIGN KEY (university_id) REFERENCES university (university_id),
  study_type VARCHAR (255) NOT NULL,
  title VARCHAR (255) NOT NULL,
  DATE TIMESTAMP NOT NULL,
  info VARCHAR (255) NOT NULL,
  general_skills TEXT NOT NULL,
  specific_skills TEXT NOT NULL,
  total_courses INTEGER NOT NULL,
  price_per_credit FLOAT NOT NULL,
  total_price FLOAT NOT NULL,
  regulation TEXT,
  professional_opportunities TEXT,
  official_documentation_url VARCHAR (255),
  quality TEXT,
  partial_studies BOOLEAN NOT NULL,
  study_mode VARCHAR (255) NOT NULL,
  enrolment_period TIMESTAMP NOT NULL,
  exams_period TIMESTAMP NOT NULL,
  places INTEGER,
);
```

Courses

```sql
CREATE TABLE course(
  course_id serial PRIMARY KEY,
  study_id INTEGER,
  FOREIGN KEY (study_id) REFERENCES study (study_id),
  course_year INTEGER NOT NULL,
  total_subjects INTEGER NOT NULL,
  total_credits INTEGER NOT NULL
);
```

Subjects

```sql
CREATE TABLE subject(
  subject_id serial PRIMARY KEY,
  code INTEGER UNIQUE NOT NULL,
  subject_name VARCHAR(255) NOT NULL,
  study_id INTEGER REFERENCES study (study_id),
  department_id INTEGER,
  FOREIGN KEY (department_id) REFERENCES department (department_id),
  faculty_id INTEGER,
  FOREIGN KEY (faculty_id) REFERENCES faculty (faculty_id),
  academic_period VARCHAR(50),
  total_hours INTEGER,
  subject_type VARCHAR(50) NOT NULL,
  total_credits INTEGER NOT NULL,
  subject_description text NOT NULL,
  subject_requisites text,
  url VARCHAR(255) NOT NULL,
  methodology text,
  tutory text
);
```

Departments

```sql
CREATE TABLE department(
  department_id serial PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  url VARCHAR (50) UNIQUE NOT NULL,
  university_id INTEGER,
  FOREIGN KEY (university_id) REFERENCES university (university_id)
);
```

Faculties

```sql
CREATE TABLE faculty(
  faculty_id serial PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  url VARCHAR (50) UNIQUE NOT NULL,
  university_id INTEGER,
  FOREIGN KEY (university_id) REFERENCES university (university_id)
);

```

Bibliography

```sql
CREATE TABLE bibliography(
  bibliography_id serial PRIMARY KEY,
  title VARCHAR (255) NOT NULL,
  link VARCHAR (255) NOT NULL,
  total_pages INTEGER,
  last_edition INTEGER,
  price INTEGER
);
```

Author

```sql
CREATE TABLE bibliography_author(
  author_id serial PRIMARY KEY,
  fullname VARCHAR (255) NOT NULL
);
```

Bibliography-Author

```sql
CREATE TABLE bibliography_author_relation(
  author_id INTEGER,
  bibliography_id INTEGER,
  FOREIGN KEY (author_id) REFERENCES bibliography_author (author_id),
  FOREIGN KEY (bibliography_id) REFERENCES bibliography (bibliography_id)
);

```

Bibliography-Subject

```sql
CREATE TABLE bibliography_subject_relation(
  subject_id INTEGER,
  bibliography_id INTEGER,
  FOREIGN KEY (subject_id) REFERENCES subject (subject_id),
  FOREIGN KEY (bibliography_id) REFERENCES bibliography (bibliography_id)
);
```

```sql
CREATE TABLE language(
  language_id serial PRIMARY KEY,
  language_name VARCHAR(50) NOT NULL,
  language_code VARCHAR(50) NOT NULL
)
```

```sql
CREATE TABLE language_subject_relation(
  subject_id INTEGER,
  language_id INTEGER,
  FOREIGN KEY (subject_id) REFERENCES subject (subject_id),
  FOREIGN KEY (language_id) REFERENCES language (language_id)
);
```

```sql
CREATE TABLE subject_evaluation(
  subject_evaluation serial PRIMARY KEY,
  subject_id INTEGER,
  FOREIGN KEY (subject_id) REFERENCES subject (subject_id),
  study_type VARCHAR (255) NOT NULL,
  hours FLOAT,
  criteria text,
  min_grade INTEGER,
  max_grade INTEGER,
  continuous_evaluation_min_grade INTEGER
);
```

```sql
CREATE TABLE lecturer(
  lecturer_id serial PRIMARY KEY,
  full_name VARCHAR (255) NOT NULL,
  email VARCHAR (255) NOT NULL,
  phone_number INTEGER
)
```

```sql
CREATE TABLE department_lecturer_relation(
  department_id INTEGER,
  lecturer_id INTEGER,
  FOREIGN KEY (department_id) REFERENCES department (department_id),
  FOREIGN KEY (lecturer_id) REFERENCES lecturer (lecturer_id)
);
```

Academic Credit Transfer

```sql
CREATE TABLE academic_credit_transfer(
  academic_credit_transfer_id serial PRIMARY KEY,
  university_id INTEGER,
  FOREIGN KEY (university_id) REFERENCES university (university_id),
  url VARCHAR (50) NOT NULL
);
```

```sql
CREATE TABLE permanence_regulation(
  permanence_regulation_id serial PRIMARY KEY,
  university_id INTEGER,
  FOREIGN KEY (university_id) REFERENCES university (university_id),
  url VARCHAR (50) NOT NULL
);
```