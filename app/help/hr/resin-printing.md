---
title: Rezanje na slojeve za smolni pisač
summary: Režite platformu za ispis za smolni pisač na slojeve, izdubite i poduprite dio, pregledajte slojeve, spremite datoteku pisača i pronađite ekspoziciju testom ekspozicije.
keywords: smola, smolni ispis, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, šupljina, otvor za odzračivanje, podloga, podupirači, ljestvica ekspozicije, test ekspozicije, kalibracija, slojevi, dodatak
from: 83c394e1
---

Dodaci za smolu režu ono što je na platformi za ispis u slike slojeva za zaslon vašeg pisača i spremaju datoteku koju vaš pisač čita. Besplatni su, bez ičega zaključanog, i isključeni su dok ih ne uključite.

:::note
Još nijedna datoteka nije učitana na pravi pisač. Datoteke su pročitane samo vlastitim čitačima CadCrafta, a podupirači su novi. Provjerite slojeve i prvi ispis pokrenite ručno.
:::

## Što ćete napraviti

Pripremite dio za smolu, provjerite slojeve, spremite datoteku i kopirajte je na svoj pisač.

## Koraci

1. Otvorite {{ui:Postavke}} › {{ui:Dodaci}} i uključite dodatak za rezanje za smolu i dodatak za format datoteke vašeg pisača (Elegoo GOO, SL1, Chitubox ili Anycubic). Također možete pritisnuti {{ui:Dodaj ispis smolom}} na kartici faze ispisa.
2. Stavite dio na platformu kao u [Stavljanje stvari na platformu za ispis](topic:print-stage), zatim odaberite {{ui:Smola}} pored **Ispisivanje pomoću**.
3. Pod **Postavke ispisa smolom** odaberite svoj **Pisač** i svoju **Smolu**. Kartica prikazuje veličinu zaslona u pikselima. To su veličine koje objavljuje proizvođač, pa provjerite svoju; možete ih urediti pod Prilagođeno.
4. Postavite **Visina sloja (mm)**, **Ekspozicija (s)** i **Donja ekspozicija (s)**. Brojevi za svaku smolu su samo polazna točka.
5. Označite **Izdubi ga, s otvorom za odzračivanje** ako želite šuplji dio i postavite **Stijenka (mm)** i **Širina rupe (mm)**.
6. Označite **Podupirači i podloga** i odaberite **Gustoću podupirača**: Lagano, Srednje ili Gusto.
7. Odaberite **Format datoteke**. Ako kartica kaže da nijedan još nije dodan, pritisnite gumb koji glasi Dodaj i naziv formata.
8. Pritisnite {{ui:Pregledaj slojeve}} i pomičite klizač **Sloj**. Komadi koji lebde označeni su prstenom. Redak ispod daje broj slojeva, vrijeme te smolu u mL, gramima i cijenu.
9. Pritisnite {{ui:Spremi datoteku ispisa}}, provjerite sažetak i pritisnite {{ui:Spremi}}. Kopirajte datoteku na svoj pisač.

## Pronađite ekspoziciju

1. Uključite dodatak testa ekspozicije u {{ui:Postavke}} › {{ui:Dodaci}}.
2. Pritisnite {{ui:Stavi testni dio na platformu}}.
3. Pritisnite {{ui:Spremi ljestvicu ekspozicije}}. Dobit ćete jednu datoteku za svaku ekspoziciju, u zip-u.
4. Ispišite svaku datoteku istom smolom i zadržite onu ekspoziciju na kojoj su tanki stupići najoštriji, a rupe potpuno otvorene.

## Napomene

- Rezanje se izvodi u pozadini, pa stranica ostaje upotrebljiva na velikoj ploči.
- Dijelovi koji nisu zatvorena puna tijela su izostavljeni, a kartica to kaže.
- Ako pisač odbije datoteku, kartica formata ima opcije za ono što format ostavlja otvorenim. Promijenite jednu, ponovno spremite i javite nam koja je radila.
- Verzije Anycubic 517 i 518 se ne zapisuju.
