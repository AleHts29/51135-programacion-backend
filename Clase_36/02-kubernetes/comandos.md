# minikube

    ❯ minikube start

    - me dice el contexto en el que estoy   
        ❯ kubectl config current-context 

    - me muestra los pods activos 
        ❯ kubectl get pods

    - Me muestra los deploy activos
        ❯ kubectl get deployments

    - Me muestra los servicios activos en el ambiente de kubernetes
        ❯ kubectl get services

    - Elimino un determinado deploy(proceso padre/orquestador) y los pods
        ❯ kubectl delete deployments clase36-users-creator-deploy

    - Vemos el listado de servicios
        ❯ minikube service list
            |-------------|-------------------------------|--------------|-----|
            |  NAMESPACE  |             NAME              | TARGET PORT  | URL |
            |-------------|-------------------------------|--------------|-----|
            | default     | clase36-users-creator-service |         8080 |     |
            | default     | kubernetes                    | No node port |     |
            | kube-system | kube-dns                      | No node port |     |
            |-------------|-------------------------------|--------------|-----|

    - Ejecutamos el service en minikube
        ❯ minikube service clase36-users-creator-service

            |-----------|-------------------------------|-------------|------------------------|
            | NAMESPACE | NAME | TARGET PORT | URL |
            |-----------|-------------------------------|-------------|------------------------|
            | default | clase36-users-creator-service | 8080 | http://192.168.49.2:32595 |
            |-----------|-------------------------------|-------------|------------------------|
            🏃 Starting tunnel for service clase36-users-creator-service.
            |-----------|-------------------------------|-------------|------------------------|
            | NAMESPACE | NAME | TARGET PORT | URL |
            |-----------|-------------------------------|-------------|------------------------|
            | default | clase36-users-creator-service | | http://127.0.0.1:59931 |
            |-----------|-------------------------------|-------------|------------------------|
            🎉 Opening service default/clase36-users-creator-service in default browser...
            ❗ Because you are using a Docker driver on darwin, the terminal needs to be
            open to run it.

    - Para ver los logs
        ❯ kubectl logs -f clase36-users-creator-deploy-65dcbb7746-vkmwk
