FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.20.1

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
