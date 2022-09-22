# spensa

Dockerized Web Application Stack:
- Nginx Web Server
- React JS (frontend)
- Django (backend)
- MariaDB (DB)

1. Install docker and dependancies on host machine.
2. copy .env.sample to .env and replace 'blah' credentials with your own unique desired values.
3. If you want to be publicly accessible, allow port forwarding to open port 8080 on the host machines ip through the firewall. If you have a domain, point it to your public ip. Edit nginx.conf in the root directory to change the server_name on line 18 to the domain/subdomain you wish to use.
4. use terminal on host machine to navigate to the outer project directory 'spensa' with the docker-compose.yml file
5. run "docker-compose build" 
6. run "docker-compose up -d --build" to bring up the docker/docker-compose application stack. the "--build" will rebuild if changes have been made locally. (this will build the frontend container with the static js then clear build tools used.)
7. navigate to http://localhost:8080 in your browser to see current state of the web application. (http://localhost:3000 if you are using "npm start" in a dev environment to test locally)

wip

# spensa
