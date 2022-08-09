#!/bin/bash
set -euo pipefail
IFS=$'\n\t'
set -x

brew install autoconf bash bison gettext wget
brew install deja-gnu expect python3 tcl-tk
pip3 install pytest
