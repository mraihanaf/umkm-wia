# LokalKita

**LokalKita** is a digital directory for local MSMEs (Micro, Small, and Medium Enterprises) in your community. This website helps users discover and support local businesses such as coffee shops, meatball stalls, laundry services, photocopy shops, and various other small businesses with ease.

## Prerequisites

Before running this project, make sure you have installed:

- **Node.js**
- **pnpm** - Install with `npm install -g pnpm`
- **Docker** (optional, for running with Docker)

## Running with pnpm

### 1. Clone Repository

```bash
git clone https://github.com/mraihanaf/umkm-wia
cd umkm-wia
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Run Development Server

```bash
pnpm dev
```

The application will run at [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
pnpm build
pnpm start
```

## Development Commands

### Linting

Check for code quality issues and ESLint errors:

```bash
pnpm lint
```

This will run ESLint and report any errors or warnings in your code. Fix any issues before committing your changes.

### Formatting

Format your code according to the project's Prettier configuration:

```bash
pnpm format
```

This command will automatically format all TypeScript, TypeScript React, and Markdown files in the project according to the configured style rules.

### Building

Build the application for production:

```bash
pnpm build
```

This command will:

- Compile TypeScript to JavaScript
- Optimize all assets (images, fonts, etc.)
- Generate static HTML pages where possible
- Create an optimized production build in the `.next` directory

After building, start the production server:

```bash
pnpm start
```

The production server will run at [http://localhost:3000](http://localhost:3000)

## Running with Docker

### 1. Build Docker Image

```bash
docker build -t lokal-kita .
```

This will create a Docker image named `lokal-kita` using the multi-stage build process defined in the Dockerfile, which optimizes the image size.

### 2. Run Container

```bash
docker run -p 3000:3000 lokal-kita
```

The application will run at [http://localhost:3000](http://localhost:3000)

### Alternative: Docker Compose

You can also create a `docker-compose.yml` file:

```yaml
version: "3.8"
services:
  lokal-kita:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

Then run:

```bash
docker-compose up
```

To run in detached mode (background):

```bash
docker-compose up -d
```

To stop the containers:

```bash
docker-compose down
```

## Contributing

Contributions are welcome! Please create an issue or pull request if you would like to contribute to this project.

## License

This project is created for educational purposes.
