---
title: Uvoz SKP modela
summary: Uvezite .skp datoteku s njezinim grupama, komponentama, bojama, teksturama, oznakama i mekim bridovima, pogledajte što je došlo, a što nije, i nastavite modelirati.
keywords: skp, uvoz, otvori skp, komponente, grupe, oznake, slojevi, materijali, boje, teksture, skriveno, meki bridovi, 3d warehouse, migracija, prebacivanje
from: 325d3c81
---

ModelCraft čita SketchUp datoteke (`.skp`) vlastitim čitačem, na stranici. Ništa se ne učitava na poslužitelj, a radi izvan mreže kad god radi i ModelCraft. Datoteke od SketchUpa 3 do 2026 su testirane.

## Uvezite datoteku

1. Kliknite {{ui:Uvezi}} u grupi {{ui:Datoteka}} (ili povucite `.skp` datoteku na 3D prikaz).
2. Odaberite datoteku.

   Statusna traka kaže "Čitanje house.skp…" dok čita, zatim što je uvezeno, npr. "Uvezena datoteka house.skp (SketchUp 25.0.575): 1240 ploha, 6 komponenti, u grupi."

Cijeli model dolazi kao jedna grupa nazvana po datoteci, odabrana, a prikaz se primiče na nju. Jedno {{key:Mod+Z}} sve ponovno uklanja, uključujući oznake.

:::tip
Rastavite grupu uvoza ({{ui:Informacije o entitetu}} › {{ui:Rastavi}}) kad želite njezin sadržaj slobodnim u modelu, a ne u jednoj grupi.
:::

## Što dolazi

- **Plohe** s njihovim provrtima i **bridovi** koji nisu dio plohe.
- **Grupe** dolaze kao grupe, a **komponente** kao komponente: svaka kopija komponente je postavljanje jedne definicije, pa uređivanje jedne kopije mijenja sve, kao u SketchUpu. Nazivi dolaze s njima.
- **Boje.** Vlastiti materijal plohe joj daje boju. Materijal nanesen na grupu ili komponentu postaje boja tog postavljanja, pa ploha unutra bez vlastite boje ju preuzima, kao u SketchUpu. Komponenta obojena crveno na jednom mjestu i plavo na drugom ostaje jedna komponenta.
- **Teksture.** Ploha obojena materijalom s teksturom dolazi s teksturom, položenom na plohu kao u datoteci, a stil {{ui:Sjenčano}} je prikazuje. Slika se čuva u ModelCraft datoteci pri spremanju, a [prikaz slike](topic:render) je također prikazuje. Materijal s teksturom nanesen na cijelu grupu ili komponentu daje toj kopiji samo boju materijala.
- **Oznake.** Grupa ili komponenta na SketchUp oznaci dobiva ModelCraft oznaku istog naziva, navedenu u {{ui:Oznake}}, prikazanu ili skrivenu kao u SketchUpu. Ako vaš model već ima oznaku s tim nazivom, koristi se ta oznaka.
- **Skriveno dolazi skriveno:** plohe, bridovi, grupe i komponente, te plohe i bridovi na skrivenoj oznaci. Vidite što je SketchUp prikazivao, a ništa se ne gubi: {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Prikaži sve}} ih prikazuje. Vidi [Sakrivanje, izoliranje i ponovni prikaz](topic:hide-isolate).
- **Meki i glatki bridovi** ostaju meki, pa zakrivljene plohe i dalje izgledaju glatko.
- **Veličine** su ispravne u bilo kojoj jedinici: SketchUp datoteke su unutarnje u inčima, a ModelCraft ih pretvara.

## Što ne dolazi

Statusna traka kaže što je izostavljeno, s brojevima.

- **Neke teksture** zadržavaju samo boju materijala: tekstura koja nedostaje u datoteci, slika u formatu koji preglednici ne mogu prikazati (npr. Photoshop datoteka) ili tekstura bez veličine. Plohe s projiciranom teksturom dolaze s teksturom postavljenom približno.
- **Oznake na slobodnim plohama i bridovima.** ModelCraft označava samo grupe i komponente, pa ploha ili brid s vlastitom oznakom dolazi bez oznake, a statusna traka ih broji. Napravite takve plohe u grupu ({{key:Shift+G}}) i označite grupu.
- **Slike** postavljene u model, tekst, kote, pomoćne linije, ravnine presjeka, scene i stilovi.

## Problemi

- "Ovo nije SketchUp datoteka." ili "Ova SketchUp datoteka je oštećena: …": datoteka je odrezana ili je nešto drugo s nazivom `.skp`. Spremite je ponovno iz SketchUpa ili zatražite novu kopiju.
- Datoteka iz SketchUp verzije novije od one koju ModelCraft poznaje odbija se, uz navedenu verziju koju je pronašao.
- Model koji se sastoji samo od slika, teksta ili kota javlja da nema što prikazati.

## Vratite model natrag

ModelCraft ne može spremati `.skp` datoteke. Izvezite Collada ({{ui:Izvezi}} › `.dae`) i uvezite je u SketchUp: grupe, komponente i boje prelaze; teksture prelaze kao boja materijala. Vidi [Izvoz modela](topic:export-model).
