FROM node:20.20.0
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 3000
CMD ["npm","run","start"]