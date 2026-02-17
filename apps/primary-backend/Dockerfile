FROM oven/bun:1.3 AS base
WORKDIR /app

# Copy root workspace files
COPY package.json bun.lock ./
COPY turbo.json ./

# Copy all packages and apps needed
COPY packages/db ./packages/db
COPY packages/typescript-config ./packages/typescript-config
COPY apps/primary-backend ./apps/primary-backend

# Install dependencies
RUN bun install --frozen-lockfile

# Generate Prisma client
RUN cd packages/db && bunx prisma generate

# Expose port
EXPOSE 3000

# Start the primary backend
CMD ["bun", "run", "--cwd", "apps/primary-backend", "src/index.ts"]
