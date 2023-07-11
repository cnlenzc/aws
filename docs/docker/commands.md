###### Diversos
```
docker images
docker ps
docker ps --all
docker network ls
docker volume ls

docker tag docker-nodejs:latest docker-nodejs:v1.0.0
docker rmi docker-nodejs:v1.0.0
docker stop awesome_goldberg
docker restart awesome_goldberg
docker rm awesome_goldberg compassionate_cannon docker-tutorial

docker image prune -f
docker container prune -f
docker volume prune -f
docker network prune -f
```

###### Remover todos os containers em execução:
```
docker rm -f $(docker ps -aq)
```

###### Remover todas as imagens:
```
docker rmi -f $(docker images -aq)
```

###### Para remover todos os volumes no Docker:
```
docker volume prune -f
```

###### Para remover todas as redes (networks) no Docker:
```
docker network prune -f
```

