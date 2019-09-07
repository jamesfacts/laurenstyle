#!/usr/bin/env bash

# don't continue to execute if we encounter an error
# https://stackoverflow.com/questions/19622198/what-does-set-e-mean-in-a-bash-script
set -e

# prevent ssh from raising interactive prompt for new host keys
echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config

WPE_ENVIRONMENT=production

if [ "master" == "${CIRCLE_BRANCH}" ]; then
    WPE_INSTALL=${WPE_LIVE}
elif [ "staging" == "${CIRCLE_BRANCH}" ]; then
    WPE_INSTALL=${WPE_STAGING}
else
    WPE_INSTALL=${WPE_DEV}
fi

rm .gitignore
rm -rf .git
mv .gitignore_deploy ~/.gitignore

cd ~
git config --global user.email "circleci@${WPE_INSTALL}.com"
git config --global user.name "${CIRCLE_USERNAME} ${CIRCLE_PROJECT_REPONAME}"
git init
git remote add origin git@git.wpengine.com:${WPE_ENVIRONMENT}/${WPE_INSTALL}.git

git add .
git status
git commit -m "Deployment Commit"
git push origin master --force
