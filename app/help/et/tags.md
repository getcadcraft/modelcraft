---
title: Sildid: komplektide näitamine ja peitmine
summary: Anna gruppidele ja komponentidele silt, näiteks Mööbel või Seinad, ning peida või näita korraga kõike sellega märgitut.
keywords: sildid, silt, kihid, kiht, näita, peida, nähtavus, korrasta, mööbel, seinad, ilma sildita, silti ümber nimetada, sildi kustutamine
from: c1a95a05
---

Silt on nimi, mille annad gruppidele ja komponentidele, näiteks **Mööbel**, **Seinad** või **Krunt**, et saaksid korraga peita või näidata kõike selle sildiga. Silt on see, mida CAD-programmid nimetavad kihiks. Ühe asja korraga peitmise kohta vt [Peida, isoleeri ja too nähtavale](topic:hide-isolate).

## Loo silt

1. Paremal rubriigis {{ui:Sildid}} klõpsa {{ui:Lisa silt}}.
2. Sisesta nimi ja vajuta {{key:Enter}}.

Sildi ümbernimetamiseks klõpsa selle nimel rubriigis {{ui:Sildid}}, sisesta uus nimi ja vajuta {{key:Enter}}. Kahel sildil ei saa olla sama nime.

## Märgi grupid ja komponendid

1. Vali üks või mitu gruppi või komponenti.
2. Paneelis {{ui:Objekti teave}} vali väljal {{ui:Silt}} silt. {{ui:Uus silt…}} loob uue sildi ja märgib valiku sellega.

{{ui:Ilma sildita}} eemaldab sildi. Arv iga sildi kõrval rubriigis {{ui:Sildid}} näitab, mitmel grupil ja komponendil see silt on.

Märgi gruppe ja komponente, mitte vabu tahke ja servi: joonista asjad, mida soovid märgistada, kõigepealt gruppidena (vali need ja vajuta {{key:Shift+G}}).

## Peida ja näita

Klõpsa sildi kõrval silmal. Kõik selle sildiga asjad kaovad vaatevälja, olenemata sellest, kus need mudelis on (ka teiste gruppide sees), ja klõpsud ning haakumised lähevad neist mööda. Silmale uuesti klõpsates näidatakse neid taas. {{ui:Ilma sildita}} asjad on alati nähtavad.

Kui muudad gruppi seest ja peidad selle grupi sildi, grupp sulgub.

## Kustuta silt

Klõpsa sildi kõrval olevale prügikastile. Selle sildiga asjad saavad märgi {{ui:Ilma sildita}} ja ilmuvad nähtavale.

## Mida tuleb teada

- Sildid, nende nimed ja see, millised on peidetud, salvestatakse ModelCraft-i faili. Märgistatud grupi kopeerimine teise mudelisse toob sildi kaasa.
- Sildi peitmine ja näitamine ning kõik muud muudatused siltides on üks tagasivõtmise samm.
- Ekspordid sisaldavad kõike, ka peidetud silte, nagu peidetud asju ka.
- DWG- ja DXF-failide krundiplaanide kihid ei tule veel sisse siltidena: kogu joonis tuleb sisse ühe grupina.
