---
title: Otvaranje, čuvanje, uvoz i izvoz
summary: ModelCraft datoteka, šta možete da uvezete i izvezete, gde datoteke idu i šta se menja van mreže i između pregledača.
keywords: otvori, sačuvaj, uvezi, izvezi, datoteka, 3dm, skp, oporavi, automatsko čuvanje, nedavno, računar, otvori u 3D, predaja, preuzmi, modelcraft datoteka, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formati, van mreže, sačuvaj kao
from: 3f09ab72
---

ModelCraft čita i upisuje datoteke na vašem računaru. Ništa se ne otprema: datoteka koju otvorite čita se unutar vašeg pregledača, a datoteka koju sačuvate je preuzimanje. Pogledajte [Gde idu vaše datoteke](common:your-files).

## Formati ukratko

| Format | Otvaranje | Uvoz | Izvoz | Čemu služi |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | da | ne | {{ui:Save}} | Vaša radna datoteka. Čuva sve. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | da | da | {{ui:Save as}}, {{ui:Export}} | Programi za renderovanje i sastavljanje scena. ModelCraftov sopstveni USD čuva sve. Pogledajte [Čuvanje, otvaranje i izvoz USD-a](topic:usd). |
| SketchUp (`.skp`) | ne | da | ne | Uvoz modela iz SketchUp-a. Čuva grupe, komponente, boje, teksture na površinama, oznake i meke ivice. Pogledajte [Uvoz SKP modela](topic:import-sketchup-files). |
| Collada (`.dae`) | ne | da | da | Razmena modela sa drugim 3D alatima. Čuva grupe, komponente i boje. |
| OBJ (`.obj`) | ne | da | da | Programi za renderovanje i vizualizaciju. |
| glTF (`.glb`, `.gltf`) | ne | da | samo `.glb` | Web pregledači, pogoni za igre, AR. |
| STL (`.stl`) | ne | da | da | 3D štampanje (u milimetrima). |
| PLY (`.ply`) | ne | da | da | Mreže sa bojama: skeniranja, štampanje u bojama. |
| FBX (`.fbx`) | ne | da | ne | Modeli iz programa za animaciju i igre (FBX 2011 i noviji). |
| Alembic (`.abc`) | ne | da | ne | Keš geometrije, na prvom uzorku. |
| STEP (`.step`, `.stp`) | ne | da | ne | Delovi iz programa za modelovanje delova i od dobavljača, kao zatvorene mreže u pravoj veličini. Pogledajte [Formati datoteka](topic:formats). |
| `.3dm` | ne | da | ne | NURBS modeli: polipovršine, mreže, krive, blokovi i slojevi, kao mreže, ivice, komponente i oznake. Pogledajte [Uvoz .3dm modela](topic:import-3dm-files). |
| 3MF (`.3mf`) | ne | ne | da | 3D štampanje, sa bojama (u milimetrima). Iz {{ui:Check for 3D printing (STL or 3MF)…}}: pogledajte [Pripremi model za 3D štampanje](topic:print-3d). |
| IFC (`.ifc`) | ne | ne | da | BIM programi i BimCraft. |
| DWG (`.dwg`) | ne | da | da | Situacioni plan ili plan sprata za modelovanje; slanje modela u CAD program. |
| DXF (`.dxf`) | ne | da | da | Isto, za bilo koji CAD program. |

[Formati datoteka detaljno](topic:formats) navodi tačno šta svaki format čuva, a šta izostavlja.

## ModelCraft datoteka

`.modelcraft` datoteka čuva ceo model: geometriju, grupe, komponente, vodilice, scene, jedinice, kao i kameru i stil koje ste koristili kad ste sačuvali. Ne čuva istoriju opozivanja.

### Otvaranje modela

1. Kliknite {{ui:Open}} u grupi {{ui:File}} ili pritisnite {{key:Mod+O}}.
2. Ako model na ekranu ima nesačuvane izmene, ModelCraft pita: „Ovaj model ima izmene koje nisu sačuvane. Prvo sačuvati kopiju?“ Izaberite {{ui:Save a copy}}, {{ui:Discard changes}} ili {{ui:Cancel}}.
3. Izaberite `.modelcraft` datoteku.

