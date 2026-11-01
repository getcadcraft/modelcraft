---
title: Otvaranje, spremanje, uvoz i izvoz
summary: Datoteka ModelCrafta, što možete unijeti i poslati van, kamo idu datoteke te što se mijenja offline i među preglednicima.
keywords: otvaranje, spremanje, uvoz, izvoz, datoteka, 3dm, skp, oporavak, automatsko spremanje, nedavno, desktop, otvori u 3d, primopredaja, preuzimanje, modelcraft datoteka, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formati, offline, spremi kao
from: 0b4896d1
---

ModelCraft čita i piše datoteke na vašem računalu. Ništa se ne šalje na poslužitelj: datoteka koju otvorite čita se unutar vašeg preglednika, a datoteka koju spremite je preuzimanje. Pogledajte [Kamo idu vaše datoteke](common:your-files).

## Formati ukratko

| Format | Otvaranje | Uvoz | Izvoz | Čemu služi |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | da | ne | {{ui:Spremi}} | Vaša radna datoteka. Čuva sve. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | da | da | {{ui:Spremi kao}}, {{ui:Izvezi}} | Programi za renderiranje i sastavljanje scena. ModelCraftov vlastiti USD čuva sve. Pogledajte [Spremanje, otvaranje i izvoz USD-a](topic:usd). |
| SketchUp (`.skp`) | ne | da | ne | Unos modela iz SketchUpa. Čuva grupe, komponente, boje, teksture na plohama, oznake i meke bridove. Pogledajte [Uvezite SKP model](topic:import-sketchup-files). |
| Collada (`.dae`) | ne | da | da | Razmjena modela s drugim 3D modelarima. Čuva grupe, komponente i boje. |
| OBJ (`.obj`) | ne | da | da | Programi za renderiranje i vizualizaciju. |
| glTF (`.glb`, `.gltf`) | ne | da | samo `.glb` | Web preglednici modela, pogoni za igre, AR. |
| STL (`.stl`) | ne | da | da | 3D ispis (u milimetrima). |
| PLY (`.ply`) | ne | da | da | Mreže s bojama: skeniranja, ispis u boji. |
| FBX (`.fbx`) | ne | da | ne | Modeli iz programa za animaciju i igre (FBX 2011 i noviji). |
| Alembic (`.abc`) | ne | da | ne | Predmemorije geometrije, na njihovu prvom uzorku. |
| STEP (`.step`, `.stp`) | ne | da | ne | Dijelovi iz modelara dijelova i od dobavljača, kao zatvorene mreže u stvarnoj veličini. Pogledajte [Formati datoteka](topic:formats). |
| `.3dm` | ne | da | ne | NURBS modeli: poliplohe, mreže, krivulje, blokovi i slojevi, kao mreže, bridovi, komponente i oznake. Pogledajte [Uvezite .3dm model](topic:import-3dm-files). |
| 3MF (`.3mf`) | ne | ne | da | 3D ispis, s bojama (u milimetrima). Iz {{ui:Provjera za 3D ispis (STL ili 3MF)…}}: pogledajte [Pripremite model za 3D ispis](topic:print-3d). |
| IFC (`.ifc`) | ne | ne | da | BIM programi i BimCraft. |
| DWG (`.dwg`) | ne | da | da | Situacijski plan ili tlocrt za modeliranje preko njega; slanje modela u CAD program. |
| DXF (`.dxf`) | ne | da | da | Isto, za bilo koji CAD program. |

[Formati datoteka detaljno](topic:formats) navodi točno što koji format čuva, a što izostavlja.

## Datoteka ModelCrafta

Datoteka `.modelcraft` čuva cijeli model: geometriju, grupe, komponente, pomoćne linije, scene, jedinice te kameru i stil koje ste koristili pri spremanju. Ne čuva povijest poništavanja.

### Otvorite model

1. Kliknite {{ui:Otvori}} u grupi {{ui:Datoteka}} ili pritisnite {{key:Mod+O}}.
2. Ako model na zaslonu ima nespremljene promjene, ModelCraft pita: „Ovaj model ima promjene koje nisu spremljene. Prvo spremiti kopiju?“ Odaberite {{ui:Spremi kopiju}}, {{ui:Odbaci promjene}} ili {{ui:Odustani}}.
3. Odaberite datoteku `.modelcraft`.

