---
title: Kreslenie plôch úsečkami, obdĺžnikmi, kružnicami a oblúkmi
summary: Vytvorte ploché plochy na zemi alebo na iných plochách, rozdeľte ich úsečkami a kreslite kružnice a mnohouholníky s počtom strán, aký potrebujete.
keywords: kreslenie, úsečka, obdĺžnik, kružnica, mnohouholník, odsadenie, rám, okraj, oblúk, krivka, spline, hladká, kábel, dráha, vyklenutie, polomer, plocha, pôdorys, obrys, rozdeliť, strany, segmenty, ceruzka
from: b6d7b7dd
---

Všetko v ModelCraft začína ako ploché **plochy**: povrch uzavretý hranami. Plochu môžete nakresliť priamo nástrojmi {{ui:Obdĺžnik}}, {{ui:Kružnica}} alebo {{ui:Mnohouholník}}, alebo obrysovať jednu hranu naraz nástrojom {{ui:Úsečka}}. Plochy sú to, čo [tlač/ťah](topic:push-pull) mení na telesá.

## Nakreslenie obdĺžnika

1. Stlačte {{key:R}}.
2. Kliknite na prvý roh: na zem alebo na ľubovoľnú plochu modelu.
3. Pohybujte kurzorom. Obdĺžnik zostane na zemi (alebo na ploche, na ktorej ste začali), a pole hodnoty ({{ui:Kóty}}) zobrazuje jeho šírku a hĺbku. Tip hovorí "Štvorec", keď sú strany rovnaké.

   Ak chcete kresliť na inej rovine, ukážte na ňu: plocha, ktorá prechádza cez prvý roh, umiestni obdĺžnik na túto plochu, a prichytenie k bodu mimo roviny (koncový bod, hrana, modrá osa) postaví obdĺžnik zvisle cez oba rohy. Ak sa prichytíte späť k bodu na prvej rovine, obdĺžnik sa opäť položí. Ak chcete zachovať jednu rovinu, stlačte šípkovú klávesu: {{key:Up}} udrží obdĺžnik vodorovne (modrá rovina), {{key:Right}} na červenej rovine, {{key:Left}} na zelenej rovine. Ak chcete odomknúť, stlačte rovnakú klávesu znova.
4. Kliknite na protiľahlý roh alebo napíšte dva rozmery oddelené čiarkou a stlačte {{key:Enter}}: `4m,3m`, `4000,3000` v modeli v milimetroch alebo `12',10'6"` v stopách a palcoch.

   Vznikne plocha so štyrmi hranami okolo nej.

Napísané rozmery sa použijú v smere, na ktorý ukazujete: ak je kurzor pri písaní naľavo od prvého rohu, obdĺžnik sa rozširuje doľava.

:::warning
Čiarka oddeľuje dva rozmery, preto nemôže byť desatinnou čiarkou. Napíšte `2.5m,3m`, nikdy `2,5m`.
:::

## Nakreslenie kružnice alebo mnohouholníka

1. Stlačte {{key:C}} pre kružnicu alebo {{key:N}} pre mnohouholník.
2. Ak chcete zmeniť počet strán, napíšte ho pred kliknutím: `12s` (alebo iba `12`) a stlačte {{key:Enter}}. Kružnica má na začiatku 24 strán a mnohouholník 6. Tip zobrazuje aktuálny počet a ModelCraft ho zachová pre ďalšiu kružnicu, kým ho nezmeníte alebo neprepnete nástroj.
3. Kliknite na stred, na zem alebo na plochu. Ak chcete stred umiestniť na plochu, ukážte na stred plochy ("Stred plochy") alebo na stred jednej z jej hrán ("Stred") kurzorom tesne vnútri tejto plochy: kružnica sa nakreslí na tej ploche, aj na úzkom konci dlhej krabice.
4. Kliknutím nastavte polomer alebo ho napíšte ({{ui:Polomer}} v poli hodnoty) a stlačte {{key:Enter}}.

Kružnica je mnohouholník s veľkým počtom strán. Keď kružnicu vytiahnete nástrojom tlač/ťah, jej strany sa zjemnia, aby valec pôsobil ako jeden hladký povrch.

## Nakreslenie oblúka

