---
title: Modifikatori na mreži, grupi ili komponenti
summary: Skaliraj, ogledaj, niži, zaglađuj, zakosi, seci i savijaj mrežu bez promene same mreže; ponavljaj ili skaliraj grupu ili komponentu istim slogom; učini ga trajnim kad budeš spreman.
keywords: modifikator, modifikatori, slog, grupa, komponenta, skaliranje, pečenje, uredi izvor, nedestruktivno, ogledalo, niz, radijalni niz, podela površine, površina podele, zaglađivanje, zakošavanje, učvršćivanje, debljina, bulova operacija, sečenje, pomeranje, šum, zavarivanje, proređivanje, pojednostavljenje, rešetka, kavez, deformacija krivom, savijanje, stezanje omotača, primeni
from: dd5ec1cb
---

**Modifikator** menja ono što mreža prikazuje, bez promene same mreže. Ogledalite jednu polovinu dela i modelirajte samo tu polovinu; zaobljite kutiju površinom podele i nastavite da uređujete kutiju. Modifikatori stoje u **slogu** i rade redom, odozgo nadole. Ono što vidite, izvozite, štampate i renderujete je mreža sa svakim uključenim modifikatorom.

## Dodajte modifikator

1. Izaberite mrežu. U radnom prostoru Model njegov odeljak **Modifikatori** je u {{ui:Podaci o entitetu}}; u radnom prostoru Mreža je u panelu desno.
2. Izaberite jedan iz {{ui:Dodaj modifikator…}}. Ide na dno sloga.
3. Promenite njegova podešavanja ispod imena. Dužine uzimaju iste vrednosti kao polje Vrednost, pa `600mm`, `2'6"` i `(6m)/4` svi rade.

Svaka promena je jedan korak opoziva: {{key:Mod+Z}} je vraća.

## Dugmad na svakom modifikatoru

- Polje za potvrdu ga uključuje ili isključuje.
- Dugme sa ekranom prikazuje ili sakriva ga u prikazu (ostaje u slogu).
- Dugme sa kamerom prikazuje ili sakriva ga u renderovanim slikama i videima, pa modifikator može biti samo za renderovanje (ili samo za prikaz).
- Strelice ga pomeraju gore ili dole u slogu. Redosled je bitan: ogledalo pa podela površine daje glatki šav, a podela pa ogledalo ne.
- {{ui:Primeni}} čini oblik delom mreže: modifikatori iznad njega i ovaj se izvršavaju na samoj mreži i napuštaju slog. Jedan je korak opoziva.
- Krst ga uklanja.

## Modifikatori

| Modifikator | Šta radi |
| --- | --- |
| Skaliraj | Skalira oko porekla objekta, faktor za crveno, zeleno i plavo. I na grupi ili komponenti. |
| Ogledalo | Dodaje ogledalsku kopiju preko crvene, zelene ili plave kroz poreklo mreže i spaja polovine tamo gde se sreću. |
| Niz | Kopira u liniji (korak sopstvene veličine puta brojevi koje date, plus fiksni korak), oko ose, ili duž krive u modelu. Grupa ili komponenta uzima liniju. |
| Površina podele | Zaglađuje mrežu Catmull-Clark podelom. Oštre ivice ostaju nabrane. Renderi mogu koristiti više nivoa nego prikaz. |
| Zakosi | Zaobljuje svaku ivicu oštriju od ugla koji date. |
| Učvrsti | Daje površini debljinu i zatvara obod. |
| Bulova | Seče, spaja ili zadržava preklapanje sa drugim objektom u modelu. Oba moraju biti zatvorena tela. |
| Pomeri | Pomera površinu unutra ili spolja glatkim šumom. Isto seme daje iste izbočine svaki put. |
| Zavari | Spaja temena bliža od date udaljenosti. |
| Proredi | Zadržava deo trouglova, uklanjajući one koji najmanje menjaju oblik. |
| Zaglađivanje | Opušta temena prema susedima. |
| Rešetka | Savija mrežu kavezom: pomerite tačke kaveza, a mreža prati. |
| Deformacija krivom | Savija mrežu duž krive u modelu, duž crvene, zelene ili plave. |
| Stezanje omotača | Pomera svako teme na najbližu tačku drugog objekta. |

## Na grupi ili komponenti

Grupa ili komponenta takođe može da čuva recept, pa senka lampe može biti **Skaliraj** i **Niz** jedne senke, a promena broja menja lampu.

