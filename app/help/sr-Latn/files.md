---
title: Otvaranje, čuvanje, uvoz i izvoz
summary: Datoteka ModelCraft, šta možeš da uneseš i pošalješ, gde idu datoteke i šta se menja van mreže i između pregledača.
keywords: otvori, sačuvaj, uvezi, izvezi, datoteka, 3dm, skp, oporavak, automatsko čuvanje, nedavne, desktop, otvori u 3D, predaja, preuzmi, datoteka modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formati, van mreže, sačuvaj kao
from: 0b4896d1
---

ModelCraft čita i piše datoteke na tvom računaru. Ništa se ne otprema: datoteka koju otvoriš čita se unutar tvog pregledača, a datoteka koju sačuvaš je preuzimanje. Pogledaj [Gde idu tvoje datoteke](common:your-files).

## Formati ukratko

| Format | Otvori | Uvezi | Izvezi | Namena |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | da | ne | {{ui:Sačuvaj}} | Tvoja radna datoteka. Čuva sve. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | da | da | {{ui:Sačuvaj kao}}, {{ui:Izvezi}} | Programi za renderovanje i sastavljanje scena. ModelCraftov USD čuva sve. Pogledaj [Čuvanje, otvaranje i izvoz USD-a](topic:usd). |
| SketchUp (`.skp`) | ne | da | ne | Uvoz modela iz SketchUp-a. Čuva grupe, komponente, boje, teksture na površima, oznake i meke ivice. Pogledaj [Uvoz SKP modela](topic:import-sketchup-files). |
| Collada (`.dae`) | ne | da | da | Razmena modela sa drugim 3D modelarima. Čuva grupe, komponente i boje. |
| OBJ (`.obj`) | ne | da | da | Programi za renderovanje i vizualizaciju. |
| glTF (`.glb`, `.gltf`) | ne | da | samo `.glb` | Web pregledači, pogoni za igre, AR. |
| STL (`.stl`) | ne | da | da | 3D štampa (u milimetrima). |
| PLY (`.ply`) | ne | da | da | Mreže sa bojama: skenovi, štampa u boji. |
| FBX (`.fbx`) | ne | da | ne | Modeli iz programa za animaciju i igre (FBX 2011 i noviji). |
| Alembic (`.abc`) | ne | da | ne | Keševi geometrije, na prvom uzorku. |
| STEP (`.step`, `.stp`) | ne | da | ne | Delovi iz programa za modelovanje delova i od dobavljača, kao zatvorene mreže u pravoj veličini. Pogledaj [Formati datoteka](topic:formats). |
| `.3dm` | ne | da | ne | NURBS modeli: polipovrši, mreže, krive, blokovi i slojevi, kao mreže, ivice, komponente i oznake. Pogledaj [Uvoz .3dm modela](topic:import-3dm-files). |
| 3MF (`.3mf`) | ne | ne | da | 3D štampa, sa bojama (u milimetrima). Iz {{ui:Proveri za 3D štampanje (STL ili 3MF)…}}: pogledaj [Pripremi model za 3D štampu](topic:print-3d). |
| IFC (`.ifc`) | ne | ne | da | BIM programi i BimCraft. |
| DWG (`.dwg`) | ne | da | da | Plan lokacije ili plan sprata za modelovanje; slanje modela u CAD program. |
| DXF (`.dxf`) | ne | da | da | Isto, za bilo koji CAD program. |

[Formati datoteka detaljno](topic:formats) navodi tačno šta svaki format čuva, a šta ispušta.

## Datoteka ModelCraft

Datoteka `.modelcraft` čuva ceo model: geometriju, grupe, komponente, vodilice, scene, jedinice, kao i kameru i stil koje si koristio kad si čuvao. Ne čuva istoriju opozivanja.

### Otvaranje modela

1. Klikni {{ui:Otvori}} u grupi {{ui:Datoteka}} ili pritisni {{key:Mod+O}}.
2. Ako model na ekranu ima nesačuvane izmene, ModelCraft pita: „Ovaj model ima izmene koje nisu sačuvane. Prvo sačuvaj kopiju?“ Izaberi {{ui:Sačuvaj kopiju}}, {{ui:Odbaci izmene}} ili {{ui:Otkaži}}.
3. Izaberi datoteku `.modelcraft`.

