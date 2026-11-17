---
title: Renderovanje slike modela
summary: Napravite sliku koja izgleda kao dnevna svetlost: nebo, sunce sa mesta i datuma vašeg modela, meke senke, izgled stakla i metala, pa je sačuvajte kao PNG.
keywords: renderovanje, prednastavljenost, prednastavke, prednastavljena scena, unutrašnjost, spoljašnost, prikaz preseka, noć, jednim klikom, renderovanje, praćenje putanje zraka, praćenje zraka, globalno osvetljenje, refleksije, refrakcija, visok kvalitet, fotografija, fotorealistično, realistično, slika, png, nepokretna slika, nebo, sunce, dnevna svetlost, senke, meke senke, ambijentalna okluzija, staklo, metal, sjajno, materijali, ekspozicija, svetlina, oblačno, sumrak, studio, prezentacija, magla, izmaglica, dim, oblak, zapremina, svetlosni snopovi, kaustika, adaptivno uzorkovanje, šum
from: 517ba4d3
---

{{ui:Renderuj sliku…}} pravi sliku prikaza koja izgleda kao dnevna svetlost, a ne kao crtež: nebo, sunce tamo gde ga postavljaju mesto i datum vašeg modela, meke senke, svetlo sa celog neba koje tamni uglove i procepe, i boje koje mogu izgledati kao staklo, metal ili sjajna boja. Model se ne menja.

## Renderujte prikaz

