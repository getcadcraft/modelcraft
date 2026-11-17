---
title: Otvaranje, spremanje, uvoz i izvoz
summary: ModelCraft datoteka, što možete uvesti i izvesti, gdje datoteke završavaju te što se mijenja izvan mreže i između preglednika.
keywords: otvori, spremi, uvezi, izvezi, datoteka, 3dm, skp, oporavak, automatsko spremanje, nedavno, desktop, otvori u 3D, predaja, preuzmi, ModelCraft datoteka, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formati, offline, spremi kao
from: 3f09ab72
---

ModelCraft čita i zapisuje datoteke na vašem računalu. Ništa se ne učitava na poslužitelj: datoteka koju otvorite čita se unutar vašeg preglednika, a datoteka koju spremite preuzima se na vaše računalo. Pogledajte [Gdje idu vaše datoteke](common:your-files).

## Pregled formata

| Format | Otvaranje | Uvoz | Izvoz | Namjena |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | da | ne | {{ui:Spremi}} | Vaša radna datoteka. Čuva sve. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | da | da | {{ui:Spremi kao}}, {{ui:Izvezi}} | Programi za prikaz i sastavljanje scena. Vlastiti USD programa ModelCraft čuva sve. Pogledajte [Spremanje, otvaranje i izvoz USD-a](topic:usd). |
| SketchUp (`.skp`) | ne | da | ne | Uvoz modela iz SketchUpa. Čuva grupe, komponente, boje, teksture na plohama, oznake i meke bridove. Pogledajte [Uvoz SKP modela](topic:import-sketchup-files). |
| Collada (`.dae`) | ne | da | da | Razmjena modela s drugim 3D programima za modeliranje. Čuva grupe, komponente i boje. |
| OBJ (`.obj`) | ne | da | da | Programi za prikaz i vizualizaciju. |
| glTF (`.glb`, `.gltf`) | ne | da | samo `.glb` | Web preglednici, pogoni za igre, AR. |
| STL (`.stl`) | ne | da | da | 3D ispis (u milimetrima). |
| PLY (`.ply`) | ne | da | da | Mreže s bojama: skeniranja, ispis u boji. |
| FBX (`.fbx`) | ne | da | ne | Modeli iz programa za animaciju i igre (FBX 2011 i noviji). |
| Alembic (`.abc`) | ne | da | ne | Predmemorije geometrije, u prvom uzorku. |
| STEP (`.step`, `.stp`) | ne | da | ne | Dijelovi iz programa za modeliranje dijelova i od dobavljača, kao zatvorene mreže u stvarnoj veličini. Pogledajte [Formati datoteka detaljno](topic:formats). |
| `.3dm` | ne | da | ne | NURBS modeli: polipovršine, mreže, krivulje, blokovi i slojevi, kao mreže, bridovi, komponente i oznake. Pogledajte [Uvoz .3dm modela](topic:import-3dm-files). |
| 3MF (`.3mf`) | ne | ne | da | 3D ispis, s bojama (u milimetrima). Iz {{ui:Provjera za 3D ispis (STL ili 3MF)…}}: pogledajte [Priprema modela za 3D ispis](topic:print-3d). |
| IFC (`.ifc`) | ne | ne | da | BIM programi i BimCraft. |
| DWG (`.dwg`) | ne | da | da | Situacijski ili tlocrtni plan za modeliranje; slanje modela u CAD program. |
| DXF (`.dxf`) | ne | da | da | Isto, za bilo koji CAD program. |

[Formati datoteka detaljno](topic:formats) popisuje što svaki format čuva, a što izostavlja.

## ModelCraft datoteka

Datoteka `.modelcraft` čuva cijeli model: geometriju, grupe, komponente, pomoćne linije, scene, jedinice te kameru i stil koje ste koristili kad ste spremili. Ne čuva povijest poništavanja.

### Otvaranje modela

1. Kliknite {{ui:Otvori}} u grupi {{ui:Datoteka}} ili pritisnite {{key:Mod+O}}.
2. Ako model na zaslonu ima nespremljene promjene, ModelCraft pita: „Ovaj model ima nespremljene promjene. Prvo spremite kopiju?“ Odaberite {{ui:Spremi kopiju}}, {{ui:Odbaci promjene}} ili {{ui:Odustani}}.
3. Odaberite datoteku `.modelcraft`.

