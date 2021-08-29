# Use an existing Docker image as a base
FROM alpine

# Download and install a dependency
RUN apk add --update redis
RUN apk add --update gcc

# Tell the image what to do when it starts as a container
CMD ["redis-server"]


#NOTES: Order of instructions in Dockerfile can drastically change build times, partially due to cacheing
