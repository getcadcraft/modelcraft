---
title: Priprema za pisač na smolu
summary: Pripremite podlogu za ispis za pisač na smolu, izradite dio šupljim i s potporama, pregledajte slojeve, spremite datoteku pisača i pronađite ekspoziciju pomoću testa ekspozicije.
keywords: smola, predloži nagib, usisna čašica, sila odvajanja, ukrućenja, ispis smolom, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, šupljina, otvor za odzračivanje, podloga, potpore, test ekspozicije, ljestvica ekspozicije, kalibracija, slojevi, dodatak
from: 8cc12858
---

Dodaci za smolu pretvaraju ono što se nalazi na podlozi za ispis u slike slojeva za zaslon vašeg pisača i spremaju datoteku koju pisač čita. Besplatni su, bez ikakvih zaključanih funkcija, a isključeni su dok ih ne uključite.

:::note
Datoteka još nije učitana na pravom pisaču. Datoteke su provjerili samo vlastiti čitači programa CadCraft, a potpore su nove. Provjerite slojeve i prvi ispis pokrenite ručno.
:::

## Što ćete raditi

Pripremiti dio za smolu, provjeriti slojeve, spremiti datoteku i kopirati je na pisač.

## Koraci

1. Otvorite {{ui:Postavke}} › {{ui:Dodaci}} i uključite dodatak za rezanje za smolu i dodatak za format datoteke vašeg pisača (Elegoo GOO, SL1, Chitubox ili Anycubic). Također možete pritisnuti {{ui:Dodaj ispis smolom}} na kartici faze ispisa.
2. Postavite dio na podlogu kao u članku [Postavljanje stvari na podlogu za ispis](topic:print-stage), zatim odaberite {{ui:Smola}} pored **Ispis pomoću**.
3. U odjeljku **Postavke ispisa smolom** odaberite svoj **Pisač** i svoju **Smolu**. Kartica prikazuje veličinu zaslona u pikselima. To su veličine koje objavljuje proizvođač, pa ih provjerite za svoj pisač; možete ih urediti pod opcijom Prilagođeno.
4. Postavite **Visina sloja (mm)**, **Ekspozicija (s)** i **Ekspozicija donjih slojeva (s)**. Brojke za svaku smolu samo su polazna točka.
5. Označite **Šupljina, s otvorom za odzračivanje** ako želite šuplji dio, pa postavite **Stijenka (mm)** i **Širina rupe (mm)**.
6. Označite **Potpore i podloga** i odaberite **Gustoća potpora**: Lagana, Srednja ili Gusta.
7. Odaberite **Format datoteke**. Ako kartica kaže da još nijedan nije dodan, pritisnite gumb s natpisom Dodaj i nazivom formata.
8. Pritisnite {{ui:Pregled slojeva}} i pomaknite klizač **Sloj**. Plutajući dijelovi bit će označeni kružnicom. Redak ispod daje broj slojeva, vrijeme te smolu u mL, gramima i trošak.
9. Pritisnite {{ui:Spremi datoteku za ispis}}, provjerite sažetak i pritisnite {{ui:Spremi}}. Kopirajte datoteku na svoj pisač.

## Nagib, usisne čašice, ukrućenja i procjena sile odvajanja

Ova četiri podatka procjene su prema obliku dijela. Nijedan još nije isproban na pravom pisaču, pa ih shvatite kao savjet i pogledajte slojeve.

1. Pritisnite {{ui:Predloži nagib}} pod **Nagib (stupnjevi)**. CadCraft isprobava nagibe od 0 do 60 stupnjeva i bira onaj s najmanjim najvećim slojem, najmanje nagnutim površinama i bez usisne čašice. Postavlja **Nagib (stupnjevi)** i navodi što je pronašao. Težine za bodovanje odredili smo mi, a ne proizvođač pisača.
2. Nakon {{ui:Pregled slojeva}} upozorenje navodi šupljine koje se otvaraju samo prema foliji. Takva šupljina može zadržati usisavanje kad se sloj odvoji. Nagnite dio ili dodajte rupu. Udubine uže od veličine ćelije navedene u upozorenju nisu uočene.
3. Uz uključene **Potpore i podloga** označite **Ojačaj visoke potpore** da dodate poprečna ukrućenja između visokih tankih stupova.
4. Redak ispod pregleda daje najveći sloj u cm2. Silu prikazuje samo ako unesete **Izmjerena naprezanja odvajanja** pod **Donji slojevi, podizanje i brzine**. Bez vlastitog izmjerenog podatka prikazuje samo površinu.

## Pronalaženje ekspozicije

1. Uključite dodatak za test ekspozicije u {{ui:Postavke}} › {{ui:Dodaci}}.
2. Pritisnite {{ui:Postavi testni dio na podlogu}}.
3. Pritisnite {{ui:Spremi ljestvicu ekspozicije}}. Dobit ćete jednu datoteku za svaku ekspoziciju, u zip arhivi.
4. Ispišite svaku datoteku istom smolom i zadržite onu ekspoziciju na kojoj su tanki stupovi i otvorene rupe najoštriji.

## Napomene

- Rezanje se izvodi u pozadini, pa stranica ostaje upotrebljiva i pri velikoj podlozi.
- Dijelovi koji nisu zatvorena tijela izostavljaju se, a kartica to navodi.
- Ako pisač odbije datoteku, kartica formata nudi opcije za ono što format ostavlja otvoreno. Promijenite jednu, ponovno spremite i javite nam koja je opcija uspjela.
- Verzije Anycubic 517 i 518 nisu podržane.
