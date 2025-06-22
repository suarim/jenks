FROM node:20 as builder
WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npm install nodemon
COPY . .

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./

RUN npm install
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/.env ./.env
CMD ["node","server.js"]