1. Postavite prikaz kako želite sliku: orbitirajte, zumirajte, izaberite [scenu](topic:scenes), sakrijte ono što ne treba da se vidi. Slika koristi sopstvenu kameru prikaza.
2. Kliknite {{ui:Izvezi}} u grupi {{ui:Datoteka}}, pa {{ui:Renderuj sliku…}}.
3. Izaberite {{ui:Scena}} ako pritisnuta nije ono što želite (vidi [Prednastavljene scene](topic:render#scene-presets-a-good-picture-in-one-click)), izaberite {{ui:Veličina}}, pa kliknite {{ui:Renderuj}}.

   Slika se popunjava dok se renderuje i postaje glađa sa svakim prolazom. {{ui:Zaustavi}} (ili {{key:Esc}}) završava je ranije i zadržava sliku do tog trenutka.

4. Kliknite {{ui:Sačuvaj}} da je preuzmete (PNG, osim ako {{ui:Sačuvaj kao}} ne kaže drugačije).

:::tip
Počnite sa {{ui:Nacrt}} u {{ui:Veličina prikaza}} da proverite kameru i izgled, pa renderujte {{ui:Dobar}} ili {{ui:Najbolji}} u većoj veličini za konačnu sliku.
:::

## Prednastavljene scene: dobra slika jednim klikom

Na vrhu dijaloga su četiri dugmeta {{ui:Scena}}. Svako postavlja nebo, svetlinu, tlo, ivične linije, kvalitet i sunce jednim klikom, pa nema šta da se nauči pre prve slike. Kliknite jedno, pa {{ui:Renderuj}}.

| Scena | Šta postavlja | Za šta se koristi |
|---|---|---|
| {{ui:Spoljašnost}} | Vedro nebo, sopstveno sunce modela, tlo uključeno | Zgradu spolja |
| {{ui:Unutrašnjost}} | Oblačno nebo (ravnomerno svetlo, bez oštrih sunčevih mrlja), za pola stopa svetlije | Prikaz iz unutrašnjosti prostorije |
| {{ui:Prikaz preseka}} | Bela studijska pozadina, bez tla, ivične linije u brzom renderovanju | Model presečen presekom |
| {{ui:Noć}} | Sunce pod horizontom (ponoć u sredini zime za polovinu sveta na kojoj je lokacija), za jedan stop svetlije | Svetiljke koje osvetljavaju model. Bez svetiljki slika je tamna |

- {{ui:Izaberi za ovaj pogled}} bira umesto vas: {{ui:Prikaz preseka}} kada je uključen presek, {{ui:Unutrašnjost}} kada je kamera unutar modela, inače {{ui:Spoljašnost}}. Prvi put kada otvorite dijalog počinje ovako sam od sebe.
- Svako podešavanje ostaje ispod i može da se promeni. Kada promenite jedno, scena se ne drži, nijedno dugme nije pritisnuto, a linija ispod dugmadi kaže da su podešavanja vaša. Kliknite scenu ponovo da vrati njene vrednosti.
- Scena ne dira motor, režim, veličinu, materijale, kameru ni svetiljke.

:::note
Scene daju iste vrednosti u ModelCraft-u i BimCraft-u. Kako gotova slika izgleda zavisi od vašeg modela i od grafičke kartice.
:::

## Podešavanja

| Podešavanje | Šta radi |
|---|---|
| {{ui:Veličina}} | Veličina prikaza, dvostruka veličina prikaza, Full HD, 4K ili kvadrat. Fiksne veličine zadržavaju kameru prikaza i pokazuju više ili manje sa strana |
| {{ui:Režim}} | {{ui:Brzi}}, ili {{ui:Visoki kvalitet (praćenje putanje zraka)}} (ispod) sa svojim {{ui:Vremensko ograničenje}} |
| {{ui:Kvalitet}} | Koliko prolaza (ili, u visokom kvalitetu, uzoraka) se usrednjava: {{ui:Nacrt}} 16, {{ui:Dobar}} 64, {{ui:Najbolji}} 256. Više prolaza daje glađe senke i ivice i traje duže |
| {{ui:Nebo}} | {{ui:Vedro nebo}}, {{ui:Oblačno}} (meka svetlost, slabe senke), {{ui:Sumrak}} (nisko, toplo svetlo) ili {{ui:Bela studijska pozadina}} (obična bela pozadina) |
| {{ui:Sunce}} | Sunce dolazi iz datuma, vremena i mesta u {{ui:Stil}} › sunce. Označite {{ui:Koristi drugi datum i vreme za ovu sliku}} da probate drugo vreme bez menjanja stila modela |
| {{ui:Svetlina}} | Svetlije ili tamnije, u koracima (stopovima) |
| {{ui:Tlo ispod modela}} | Tlo koje prima senke i tone u horizont. Isključite ga za model koji lebdi |
| {{ui:Crtaj ivice}} | Crta ivice modela tanko preko slike, za nacrtan izgled |

Kada je sunce u izabrano vreme ispod horizonta, nastaje noć: nebo tamni, a [svetiljke](topic:lights) modela ga osvetljavaju. Dijalog to kaže.

Podešavanja se čuvaju u datoteci `.modelcraft`, pa sledeća slika istog modela počinje tamo gde ste stali.

## Napravite da boje izgledaju kao staklo ili metal

Pod {{ui:Materijali}}, svaka boja na ekranu ima izgled: {{ui:Mat}}, {{ui:Svilenkast}}, {{ui:Sjajan}}, {{ui:Metal}}, {{ui:Polirani metal}}, {{ui:Staklo}} ili {{ui:Matirano staklo}}. {{ui:Neobojene površi}} su površi bez sopstvene boje.

Da prozori budu staklo, [obojite](topic:paint) okna prozora jednom bojom, pa tu boju postavite na {{ui:Staklo}}. Staklo propušta nebo i ono što je iza njega, obojeno svojom bojom, i odražava nebo.

:::note
U režimu {{ui:Brzi}}, staklo i metal odražavaju nebo, a ne ostatak modela, i svetlo se ne lomi kroz staklo. Režim {{ui:Visoki kvalitet (praćenje putanje zraka)}} ispod radi oba.
:::

## Visok kvalitet

Izaberite {{ui:Režim}} › {{ui:Visoki kvalitet (praćenje putanje zraka)}} za sliku koja prati svetlo onako kako ga kamera vidi:

- svetlo se odbija između površi, pa je soba osvetljena kroz prozor ili svetiljkom osvetljena sa svih strana, a boje se prelivaju na susedne;
- staklo je pravo staklo: svetlo se lomi kroz njega i ono odražava model;
- metal i polirane površi odražavaju ostatak modela;
- svetlosni paneli svetle kao paneli, sa mekim senkama.

Mnogo je sporiji od {{ui:Brzi}}: svaki prolaz ponovo prati svetlo svakog piksela. Slika počinje zrnasta i čisti se kako se uzorci sabiraju, pa počnite malo ({{ui:Veličina prikaza}}, {{ui:Nacrt}}) i izaberite {{ui:Vremensko ograničenje}}: kada istekne, zadržava se slika do tog trenutka. {{ui:Zaustavi}} je takođe zadržava. Prvi prolaz čeka dok pregledač priprema praćenje putanje zraka.

Tamo gde pregledač ima WebGPU, praćenje putanje zraka je CadCraft-ov sopstveni i radi na grafičkoj kartici; linija ispod slike kaže {{ui:Praćenje putanje zraka na grafičkoj kartici (WebGPU)}}. Posle {{ui:Zaustavi}} ili vremenskog ograničenja, {{ui:Nastavi}} nastavlja sa istom slikom dok ne dobije sve uzorke; promena podešavanja ili ponovno pritiskanje {{ui:Renderuj}} počinje iz početka. Bez WebGPU-a slika se prati pomoću WebGL-a (linija to kaže), a {{ui:Nastavi}} se ne nudi.

:::linux
Firefox i većina Chrome podešavanja na Linuxu još nemaju WebGPU, pa visoki kvalitet tamo koristi WebGL.
:::

U ovom režimu ivice se ne crtaju, teksture iz biblioteke pokazuju svoju boju i hrapavost ali ne i svoje neravnine (a [materijal napravljen čvorovima](topic:shading#in-high-quality-pictures) pokazuje svoju normalu i neravnine), a presek se pravi na modelu pre nego što slika počne.

{{ui:Smanjivanje šuma (briše zrnastost zaostalu posle uzoraka)}} je podrazumevano uključeno: kada je slika gotova, ili zaustavljena, zrnastost koja je ostala briše se neuronskom mrežom napravljenom za ovo (Intel Open Image Denoise, objavljena mreža, pokrenuta na vašem računaru: na grafičkoj kartici, inače na procesoru). Slika sa malo uzoraka ispada čista; {{ui:Prikaži}} › {{ui:Slika pre odšumljavanja}} pokazuje je onakvu kakva je renderovana.

## Renderovanje u prikazu

Radni prostor {{ui:Renderuj}} pokreće praćenje putanje zraka u samom prikazu: orbitirajte, menjajte model ili svetlo i počinje ponovo odmah. {{ui:Oblast}}: prevucite pravougaonik i samo on se renderuje; {{ui:Ceo prikaz}} se vraća. {{ui:Fokus}}: kliknite šta treba da bude oštro, i dubina oštrine se fokusira tamo. {{ui:Detalj}} određuje koliko piksela prikaza se renderuje (manje je brže). {{ui:Pauziraj}} zaustavlja i nastavlja. Potreban je WebGPU: bez njega radni prostor to kaže, a {{ui:Izvezi}} › {{ui:Renderuj sliku…}} i dalje radi.

## Nebo i profili svetla na grafičkoj kartici

Uz WebGPU, visok kvalitet ima još dva neba:

- {{ui:Fizičko nebo}} računa dnevnu svetlost iz visine sunca: duboko plavo iznad glave, bleda traka na horizontu i sunce koje postaje toplije i slabije kako se spušta. {{ui:Magla}} ide od veoma vedrog dana (2) do maglovitog (10).
- {{ui:Slika neba (HDRI)}} osvetljava model panoramskom slikom pravog mesta. {{ui:Izaberi sliku…}} uzima datoteku `.hdr` ili `.exr` u ekvirektangularnom formatu; {{ui:Okreni}} je okreće oko modela, a {{ui:Svetlina slike}} je čini svetlijom ili tamnijom. Slika nosi sopstveno sunce, pa se sunce modela ne dodaje. Čuva se samo dok je stranica otvorena: posle ponovnog otvaranja izaberite je ponovo.

Svaka svetiljka u listi {{ui:Svetiljke}} može da dobije svetlosni profil proizvođača: {{ui:IES profil…}} čita IES (LM-63) datoteku i svetiljka tada baca svetlo onako kako to radi to telo (uski downlight, zidni osvetljivač). Svaka svetiljka sa tim nazivom koristi ga, a svetiljka zadržava sopstvenu svetlinu. Kliknite naziv profila da prestanete da ga koristite.

Prozori od prozračnog stakla pomažu svetlu neba da nađe put u prostoriju, pa slike unutrašnjosti pod nebom brže postaju čiste.

Režim {{ui:Brzi}} i WebGL praćenje putanje zraka prikazuju {{ui:Fizičko nebo}} i {{ui:Slika neba (HDRI)}} kao vedro nebo i ignorišu svetlosne profile.

## Kamera

{{ui:Kamera}} postavlja sliku kao fotografiju:

- {{ui:Ekspozicija}}: zadržite {{ui:Klizač svetline}}, ili izaberite {{ui:Podešavanja kamere}} i postavite {{ui:Otvor blende (f-broj)}}, {{ui:Brzina zatvarača}} i {{ui:ISO}} kao na fotoaparatu; EV pored njih je uobičajena vrednost ekspozicije. f/16 pri 1/100 s i ISO 100 odgovara sunčanom danu; tamnija scena traži širi otvor blende, sporiji zatvarač ili veći ISO. Ovo radi u svakom režimu.
- {{ui:Dubina oštrine}} zamućuje ono što je bliže ili dalje od {{ui:Udaljenost fokusa (m)}} kao što bi to uradio objektiv tog f-broja (ostavite prazno da se fokusira na ono što je u sredini prikaza); {{ui:Oblik otvora blende}} daje van fokusa svetlim mestima okrugli ili lamelasti oblik.
- {{ui:Perspektiva sa dve tačke (vertikalne linije ostaju vertikalne)}} izravnava kameru i pomera sliku, kao što to radi arhitektonski tilt-shift objektiv, pa zidovi ne naginju kada gledate gore ili dole ka zgradi.
- {{ui:Balans bele}} određuje koja boja svetla se prikazuje kao bela: niža (na primer 3000 K) za toplo svetlo svetiljki, viša za senku i oblačne dane.
- {{ui:Projekcija}}: {{ui:Panorama od 360°}} pravi sliku 2:1 svega oko kamere za pregledače panorama; {{ui:Stereo panorama od 360°}} slaže panoramu za levo i desno oko za naočare; {{ui:Kubna mapa (6 strana)}} pravi šest kvadratnih prikaza u mreži 3 × 2. Širina dolazi iz {{ui:Veličina}}.

Projekcija, dubina oštrine, perspektiva sa dve tačke i balans bele zahtevaju praćenje putanje zraka na grafičkoj kartici (WebGPU), pa se prikazuju samo u {{ui:Visok kvalitet}}.

## Završite sliku

{{ui:Slika}} gradira sliku visokog kvaliteta kao fotografiju, a svaka kontrola menja gotovu sliku odmah, bez ponovnog renderovanja:

- {{ui:Izgled (transformacija pogleda)}}: {{ui:ACES filmski}} (slika kao ranije), {{ui:AgX}} (mekše, čuva boju u veoma jakom svetlu), {{ui:Filmski}} (blaga filmska kriva) ili {{ui:Standardni}} (običan, jako svetlo se seče na belo).
- {{ui:Kontrast}} i {{ui:Sabijanje svetlih delova}} (vraća detalje u veoma svetlim delovima).
- {{ui:Bloom}} (meki sjaj oko jakog svetla), {{ui:Odsjaj}} sa svojim {{ui:Zraci odsjaja}} (zraci u obliku zvezde od najsvetlijih tačaka) i {{ui:Vinjeta}} (tamniji uglovi).
- {{ui:Tabela boja (.cube)…}} primenjuje gradaciju boja iz `.cube` datoteke, sa svojom {{ui:Jačina tabele boja}}; kao i slika neba, čuva se samo dok je stranica otvorena.

## Sačuvajte sliku

{{ui:Sačuvaj kao}} pored {{ui:Sačuvaj}} bira datoteku: {{ui:PNG}}, {{ui:JPEG}} ili {{ui:WebP}} za deljenje (JPEG i WebP samo tamo gde ih pregledač može upisati), a posle renderovanja visokog kvaliteta na grafičkoj kartici i:

- {{ui:PNG, 16 bita}}: gradirana slika sa finijim koracima između nijansi, za štampu ili dalju obradu.
- {{ui:EXR, svaki sloj (32-bitni float)}}: slika kakva je renderovana (linearno svetlo, bez gradacije) sa svakim elementom renderovanja i grupom svetla kao sopstvenim slojem, za programe za kompoziciju.
- {{ui:Datoteka renderovanja (.ccrender, za ponovnu obradu kasnije)}}: sve što dijalogu treba da ponovo umeša i gradira sliku. {{ui:Otvori datoteku renderovanja…}} je vraća, sa njenom mešavinom i gradacijom, bez renderovanja.

## Pomešajte svetla posle renderovanja

Uključite {{ui:Mešanje svetla (menjaj boju i svetlinu svake lampe posle renderovanja)}} pre nego što pritisnete {{ui:Renderuj}}. Kada je slika gotova (ili zaustavljena), {{ui:Umešaj sliku}} navodi njena svetla u grupama: nebo, sunce i svetiljke po nazivu (svaka svetiljka sa istim nazivom je jedna grupa). Isključite grupu, dajte joj boju ili je učinite svetlijom ili tamnijom, pa se slika menja odmah, bez ponovnog renderovanja. {{ui:Sačuvaj mešanje}} čuva mešavinu pod nazivom da je kasnije izaberete; {{ui:Kako je renderovano}} vraća sliku kakva je napravljena. {{ui:Sačuvaj}} čuva umešanu sliku.

{{ui:Elementi renderovanja (albedo, normale, dubina, difuzno, spekularno, transmisija, emisija, ID-jevi)}} čuva i delove slike. {{ui:Prikaži}} prebacuje prikaz na jedan od njih: boje površi (albedo), normale, dubinu, difuzno, spekularno i propušteno svetlo (svako direktno i indirektno), šta svetli i nebo, i boju po objektu ili po materijalu za pravljenje maski.

Oba čuvaju dodatne slojeve na grafičkoj kartici. Na velikim veličinama grafička kartica možda nema mesta; dijalog to kaže, a manja veličina radi.

## Red za renderovanje

Posle podešavanja visokog kvaliteta, {{ui:Dodaj ovu sliku u red}} pod {{ui:Red za renderovanje}} zadržava sliku kakva je sada podešena; {{ui:Dodaj ovu animaciju u red}} u dijalogu za video radi isto za celu animaciju, praćenu kadar po kadar. {{ui:Pokreni red}} renderuje ih jednu za drugom na ovom računaru, a {{ui:Sačuvaj}} pored svake gotove preuzima je. Zatvaranje stranice zadržava red: otvorite isti model i nastavlja se tamo gde je stao. Red zahteva WebGPU.

## Magla, dim, šum i kaustika

Ovo se nalazi u {{ui:Magla, dim i šum}} i radi u {{ui:Visok kvalitet}} na grafičkoj kartici; ostali motori ih izostavljaju.

- {{ui:Magla i izmaglica}} puni vazduh do visine maglom koju osvetljavaju sunce, nebo i svetiljke. {{ui:Dokle se vidi, u metrima}} određuje koliko je gusta (oko 100 m je lagana izmaglica, 20 m gusta magla), {{ui:Visina magle iznad tla, u metrima}} je gde se završava, a {{ui:Svetlosni snopovi}} je koliko se magla sija prema svetlu. Sunčeva svetlost napušta maglu na vrhu, pa tamo gde sunce prolazi kroz prozor ili između zgrada vidite svetlosne snopove.
- {{ui:Dim ili oblak}} dodaje jednu zapreminu dima ili oblaka osvetljenu kao magla. {{ui:Vrsta}} je {{ui:Oblak}}, {{ui:Stub dima}} ili {{ui:Iz datoteke zapremine (.ccvol)}}, CadCraft-ov sopstveni format mreže. {{ui:Detalj}} i {{ui:Varijacija}} menjaju napravljen oblak ili stub, {{ui:Veličina njene najduže strane, u metrima (0 = veličina modela)}}, {{ui:Pomeri X (m)}}, {{ui:Pomeri Y (m)}}, {{ui:Pomeri Z (m)}} i {{ui:Okreni}} ga postavljaju (počinje u sredini modela), {{ui:Debljina}} ga zgušnjava, {{ui:Sjaj unapred}} ga čini svetlijim prema svetlu, a {{ui:Boja}} ga oboji. Datoteka zapremine se čuva samo dok je stranica otvorena, kao i slika neba.
- {{ui:Zaustavi rano tamo gde je slika čista (adaptivno uzorkovanje)}} ne daje više uzoraka pikselima koji su se smirili, pa ostatak slike završava ranije. {{ui:Prihvatljiv šum}} je koliko zrnastosti ostaje kada se piksel zaustavi. Linija ispod slike kaže koliko je uzoraka piksel u proseku dobio.
- {{ui:Kaustika (svetlost koju savija staklo ili odbijaju ogledala)}} prati svetlo iz svetiljki i sunca, pa svetla mrlja ispod staklene kugle ili svetlo ogledala na zidu ispada čisto, a ne zrnasto. Isključena je dok su magla, dim, {{ui:Mešanje svetla posle renderovanja}} ili elementi renderovanja uključeni, a pravljena je za slike, a ne za slike od 360°, animacije ili radni prostor {{ui:Renderuj}}.

## Koliko traje

Slika se pravi na vašem računaru, na njegovoj grafičkoj kartici; ništa se ne otprema. Koliko traje zavisi od te kartice. Vreme raste sa prolazima i pikselima: {{ui:Najbolji}} ima 16 puta više prolaza od {{ui:Nacrt}}, a slika 4K ima oko četiri puta više piksela od Full HD. Računar bez grafičke kartice i dalje renderuje, ali sporije.

:::note
Ako dijalog kaže da pregledač ne može da renderuje slike, pregledač nema WebGL 2. Ažurirajte ga ili uključite hardversko ubrzanje u njegovim podešavanjima.
:::