Model se otvara u jedinicama u kojima je spremljen, s kamerom s kojom je spremljen. Datoteku `.modelcraft` možete i ispustiti na 3D prikaz ili kliknuti jednu na popisu nedavnih datoteka na početnoj kartici (preglednici koji mogu ponovno otvoriti datoteku i desktop aplikacija).

:::desktop
U desktop aplikaciji dvostruki klik na datoteku `.modelcraft` otvara je u ModelCraftu, a tako radi i **Otvori pomoću** na datoteci Collada, OBJ, glTF, DWG ili DXF (uvozi se u novi model).
:::

### Spremite model

Kliknite {{ui:Spremi}} ili pritisnite {{key:Mod+S}}. Preglednik preuzima `<ime>.modelcraft`, gdje je ime datoteke koju ste otvorili ili „Untitled“ za novi model.

:::desktop
U desktop aplikaciji {{ui:Spremi}} zapisuje datoteku koju ste otvorili na istom mjestu. Novi model pita gdje ga spremiti.
:::

- {{ui:Spremi kao}} ({{key:Mod+Shift+S}}) sprema kopiju kao datoteku `.modelcraft` ili kao [USD](topic:usd); ondje gdje preglednik može, pita za ime i mjesto. Inače preimenujte preuzetu datoteku: sljedeće spremanje nakon otvaranja preimenovane datoteke koristi novo ime.
- Svako spremanje je novo preuzimanje. Ovisno o postavkama preglednika, ide izravno u mapu preuzimanja ili pita kamo spremiti. Ako datoteka s tim imenom već postoji, većina preglednika dodaje broj, na primjer `Untitled (1).modelcraft`.

:::chromium
Za biranje mape svaki put otvorite postavke preglednika, potražite „preuzimanja“ i uključite „Pitaj gdje spremiti svaku datoteku prije preuzimanja“.
:::

:::firefox
Za biranje mape svaki put otvorite **Postavke**, zatim **Općenito**, i pod „Preuzimanja“ odaberite „Uvijek pitaj gdje spremiti datoteke“.
:::

:::safari
Za promjenu mjesta preuzimanja otvorite **Safari**, zatim **Postavke**, zatim **Općenito**, i postavite „Lokacija za preuzimanje datoteka“.
:::

### Započnite novi model

Kliknite {{ui:Novo}}. Ako postoje nespremljene promjene, ModelCraft prvo pita. Novi model počinje prazan, u jedinici vašeg područja (stope i inči u Sjedinjenim Državama, milimetri drugdje), bez scena.

### Ako se preglednik zatvori prije spremanja

ModelCraft nekoliko sekundi nakon svake promjene čuva kopiju nespremljenog rada u vašem pregledniku. Ako se kartica ili preglednik zatvore prije spremanja, sljedeći put kad otvorite ModelCraft pita „Oporaviti svoj rad?“. Oporavak otvara model kakav je bio, još nespremljen u datoteku: spremite ga da ga zadržite. Pogledajte [Oporavite svoj rad](common:recover).

### Iz CadCrafta: Otvori u ModelCraftu

U CadCraftovoj aplikaciji za crtanje **Pogled**, zatim **Više**, zatim **Otvori u ModelCraftu** predaje otvoreni crtež ModelCraftu u novoj kartici, kao DWG. Stiže kao uvezeni DWG: linije na tlu, u grupi, spremne za modeliranje preko njih. Ništa se ne šalje; datoteka prolazi kroz vlastitu pohranu vašeg preglednika.

## Uvoz

Uvoz dodaje datoteku modelu koji imate otvoren; ne zamjenjuje ga.

1. Kliknite {{ui:Uvezi}} u grupi {{ui:Datoteka}} ili ispustite datoteku na 3D prikaz.
2. Odaberite datoteku SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ili DXF.

   Datoteka stiže kao **jedna grupa**, odabrana, a prikaz zumira da je pokaže. Statusna traka kaže što je stiglo i navodi sve što nije bilo moguće uvesti, poput „Nije uvezeno: 2 texture“.

