---
title: Razdelite velik model za 3D-tiskanje
summary: Model, ki je prevelik za vaš tiskalnik, razrežite na kose, ki se prilegajo tiskalni podlagi, s čepi, klini, lastastimi repi, luknjami za zatiče ali magnete in številko spoja na obeh ploskvah; vsak kos in sestavno shemo prenesite v eni datoteki zip.
keywords: 3D-tiskanje, razdeli, nagnjen rez, poševni rez, kotni rez, razreži, rez, preveliko, velikost podlage, delovni prostor, kosi, deli, spojniki, čepi, klini, lastasti rep, zatič, magnet, zračnost, toleranca, številke delov, sestava, razstreljen pogled, zip, stl, 3mf, licenca, license, ključ USB, dongle
from: ee96ba77
---

Ko je model večji od tiskalne podlage vašega tiskalnika, **Razdeli za tisk** ga razreže na kose, ki se prilegajo, doda spojnike, da se kosi poravnajo, ko jih sestavite, in vgravira isto številko na obe ploskvi vsakega spoja. Odprite {{ui:Izvozi}} › {{ui:Preveri za 3D-tiskanje (STL ali 3MF)…}}; vrstica **Orodja za tiskanje** v pogovornem oknu ima {{ui:Razdeli za tisk}}. Odpre se kot kartica nad pogledom.

Deluje na tistem, kar se bo natisnilo: na izboru ali na vsem prikazanem, če nič ni izbrano. Kar se natisne, mora biti zaprto telo; če preverjanje najde luknje, najprej uporabite [Popravilo](topic:print-tools#repair).

Zažene se v ModelCraft, na vašem računalniku: brez licenčnega strežnika, brez ključa USB, nič se ne naloži.

## Kako razrezati

- **Prilegajte se podlagi, najmanj kosov**: vnesite širino, globino in višino podlage (začnejo se pri {{ui:Nastavitve}} › ModelCraft › 3D-tiskalnik). Kartica pove, koliko kosov je potrebnih in kako velik je vsak; model razreže na enake kose, kolikor jih je najmanj potrebno. Kos je lahko v datotekah položen na stran, če se tako prilega. Spojniki, ki štrlijo iz kosa, se štejejo v njegovo velikost.
- **Na mestih, ki jih določim**: izberite os, po kateri režete, in vnesite mesta v milimetrih od nižjega konca modela, ločena z vejicami (`100, 200` naredi tri kose).
  **Nagib** zasuče reze za največ 60° okoli ene od drugih dveh osi (na primer rez po Z, nagnjen okoli X): vsak nagnjen rez poteka skozi srednjo črto modela na svojem mestu, da so kosi bolj lepljivi in spoj bolje skrit na nagnjeni površini. Spojniki so pravokotni na rez.

Ravnine rezov so med odprto kartico narisane okoli modela s črtkanimi črtami.

## Spojniki

Vsako mesto, kjer se dva kosa dotikata, dobi spojnike, ki se postavijo sami tja, kjer je največ prostora: vsaj **najmanjša stena** plus **zračnost** plus lastna velikost stran od zunanjega roba, in dovolj daleč od vsakega drugega reza, da se dve luknji nikoli ne srečata. Na dolgi ploskvi sta dva spojnika razporejena vzdolž nje, da se kosa ne moreta zasukati.

- **Okrogli čepi**: čep na enem kosu (na konici posnet), luknja na drugem.
- **Kvadratni klini**: enako, le kvadratno, da se kos lahko namesti samo na en način.
- **Lastasti repi**: jezik, ki drsi v utor z ene strani. Kjer bi en konec utora zadel na drug rez, se lastasti rep ustavi pred tem in zdrsne vanj z odprtega konca. Lastasti repi so primerni za reze v eni smeri (vrsta rezin); v mreži uporabite čepe ali zatiče.
- **Luknje za zatiče**: luknja na vsaki strani; zatiči se natisnejo tudi (v datoteki zip).
- **Žepi za magnete**: žep na vsaki strani za okrogel magnet s premerom in debelino, ki ju vnesete. Preverite pole, preden ju prilepite.
- **Brez (lepilo)**.

**Zračnost** je reža na vsaki strani med čepom in njegovo luknjo (za začetek 0,2 mm). Ustreza številu, ki ga vnesete: okrogle luknje so narejene malo večje, da njihove ravne strani, ne vogali, ohranijo to režo. Povečajte jo, če so deli vašega tiskalnika pretesni.

Kjer spoj nima prostora za spojnik (tanka stena, majhna dotikajoča se površina), kartica to pove: ta spoj zalepite.

## Številke delov

Z vklopljeno možnostjo **Vgravirajte številke spojev na obeh ploskvah** dobi vsak spoj številko svojih dveh kosov, na primer `3-4`, vgravirano 0,6 mm globoko na obeh ploskvah, na vsaki pravilno obrnjeno. Številke so visoke 5 mm in se pomanjšajo, da se prilegajo, do 2,5 mm; spoj brez prostora za številko je naveden. Kosi so oštevilčeni od spodnjega sloja navzgor.

## Predogled, prenos, razdelitev modela

1. {{ui:Predogled}} razreže model in pove, koliko je kosov, spojev in spojnikov, ali vsak kos prestane preverjanje za 3D-tiskanje in se prilega podlagi, ter navede velikost vsakega kosa. Obroč označi vsak spojnik in številko v pogledu.
2. {{ui:Prenesi kose (.zip)}} shrani eno datoteko zip: po eno datoteko za vsak kos (STL ali 3MF, kot izberete pod **Datoteke**), vsak stoji na podlagi; zatiče za luknje; in **sestavno shemo** — sliko kosov, razstavljenih narazen s številkami (`assembly.svg` in `assembly.png`), ter seznam kosov in spojev (`assembly.txt`).
3. {{ui:Razdeli model}} v modelu zamenja izbrane skupine ali komponente s kosi, poimenovanimi kot na sestavni shemi, v enem koraku: {{ui:Razveljavi}} vrne izvirnik. Potrebuje izbrane skupine ali komponente za razdelitev; prenos deluje na vsem, kar se bo natisnilo.

## Premaknite spojnike sami

Po predogledu vam **Spojniki ročno** omogoča popravek, kam gredo spojniki:

- {{ui:Premakni enega}}: kliknite rdeč obroč v pogledu (postane zelen), nato kliknite, kam naj gre, na rezu.
- {{ui:Dodaj enega}}: kliknite v pogled, kjer naj bo spojnik. Pride na ravnino reza, ki jo doseže vaš klik, med obema kosoma tam.
- {{ui:Odstrani enega}}: kliknite rdeč obroč, da odstranite ta spojnik.

Vsaka sprememba se ponovno preveri kot samodejne: mesto preblizu obrisa, drug rez ali drug spojnik ni ustvarjen, kartica to pove. {{ui:Spet samodejno}} pozabi vaša mesta. Ohranijo se, dokler model, izbor in rezi ostanejo takšni, kot so.

Predogled ostane, dokler se model, izbor ali nastavitev ne spremeni; nato kartica zahteva nov predogled.

:::note
Vsak kos se preveri, kot bi ga preverjalo preverjanje za 3D-tiskanje, preden ga prenesete. Vaš slicer še vedno odloči, kako se vsak kos natisne: oglejte si vsakega tam in natisnite najprej en spoj, da vidite, kako vaš tiskalnik obravnava zračnost.
:::
