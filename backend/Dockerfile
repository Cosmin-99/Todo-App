FROM node

RUN mkdir -p /backend

WORKDIR /backend

COPY package*.json /backend/

RUN npm install

COPY . /backend/

EXPOSE 8181

CMD ["npm" , "run" , "dev-watch"]