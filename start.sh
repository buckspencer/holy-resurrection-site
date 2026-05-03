#!/bin/sh
if [ ! -f /app/data.db ]; then
  echo "No database found. Running bootstrap..."
  node node_modules/emdash/dist/cli/index.mjs init
  node node_modules/emdash/dist/cli/index.mjs seed ./seed/seed.json
  echo "Bootstrap complete."
else
  echo "Database exists, skipping bootstrap."
fi
exec node dist/server/entry.mjs
