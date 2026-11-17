---
title: Meniji, tipke i miš
summary: Izaberi stil menija koji odgovara modeleru koji već poznaješ, daj bilo kojoj naredbi svoju tipku, premještaj naredbe između menija i postavi šta točkić i srednje i desno dugme miša rade.
keywords: stil menija, meniji, traka menija, traka alata, tipkovni prečaci, prečaci, tipke, stil tipki, mapa tipki, prilagodi, ponovo dodijeli, miš, točkić, obrni, smjer zumiranja, srednje dugme, desno dugme, orbita, pomjeranje pogleda, izvoz, uvoz, prebacivanje, poznato, guraj-povuci, modeler
from: e56fce3d
---

Alati ModelCraft-a su isti bez obzira kako do njih dođeš. **Stil menija** određuje gdje se nalaze na ekranu, kako se zovu i koje tipke ih pokreću. Izaberi ga u {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Meniji, tipke i miš}}; promjena je odmah, a ovaj pregledač je pamti.

## Stilovi

| Stil | Šta dobijaš |
|---|---|
| {{ui:ModelCraft}} | ModelCraft-ova traka alata (Datoteka, Crtanje, Izmjena, Organizacija, Uređivanje, Kamera) i njegove tipke od jednog slova: {{key:L}} linija, {{key:R}} pravougaonik, {{key:P}} guraj-povuci, {{key:M}} premjesti, {{key:Q}} rotiraj, {{key:S}} skaliraj, {{key:E}} gumica, {{key:O}} orbita. Podrazumijevani. |
| {{ui:Guraj-povuci}} | Traka menija (Datoteka, Uređivanje, Pogled, Kamera, Crtanje, Alati, Prozor) iznad reda glavnih alata, sa istim tipkama od jednog slova. |
| {{ui:Modeler}} | Zaglavlje sa menijem (Datoteka, Uređivanje, Pogled, Odabir, Dodaj, Objekat, Mreža) i tipke modelera mreža: {{key:W}} odaberi, {{key:G}} uhvati, {{key:R}} rotiraj i {{key:S}} skaliraj odabir odjednom ({{key:X}}, {{key:Y}} ili {{key:Z}} zaključava osu dok se pomjera), {{key:E}} guraj-povuci, {{key:B}} pravougaonik, {{key:X}} izbriši, {{key:A}} odaberi sve, {{key:Alt+A}} nijedno, {{key:Shift+D}} dupliraj, {{key:Mod+G}} grupiši, {{key:H}} sakrij. Srednje dugme orbitira; {{key:Shift}} i srednje dugme pomjeraju pogled, {{key:Mod}} i srednje dugme zumiraju; desno dugme poništava ono što alat radi. |
| {{ui:Početnik}} | Traka čija kartica {{ui:Napravi}} ima nekoliko velikih dugmadi: oblici za ispuštanje, rupe, pomjeranje, okretanje i veličina, poravnanje, {{ui:Grupa}} (rupe izrezane u oblicima) i provjera za 3D štampu; svaki drugi alat je na kartici {{ui:Više alata}}. Desno dugme orbitira, srednje pomjera pogled. Pogledaj [Stil Početnik](topic:beginner). |

Stil tipki koji možda poznaješ iz {{ui:Ključevi}} u donjem desnom uglu pogleda i iz {{ui:Uređivanje}} › {{ui:Više}} je isti izbor: ako izabereš tipke modelera, bira se stil {{ui:Modeler}}, a ako izabereš tipke guraj-povuci, napušta se za stil {{ui:ModelCraft}}. Ako si u starijoj verziji izabrao tipke modelera, ModelCraft se jednom sam otvori u stilu {{ui:Modeler}}.

:::tip
Tipka koja pripada tipkama guraj-povuci, a tvoj stil je daje drugoj naredbi, ne radi ništa, a linija statusa kaže gdje je njena naredba otišla ("U Modeleru, Guraj/povuci je E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvijek zadržavaju svoje značenje, brojevi uvijek idu u polje za vrijednost, a dok alat nešto pomjera, njegove tipke pobjeđuju.
:::

## Prilagodi

1. Izaberi stil koji je najbliži onome što želiš, pa klikni {{ui:Prilagodi…}}.
2. Na {{ui:Tipke i meniji}} pronađi naredbu (pretraživanje pomaže). {{ui:Dodaj ključ}} i pritisni tipku. Klikni tipku da je ukloniš.
3. Uz traku menija, {{ui:Gdje stoji}} premješta naredbu u drugi meni, ili na {{ui:Samo tipke}}.
4. Na {{ui:Miš}} postavi točkić i šta rade dugmad u 3D pogledu.
5. Daj mu naziv i klikni {{ui:Spasi}}.

Spašavanje ugrađenog stila pravi tvoju kopiju ("Moj Modeler"); ugrađeni se nikad ne mijenja. Tvoja kopija čita tipke na isti način kao stil od kojeg je započeta: ona napravljena od {{ui:Modeler}} zadržava tipke uhvati, rotiraj i skaliraj odmah.

## Miš

- **Točkić miša**: {{ui:Skrolanje prema gore zumira unutra}} (početno) ili {{ui:Skrolanje prema gore zumira van}}, i koliko brzo. Štipanje trackpada uvijek zumira u smjeru u kojem se kreću prsti.
- **Prevlačenje u 3D pogledu**: {{ui:Svaki pogled za sebe}} zadržava ModelCraft-ova dugmad (srednje dugme orbitira, desno dugme ili {{key:Shift}} i srednje dugme pomjeraju pogled). Ili postavi srednje i desno dugme da orbitiraju, pomjeraju pogled, zumiraju ili ništa; {{key:Shift}} uz dugme zamjenjuje orbitu i pomjeranje. Lijevo dugme uvijek pripada alatu u upotrebi.
- **Trackpadovi**: {{ui:Postavke}} › {{ui:ModelCraft}} › {{ui:Pomicanje}} i dalje odlučuje da li dva prsta orbitiraju (trackpad) ili zumiraju (miš). Pogledaj [Orbita, pomjeranje i zumiranje](topic:orbit-pan-zoom).

## Ponesi sa sobom

{{ui:Izvezi}} čuva stil u upotrebi kao mali `.ccinput.json` fajl; {{ui:Uvezi…}} dodaje jedan, sa drugog računara ili od kolege. Uvezena datoteka može pokazivati samo na ModelCraft-ove naredbe: sve drugo se izostavlja i broji u liniji statusa. {{ui:Izbriši ovaj stil}} uklanja jedan od tvojih.

:::note
Ove postavke ostaju u ovom pregledaču. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stila čini da svaka aplikacija otvara odgovarajući stil: {{ui:Guraj-povuci}} ide uz stilove sa trakom menija drugih aplikacija. {{ui:Modeler}} nema pandan u drugim aplikacijama, pa ostaje izbor samo ModelCraft-a.
:::

Povezano: [Tipke i radnje mišem](topic:keyboard) · [Postavke ModelCraft-a](topic:settings) · [Dolazak sa drugih modelera](topic:coming-from)
