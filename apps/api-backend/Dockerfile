FROM oven/bun:1.3 AS base
WORKDIR /app

# Copy root workspace files
COPY package.json bun.lock ./
COPY turbo.json ./

# Copy all packages and apps needed
COPY packages/db ./packages/db
COPY packages/typescript-config ./packages/typescript-config
COPY apps/api-backend ./apps/api-backend

# Install dependencies
RUN bun install --frozen-lockfile

# Generate Prisma client
RUN cd packages/db && bunx prisma generate

# Expose port
EXPOSE 4000

# Start the API backend
CMD ["bun", "run", "--cwd", "apps/api-backend", "src/index.ts"]