1. Izaberite grupu ili komponentu. U {{ui:Podaci o entitetu}} njen odeljak **Modifikatori** prikazuje slog (u početku prazan).
2. Izaberite {{ui:Skaliraj}} ili {{ui:Niz}} iz {{ui:Dodaj modifikator…}}. Grupa postaje komponenta koja je **original, postavljen slogom**. Original se čuva: izmenite ga i svaka kopija odmah prati.
3. Skaliranje uzima faktor za crveno, zeleno i plavo (`1, 1, 2` udvostručuje visinu). Niz uzima broj kopija, korak kao udeo veličine rezultata do tada, i dodatni korak u dužinama.

Slog ide odozgo nadole po sopstvenim osama originala oko njegovog porekla, pa je redosled bitan: niz od tri kopije na razmaku od 3 m, pa Skaliranje 2 na crvenoj, stavlja kopije na 6 m; prvo Skaliranje pa niz ih drži na 3 m. Polje za potvrdu, strelice i krst rade kao na mreži; dugmad prikaza i kamere i {{ui:Primeni}} na jednom modifikatoru ne rade, jer je slog na grupi jedna stvar.

- {{ui:Uredi izvor}} otvara original na mestu. Promene se vide u svakoj kopiji; zatvaranje vraća na mesto gde ste bili.
- {{ui:Peci modifikatore}} pravi rezultat običnim ivicama i površinama i uklanja slog, u jednom koraku opoziva. Kopije koje se preklapaju ostaju zasebna geometrija: pečenje nije unija.
- Kopije komponente dele recept; {{ui:Napravi jedinstvenu}} ga razdvaja (original ostaje zajednički).
- Slog se čuva u datoteci, nose ga kopiranje i nalepljivanje i opoziv, a Očisti neiskorišćeno čuva original. Program koji ne zna za modifikatore i dalje prikazuje kopije.
- Do pečenja, rezultat se ne može ući, rastaviti, promeniti veličinu ili rastegnuti: bio bi ponovo izgrađen pri sledećoj promeni. Svaka to kaže.
- Ograničenja su 32 modifikatora i 1,000 kopija. Komponenta napravljena za rastezanje i slog još ne mogu deliti definiciju.

## Površina podele

Podela glača mrežu Catmull-Clark postupkom: svaka površina postaje četvorouglovi, a svaki nivo daje četiri puta više. Kutija sa dva ili tri nivoa već izgleda kao zaobljen oblik, a vi nastavljate da uređujete kutiju.

- **Nivoi u prikazu** određuju koliko je glatko.
- **Nivoi u renderima** određuju koliko su glatke renderovane slike i videi; renderi mogu koristiti više nivoa nego prikaz.
- **Renderi na pravoj glatkoj površini** stavljaju tačke renderovane mreže na graničnu površinu ka kojoj nivoi teže, pa čak i dva nivoa renderuju kao mnogo.
- **Nabori** drže ivice oštrim: u radnom prostoru Mreža izaberite ivice i upotrebite {{ui:Nabor}} (1 ostaje oštro, 0.5 malo zaokružuje, 0 je glatko). Videti [Uredi mrežu](topic:mesh-edit).
- **Smanjite nivo prikaza na velikoj mreži:** kad bi traženi nivoi dali više površina nego što računar dobro podnosi, prikaz pokazuje niži nivo i kaže koji. {{ui:Primeni}} uvek koristi sve nivoe. Koliko površina je dozvoljeno zavisi od klase vašeg računara u {{ui:Podešavanja}} › Renderovanje › Vaš računar.
- Otvoreni obodi zadržavaju svoje uglove i ostaju na liniji svojih ivica.

## Savijanje rešetkom

1. Dodajte modifikator {{ui:Rešetka}} i pritisnite {{ui:Dodaj kavez rešetke oko mreže}}. Kavez od 3 × 3 × 3 tačke se pojavljuje oko mreže, prikazan žicama.
2. Otvorite kavez u radnom prostoru Mreža (dvaput kliknite) i pomerajte njegove tačke. Mreža ih glatko prati.

:::tip
Kavez je mreža kao i svaka druga: sakrijte ga njegovom oznakom kad završite.
:::

## Velike mreže

Mali slogovi se izračunavaju odmah. Veliki se računaju u pozadini na svakom jezgru računara: prikaz do tada pokazuje poslednji rezultat dok novi ne bude spreman. Bulove operacije prvi put učitavaju modelator tela; prikaz to kaže na trenutak.

## Šta modifikatori još ne rade

- Težine po temenu (opadanje naslikano na mreži) za Pomeri, Zaglađivanje i Stezanje omotača.
- Modifikatori osim Skaliraj i linearnog Niza na geometriji guraj-povuci (grupe i komponente): prvo je pretvorite u mrežu ({{ui:Pretvori u mrežu}}). Ogledalo, kružni ili krivi Niz, Savijanje i Suženje na grupama dolaze kasnije.
