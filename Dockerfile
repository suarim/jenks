FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY server.js ./


FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/server.js ./server.js

ENV PORT=11000

EXPOSE 11000

CMD ["node", "server.js"]
