---
title: Oznake: prikazivanje i skrivanje skupova
summary: Daj grupama i komponentama oznaku, na primer Nameštaj ili Zidovi, i sakrij ili prikaži sve sa tom oznakom odjednom.
keywords: oznake, oznaka, slojevi, sloj, prikaz, skrivanje, vidljivost, organizovanje, nameštaj, zidovi, bez oznake, preimenuj oznaku, obriši oznaku
from: c1a95a05
---

Oznaka je ime koje daješ grupama i komponentama, na primer **Nameštaj**, **Zidovi** ili **Lokacija**, da bi sve sa tom oznakom mogao odjednom da sakriješ ili prikažeš. Oznake su ono što CAD programi nazivaju slojevima. Za skrivanje jedne po jedne stvari vidi [Sakrij, izoluj i prikaži](topic:hide-isolate).

## Napravi oznaku

1. U {{ui:Oznake}} desno klikni {{ui:Dodaj oznaku}}.
2. Unesi njeno ime i pritisni {{key:Enter}}.

Da preimenuješ oznaku, klikni njeno ime u {{ui:Oznake}}, unesi novo i pritisni {{key:Enter}}. Dve oznake ne mogu imati isto ime.

## Označi grupe i komponente

1. Izaberi jednu ili više grupa ili komponenti.
2. U {{ui:Podaci o entitetu}} izaberi oznaku u {{ui:Oznaka}}. {{ui:Nova oznaka…}} pravi novu i njome označava izbor.

{{ui:Bez oznake}} uklanja oznaku. Broj pored svake oznake u {{ui:Oznake}} kaže koliko grupa i komponenti je ima.

Označavaj grupe i komponente, a ne slobodne površi i ivice: stvari koje želiš da označiš prvo nacrtaj kao grupe (izaberi ih, pa {{key:Shift+G}}).

## Sakrij i prikaži

Klikni oko pored oznake. Sve sa tom oznakom nestaje iz vida, gde god da je u modelu (i unutar drugih grupa), a klikovi i hvatanja prolaze kroz nju. Klikni oko ponovo da je prikažeš. Stvari {{ui:Bez oznake}} uvek se prikazuju.

Ako uređuješ unutar grupe čiju oznaku sakrivaš, grupa se zatvara.

## Obriši oznaku

Klikni kantu pored nje. Ono što je imalo tu oznaku postaje {{ui:Bez oznake}} i prikazuje se.

## Na šta treba paziti

- Oznake, njihova imena i to koje su skrivene čuvaju se u ModelCraft datoteci. Kopiranje označene grupe u drugi model donosi i njenu oznaku.
- Skrivanje i prikazivanje oznake, kao i svaka druga promena oznaka, jeste jedan korak opozivanja.
- Izvozi obuhvataju sve, uključujući skrivene oznake, kao što je slučaj i sa skrivenim stvarima.
- Slojevi u DWG i DXF planovima lokacije još se ne uvoze kao oznake: ceo crtež se uvozi kao jedna grupa.
