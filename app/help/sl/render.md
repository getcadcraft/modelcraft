---
title: Upodobi sliko modela
summary: Make a picture that looks like daylight: sky, sun from your model's place and date, soft shadows, glass and metal looks, then save it as a PNG.
keywords: upodobitev, prednastavitev, prednastavitve, prednastavitev prizora, notranjost, zunanjost, pogled prereza, noč, en klik, upodabljanje, sledenje poti, path traced, sledenje žarkom, globalna osvetlitev, odsevi, lom, visoka kakovost, fotografija, fotorealistično, realistično, slika, png, nepremična, nebo, sonce, dnevna svetloba, sence, mehke sence, ambientna okluzija, steklo, kovina, sijajno, materiali, osvetlitev, svetlost, oblačno, mrak, studio, predstavitev, megla, zamegljenost, dim, oblak, prostornina, svetlobni snopi, kavstika, prilagodljivo vzorčenje, šum
from: 517ba4d3
---

{{ui:Upodobi sliko…}} ustvari sliko pogleda, ki je videti kot dnevna svetloba, ne kot risba: nebo, sonce na mestu in ob datumu vašega modela, mehke sence, svetlobo z vsega neba, ki zatemni kote in reže, ter barve, ki so lahko videti kot steklo, kovina ali sijajna barva. Model se ne spremeni.

## Upodobi pogled