1. Stlačte {{key:A}} ({{ui:Oblúk}}).
2. Kliknite, kde oblúk začína, potom, kde končí (alebo napíšte dĺžku medzi nimi).
3. Pohybom kurzora vyklenite oblúk a kliknite. Tip hovorí "Polkruh", keď je vyklenutie polovicou vzdialenosti medzi koncami. Alebo napíšte, o koľko stred odstupuje: `2` a stlačte {{key:Enter}}.

Ak chcete namiesto toho nakresliť oblúk okolo bodu, použite {{ui:Oblúk zo stredu}}: kliknite na stred, potom na miesto, kde oblúk začína (alebo napíšte polomer), a potom na miesto, kde končí (alebo napíšte uhol v stupňoch, napríklad `90`). Prichytáva sa v krokoch po 15°.

Oblúk začatý na ploche sa nakreslí na tejto ploche; inak leží na zemi, alebo stojí zvisle, ak sú jeho dva konce vo rôznych výškach. Oblúk má 12 segmentov; ak ich chcete viac, napíšte počas kreslenia `24s`. Oblúky uzatvárajú plochy rovnako ako úsečky: oblúk cez roh obdĺžnika ho rozdelí.

## Nakreslenie hladkej krivky

{{ui:Krivka}} kreslí hladkú čiaru, ktorá prechádza každým bodom, na ktorý kliknete: kábel, dráhu zábradlia, záhradný okraj. Môže ísť aj mimo zeme: body sa prichytávajú k rohom, hranám a plochám kdekoľvek a šípkové klávesy zamknú červenú, zelenú alebo modrú rovnako ako pri {{ui:Úsečka}}.

1. Kliknite na {{ui:Krivka}} v skupine {{ui:Kreslenie}}.
2. Kliknite na body, ktorými krivka prechádza. Napíšte `<0,0,1>` a stlačte {{key:Enter}} pre bod o 1 nad posledným, `[x,y,z]` pre presné miesto, alebo dĺžku pre bod v tejto vzdialenosti smerom ku kurzoru.
3. Dokončite stlačením {{key:Enter}} alebo dvojitým kliknutím. Kliknutím na prvý bod znova uzavriete krivku. {{key:Backspace}} vráti posledný bod späť.

Krivka sa vyberá ako jeden celok. Ak ju chcete zmeniť, vyberte ju a kliknite na {{ui:Upraviť body}} v {{ui:Informácie o entite}}: jej body sa zobrazia ako štvorčeky. Kliknite na jeden z nich a potom kliknite, kam má smerovať (alebo napíšte `<dx,dy,dz>`). {{key:Esc}} vráti bod na pôvodné miesto a ukončí úpravy. Uzavretá plochá krivka vytvorí plochu; krivka, ktorá obrysuje plochu, sa už nedá upravovať.

## Odsadenie: okraj vnútri alebo mimo plochy

{{ui:Odsadenie}} skopíruje obrys plochy vo zvolenej vzdialenosti dovnútra (alebo von), napríklad pre rám, okraj, parapet alebo sklo výplne.

1. Stlačte {{key:F}} a kliknite na plochu, alebo najprv vyberte plochu a potom stlačte {{key:F}}.
2. Pohybujte kurzorom dovnútra plochy pre vnútorný obrys, alebo von z nej pre vonkajší. Nový obrys sa pohybuje za kurzorom a tip ukazuje vzdialenosť.
3. Kliknite alebo napíšte vzdialenosť a stlačte {{key:Enter}}.

Plocha sa rozdelí na dve: vnútornú plochu a rám okolo nej (alebo nový prstenec von). Ktorúkoľvek z nich hneď vytlačte alebo vytiahnite nástrojom tlač/ťah: pri výplni nakreslite škatuľu, vytlačte ju na jej hrúbku, odsaďte prednú plochu o 30 mm dovnútra a vnútornú plochu mierne vtlačte pre sklo. Otvory v ploche sa odsadia tiež a oblúk alebo kružnica zostane jednou (menšou alebo väčšou) krivkou.

- **Dvojitým kliknutím** na plochu s {{ui:Odsadenie}} ju odsadíte znova o poslednú vzdialenosť.
- **Hrany:** vyberte reťaz spojených hrán v jednej rovine (napríklad dve čiary písmena L), stlačte {{key:F}}, presuňte sa na požadovanú stranu a napíšte vzdialenosť: nakreslí sa rovnobežná kópia so skosenými rohmi.
- Ak je vzdialenosť väčšia, než plocha dovoľuje, ModelCraft to oznámi a nič nenakreslí.

