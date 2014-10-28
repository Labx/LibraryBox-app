Ui to manage [LibraryBox](http://librarybox.us/)

Nous avons pour objectif d'automatiser la gestion des LibraryBox et leurs contenus.

## Architecture

1. branchement sur l'outil de gestion [calibre](http://calibre-ebook.com/) utiliser par @safiler ;
2. export des données de la base `sqlite` en `JSON` ;
3. mise en forme coté client via un système de template (p. ex. [AngularJS](https://angularjs.org/) ou [HandlebarsJS](http://handlebarsjs.com/))

## Development Requirements

* `nodejs`, `npm`
  * `angular` ;
* tooling:
  * `yo`
  * `bower`
  * `gulp`

```bash
 apt-get install sqlite3 sqlitebrowser
```

## Data extraction

```bash
sqlite3 data/metadata.db 'SELECT * FROM authors'
```
