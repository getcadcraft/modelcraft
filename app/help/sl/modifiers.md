---
title: Modifikatorji na mreži, skupini ali komponenti
summary: Merite, zrcalite, razpostavite, zgladite, pokosite, prerežite in upognite mrežo, ne da bi jo spremenili; ponovite ali spremenite merilo skupine ali komponente z istim skladom; ko ste pripravljeni, naredite spremembo trajno.
keywords: modifikator, modifikatorji, sklad, skupina, komponenta, merilo, peci, uredi vir, nedestruktivno, zrcali, razpostavi, krožna razpostavitev, podrazdelitev, podrazdelitvena ploskev, zgladi, pokosi, utrdi, debelina, boolean, odreži, premik, šum, zvari, decimiraj, poenostavi, rešetka, kletka, deformacija krivulje, upogni, skrčenje na površino, uporabi
from: dd5ec1cb
---

**Modifikator** spremeni, kaj mreža prikazuje, ne da bi spremenil samo mrežo. Zrcalite eno polovico dela in modelirajte samo to polovico; zaokrožite škatlo s podrazdelitveno ploskvijo in še naprej urejajte škatlo. Modifikatorji so v **skladu** in delujejo po vrsti od zgoraj navzdol. Kar vidite, izvozite, natisnete in upodobite, je mreža z vsemi vklopljenimi modifikatorji.

## Dodajte modifikator

1. Izberite mrežo. V delovnem okolju Model je njen razdelek **Modifikatorji** v {{ui:Podatki o entiteti}}; v delovnem okolju Mreža je v plošči na desni.
2. Izberite enega iz {{ui:Dodaj modifikator…}}. Gre na dno sklada.
3. Spremenite njegove nastavitve pod imenom. Dolžine sprejmejo iste vrednosti kot polje za vrednost, zato delujejo `600mm`, `2'6"` in `(6m)/4`.

Vsaka sprememba je en korak razveljavitve: {{key:Mod+Z}} jo razveljavi.

## Gumbi na vsakem modifikatorju

- Potrditveno polje ga vklopi ali izklopi.
- Gumb z zaslonom ga prikaže ali skrije v pogledu (ostane v skladu).
- Gumb s kamero ga prikaže ali skrije v upodobljenih slikah in videih, tako da je modifikator lahko samo za upodobitve (ali samo za pogled).
- Puščice ga premaknejo gor ali dol po skladu. Vrstni red šteje: zrcaljenje in nato podrazdelitev daje gladek šav, podrazdelitev in nato zrcaljenje ne.
- {{ui:Uporabi}} naredi obliko del mreže: modifikatorji nad njim in ta sam se uporabijo na sami mreži in zapustijo sklad. Je en korak razveljavitve.
- Križec ga odstrani.

## Modifikatorji

| Modifikator | Kaj naredi |
| --- | --- |
| Merilo | Spremeni merilo okoli izhodišča predmeta, faktor za rdečo, zeleno in modro. Tudi na skupini ali komponenti. |
| Zrcali | Doda zrcaljeno kopijo čez rdečo, zeleno ali modro os skozi izhodišče mreže in združi polovice tam, kjer se stikajo. |
| Razpostavi | Kopira v vrsti (korak njegove lastne velikosti krat števila, ki ga vnesete, plus fiksni korak), okoli osi ali vzdolž krivulje v modelu. Skupina ali komponenta sprejme vrsto. |
| Podrazdelitvena ploskev | Zgladi mrežo s podrazdelitvijo Catmull-Clark. Ostri robovi ostanejo z zarezo. Upodobitve lahko uporabijo več stopenj kot pogled. |
| Pokosi | Zaokroži vsak rob, ki je ostrejši od kota, ki ga vnesete. |
| Utrdi | Da ploskvi debelino in zapre rob. |
| Boolean | Odreže, združi ali ohrani prekrivanje z drugim predmetom v modelu. Oba morata biti zaprti telesi. |
| Premik | Premakne ploskev navznoter ali navzven z gladkim šumom. Ista začetna vrednost da vedno iste izbokline. |
| Zvari | Združi oglišča, ki so bliže od določene razdalje. |
| Decimiraj | Ohrani delež trikotnikov in odstrani tiste, ki najmanj spremenijo obliko. |
| Zgladi | Sprosti oglišča proti njihovim sosedom. |
| Rešetka | Ukrivi mrežo s kletko: premaknite točke kletke in mreža sledi. |
| Deformacija krivulje | Ukrivi mrežo vzdolž krivulje v modelu, vzdolž rdeče, zelene ali modre osi. |
| Skrčenje na površino | Premakne vsako oglišče na najbližjo točko drugega predmeta. |

## Na skupini ali komponenti

Skupina ali komponenta lahko tudi hrani recept, tako da je senčnik svetilke lahko **Merilo** in **Razpostavi** enega senčnika, sprememba števila pa spremeni svetilko.

