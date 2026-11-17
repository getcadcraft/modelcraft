---
title: Otvaranje, spašavanje, uvoz i izvoz
summary: ModelCraft datoteka, šta možete uvesti i poslati van, gdje idu datoteke i šta se mijenja van mreže i između pregledača.
keywords: otvori, spasi, uvezi, izvezi, datoteka, oporavi, automatsko spašavanje, nedavno, desktop, otvori u 3D, predaja, preuzimanje, modelcraft datoteka, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, 3dm, skp, formati, van mreže, spasi kao
from: 3f09ab72
---

ModelCraft čita i piše datoteke na vašem računaru. Ništa se ne otprema: datoteka koju otvorite čita se unutar vašeg pregledača, a datoteka koju spasite je preuzimanje. Pogledajte [Gdje idu vaše datoteke](common:your-files).

## Formati ukratko

| Format | Otvori | Uvezi | Izvezi | Čemu služi |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | da | ne | {{ui:Save}} | Vaša radna datoteka. Čuva sve. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | da | da | {{ui:Save as}}, {{ui:Export}} | Programi za renderovanje i sastavljanje scena. ModelCraftov USD čuva sve. Pogledajte [Spasi, otvori i izvezi USD](topic:usd). |
| SketchUp (`.skp`) | ne | da | ne | Uvoz modela iz SketchUp-a. Čuva grupe, komponente, boje, teksture na površinama, oznake i meke ivice. Pogledajte [Uvezi SKP model](topic:import-sketchup-files). |
| Collada (`.dae`) | ne | da | da | Razmjena modela s drugim 3D modelarima. Čuva grupe, komponente i boje. |
| OBJ (`.obj`) | ne | da | da | Programi za renderovanje i vizualizaciju. |
| glTF (`.glb`, `.gltf`) | ne | da | samo `.glb` | Web pregledači, pogonski sistemi za igre, AR. |
| STL (`.stl`) | ne | da | da | 3D štampanje (u milimetrima). |
| PLY (`.ply`) | ne | da | da | Mreže s bojama: skenovi, štampanje u boji. |
| FBX (`.fbx`) | ne | da | ne | Modeli iz programa za animaciju i igre (FBX 2011 i noviji). |
| Alembic (`.abc`) | ne | da | ne | Keš geometrije, na prvom uzorku. |
| STEP (`.step`, `.stp`) | ne | da | ne | Dijelovi iz programa za modelovanje dijelova i od dobavljača, kao zatvorene mreže u pravoj veličini. Pogledajte [Formati datoteka](topic:formats). |
| `.3dm` | ne | da | ne | NURBS modeli: polipovršine, mreže, krive, blokovi i slojevi, kao mreže, ivice, komponente i oznake. Pogledajte [Uvezi .3dm model](topic:import-3dm-files). |
| 3MF (`.3mf`) | ne | ne | da | 3D štampanje, s bojama (u milimetrima). Iz {{ui:Check for 3D printing (STL or 3MF)…}}: pogledajte [Pripremi model za 3D štampanje](topic:print-3d). |
| IFC (`.ifc`) | ne | ne | da | BIM programi i BimCraft. |
| DWG (`.dwg`) | ne | da | da | Situacioni plan ili plan sprata za modelovanje; slanje modela u CAD program. |
| DXF (`.dxf`) | ne | da | da | Isto, za bilo koji CAD program. |

[Formati datoteka detaljno](topic:formats) navodi tačno šta svaki format čuva, a šta ispušta.

## ModelCraft datoteka

Datoteka `.modelcraft` čuva cijeli model: geometriju, grupe, komponente, vodilice, scene, jedinice, te kameru i stil koje ste koristili kad ste spasili. Ne čuva historiju poništavanja.

### Otvaranje modela

1. Kliknite {{ui:Open}} u grupi {{ui:File}}, ili pritisnite {{key:Mod+O}}.
2. Ako model na ekranu ima nespašene promjene, ModelCraft pita: "Ovaj model ima promjene koje nisu spašene. Želite li prvo spasiti kopiju?" Odaberite {{ui:Save a copy}}, {{ui:Discard changes}} ili {{ui:Cancel}}.
3. Odaberite datoteku `.modelcraft`.

