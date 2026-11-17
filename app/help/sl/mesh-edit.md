---
title: Urejanje mreže v delovnem okolju Mreža
summary: Izberite oglišča, robove in ploskve mreže, jih premaknite ter jih iztisnite, vdolbite, pokosite, prerežite, združite, zapolnite in premostite, z obema slogoma tipk.
keywords: mreža, način urejanja, delovno okolje mreže, oglišče, oglišča, rob, robovi, ploskev, ploskve, iztisni, vdolbi, pokosi, razrez zanke, nož, razpolovi, zavrti, združi, raztopi, zapolni, zapolni z mrežo, most, razdeli, drsi, sorazmerno urejanje, upad, delovno okolje
from: 92a372dd
---

Delovno okolje **Mreža** ureja [mrežo](topic:meshes) točko za točko: njena oglišča, robove in ploskve. Geometrija potisni/povleci ostane v delovnem okolju **Model**.

## Odprite

- Izberite {{ui:Mreža}} v seznamu {{ui:Delovno okolje}} na levi strani orodne vrstice. Izbrana mreža se odpre za urejanje; izbrana skupina ali komponenta se najprej pretvori v mrežo (en korak razveljavitve).
- Ali dvakrat kliknite mrežo ali pa z tipkami modelirnika izberite mrežo in pritisnite {{key:Tab}}.
- Če nič ni izbrano, plošča ponuja mreže za dodajanje: ravnina, mreža (grid), kocka, krog, valj, stožec, krogla, ikosfera in torus. Nova gre tja, kamor gleda pogled, in se odpre za urejanje.

{{ui:Nazaj na Model}} (ali seznam, {{key:Tab}} s tipkami modelirnika, {{key:Esc}} brez izbora s tipkami potisni/povleci) vrne v Model z izbrano mrežo. Med odprtim delovnim okoljem Mreža je ostali model zbledel, orodja za risanje Modela pa so odložena.

## Izbira

| Dejanje | Učinek |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Izberite oglišča, robove ali ploskve |
| Klik | Izberite enega; {{key:Shift}}+klik doda ali odstrani |
| Povlecite okvir | Izberite, kar je znotraj in vidno; {{key:Shift}} doda, {{key:Ctrl}} odstrani |
| {{key:Alt}}+klik na rob ali dvojni klik nanj | Njegova zanka robov (zanka ploskev v načinu ploskev; ves rob pri odprtem robu) |
| {{key:Ctrl}}+{{key:Alt}}+klik na rob | Njegov kolobar robov |
| Trikratni klik | Vse, kar je z njim povezano |

Skupina {{ui:Izberi}} ima tudi {{ui:Vse}}, {{ui:Povezano}}, {{ui:Zanka}}, {{ui:Kolobar}}, {{ui:Več}} in {{ui:Manj}}.

## Premaknite, zasukajte, spremenite merilo