Model se otvara u jedinicama u kojima je sačuvan, sa kamerom kojom je sačuvan. Takođe možete da prevučete `.modelcraft` datoteku na 3D prikaz ili da kliknete jednu na listi nedavnih datoteka na početnoj kartici (pregledači koji mogu ponovo da otvore datoteku i desktop aplikacija).

:::desktop
U desktop aplikaciji, dvoklik na `.modelcraft` datoteku otvara je u ModelCraft-u, a isto važi za **Otvori pomoću** kod Collada, OBJ, glTF, DWG ili DXF datoteke (uvozi se u novi model).
:::

### Čuvanje modela

Kliknite {{ui:Save}} ili pritisnite {{key:Mod+S}}. Pregledač preuzima `<name>.modelcraft`, gde je ime datoteka koju ste otvorili, ili „Untitled“ za novi model.

:::desktop
U desktop aplikaciji, {{ui:Save}} upisuje otvorenu datoteku na istom mestu. Novi model pita gde da se sačuva.
:::

- {{ui:Save as}} ({{key:Mod+Shift+S}}) čuva kopiju kao `.modelcraft` datoteku ili kao [USD](topic:usd); tamo gde pregledač može, traži ime i mesto. Inače preimenujte preuzetu datoteku: sledeće čuvanje posle otvaranja preimenovane datoteke koristi novo ime.
- Svako čuvanje je novo preuzimanje. Zavisno od podešavanja pregledača, ide direktno u fasciklu za preuzimanja ili pita gde da se sačuva. Ako datoteka sa tim imenom već postoji, većina pregledača dodaje broj, na primer `Untitled (1).modelcraft`.

:::chromium
Da biste birali fasciklu svaki put, otvorite podešavanja pregledača, potražite „preuzimanja“ i uključite opciju da pita gde da se sačuva svaka datoteka pre preuzimanja.
:::

:::firefox
Da biste birali fasciklu svaki put, otvorite **Podešavanja**, zatim **Opšte**, pa pod „Preuzimanja“ izaberite „Uvek pitaj gde da čuva datoteke“.
:::

:::safari
Da biste promenili gde idu preuzimanja, otvorite **Safari**, zatim **Podešavanja**, zatim **Opšte**, i podesite „Lokacija za preuzimanje datoteka“.
:::

### Pokretanje novog modela

Kliknite {{ui:New}}. Ako postoje nesačuvane izmene, ModelCraft prvo pita. Novi model počinje prazan, u jedinici za vaš region (stope i inči u Sjedinjenim Državama, milimetri drugde), bez scena.

### Ako se pregledač zatvori pre čuvanja

ModelCraft čuva kopiju nesačuvanog rada u vašem pregledaču nekoliko sekundi posle svake izmene. Kopija se upisuje u pozadini, pa veliki model ne usporava rad dok se čuva. Ako se kartica ili pregledač zatvore pre čuvanja, sledeći put kad otvorite ModelCraft pita „Oporaviti rad?“. Oporavak otvara model kakav je bio, još nesačuvan u datoteku: sačuvajte ga da biste ga zadržali. Pogledajte [Oporavak rada](common:recover).

### Iz CadCraft-a: Otvori u ModelCraft-u

U CadCraft aplikaciji za crtanje, **Pogled**, zatim **Više**, zatim **Otvori u ModelCraft-u** prosleđuje otvoreni crtež ModelCraft-u, u novoj kartici, kao DWG. Stiže onako kako stiže uvezeni DWG: linije na tlu, u grupi, spremne za modelovanje. Ništa se ne otprema; datoteka prolazi kroz sopstveno skladište vašeg pregledača.

## Uvoz

Uvoz dodaje datoteku u model koji imate otvoren; ne zamenjuje ga.

1. Kliknite {{ui:Import}} u grupi {{ui:File}} ili prevucite datoteku na 3D prikaz.
2. Izaberite SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ili DXF datoteku.

   Datoteka stiže kao **jedna grupa**, izabrana, i prikaz zumira da je prikaže. Statusna traka kaže šta je stiglo i navodi šta nije moglo da se uveze, na primer „Nije uvezeno: 2 teksture“.

3. Da biste direktno radili na njenoj geometriji, dvaput kliknite grupu da uđete u nju, ili kliknite {{ui:Explode}}.

