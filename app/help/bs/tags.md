---
title: Oznake: prikaz i skrivanje skupova
summary: Dodijeli grupama i komponentama oznaku, npr. Namještaj ili Zidovi, i odjednom sakrij ili prikaži sve s tom oznakom.
keywords: oznake, oznaka, slojevi, sloj, prikaži, sakrij, vidljivost, organizuj, namještaj, zidovi, bez oznake, preimenuj oznaku, izbriši oznaku
from: c1a95a05
---

Oznaka je ime koje daješ grupama i komponentama, kao što su **Namještaj**, **Zidovi** ili **Lokacija**, da bi odjednom mogao sakriti ili prikazati sve s tom oznakom. Oznake su ono što CAD programi zovu slojevi. Za skrivanje jedne po jedne stvari vidi [Sakrij, izoluj i ponovo prikaži](topic:hide-isolate).

## Napravi oznaku

1. U {{ui:Oznake}} s desne strane klikni {{ui:Dodaj oznaku}}.
2. Upiši njeno ime i pritisni {{key:Enter}}.

Da preimenuješ oznaku, klikni njeno ime u {{ui:Oznake}}, upiši novo i pritisni {{key:Enter}}. Dvije oznake ne mogu imati isto ime.

## Označi grupe i komponente

1. Odaberi jednu ili više grupa ili komponenti.
2. U {{ui:Podaci o entitetu}} izaberi oznaku u {{ui:Oznaka}}. {{ui:Nova oznaka…}} pravi novu i njome označava odabir.

{{ui:Bez oznake}} skida oznaku. Broj pored svake oznake u {{ui:Oznake}} pokazuje koliko grupa i komponenti je ima.

Označi grupe i komponente, a ne slobodne površine i ivice: prvo nacrtaj stvari koje želiš označiti kao grupe (odaberi ih, {{key:Shift+G}}).

## Sakrij i prikaži

Klikni ikonu oka pored oznake. Sve s tom oznakom nestaje iz vidokruga, gdje god se nalazi u modelu (i unutar drugih grupa), a klikovi i hvatanja prolaze kroz nju. Klikni ikonu oka ponovo da je prikažeš. Stvari {{ui:Bez oznake}} se uvijek prikazuju.

Ako uređuješ unutar grupe čiju oznaku sakrivaš, grupa se zatvara.

## Izbriši oznaku

Klikni ikonu kante pored nje. Ono što je imalo oznaku postaje {{ui:Bez oznake}} i prikazuje se.

## Šta treba znati

- Oznake, njihova imena i to koje su skrivene čuvaju se u ModelCraft datoteci. Kopiranje označene grupe u drugi model donosi i njenu oznaku.
- Skrivanje i prikazivanje oznake, kao i svaka druga izmjena oznaka, jedan je korak poništavanja.
- Izvozi uključuju sve, i skrivene oznake, kao što to rade i za skrivene stvari.
- Slojevi u DWG i DXF planovima lokacije još se ne uvoze kao oznake: cijeli crtež se uvozi kao jedna grupa.
