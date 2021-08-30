Docker 
- docker exec -it cefd695b69f2 redis-cli (run a command in running container, -it is 2 flags to make interactive and formatted)
- docker ps (list running containers)
- docker run -it busybox sh (run a container, overwrite default command)
- docker start cefd695b69f2
- docker stop cefd695b69f2 (sigterm)
- docker kill cefd695b69f2 (sigkill)
- docker system prune -a --volumes (cleans up all cached images, and volumes, don't need to use -a or --volumes)
- docker build . (builds docker image based on Dockerfile in current dir)
- docker build -t dockerusername/service:label . (tags an image so it is easier to reference)
- docker run stephenjdawson/redis (run tagged container)
- docker run -p 8080:8080 stephenjdawson/node (map container ports localport:containerport)
- docker build -f Dockerfile.dev . (build a docker image from a file not called "Dockerfile")
- docker build -t stephenjdawson/react:latest -f Dockerfile.dev . (example of tagging and referring to different Dockerfile)
- docker run -p 3000:3000 -v /home/node/app/node_modules -v $(pwd):/home/node/app stephenjdawson/react (example of volume mounting - first part specifies that volume remains unchanged in container, second -v maps to volume outside of container on local fs)


Docker-Compose
- docker-compose up (launches containers based on docker-compose.yml)
- docker-compose up --build (builds image befor running containers)
- docker-compose down (shuts down containers based on docker-compose.yml)
- docker-compose ps (list running services that are related to docker-compose.yml)
- 