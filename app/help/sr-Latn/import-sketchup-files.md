---
title: Uvoz SKP modela
summary: Uvezite .skp fajl sa njegovim grupama, komponentama, bojama, teksturama, oznakama i mekim ivicama, pogledajte šta je ušlo a šta nije, i nastavite da modelujete.
keywords: skp, uvoz, otvori skp, komponente, grupe, oznake, slojevi, materijali, boje, teksture, skriveno, meke ivice, 3D Warehouse, migracija, prebacivanje
from: 325d3c81
---

ModelCraft čita SketchUp fajlove (`.skp`) sopstvenim čitačem, na stranici. Ništa se ne otprema, i radi van mreže kad i ModelCraft. Fajlovi od SketchUp 3 do 2026 su isprobani.

## Uvezite fajl

1. Kliknite {{ui:Uvezi}} u grupi {{ui:Datoteka}} (ili prevucite `.skp` fajl na 3D prikaz).
2. Izaberite fajl.

   Statusna traka kaže „Čitam house.skp…“ dok čita, pa šta je ušlo, na primer „Uvezen house.skp (SketchUp 25.0.575): 1240 površi, 6 komponenti, u grupi.“

Ceo model stiže kao jedna grupa nazvana po fajlu, izabrana, a prikaz se zumira na nju. Jedan {{key:Mod+Z}} uklanja sve, uključujući oznake.

:::tip
Rastavite grupu uvoza ({{ui:Podaci o entitetu}} › {{ui:Rastavi}}) kad želite njen sadržaj slobodan u modelu, a ne u jednoj grupi.
:::

## Šta dolazi

- **Površi** sa rupama, i **ivice** koje nisu deo površi.
- **Grupe** dolaze kao grupe, a **komponente** kao komponente: svaka kopija komponente je postavljanje jedne definicije, pa izmena jedne kopije menja sve, kao u SketchUp-u. Nazivi dolaze s njima.
- **Boje.** Sopstveni materijal površi joj daje boju. Materijal nanet na grupu ili komponentu postaje boja tog postavljanja, pa površi unutra bez sopstvene boje preuzimaju je, kao u SketchUp-u. Komponenta obojena crveno na jednom mestu i plavo na drugom ostaje jedna komponenta.
- **Teksture.** Površ obojena teksturisanim materijalom stiže sa teksturom, postavljenom na površ kao u fajlu, a stil {{ui:Senčeno}} je prikazuje. Slika se čuva u ModelCraft fajlu kad sačuvate, a [renderovana slika](topic:render) je takođe prikazuje. Teksturisani materijal nanet na celu grupu ili komponentu daje toj kopiji samo boju materijala.
- **Oznake.** Grupa ili komponenta na SketchUp oznaci dobija ModelCraft oznaku istog imena, navedenu u {{ui:Oznake}}, prikazanu ili skrivenu kao u SketchUp-u. Ako vaš model već ima oznaku s tim imenom, koristi se ta oznaka.
- **Skriveno stiže skriveno:** površi, ivice, grupe i komponente, kao i površi i ivice na skrivenoj oznaci. Vidite šta je SketchUp prikazivao, i ništa se ne gubi: {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Prikaži sve}} ih prikazuje. Vidi [Sakrivanje, izolovanje i prikazivanje](topic:hide-isolate).
- **Meke i glatke ivice** ostaju meke, pa zakrivljene površi i dalje izgledaju glatko.
- **Veličine** su tačne u bilo kojoj jedinici: SketchUp fajlovi interno koriste inče, a ModelCraft ih preračunava.

## Šta ne dolazi

Statusna traka kaže šta je izostavljeno, sa brojevima.

- **Neke teksture** zadržavaju samo boju svog materijala: tekstura koja nedostaje u fajlu, slika u formatu koji pregledači ne mogu da prikažu (kao Photoshop fajl), ili tekstura bez veličine. Površi sa projektovanom teksturom dolaze sa teksturom približno postavljenom.
- **Oznake na slobodnim površima i ivicama.** ModelCraft označava samo grupe i komponente, pa površ ili ivica sa sopstvenom oznakom stiže bez oznake, a statusna traka ih broji. Napravite takve površi u grupu ({{key:Shift+G}}) i označite grupu.
- **Slike** postavljene u modelu, tekst, kote, vodilice, ravni preseka, scene i stilovi.

## Problemi

- „Ovo nije SketchUp fajl.“ ili „Ovaj SketchUp fajl je oštećen: …“: fajl je odsečen ili je nešto drugo sa nastavkom `.skp`. Sačuvajte ga ponovo iz SketchUp-a ili zatražite svež primerak.
- Fajl iz SketchUp verzije novije od one koju ModelCraft poznaje se odbija, uz prikaz verzije koju je pronašao.
- Model koji se sastoji samo od slika, teksta ili kota javlja da nema šta da prikaže.

## Vratite model nazad

ModelCraft ne može da čuva `.skp` fajlove. Izvezite Collada ({{ui:Izvezi}} › `.dae`) i uvezite ga u SketchUp: grupe, komponente i boje prelaze; teksture prelaze kao boja materijala. Vidi [Izvoz modela](topic:export-model).
