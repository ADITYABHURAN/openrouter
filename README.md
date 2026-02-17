# OneAPI — Unified AI API Gateway

OneAPI is a unified API gateway that lets you access 200+ AI models (GPT-4, Claude, Gemini, Llama, and more) through a single endpoint. One API key, one integration, all models.

## Features

- **Unified API** — One endpoint for all AI models. Switch providers without changing code.
- **200+ Models** — Access OpenAI, Anthropic, Google, Meta models and more.
- **Usage Analytics** — Track spending, monitor usage, and optimize costs.
- **Credit System** — Built-in billing with credits and per-key usage tracking.
- **Developer First** — OpenAI-compatible API. Drop-in replacement — just change the base URL.
- **Smart Routing** — Automatic failover and routing across providers.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Bun** | Runtime & package manager |
| **Elysia.js** | Backend API framework |
| **React** | Frontend UI |
| **Prisma** | Database ORM |
| **PostgreSQL** | Database |
| **TanStack Query** | Data fetching |
| **Tailwind CSS** | Styling (Comic book theme) |
| **Turborepo** | Monorepo management |

## Project Structure

```
oneapi/
├── apps/
│   ├── api-backend/            # AI model routing API (port 4000)
│   ├── dashboard-frontend/     # React dashboard UI (port 3001)
│   └── primary-backend/        # Auth, API keys, payments (port 3000)
└── packages/
    ├── db/                     # Prisma schema & database
    ├── ui/                     # Shared UI components
    ├── eslint-config/          # ESLint configuration
    └── typescript-config/      # Shared TypeScript configs
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (v1.3+)
- [Docker](https://www.docker.com/) (for PostgreSQL)

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd oneapi
bun install
```

### 2. Start PostgreSQL with Docker

```bash
docker run --name oneapi-db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=openrouter -p 5432:5432 -d postgres:16
```

### 3. Configure Environment

Create `.env` files in the root and `packages/db/`:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/openrouter"
JWT_SECRET="your-secret-key-here"
```

### 4. Setup Database

```bash
cd packages/db
bunx prisma generate
bunx prisma db push
```

### 5. Run Development Servers

```bash
# From root directory
bun run dev
```

This starts all three apps:

| App | URL | Description |
|-----|-----|-------------|
| Dashboard | http://localhost:3001 | Frontend UI |
| Primary API | http://localhost:3000 | Auth, keys, payments |
| AI API | http://localhost:4000 | Model routing endpoint |

## API Usage

```typescript
const response = await fetch("https://oneapi.dev/api/v1/chat", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "anthropic/claude-sonnet-4-5",
    messages: [{ role: "user", content: "Hello!" }]
  })
});
```

## Database Schema

| Table | Purpose |
|-------|---------|
| `User` | Accounts with email, password, credits balance |
| `ApiKey` | User API keys with usage tracking |
| `Model` | Available AI models |
| `Provider` | AI providers (OpenAI, Anthropic, Google) |
| `ModelProviderMapping` | Links models to providers with pricing |
| `Conversation` | Request logs with token counts |
| `OnrampTransaction` | Credit purchase history |

## License

MIT
