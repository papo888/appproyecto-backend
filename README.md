# FitTrack (Backend)**

**Proyecto Final – Arquitectura de Software**
**Autores:**

* **Juan Pablo Parrado Morales – ID 0000291023**
* **Samuel Esteban López Huertas – ID 0000296396**
* **Gabriela Sofía Fuentes Córdova – ID 0000306389**

---

## **Introducción**

Este repositorio contiene el desarrollo completo del **Proyecto Final del curso Diseño y Arquitectura de Software**. El objetivo fue construir un backend **seguro, modular, automatizado y profesional**, aplicando principios de arquitectura limpia, pruebas automatizadas, buenas prácticas de ingeniería, contenedorización y un pipeline CI/CD con enfoque **DevSecOps**.

El sistema implementa una **API REST para FitTrack**, con autenticación JWT, PostgreSQL como base de datos, Docker para despliegue estandarizado y un ecosistema completo de pruebas en GitHub Actions.

---

# **Arquitectura General**

El backend se diseñó bajo principios de **modularidad y mantenibilidad**, con capas independientes y componentes desacoplados.

### **Tecnologías principales**

* **Node.js + Express** — API REST
* **PostgreSQL + Sequelize** — Persistencia de datos
* **SQLite en memoria** — Entorno aislado para pruebas
* **JWT** — Autenticación segura basada en tokens
* **Docker** — Contenerización para despliegues consistentes
* **GitHub Actions** — Pipeline CI/CD
* **Jest + Supertest + k6** — Pruebas unitarias, integración, API y carga

---

# **Pruebas Implementadas**

### ✔ **Pruebas Unitarias (Jest)**

Validan la lógica central del backend (registro, login, validaciones).
Ejecutan sobre **SQLite en memoria** para garantizar rapidez y aislamiento.

### ✔ **Pruebas de API (Supertest)**

Simulan solicitudes HTTP reales para validar:

* `POST /auth/register`
* `POST /auth/login`
* `GET /progress/weekly` (ruta protegida con JWT)

### ✔ **Pruebas de Carga (k6)**

Escenario ejecutado:

* **10 usuarios virtuales**
* **15 segundos de carga continua**

Evaluamos latencia, estabilidad y tasa de solicitudes bajo tráfico moderado.

---

# **CI/CD – Integración Continua Automatizada**

Pipeline configurado con **GitHub Actions**, que se ejecuta en cada push a `main`.

### Etapas del pipeline:

1. Instalar dependencias
2. Ejecutar pruebas (Jest + Supertest)
3. Construir imagen Docker
4. Ejecutar auditoría de seguridad (`npm audit`)
5. Publicar reportes como artifacts

Garantiza calidad, seguridad y consistencia en cada commit.

---

# **DevSecOps – Seguridad Integrada**

### ✔ **Dependency Scanning – npm audit**

Detecta vulnerabilidades en dependencias.
Genera `audit-report.json` como artifact.

**Resultado:**

* **0 vulnerabilidades encontradas**

### ✔ **Secrets Scanning – Gitleaks**

Detecta llaves, tokens o secretos expuestos.
**Resultado:**

* **No se encontraron secretos comprometidos**

---

# **Contenerización con Docker**

El backend está completamente contenerizado y puede ejecutarse con:

```bash
docker build -t backend .
docker run -p 3000:3000 backend
```

La imagen incluye:

* Node.js
* Dependencias
* Configuración del servidor
* Preparación para despliegue en producción

Garantiza portabilidad total del sistema.

---

# **Estructura del Repositorio**

```
/src
  /controllers      → Lógica de negocio
  /routes           → Endpoints REST
  /models           → Modelos Sequelize
  /middleware       → Autenticación JWT
  app.js            → Configuración de la aplicación
  server.js         → Entry point del servidor

/tests
  auth.test.js      → Tests de autenticación
  progress.test.js  → Tests de rutas protegidas
  setup.js          → Configuración de entorno de testing

/.github/workflows
  ci.yml            → Pipeline CI/CD

k6_load_test.js      → Script de carga k6
Dockerfile           → Construcción de imagen
audit-report.json    → Resultado de npm audit
```

---

# **Presentación del Proyecto**

La presentación final del proyecto está disponible aquí:
👉 **[https://www.canva.com/design/DAGwe2s2f3g/X2C_D6cZoTVPqrhfewGJmA/edit](https://www.canva.com/design/DAGwe2s2f3g/X2C_D6cZoTVPqrhfewGJmA/edit)**

---

# **Conclusión**

Este backend representa una solución completa y profesional lista para producción:

* API bien estructurada
* Autenticación segura
* Pruebas automatizadas
* Pipeline CI/CD
* Escaneo de seguridad integrado
* Imagen Docker reproducible

El proyecto demuestra un flujo de desarrollo moderno, robusto y alineado con estándares reales de la industria.
