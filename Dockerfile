# Dockerfile for React Vite app
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile
COPY . .

ARG VITE_GTAG_ID
ARG VITE_ERP_BASE_URL

ENV VITE_GTAG_ID=$VITE_GTAG_ID
ENV VITE_ERP_BASE_URL=$VITE_ERP_BASE_URL

RUN npm run build

# Production image
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .
COPY nginx_internal.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