Model se otvara u jedinicama u kojima je spašen, s kamerom s kojom je spašen. Također možete prevući datoteku `.modelcraft` na 3D prikaz, ili kliknuti jednu na listi nedavnih datoteka na početnoj kartici (pregledači koji mogu ponovo otvoriti datoteku, i desktop aplikacija).

:::desktop
U desktop aplikaciji, dvoklik na datoteku `.modelcraft` otvara je u ModelCraft-u, a isto radi i **Otvori pomoću** na Collada, OBJ, glTF, DWG ili DXF datoteci (uvozi se u novi model).
:::

### Spašavanje modela

Kliknite {{ui:Save}} ili pritisnite {{key:Mod+S}}. Pregledač preuzima `<name>.modelcraft`, gdje je ime datoteka koju ste otvorili, ili "Bez naziva" za novi model.

:::desktop
U desktop aplikaciji, {{ui:Save}} upisuje datoteku koju ste otvorili na njeno mjesto. Novi model pita gdje da se spasi.
:::

- {{ui:Save as}} ({{key:Mod+Shift+S}}) spasi kopiju kao datoteku `.modelcraft` ili kao [USD](topic:usd); gdje pregledač to može, pita za ime i mjesto. Inače preimenujte preuzetu datoteku: sljedeće spašavanje nakon što otvorite preimenovanu datoteku koristi novo ime.
- Svako spašavanje je novo preuzimanje. Zavisno od postavki pregledača, ide direktno u folder za preuzimanja ili pita gdje da spasi. Ako datoteka s tim imenom već postoji, većina pregledača dodaje broj, na primjer `Untitled (1).modelcraft`.

:::chromium
Da svaki put birate folder, otvorite postavke pregledača, potražite "preuzimanja" i uključite "Pitaj gdje da se spasi svaka datoteka prije preuzimanja".
:::

:::firefox
Da svaki put birate folder, otvorite **Postavke**, zatim **Općenito**, i pod "Preuzimanja" izaberite "Uvijek pitaj gdje da spasim datoteke".
:::

:::safari
Da promijenite gdje idu preuzimanja, otvorite **Safari**, zatim **Postavke**, zatim **Općenito**, i podesite "Lokacija za preuzimanje datoteka".
:::

### Pokretanje novog modela

Kliknite {{ui:New}}. Ako ima nespašenih promjena, ModelCraft prvo pita. Novi model počinje prazan, u jedinici vašeg jezika (stope i inči u Sjedinjenim Državama, milimetri drugdje), bez scena.

### Ako se pregledač zatvori prije spašavanja

ModelCraft čuva kopiju nespašenog rada u vašem pregledaču nekoliko sekundi nakon svake promjene. Kopija se piše u pozadini, pa veliki model ne čeka dok se čuva. Ako se kartica ili pregledač zatvore prije spašavanja, sljedeći put kad otvorite ModelCraft pita: "Oporaviti vaš rad?". Oporavak otvara model kakav je bio, još nespašen u datoteku: spasite ga da ga zadržite. Pogledajte [Oporavak rada](common:recover).

### Iz CadCraft: Otvori u ModelCraft

U aplikaciji za crtanje CadCraft, **Pogled**, zatim **Više**, zatim **Otvori u ModelCraft** prosljeđuje otvoreni crtež ModelCraftu u novoj kartici, kao DWG. Stiže na isti način kao uvezeni DWG: linije na tlu, u grupi, spremne za modelovanje. Ništa se ne otprema; datoteka prolazi kroz vlastitu pohranu vašeg pregledača.

## Uvoz

Uvoz dodaje datoteku modelu koji imate otvoren; ne zamjenjuje ga.

1. Kliknite {{ui:Import}} u grupi {{ui:File}}, ili prevucite datoteku na 3D prikaz.
2. Odaberite SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ili DXF datoteku.

   Datoteka stiže kao **jedna grupa**, odabrana, i prikaz se zumira da je pokaže. Statusna traka kaže šta je stiglo i navodi šta nije moglo da se uveze, npr. "Nije uvezeno: 2 teksture".

3. Da radite direktno na njenoj geometriji, dvaput kliknite grupu da uđete u nju, ili kliknite {{ui:Explode}}.

