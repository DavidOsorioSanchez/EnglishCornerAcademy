# Usa una imagen base oficial de Node.js
FROM node:20-alpine

# Instala pnpm globalmente
RUN npm install -g pnpm

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instala las dependencias y guarda las versiones exactas
RUN pnpm install --frozen-lockfile

# Copia el resto del código de la aplicación
COPY . .

# Comando por defecto (ajusta según tu app)
CMD ["pnpm", "start"]