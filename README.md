# HelaDuck 🍦🦆

A modern ice cream shop web application built with React, Prisma and Express.js. HelaDuck offers a delightful interface for browsing and ordering various ice cream flavors.

## 🚀 Features

- **Interactive Frontend**: Built with React 19 and TypeScript for a smooth user experience
- **Modern Development**: Powered by Vite for fast development and building
- **Sell Point**: Implementation of a module for sales and register management
- **Database Integration**: Prisma ORM for robust database operations

## 🛠️ Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for development and building
- **ESLint** for code quality
- Modern CSS with responsive design

### Backend
- **Express.js** server
- **Prisma ORM** for database management
- **CORS** enabled for cross-origin requests
- **dotenv** for environment configuration

## 📁 Project Structure

```
heladuck/
├── client/          # React frontend application
└── server/          # Express.js backend with Prisma
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Database (PostgreSQL, MySQL, SQLite, etc.)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd heladuck
```

2. Install client dependencies:
```bash
cd client
npm install
```

3. Install server dependencies:
```bash
cd ../server
npm install
```

4. Set up the database:
```bash
cd server
# Configure your database URL in .env file
# DATABASE_URL="your-database-connection-string"

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev
```

### Development

1. Start the client development server:
```bash
cd client
npm run dev
```

2. Start the backend server:
```bash
cd server
npm start
```

The client will be available at `http://localhost:5173` and the server at `http://localhost:3000` (or your configured port).

## 🗄️ Database Management

### Prisma Commands

```bash
# Generate Prisma client after schema changes
npx prisma generate

# Create and apply new migration
npx prisma migrate dev --name migration_name

# View your data in Prisma Studio
npx prisma studio

# Reset database (development only)
npx prisma migrate reset
```

## 🏗️ Building for Production

To build the client for production:

```bash
cd client
npm run build
```

For production deployment, make sure to:
1. Set up your production database
2. Run `npx prisma generate` on the server
3. Apply migrations with `npx prisma migrate deploy`

## 🧪 Code Quality

The project includes ESLint configuration for maintaining code quality. Run linting with:

```bash
cd client
npm run lint
```

## 📝 License

This project is licensed under the ISC License.

---

*Enjoy your virtual ice cream experience with HelaDuck! 🍦*