Neke stvari treba znati:

- **Veličina i smjer gore:** Collada datoteke navode svoju jedinicu i koja osa je gore, a ModelCraft ih pretvara. glTF je uvijek u metrima. OBJ datoteke ne nose jedinicu: ModelCraft ih čita kao metre, s Y osom gore. Ako OBJ dođe 1000 puta prevelik ili premali, koristite [Skaliraj](topic:rotate-scale) s faktorom kao `0.001` ili `1000`.
- **DWG i DXF** stižu kao linije (ivice) na tlu, a ne kao površine. Ako crtež ne navodi svoju jedinicu, dijalog pod nazivom "Jedinice crteža" pita šta je jedna jedinica crteža. Pogledajte [Modelovanje na situacionom planu](topic:site-plan).
- **Ograničenja:** datoteke veće od 300 MB se odbijaju za uvoz, a veće od 200 MB za otvaranje. Datoteke s više od 2 miliona vrhova ili površina se odbijaju kao prevelike. OBJ veći od 64 MB se odbija prije čitanja. Tekstualne datoteke (Collada, OBJ, ASCII STL, USD tekst) čitaju se dio po dio, oko 4 MB, tako da nijedan blok teksta ne drži cijelu datoteku; OBJ od 16 MB koristio je oko 0.5 GB memorije dok se otvarao u našem testu.

## Izvoz

1. Kliknite {{ui:Export}} u grupi {{ui:File}}.
2. Odaberite format: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL for printing (.stl, millimeters)}}, {{ui:PLY with colours (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC for BimCraft (.ifc)}}, {{ui:DWG for CAD (.dwg, 2004)}} ili {{ui:DXF for CAD (.dxf, R12)}}.

Pregledač preuzima datoteku, nazvanu kao model. Izvozi se cijeli model, ne samo odabir. glTF, Collada i OBJ datoteke se pišu u pozadini, pa ModelCraft radi dalje dok se veliki model izvozi; preuzimanje počinje kad je datoteka spremna. Prazan model se ne izvozi: "Model je prazan: prvo nešto nacrtajte." Pogledajte [Izvezi model za druge programe](topic:export-model).

## Na mreži i van mreže

ModelCraft radi na vašem računaru, pa modelovanje, otvaranje, spašavanje, uvoz i izvoz rade bez veze kad se aplikacija učita.

Da otvorite ModelCraft bez ikakve veze, spasite ga za rad van mreže dok ste na mreži:

1. Kliknite {{ui:Save for offline}} u traci aplikacije na vrhu.
2. Dugme broji ("Spašavanje 40 od 212") dok se čuva. ModelCraft spašava svoje datoteke (među njima i čitač DWG-a), ovu pomoć i biblioteku 3D objekata, pa može potrajati.
3. Kad dugme pokaže {{ui:Offline ready}}, ModelCraft se otvara s iste adrese bez veze, a uvoz DWG-a radi i van mreže.

Kliknite {{ui:Offline ready}} kasnije za {{ui:Save again (get the newest version)}} ili {{ui:Remove the offline copy}}. Ako dugme pokaže {{ui:Could not save}}, neke datoteke nisu preuzete: provjerite vezu i kliknite ponovo. {{ui:Offline not available}} znači da ovaj prozor pregledača ne može zadržati kopiju (privatni prozori i neki upravljani računari). Pogledajte [Rad van mreže](common:offline).

Oblak za spašavanje još nije dostupan. Svaki model se nalazi tamo gdje ga spasite.

:::offline
Van ste mreže. Možete nastaviti modelovanje i spašavanje. Osim ako traka aplikacije ne pokazuje {{ui:Offline ready}}, ne osvježavajte ovu karticu dok ponovo ne budete na mreži.
:::

## Desktop aplikacija

:::desktop
Koristite ModelCraft u CadCraft Studio, desktop aplikaciji sa svih osam aplikacija. Datoteke se otvaraju i spašavaju tamo gdje izaberete.
:::

:::web
ModelCraft radi u pregledaču na Mac, Windows i Linux, i u CadCraft Studio, desktop aplikaciji sa svih osam aplikacija u jednoj instalaciji, sa getcadcraft.com/download.
:::
