---
title: Modifikatori na mreži, grupi ili komponenti
summary: Skaliraj, zrcali, nizaj, zaglađuj, zaobljuj, sijeci i savij mrežu bez mijenjanja nje; ponavljaj ili skaliraj grupu ili komponentu istim redom; učini ga trajnim kad budeš spreman.
keywords: modifikator, modifikatori, red, grupa, komponenta, skaliraj, pretvori, uredi izvor, ne-destruktivno, zrcali, niz, radijalni niz, dijeljenje površina, zaglađivanje, zaobljivanje, debljina, bulova operacija, sijeci, pomjeranje, šum, spoji, redukcija, pojednostavi, rešetka, kavez, deformacija krive, savij, omotavanje, primijeni
from: dd5ec1cb
---

**Modifikator** mijenja šta mreža prikazuje, a ne samu mrežu. Ogledaj jednu polovinu dijela i modeliraj samo tu polovinu; zaobli kutiju površinom dijeljenja i nastavi da uređuješ kutiju. Modifikatori stoje u **redu** i rade po redu, odozgo prema dolje. Šta vidiš, izvoziš, štampaš i renderuješ je mreža sa svakim uključenim modifikatorom.

## Dodaj modifikator

1. Odaberi mrežu. U radnom prostoru Model njen odjeljak **Modifikatori** je u {{ui:Podaci o entitetu}}; u radnom prostoru Mreža je u panelu desno.
2. Izaberi jedan sa {{ui:Dodaj modifikator…}}. Ide na dno reda.
3. Promijeni postavke ispod njegovog naziva. Dužine uzimaju iste vrijednosti kao polje za vrijednost, pa `600mm`, `2'6"` i `(6m)/4` svi rade.

Svaka izmjena je jedan korak poništavanja: {{key:Mod+Z}} je vraća.

## Dugmad na svakom modifikatoru

- Kvačica ga uključuje ili isključuje.
- Dugme ekrana prikazuje ili skriva ga u pogledu (ostaje u redu).
- Dugme kamere prikazuje ili skriva ga u renderovanim slikama i videima, pa modifikator može biti samo za renderovanja (ili samo za pogled).
- Strelice ga pomjeraju gore ili dolje u redu. Redoslijed je bitan: ogledalo pa dijeljenje daje gladak šav, dijeljenje pa ogledalo ne.
- {{ui:Primijeni}} čini oblik dijelom same mreže: modifikatori iznad ovoga i ovaj se primjenjuju na samu mrežu i napuštaju red. Jedan korak poništavanja.
- Križić ga uklanja.

## Modifikatori

| Modifikator | Šta radi |
| --- | --- |
| Skaliraj | Skalira oko ishodišta objekta, faktorom za crvenu, zelenu i plavu. I na grupi ili komponenti. |
| Ogledalo | Dodaje ogledalsku kopiju preko crvene, zelene ili plave kroz ishodište mreže, i spaja polovine gdje se sastaju. |
| Niz | Kopira u liniji (korak vlastite veličine puta brojevi koje daš, plus fiksni korak), oko ose, ili duž krive u modelu. Grupa ili komponenta uzima liniju. |
| Površina dijeljenja | Zaglađuje mrežu Catmull-Clark dijeljenjem. Oštre ivice ostaju sa žlijebom. Renderi mogu koristiti više nivoa nego pogled. |
| Zaobljivanje | Zaobljuje svaku ivicu oštriju od ugla koji daš. |
| Debljina | Daje površini debljinu i zatvara ivicu. |
| Bulova operacija | Odsijeca, spaja ili zadržava preklapanje sa drugim objektom u modelu. Oba moraju biti zatvorena tijela. |
| Pomjeranje | Pomjera površinu unutra ili van glatkim šumom. Isto sjeme daje iste izbočine svaki put. |
| Spajanje | Spaja vrhove bliže od date udaljenosti. |
| Redukcija | Zadržava dio trouglova, uklanjajući one koji najmanje mijenjaju oblik. |
| Zaglađivanje | Opušta vrhove prema susjedima. |
| Rešetka | Savija mrežu kavezom: pomjeraj tačke kaveza, a mreža prati. |
| Deformacija krive | Savija mrežu duž krive u modelu, duž crvene, zelene ili plave. |
| Omotavanje | Pomjera svaki vrh na najbližu tačku drugog objekta. |

## Na grupi ili komponenti

Grupa ili komponenta može takođe čuvati recept, pa sjenilo lampe može biti **Skaliraj** i **Niz** jednog sjenila, i promjena jednog broja mijenja lampu.