Model se otvara u jedinicama u kojima je spremljen, s kamerom s kojom je spremljen. Datoteku `.modelcraft` možete i povući na 3D prikaz ili kliknuti na jednu na popisu nedavnih datoteka na početnoj kartici (preglednici koji mogu ponovno otvoriti datoteku i desktop aplikacija).

:::desktop
U desktop aplikaciji dvostruki klik na `.modelcraft` datoteku otvara je u ModelCraftu, kao i **Otvori pomoću** na Collada, OBJ, glTF, DWG ili DXF datoteci (uvozi se u novi model).
:::

### Spremanje modela

Kliknite {{ui:Spremi}} ili pritisnite {{key:Mod+S}}. Preglednik preuzima `<name>.modelcraft`, gdje je naziv datoteka koju ste otvorili ili „Untitled“ za novi model.

:::desktop
U desktop aplikaciji {{ui:Spremi}} zapisuje datoteku koju ste otvorili na istom mjestu. Novi model traži da odaberete gdje ga spremiti.
:::

- {{ui:Spremi kao}} ({{key:Mod+Shift+S}}) sprema kopiju kao `.modelcraft` datoteku ili kao [USD](topic:usd); ako preglednik to može, traži naziv i mjesto. Inače preimenujte preuzetu datoteku: sljedeće spremanje nakon što otvorite preimenovanu datoteku koristi novi naziv.
- Svako spremanje je novo preuzimanje. Ovisno o postavkama preglednika, ide ravno u mapu za preuzimanja ili pita gdje spremiti. Ako datoteka s tim nazivom već postoji, većina preglednika dodaje broj, npr. `Untitled (1).modelcraft`.

:::chromium
Da biste svaki put birali mapu, otvorite postavke preglednika, potražite „preuzimanja“ i uključite „Pitaj gdje spremiti svaku datoteku prije preuzimanja“.
:::

:::firefox
Da biste svaki put birali mapu, otvorite **Postavke**, zatim **Općenito**, i pod „Preuzimanja“ odaberite „Uvijek pitaj gdje spremiti datoteke“.
:::

:::safari
Da biste promijenili mjesto preuzimanja, otvorite **Safari**, zatim **Postavke**, zatim **Općenito**, i postavite „Lokacija za preuzimanje datoteka“.
:::

### Novi model

Kliknite {{ui:Novo}}. Ako postoje nespremljene promjene, ModelCraft prvo pita. Novi model počinje prazan, u jedinici vaših regionalnih postavki (stope i palci u Sjedinjenim Državama, milimetri drugdje), bez scena.

### Ako se preglednik zatvori prije spremanja

ModelCraft nekoliko sekundi nakon svake promjene čuva kopiju nespremljenog rada u vašem pregledniku. Kopija se zapisuje u pozadini, pa veliki model ne usporava rad dok se čuva. Ako se kartica ili preglednik zatvore prije spremanja, sljedeći put kad otvorite ModelCraft pita „Oporaviti rad?“. Oporavak otvara model kakav je bio, još nespremljen u datoteku: spremite ga da ga sačuvate. Pogledajte [Oporavak vašeg rada](common:recover).

### Iz CadCrafta: Otvori u ModelCraft

U crtaćem programu CadCraft, **Prikaz**, zatim **Više**, zatim **Otvori u ModelCraft** otvara otvoreni crtež u ModelCraftu, u novoj kartici, kao DWG. Stiže kao uvezeni DWG: linije na tlu, u grupi, spremne za modeliranje. Ništa se ne učitava na poslužitelj; datoteka prolazi kroz vlastitu pohranu vašeg preglednika.

## Uvoz

Uvoz dodaje datoteku u otvoreni model; ne zamjenjuje ga.

1. Kliknite {{ui:Uvezi}} u grupi {{ui:Datoteka}} ili ispustite datoteku na 3D prikaz.
2. Odaberite SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ili DXF datoteku.

   Datoteka stiže kao **jedna grupa**, odabrana, a prikaz se zumira da je pokaže. Statusna traka kaže što je stiglo i navodi što nije moglo biti uvezeno, npr. „Nije uvezeno: 2 teksture“.

3. Za izravan rad s njezinom geometrijom dvaput kliknite grupu da uređujete unutar nje ili kliknite {{ui:Rastavi}}.

Neke stvari treba znati:

