---
title: Groepe en komponente
summary: Hou voorwerpe van mekaar geskei, wysig een kopie om hulle almal te verander, en gebruik die Uitlyner- en Komponente-paneele.
keywords: groep, komponent, maak groep, maak komponent, ontbind, maak uniek, uitlyner, gevalle, kopieë, blok, geneste, wysig groep, plaas
from: 7cb925f3
---

Los meetkunde in ModelCraft kleef aan mekaar: lyne wat aanraak verdeel mekaar, en vlakke wat 'n rand deel, beweeg saam. Dit maak dat teken op vlakke werk, maar dit beteken ook dat 'n boks wat teen 'n ander boks geteken word, daarmee saamsmelt. **Groepe** en **komponente** hou dinge uit mekaar.

- 'n **Groep** omvat meetkunde sodat dit as een voorwerp optree. Niks buite dit kan daaraan kleef nie.
- 'n **Komponent** is 'n groep wat baie keer geplaas kan word. Elke kopie deel dieselfde inhoud: wysig een en hulle verander almal. Gebruik komponente vir alles wat herhaal word: vensters, kolomme, lessenaars, bome.

## Maak 'n groep of 'n komponent

1. Kies die meetkunde. 'n Drievoudige klik op 'n vlak kies die hele verbonde voorwerp; 'n sleep-venster kies alles in die boks.
2. Druk {{key:Shift+G}} vir 'n groep, of {{key:G}} vir 'n komponent. Jy kan ook op {{ui:Group}} of {{ui:Component}} in die werkbalk se {{ui:Organize}}-groep klik, of op {{ui:Make group (Shift+G)}} of {{ui:Make component (G)}} in {{ui:Entity info}}.

   Die statusbalk sê "Gegroepeer as Group#1." of "Komponent Component#1 gemaak." Die nuwe voorwerp is gekies, en dit verskyn in die {{ui:Outliner}}.

3. Om dit 'n naam te gee, tik 'n naam in die {{ui:Name}}-veld van {{ui:Entity info}} en druk {{key:Enter}} of klik weg.

Kies 'n vlak bring sy rande saam. As niks gekies is nie, sê die statusbalk: "Kies eers 'n bietjie meetkunde (sleep 'n venster, of drievoudig-klik om alles wat verbind is te kies)."

Jy kan ook groepe groepeer: kies verskeie groepe en druk {{key:Shift+G}}. Die {{ui:Outliner}} wys die geneste struktuur.

:::note
Die sleutelletters stem ooreen met SketchUp se verstekwaardes: {{key:G}} maak 'n komponent, {{key:Shift+G}} 'n groep.
:::

## Wysig binne 'n groep of komponent

1. Dubbelklik daarop (in die aansig of in die {{ui:Outliner}}), of kies dit en klik op {{ui:Edit}} in {{ui:Entity info}}.

   Die res van die model verbleek, die asse skuif na die groep se eie asse, en die {{ui:Outliner}} lees "Redigeer: Model › Group#1". Die statusbalk sê "Redigeer Group#1. Esc of dubbelklik buite maak dit toe."

2. Teken, druk-trek, skuif en vee uit soos gewoonlik. Alles wat jy doen, bly binne die groep.
3. Maak dit toe: druk {{key:Esc}} (twee keer as iets gekies is), dubbelklik op leë ruimte, of klik op {{ui:Close group}} in die {{ui:Outliner}}.

Terwyl 'n komponent oop is, verander elke kopie daarvan soos jy werk.

## Plaas meer kopieë van 'n komponent

- Kopieer dit met {{ui:Move}} en {{key:Ctrl}} (sien [Skuif en kopieer](topic:move-copy)). Elke kopie is nog 'n plasing van dieselfde komponent.
- Of klik op {{ui:Place}} langs dit in die {{ui:Components}}-paneel, en klik dan waar dit moet gaan. Die oorsprong, die laagste hoek van die boks rondom wat jy gekies het toe jy dit gemaak het, val waar jy klik. Die gereedskap keer dan terug na {{ui:Select}}.

{{ui:Components}} wys hoeveel kopieë geplaas is ("4×"), en die {{ui:Outliner}} wys die telling ná die naam.

## Rangskik in die Uitlyner

Sleep 'n ry in die {{ui:Outliner}} om te verander waar dit hoort. Niks beweeg in die aansig nie: 'n groep behou sy plek in die model.

- **In 'n groep:** laat dit val op die middel van 'n groep se ry (die ry kry 'n gestreepte omlyning). Dit gaan binne, laaste.
- **In 'n ander volgorde:** laat dit val op die boonste of onderste rand van 'n ry ('n lyn wys daar). Dit gaan net voor of ná daardie ry, binne dieselfde groep as daardie ry, so dit plaas ook iets in 'n groep op 'n gekose plek.
- **Uit na die boonste vlak:** laat dit val op die {{ui:Outliner}}-opskrif. Dit gaan laaste.

Elke laat-val is een stap: {{key:Mod+Z}} plaas dit terug. {{key:Esc}} tydens 'n sleep laat niks val nie. 'n Groep kan nie binne homself of binne 'n groep wat dit bevat, gaan nie. Sleep is af terwyl {{ui:Find by name}} teks het.

:::touch
Hou 'n vinger vir 'n oomblik op 'n ry, en sleep dan. 'n Vinnige swaai rol die lys eerder.
:::

## Maak een kopie anders

Kies die kopie en klik op {{ui:Make unique}} in {{ui:Entity info}} (dit verskyn wanneer die komponent meer as een keer geplaas is). Daardie kopie kry sy eie definisie, met 'n naam soos die oorspronklike en 'n nuwe nommer. Wysig dit sonder om die ander te raak.

## Draai 'n groep in 'n komponent

Kies die groep en klik op {{ui:Make component}} in {{ui:Entity info}}. Dit kry 'n nuwe naam, soos Component#2, selfs al het jy die groep 'n naam gegee; tik die naam weer in {{ui:Name}}.

## Ontbind

Kies 'n groep of komponent en klik op {{ui:Explode}} (in die werkbalk of in {{ui:Entity info}}). Die inhoud word los meetkunde op dieselfde plek, en kleef aan wat hulle aanraak. Groepe binne dit bly groepe.

## Soliede en volume

Wanneer jy 'n groep of komponent kies, wys {{ui:Entity info}} **Soliede: Ja** as sy vlakke toesluit sonder gapings (elke rand word deur presies twee vlakke gedeel) en daar geen groepe binne dit geneste is nie. Dan wys dit ook die **volume**. 'n Boks, 'n muur met 'n venster daardeur gesny, en 'n uitgetrekte silinder is soliede; 'n boks met sy bopunt uitgevee is nie.

## Wanneer die laaste kopie gaan

As jy die laaste kopie van 'n komponent uitvee, verwyder dit ook die komponent uit die {{ui:Components}}-paneel. {{key:Mod+Z}} bring dit terug.

## Dinge om te weet

- Kopieë van 'n **groep** wat met {{ui:Move}} gemaak is, deel hul inhoud in hierdie weergawe, soos komponentkopieë: wysig een en die ander verander. Om een onafhanklik te maak, klik op {{ui:Make component}} en dan op {{ui:Make unique}}. Sien [Probleemoplossing](topic:troubleshooting#editing-one-group-changed-another).
- Komponente sny nie openings in mure nie en kleef nie aan vlakke nie, en daar is geen biblioteek van klaargemaakte komponente nie. Jy maak jou eie, of voer hulle in.
- Ingevoerde lêers kom aan as 'n groep. Collada-lêers hou hul eie groepe en komponente daarbinne.
