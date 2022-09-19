FROM node:13.10-alpine3.10

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

#Explicitly set exec flag for wait-for (Windows compatability)
RUN chmod u+x ./wait-for.sh

EXPOSE 8000

CMD [ "npm", "start" ]
