#!/bin/sh
if [ ! -f /app/data.db ]; then
  echo "No database found. Running bootstrap..."
  npx emdash init
  npx emdash seed /app/seed/seed.json
  echo "Bootstrap complete."
else
  echo "Database exists, skipping bootstrap."
fi
exec node dist/server/entry.mjs
