all: help

.PHONY: update-deps
update-deps: ## Update dependencies
	pnpm -r update

format-ehretdotme: ## Format apps/ehretdotme
	cd apps/ehretdotme ;\
	pnpm run format

format-siegdotfr: ## Format apps/siegdotfr
	cd apps/siegdotfr ;\
	pnpm run format

format-ui: ## Format packages/ui
	cd packages/ui ;\
	pnpm run format

format-utils: ## Format packages/utils
	cd packages/utils ;\
	pnpm run format

format: format-ehretdotme format-siegdotfr format-ui format-utils ## Format code

help: ## Print this message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
