#!/usr/bin/env make
# DESCRIPTION
#	Project utility to install client/server, deploy, etc.
#
# USAGE
#	make intsall
#
# AUTHOR
#	Édouard Lopez <dev+librarybox@edouard-lopez.com>

ifneq (,)
This makefile requires GNU Make.
endif

# force use of Bash
SHELL := /bin/bash

install-devtools:
	apt-get install sqlite3 sqlitebrowser nodejs
	npm install -g yo bower gulp generator-gulp-angular

