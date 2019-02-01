#!/usr/bin/env bash
cd /app

export BABEL_DISABLE_CACHE=1

export NODE_ENV=production
export NODE_PORT=3939

node ./bin/index.js

