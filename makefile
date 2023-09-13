all: start


start: 
	$(MAKE) install-backend && $(MAKE) install-frontend
  
	$(MAKE) -j2 start-backend start-frontend

start-backend:
	cd src/backend && npm run dev

start-frontend:
	cd src/frontend && npm run dev

install-backend:
	cd src/backend && npm install

install-frontend:
	cd src/frontend && npm install
