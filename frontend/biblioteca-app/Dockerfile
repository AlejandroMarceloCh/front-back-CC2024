
# Utilizar una imagen base de Node.js
FROM node:18

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente a la imagen
COPY . .

# Exponer el puerto que utiliza la aplicación (por defecto 3000 para React)
EXPOSE 3000

# Comando para iniciar la aplicación en modo desarrollo
CMD ["npm", "start"]

