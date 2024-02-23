---
date: "2017-03-05T00:00:00.000Z"
updatedAt: "2021-05-24T21:08:07.818Z"
title: beulogue and gitlab ci
description: How do I deploy my beulogue blog with Gitlab CI ?
tags:
  - beulogue
---

So [beulogue](https://gitlab.com/SiegfriedEhret/beulogue) is hosted on Gitlab. My blog (private repo) is also there.

Since beulogue is a static site generator, I have to upload my files myself. Kinda boring. Let's try [Gitlab pipelines !](https://docs.gitlab.com/ee/ci/pipelines.html)

First, we need to configure some [secret variables](https://docs.gitlab.com/ce/ci/variables/README.html#secret-variables):

- `REMOTE_DOMAIN` with the domain to push the files
- `REMOTE_PATH` with the target folder
- `REMOTE_USER` with the name of the remote user
- `SSH_HOST_KEY` with the result of `ssh-keyscan your-domain.something` (the line starting with `your-domain.something ssh-rsa`)
- `SSH_PRIVATE_KEY` with the content of the _private key_ [created for the CI](https://docs.gitlab.com/ce/ssh/README.html#generating-a-new-ssh-key-pair)

Then, I need to add my public key to the server authorized keys (`~/.ssh/authorized_keys` relative to the `REMOTE_USER` home directory).

Here is my `.gitlab-ci.yml` file:

```yaml
image: node:6

build:
  before_script:
    - apt-get update -y
    - apt-get -y install rsync
    - echo "${SSH_PRIVATE_KEY}" > id_rsa
    - chmod 700 id_rsa
    - mkdir "${HOME}/.ssh"
    - echo "${SSH_HOST_KEY}" > "${HOME}/.ssh/known_hosts"
    - npm install -g beulogue
  script:
    - ./build.sh
    - rsync -r -e 'ssh -i id_rsa' ./output/ ${REMOTE_USER}@${REMOTE_DOMAIN}:${REMOTE_PATH}
```

Then, each time I push a new article to Gitlab, the pipeline will build the blog and upload it to my server !

Thanks a lot to [this article](https://tonyblyler.com/post/CI-Rsync-Deployment/#ssh-host-key) for everything.
