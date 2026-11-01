---
title: Otvaranje, spašavanje, uvoz i izvoz
summary: Datoteka ModelCraft, šta se može uvesti i poslati van, gdje idu datoteke i šta se mijenja van mreže i između preglednika.
keywords: otvori, spasi, uvezi, izvezi, datoteka, 3dm, skp, oporavi, automatsko spašavanje, nedavno, desktop, otvori u 3D, predaja, preuzmi, datoteka modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formati, van mreže, spasi kao
from: 0b4896d1
---

ModelCraft čita i zapisuje datoteke na računaru. Ništa se ne otprema: datoteka koja se otvori čita se unutar preglednika, a datoteka koja se spasi je preuzimanje. Pogledaj [Gdje idu datoteke](common:your-files).

## Formati ukratko

| Format | Otvori | Uvezi | Izvezi | Čemu služi |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | da | ne | {{ui:Spasi}} | Radna datoteka. Čuva sve. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | da | da | {{ui:Spasi kao}}, {{ui:Izvezi}} | Programi za renderovanje i sastavljanje scena. USD koji pravi ModelCraft čuva sve. Pogledaj [Spašavanje, otvaranje i izvoz USD-a](topic:usd). |
| SketchUp (`.skp`) | ne | da | ne | Uvoz modela iz SketchUp-a. Čuva grupe, komponente, boje, teksture na plohama, oznake i meke ivice. Pogledaj [Uvoz SKP modela](topic:import-sketchup-files). |
| Collada (`.dae`) | ne | da | da | Razmjena modela s drugim alatima za 3D modeliranje. Čuva grupe, komponente i boje. |
| OBJ (`.obj`) | ne | da | da | Programi za renderovanje i vizualizaciju. |
| glTF (`.glb`, `.gltf`) | ne | da | samo `.glb` | Web pregledači, motori za igre, AR. |
| STL (`.stl`) | ne | da | da | 3D štampanje (u milimetrima). |
| PLY (`.ply`) | ne | da | da | Mreže s bojama: skeniranja, štampanje u boji. |
| FBX (`.fbx`) | ne | da | ne | Modeli iz programa za animaciju i igre (FBX 2011 i noviji). |
| Alembic (`.abc`) | ne | da | ne | Keš geometrije, na prvom uzorku. |
| STEP (`.step`, `.stp`) | ne | da | ne | Dijelovi iz alata za modeliranje dijelova i od dobavljača, kao zatvorene mreže u pravoj veličini. Pogledaj [Formati datoteka](topic:formats). |
| `.3dm` | ne | da | ne | NURBS modeli: poliplohe, mreže, krive, blokovi i slojevi, kao mreže, ivice, komponente i oznake. Pogledaj [Uvoz .3dm modela](topic:import-3dm-files). |
| 3MF (`.3mf`) | ne | ne | da | 3D štampanje, s bojama (u milimetrima). Iz {{ui:Provjeri za 3D štampanje (STL ili 3MF)…}}: pogledaj [Pripremi model za 3D štampanje](topic:print-3d). |
| IFC (`.ifc`) | ne | ne | da | BIM programi i BimCraft. |
| DWG (`.dwg`) | ne | da | da | Situacioni ili tlocrtni plan na kojem se modelira; slanje modela u CAD program. |
| DXF (`.dxf`) | ne | da | da | Isto, za bilo koji CAD program. |

[Formati datoteka detaljno](topic:formats) navodi tačno šta svaki format čuva, a šta izostavlja.

## Datoteka ModelCraft

Datoteka `.modelcraft` čuva cijeli model: geometriju, grupe, komponente, vodilice, scene, jedinice, te kameru i stil koji su bili aktivni pri spašavanju. Ne čuva historiju poništavanja.

### Otvori model

1. Klikni {{ui:Otvori}} u grupi {{ui:Datoteka}}, ili pritisni {{key:Mod+O}}.
2. Ako model na ekranu ima nespašene promjene, ModelCraft pita: „Ovaj model ima promjene koje nisu spašene. Prvo spasiti kopiju?“ Odaberi {{ui:Spasi kopiju}}, {{ui:Odbaci promjene}} ili {{ui:Otkaži}}.
3. Odaberi datoteku `.modelcraft`.

