# Run app
In development:
```
docker compose -f docker-compose.dev.yml up
```

Or in production:
```
docker compose up
```

Then go to: http://localhost:8080/ with your browser.
You can access the api directly from http://localhost:8080/api.

# Other
If you want to go inside Nginx container and try to send requests to the application itself:
```
docker exec -it my-app-reverse-proxy bash
curl http://server:3000
curl http://app:3000
```

