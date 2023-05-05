# Link repo

    - https://github.com/MicrosoftArchive/redis/releases

<!-- se inicia el server y despues el cliente -->

    ❯ redis-server 
    ❯ redis-cli

<!-- Cargo data -->

    127.0.0.1:6379> set mykey "Hello"

<!-- Obtengo el value -->

    127.0.0.1:6379> get mykey 
    "Hello" 
    127.0.0.1:6379> TTL mykey 
    (integer) -1

<!-- Cargo data con un TTL-->

    127.0.0.1:6379> set mykey-exp "Hello Exp" EX 30 
    OK

    127.0.0.1:6379> TTL mykey 
    (integer) -1 

    127.0.0.1:6379> TTL mykey-exp 
    (integer) 20 

    127.0.0.1:6379> TTL mykey-exp 
    (integer) 17 

    127.0.0.1:6379> TTL mykey-exp
    (integer) 12 

    127.0.0.1:6379> TTL mykey-exp 
    (integer) 2 

    127.0.0.1:6379> TTL mykey-exp 
    (integer) -2

<!-- Me lista todas las keys que tengo -->

    127.0.0.1:6379> keys *

<!-- Borro todo los registros -->

    127.0.0.1:6379> flushdb 
    OK 

    127.0.0.1:6379> keys * 
    (empty array)

<!-- Conexion Cloud -->

❯ redis-cli -h redis-14253.c10.us-east-1-4.ec2.cloud.redislabs.com -p 14253 -a
EIiT8UJZ67IieOjzClAndfXfkUfhjKBu
