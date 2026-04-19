#!/usr/bin/env bash

set -euo pipefail

DEPLOY_DIR=".deploy"

rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR/api"

cp -R dist/. "$DEPLOY_DIR/"
cp deployment/.htaccess "$DEPLOY_DIR/.htaccess"
cp src/api/contact.php "$DEPLOY_DIR/api/contact.php"
find "$DEPLOY_DIR" -name '._*' -delete

echo "Prepared deploy package in $DEPLOY_DIR/"
