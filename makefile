all: start

start: 
	$(MAKE) -j2 start-backend start-frontend

start-backend:
	cd src/backend && npm run dev

start-frontend:
	cd src/frontend && npm run dev