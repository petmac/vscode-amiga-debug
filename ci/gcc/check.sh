#!/bin/bash
set -euo pipefail
IFS=$'\n\t'
set -x

cd build-gcc
make --keep-going check
