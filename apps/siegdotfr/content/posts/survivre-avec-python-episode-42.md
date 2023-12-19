---
title: Survivre avec Python épisode 42
slug: python-42
description: Ou comment Docker m’a sauvé
date: 2023-10-25T22:00:00.000Z
updatedAt: 2023-10-25T22:00:00.000Z
image: /assets/python-whale.png
imageDescription: >-
  Générée avec SDXL 1.0, avec le texte « 2 animals facing each other. An angry
  green python ready to bite. A nice blue whale with containers on her back with
  a gentle smile. »
tags:
  - python
---

Je dis épisode 42 mais j’ai évidemment sauté les autres... Tant de choses à dire sur le monde Python, même le monde JavaScript me semble plus sain, c’est dire !

Déjà, pourquoi utiliser Python ? Au boulot nous utilisons [Airflow](https://airflow.apache.org/) (la version Google Cloud appelée [Cloud Composer](https://cloud.google.com/composer)) et ce langage est donc inévitable.

Composer utilise à ce jour Python 3.8.12 (voir [ici](https://cloud.google.com/composer/docs/concepts/versioning/composer-versions) pour les détails), qui n’est évidemment pas celle installée sur ma machine.

Bref, dès que je veux faire quelque chose ça explose.

Et donc, Docker ! Avec ça, je peux avoir une version spécifique sans avoir à l’installer réellement et monter mon dossier pour utiliser la version spécifique et les outils sur mon code:

```dockerfile
FROM python: 3.8 as installer

RUN pip install poetry == 1.6.1

ENV POETRY_NO_INTERACTION = 1 \
POETRY_VIRTUALENVS_IN_PROJECT = 1 \
POETRY_VIRTUALENVS_CREATE = 1 \
POETRY_CACHE_DIR = /tmp/poetry_cache

WORKDIR / app

COPY pyproject.toml poetry.lock./

RUN poetry install--no - root

FROM installer as linter
ENV VIRTUAL_ENV = /app/.venv \
PATH = "/app/.venv/bin:$PATH"
COPY--from = installer ${ VIRTUAL_ENV } ${ VIRTUAL_ENV }
CMD["make", "lint"]

FROM installer as formatter
ENV VIRTUAL_ENV = /app/.venv \
PATH = "/app/.venv/bin:$PATH"
COPY--from = installer ${ VIRTUAL_ENV } ${ VIRTUAL_ENV }
CMD["make", "format"]

```

Accompagné d’un petit Makefile:

```shell
build-docker-linter: ## Build linter image
	docker build --tag=verify-linter --target=linter .

build-docker-formatter: ## Build formatter image
	docker build --tag=verify-formatter --target=formatter .

build-docker: build-docker-linter build-docker-formatter ## Build docker images

lint: ## Check python files with flake8
	poetry run python -m flake8 dags/ tests/

lint-docker: ## Lint with docker
	docker run --rm -v $(current_dir):/app verify-linter

format: ## Format code
	poetry run python -m black dags/ tests/

format-docker: ## Format with docker
	docker run --rm -v $(current_dir):/app verify-formatter
```

Voilà !

Je n’ai plus qu’à lancer make lint-docker ou make format-docker et je suis sauvé !

Notons qu’avec PyCharm il me semble qu’on peut utiliser Python avec Docker pour faire des trucs mais je n’ai pas encore essayé.