- **Veličina i smjer prema gore:** Collada datoteke navode svoju jedinicu i koja os je gore, a ModelCraft ih pretvara. glTF je uvijek u metrima. OBJ datoteke nemaju jedinicu: ModelCraft ih čita kao metre, s Y osi prema gore. Ako OBJ dođe 1000 puta prevelik ili premalen, upotrijebite [Skaliraj](topic:rotate-scale) s faktorom poput `0.001` ili `1000`.
- **DWG i DXF** dolaze kao linije (bridovi) na tlu, a ne kao plohe. Ako crtež ne navodi svoju jedinicu, dijaloški okvir „Jedinice crteža“ pita što je jedna jedinica crteža. Pogledajte [Modeliranje na situacijskom planu](topic:site-plan).
- **Ograničenja:** datoteke veće od 300 MB ne mogu se uvesti, a veće od 200 MB ne mogu se otvoriti. Datoteke s više od 2 milijuna vrhova ili ploha odbijaju se kao prevelike. OBJ datoteka veća od 64 MB odbija se prije čitanja. Tekstualne datoteke (Collada, OBJ, ASCII STL, USD tekst) čitaju se u dijelovima, oko 4 MB, pa nijedan blok teksta ne sadrži cijelu datoteku; 16 MB OBJ datoteka koristila je oko 0.5 GB memorije dok se otvarala u našem testu.

## Izvoz

1. Kliknite {{ui:Izvezi}} u grupi {{ui:Datoteka}}.
2. Odaberite format: {{ui:glTF binarni (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL za ispis (.stl, milimetri)}}, {{ui:PLY s bojama (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC za BimCraft (.ifc)}}, {{ui:DWG za CAD (.dwg, 2004)}} ili {{ui:DXF za CAD (.dxf, R12)}}.

Preglednik preuzima datoteku, nazvanu kao model. Izvozi se cijeli model, a ne samo odabir. glTF, Collada i OBJ datoteke pišu se u pozadini, pa ModelCraft radi dok se velik model izvozi; preuzimanje počinje kad je datoteka gotova. Prazan model se ne izvozi: „Model je prazan: prvo nacrtajte nešto.“ Pogledajte [Izvoz modela za druge programe](topic:export-model).

## Online i offline

ModelCraft radi na vašem računalu, pa modeliranje, otvaranje, spremanje, uvoz i izvoz rade bez veze kad se aplikacija jednom učita.

Za otvaranje ModelCrafta bez ikakve veze spremite ga za rad izvan mreže dok ste na mreži:

1. Kliknite {{ui:Spremi za offline}} na traci aplikacije pri vrhu.
2. Gumb broji („Spremanje 40 od 212“) dok sprema. ModelCraft sprema svoje datoteke (među njima i čitač DWG-a), ovu pomoć i 3D biblioteku, pa to može potrajati.
3. Kad gumb pokazuje {{ui:Spremno za offline}}, ModelCraft se otvara s iste adrese bez veze, a uvoz DWG-a radi i izvan mreže.

Kasnije kliknite {{ui:Spremno za offline}} za {{ui:Spremi ponovno (preuzmi najnoviju verziju)}} ili {{ui:Ukloni offline kopiju}}. Ako gumb pokazuje {{ui:Spremanje nije uspjelo}}, neke datoteke nisu preuzete: provjerite vezu i kliknite ga za ponovni pokušaj. {{ui:Offline nije dostupan}} znači da ovaj prozor preglednika ne može zadržati kopiju (privatni prozori i neka upravljana računala). Pogledajte [Rad izvan mreže](common:offline).

Spremanje u oblak još nije dostupno. Svaki model ostaje tamo gdje ga spremite.

:::offline
Izvan ste mreže. Možete nastaviti modelirati i spremati. Osim ako traka aplikacije ne pokazuje {{ui:Spremno za offline}}, ne ponovno učitavajte ovu karticu dok ponovno ne budete na mreži.
:::

## Desktop aplikacija

:::desktop
Koristite ModelCraft u CadCraft Studiju, desktop aplikaciji sa svih osam aplikacija. Datoteke se otvaraju i spremaju tamo gdje odaberete.
:::

:::web
ModelCraft radi u pregledniku na Macu, Windowsu i Linuxu te u CadCraft Studiju, desktop aplikaciji sa svih osam aplikacija u jednoj instalaciji, s getcadcraft.com/download.
:::
