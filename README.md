# Directions

## Rails
### Building
```bash
docker build -t app ./rails_demo/.
docker volume create app-storage
docker run --rm -it --name rails_app -d --network rails -p 3000:3000 app
```
### Testing
```bash

docker exec -it rails_app bin/rails console
redis =Redis.new(host: "redis_app", port:6400)
redis.ping
=> "PONG"

```
## Redis
### Building
```
docker build -t redis_image ./redis/.
docker run --network rails --name redis_app -p 6400:6400 -d redis_image
```
### Testing
```
docker exec -it redis_app redis-cli -p 6400
```