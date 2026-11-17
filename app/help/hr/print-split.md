---
title: Podjela velikog modela za ispis
summary: Razrežite model prevelik za vaš pisač na dijelove koji stanu na podlogu, s klinovima, ključevima, lastinim repovima, rupama za moždanike ili magnete i brojem spoja na obje strane, te preuzmite svaki dio i list za sastavljanje u jednom zip-u.
keywords: 3d ispis, podjela, kosi rez, kosi, rezač, rez, prevelik, veličina podloge, volumen ispisa, dijelovi, dijelovi spoja, spojnice, klinovi, ključevi, lastin rep, moždanik, magnet, zračnost, tolerancija, brojevi dijelova, sastavljanje, zip, stl, 3mf, licenca, license, usb ključ, dongle
from: ee96ba77
---

Kad je model veći od podloge vašeg pisača, **Podijeli za ispis** ga reže na dijelove koji stanu, dodaje spojnice da se dijelovi poklope kad ih spojite i na obje strane svakog spoja urezuje isti broj. Otvorite {{ui:Izvezi}} › {{ui:Provjera za 3D ispis (STL ili 3MF)…}}; u retku **Alati za ispis** nalazi se {{ui:Podijeli za ispis}}. Otvara se kao kartica preko prikaza.

Radi s onim što se ispisuje: odabirom ili svime što je prikazano kad ništa nije odabrano. Ono što se ispisuje mora biti zatvoreno tijelo; ako provjera pronađe rupe, prvo upotrijebite [Popravak](topic:print-tools#repair).

Radi u ModelCraftu, na vašem računalu: nema poslužitelja licenci, nema USB ključa i ništa se ne učitava.

## Kako rezati

- **Uklopi u podlogu, najmanje dijelova**: unesite širinu, dubinu i visinu podloge (preuzimaju se iz {{ui:Postavke}} › ModelCraft › 3D pisač). Kartica kaže koliko dijelova treba i koliko je velik svaki; model reže na jednake dijelove, što manje moguće. Dio može ležati na boku u datotekama ako ga to uklapa. Spojnice koje vire iz dijela ubrajaju se u njegovu veličinu.
- **Na mjestima koja zadam**: odaberite os po kojoj režete i upišite mjesta u milimetrima od donjeg kraja modela, odvojena zarezima (`100, 200` daje tri dijela).
  **Kosi rez** zakreće rezove za do 60° oko jedne od druge dvije osi (primjerice rez po Z kosi oko X): svaki kosi rez prolazi kroz srednju liniju modela na svom mjestu, daje dijelovima veću površinu za lijepljenje i bolje skriva spoj na kosoj plohi. Spojnice stoje okomito na rez.

Rezne ravnine iscrtane su oko modela isprekidanim linijama dok je kartica otvorena.

## Spojnice

Svako mjesto gdje se dva dijela dodiruju dobiva spojnice, postavljene same tamo gdje ima najviše prostora: najmanje **najtanja stijenka** plus **zračnost** plus vlastita veličina udaljeni od vanjske strane, i dovoljno daleko od svakog drugog reza da se dvije rupe nikad ne spoje. Na dugoj plohi dvije se spojnice razmiču duž nje, pa se dijelovi ne mogu okrenuti.

- **Okrugli klinovi**: klin na jednom dijelu (na vrhu skošen), rupa na drugom.
- **Četvrtasti ključevi**: isto, četvrtasto, pa dio može ići samo na jedan način.
- **Lastin rep**: jezičak koji klizne u utor sa strane. Ako bi jedan kraj utora nasjeo na drugi rez, lastin rep staje kratko i klizne s otvorenog kraja. Lastin rep odgovara rezovima u jednom smjeru (niz kriški); u mreži koristite klinove ili moždanike.
- **Rupe za moždanike**: rupa sa svake strane; pinovi se također ispisuju (u zip-u).
- **Udubljenja za magnete**: udubljenje sa svake strane za okrugli magnet promjera i debljine koje zadate. Provjerite polove prije lijepljenja.
- **Nema (ljepilo)**.

**Zračnost** je razmak sa svake strane između klina i njegove rupe (za početak 0,2 mm). Vjerna je broju koji unesete: okrugle rupe rade se malo većima da njihove ravne strane, a ne kutovi, zadrže taj razmak. Povećajte je ako dijelovi vašeg pisača ispadnu pretijesno.

Kad spoj nema mjesta za spojnicu (tanka stijenka, mala dodirna površina), kartica to kaže: taj spoj zalijepite.

## Brojevi dijelova

Uz uključeno **Ugraviraj brojeve spojeva na obje strane**, svaki spoj dobiva broj svoja dva dijela, npr. `3-4`, urezan 0,6 mm duboko na obje strane, čitljiv u pravom smjeru na svakoj. Brojevi počinju visoki 5 mm i smanjuju se da stanu, do 2,5 mm; spoj bez mjesta za svoj broj je naveden. Dijelovi se numeriraju od donjeg sloja prema gore.

## Pregled, preuzimanje, podjela modela

1. {{ui:Pregled}} reže model i kaže koliko ima dijelova, spojeva i spojnica, je li svaki dio prošao provjeru za 3D ispis i stane li na podlogu, te navodi veličinu svakog dijela. Prsten označava svaku spojnicu i broj u prikazu.
2. {{ui:Preuzmi komade (.zip)}} sprema jedan zip: datoteku za svaki dio (STL ili 3MF, kako odaberete pod **Datoteke**), svaki stoji na podlozi; moždanike; i **list za sastavljanje**, sliku dijelova rastavljenih s njihovim brojevima (`assembly.svg` i `assembly.png`) te popis dijelova i spojeva (`assembly.txt`).
3. {{ui:Podijeli model}} stavlja dijelove u model umjesto odabranih grupa ili komponenti, nazvane kao na listu za sastavljanje, u jednom koraku: {{ui:Poništi}} vraća izvorni. Treba odabrane grupe ili komponente koje se dijele; preuzimanje radi s onim što se ispisuje.

## Sami pomaknite spojnice

Nakon pregleda, **Spojnice ručno** omogućuje ispravljanje mjesta spojnica:

- {{ui:Pomakni jednu}}: kliknite crveni prsten u prikazu (postaje zelen), zatim kliknite gdje treba biti na rezu.
- {{ui:Dodaj jednu}}: kliknite u prikaz gdje treba biti spojnica. Stavlja se na reznu ravninu koju vaš klik dosegne, između dva dijela tamo.
- {{ui:Ukloni jednu}}: kliknite crveni prsten da uklonite tu spojnicu.

Svaka promjena provjerava se ponovno kao i automatske: mjesto preblizu obrisu, drugi rez ili druga spojnica se ne izrađuju, a kartica to kaže. {{ui:Opet automatski}} zaboravlja vaša mjesta. Ona se čuvaju dok model, odabir i rezovi ostaju isti.

Pregled ostaje dok se ne promijeni model, odabir ili postavka; tada kartica traži da ponovno napravite pregled.

:::note
Svaki dio provjerava se kao što bi ga provjera za 3D ispis provjerila prije preuzimanja. Vaš slicer i dalje odlučuje kako se svaki dio ispisuje: pogledajte svaki tamo i ispišite jedan spoj prvo da vidite kako vaš pisač podnosi zračnost.
:::
