---
title: Odpravljanje težav
summary: Simptomi, vzroki in rešitve, od praznega 3D pogleda do uvozov napačne velikosti, s sporočili, ki jih prikaže ModelCraft.
keywords: težava, problem, napaka, ne deluje, prazno, webgl, grafika, počasno, sporočilo, uvoz ni uspel, napačna velikost, ne morem izbrati, dotik, tipke ne delujejo, izgubljeno delo
from: 6e7394be
---

## 3D pogled je prazen

**Simptom:** sredina zaslona ostane prazna ali prikazuje samo barvo ozadja, klik na orodja pa ne naredi ničesar.

**Vzrok:** ModelCraft riše z WebGL 2, 3D grafiko brskalnika. Manjka, kadar je brskalnik star, ko je strojno pospeševanje izklopljeno ali ko je grafični gonilnik blokiran.

**Rešitev:**

:::chromium
1. Odprite nastavitve brskalnika in poiščite "strojno pospeševanje".
2. Vklopite "Uporabi strojno pospeševanje, kadar je na voljo" in znova zaženite brskalnik.
3. Če je že vklopljeno, v naslovno vrstico vpišite `chrome://gpu` (v Edge `edge://gpu`) in na seznamu poiščite "WebGL2". Če piše, da je onemogočeno, posodobite grafični gonilnik.
:::

:::firefox
1. Odprite **Nastavitve**, nato **Splošno**, in se pomaknite do "Zmogljivost".
2. Odznačite "Uporabi priporočene nastavitve zmogljivosti", nato označite "Uporabi strojno pospeševanje, kadar je na voljo". Znova zaženite Firefox.
3. Če še vedno ne deluje, v naslovno vrstico vpišite `about:support` in v razdelku "Grafika" poglejte WebGL 2.
:::

:::safari
Posodobite macOS in Safari. Nedavne različice Safari imajo WebGL 2 vedno vklopljen. Če ste spremenili eksperimentalne funkcije pod **Safari**, nato **Nastavitve**, nato **Napredno** (ali **Zastavice funkcij**), jih ponastavite.
:::

Na službenem računalniku, oddaljenem namizju ali virtualnem stroju je 3D grafika lahko blokirana s pravilnikom. Poskusite z drugim računalnikom. Glejte [Brskalniki in računalniki](common:browsers).

## Tipke ne delujejo ali pišejo v polje

**Vzrok:** fokus tipkovnice je v polju na plošči: seznam {{ui:Ploskve}} v {{ui:Slog}}, nastavitev sonca, polje {{ui:Ime}} v {{ui:Podatki o entiteti}} ali izbirnik enot. Črke in puščične tipke gredo takrat v to polje.

**Rešitev:** kliknite v 3D pogled in znova pritisnite tipko. Tipke ne delujejo tudi, dokler je odprto pogovorno okno.

## Vnos številke ne naredi ničesar

- **Še ni smeri.** Vnesena dolžina gre v smeri, v katero kaže kazalec od prvega klika. Premaknite kazalec malo v želeno smer in nato vnesite.
- **Napačen trenutek.** Večina orodij sprejme vneseno vrednost šele po prvem kliku: najprej kliknite prvi kot, ploskev ali točko, od koder premikate. {{ui:Krožnica (C)}} in {{ui:Mnogokotnik (N)}} sprejmeta število stranic pred prvim klikom.
- **"Vnesite dolžino, na primer 3m, 10'6" ali 4m,3m."** ModelCraft je ni mogel prebrati. Preverite decimalno vejico (`2,5`): uporabite piko.

## Oblika se na zaslonu na dotik začne na napačnem mestu

**Simptom:** s prstom je prvi pravokotnik v redu, vendar se naslednji pravokotnik, krog ali črta začne tam, kjer se je končal prejšnji dotik, namesto tam, kjer ste se dotaknili.

**Vzrok:** napaka v tej različici: na zaslonu na dotik orodje zapomni zadnjo točko lovljenja iz prejšnjega gesta.

**Rešitev:** pred vsako novo obliko se znova dotaknite gumba orodja na orodni vrstici. Orodje se tako začne znova in prva točka pade tam, kjer se dotaknete.

## Urejanje ene skupine je spremenilo drugo

**Simptom:** skupino ste kopirali z {{ui:Premakni (M)}} in {{key:Ctrl}}, eno kopijo odprli in urejali, druga kopija pa se je prav tako spremenila. {{ui:Struktura}} prikazuje obe z istim imenom.

**Vzrok:** v tej različici kopiranje skupine ustvari drugo postavitev iste skupine, kot pri komponenti. Gumb {{ui:Naredi edinstveno}} je v ModelCraft ponujen samo za komponente.

