all: start

start: 
	$(MAKE) install
	$(MAKE) run

run:
	$(MAKE) -j2 start-backend start-frontend

install: 
	$(MAKE) install-backend && $(MAKE) install-frontend

start-backend:
	cd src/backend && npm run dev

start-frontend:
	cd src/frontend && npm run dev

install-backend:
	cd src/backend && npm install

install-frontend:
	cd src/frontend && npm install