1. Izberite skupino ali komponento. V {{ui:Podatki o entiteti}} njen razdelek **Modifikatorji** navede sklad (sprva prazen).
2. Izberite {{ui:Merilo (S)}} ali {{ui:Razpostavi}} iz {{ui:Dodaj modifikator…}}. Skupina postane komponenta, ki je **izvirnik, postavljen s skladom**. Izvirnik ostane: uredite ga in vsaka kopija takoj sledi.
3. Merilo sprejme faktor za rdečo, zeleno in modro (`1, 1, 2` podvoji višino). Razpostavi sprejme število kopij, korak kot delež velikosti rezultata do zdaj in dodatni korak v dolžinah.

Sklad teče od zgoraj navzdol po lastnih oseh izvirnika okoli njegovega izhodišča, zato je vrstni red pomemben: Razpostavitev treh kopij na razdalji 3 m, nato Merilo 2 na rdeči, postavi kopije na razdaljo 6 m; Merilo najprej in nato Razpostavitev jih ohrani na razdalji 3 m. Potrditveno polje, puščice in križec delujejo kot na mreži; gumba za pogled in kamero ter {{ui:Uporabi}} na enem modifikatorju ne, ker je sklad na skupini ena stvar.

- {{ui:Uredi vir}} odpre izvirnik na mestu. Spremembe se pokažejo v vsaki kopiji; zaprtje vas vrne tja, kjer ste bili.
- {{ui:Peci modifikatorje}} naredi rezultat navadne robove in ploskve ter odstrani sklad, v enem koraku razveljavitve. Kopije, ki se prekrivajo, ostanejo ločena geometrija: peka ni unija.
- Kopije komponente delijo recept; {{ui:Naredi edinstveno}} ga loči (izvirnik ostane deljen).
- Sklad je shranjen v datoteki, nosita ga kopiranje in prilepljanje ter razveljavitev, Počisti neuporabljeno pa ohrani izvirnik. Program, ki ne pozna modifikatorjev, še vedno prikaže kopije.
- Do peke rezultata ga ni mogoče vstopiti, razstaviti, spremeniti velikosti ali raztegniti: ob naslednji spremembi bi bil ponovno zgrajen. Vsak to pove.
- Omejitve so 32 modifikatorjev in 1,000 kopij. Komponenta, narejena za raztezanje (Raztegni), in sklad še ne moreta deliti definicije.

## Podrazdelitvena ploskev

Podrazdelitev zgladi mrežo s Catmull-Clark: vsaka ploskev postane štirikotne ploskve, vsaka stopnja pa jih da štirikrat toliko. Škatla z dvema ali tremi stopnjami že izgleda kot zaobljena oblika, vi pa še naprej urejate škatlo.

- **Stopnje v pogledu** nastavijo, kako gladka je.
- **Stopnje v upodobitvah** nastavijo, kako gladke so upodobljene slike in videi; upodobitve lahko uporabijo več stopenj kot pogled.
- **Upodobitve na pravi gladki površini** postavijo točke upodobljene mreže na limitno površino, proti kateri stopnje težijo, zato tudi dve stopnji upodobita tako gladko kot mnogo.
- **Zareze** ohranijo robove ostre: v delovnem okolju Mreža izberite robove in uporabite {{ui:Zareza}} (1 ostane ostro, 0.5 se malo zaokroži, 0 je gladko). Glejte [Urejanje mreže](topic:mesh-edit).
- **Znižajte stopnjo pogleda na veliki mreži:** ko bi zahtevane stopnje dale več ploskev, kot jih ta računalnik dobro obdela v pogledu, pogled pokaže nižjo stopnjo in to pove. {{ui:Uporabi}} vedno uporabi vse stopnje. Koliko ploskev je, določa razred vašega računalnika v {{ui:Nastavitve}} › Upodabljanje › Vaš računalnik.
- Odprti robovi ohranijo svoje vogale in ostanejo na črti svojih robov.

## Upogib z rešetkasto kletko

1. Dodajte modifikator {{ui:Rešetka}} in pritisnite {{ui:Dodaj rešetkasto kletko okoli mreže}}. Okoli mreže se pojavi kletka 3 × 3 × 3 točk, narisana kot žice.
2. Odprite kletko v delovnem okolju Mreža (dvakrat kliknite nanjo) in premaknite njene točke. Mreža sledi gladko.

:::tip
Kletka je mreža kot katera koli druga: ko končate, jo skrijte z njeno oznako.
:::

## Velike mreže

Majhni skladi se izračunajo takoj. Velik se izračuna v ozadju na vseh jedrih vašega računalnika: pogled še naprej kaže zadnji rezultat, dokler ni pripravljen novi. Booleani prvič naložijo modelirnik teles; pogled to za trenutek pove.

## Kaj modifikatorji še ne počnejo

- Uteži po ogliščih (upad, naslikan na mrežo) za Premik, Zgladi in Skrčenje na površino.
- Modifikatorji razen Merilo in linearne Razpostavitve na geometriji potisni/povleci (skupinah in komponentah): najprej jo pretvorite v mrežo ({{ui:Pretvori v mrežo}}). Zrcali, krožna ali krivuljna Razpostavitev, Upogni in Zoži na skupinah pridejo pozneje.
