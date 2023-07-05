# Instalacion - Revisar documentacion. url: https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/

    ❯ curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl"

# Verificar la version

    ❯ kubectl version --client

## Docker

    - Crear Imagen
        ❯ docker build -t clase36-users-creator .

    - Crear una instancia de imagen
        ❯ docker run -p 9090:9090 clase36-users-creator


    #MONGO
        (opciones)
        https://www.youtube.com/watch?v=lzRY5Z59Bso&ab_channel=FaztCode

        1_ Medium articulo para usar docker-compose.yml
            https://medium.com/zenofai/how-to-build-a-node-js-and-mongodb-application-with-docker-containers-15e535baabf5

        2_ 
            - Bajamos una imagen de mongo ( mongod --version )
                ❯ docker pull mongo:5.0.14
                ❯ docker run --name mongodb -p 27017:27017 mongo:5.0.14

            - Necesitamos saber la ip donde esta corriendo el container
                ❯ docker ps //me muestra los contenedores que estan activos
                
                sudo docker container inspect [CONTAINER_ID]
                    ❯ sudo docker container inspect 9de8ee01f85c

    #Subir IMG a DockerHub
        - Login
            ❯ docker login
            ❯ docker login -u [USER_NAME] //si tienen mas cuentas
        - cramos Tag
            docker tag [imagen] <username>/[imagen:version]
            ❯ docker tag clase36-users-creator alehts29/clase36-users-creator:1.0.0
            ❯ docker push alehts29/clase36-users-creator:1.0.0




    - Detener imagenes que esten activas
        ❯ docker stop [CONTAINER_ID]
