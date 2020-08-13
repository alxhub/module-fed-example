#!/bin/bash
PATH=$PATH:`pwd`/node_modules/.bin
echo $PATH

# Run ngcc, to ensure all libraries are updated to Ivy
ngcc

# Angular compilation for the library
echo "[*] Building library"
pushd ./lib
mkdir -p ./dist

# Angular compilation
rm -rf ./dist/ng
ngc -p ./tsconfig.json

# Webpack compilation
cp build.js dist/ng
pushd dist/ng
webpack --config ./build.js
popd

popd


# Compilation for app A
echo "[*] Building app A"
pushd ./app-a
mkdir -p ./dist

# Angular compilation
rm -rf ./dist/ng
ngc -p ./tsconfig.json

# Webpack compilation
cp index.html build.js dist/ng
pushd dist/ng
webpack --config ./build.js
popd

popd