Model se otvara u jedinicama u kojima je spašen, s kamerom s kojom je spašen. Datoteka `.modelcraft` može se i prevući na 3D pogled, ili kliknuti na listi nedavnih datoteka na početnoj kartici (preglednici koji mogu ponovo otvoriti datoteku i desktop aplikacija).

:::desktop
U desktop aplikaciji, dvoklik na datoteku `.modelcraft` otvara je u ModelCraftu, a isto to radi i **Otvori pomoću** na datoteci Collada, OBJ, glTF, DWG ili DXF (uvozi se u novi model).
:::

### Spasi model

Klikni {{ui:Spasi}} ili pritisni {{key:Mod+S}}. Preglednik preuzima `<name>.modelcraft`, gdje je ime ime otvorene datoteke, ili `Untitled` za novi model.

:::desktop
U desktop aplikaciji, {{ui:Spasi}} zapisuje otvorenu datoteku na istom mjestu. Novi model pita gdje da se spasi.
:::

- {{ui:Spasi kao}} ({{key:Mod+Shift+S}}) spašava kopiju kao datoteku `.modelcraft` ili kao [USD](topic:usd); gdje preglednik može, traži ime i mjesto. Inače preimenuj preuzetu datoteku: sljedeće spašavanje nakon otvaranja preimenovane datoteke koristi novo ime.
- Svako spašavanje je novo preuzimanje. Zavisno od postavki preglednika, ide direktno u folder za preuzimanja ili pita gdje da se spasi. Ako datoteka tog imena već postoji, većina preglednika dodaje broj, kao `Untitled (1).modelcraft`.

:::chromium
Da bi svaki put birao folder, otvori postavke preglednika, potraži „preuzimanja“ i uključi „Pitaj gdje da spasi svaku datoteku prije preuzimanja“.
:::

:::firefox
Da bi svaki put birao folder, otvori **Postavke**, zatim **Opšte**, pa pod „Preuzimanja“ odaberi „Uvijek pitaj gdje da se datoteke spašavaju“.
:::

:::safari
Da promijeniš gdje idu preuzimanja, otvori **Safari**, zatim **Postavke**, pa **Opšte**, i postavi „Lokacija za preuzimanje datoteka“.
:::

### Počni novi model

Klikni {{ui:Novo}}. Ako ima nespašenih promjena, ModelCraft prvo pita. Novi model počinje prazan, u jedinici lokalnih postavki (stope i inči u SAD-u, milimetri drugdje), bez scena.

### Ako se preglednik zatvori prije spašavanja

ModelCraft čuva kopiju nespašenog rada u pregledniku nekoliko sekundi nakon svake promjene. Ako se kartica ili preglednik zatvore prije spašavanja, sljedeći put kad se otvori ModelCraft, pita „Oporaviti rad?“. Oporavak otvara model kakav je bio, još nespašen u datoteku: spasi ga da bi ostao sačuvan. Pogledaj [Oporavak rada](common:recover).

### Iz CadCraft-a: Otvori u ModelCraftu

U aplikaciji za crtanje CadCraft, **Pogled**, zatim **Više**, pa **Otvori u ModelCraftu** predaje otvoreni crtež ModelCraftu u novoj kartici, kao DWG. Stiže onako kako stiže uvezeni DWG: linije na tlu, u grupi, spremne za modeliranje. Ništa se ne otprema; datoteka prolazi kroz lokalnu pohranu preglednika.

## Uvoz

Uvoz dodaje datoteku u model koji je otvoren; ne zamjenjuje ga.

1. Klikni {{ui:Uvezi}} u grupi {{ui:Datoteka}}, ili prevuci datoteku na 3D pogled.
2. Odaberi datoteku SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ili DXF.

   Datoteka stiže kao **jedna grupa**, odabrana, a pogled se zumira da je prikaže. Statusna traka kaže šta je stiglo i navodi sve što nije moglo da se uveze, npr. „Nije uvezeno: 2 teksture“.

