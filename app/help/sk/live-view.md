---
title: Živý pohľad
summary: Okno vedľa modelu, ktoré ho zobrazuje v reálnom vzhľade so slnkom a tieňmi a sleduje každú vašu zmenu; prechádzajte ním a nastavte denný čas a mesiac.
keywords: zdieľanie, panoráma, 360, prehliadka, virtuálna prehliadka, samostatný prehliadač, offline prehliadač, poslať klientovi, video, video prechádzky, rozptyl, rozptyľovanie, tráva, lúka, les, skaly, rastliny, stromy, dav, maľovanie rastlín, živý pohľad, reálny čas, vykreslenie v reálnom čase, prechádzka, prechádzanie, prvá osoba, prezentácia, klient, druhá obrazovka, druhé okno, monitor, denný čas, slnko, ročné obdobie, mesiac, tiene, ambientná okluzia, odrazy, odrazené svetlo, globálne osvetlenie, webgpu, webgl
from: fca3b0d6
---

{{ui:Exportovať}} › {{ui:Živý pohľad}} otvorí panel nad aplikáciou, ktorý zobrazuje model v reálnom vzhľade: oblohu a slnko podľa miesta a dátumu vášho modelu, slnečné tiene, vzhľady a materiály, ktoré ste plochám dali, lampy a svetlo odrazené od stien a podláh. Sleduje, čo robíte: otočíte pohľad a aj on sa otočí, zmeníte model a o chvíľu zobrazí zmenu. Nič sa nenahráva.

## Otvorenie

1. Zvoľte {{ui:Exportovať}} › {{ui:Živý pohľad}}. Panel sa otvorí v pravom dolnom rohu.
2. Potiahnutím jeho hlavičky ho presuniete, potiahnutím rohu zväčšíte.
3. {{ui:Nové okno}} ho presunie do vlastného okna, napríklad na druhú obrazovku. {{ui:Exportovať}} › {{ui:Živý pohľad v novom okne}} ho tam otvorí hneď. Ak prehliadač blokuje vyskakovacie okná, otvorí sa ako panel.
4. {{ui:Zavrieť}} ho zatvorí.

## Ovládanie

| Ovládací prvok | Čo robí |
|---|---|
| {{ui:Sledovať pohľad}} | Zapnuté: živý pohľad sa pozerá tam, kam sa pozerá pohľad ModelCraft. Chôdza ho vypne |
| {{ui:Prechádzka}} | Prechádzanie modelom (nižšie) |
| {{ui:Gravitácia}} | Pri prechádzaní: stojíte na podlahách a stúpate po schodoch. Vypnuté: lietate |
| {{ui:Čas}} | Hodina dňa, od 05:00 do 21:00. Slnko sa pohybuje pri ťahaní |
| {{ui:Mesiac}} | Mesiac (21. v ňom), aby ste videli slnko v zime a v lete |
| {{ui:Kvalita}} | {{ui:Pre tento počítač}} (čo dostane [váš počítač](topic:your-machine)), alebo {{ui:Nízka}}, {{ui:Stredná}} alebo {{ui:Vysoká}} |

Riadok dole hovorí, čím sa pohľad kreslí (WebGPU alebo WebGL 2), aká je kvalita a aké je odrazené svetlo.

## Prechádzka modelom

1. Otočte hlavný pohľad tam, kde chcete stáť, a zvoľte {{ui:Prechádzka}}. Stojíte na podlahe pod očným bodom pohľadu, vysokí 1.6 m.
2. Kliknite na živý pohľad a potom použite {{key:W}} {{key:A}} {{key:S}} {{key:D}} alebo šípky. Podržte {{key:Shift}} na beh. Potiahnutím sa rozhliadnite.
3. Schody do výšky 40 cm sa vyšliapu; čokoľvek vyššie je stena. Steny vás zastavia a pozdĺž nich kĺzete.
4. Pri vypnutej {{ui:Gravitácia}} lietate: {{key:E}} ide hore, {{key:Q}} dole.
5. {{key:Esc}} ukončí prechádzanie.

## Rozptyl rastlín, skál a ľudí

{{ui:Rozptyl}} na lište živého pohľadu otvorí panel rozptylu vedľa obrázka. Súbor rozptylu rozsype položky z knižnice okolia (stromy, kry, tráva, kvety, skaly, ľudia, autá) na časť modelu. Položky sa kreslia len v živom pohľade: nie sú geometriou modelu a hlavný pohľad ich nezobrazuje.

1. **Vyplnenie plôch:** vyberte plochy (alebo skupinu, napríklad terén) v ModelCraft a potom zvoľte {{ui:Vyplniť výber}}. Súbor ich pokryje.
2. **Maľovanie:** zvoľte {{ui:Farba}} a potom ťahajte nad živým pohľadom. Ak sú vybraté plochy, farba sa nanesie len na ne; ak nič nie je vybrané, nanesie sa na čokoľvek pod štetcom, aj na zem. {{ui:Veľkosť štetca}} nastaví štetec; {{ui:Guma}} odstráni namaľované miesta.
3. Zaškrtnite, čo rozptýliť. Číslo vedľa každej položky je jej váha: 3 a 1 znamená tri prvé na každú jednu druhú.