Model se otvara u jedinicama u kojima je sačuvan, sa kamerom kojom je sačuvan. Možeš i da prevučeš datoteku `.modelcraft` na 3D pogled ili da klikneš jednu na listi nedavnih datoteka na kartici za početak (pregledači koji mogu ponovo da otvore datoteku i desktop aplikacija).

:::desktop
U desktop aplikaciji, dvoklik na datoteku `.modelcraft` otvara je u ModelCraft-u, a isto važi za **Otvori pomoću** na datoteci Collada, OBJ, glTF, DWG ili DXF (uvozi se u novi model).
:::

### Čuvanje modela

Klikni {{ui:Sačuvaj}} ili pritisni {{key:Mod+S}}. Pregledač preuzima `<name>.modelcraft`, gde je ime datoteka koju si otvorio, ili „Untitled“ za novi model.

:::desktop
U desktop aplikaciji, {{ui:Sačuvaj}} upisuje datoteku koju si otvorio na istom mestu. Novi model pita gde da se sačuva.
:::

- {{ui:Sačuvaj kao}} ({{key:Mod+Shift+S}}) čuva kopiju kao datoteku `.modelcraft` ili kao [USD](topic:usd); gde pregledač to može, pita za ime i mesto. Inače preimenuj preuzetu datoteku: sledeće čuvanje posle otvaranja preimenovane datoteke koristi novo ime.
- Svako čuvanje je novo preuzimanje. Zavisno od podešavanja pregledača, ide pravo u fasciklu za preuzimanja ili pita gde da se sačuva. Ako datoteka tog imena već postoji, većina pregledača dodaje broj, kao `Untitled (1).modelcraft`.

:::chromium
Da bi svaki put birao fasciklu, otvori podešavanja pregledača, pretraži „preuzimanja“ i uključi „Pitaj gde da sačuvam svaku datoteku pre preuzimanja“.
:::

:::firefox
Da bi svaki put birao fasciklu, otvori **Podešavanja**, zatim **Opšte**, pa pod „Preuzimanja“ izaberi „Uvek pitaj gde da sačuvam datoteke“.
:::

:::safari
Da promeniš gde idu preuzimanja, otvori **Safari**, zatim **Podešavanja**, pa **Opšte**, i podesi „Lokacija za preuzete datoteke“.
:::

### Pravljenje novog modela

Klikni {{ui:Novo}}. Ako ima nesačuvanih izmena, ModelCraft prvo pita. Novi model počinje prazan, u jedinici tvog jezika (stope i inči u Sjedinjenim Državama, milimetri drugde), bez scena.

### Ako se pregledač zatvori pre čuvanja

ModelCraft čuva kopiju nesačuvanog rada u tvom pregledaču nekoliko sekundi posle svake izmene. Ako se kartica ili pregledač zatvore pre čuvanja, sledeći put kad otvoriš ModelCraft pita: „Oporaviti tvoj rad?“. Oporavak otvara model kakav je bio, ali još nije sačuvan u datoteku: sačuvaj ga da ga zadržiš. Pogledaj [Oporavak rada](common:recover).

### Iz CadCraft-a: Otvori u ModelCraft-u

U aplikaciji za crtanje CadCraft, **Pogled**, zatim **Više**, zatim **Otvori u ModelCraft-u** prosleđuje otvoreni crtež ModelCraft-u u novoj kartici, kao DWG. Stiže kao uvezeni DWG: linije na podlozi, u grupi, spremne za modelovanje. Ništa se ne otprema; datoteka prolazi kroz sopstveno skladište tvog pregledača.

## Uvoz

Uvoz dodaje datoteku modelu koji imaš otvoren; ne zamenjuje ga.

1. Klikni {{ui:Uvezi}} u grupi {{ui:Datoteka}} ili prevuci datoteku na 3D pogled.
2. Izaberi datoteku SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ili DXF.

   Datoteka stiže kao **jedna grupa**, izabrana, i pogled se zumira da je prikaže. Statusna traka kaže šta je stiglo i navodi šta nije moglo da se uveze, na primer „Nije uvezeno: 2 teksture“.

