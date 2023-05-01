FROM node:latest
WORKDIR /api
COPY tsconfig*.json ./
COPY package*.json ./
RUN npm install
COPY src/ src/
EXPOSE 3001
CMD [ "yarn", "start", "dev" ]
