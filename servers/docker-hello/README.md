##### Criação da imagem
```
cd servers/docker-hello
docker build --tag image-hello .
```

##### Rodando o container
```
docker run --detach --publish 3002:3002 --name server-hello image-hello
```
