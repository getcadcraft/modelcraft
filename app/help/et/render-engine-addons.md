---
title: Renderdusmootori lisamine lisandmooduliga
summary: Mida lisandmoodul võib lisada renderdamisdialoogi mootorite loendisse, luba, mida see vajab programmi käivitamiseks, ning mida Studio kontrollib ja küsib.
keywords: lisandmoodul, addon, mootor, renderdusmootor, arendaja, engine.run, luba, programm, skript, allkirjastatud, studio, api
from: cd7a39ba
---

Lisandmoodul (Sätted › Lisandmoodulid) saab lisada mootori {{ui:Renderda pilt…}} mootorite loendisse. Täielik tekst lisandmooduli autoritele on lisandmooduli spetsifikatsiooni jaotis 16; lühidalt:

- Lisandmoodul registreerib mootori ID-ga, mis algab tema enda omaga, nimega, valikuliste sätetega ning **kas** programmiga, mida käivitada, **või** JavaScripti funktsiooniga, mis joonistab pildi.
- Mootor, mis käivitab programmi, vajab luba **`engine.run`**, mida näidatakse enne paigaldamist ja sätetes. See töötab ainult Studios; brauseris näidatakse seda failina, mis salvestada.
- Lisandmoodul nimetab programmi (lihtne failinimi, mitte kunagi shell), skripti, mis on **allkirjastatud lisandmooduli sees**, ning argumendid, mis koosnevad kohatäitjatest ja lihtsatest sõnadest. Studio leiab programmi või küsib, et osuta sellele korra.
- Esimesel korral, kui lisandmoodul käivitab programmi, **küsib Studio oma dialoogis**: millisest lisandmoodulist, millisest programmist ning et skript võib teha kõike, mida programm võib. Luba seda ainult lisandmoodulile, mida usaldad. Su vastus jääb meelde selle lisandmooduli ja programmi jaoks.
- Pakk (stseen USD-na ja sätete fail, koos glTF-failiga, kui lisandmoodul seda küsib) ja lisandmooduli skript pannakse uude ajutisse kausta, programm käivitatakse seal ning pilt tuleb tagasi, märgituna lisandmooduli mootori nimega.

:::note
Lisandmoodulid saavad lisada renderdusmootoreid ainult lisandmooduli API 1.4-st. Avatud lähtekoodiga käsurea renderdaja töötav näide on oma hoidlas; seda pole selle renderdajaga veel käivitatud.
:::
