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
DATADIR="$$(pwd)/app/data"
EXTRACT_BOOK=${DATADIR}/books
SCRIPTS=scripts-metadata

.PHONY:	export2json export2rawjson export2csv \
		clean


extract-books-authors:
	sqlite3 -csv -header app/data/data.sqlite3 "SELECT b.id as bid, title, b.sort as sort_book, a.id as aid, a.sort as sort_author, path, name FROM books as b inner join books_authors_link as b_a ON b.id = b_a.book INNER JOIN authors as a ON a.id = b_a.author" | ./node_modules/csvtojson/bin/csvtojson

install:
	printf "install\n"
	npm install && bower install

install-devtools:
	printf "install-devtools\n"
	apt-get install sqlite3 sqlitebrowser nodejs
	npm install -g yo bower gulp generator-gulp-angular generator-angular

export2json: ${EXTRACT_BOOK}.json
# @alias: export2json
${EXTRACT_BOOK}.json: ${EXTRACT_BOOK}.raw.json
	printf "export2json\n"
	cat "${EXTRACT_BOOK}.raw.json" \
	| jq "$$(cat ${SCRIPTS}/books/squash-books-data.jq)" \
	> "${EXTRACT_BOOK}.json"

export2rawjson: ${EXTRACT_BOOK}.raw.jso
# @alias: export2rawjson
${EXTRACT_BOOK}.raw.json: ${EXTRACT_BOOK}.csv
	printf "export2rawjson\n"
	cat "${EXTRACT_BOOK}.csv" \
	| ./node_modules/csvtojson/bin/csvtojson \
	> "${EXTRACT_BOOK}.raw.json"

export2csv: ${EXTRACT_BOOK}.csv
# @alias: export2csv
${EXTRACT_BOOK}.csv:
	printf "export2csv\n"
	sqlite3 -csv -header \
    	${DATADIR}/data.sqlite3 \
    	"$$(cat ${SCRIPTS}/books/list-books.sql)" \
	> "${EXTRACT_BOOK}.csv"

clean:
	printf "clean\n"
	rm -f ${EXTRACT_BOOK}.{csv,{,raw.}json}