3. Da bi radio direktno na njenoj geometriji, dvaput klikni grupu da uđeš u uređivanje, ili klikni {{ui:Rastavi}}.

Nekoliko stvari za znati:

- **Veličina i smjer gore:** Collada datoteke navode svoju jedinicu i koja osa je gore, a ModelCraft ih pretvara. glTF je uvijek u metrima. OBJ datoteke ne nose jedinicu: ModelCraft ih čita kao metre, s Y prema gore. Ako OBJ dođe 1000 puta prevelik ili premali, koristi [Skaliraj](topic:rotate-scale) s faktorom kao `0.001` ili `1000`.
- **DWG i DXF** stižu kao linije (ivice) na tlu, a ne kao plohe. Ako crtež ne navodi svoju jedinicu, dijaloški okvir naslovljen „Jedinice crteža“ pita šta je jedna jedinica crteža. Pogledaj [Modeliranje na situacionom planu](topic:site-plan).
- **Ograničenja:** datoteke veće od 300 MB ne uvoze se, a veće od 200 MB ne otvaraju se. Datoteke s više od 2 miliona vrhova ili ploha odbijaju se kao prevelike.

## Izvoz

1. Klikni {{ui:Izvezi}} u grupi {{ui:Datoteka}}.
2. Odaberi format: {{ui:glTF binarno (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL za štampanje (.stl, milimetri)}}, {{ui:PLY s bojama (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC za BimCraft (.ifc)}}, {{ui:DWG za CAD (.dwg, 2004)}} ili {{ui:DXF za CAD (.dxf, R12)}}.

Preglednik preuzima datoteku, nazvanu kao model. Izvozi se cijeli model, a ne samo odabir. Prazan model se ne izvozi: „Model je prazan: prvo nacrtaj nešto.“ Pogledaj [Izvoz modela za druge programe](topic:export-model).

## Na mreži i van mreže

Sve u ModelCraftu radi na računaru, pa modeliranje, otvaranje, spašavanje, uvoz i izvoz rade bez veze čim se aplikacija učita.

Da bi ModelCraft otvorio bez ikakve veze, spasi ga za rad van mreže dok si na mreži:

1. Klikni {{ui:Spasi za rad van mreže}} na gornjoj traci aplikacije.
2. Dugme broji („Spašavanje 40 od 212“) dok spašava. ModelCraft spašava svoje datoteke (među njima i čitač DWG-a), ovu pomoć i 3D biblioteku, pa može potrajati.
3. Kad dugme pokaže {{ui:Spremno za rad van mreže}}, ModelCraft se otvara s iste adrese bez veze, a uvoz DWG-a radi i van mreže.

Kasnije klikni {{ui:Spremno za rad van mreže}} za {{ui:Spasi ponovo (preuzmi najnoviju verziju)}} ili {{ui:Ukloni kopiju za rad van mreže}}. Ako dugme pokaže {{ui:Nije moguće spasiti}}, neke datoteke nisu preuzete: provjeri vezu i klikni ponovo da pokušaš. {{ui:Rad van mreže nije dostupan}} znači da ovaj prozor preglednika ne može čuvati kopiju (privatni prozori i neki upravljani računari). Pogledaj [Rad van mreže](common:offline).

Spašavanje u oblaku još nije dostupno. Svaki model ostaje tamo gdje ga spasiš.

:::offline
Nema veze s mrežom. Možeš nastaviti modeliranje i spašavanje. Osim ako gornja traka ne prikazuje {{ui:Spremno za rad van mreže}}, nemoj osvježavati ovu karticu dok ponovo ne bude mreže.
:::

## Desktop aplikacija

:::desktop
ModelCraft radi u CadCraft Studiu, desktop aplikaciji sa svih osam aplikacija. Datoteke se otvaraju i spašavaju tamo gdje se odabere.
:::

:::web
ModelCraft radi u pregledniku na Macu, Windowsu i Linuxu, a i u CadCraft Studiu, desktop aplikaciji sa svih osam aplikacija u jednoj instalaciji, s getcadcraft.com/download.
:::
