FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --omit=dev
COPY . .
EXPOSE 3002
RUN chown -R node /app
USER node
CMD ["npm", "start"]
