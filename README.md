# heladuck

Aplicación web de punto de venta e inventario para una paletería familiar en Aguascalientes, México.

Empezó como proyecto académico para la materia Soluciones de Programación Móvil (ISC, UVM) y continuó como solución real para el negocio. El objetivo es reemplazar el control manual en libreta y calculadora.

## Stack

Frontend: React 19, TypeScript, Vite  
Backend: Express.js, Prisma ORM, MySQL

## Estado

Estructura cliente/servidor establecida, esquema de base de datos definido con Prisma. Los módulos de ventas e inventario están en desarrollo.

```
heladuck/
├── client/    React + TypeScript
└── server/    Express + Prisma
```

## Roadmap

v0.2: CRUD de productos, registro de ventas con descuento automático de inventario, resumen diario.

v1.0 (julio-agosto 2026): Adaptación para 15 microempresarios rurales de Toyahua de Abajo, Zacatecas, como parte del Servicio Social en la Fundación CEILI. Cada microempresario tendrá su propio catálogo en una plataforma compartida.

La migración del backend a Spring Boot está en desarrollo en [spring-boot-productos-api](https://github.com/OsvaldoRodri/spring-boot-productos-api).

## Cómo correr

```bash
cd server && npm install && npx prisma generate && npm run dev
cd client && npm install && npm run dev
```

Requisitos: Node.js 18+, MySQL.