3. Za rad izravno na njezinoj geometriji dvaput kliknite grupu da uređujete unutar nje ili kliknite {{ui:Rastavi}}.

Neke stvari koje valja znati:

- **Veličina i smjer gore:** Collada datoteke navode svoju jedinicu i koja je os gore, a ModelCraft ih pretvara. glTF je uvijek u metrima. OBJ datoteke ne nose jedinicu: ModelCraft ih čita kao metre, s Y prema gore. Ako OBJ stigne 1000 puta prevelik ili premalen, koristite [Skaliranje](topic:rotate-scale) s faktorom poput `0.001` ili `1000`.
- **DWG i DXF** dolaze kao linije (bridovi) na tlu, a ne kao plohe. Ako crtež ne navodi svoju jedinicu, dijalog naslovljen „Jedinice crteža“ pita što je jedna jedinica crteža. Pogledajte [Modelirajte na situacijskom planu](topic:site-plan).
- **Ograničenja:** datoteke veće od 300 MB odbijaju se za uvoz, a veće od 200 MB za otvaranje. Datoteke s više od 2 milijuna vrhova ili ploha odbijaju se kao prevelike.

## Izvoz

1. Kliknite {{ui:Izvezi}} u grupi {{ui:Datoteka}}.
2. Odaberite format: {{ui:glTF binarni (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL za ispis (.stl, milimetri)}}, {{ui:PLY s bojama (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC za BimCraft (.ifc)}}, {{ui:DWG za CAD (.dwg, 2004)}} ili {{ui:DXF za CAD (.dxf, R12)}}.

Preglednik preuzima datoteku, imenovanu kao model. Izvozi se cijeli model, a ne samo odabir. Prazan model se ne izvozi: „Model je prazan: prvo nešto nacrtajte.“ Pogledajte [Izvezite model za druge programe](topic:export-model).

## Online i offline

Sve u ModelCraftu radi na vašem računalu, pa modeliranje, otvaranje, spremanje, uvoz i izvoz rade bez veze čim se aplikacija učita.

Da ModelCraft otvorite bez ikakve veze, spremite ga za offline uporabu dok ste online:

1. Kliknite {{ui:Spremi za offline}} u traci aplikacije pri vrhu.
2. Gumb broji („Spremanje 40 od 212“) dok sprema. ModelCraft sprema vlastite datoteke (među njima svoj DWG čitač), ovu pomoć i 3D knjižnicu, pa to može potrajati.
3. Kad gumb piše {{ui:Spremno za offline}}, ModelCraft se otvara s iste adrese bez veze, a radi i DWG uvoz offline.

Kasnije kliknite {{ui:Spremno za offline}} za {{ui:Spremi ponovno (preuzmi najnoviju verziju)}} ili {{ui:Ukloni offline kopiju}}. Ako gumb piše {{ui:Spremanje nije uspjelo}}, neke datoteke nisu preuzete: provjerite vezu i kliknite ga da pokušate ponovno. {{ui:Offline nije dostupan}} znači da ovaj prozor preglednika ne može čuvati kopiju (privatni prozori i neka upravljana računala). Pogledajte [Rad offline](common:offline).

Spremanje u oblak još nije dostupno. Svaki model živi tamo gdje ga spremite.

:::offline
Offline ste. Možete nastaviti modelirati i spremati. Osim ako traka aplikacije ne prikazuje {{ui:Spremno za offline}}, ne osvježavajte ovu karticu dok se ponovno ne spojite.
:::

## Desktop aplikacija

:::desktop
Koristite ModelCraft u CadCraft Studiju, desktop aplikaciji sa svih osam aplikacija. Datoteke se otvaraju i spremaju gdje odaberete.
:::

:::web
ModelCraft radi u pregledniku na Macu, Windowsima i Linuxu te u CadCraft Studiju, desktop aplikaciji sa svih osam aplikacija u jednoj instalaciji, s getcadcraft.com/download.
:::
