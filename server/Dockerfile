# Select a base image (image de base pour node.js)
FROM  node:latest


# Create a directory  and go to directory 
WORKDIR /app

# Copy the package.json file to my current directory for install necessary dependence
# La commande COPY package*.json . copie tous les fichiers dans le répertoire courant du projet 
# qui commencent par "package" et se terminent par ".json" (comme package.json et package-lock.json)
# vers le répertoire de travail défini par WORKDIR (ici /app) dans le conteneur Docker.
# Cela permet de s'assurer que les dépendances listées dans ces fichiers peuvent être installées 
# lors de l'étape suivante sans copier tous les fichiers du projet dès maintenant.  
COPY package*.json .

# Install the dependence
RUN npm i 

# Copy other file to my current directory 
# La commande COPY . . copie des fichiers depuis l'extérieur vers l'intérieur du conteneur Docker.
# La première "." (à gauche) représente le répertoire courant sur votre machine hôte (là où se trouve le Dockerfile),
# c'est-à-dire le contexte de build. Cela signifie que tous les fichiers et dossiers qui se trouvent à cet emplacement
# seront pris en compte lors de la copie.
# La deuxième "." (à droite) représente le répertoire de travail courant à l'intérieur du conteneur Docker défini par WORKDIR,
# donc ici /app. Ainsi, cette commande copie tout le contenu du dossier où est placé le Dockerfile vers le dossier /app du conteneur.

COPY . .




# Open the port for express server 
# Cointainer port
EXPOSE 5000 

# Run express rum in foreground
CMD ["npm", "start"]