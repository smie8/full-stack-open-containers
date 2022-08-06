# Run in development
```
docker compose -f docker-compose.dev.yml up
```
With your browser go to: http://localhost:8080/.
If you want to access api directly, go to http://localhost:8080/api

# Other
If you want to go inside Nginx container and try to send requests to the application itself:
```
docker exec -it my-app-reverse-proxy bash
curl http://server:3000
curl http://app:3000
```

