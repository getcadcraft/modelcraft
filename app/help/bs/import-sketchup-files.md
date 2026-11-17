---
title: Uvoz SKP modela
summary: Uvezite .skp datoteku s njenim grupama, komponentama, bojama, teksturama, oznakama i mekim ivicama, vidite što je stiglo, a što nije, pa nastavite modelirati.
keywords: skp, uvoz, otvori skp, komponente, grupe, oznake, slojevi, materijali, boje, teksture, skriveno, meke ivice, 3d warehouse, migracija, prebacivanje
from: 325d3c81
---

ModelCraft čita SketchUp datoteke (`.skp`) vlastitim čitačem, na stranici. Ništa se ne šalje, i radi van mreže kad i ModelCraft. Datoteke od SketchUp 3 do 2026 su testirane.

## Uvezite datoteku

1. Kliknite {{ui:Import}} u grupi {{ui:File}} (ili prevucite `.skp` datoteku na 3D prikaz).
2. Odaberite datoteku.

   Statusna traka kaže "Reading house.skp…" dok čita, pa što je stiglo, npr. "Imported house.skp (SketchUp 25.0.575): 1240 faces, 6 components, in a group."

Cijeli model stiže kao jedna grupa nazvana po datoteci, odabrana, i prikaz se zumira na nju. Jedan {{key:Mod+Z}} sve ponovo uklanja, uključujući oznake.

:::tip
Rastavite grupu uvoza ({{ui:Entity info}} › {{ui:Explode}}) kad želite da njen sadržaj bude slobodan u modelu umjesto u jednoj grupi.
:::

## Što dolazi

- **Plohe** s njihovim rupama i **ivice** koje nisu dio plohe.
- **Grupe** dolaze kao grupe, a **komponente** kao komponente: svaka kopija komponente je postavljanje jedne definicije, pa uređivanje jedne kopije mijenja sve, kao u SketchUp-u. Nazivi dolaze s njima.
- **Boje.** Vlastiti materijal plohe joj daje boju. Materijal nanesen na grupu ili komponentu postaje boja tog postavljanja, pa plohe unutra bez vlastite boje je preuzimaju, kao u SketchUp-u. Komponenta obojena crveno na jednom mjestu i plavo na drugom ostaje jedna komponenta.
- **Teksture.** Ploha obojena materijalom s teksturom dolazi s njom, položenom na plohu kako je u datoteci, a stil {{ui:Shaded}} je prikazuje. Slika se čuva u ModelCraft datoteci kad sačuvate, a [prikaz renderom](topic:render) je također prikazuje. Materijal s teksturom nanesen na cijelu grupu ili komponentu daje toj kopiji samo boju materijala.
- **Oznake.** Grupa ili komponenta na SketchUp oznaci dobija ModelCraft oznaku istog naziva, navedenu u {{ui:Tags}}, prikazanu ili skrivenu kao u SketchUp-u. Ako vaš model već ima oznaku tog naziva, koristi se ta oznaka.
- **Skriveno dolazi skriveno:** plohe, ivice, grupe i komponente, te plohe i ivice na skrivenoj oznaci. Vidite što je SketchUp prikazivao, a ništa se ne gubi: {{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} ih prikazuje. Vidi [Sakrivanje, izoliranje i prikazivanje](topic:hide-isolate).
- **Meke i glatke ivice** ostaju meke, pa zakrivljene površi i dalje izgledaju glatko.
- **Veličine** su tačne u bilo kojoj jedinici: SketchUp datoteke su unutra u inčima, a ModelCraft ih pretvara.

## Što ne dolazi

Statusna traka kaže što je izostavljeno, s brojevima.

- **Neke teksture** zadržavaju samo boju svog materijala: tekstura koja nedostaje u datoteci, slika u formatu koji pregledači ne mogu prikazati (kao Photoshop datoteka) ili tekstura bez veličine. Plohe s projektovanom teksturom dolaze s teksturom postavljenom približno.
- **Oznake na slobodnim plohama i ivicama.** ModelCraft označava samo grupe i komponente, pa ploha ili ivica s vlastitom oznakom dolazi bez oznake, a statusna traka ih broji. Napravite takve plohe grupom ({{key:Shift+G}}) i označite grupu.
- **Slike** postavljene u model, tekst, kote, vodilice, ravni presjeka, scene i stilovi.

## Problemi

- "This is not a SketchUp file." ili "This SketchUp file is damaged: …": datoteka je odsječena ili je nešto drugo s nazivom `.skp`. Sačuvajte je ponovo iz SketchUp-a ili zatražite novu kopiju.
- Datoteka iz SketchUp verzije novije od one koju ModelCraft poznaje se odbija, uz verziju koju je pronašla.
- Model koji je samo od slika, teksta ili kota javlja da nema što prikazati.

## Vratite model nazad

ModelCraft ne može sačuvati `.skp` datoteke. Izvezite Collada ({{ui:Export}} › `.dae`) i uvezite je u SketchUp: grupe, komponente i boje prelaze; teksture prelaze kao boja materijala. Vidi [Izvoz modela](topic:export-model).
