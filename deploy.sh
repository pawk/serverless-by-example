#!/bin/bash
set -x

sls deploy \
  --jwt-secret abcd
  