**Rešitev:** izberite kopijo, ki jo želite spremeniti, kliknite {{ui:Ustvari komponento}} v {{ui:Podatki o entiteti}}, nato {{ui:Naredi edinstveno}}. Ta kopija ima zdaj svojo vsebino. Ali pa jo {{ui:Razstavi}}.

## Potisni/povleci ne naredi, kar sem pričakoval

- **"Potisni/povleci deluje na ploskvi. Kliknite ploskev."** Kliknili ste rob ali prazen prostor. Premaknite kazalec, dokler se ploskev ne označi, nato kliknite.
- **Ploskev je znotraj skupine.** Najprej dvokliknite skupino, da jo odprete.
- **Okno ni prerezalo stene.** Pravokotnik mora biti narisan na ploskvi stene, ne pred njo, in stena mora imeti zadnjo ploskev. Glejte [Izrez skozi steno](topic:openings#if-it-did-not-cut-through).
- **Dve škatli se prekrivata, a se ne združita.** Telesa, potisnjena drugo v drugo, se v tej različici ne režejo in ne združujejo.

## Črta ali oblika ni ustvarila ploskve

Ploskev se zapolni le, ko robovi zaprejo ravno zanko. Preverite, ali se je zadnja točka ujela na prvo ("Krajišče") in ali vsi robovi ležijo v eni ravnini. Zanka, ki je rahlo iz ravnine, ostane kot črte. Ponovno narišite enega od njenih robov in lovite na kote.

## Ploskve ne morem izbrati ali izbrisati

- Z {{ui:Izberi}} klik blizu roba izbere rob. Kliknite bližje sredini ploskve.
- {{ui:Radirka (E)}} ne izbira ploskev. Izberite ploskev in pritisnite {{key:Delete}}, ali izbrišite enega od njenih robov.
- Če pripada skupini ali komponenti, klik izbere celoten predmet. Dvokliknite, da ga odprete.

## "Najprej izberite nekaj za premik ali kliknite nanj."

{{ui:Premakni (M)}}, {{ui:Zasukaj (Q)}} in {{ui:Merilo (S)}} potrebujejo nekaj za delo: izberite to predhodno ali začnite orodje s klikom na sam predmet (ne na prazen prostor ali vodilo).

## "Najprej izberite geometrijo (povlecite okvir ali trikrat kliknite za izbor vsega povezanega)."

{{key:G}} in {{key:Shift+G}} potrebujeta izbor. Vodil ni mogoče združiti v skupino.

## Puščične tipke orbitirajo namesto zaklepanja

Zaklepanja delujejo le po prvem kliku risalnega ali urejevalnega orodja. {{ui:Potisni/povleci}} nima zaklepanj, pri {{ui:Zasukaj (Q)}} pa ne spremenijo zasuka. Sicer puščične tipke orbitirajo pogled.

## Esc na celotnem zaslonu

Na celotnem zaslonu lahko brskalnik prvi {{key:Esc}} uporabi za izhod iz celotnega zaslona. Za preklic orodja pritisnite {{key:Esc}} znova.

## Ni srednjega gumba

Pritisnite {{key:O}} za {{ui:Orbitiraj}} in povlecite ali uporabite puščične tipke. Glejte [Orbitiranje, pomik in povečava](topic:orbit-pan-zoom#without-a-middle-button).

## Uvozi

| Sporočilo | Kaj storiti |
|---|---|
| "ModelCraft uvaža SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG in DXF. … ni nobeden od teh." | Izvozite model iz drugega programa v enega od teh formatov |
| "Datoteka je večja od 300 MB." | V drugem programu poenostavite ali razdelite model |
| "… je prevelik za modeliranje tukaj (več kot 2 milijona oglišč)." | Enako |
| "Datoteka .gltf potrebuje "…"…" | Povlecite `.gltf` skupaj z njegovimi datotekami `.bin` in teksturami ali odprite različico `.glb` |
| "Datoteka glTF potrebuje razširitev …, ki je ModelCraft še ne bere." | Izvozite znova iz drugega programa brez te razširitve (na primer teksture KTX2) |
| Datoteka OBJ pride brez barv ali tekstur | Povlecite `.obj` skupaj z datoteko `.mtl` in slikami |
| "Datoteka Alembic uporablja staro postavitev HDF5…" | Shranite jo znova iz drugega programa kot datoteko Ogawa Alembic |
| Datoteka FBX pride brez tekstur | Povlecite `.fbx` skupaj s slikami tekstur ali pri izvozu vgradite medije |
| "Datoteka FBX je različice …, ki je ModelCraft ne bere" | Izvozite znova kot FBX 2011 ali novejši |
| STL ali PLY pride 1,000-krat prevelik ali premajhen | STL se bere kot milimetri, PLY kot metri: spremenite merilo (glejte [Zasukaj in spremeni merilo](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "To ni datoteka Collada (.dae) …" ali "… ni pravilno oblikovan XML …" | Datoteka je poškodovana ali ni Collada. Izvozite jo znova |
| "Datoteka Collada nima geometrije, ki jo ModelCraft lahko uvozi." | Vsebuje le kamere, luči ali sklice na druge datoteke |
| "To je binarna datoteka DXF. Shranite jo kot ASCII DXF in poskusite znova." | Shranite jo znova iz CAD programa kot ASCII |
| "To ni risba DWG …" | Datoteka ni DWG ali je poškodovana |
| "Risbe ni mogoče prebrati (…). Morda je poškodovana ali shranjena v različici DWG, ki je bralnik ne podpira …" | Oklepaji navajajo razlog. Shranite jo kot DXF ali kot DWG iz AutoCAD 2000 do 2018 v CAD programu |
| "Risba sega več kot 10,000 km od izhodišča …" | V CAD programu premaknite risbo blizu 0,0 |

### Uvoz je napačne velikosti ali leži na boku

- **OBJ:** OBJ nima enote; ModelCraft bere metre. Model v milimetrih pride 1000-krat prevelik: [spremenite mu merilo](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) za `0.001`; model v palcih za `0.0254`.
- **OBJ leži na boku:** ModelCraft pričakuje datoteke OBJ z Y navzgor. Datoteka, zapisana z Z navzgor, pride ležeča. Zasukajte jo za 90° okoli rdeče osi: kliknite središče {{ui:Zasukaj (Q)}} na ploskvi, ki gleda vzdolž rdeče, ali odprite datoteko v njenem programu in izvozite z Y navzgor.
- **DWG ali DXF:** v pogovornem oknu "Enote risbe" ste izbrali napačno enoto. Razveljavite in uvozite znova.

## Odpiranje datotek

| Sporočilo | Kaj storiti |
|---|---|
| "Ta datoteka ni model ModelCraft (ni JSON)." | Za druge formate uporabite {{ui:Uvozi}} |
| "To ni datoteka ModelCraft, ki jo lahko odpremo: …" | Datoteka je poškodovana ali je bila ročno spremenjena |
| "Ta model je shranila novejša različica ModelCraft …" | Odprite ga v novejši različici |
| "Datoteka je večja od 200 MB." | Model je tukaj prevelik za odpiranje |

## Izgubil sem delo

ModelCraft sam od sebe ne shranjuje v datoteko. Ko zaprete ali znova naložite zavihek z neshranjenimi spremembami, brskalnik najprej vpraša ("Zapustiti spletno mesto?" ali "Znova naložiti spletno mesto?"); ostanite in shranite. Tudi Novo in Odpri vprašata ("Neshranjene spremembe"). Če se brskalnik ali računalnik sesuje, znova odprite ModelCraft v istem brskalniku: ponudi vam neshranjeno delo nazaj ("Obnovite svoje delo?"; glejte [Obnovitev dela](common:recover)). Pogosto shranjujte s {{key:Mod+S}}.

## Mapa za prenose se polni s kopijami

Vsako shranjevanje je nov prenos z imenom `Untitled (1).modelcraft`, `Untitled (2).modelcraft` in tako naprej. Izbrišite stare datoteke ali nastavite brskalnik, da vpraša, kam shraniti vsako datoteko, in staro datoteko prepišete sami. Glejte [Odpiranje, shranjevanje, uvoz in izvoz](topic:files#save-a-model).

## Počasno je

- Vsak korak razveljavitve hrani kopijo modela ([mreža](topic:meshes) hrani le spremenjeno), zato je na zelo velikem uvozu geometrije potisni/povleci vsako urejanje počasnejše. Razstavite ali izbrišite, kar ne potrebujete, shranite in znova odprite: ponovno odprtje tudi počisti zgodovino razveljavitve.
- Sončne sence so najdražje. Med modeliranjem odznačite {{ui:Sončne sence}}.

## Ni senc

{{ui:Sončne sence}} so izklopljene, sonce je ob izbranem času pod obzorjem ("Sonca ob tem času ni."), ali je slog {{ui:Žični model}}, ki ne riše senc.

## "Brskalnik ne dovoli celotnega zaslona."

Nekateri brskalniki in vgrajeni pogledi celotnega zaslona ne dovolijo. Uporabite celotni zaslon brskalnika ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft brez povezave ne odpre

ModelCraft se odpre brez povezave le, če je bil v tem brskalniku shranjen za delo brez povezave: gumb v orodni vrstici aplikacije mora kazati {{ui:Pripravljeno za delo brez povezave}}. Odprite ga na spletu in kliknite {{ui:Shrani za delo brez povezave}}. Če gumb kaže {{ui:Shranjevanje ni uspelo}}, ga znova kliknite na boljši povezavi; {{ui:Delo brez povezave ni na voljo}} pomeni, da to okno (zasebno okno ali upravljani računalnik) ne more hraniti kopije. Glejte [Delo brez povezave](common:offline).
