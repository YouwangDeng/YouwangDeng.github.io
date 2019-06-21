---
layout: post
title:  "Introduction to Docker"
date:   2019-06-21 19:30:00 +0800
categories: [Docker]
---
### Docker
>Docker uses `operating-system-level virtualization` to `develop` and `deliver` software in packages called `containers`

>The software that hosts the containers is called `Docker Engine`

### Docker Feature

>`Containers` are `isolated` from each other and `bundle` their own `software`, `libraries` and `configuration` files, they can `communicate` with each other through well-defined `channels`.

>All containers are run by a `single operating-system kernel` and are thus `more lightweight than virtual machines`. 

>Containers are created from `images` that specify their precise contents. Images are `portable`.

### Docker Technology
>Building on top of facilities provided by the `Linux kernel` (primarily `cgroups` and `namespaces`), a Docker container, unlike a virtual machine, does not require or include a separate operating system. Instead, it relies on the `kernel's functionality` and uses resource `isolation for CPU and memory`,and `separate namespaces` to `isolate` the application's view of the operating system. Docker accesses the Linux kernel's virtualization features either `directly` using the `libcontainer library`, or `indirectly` via `libvirt`, `LXC` (Linux Containers) or `systemd-nspawn`.

### Docker Terminology
- `Docker daemon`
    >The Docker daemon, called `dockerd`, is a `persistent process` that manages Docker containers and handles container objects. The Docker client program, called `docker`, provides a command-line interface that allows users to interact with Docker daemons
- `Docker container`
    >A Docker container is a `standardized, encapsulated environment` that runs applications. A container is managed using the `Docker API or CLI`
- `Docker image`
    >A Docker image is a `read-only template` used to build containers. Images are used to `store and ship applications`
- `Docker service`
    >A Docker service allows containers to be `scaled across multiple Docker daemons`. The result is known as a `swarm`, a set of cooperating daemons that communicate through the Docker API
- `Docker registry`
    >A Docker registry is a `repository` for Docker `images`. Docker clients connect to registries to `download` ("pull") images for use or `upload` ("push") images that they have built. Registries can be public or private. Two main public registries are `Docker Hub` and `Docker Cloud`
- `Docker Compose`
    >Docker Compose is a tool for `defining and running multi-container Docker applications`. It uses `YAML files` to `configure` the application's services and performs the creation and start-up process of all the containers with `a single command`
- `Docker Swarm`
    >Docker Swarm provides `native clustering` functionality for Docker containers, which `turns a group of Docker engines into a single virtual Docker engine`. In Docker 1.12 and higher, Swarm mode is integrated with Docker Engine