| Ovládací prvok | Čo robí |
|---|---|
| {{ui:Na m²}} | Koľko položiek na každý štvorcový meter |
| {{ui:Odstup (m)}} | Žiadne položky bližšie k iným objektom a žiadne pod strechou alebo stolom. 0 to vypne |
| {{ui:Otočenie (°)}} | O koľko sa každá položka náhodne otočí okolo zvislice |
| {{ui:Najstrmšie (°)}} | Žiadne položky tam, kde je povrch strmší |
| {{ui:Veľkosť}} | Najmenšia a najväčšia veľkosť ako násobok vlastnej veľkosti položky |
| {{ui:Výška od, do (m)}} | Iba medzi týmito výškami (prázdne = ľubovoľná) |
| {{ui:Naklonenie podľa povrchu}} | 0 nechá položky zvislé; 1 ich postaví kolmo na svah |
| {{ui:Východisková hodnota}}, {{ui:Premiešať}} | Rovnaké východisková hodnota vždy dá rovnaký rozptyl; {{ui:Premiešať}} vyberie iný |

Súbory rozptylu sa ukladajú do súboru .modelcraft a pri zmene plôch, ktoré pokrývajú, ich sledujú. Najviac položiek, ktoré živý pohľad nakreslí, určuje úroveň [vášho počítača](topic:your-machine): 20 000 pre {{ui:Iba procesor}}, 100 000 pre {{ui:Grafická karta, základná}}, milión pre {{ui:Grafická karta, vysoká}}. Panel hovorí, koľko je umiestnených z koľkých, ktoré hustota žiada: menej sa ich umiestni, keď sa dosiahne limit, alebo tam, kde im to prekážajú objekty. Položky blízko kamery sa kreslia ako sebe podobné; vzdialené ako jednoduché tvary vo svojich farbách.

:::note
Rozptýlené položky sú v živom pohľade (a v jeho prechádzke, panorámach a samostatnom prehliadači). Vykreslenie obrázka ich zatiaľ nekreslí.
:::

## Zdieľanie: panorámy, prehliadky, prehliadač, video

{{ui:Zdieľať}} na lište živého pohľadu vytvára súbory zo živého pohľadu. Všetko sa vytvára na tomto počítači; nič sa nenahráva.

| Voľba | Čo dostanete |
|---|---|
| {{ui:Panoráma 360°}} | 360° obrázok z miesta, kde pohľad stojí (alebo kde chodíte), ako PNG v ekvirektangulárnom formáte, ktorý otvoria prehliadače panorám a väčšina fotografických stránok |
| {{ui:Pridať toto miesto do prehliadky}}, potom {{ui:Uložiť prehliadku}} | Jedna webová stránka s panorámou na každom mieste a šípkami k miestam, ktoré každé vidí (stena medzi nimi šípku skryje) |
| {{ui:Uložiť prehliadač}} | Jedna webová stránka s modelom v tomto reálnom vzhľade: otáčajte ho, prechádzajte ním, skočte na jeho uložené scény. Otvára sa offline v prehliadači s WebGPU alebo WebGL 2, z priečinka, USB kľúča alebo e-mailu, bez inštalácie a bez účtu, a nenačítava nič z internetu |
| {{ui:Video trasy}} | Dráha kamery na časovej osi (alebo uložené scény v poradí) ako video v tomto reálnom vzhľade, vo veľkosti živého pohľadu: WebM alebo MP4 tam, kde ich prehliadač vie vytvoriť, inak očíslované obrázky v ZIP |

Šírka panorámy sa riadi kvalitou: 1024, 2048 alebo 4096 pixelov pri nízkej, strednej a vysokej kvalite. Súbor prehliadača má asi 5 MB plus model.

:::note
Prehliadač a prehliadka sú určené na prezentovanie, nie na úpravy: pri uložení zachovajú model tak, ako je.
:::

## Kvalita

| | Nízka | Stredná | Vysoká |
|---|---|---|---|
| Slnečné tiene | jedna tieňová mapa | tri kaskády | štyri kaskády |
| Ambientná okluzia (kontaktné tiene) | | ✓ | ✓, jemnejšia |
| Odrazy v kove | | | ✓ |
| Žiara (keď ju nastaví Vykresliť obrázok) | | ✓ | ✓ |
| Vyhladenie hrán | FXAA | cez viac snímok (TAA) | cez viac snímok (TAA) |
| Odrazené svetlo | hrubé | jemnejšie | najjemnejšie |

{{ui:Pre tento počítač}} vyberie {{ui:Nízka}} na počítači bez použiteľnej grafickej karty, {{ui:Stredná}} s vstavaným grafickým čipom a {{ui:Vysoká}} so samostatnou grafickou kartou. Nízka je určená pre notebook s 8 GB pamäte a bez grafickej karty.

## Odrazené svetlo

Svetlo odrazené od osvetlenej steny na podlahu a tmavšia vnútorná časť miestnosti sa počítajú tým istým sledovaním dráh ako [vykreslené obrázky](topic:render): v bodoch cez model sa vykreslí malá panoráma, na pozadí na každom jadre procesora. Kým pracuje, spodný riadok hovorí {{ui:Odrazené svetlo: 40 %}}; keď je hotový, pohľad ho prevezme. Po zmene sa začne znova.

:::note
Ide o priblíženie pre živý pohľad, nie o vykreslený obrázok: drobné detaily medzi bodmi dostanú odrazené svetlo od blízkych bodov. Pre hotový obrázok použite [Vykresliť obrázok](topic:render).
:::

## Jas a farby

Živý pohľad používa rovnaký jas, vyváženie bielej, kontrast a transformáciu pohľadu (ACES, AgX, filmic alebo štandardnú) ako [Vykresliť obrázok](topic:render): nastavte ich tam a živý pohľad ich prevezme.

:::note
Prehliadače sa líšia. Tam, kde prehliadač má WebGPU (Chrome a Edge vo Windows, macOS a ChromeOS, Safari 26), živý pohľad ho používa; inde (väčšina prehliadačov v Linuxe, staršie systémy Apple) používa WebGL 2 a vyzerá rovnako.
:::