1. Odaberi grupu ili komponentu. U {{ui:Podaci o entitetu}} njen odjeljak **Modifikatori** prikazuje red (prazan na početku).
2. Izaberi {{ui:Skaliraj}} ili {{ui:Niz}} iz {{ui:Dodaj modifikator…}}. Grupa postaje komponenta koja je **original koji postavlja red**. Original se čuva: uredi ga i svaka kopija odmah prati.
3. Skaliraj uzima faktor za crvenu, zelenu i plavu (`1, 1, 2` udvostručuje visinu). Niz uzima broj kopija, korak kao dio veličine rezultata do tada, i dodatni korak u dužinama.

Red se izvršava odozgo prema dolje u osama originala oko njegovog ishodišta, pa redoslijed je bitan: Niz od tri kopije na razmaku 3 m, pa Skaliraj 2 na crvenoj, stavlja kopije 6 m jednu od druge; prvo Skaliraj, pa Niz, drži ih na razmaku 3 m. Kvačica, strelice i križić rade kao na mreži; dugmad ekrana i kamere i Primijeni na pojedinom modifikatoru ne rade, jer je red na grupi jedna cjelina.

- {{ui:Uredi izvor}} otvara original na mjestu. Promjene se vide u svakoj kopiji; zatvaranje te vraća na mjesto gdje si bio.
- {{ui:Pretvori modifikatore}} pravi rezultat običnim ivicama i površinama i skida red, u jednom koraku poništavanja. Kopije koje se preklapaju ostaju zasebna geometrija: Pretvaranje nije unija.
- Kopije komponente dijele recept; {{ui:Učini jedinstvenom}} ga razdvaja (original ostaje zajednički).
- Red se čuva u datoteci, nosi ga kopiranje, lijepljenje i poništavanje, a Očisti neiskorištene čuva original. Program koji ne zna za modifikatore i dalje prikazuje kopije.
- Do Pretvaranja rezultat se ne može ući, rastaviti, mijenjati veličinu ili razvući: bio bi ponovo napravljen pri sljedećoj izmjeni. Svaki to kaže.
- Granice su 32 modifikatora i 1,000 kopija. Komponenta napravljena za rastezanje i red ne mogu još dijeliti definiciju.

## Površina dijeljenja

Dijeljenje zaglađuje mrežu Catmull-Clark metodom: svaka površina postaje četvorougaone površine, a svaki nivo daje četiri puta više. Kutija sa dva ili tri nivoa već izgleda kao zaobljen oblik, a ti nastaviš uređivati kutiju.

- **Nivoi u pogledu** određuju koliko je glatko.
- **Nivoi u renderima** određuju koliko su glatke renderovane slike i videi; renderi mogu koristiti više nivoa nego pogled.
- **Renderi na pravoj glatkoj površini** stavljaju tačke renderovane mreže na graničnu površinu kojoj nivoi teže, pa i dva nivoa renderuju glatko kao mnogo.
- **Žlijebovi** održavaju ivice oštrim: u radnom prostoru Mreža odaberi ivice i koristi {{ui:Žlijeb}} (1 ostaje oštro, 0.5 malo zaobljuje, 0 je glatko). Pogledaj [Uređivanje mreže](topic:mesh-edit).
- **Smanji nivo pogleda na velikoj mreži:** kad bi traženi nivoi dali više površina nego što ovaj računar dobro podnosi u pogledu, pogled prikazuje niži nivo i kaže koji. {{ui:Primijeni}} uvijek koristi sve nivoe. Koliko površina je dozvoljeno zavisi od klase tvog računara u {{ui:Postavke}} › Rendering › Tvoj računar.
- Otvorene granice zadržavaju svoje uglove i ostaju na liniji svojih ivica.

## Savijanje kavezom rešetke

1. Dodaj modifikator {{ui:Rešetka}} i pritisni {{ui:Dodaj rešetkasti okvir oko mreže}}. Kavez od 3 × 3 × 3 tačke se pojavljuje oko mreže, nacrtan kao žice.
2. Otvori kavez u radnom prostoru Mreža (dvaput klikni na njega) i pomjeraj njegove tačke. Mreža glatko prati.

:::tip
Kavez je mreža kao i svaka druga: sakrij ga oznakom kad završiš.
:::

## Velike mreže

Mali redovi se računaju odmah. Velik se računa u pozadini na svakom jezgru računara: pogled prikazuje posljednji rezultat dok novi ne bude gotov. Bulove operacije učitavaju modeler tijela prvi put; pogled to kaže na trenutak.

## Šta modifikatori još ne rade

- Težine po vrhu (opadanje nanijeto na mrežu) za Pomjeranje, Zaglađivanje i Omotavanje.
- Modifikatori osim Skaliraj i linearnog Niza na geometriji guraj-povuci (grupe i komponente): pretvori je prvo u mrežu ({{ui:Pretvori u mrežu}}). Ogledalo, kružni ili krivi Niz, Savijanje i Sužavanje na grupama dolaze kasnije.