{{ui:Premakni (M)}}, {{ui:Zasukaj (Q)}} in {{ui:Merilo (S)}} začnejo od kazalca: premaknite ga, nato kliknite ali pritisnite {{key:Enter}}, da odložite izbor, ali {{key:Esc}}, da prekličete. {{key:X}}, {{key:Y}} ali {{key:Z}} (ali puščične tipke) zaklenejo os. Vnesite razdaljo, kot ali faktor za natančno vrednost; [izračuni](topic:value-box#calculations) prav tako delujejo.

**Sorazmerno urejanje** ({{ui:Sorazmerno}} ali plošča): oglišča blizu izbora sledijo premiku, manj tem bolj so oddaljena, do dosega, ki ga nastavite, z upadom, ki ga izberete. Vklopite {{ui:Samo vzdolž mreže}}, da merite vzdolž robov namesto naravnost.

{{ui:Drsi}} premakne izbrano zanko robov vzdolž sosednjih robov.

## Spremenite obliko

| Orodje | Naredi |
|---|---|
| {{ui:Iztisni}} | Potegne izbrane ploskve ven vzdolž njihove normale, z novimi stranskimi ploskvami (ali naredi ploskve iz odprtih robov). Vnesite razdaljo |
| {{ui:Vdolbi}} | Pas znotraj obrisa izbranih ploskev; za vsako ploskev posebej ponovno pritisnite {{key:I}} |
| {{ui:Pokosi}} | Prireže izbrane robove (ali, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, oglišča) na širino; kolešček ali tipki plus in minus dodata segmente za zaobljen rob |
| {{ui:Razrez zanke}} | Kažite na rob: nove zanke čez kolobar štiristranskih ploskev; kolešček nastavi, koliko; klik za rez |
| {{ui:Nož}} | Kliknite točke na robovih ali vogalih; {{key:Enter}} zareže naravnost čez ploskve med njimi, kot jih vidite |
| {{ui:Razpolovi}} | Narišite črto na zaslonu: izbrane ploskve (ali vse) se prerežejo vzdolž nje |
| {{ui:Zavrti}} | Zasuka izbrane ploskve ali odprte robove okoli modre osi po korakih (kolešček nastavi korake); poln obrat zapre |
| {{ui:Razdeli}} | Prereže izbrane robove na dva; cele ploskve postanejo mreža |
| {{ui:Združi}} | Izbrana oglišča postanejo eno, v njihovem središču |
| {{ui:Raztopi}} | Odstrani izbor, a ohrani površino: ploskve se združijo |
| {{ui:Zapolni}} | Ploskev čez izbrani odprti rob (ali med dvema odprtima robovoma) |
| {{ui:Zapolni z mrežo}} | Zapolni odprti rob s sodim številom robov z mrežo štirikotnikov |
| {{ui:Most}} | Poveže dve izbrani odprti zanki robov s ploskvami |
| {{ui:Zareza}} | Kako ostri ostanejo izbrani robovi, ko se mreža zgladi s podrazdelitveno ploskvijo: premaknite stran od središča, uporabite kolešček (koraki po 0.1) ali vnesite od 0 do 1. Plošča prikaže zarezo izbranih robov in sprejme tudi vneseno vrednost. Robovi z zarezo so narisani v magenta barvi |
| {{ui:Zrcali}}, {{ui:Zgladi}}, {{ui:Izbriši}} | Obrnejo ploskve; zgladijo oglišča proti sosedom; izbrišejo glede na način izbora |

Vsaka je en korak razveljavitve. Koordinate teksture, barve in uteži se prenesejo na nove ploskve in oglišča.

## Ponovno mreženje

{{ui:Ponovno mreži}} naredi celotno mrežo znova kot enakomerne trikotnike ene velikosti, ki jo določite ob pritisku (manjša velikost je natančnejša in počasnejša). Zapre luknje, združi kose, ki se prekrivajo, in izenači mrežo, ki jo je kiparjenje raztegnilo. Ostri robovi postanejo rahlo zaobljeni. UV koordinate, barvanje in zareze se začnejo znova. En korak razveljavitve.

## Retopologija

Za gradnjo nove, čistejše mreže čez podrobno (kiparski model, skeniranje) izberite podrobno mrežo pod {{ui:Retopologija}} › **Gradi na** v plošči, nato:

- **Premaknjene točke pritrdite nanjo:** točke, ki jih premaknete, in robovi, ki jih iztisnete, pristanejo na njeni površini.
- **Izbrane točke postavi nanjo** premakne izbrana oglišča nanjo zdaj (en korak razveljavitve).
- **Pokaži robove te mreže spredaj** nariše mrežo, ki jo gradite, čez površino, da jo vidite.

## Prilagodite zadnje dejanje

Po {{ui:Vdolbi}}, {{ui:Pokosi}}, {{ui:Razrez zanke}}, {{ui:Razdeli}}, {{ui:Zgladi}}, {{ui:Zapolni z mrežo}} ali {{ui:Zavrti}} plošča prikaže njegove nastavitve (širina, segmenti, profil, rezi ...). Spremenite eno, in dejanje se ponovi od začetka, še vedno kot en korak razveljavitve.

## Tipke

| | Tipke potisni/povleci | Tipke modelirnika |
|---|---|---|
| Premakni, zasukaj, spremeni merilo | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dvakrat drsi) |
| Iztisni, vdolbi | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Izbriši | {{key:E}} ali {{key:Delete}} | {{key:X}} ali {{key:Delete}} |
| Zareza | {{key:Shift+C}} | {{key:Shift+E}} |
| Izberi vse, nič, invertiraj izbor | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Oboje | {{key:Ctrl+B}} pokosi, {{key:Ctrl+R}} razrez zanke, {{key:K}} nož | enako, in {{key:F}} zapolni, {{key:M}} združi, {{key:Ctrl+X}} raztopi, {{key:L}} / {{key:Ctrl+L}} povezano, {{key:Alt+N}} zrcali, {{key:O}} sorazmerno, {{key:Shift+V}} drsenje oglišč |

Glejte tudi [Mreže](topic:meshes), [Modifikatorji na mreži](topic:modifiers) in [Še ni izdelano](topic:not-built-yet).
