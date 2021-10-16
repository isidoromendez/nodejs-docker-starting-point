# Nodejs on Docker starting point

I build this proy using Windows 10 + WSL2 gided by Sanjeev Thiyagarajan. Original video: https://www.youtube.com/watch?v=gm_L69NHuHM

Up command in dev mode
  docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build -d

Up command in prod mode
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
  
Down command in dev mode
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v

Down command in prod mode
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v

