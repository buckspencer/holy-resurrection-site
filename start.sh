#!/bin/sh
# Only seed the database if it doesn't exist yet
if [ ! -f /app/data.db ]; then
  echo "No database found. Running bootstrap..."
  pnpm run bootstrap
fi
exec node dist/server/entry.mjs
