Ui to manage [LibraryBox](http://librarybox.us/)

Nous avons pour objectif d'automatiser la gestion des LibraryBox et leurs contenus.

## Architecture

1. branchement sur l'outil de gestion [calibre](http://calibre-ebook.com/) utiliser par @safiler ;
2. export des données de la base `sqlite` en `JSON` ;
3. mise en forme coté client via un système de template (p. ex. [AngularJS](https://angularjs.org/) ou [HandlebarsJS](http://handlebarsjs.com/))

## Development Requirements

* `nodejs`, `npm`
  * `angularJS` ;
* tooling:
    * `yo` (scaffolding) ;
    * `bower` (dependencies management) ;
    * `gulp` (task management) ;

```bash
sudo make install-devtools
```

## Data extraction

```bash
gulp db-list-tables
gulp db-dump
```

Or on a per-table basis
 
```bash
gulp db-authors
gulp db-books
gulp db-tags
gulp db-series
```
