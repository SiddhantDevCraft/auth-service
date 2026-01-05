# Authentication Service

Lightweight authentication microservice using Express.js and JWT.

## Prerequisites
- Node.js 16+ and npm
- MongoDB
- Environment variables as required by the service (e.g., JWT_SECRET)

## Current content

Clone the repo:
```bash
git clone https://github.com/SiddhantDevCraft/auth-service.git
```

Change directory:
```bash
cd auth-service
```

Copy sample env to .env:

Windows (PowerShell / CMD)
```bash
copy .env.sample .env
# or in PowerShell:
# cp .env.sample .env
```

Linux / macOS
```bash
cp .env.sample .env
```

Add your environment variables to .env (e.g. JWT_SECRET, MONGO_URI, PORT)

Install production dependencies:
```bash
npm install --only=production
# or, if you prefer a clean install from package-lock:
# npm ci --only=production
```

Run the service:
```bash
npm start
```
