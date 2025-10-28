# Gestión de Roles con Auditoría

Sistema completo de **gestión de usuarios y roles** con **registro de auditoría** desarrollado con:

* **Backend:** Node.js, Express, TypeScript y Prisma ORM
* **Base de datos:** PostgreSQL
* **Frontend:** Angular

El objetivo del proyecto es ofrecer un entorno seguro y administrable donde se pueda gestionar la información de los usuarios, asignar roles y mantener un registro detallado (logs) de cada acción relevante dentro del sistema.

---

## Características principales

*  Registro, autenticación y gestión de usuarios.
*  Asignación, actualización y eliminación de roles.
*  Auditoría completa de acciones (creación, modificación, cambio de rol, inicio/cierre de sesión, etc.).
*  Estructura modular y escalable.
*  Frontend sencillo en Angular para manejo visual de roles y estados de usuario (activo/inactivo).
*  Tipado fuerte con TypeScript y ORM moderno (Prisma).

---

## Tecnologías utilizadas

### **Backend**

* Node.js
* Express
* TypeScript
* Prisma ORM
* PostgreSQL
* Dotenv
* Bcrypt
* JSON Web Token (JWT)

### **Frontend**

* Angular
* Bootstrap

---

## Funcionalidades clave (Módulos)

| Módulo                | Descripción                                                     |
| ----------------------| --------------------------------------------------------------- |
| **Usuarios**          | CRUD completo con autenticación y estado activo/inactivo        |
| **Roles**             | Gestión de roles (creación, asignación, actualización)          |
| **Auditoría**         | Registro automático de todas las acciones en `AuditLogs`        |
| **Autenticación**     | Tokens JWT y middleware de validación                           |
| **Frontend Angular**  | Interfaz para login y panel de administración de usuarios/roles |

---

## Autor

**Luis Sazo**

## Estado

**En Desarrollo**
