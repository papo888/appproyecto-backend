# **Proyecto Final de Arquitectura de Software**

Este Readme presenta el desarrollo y los resultados del **Proyecto Final del curso Diseño y Arquitectura de Software**, realizado por el equipo conformado por **Juan Pablo Parrado Morales (ID 0000291023)**, **Samuel Esteban López Huertas (ID 0000296396)** y **Gabriela Sofía Fuentes Córdova (ID 0000306389)**.
El objetivo de este proyecto fue **diseñar, construir y asegurar una aplicación backend siguiendo principios de arquitectura limpia, buenas prácticas de ingeniería, estrategias de pruebas automatizadas y un enfoque DevSecOps**, tal como lo establecen los lineamientos de la entrega final .

Durante el desarrollo se implementó una API REST segura con autenticación JWT, una base de datos PostgreSQL gestionada mediante Sequelize, un entorno de ejecución reproducible con Docker, un pipeline de CI/CD en GitHub Actions y pruebas automatizadas que incluyen pruebas unitarias, de integración, de API y de carga con k6. Asimismo, se incorporaron prácticas de seguridad como escaneo de dependencias y análisis de secretos, consolidando una solución robusta, mantenible y alineada con los estándares profesionales de la industria.

---

## **Versión para README.md (más directa y orientada a repositorio)**

Aquí tienes una versión optimizada para el README del repositorio, con mención al código y a la presentación:

---

# **Proyecto Final – FitTrack (Arquitectura de Software)**

Este repositorio contiene el desarrollo completo del **Proyecto Final del curso Diseño y Arquitectura de Software**, realizado por:

* **Juan Pablo Parrado Morales – ID 0000291023**
* **Samuel Esteban López Huertas – ID 0000296396**
* **Gabriela Sofía Fuentes Córdova – ID 0000306389**

El proyecto implementa una **API REST segura para la aplicación FitTrack**, desarrollada bajo principios de arquitectura limpia e ingeniería profesional. La solución incluye:

* Backend en **Node.js + Express**
* Base de datos **PostgreSQL** gestionada con Sequelize
* Autenticación JWT
* Contenedorización completa con **Docker**
* Pipeline **CI/CD en GitHub Actions**
* Pruebas unitarias, de integración, de API (Postman) y de carga (k6)
* Prácticas DevSecOps: `npm audit`, `gitleaks`, escaneo de dependencias y reporte automatizado
* Reportes, evidencia de ejecución y presentación final

 **Este repositorio incluye todo el código fuente de FitTrack y los archivos del pipeline.**
 **Presentación final del proyecto:** *(agregar enlace aquí)*
---

#  **Backend – FitTrack Platform**

**API REST | PostgreSQL | Docker | CI/CD | Testing | DevSecOps**

Este repositorio contiene la implementación completa del backend para la plataforma FitTrack. El objetivo principal del proyecto es entregar un backend robusto, probado, automatizado y seguro, aplicando buenas prácticas de ingeniería de software, integración continua y seguridad desde el proceso de desarrollo (DevSecOps).

---

## **Arquitectura General**

El backend está construido siguiendo principios de modularidad y mantenibilidad, con capas bien definidas y componentes desacoplados.

### **Tecnologías Principales**

* **Node.js + Express** — API REST y controladores.
* **PostgreSQL + Sequelize ORM** — persistencia de datos.
* **SQLite en memoria** — entorno especializado para pruebas automatizadas.
* **JWT** — autenticación segura basada en tokens.
* **Docker** — contenerización para despliegues consistentes.
* **GitHub Actions** — CI/CD automatizado.
* **k6, Jest, Supertest** — ecosistema de pruebas.

---

## **Pruebas Implementadas**

El proyecto cuenta con un enfoque integral de testing que valida tanto la lógica interna como el comportamiento de la API bajo diferentes condiciones.

### ✔ **Pruebas Unitarias (Jest)**

Validan la lógica crítica del sistema (registro, login, validaciones, controladores).
Se ejecutan sobre **SQLite en memoria**, garantizando repetibilidad, independencia del entorno y alta velocidad.

### ✔ **Pruebas de API (Supertest)**

Simulan peticiones HTTP reales para validar el funcionamiento completo de los endpoints:

* `POST /auth/register`
* `POST /auth/login`
* `GET /progress/weekly`

Incluyen pruebas de autenticación, manejo de errores y protección con JWT.

### ✔ **Pruebas de Carga (k6)**

Se realizó un test de concurrencia con **10 usuarios virtuales durante 15 segundos**, evaluando:

* latencia,
* tasa de solicitudes,
* estabilidad del servicio bajo carga.

Esta prueba permitió validar que el backend mantiene tiempos consistentes y no presenta fallos estructurales bajo tráfico moderado.

---

## **CI/CD – Integración Continua Automatizada**

El proyecto incluye un pipeline profesional configurado con **GitHub Actions**, que se ejecuta automáticamente ante cada push en la rama `main`.

### El pipeline incluye:

1. **Instalación del entorno**
2. **Ejecución automatizada de pruebas (Jest + Supertest)**
3. **Build de imagen Docker**
4. **Security Audit (npm audit)**
5. **Publicación de reportes como artifacts**

Este flujo garantiza que cada cambio pase por validación de calidad y seguridad antes de ser integrado.

---

## **DevSecOps – Seguridad Integrada al Flujo de Trabajo**

La seguridad forma parte del pipeline y no un paso posterior. Se implementaron mecanismos automáticos de escaneo:

### ✔ **Scanning de Dependencias – npm audit**

Detecta vulnerabilidades conocidas en librerías del ecosistema Node.js.
El proceso genera un reporte automático (`audit-report.json`) que se publica como artifact.

**Resultado actual:**

> 0 vulnerabilidades encontradas.

### ✔ **Detección de Secretos – Gitleaks**

Escanea el repositorio en busca de llaves, tokens, contraseñas o datos sensibles expuestos accidentalmente.

**Resultado:**

> No se encontraron secretos expuestos.

---

## **Contenerización con Docker**

El backend está completamente contenerizado y puede ejecutarse en cualquier entorno con un solo comando:

```bash
docker build -t backend .
docker run -p 3000:3000 backend
```

La imagen Docker incluye:

* Node.js
* dependencias instaladas
* configuración del servidor
* preparación para producción

Esto garantiza portabilidad total y elimina diferencias entre entornos.

---

## **Estructura del Repositorio**

```
/src
  /controllers     → Lógica de negocio
  /routes          → Endpoints REST
  /models          → Modelos Sequelize
  /middleware      → Autenticación JWT
  app.js           → Configuración de la aplicación
  server.js        → Entry point del servidor

/tests
  auth.test.js     → Pruebas de autenticación
  progress.test.js → Pruebas de rutas protegidas
  setup.js         → Configuración del entorno de test

/.github/workflows
  ci.yml           → Pipeline CI/CD

k6_load_test.js     → Script de carga k6
Dockerfile          → Construcción de la imagen
audit-report.json   → Resultado del Security Audit
```

---

##� **Presentación del Proyecto**

La presentación oficial del proyecto está disponible aquí:
https://www.canva.com/design/DAGwe2s2f3g/X2C_D6cZoTVPqrhfewGJmA/edit


---

##  **Conclusión**

Este backend entrega una solución profesional lista para producción, construida con estándares actuales de la industria:

* API bien estructurada
* autenticación segura
* pruebas automatizadas
* pipeline CI/CD
* análisis de seguridad
* contenerización reproducible

El proyecto demuestra un flujo de desarrollo completo, robusto y escalable.
