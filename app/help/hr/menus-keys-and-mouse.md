---
title: Izbornici, tipke i miš
summary: Odaberite stil izbornika koji odgovara modelaru koji već poznajete, dodijelite bilo kojoj naredbi vlastitu tipku, premjestite naredbe među izbornicima i postavite što rade kotačić te srednja i desna tipka miša.
keywords: stil izbornika, izbornici, traka izbornika, alatna traka, tipkovni prečaci, prečaci, tipke, stil tipki, shema tipki, prilagodba, ponovno dodjeljivanje, miš, kotačić, obrni, smjer zumiranja, srednja tipka, desna tipka, orbita, pomicanje, izvoz, uvoz, prebacivanje, poznato, guranje/povlačenje, modelar
from: e56fce3d
---

Alati programa ModelCraft jednaki su bez obzira na to kako do njih dođete. **Stil izbornika** određuje gdje se nalaze na zaslonu, kako se zovu i koje ih tipke pokreću. Odaberite ga u {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Izbornici, tipke i miš}}; promjena je odmah, a ovaj preglednik je pamti.

## Stilovi

| Stil | Što dobivate |
|---|---|
| {{ui:ModelCraft}} | Vlastita alatna traka programa ModelCraft (Datoteka, Crtanje, Izmjena, Organizacija, Uređivanje, Kamera) i njegove tipke od jednog slova: {{key:L}} linija, {{key:R}} pravokutnik, {{key:P}} guranje/povlačenje, {{key:M}} pomakni, {{key:Q}} zakreni, {{key:S}} skaliraj, {{key:E}} gumica, {{key:O}} orbita. Početak. |
| {{ui:Potisni/povuci}} | Traka izbornika (Datoteka, Uređivanje, Prikaz, Kamera, Crtanje, Alati, Prozor) iznad reda glavnih alata, s istim tipkama od jednog slova. |
| {{ui:Modelar}} | Zaglavlje s izbornicima (Datoteka, Uređivanje, Prikaz, Odabir, Dodavanje, Objekt, Mreža) i tipke modelara mreža: {{key:W}} odaberi, {{key:G}} zgrabi, {{key:R}} zakreni i {{key:S}} skaliraj odabir odjednom ({{key:X}}, {{key:Y}} ili {{key:Z}} zaključava os dok se pomiče), {{key:E}} guraj/povuci, {{key:B}} pravokutnik, {{key:X}} izbriši, {{key:A}} odaberi sve, {{key:Alt+A}} ništa, {{key:Shift+D}} dupliciraj, {{key:Mod+G}} grupiraj, {{key:H}} sakrij. Srednja tipka orbitira; {{key:Shift}} i srednja tipka pomiču, {{key:Mod}} i srednja tipka zumiraju; desna tipka poništava ono što alat radi. |
| {{ui:Početnik}} | Vrpca čija je kartica {{ui:Izradi}} nekoliko velikih gumba: oblici za ispuštanje, rupe, pomakni, zakreni i veličina, poravnanje, {{ui:Grupa}} (rupe izrezane u oblike) i provjera za 3D ispis; svi ostali alati na kartici {{ui:Više alata}}. Desna tipka orbitira, srednja pomiče. Vidi [Stil Početnik](topic:beginner). |

Stil tipki koji možda poznajete iz {{ui:Tipke}} u donjem desnom kutu prikaza i iz {{ui:Uređivanje}} › {{ui:Više}} je isti izbor: odabir tipki modelara tamo odabire stil {{ui:Modelar}}, a odabir tipki guranja/povlačenja ga ostavlja za stil {{ui:ModelCraft}}. Ako ste u starijoj verziji odabrali tipke modelara, ModelCraft se jednom sam otvori u stilu {{ui:Modelar}}.

:::tip
Tipka koja pripada tipkama guranja/povlačenja, a vaš stil daje drugoj naredbi, ne radi ništa, a statusni redak kaže gdje je njezina naredba otišla („U Modelaru, Potisni/povuci je E“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvijek zadržavaju svoje značenje, brojevi uvijek idu u okvir za vrijednost, a dok alat nešto pomiče, njegove vlastite tipke imaju prednost.
:::

## Prilagodite ga

1. Odaberite stil koji vam je najbliži, zatim kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tipke i izbornici}} pronađite naredbu (pomaže polje za pretraživanje). Kliknite {{ui:Dodaj tipku}} i pritisnite tipku. Kliknite tipku da je uklonite.
3. Uz traku izbornika, {{ui:Gdje se nalazi}} premješta naredbu u drugi izbornik ili na {{ui:Samo tipke}}.
4. Na {{ui:Miš}} postavite kotačić i što tipke rade u 3D prikazu.
5. Dajte mu naziv i kliknite {{ui:Spremi}}.

Spremanje ugrađenog stila pravi vašu kopiju („Moj Modelar“); ugrađeni se nikad ne mijenja. Vaša kopija čita tipke na način na koji ih čita stil od kojeg je krenula: kopija napravljena od {{ui:Modelar}} održava rad tipki zgrabi, zakreni i skaliraj odjednom.

## Miš

- **Kotačić miša**: {{ui:Pomicanje prema gore približava}} (početak) ili {{ui:Pomicanje prema gore udaljava}}, i koliko brzo. Stezanje na touchpadu uvijek zumira u smjeru kretanja prstiju.
- **Povlačenje u 3D prikazu**: {{ui:Svaki prikaz zasebno}} zadržava gumbe programa ModelCraft (srednja orbitira, desna ili {{key:Shift}} i srednja pomiču). Ili postavite srednju i desnu tipku na orbitu, pomicanje, zumiranje ili ništa; {{key:Shift}} uz tipku mijenja orbitu i pomicanje. Lijeva tipka uvijek pripada alatu koji se koristi.
- **Touchpadovi**: {{ui:Postavke}} › {{ui:ModelCraft}} › {{ui:Pomicanje}} i dalje odlučuje hoće li dva prsta orbitirati (touchpad) ili zumirati (miš). Vidi [Orbita, pomicanje i zumiranje](topic:orbit-pan-zoom).

## Ponesite ih sa sobom

{{ui:Izvezi}} sprema stil u uporabi kao malu datoteku `.ccinput.json`; {{ui:Uvezi…}} dodaje jednu, s drugog računala ili od kolege. Uvezena datoteka može pokazivati samo na vlastite naredbe programa ModelCraft: sve drugo se izostavlja i broji u statusnom retku. {{ui:Izbriši ovaj stil}} uklanja jedan vaš.

:::note
Ove postavke ostaju u ovom pregledniku. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stilova čini da se svaka aplikacija otvara u odgovarajućem stilu: {{ui:Potisni/povuci}} ide uz stilove trake izbornika drugih aplikacija. {{ui:Modelar}} nema parnjaka u drugim aplikacijama, pa ostaje izbor samo za ModelCraft.
:::

Vidi također: [Tipke i radnje mišem](topic:keyboard) · [Postavke programa ModelCraft](topic:settings) · [Dolazak iz drugih modelara](topic:coming-from)
