docker compose -f prod-docker-compose.yml up --build -d

sudo cp prod.nginx.conf /etc/nginx/conf.d/revosolve.com.conf

sudo certbot --nginx
