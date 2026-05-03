#!/bin/sh
# Only seed the database if it doesn't exist yet
if [ ! -f /app/data.db ]; then
  echo "No database found. Running bootstrap..."
  npx emdash init
  npx emdash seed
  echo "Bootstrap complete."
else
  echo "Database exists, skipping bootstrap."
fi
exec node dist/server/entry.mjs