1. Nastavite pogled, kot želite sliko: zavrtite, povečajte, izberite [prizor](topic:scenes) in skrijte, kar ne sme biti vidno. Slika uporabi kamero pogleda.
2. Kliknite {{ui:Izvozi}} v skupini {{ui:Datoteka}}, nato {{ui:Upodobi sliko…}}.
3. Če pritisnjeni {{ui:Prizor}} ni tisti, ki ga želite, izberite drugega (glejte [Prednastavitve prizorov](topic:render#scene-presets-a-good-picture-in-one-click)), izberite {{ui:Velikost}} in kliknite {{ui:Upodobi}}.

   Slika se polni med upodabljanjem in se z vsakim prehodom izgladi. {{ui:Ustavi}} (ali {{key:Esc}}) ga zaključi predčasno in ohrani dotlej nastalo sliko.

4. Kliknite {{ui:Shrani}}, da jo prenesete (PNG, razen če {{ui:Shrani kot}} določi drugače).

:::tip
Začnite z {{ui:Osnutek}} pri {{ui:Velikost pogleda}}, da preverite kamero in videz, nato za končno sliko upodobite {{ui:Dobro}} ali {{ui:Najboljše}} pri večji velikosti.
:::

## Prednastavitve prizorov: dobra slika z enim klikom

Na vrhu pogovornega okna so štirje gumbi {{ui:Prizor}}. Vsak z enim klikom nastavi nebo, svetlost, tla, robne črte, kakovost in sonce, zato se pred prvo sliko ni treba ničesar učiti. Kliknite enega, nato {{ui:Upodobi}}.

| Prizor | Kaj nastavi | Uporaba |
|---|---|---|
| {{ui:Zunanjost}} | Jasno nebo, lastno sonce modela, tla vklopljena | Stavba od zunaj |
| {{ui:Notranjost}} | Oblačno nebo (enakomerna svetloba, brez ostrih sončnih lis), za pol stopnje svetlejše | Pogled iz notranjosti prostora |
| {{ui:Pogled prereza}} | Beli studio, brez tal, robne črte v hitri upodobitvi | Model, prerezan z ravnino prereza |
| {{ui:Noč}} | Sonce pod obzorjem (opolnoči sredi zime za polovico sveta mesta), za eno stopnjo svetlejše | Luči, ki osvetljujejo model. Brez svetilk je slika temna |

- {{ui:Izberi za ta pogled}} izbere namesto vas: {{ui:Pogled prereza}}, kadar je vklopljen rez prereza, {{ui:Notranjost}}, kadar je kamera znotraj modela, sicer {{ui:Zunanjost}}. Prvič, ko odprete pogovorno okno, tako začne samo.
- Vse nastavitve ostanejo spodaj in jih lahko spremenite. Ko spremenite eno, prizor ne ustreza več nobenemu gumbu, vrstica pod gumbi pa pove, da so nastavitve vaše. Ponovno kliknite prizor, da vrnete njegove vrednosti.
- Prizor ne spremeni pogona, načina, velikosti, materialov, kamere ali svetilk.

:::note
Prizori dajejo enake vrednosti v ModelCraft in BimCraft. Kako je končna slika videti, je odvisno od modela in vaše grafične kartice.
:::

## Nastavitve

| Nastavitev | Kaj naredi |
|---|---|
| {{ui:Velikost}} | Velikost pogleda, dvakratna velikost pogleda, Full HD, 4K ali kvadrat. Fiksne velikosti ohranijo kamero pogleda in pokažejo več ali manj ob straneh |
| {{ui:Način}} | {{ui:Hitro}} ali {{ui:Visoka kakovost (sledenje poti)}} (spodaj) z {{ui:Časovna omejitev}} |
| {{ui:Kakovost}} | Koliko prehodov (pri visoki kakovosti pa vzorcev) se povpreči: {{ui:Osnutek}} 16, {{ui:Dobro}} 64, {{ui:Najboljše}} 256. Več prehodov da gladkejše sence in robove, vendar traja dlje |
| {{ui:Sky}} | {{ui:Jasno nebo}}, {{ui:Oblačno}} (mehka svetloba, šibke sence), {{ui:Mrak}} (nizka, topla svetloba) ali {{ui:Beli studio}} (preprosto belo ozadje) |
| {{ui:Sonce}} | Sonce pride iz datuma, časa in lokacije v {{ui:Slog}} › sonce. Označite {{ui:Za to sliko uporabi drug datum in čas}}, da preizkusite drug čas, ne da bi spremenili slog modela |
| {{ui:Svetlost}} | Svetlejše ali temnejše, po korakih (stopnjah) |
| {{ui:Tla pod modelom}} | Tla, ki sprejmejo sence in se stopijo v obzorje. Izklopite jih za model, ki lebdi |
| {{ui:Riši robove}} | Čez sliko tanko nariše robove modela, za videz risbe |

Če je sonce ob izbranem času pod obzorjem, je noč: nebo potemni, model pa osvetlijo [svetilke](topic:lights). Pogovorno okno to pove.

Nastavitve se shranijo v datoteko `.modelcraft`, zato se naslednja slika istega modela začne tam, kjer ste končali.

## Barve naj izgledajo kot steklo ali kovina

Pod {{ui:Materiali}} ima vsaka barva na zaslonu svoj videz: {{ui:Mat}}, {{ui:Satensko}}, {{ui:Sijajno}}, {{ui:Kovina}}, {{ui:Polirana kovina}}, {{ui:Steklo}} ali {{ui:Motno steklo}}. {{ui:Neobarvane ploskve}} so ploskve brez lastne barve.

Če želite, da so okna steklena, [pobarvajte](topic:paint) okenska polja z eno barvo, nato nastavite to barvo na {{ui:Steklo}}. Steklo prepušča nebo in to, kar je za njim, obarvano z njegovo barvo, in odseva nebo.

:::note
V načinu {{ui:Hitro}} steklo in kovina odsevata nebo, ne preostalega modela, svetloba pa se skozi steklo ne lomi. Način {{ui:Visoka kakovost (sledenje poti)}} spodaj naredi oboje.
:::

## Visoka kakovost

Izberite {{ui:Način}} › {{ui:Visoka kakovost (sledenje poti)}} za sliko, ki sledi svetlobi tako, kot jo vidi kamera:

- svetloba se odbija med površinami, zato je soba, osvetljena skozi okno ali s svetilko, osvetljena povsod, barve pa se razlivajo na sosednje;
- steklo je pravo steklo: svetloba se skozenj lomi in odseva model;
- kovina in polirane površine odsevajo preostali model;
- svetlobne plošče svetijo kot plošče, z mehkimi sencami.

Veliko počasneje kot {{ui:Hitro}}: vsak prehod znova sledi svetlobi za vsak piksel. Slika je sprva zrnata in se razbistri, ko se vzorci seštevajo, zato začnite z majhno ({{ui:Velikost pogleda}}, {{ui:Osnutek}}) in izberite {{ui:Časovna omejitev}}: ko se čas izteče, ostane slika, kakršna je do takrat. {{ui:Ustavi}} jo prav tako ohrani. Prvi prehod počaka, medtem ko brskalnik pripravlja sledilnik poti.

Kjer brskalnik podpira WebGPU, je sledilnik poti CadCraftov lasten in teče na grafični kartici; vrstica pod sliko pove {{ui:Sledenje poti na grafični kartici (WebGPU)}}. Po {{ui:Ustavi}} ali časovni omejitvi {{ui:Nadaljuj}} nadaljuje z isto sliko, dokler ne dobi vseh vzorcev; spreminjanje nastavitve ali ponovni pritisk na {{ui:Upodobi}} začne znova. Brez WebGPU se slika sledi poti z WebGL (vrstica to pove), {{ui:Nadaljuj}} pa ni na voljo.

:::linux
Firefox in večina nastavitev Chroma v Linuxu še nima WebGPU, zato visoka kakovost tam uporablja WebGL.
:::

V tem načinu robovi niso risani, teksture iz knjižnice prikažejo barvo in hrapavost, ne pa izboklin ([material, narejen z vozlišči](topic:shading#in-high-quality-pictures), prikaže svoje normale in izbokline), rez prereza pa se naredi na modelu, preden se slika začne.

{{ui:Odstrani šum (počisti zrnatost, ki ostane po vzorcih)}} je privzeto vklopljeno: ko je slika končana ali ustavljena, zrnatost, ki ostane, počisti nevronska mreža, narejena za to (objavljena mreža Intel Open Image Denoise, zagnana na vašem računalniku: na grafični kartici, sicer na procesorju). Slika z malo vzorci je čista; {{ui:Prikaži}} › {{ui:Slika pred odstranitvijo šuma}} pokaže, kakršna je bila upodobljena.

## Upodabljanje v pogledu

Delovno okolje {{ui:Upodobi}} izvaja sledenje poti kar v pogledu: zavrtite, uredite model ali spremenite luč, in začne se takoj znova. {{ui:Območje}}: povlecite pravokotnik in upodobi se samo ta; {{ui:Celoten pogled}} vrne nazaj. {{ui:Ostrenje}}: kliknite, kar naj bo ostro, in globinska ostrina se tam ostri. {{ui:Podrobnost}} določa, koliko slikovnih pik pogleda upodobi (manj je hitreje). {{ui:Premor}} ustavi in nadaljuje. Potrebuje WebGPU: brez njega delovno okolje to pove, {{ui:Izvozi}} › {{ui:Upodobi sliko…}} pa še vedno deluje.

## Nebesa in svetlobni profili na grafični kartici

Z WebGPU ima visoka kakovost še dve nebi:

- {{ui:Fizikalno nebo}} izračuna dnevno svetlobo iz višine sonca: globoko modro nad glavo, bled pas ob obzorju in sonce, ki je pri nizki višini toplejše in šibkejše. {{ui:Motnost}} gre od zelo jasnega dne (2) do bolj motnega dne (10).
- {{ui:Slika neba (HDRI)}} osvetli model s panoramsko sliko resničnega kraja. {{ui:Izberite sliko…}} sprejme datoteko equirectangular `.hdr` ali `.exr`; {{ui:Zasukaj}} jo zavrti okoli modela, {{ui:Svetlost slike}} pa jo naredi svetlejšo ali temnejšo. Slika ima svoje sonce, zato sonce modela ni dodano. Ohrani se samo, dokler je stran odprta: po ponovnem odprtju jo izberite znova.

Vsaka svetilka na seznamu {{ui:Svetilke}} lahko prevzame svetlobni profil proizvajalca: {{ui:Profil IES…}} prebere datoteko IES (LM-63), svetilka pa nato seva svojo svetlobo tako, kot to naredi to telo (ozek stropni reflektor, osvetljevalec sten). Vsaka svetilka s tem imenom ga uporablja, svetilka pa ohrani svojo svetlost. Kliknite ime profila, da ga nehate uporabljati.

Okna s prozornim steklom pomagajo svetlobi neba priti v prostor, zato se slike notranjosti pod nebom razbistrijo hitreje.

Način {{ui:Hitro}} in sledilnik poti z WebGL prikažeta {{ui:Fizikalno nebo}} in {{ui:Slika neba (HDRI)}} kot jasno nebo in prezreta svetlobne profile.

## Kamera

{{ui:Kamera}} nastavi sliko kot fotografijo:

- {{ui:Osvetlitev}}: ohranite {{ui:Drsnik svetlosti}} ali izberite {{ui:Nastavitve kamere}} in nastavite {{ui:Zaslonka (f-število)}}, {{ui:Čas osvetlitve}} in {{ui:ISO}}, kot pri fotoaparatu; EV poleg njih je običajna vrednost osvetlitve. f/16 pri 1/100 s in ISO 100 ustreza sončnemu dnevu; temnejši prizor želi širšo zaslonko, počasnejši zaklop ali višji ISO. To deluje v vseh načinih.
- {{ui:Globinska ostrina}} zamegli, kar je bližje ali dlje od {{ui:Razdalja ostrenja (m)}}, kot bi to naredil objektiv s tem f-številom (pustite prazno, da ostri na sredino pogleda); {{ui:Oblika zaslonke}} da svetlim delom izven ostrenja okroglo ali lopatičasto obliko.
- {{ui:Dvotočkovna perspektiva (navpične črte ostanejo navpične)}} poravna kamero in premakne sliko, kot to naredi arhitekturni objektiv tilt-shift, tako da se stene ne nagibajo, ko gledate stavbo navzgor ali navzdol.
- {{ui:Ravnovesje belega}} določi, katera barva svetlobe je videti bela: nižje (na primer 3000 K) za toplo svetlobo svetilk, višje za senco in oblačne dni.
- {{ui:Projekcija}}: {{ui:Panorama 360°}} naredi sliko 2:1 vsega okoli kamere za pregledovalnike panoram; {{ui:Stereo panorama 360°}} zloži panoramo za levo in desno oko za naočnike; {{ui:Kubična mapa (6 ploskev)}} naredi šest kvadratnih pogledov v mreži 3 × 2. Širino določa {{ui:Velikost}}.

Projekcija, globinska ostrina, dvotočkovna perspektiva in ravnovesje belega potrebujejo sledilnik poti na grafični kartici (WebGPU), zato se prikažejo samo v {{ui:Visoka kakovost}}.

## Dokončajte sliko

{{ui:Slika}} barvno popravi sliko visoke kakovosti kot fotografijo, vsak nadzor pa takoj spremeni končno sliko, brez ponovnega upodabljanja:

- {{ui:Videz (pogledna transformacija)}}: {{ui:ACES filmic}} (slika kot prej), {{ui:AgX}} (mehkejši, ohrani barvo v zelo svetli svetlobi), {{ui:Filmic}} (nežna filmska krivulja) ali {{ui:Standardno}} (preprosto, svetla svetloba se obreže v belo).
- {{ui:Kontrast}} in {{ui:Stiskanje svetlih delov}} (vrne podrobnosti v zelo svetlih delih).
- {{ui:Cvetenje (bloom)}} (mehak sij okoli svetlobe), {{ui:Bleščanje}} z {{ui:Bleščeči žarki}} (zvezdasti žarki z najsvetlejših točk) in {{ui:Vinjeta}} (temnejši koti).
- {{ui:Barvna tabela (.cube)…}} uporabi barvno korekcijo iz datoteke `.cube` z {{ui:Moč barvne tabele}}; kot slika neba se ohrani samo, dokler je stran odprta.

## Shranite sliko

{{ui:Shrani kot}} poleg {{ui:Shrani}} izbere datoteko: {{ui:PNG}}, {{ui:JPEG}} ali {{ui:WebP}} za deljenje (JPEG in WebP samo tam, kjer ju brskalnik lahko zapiše), in po visoko kakovostni upodobitvi na grafični kartici še:

- {{ui:PNG, 16 bitov}}: barvno popravljena slika z drobnejšimi koraki med odtenki, za tiskanje ali nadaljnjo obdelavo.
- {{ui:EXR, vse plasti (32-bitna plavajoča vejica)}}: slika, kakršna je bila upodobljena (linearna svetloba, brez popravka), z vsakim elementom upodobitve in skupino luči kot lastno plastjo, za programe za sestavljanje.
- {{ui:Datoteka upodobitve (.ccrender, za poznejše barvno popravljanje)}}: vse, kar pogovorno okno potrebuje, da sliko znova zmeša in barvno popravi. {{ui:Odpri datoteko upodobitve…}} jo vrne z njeno mešanico in popravkom, brez upodabljanja.

## Mešanje luči po upodobitvi

Pred pritiskom na {{ui:Upodobi}} vklopite {{ui:Mešanje luči (spremenite barvo in svetlost vsake luči po upodobitvi)}}. Ko je slika končana (ali ustavljena), {{ui:Pomešaj sliko}} našteje njene luči po skupinah: nebo, sonce in svetilke po imenu (vse svetilke z istim imenom so ena skupina). Skupino izklopite, ji dodelite barvo ali jo naredite svetlejšo ali temnejšo, in slika se takoj spremeni, brez ponovnega upodabljanja. {{ui:Shrani mešanico}} shrani mešanico pod imenom, da jo pozneje znova izberete; {{ui:Kot upodobljeno}} vrne sliko, kakršna je bila narejena. {{ui:Shrani}} shrani pomešano sliko.

{{ui:Elementi upodobitve (albedo, normale, globina, difuzno, zrcalno, prepustnost, emisija, ID-ji)}} hrani tudi dele slike. {{ui:Prikaži}} preklopi pogled na enega od njih: barve površin (albedo), normale, globino, difuzno, zrcalno in prepuščeno svetlobo (vsako neposredno in posredno), kar sveti, in nebo ter barvo na predmet ali material za izdelavo mask.

Obe možnosti hranita dodatne plasti na grafični kartici. Pri velikih velikostih na grafični kartici morda ni prostora; pogovorno okno to pove in deluje manjša velikost.

## Vrsta upodobitev

Po visoko kakovostni nastavitvi {{ui:Dodaj to sliko v vrsto}} pod {{ui:Vrsta upodobitev}} ohrani sliko, kakršna je nastavljena zdaj; v pogovornem oknu za video {{ui:Dodaj to animacijo v vrsto}} naredi enako za celotno animacijo, sledeno poti po sličicah. {{ui:Zaženi vrsto}} jih upodobi drugo za drugo na tem računalniku, {{ui:Shrani}} ob vsaki končani jo prenese. Zapiranje strani ohrani vrsto: odprite isti model, in vrsta nadaljuje, kjer se je ustavila. Vrsta potrebuje WebGPU.

## Megla, dim, šum in kavstike

Te so v {{ui:Megla, dim in šum}} in delujejo v {{ui:Visoka kakovost}} na grafični kartici; drugi pogoni jih izpustijo.

- {{ui:Megla in zamegljenost}} napolni zrak do določene višine z meglo, ki jo osvetljujejo sonce, nebo in svetilke. {{ui:Kako daleč vidite, v metrih}} nastavi, kako gosta je (približno 100 m je rahla zamegljenost, 20 m gosta megla), {{ui:Višina megle nad tlemi, v metrih}} pove, kje se konča, in {{ui:Svetlobni snopi}} določa, kako močno se megla sveti proti svetlobi. Sončna svetloba zapusti meglo na vrhu, zato, kjer sonce prodre skozi okno ali med stavbami, vidite svetlobne snope.
- {{ui:Dim ali oblak}} doda en volumen dima ali oblaka, osvetljen kot megla. {{ui:Vrsta}} je {{ui:Oblak}}, {{ui:Dimni steber}} ali {{ui:Iz datoteke prostornine (.ccvol)}}, lastna mreža CadCraft. {{ui:Podrobnost}} in {{ui:Različnost}} spremenita narejen oblak ali steber; {{ui:Velikost najdaljše stranice, v metrih (0 = velikost modela)}}, {{ui:Premik X (m)}}, {{ui:Premik Y (m)}}, {{ui:Premik Z (m)}} in {{ui:Zasukaj}} ga postavijo (začne se na sredini modela), {{ui:Debelina}} ga naredi gostejšega, {{ui:Sij naprej}} ga naredi svetlejšega proti svetlobi, {{ui:Barva}} pa ga obarva. Datoteka prostornine se ohrani samo, dokler je stran odprta, kot slika neba.
- {{ui:Predčasno ustavi, kjer je slika čista (prilagodljivo vzorčenje)}} ne da več vzorcev pikslom, ki so se umirili, zato se preostanek slike konča hitreje. {{ui:Sprejemljiv šum}} je, koliko zrnatosti ostane, ko piksel preneha. Vrstica pod sliko pove, koliko vzorcev je piksel v povprečju dobil.
- {{ui:Kavstike (svetloba, ki jo lomi steklo ali odbijajo zrcala)}} sledi svetlobi iz svetilk in sonca, zato svetla lisa pod steklenim kroglo ali odsev zrcala na steni pride čista, ne zrnata. Izklopljena je, dokler so vklopljeni megla, dim, {{ui:Mešanje luči po upodobitvi}} ali elementi upodobitve, in je narejena za slike, ne za slike 360°, animacije ali delovno okolje {{ui:Upodobi}}.

## Koliko časa traja

Slika nastane na vašem računalniku, na njegovi grafični kartici; nič se ne naloži. Koliko časa traja, je odvisno od te kartice. Čas raste s prehodi in piksli: {{ui:Najboljše}} ima 16-krat več prehodov kot {{ui:Osnutek}}, slika 4K pa ima približno štirikrat toliko pikslov kot Full HD. Računalnik brez grafične kartice še vedno upodobi, vendar počasneje.

:::note
Če pogovorno okno pove, da brskalnik ne more upodabljati slik, brskalnik nima WebGL 2. Posodobite ga ali v njegovih nastavitvah vklopite strojno pospeševanje.
:::
