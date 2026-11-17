---
title: Meniji, tasteri i miš
summary: Izaberi stil menija koji odgovara modeleru koji već poznaješ, dodeli bilo kojoj komandi sopstveni taster, premesti komande između menija i podesi šta točkić i srednje i desno dugme miša rade.
keywords: stil menija, meniji, traka menija, traka alata, prečice na tastaturi, tasteri, stil tastera, mapa tastera, prilagodi, ponovo dodeli, miš, točkić, invertuj, smer uvećavanja, srednje dugme, desno dugme, rotiranje pogleda, pomeranje, izvoz, uvoz, prebacivanje, poznato, guraj-povuci, modeler
from: e56fce3d
---

Alati ModelCraft-a su isti kako god do njih dođete. **Stil menija** određuje gde stoje na ekranu, kako se zovu tamo i koji ih tasteri pokreću. Izaberite ga u {{ui:Podešavanja}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Meniji, tasteri i miš}}; promena je odmah, a ovaj pregledač je pamti.

## Stilovi

| Stil | Šta dobijate |
|---|---|
| {{ui:ModelCraft}} | ModelCraft-ov sopstveni alatni trak (Datoteka, Crtanje, Izmena, Organizovanje, Uređivanje, Kamera) i njegovi jednoslovni tasteri: {{key:L}} linija, {{key:R}} pravougaonik, {{key:P}} guraj/povuci, {{key:M}} premesti, {{key:Q}} rotiraj, {{key:S}} skaliraj, {{key:E}} gumica, {{key:O}} rotiranje pogleda. Početni. |
| {{ui:Guraj-povuci}} | Traka menija (Datoteka, Uređivanje, Prikaz, Kamera, Crtanje, Alati, Prozor) iznad reda glavnih alata, sa istim jednoslovnim tasterima. |
| {{ui:Modeler}} | Traka menija u zaglavlju (Datoteka, Uređivanje, Prikaz, Izbor, Dodaj, Objekat, Mreža) i tasteri modelera mreža: {{key:W}} izaberi, {{key:G}} uhvati, {{key:R}} rotiraj i {{key:S}} skaliraj izbor odjednom ({{key:X}}, {{key:Y}} ili {{key:Z}} zaključava osu dok se pomera), {{key:E}} guraj/povuci, {{key:B}} pravougaonik, {{key:X}} izbriši, {{key:A}} izaberi sve, {{key:Alt+A}} nijedno, {{key:Shift+D}} dupliraj, {{key:Mod+G}} grupiši, {{key:H}} sakrij. Srednje dugme rotira pogled; {{key:Shift}} i srednje dugme pomeraju, {{key:Mod}} i srednje dugme uvećavaju; desno dugme poništava ono što alat radi. |
| {{ui:Početnik}} | Traka čiji je jezičak {{ui:Napravi}} nekoliko velikih dugmadi: oblici za prevlačenje, rupe, pomeranje, okretanje i veličina, poravnanje, {{ui:Grupa}} (rupe isečene u oblicima) i provera za 3D štampu; svaki drugi alat je na jezičku {{ui:Još alata}}. Desno dugme rotira pogled, srednje dugme pomera. Videti [Stil Početnik](topic:beginner). |

Stil tastera koji možda poznajete iz {{ui:Ključevi}} u donjem desnom uglu prikaza i iz {{ui:Uređivanje}} › {{ui:Više}} je isti izbor: izbor tastera modelera tamo bira stil {{ui:Modeler}}, a izbor tastera guraj-povuci ga ostavlja za stil {{ui:ModelCraft}}. Ako ste u starijoj verziji izabrali tastere modelera, ModelCraft se jednom sam otvara u stilu {{ui:Modeler}}.

:::tip
Taster koji pripada tasterima guraj-povuci, a vaš stil ga dodeljuje drugoj komandi, ne radi ništa, a linija statusa kaže gde je njegova komanda otišla („U Modeler, Guraj/povuci je E“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvek zadržavaju svoje značenje, brojevi uvek idu u polje vrednosti, a dok alat nešto pomera, njegovi sopstveni tasteri imaju prednost.
:::

## Prilagodite

1. Izaberite stil koji je najbliži onome što želite, pa kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Ključevi i meniji}} pronađite komandu (polje za pretragu pomaže). {{ui:Dodaj taster}} i pritisnite taster. Kliknite taster da ga uklonite.
3. Uz traku menija, {{ui:Gde se nalazi}} premešta komandu u drugi meni, ili na {{ui:Samo tasteri}}.
4. Na {{ui:Miš}} podesite točkić i šta dugmad rade u 3D prikazu.
5. Dajte mu ime i kliknite {{ui:Sačuvaj}}.

Čuvanje ugrađenog stila pravi vašu sopstvenu kopiju („Moj Modeler“); ugrađeni se nikad ne menja. Vaša kopija čita tastere kao stil od kog je krenula: ona napravljena od {{ui:Modeler}} održava da tasteri zahvati, rotiraj i skaliraj rade odjednom.

## Miš

- **Točkić miša**: {{ui:Skrolovanje nagore uvećava}} (početno) ili {{ui:Skrolovanje nagore smanjuje}}, i koliko brzo. Štipanje prstima na touchpad-u uvek uvećava u smeru kojim se prsti pomeraju.
- **Prevlačenje u 3D prikazu**: {{ui:Svaki pogled zasebno}} zadržava dugmad ModelCraft-a (srednje dugme rotira, desno dugme ili {{key:Shift}} i srednje dugme pomeraju). Ili postavite srednje i desno dugme na rotiranje, pomeranje, uvećavanje ili ništa; {{key:Shift}} uz dugme menja rotiranje i pomeranje. Levo dugme uvek pripada alatu u upotrebi.
- **Touchpad**: {{ui:Podešavanja}} › {{ui:ModelCraft}} › {{ui:Skrolovanje}} i dalje odlučuje da li dva prsta rotiraju (touchpad) ili uvećavaju (miš). Videti [Rotiranje, pomeranje i uvećavanje](topic:orbit-pan-zoom).

## Ponesite sa sobom

{{ui:Izvezi}} čuva stil u upotrebi kao malu datoteku `.ccinput.json`; {{ui:Uvezi…}} dodaje jednu, sa drugog računara ili od kolege. Uvezena datoteka može da upućuje samo na sopstvene komande ModelCraft-a: sve drugo se izostavlja i broji u liniji statusa. {{ui:Izbriši ovaj stil}} uklanja jedan od vaših.

:::note
Ova podešavanja ostaju u ovom pregledaču. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stilova čini da svaka aplikacija otvara odgovarajući stil: {{ui:Guraj-povuci}} ide uz stilove trake menija drugih aplikacija. {{ui:Modeler}} nema pandana u drugim aplikacijama, pa ostaje izbor ModelCraft-a.
:::

Povezano: [Tasteri i radnje mišem](topic:keyboard) · [Podešavanja ModelCraft-a](topic:settings) · [Dolazak iz drugih modelera](topic:coming-from)
