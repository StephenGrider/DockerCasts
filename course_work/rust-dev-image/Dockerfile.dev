# Use an existing Docker image as a base
FROM rust:alpine 
#maybe get rust:latest instead for git and stuff? 

WORKDIR /usr/src/jammin
COPY . .

# Download and install a dependency
RUN cargo install --path .

# Tell the image what to do when it starts as a container

CMD ["jammin"]