3. Da radiš direktno na njenoj geometriji, dvoklikni grupu da uđeš u nju za uređivanje, ili klikni {{ui:Rastavi}}.

Neke stvari koje treba znati:

- **Veličina i smer „gore“:** Collada datoteke kažu koju jedinicu koriste i koja osa je gore, a ModelCraft ih pretvara. glTF je uvek u metrima. OBJ datoteke ne nose jedinicu: ModelCraft ih čita kao metre, sa Y gore. Ako OBJ stigne 1000 puta veći ili manji, koristi [Skaliraj](topic:rotate-scale) sa faktorom kao `0.001` ili `1000`.
- **DWG i DXF** stižu kao linije (ivice) na podlozi, a ne kao površi. Ako crtež ne kaže svoju jedinicu, dijalog pod nazivom „Jedinice crteža“ pita šta je jedna jedinica crteža. Pogledaj [Modelovanje na planu lokacije](topic:site-plan).
- **Ograničenja:** datoteke preko 300 MB se odbijaju pri uvozu, a preko 200 MB pri otvaranju. Datoteke sa više od 2 miliona temena ili površi odbijaju se kao prevelike.

## Izvoz

1. Klikni {{ui:Izvezi}} u grupi {{ui:Datoteka}}.
2. Izaberi format: {{ui:glTF binarni (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL za štampanje (.stl, milimetri)}}, {{ui:PLY sa bojama (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC za BimCraft (.ifc)}}, {{ui:DWG za CAD (.dwg, 2004)}} ili {{ui:DXF za CAD (.dxf, R12)}}.

Pregledač preuzima datoteku, nazvanu kao model. Izvozi se ceo model, a ne samo izbor. Prazan model se ne izvozi: „Model je prazan: prvo nacrtaj nešto.“ Pogledaj [Izvoz modela za druge programe](topic:export-model).

## Na mreži i van mreže

Sve u ModelCraft-u radi na tvom računaru, pa modelovanje, otvaranje, čuvanje, uvoz i izvoz rade bez veze kad se aplikacija učita.

Da otvoriš ModelCraft bez ikakve veze, sačuvaj ga za rad van mreže dok si na mreži:

1. Klikni {{ui:Sačuvaj za rad van mreže}} u traci aplikacije na vrhu.
2. Dugme broji („Čuvanje 40 od 212“) dok čuva. ModelCraft čuva svoje datoteke (među njima i čitač DWG-a), ovu pomoć i biblioteku 3D modela, pa može da potraje.
3. Kad dugme piše {{ui:Spremno za rad van mreže}}, ModelCraft se otvara sa iste adrese bez veze, a uvoz DWG-a radi i van mreže.

Klikni {{ui:Spremno za rad van mreže}} kasnije za {{ui:Sačuvaj ponovo (preuzmi najnoviju verziju)}} ili {{ui:Ukloni kopiju za rad van mreže}}. Ako dugme piše {{ui:Nije moguće sačuvati}}, neke datoteke nisu preuzete: proveri vezu i klikni ga da pokušaš ponovo. {{ui:Rad van mreže nije dostupan}} znači da ovaj prozor pregledača ne može da čuva kopiju (privatni prozori i neki upravljani računari). Pogledaj [Rad van mreže](common:offline).

Čuvanje u oblaku još nije dostupno. Svaki model je tamo gde ga sačuvaš.

:::offline
Van si mreže. Možeš i dalje da modeluješ i čuvaš. Osim ako traka aplikacije ne prikazuje {{ui:Spremno za rad van mreže}}, ne osvežavaj ovu karticu dok ponovo ne budeš na mreži.
:::

## Desktop aplikacija

:::desktop
Koristiš ModelCraft u CadCraft Studiu, desktop aplikaciji sa svih osam aplikacija. Datoteke se otvaraju i čuvaju tamo gde izabereš.
:::

:::web
ModelCraft radi u pregledaču na Mac, Windows i Linux računarima, i u CadCraft Studiu, desktop aplikaciji sa svih osam aplikacija u jednoj instalaciji, sa getcadcraft.com/download.
:::
