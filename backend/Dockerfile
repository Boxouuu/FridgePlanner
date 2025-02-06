# Utilise une image Node.js stable (LTS)
FROM node:22-alpine

# Crée et définit le répertoire de travail dans le container
WORKDIR /usr/src/app

# Copie le package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le reste du code
COPY . .

# Expose le port sur lequel l’application écoute
EXPOSE 5000

# Démarre l’application
CMD ["npm", "start"]
