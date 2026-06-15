# sistema-pto-venta-ceili

Sistema de punto de venta e inventario web para microempresarios rurales de Toyahua de Abajo, Zacatecas, México.

Inició como proyecto académico para la materia Soluciones de Programación Móvil (ISC, UVM) con el nombre HelaDuck, pensado para la paletería familiar. Evolucionó hacia un sistema multi-tenant como proyecto de Servicio Social en la Fundación CEILI, para atender a 15 microempresarios simultáneamente.

El objetivo es reemplazar el control manual en libreta y calculadora: registrar ventas, descontar inventario automáticamente y mostrar un resumen del día por negocio.

## Stack

Frontend: React 19, TypeScript, Vite  
Backend: Express.js, Prisma ORM, MySQL

## Estado

Estructura cliente/servidor establecida, esquema de base de datos definido con Prisma. Los módulos de ventas e inventario están en desarrollo.

```
sistema-pto-venta-ceili/
├── client/    React + TypeScript
└── server/    Express + Prisma
```

## Roadmap

v0.2: CRUD de productos, registro de ventas con descuento automático de inventario, resumen diario por negocio.

v1.0 (julio-agosto 2026): Despliegue comunitario en Toyahua de Abajo como parte del Servicio Social en la Fundación CEILI. Cada microempresario tendrá su propio catálogo y registro de ventas en una plataforma compartida.

La migración del backend a Spring Boot está en desarrollo en [spring-boot-productos-api](https://github.com/OsvaldoRodri/spring-boot-productos-api).

## Cómo correr

```bash
cd server && npm install && npx prisma generate && npm run dev
cd client && npm install && npm run dev
```

Requisitos: Node.js 18+, MySQL.
