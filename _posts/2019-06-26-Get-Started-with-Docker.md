---
layout: post
title:  "Get Started with Docker"
date:   2019-06-28 18:30:00 +0800
categories: [Docker]
---
### Define a container with `Dockerfile`
>Dockerfile `defines` what goes on in the `environment` inside your container. Access to resources like `networking interfaces` and `disk drives` is virtualized inside this environment, which is `isolated` from the rest of your system, so you need to `map ports` to the outside world, and be specific about what files you want to “`copy in`” to that environment. 

#### an Example of Dockerfile

> Dockerfile

```docker
# Use an official Python runtime as a parent image
FROM python:2.7-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
```

> requirements.txt

```txt
Flask
Redis
```

> app.py

```python
from flask import Flask
from redis import Redis, RedisError
import os
import socket

# Connect to Redis
redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)

app = Flask(__name__)

@app.route("/")
def hello():
    try:
        visits = redis.incr("counter")
    except RedisError:
        visits = "<i>cannot connect to Redis, counter disabled</i>"

    html = "<h3>Hello {name}!</h3>" \
           "<b>Hostname:</b> {hostname}<br/>" \
           "<b>Visits:</b> {visits}"
    return html.format(name=os.getenv("NAME", "world"), hostname=socket.gethostname(), visits=visits)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
```

### `Build` the `Docker Image`
> docker build --t=imageName:tagName .

### `Run` the Docker `Image` as a `Container`
> docker run -p 4000:80 imageName:tagName

### Share the image to `DockerHub`
> docker login

> docker tag imageName:tagName yourHubId/repositoryName:repositoryTag

> docker push yourHubId/repositoryName:repositoryTag

### `Run` Docker image `Anywhere`

> docker run -p 4000:80 yourHubId/repositoryName:repositoryTag


### `Docker Service`
> In a `distributed application`, different `pieces of the app` are called “`services`”.
Services are really just “`containers in production`”. A service only `runs one image`, but it codifies the way that image runs—what `ports` it should use, how many `replicas` of the container should run so the service has the capacity it needs, and so on. `Scaling` a service changes the `number` of container instances running that piece of software, assigning more `computing resources` to the service in the process

> In Docker, `docker-compose.yml` is used to manage services.

#### An Example for docker-compose.yml

```docker
version: "3"
services:
  web:
    # replace username/repo:tag with your name and image details
    image: username/repo:tag
    deploy:
      replicas: 5
      resources:
        limits:
          cpus: "0.1"
          memory: 50M
      restart_policy:
        condition: on-failure
    ports:
      - "4000:80"
    networks:
      - webnet
networks:
  webnet:
```
#### Run service in docker

> docker swarm init

> docker stack deploy -c docker-compose.yml serviceName

#### Check service state

> docker service ls

> docker service ps serviceName(from above cmd)

> docker container ls -q

#### Scale the app

> change docker-compose.yml file

> docker stack deploy -c docker-compose.yml originServiceName

#### Take down the app and the swarm

> docker stack rm getstartedlab

> docker swarm leave --force

### `Swarm Cluster`
> A `swarm` is a group of machines that are running `Docker` and joined into a cluster. 

> `Swarm managers` can use several `strategies` to run containers

> Swarm managers are the only machines in a swarm that can `execute your commands`, or authorize other machines to join the swarm as `workers`

### Set up a Swarm
> A swarm is made up of multiple `nodes`, which can be either `physical` or `virtual machines`.

#### create two vm on mac as nodes
>docker-machine create --driver virtualbox myvm1

>docker-machine create --driver virtualbox myvm2

#### get vm ip address
> docker-machine ls

#### init the swarm and add nodes
> docker-machine ssh myvm1 "docker swarm init --advertise-addr \<myvm1 ip>"

> docker-machine ssh myvm2 "docker swarm join --tokern \<token> \<myvm1_ip>:port"

#### Configure a docker-machine shell to the swarm manager
> docker-machine env myvm1

> echo $(docker-machine env myvm1)

#### Deploy the app on the swarm manager
> docker stack deploy -c docker-compose.yml ServiceName




