#!/usr/bin/env make
# DESCRIPTION
#	Project utility to install client/server, deploy, etc.
#
# USAGE
#	make install
#
# AUTHOR
#	Édouard Lopez <dev+librarybox@edouard-lopez.com>

ifneq (,)
This makefile requires GNU Make.
endif

# force use of Bash
SHELL := /bin/bash

extract-books-authors:
	sqlite3 -csv -header app/data/data.sqlite3 "SELECT b.id as bid, title, b.sort as sort_book, a.id as aid, a.sort as sort_author, path, name FROM books as b inner join books_authors_link as b_a ON b.id = b_a.book INNER JOIN authors as a ON a.id = b_a.author" | ./node_modules/csvtojson/bin/csvtojson

install:
	npm install && bower install

install-devtools:
	apt-get install sqlite3 sqlitebrowser nodejs
	npm install -g yo bower gulp generator-gulp-angular generator-angular

