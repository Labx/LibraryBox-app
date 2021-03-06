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
DATADIR="$$(pwd)"/app/data
TMPDIR="$$(pwd)"/.tmp
EXTRACT_BOOK=${TMPDIR}/books
SCRIPTS=scripts-metadata

.PHONY:	export-books2json export-books2rawjson export-books2csv \
		export-tags2json export-tags2rawjson export-tags2csv \
		clean


install:
	printf "install\n"
	npm install && bower install

install-devtools:
	printf "install-devtools\n"
	apt-get install sqlite3 sqlitebrowser nodejs jq
	npm install -g yo bower gulp generator-gulp-angular generator-angular

export-tags2json: ${TMPDIR}/tags.json
${TMPDIR}/tags.json: .tmp ${TMPDIR}/tags.raw.json
	printf "export-tags2json\n"
	cat ${TMPDIR}/tags.raw.json \
		| jq "$$(cat ${SCRIPTS}/tags/squash-tags-data.jq)" \
	> ${TMPDIR}/tags.json
	cp {${TMPDIR},${DATADIR}}/tags.json

export-tags2rawjson: ${TMPDIR}/tags.raw.json
${TMPDIR}/tags.raw.json: .tmp ${TMPDIR}/tags.csv
	printf "export-tags2rawjson\n"
	cat ${TMPDIR}/tags.csv \
		| ./node_modules/csvtojson/bin/csvtojson \
	> ${TMPDIR}/tags.raw.json

export-tags2csv: ${TMPDIR}/tags.csv
${TMPDIR}/tags.csv: .tmp
	printf "export-tags2csv\n"
	sqlite3 -csv -header \
    	${DATADIR}/data.sqlite3 \
    	"$$(cat ${SCRIPTS}/tags/list-tags.sql)" \
	> ${TMPDIR}/tags.csv


export-books2json: ${TMPDIR}/books.json
${TMPDIR}/books.json: .tmp ${TMPDIR}/books.raw.json
	printf "export-books2json\n"
	cat ${TMPDIR}/books.raw.json \
		| jq "$$(cat ${SCRIPTS}/books/squash-books-data.jq)" \
	> ${TMPDIR}/books.json
	cp {${TMPDIR},${DATADIR}}/books.json

export-books2rawjson: ${TMPDIR}/books.raw.json
${TMPDIR}/books.raw.json: .tmp ${TMPDIR}/books.csv
	printf "export-books2rawjson\n"
	cat ${TMPDIR}/books.csv \
		| ./node_modules/csvtojson/bin/csvtojson \
	> ${TMPDIR}/books.raw.json

export-books2csv: ${TMPDIR}/books.csv
${TMPDIR}/books.csv: .tmp
	printf "export-books2csv\n"
	sqlite3 -csv -header \
    	${DATADIR}/data.sqlite3 \
    	"$$(cat ${SCRIPTS}/books/list-books.sql)" \
	> ${TMPDIR}/books.csv

.tmp:
	[[ ! -d ${TMPDIR} ]] && mkdir -p ${TMPDIR} || true

clean:
	printf "clean\n"
	rm -f -r ${TMPDIR} ${TMPDIR}/books.{csv,{raw.,}json}