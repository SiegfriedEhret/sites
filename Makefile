all: help

.PHONY: update-deps
update-deps: ## Update dependencies
	pnpm -r update

format-ehretdotme: ## Format apps/ehretdotme
	cd apps/ehretdotme ;\
	pnpm format

format-meloedotfr: ## Format apps/meloedotfr
	cd apps/meloedotfr ;\
	pnpm format

format-siegdotfr: ## Format apps/siegdotfr
	cd apps/siegdotfr ;\
	pnpm format

format-ui: ## Format packages/ui
	cd packages/ui ;\
	pnpm format

format-utils: ## Format packages/utils
	cd packages/utils ;\
	pnpm format

format: format-ehretdotme format-meloedotfr format-siegdotfr format-ui format-utils ## Format code

run: ## Run development server
	pnpm dev

run-tina-ehretdotme: ## Run tina on ehretdotme
	pnpm tinacms dev -c "<your dev command>"

help: ## Print this message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
