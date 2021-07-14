FROM node:10.16.3
RUN mkdir -p /home/web/
COPY . /home/web/
WORKDIR /home/web/
RUN apt-get update -y && apt-get install telnet net-tools tcpdump -y --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN npm install
ENTRYPOINT npm start
EXPOSE 3000