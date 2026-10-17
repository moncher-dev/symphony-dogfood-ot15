#!/usr/bin/env bash
# gh-symphony `hooks.after_create` — populates a fresh issue workspace on the
# assigned branch. This repository has no dependencies or build step.
set -euo pipefail

: "${SYMPHONY_REPOSITORY_CLONE_URL:?SYMPHONY_REPOSITORY_CLONE_URL is required}"
: "${SYMPHONY_REPOSITORY_PATH:?SYMPHONY_REPOSITORY_PATH is required}"
: "${SYMPHONY_ASSIGNED_BRANCH:?SYMPHONY_ASSIGNED_BRANCH is required}"

git clone "$SYMPHONY_REPOSITORY_CLONE_URL" "$SYMPHONY_REPOSITORY_PATH"
git -C "$SYMPHONY_REPOSITORY_PATH" checkout -B "$SYMPHONY_ASSIGNED_BRANCH" \
  "origin/${SYMPHONY_BASE_BRANCH:-HEAD}"
