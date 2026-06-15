# HelaDuck 🍦🦆

Aplicación web de punto de venta e inventario para una paletería familiar en Aguascalientes, México.

Proyecto iniciado como entregable académico para la materia **Soluciones de Programación Móvil** (Ingeniería en Sistemas Computacionales, UVM) y continuado como solución real para el negocio familiar.

## Contexto

Mi mamá lleva el control de ventas e inventario de su paletería con libreta y calculadora. HelaDuck nació para reemplazar ese flujo: registrar ventas, descontar inventario automáticamente y ver un resumen del día sin papel.

## Stack actual

```
Frontend   React 19 + TypeScript + Vite
Backend    Express.js + Node.js
ORM        Prisma
Base datos MySQL
```

## Estructura del proyecto

```
heladuck/
├── client/          # Frontend React + TypeScript
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
└── server/          # Backend Express + Prisma
    ├── prisma/
    │   └── schema.prisma
    └── src/
        └── ...
```

## Módulos planificados

| Módulo | Estado |
|--------|--------|
| Módulo de ventas (POS) | 🔄 En desarrollo |
| Catálogo de productos | 🔄 En desarrollo |
| Control de inventario | 📋 Planificado |
| Módulo de reportes | 📋 Planificado |
| Panel de administración | 📋 Planificado |

## Roadmap

### Versión actual (v0.1 — bases)
- Estructura cliente/servidor separada
- Configuración de Prisma con MySQL
- Componentes base de React

### Próxima versión (v0.2)
- CRUD de productos funcional
- Registro de ventas con descuento automático de inventario
- Pantalla de resumen diario

### Versión futura (v1.0 — Servicio Social)
Como parte del **Servicio Social en CEILI**, HelaDuck será adaptado como sistema multi-tenant para 15 microempresarios rurales de Toyahua de Abajo, Zacatecas. Cada microempresario tendrá su propio catálogo y registro de ventas en una sola plataforma.

**Fecha de ejecución comunitaria:** Julio–Agosto 2026

## Cómo correr el proyecto

```bash
git clone https://github.com/OsvaldoRodri/heladuck.git
cd heladuck

# Backend
cd server
npm install
npx prisma generate
npm run dev

# Frontend (en otra terminal)
cd client
npm install
npm run dev
```

**Requisitos:** Node.js 18+, MySQL

## Por qué este proyecto importa

Es mi primer proyecto con cliente real. No es un tutorial ni un CRUD de práctica — hay una persona que va a usarlo para llevar su negocio. Eso cambia cómo piensas el diseño, los errores, y la experiencia de usuario.

## Tecnologías

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql)

---

*Proyecto en desarrollo activo — [Osvaldo Rodríguez](https://github.com/OsvaldoRodri)*
