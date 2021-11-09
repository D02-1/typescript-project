# typescript-project
Ein kleines typescript projekt für die klasse zum rumprobieren.

## Installation

Um das projekt nutzen zu können musst du mit npm folgende module global installieren:
- `typescript`
- `ts-node`

## Starten

Um das projekt zu starten, sind folgende schritte notwendig:
- Öffne die `index.html` im Ordner `./public` mit dem live-server
- gebe im terminal `tsc -w` ein, um den typescript compiler im watch-mode (wie bei SASS) zu starten.

## Dateiübersicht

im ordner `./public` befinden sich die allgemeinen dateien für das anzeigen der webapp:
- `index.html` - die haupt datei in der alles zusammenfliest
- `index.js` - die haupt javascript datei, die die klasse aufruft und das script verarbeitet
- `style.css` - die stylesheet datei

im ordner `./src` befindet sich das typescript projekt:
- `app.ts` - die typescript datei

## logik

Wenn ihr `tsc -w` ausführt wird jedes mal das typescript zu javascript kompiliert wenn ihr eine änderung macht, die kompilierte javascript datei könnt ihr im ordner `./dist` sehen. Es lohnt sich auch, mal zu schauen welche datei die `index.js` im `./public` ordner importiert und wie diese datei aussieht.
