.PHONY: all dev install build run

all: build ## Build the project

dev: ## Run in dev mode with reloading
	npm run dev

install: ## Install dependencies
	npm i

build: ## Build the project
	npm run build

run: build ## Run the app
	npm start

help: ## Print this message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
