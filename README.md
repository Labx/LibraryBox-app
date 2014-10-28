Ui to manage [LibraryBox](http://librarybox.us/)


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
