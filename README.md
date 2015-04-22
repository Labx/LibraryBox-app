# Interface pour [BiblioBox](http://bibliobox.net/)

Nous avons pour objectif d'automatiser la gestion des _LibraryBox_ et leurs contenus, en améliorant simplifiant l'intecface.

Une _LibraryBox_,  ou BiblioBox, dérivée de la [PirateBox](https://en.wikipedia.org/wiki/PirateBox), permet de diffuser des contenus libres de droits.

Composée d'un routeur wifi et d'une clé USB, elle permet aux bibliothèques de proposer au sein de leur établissement des contenus numériques libres de droits (domaine public, licences _Creative Commons_, etc.) : ebooks, musique, films, logiciels, jeux.

Pour plus d'information sur les _LibraryBox_ en France : http://bibliobox.net/

## Architecture

1. branchement sur l'outil de gestion [calibre](http://calibre-ebook.com/) utiliser par [@safiler](https://github.com/safiler) ;
2. export des données de la base `sqlite` en `JSON` ;
3. mise en forme coté client via un système de template (p. ex. [AngularJS](https://angularjs.org/))

## Installation

```bash
git clone https://github.com/Labx/LibraryBox-app && cd LibraryBox-app
# install requirement to start application
make install
# open application in browser
gulp serve
```

## Extraction et mise à jour des données

**refacto**: on pass de `gulp` à `make` pour être plus prêt des commandes 
manuelles et réduire le nombre de couches.

```sh
make -s clean export2json
```

Ce qui équivaut de façon plus explicite à:

```sh
make -s clean export2csv export2rawjson export2json 
```


## Dépendances de développement

* `nodejs`, `npm`
  * `angularJS` ;
* outils:
    * `yo` (scaffolding) ;
    * `bower` (dependencies management) ;
    * `gulp` (task management) ;

```bash
make install-devtools
```
