---
title: Čvorovi: pravljenje modela povezivanjem
summary: Povežite brojeve u tačke, tačke u krive, krive u površi. Promenite broj i sve što zavisi od njega se ponovo gradi. Svaki čvor je ujedno red CraftScript-a, a graf se čuva u datoteci.
keywords: čvorovi, uređivač čvorova, vizuelno skriptovanje, parametarski, graf, žice, portovi, slobodna forma, freeform, nurbs, loft, izvlačenje, rotiranje, krug, kriva, površ, niz, opseg, slučajno, lista, skripta, craftscript, grasshopper
from: 9c8e254f
---

**Uređivač čvorova** pravi geometriju tako što povezuje kutije. Svaka kutija (čvor) obavlja mali posao: pravi broj, tačku, krug, loft. Rezultat jednog povezujete s ulazom sledećeg, a model prati kad promenite broj na početku.

Otvorite ga iz desnog panela: {{ui:Čvorovi}} › {{ui:Čvorovi…}}. Datoteka koja već ima graf otvara ga sama. To je prozor iznad 3D prikaza: prevucite naslovnu traku da ga pomerite, a ugao da mu promenite veličinu.

## Povezivanje

1. Izaberite čvor s liste levo (kucajte u polje za pretragu da suzite, <kbd>Enter</kbd> dodaje prvi pogodak). Pojavljuje se u sredini platna.
2. Prevucite s okrugle **izlazne** tačke desno na jednom čvoru na okruglu **ulaznu** tačku levo na drugom. Tačka postaje zelena kad se uklapa, a crvena kad ne; zadržite pokazivač na njoj da vidite razlog.
3. Ulaz bez veze prikazuje polje za unos vrednosti. Upišite broj i pritisnite <kbd>Tab</kbd>: rezultat se ponovo gradi.
4. Mali krug u naslovnoj traci čvora je njegovo **oko**. Čvor s uključenim okom crta se u 3D prikazu: kao linije za krive, senčen za površi, tačkice za tačke.

Prevucite čvor za naslovnu traku. Prevucite pozadinu da pomerate pogled, okrenite točkić da zumirate. <kbd>Delete</kbd> briše izabrani čvor. {{ui:Poredaj}} raspoređuje čvorove u kolone, {{ui:Uklopi}} sve dovodi u vidno polje, a {{ui:Opozovi}} i {{ui:Ponovi}} idu kroz vaše izmene.

## Tipovi i jedinice

Portovi imaju tip: broj, da/ne, tačka, vektor, kriva, površ, mreža, čvrsto telo ili „geometrija” za bilo koji od njih. Tačka može da ide na vektorski ulaz i obrnuto. Brojevi nose jedinicu: **dužina** je u milimetrima, a **ugao** u stepenima. Dužina ne može da ide na ugao, a dužina pomnožena dužinom (površina) se odbija, pa se pogrešna veza zaustavlja u trenutku kad je pravite.

Kvadratna tačka je **lista**. Kad lista stigne na ulaz za jednu vrednost, čvor se izvršava jednom za svaku stavku, a njegov rezultat postaje lista. Kraća lista ponavlja svoju poslednju stavku. Na primer, **Niz** visina vezan na **Premesti** pravi gomilu kopija.

## Čvrsta tela i Bulove operacije kao čvorovi

Grupa **Čvrsta tela** pravi zatvorena tela od istih tačnih površi kao panel Površi: **Kutija čvrsto telo**, **Valjak čvrsto telo** i **Sfera čvrsto telo** (veličine u mm), **Spoj**, **Oduzmi** i **Presek** (drugo telo se uzima iz prvog; tolerancija je koliko trouglovi motora čvrstih tela smeju da odstupaju od tačnih površi), **Zaobljenje između površi** (površi po njihovom broju u telu, 1 za prvu; poluprečnik i, iznad 0, poluprečnik na kraju), **Zapremina čvrstog tela** (mm³) i **Čvrsto telo u mrežu** (da se vidi ili zapeče). Čvrsto telo ima svoj tip porta: tačka ili broj ne mogu da se povežu na ulaz za čvrsto telo, i tačka ostaje crvena. Čvorovi Bulovih operacija i zaobljenja koriste sopstveni motor čvrstih tela programa, koji se učitava prvi put kad se uređivač otvori.

## Greške

Čvor koji ne može da obavi svoj posao kaže zašto ispod svog imena, crveno („Poluprečnik mora biti veći od nule.”), a čvorovi posle njega čekaju. Ista poruka je Problem u panelu Problemi, pa je odatle možete naći.

## Svaki čvor je red skripte

Pritisnite {{ui:Skripta}} da vidite graf kao CraftScript: jedan red po čvoru, na primer `n3 = nd_circle(n2, n1, [0 0 1]);`. Izmenite tekst i pritisnite {{ui:Napravi graf iz ove skripte}} da ga vratite kao graf. Iste `nd_` funkcije rade i u CraftScript-u u PartCraft-u, pa se graf tamo može pokrenuti, ponavljati ili testirati. Slučajni brojevi uvek uzimaju **seme**, pa isti graf daje isti rezultat na svakom računaru.

## Čuva se u datoteci

Graf se čuva u datoteci modela. Čvorovi prave sopstvene krive, površi i mreže: oni ne menjaju površi modela dok to ne zatražite.

## Zapeci u model

Uključite oko čvora koji pravi površ ili mrežu, pa pritisnite {{ui:Prebaci u model}} u prozoru Čvorovi. Svaka prikazana površ ili mreža postaje grupa površi u modelu, u metrima, koju možete uređivati kao i bilo šta drugo. To je jedan korak opoziva. Graf ostaje, ali kopija više ne prati graf: promenite broj i zapecite ponovo za novu. Tačke i krive nisu čvrsta tela, pa se izostavljaju, a poruka kaže koliko ih je.