## Oblúky, kružnice a mnohouholníky sú krivky

Kliknutím na ľubovoľný segment oblúka, kružnice alebo mnohouholníka sa vyberie celá krivka. {{ui:Informácie o entite}} potom zobrazí jej polomer, segmenty, uhol (pri oblúkoch) a dĺžku. Napíšte tam nový polomer, ktorým sa krivka zmení okolo svojho stredu; plochy nakreslené v jej rovine sa prispôsobia. Keď sa plocha krivky už vytlačila alebo vytiahla, jej polomer zostane taký, aký je.

## Kreslenie úsečkami

1. Stlačte {{key:L}}.
2. Kliknite, kde úsečka začína.
3. Kliknite, kde končí, alebo napíšte dĺžku a stlačte {{key:Enter}}. Napísaná dĺžka ide v smere, ktorý ukazuje kurzor.
4. Pokračujte v klikaní. Každé kliknutie začne ďalšiu úsečku od konca poslednej.
5. Obrys uzavriete kliknutím na prvý bod znova. Keď úsečky uzavrú plochú slučku, vyplní sa plochou a nástroj prestane reťaziť čiary. Kedykoľvek môžete zastaviť stlačením {{key:Esc}}.

Úsečky sa prichytávajú k červenému, zelenému a modrému smeru, keď sa k nim priblížite; úsečka získa túto farbu a tip hovorí "Na červenej osi". Pozrite si [Odvodzovanie a prichytávanie](topic:inference), kde sa dozviete, ako zamknúť smer a prichytiť body.

### Kam smeruje úsečka, keď sa ničoho nedotýka

- Úsečka, ktorá začína na ploche, zostane v rovine tejto plochy.
- Úsečka, ktorá začína na zemi alebo vo voľnom priestore, zostane vodorovne so svojím začiatočným bodom. Ak sa na model pozeráte zboku, ide vo zvislej rovine, ktorá smeruje k vám.
- Ak chcete nakresliť úsečku na presné miesto, napíšte bod: `[x,y,z]` pre bod v modeli alebo `<dx,dy,dz>` pre posun od začiatku. Pozrite si [Zadanie presných rozmerov](topic:value-box).

## Rozdelenie plochy

Nakreslite úsečku cez plochu, od jednej hrany k druhej (alebo od hrany k hrane cez iné úsečky). Plocha sa rozdelí na dve plochy. Každá si zachová svoju stranu a farbu. Rovnako to funguje s obdĺžnikom alebo kružnicou nakreslenou na ploche: tvar sa stane vlastnou plochou vnútri väčšej, ktorá má teraz otvor.

Takto rozvrhnete miestnosti na podlahovej doske, okno na múre alebo schod na schodisku: nakreslite obrys na plochu a potom novú plochu vytlačte alebo vytiahnite nástrojom tlač/ťah.

## Plochy obrátené opačným smerom

Každá plocha má prednú a zadnú stranu. Zadná strana sa zobrazuje modrosivo. Plochy nakreslené na zemi smerujú nahor; plochy nakreslené na inej ploche smerujú rovnako ako tá plocha.

Ak plocha zobrazuje zadnú stranu tam, kde očakávate prednú, vyberte ju a kliknite na {{ui:Obrátiť plochu}} v {{ui:Informácie o entite}}.

## Čo vidíte počas kreslenia

- Farebná značka tam, kde sa kurzor prichytáva, a jej názov v tipe vľavo dole.
- Náhľad úsečky alebo tvaru.
- Aktuálna veľkosť v poli hodnoty. Do poľa môžete kedykoľvek napísať novú hodnotu.

## Ak tvar nie je tam, kde ste čakali

- Na dotykovej obrazovke pozrite [Riešenie problémov](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Ak sa úsečka prichytila k niečomu ďaleko za, mierne otočte pohľad: body skryté za plochou sa nikdy neprichytia, ale body na jej hrane áno.
- Stlačte {{key:Mod+Z}} a vrátite posledný tvar späť; jedným krokom späť sa odstráni jedna úsečka alebo jeden tvar.
