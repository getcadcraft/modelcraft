---
title: Oznake: prikaz i skrivanje skupova stvari
summary: Dajte grupama i komponentama oznaku, primjerice Namještaj ili Zidovi, pa sakrijte ili prikažite sve s tom oznakom odjednom.
keywords: oznake, oznaka, slojevi, sloj, prikaži, sakrij, vidljivost, organiziraj, namještaj, zidovi, bez oznake, preimenuj oznaku, izbriši oznaku
from: c1a95a05
---

Oznaka je naziv koji dajete grupama i komponentama, primjerice **Namještaj**, **Zidovi** ili **Lokacija**, kako biste sve s tom oznakom odjednom sakrili ili prikazali. Oznake su ono što CAD programi nazivaju slojevima. Za skrivanje jedne po jedne stvari vidi [Sakrij, izoliraj i ponovno prikaži](topic:hide-isolate).

## Stvaranje oznake

1. U {{ui:Oznake}} s desne strane kliknite {{ui:Dodaj oznaku}}.
2. Upišite naziv i pritisnite {{key:Enter}}.

Za preimenovanje oznake kliknite njezin naziv u {{ui:Oznake}}, upišite novi i pritisnite {{key:Enter}}. Dvije oznake ne mogu imati isti naziv.

## Označavanje grupa i komponenti

1. Odaberite jednu ili više grupa ili komponenti.
2. U {{ui:Informacije o entitetu}} odaberite oznaku u {{ui:Oznaka}}. {{ui:Nova oznaka…}} stvara novu i njome označava odabir.

{{ui:Bez oznake}} uklanja oznaku. Broj uz svaku oznaku u {{ui:Oznake}} kaže koliko grupa i komponenti je ima.

Označavajte grupe i komponente, a ne slobodne plohe i bridove: stvari koje želite označiti prvo nacrtajte kao grupe (odaberite ih, {{key:Shift+G}}).

## Sakrivanje i prikazivanje

Kliknite oko pored oznake. Sve s tom oznakom nestaje iz pogleda, gdje god se nalazi u modelu (i unutar drugih grupa), a klikovi i hvatanja prolaze mimo njih. Ponovno kliknite oko da je prikažete. Stvari {{ui:Bez oznake}} uvijek su prikazane.

Ako uređujete unutar grupe čiju oznaku sakrijete, grupa se zatvara.

## Brisanje oznake

Kliknite kantu za smeće pored nje. Ono što je imalo oznaku postaje {{ui:Bez oznake}} i prikazuje se.

## Što treba znati

- Oznake, njihovi nazivi i to koje su skrivene spremaju se u datoteku ModelCraft. Kopiranje označene grupe u drugi model donosi i njezinu oznaku.
- Skrivanje i prikazivanje oznake te svaka druga promjena oznaka jedan je korak poništavanja.
- Izvozi uključuju sve, i skrivene oznake, kao i skrivene stvari.
- Slojevi u DWG i DXF nacrtima lokacije za sada se ne uvoze kao oznake: cijeli crtež uvozi se kao jedna grupa.