Nekoliko stvari koje treba znati:

- **Veličina i smer „gore“:** Collada datoteke navode svoju jedinicu i koja osa je gore, a ModelCraft ih preračunava. glTF je uvek u metrima. OBJ datoteke ne nose jedinicu: ModelCraft ih čita kao metre, sa Y osom gore. Ako OBJ stigne 1000 puta veći ili manji, koristite [Skaliraj](topic:rotate-scale) sa faktorom kao što su `0.001` ili `1000`.
- **DWG i DXF** stižu kao linije (ivice) na tlu, a ne kao površine. Ako crtež ne navodi svoju jedinicu, pojavljuje se dijalog naslovljen „Jedinice crteža“ koji pita šta je jedna jedinica crteža. Pogledajte [Modelovanje na situacionom planu](topic:site-plan).
- **Ograničenja:** datoteke preko 300 MB se odbijaju pri uvozu, a preko 200 MB pri otvaranju. Datoteke sa više od 2 miliona tačaka ili površina odbijaju se kao prevelike. OBJ preko 64 MB se odbija pre čitanja. Tekstualne datoteke (Collada, OBJ, ASCII STL, USD tekst) čitaju se u delovima od oko 4 MB, tako da nijedan blok teksta ne drži celu datoteku; OBJ od 16 MB koristio je oko 0.5 GB memorije dok se otvarao u našem testu.

## Izvoz

1. Kliknite {{ui:Export}} u grupi {{ui:File}}.
2. Izaberite format: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL for printing (.stl, millimeters)}}, {{ui:PLY with colours (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC for BimCraft (.ifc)}}, {{ui:DWG for CAD (.dwg, 2004)}} ili {{ui:DXF for CAD (.dxf, R12)}}.

Pregledač preuzima datoteku, nazvanu kao model. Izvozi se ceo model, a ne samo izbor. glTF, Collada i OBJ datoteke upisuju se u pozadini, pa ModelCraft radi dalje dok veliki model izvozi; preuzimanje počinje kad je datoteka spremna. Prazan model se ne izvozi: „Model je prazan: prvo nacrtajte nešto.“ Pogledajte [Izvoz modela za druge programe](topic:export-model).

## Na mreži i van mreže

ModelCraft radi na vašem računaru, pa modelovanje, otvaranje, čuvanje, uvoz i izvoz rade bez veze kad se aplikacija jednom učita.

Da biste otvorili ModelCraft bez ikakve veze, sačuvajte ga za rad van mreže dok ste na mreži:

1. Kliknite {{ui:Save for offline}} u traci aplikacije na vrhu.
2. Dugme broji („Čuvanje 40 od 212“) dok se čuva. ModelCraft čuva svoje datoteke (među njima i čitač DWG-a), ovu pomoć i 3D biblioteku, pa to može da potraje.
3. Kad dugme glasi {{ui:Offline ready}}, ModelCraft se otvara sa iste adrese bez veze, a uvoz DWG-a radi i van mreže.

Kliknite {{ui:Offline ready}} kasnije za {{ui:Save again (get the newest version)}} ili {{ui:Remove the offline copy}}. Ako dugme glasi {{ui:Could not save}}, neke datoteke nisu preuzete: proverite vezu i kliknite ga da pokušate ponovo. {{ui:Offline not available}} znači da ovaj prozor pregledača ne može da sačuva kopiju (privatni prozori i neki upravljani računari). Pogledajte [Rad van mreže](common:offline).

Čuvanje u oblaku još nije dostupno. Svaki model se nalazi tamo gde ga sačuvate.

:::offline
Van ste mreže. Možete da nastavite da modelujete i čuvate. Osim ako traka aplikacije ne prikazuje {{ui:Offline ready}}, nemojte ponovo učitavati ovu karticu dok ponovo ne budete na mreži.
:::

## Desktop aplikacija

:::desktop
Koristite ModelCraft u CadCraft Studiu, desktop aplikaciji sa svih osam aplikacija. Datoteke se otvaraju i čuvaju tamo gde izaberete.
:::

:::web
ModelCraft radi u pregledaču na Mac, Windows i Linux, i u CadCraft Studiu, desktop aplikaciji sa svih osam aplikacija u jednoj instalaciji, sa getcadcraft.com/download.
:::
