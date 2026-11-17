---
title: Čvorovi: izrada modela povezivanjem
summary: Povežite brojeve u točke, točke u krivulje, krivulje u plohe. Promijenite broj i sve ovisno o njemu se ponovno izgrađuje. Svaki čvor je ujedno i redak CraftScripta, a graf se sprema u datoteku.
keywords: čvorovi, uređivač čvorova, vizualno skriptiranje, parametarski, graf, veze, priključci, slobodni oblik, freeform, nurbs, loft, izvuci, rotiraj, kružnica, krivulja, ploha, niz, raspon, slučajno, popis, skripta, craftscript, grasshopper
from: 9c8e254f
---

Uređivač **Čvorovi** izrađuje geometriju povezivanjem kutija. Svaka kutija (čvor) obavlja jedan mali posao: izrađuje broj, točku, kružnicu ili loft. Rezultat jednog spajate na ulaz sljedećeg, pa model slijedi promjenu broja na početku.

Otvorite ga s desne ploče: {{ui:Čvorovi}} › {{ui:Čvorovi…}}. Datoteka koja već ima graf otvara ga sama. Riječ je o prozoru iznad 3D prikaza: povucite njegovu naslovnu traku za pomicanje, a kut za promjenu veličine.

## Povezivanje

1. Odaberite čvor s popisa lijevo (upišite u polje za pretragu da suzite popis; <kbd>Enter</kbd> dodaje prvi pogodak). Pojavit će se u sredini platna.
2. Povucite od okrugle točke **izlaza** s desne strane jednog čvora do okrugle točke **ulaza** s lijeve strane drugog. Točka postaje zelena kad odgovara, a crvena kad ne odgovara. Zadržite pokazivač nad njom da vidite razlog.
3. Ulaz bez veze prikazuje okvir za upisanu vrijednost. Upišite broj i pritisnite <kbd>Tab</kbd>: rezultat se ponovno izgrađuje.
4. Mali krug u naslovnoj traci čvora je njegovo **oko**. Čvor s uključenim okom crta se u 3D prikazu: kao linije za krivulje, sjenčano za plohe, točkice za točke.

Povucite čvor za njegovu naslovnu traku. Povucite pozadinu za pomicanje prikaza, a kotačićem miša zumirajte. <kbd>Delete</kbd> uklanja odabrani čvor. {{ui:Poredaj}} slaže čvorove u stupce, {{ui:Prilagodi}} ih sve dovodi u prikaz, a {{ui:Poništi}} i {{ui:Ponovi}} kreću se kroz vaše promjene.

## Vrste i jedinice

Priključci imaju vrstu: broj, da/ne, točka, vektor, krivulja, ploha, mreža, tijelo ili „geometrija“ za bilo koju od njih. Točka može ići na ulaz vektora i obrnuto. Brojevi nose jedinicu: **duljina** je u milimetrima, a **kut** u stupnjevima. Duljina ne može na ulaz kuta, a duljina pomnožena duljinom (površina) se odbija, pa se pogrešna veza zaustavi čim je napravite.

Kvadratna točka je **popis**. Kad popis dođe na ulaz za jednu vrijednost, čvor se izvrši jednom za svaku stavku, a njegov rezultat postaje popis. Kraći popis ponavlja svoju zadnju stavku. Na primjer, **Niz** visina spojen na **Pomakni** daje hrpu kopija.

## Tijela i Booleove operacije kao čvorovi

Grupa **Tijela** izrađuje zatvorena tijela od istih točnih ploha kao ploča Plohe: **Kutijasto tijelo**, **Cilindrično tijelo** i **Kuglasto tijelo** (dimenzije u mm), **Unija**, **Oduzmi** i **Presijeci** (drugo tijelo uzima se iz prvog; tolerancija je koliko trokuti motora tijela smiju odstupati od točnih ploha), **Zaobljenje između ploha** (plohe po njihovom broju u tijelu, 1 za prvu; polumjer i, iznad 0, polumjer na kraju), **Volumen tijela** (mm³) i **Tijelo u mrežu** (za prikaz ili pretvaranje u model).

Tijelo ima vlastitu vrstu priključka: točka ili broj ne mogu se spojiti na ulaz tijela, a točka ostaje crvena. Čvorovi Booleove operacije i zaobljenja koriste vlastiti motor tijela programa, koji se učitava prvi put kad se uređivač otvori.

## Greške

Čvor koji ne može obaviti svoj posao kaže zašto ispod svog imena, crveno („Polumjer mora biti veći od nule.“), a čvorovi nakon njega čekaju. Ista poruka je **problem** u ploči Problemi, pa je odatle možete pronaći.

## Svaki čvor je redak skripte

Pritisnite {{ui:Skripta}} da vidite graf kao CraftScript: jedan redak po čvoru, npr. `n3 = nd_circle(n2, n1, [0 0 1]);`. Uredite tekst i pritisnite {{ui:Izradi graf iz ove skripte}} da ga vratite u graf. Iste `nd_` funkcije rade i u CraftScriptu u PartCraftu, pa se graf tamo može pokrenuti, ponavljati ili testirati. Slučajni brojevi uvijek uzimaju **sjeme**, pa isti graf daje isti rezultat na svakom računalu.

## Spremljeno uz datoteku

Graf se sprema u datoteku modela. Čvorovi izrađuju vlastite krivulje, plohe i mreže: ne mijenjaju plohe modela dok to ne zatražite.

## Pretvorba u model

Uključite oko čvora koji izrađuje plohu ili mrežu, zatim pritisnite {{ui:Pretvori u model}} u prozoru Čvorovi. Svaka prikazana ploha ili mreža postaje grupa ploha u modelu, u metrima, koju možete uređivati kao i svaku drugu. To je jedan korak poništavanja. Graf ostaje, ali kopija ga više ne prati: promijenite broj i ponovno pretvorite za novu. Točke i krivulje nisu tijela, pa su izostavljene, a poruka kaže koliko ih je.
