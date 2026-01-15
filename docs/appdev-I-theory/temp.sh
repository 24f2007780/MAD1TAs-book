#!/usr/bin/env bash

for i in {0..12}; do
    mkdir -p "week$i"
    file="week$i/week$i-index.md"
    [[ -e "$file" ]] || touch "$file"
done
