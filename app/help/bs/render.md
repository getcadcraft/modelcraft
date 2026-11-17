---
title: Renderuj sliku modela
summary: Napravi sliku koja izgleda kao dnevna svjetlost: nebo, sunce s mjesta i datuma tvog modela, meke sjenke, izgled stakla i metala, pa je spasi kao PNG.
keywords: renderovanje, unaprijed postavka, unaprijed postavke, scena, unutrašnja, vanjska, prikaz presjeka, noć, jedan klik, renderovanje, praćenje putanje, praćena putanja, praćenje zraka, globalno osvjetljenje, refleksije, refrakcija, visoki kvalitet, fotografija, fotorealno, realistično, slika, png, nepomična, nebo, sunce, dnevna svjetlost, sjenke, meke sjenke, ambijentalna okluzija, staklo, metal, sjajno, materijali, ekspozicija, svjetlina, oblačno, sumrak, studio, prezentacija, magla, maglica, izmaglica, dim, oblak, volumen, svjetlosni snopovi, zrake, kaustike, adaptivno uzorkovanje, šum
from: 517ba4d3
---

{{ui:Renderuj sliku…}} pravi sliku pogleda koja izgleda kao dnevna svjetlost, a ne kao crtež: nebo, sunce tamo gdje ga mjesto i datum tvog modela postavljaju, meke sjenke, svjetlo cijelog neba koje tamni uglove i procjepe, te boje koje mogu izgledati kao staklo, metal ili sjajna boja. Model se ne mijenja.

## Renderuj pogled

1. Postavi pogled kako želiš sliku: orbitiraj, zumiraj, odaberi [scenu](topic:scenes), sakrij ono što ne treba biti vidljivo. Slika koristi kameru samog pogleda.
2. Klikni {{ui:Izvezi}} u grupi {{ui:Datoteka}}, pa {{ui:Renderuj sliku…}}.
3. Odaberi {{ui:Scena}} ako pritisnuta nije ono što želiš (vidi [Gotove scene](topic:render#scene-presets-a-good-picture-in-one-click)), izaberi {{ui:Veličina}}, pa klikni {{ui:Renderuj}}.

   Slika se popunjava dok se renderuje i sa svakim prolazom postaje glađa. {{ui:Zaustavi}} (ili {{key:Esc}}) prekida je ranije i zadržava sliku do tada.

4. Klikni {{ui:Spasi}} da je preuzmeš (PNG, osim ako {{ui:Spasi kao}} ne kaže drugačije).

:::tip
Počni s {{ui:Nacrt}} na {{ui:Veličina pogleda}} da provjeriš kameru i izgled, pa renderuj {{ui:Dobro}} ili {{ui:Najbolje}} u većoj veličini za konačnu sliku.
:::

## Gotove scene: dobra slika jednim klikom

Na vrhu dijaloga su četiri dugmeta {{ui:Scena}}. Svako jednim klikom postavlja nebo, svjetlinu, tlo, linije ivica, kvalitet i sunce, pa ne treba ništa učiti prije prve slike. Klikni jedno, pa {{ui:Renderuj}}.

| Scena | Šta postavlja | Za šta se koristi |
|---|---|---|
| {{ui:Vanjska}} | Vedro nebo, sunce modela, tlo uključeno | Zgradu spolja |
| {{ui:Unutrašnja}} | Oblačno nebo (ravnomjerno svjetlo, bez oštrih sunčevih mrlja), pola zaustavljanja svjetlije | Pogled iz unutrašnjosti prostorije |
| {{ui:Prikaz presjeka}} | Bijeli studio, bez tla, linije ivica u brzom renderu | Model presječen presjekom |
| {{ui:Noć}} | Sunce ispod horizonta (ponoć u sredini zime za polovinu svijeta na kojoj je lokacija), jedno zaustavljanje svjetlije | Svjetiljke koje osvjetljavaju model. Bez svjetiljki slika je tamna |

- {{ui:Odaberi za ovaj pogled}} bira umjesto tebe: {{ui:Prikaz presjeka}} kad je presjek uključen, {{ui:Unutrašnja}} kad je kamera unutar modela, inače {{ui:Vanjska}}. Prvi put kad otvoriš dijalog počinje ovako sam od sebe.
- Svaka postavka ostaje ispod i može se mijenjati. Kad promijeniš jednu koju scena postavlja, nijedno dugme nije pritisnuto, a red ispod dugmadi kaže da su postavke tvoje. Klikni scenu ponovo da vrati njene vrijednosti.
- Scena ne dira motor, režim, veličinu, materijale, kameru ni svjetiljke.

:::note
Scene daju iste vrijednosti u ModelCraftu i BimCraftu. Kako gotova slika izgleda zavisi od tvog modela i tvoje grafičke kartice.
:::

## Postavke

| Postavka | Šta radi |
|---|---|
| {{ui:Veličina}} | Veličina pogleda, dvostruka veličina pogleda, Full HD, 4K ili kvadrat. Fiksne veličine zadržavaju kameru pogleda i prikazuju više ili manje sa strane |
| {{ui:Režim}} | {{ui:Brzo}}, ili {{ui:Visoki kvalitet (praćenje putanje)}} (dolje) sa svojim {{ui:Vremensko ograničenje}} |
| {{ui:Kvalitet}} | Koliko prolaza (ili, u visokom kvalitetu, uzoraka) se usrednjava: {{ui:Nacrt}} 16, {{ui:Dobro}} 64, {{ui:Najbolje}} 256. Više prolaza daje glađe sjenke i ivice i traje duže |
| {{ui:Nebo}} | {{ui:Vedro nebo}}, {{ui:Oblačno}} (meko svjetlo, blage sjenke), {{ui:Sumrak}} (nisko, toplo svjetlo) ili {{ui:Bijeli studio}} (običnu bijelu pozadinu) |
| {{ui:Sunce}} | Sunce dolazi iz datuma, vremena i mjesta u {{ui:Stil}} › sunce. Označi {{ui:Koristi drugi datum i vrijeme za ovu sliku}} da probaš drugo vrijeme bez mijenjanja stila modela |
| {{ui:Svjetlina}} | Svjetlije ili tamnije, u koracima (zaustavljanjima) |
| {{ui:Teren ispod modela}} | Tlo koje prima sjenke i stapa se s horizontom. Isključi ga za model koji lebdi |
| {{ui:Crtaj ivice}} | Tanko iscrtava ivice modela preko slike, za izgled crteža |

Kad je sunce ispod horizonta u odabrano vrijeme, to je noć: nebo potamni, a model osvjetljavaju njegove [svjetiljke](topic:lights). Dijalog to kaže.

Postavke se spašavaju u datoteci `.modelcraft`, pa sljedeća slika istog modela počinje tamo gdje si stao.

## Boje neka izgledaju kao staklo ili metal

Pod {{ui:Materijali}}, svaka boja na ekranu ima izgled: {{ui:Mat}}, {{ui:Saten}}, {{ui:Sjajno}}, {{ui:Metal}}, {{ui:Polirani metal}}, {{ui:Staklo}} ili {{ui:Matirano staklo}}. {{ui:Neobojene strane}} su strane bez sopstvene boje.

Da prozori budu staklo, [oboji](topic:paint) staklena polja prozora jednom bojom, pa tu boju postavi na {{ui:Staklo}}. Staklo propušta da se vidi nebo i ono što je iza njega, obojeno svojom bojom, i odražava nebo.

:::note
U režimu {{ui:Brzo}} staklo i metal odražavaju nebo, a ne ostatak modela, i svjetlo se ne lomi kroz staklo. Režim {{ui:Visoki kvalitet (praćenje putanje)}} dolje radi oboje.
:::

## Visoki kvalitet

Odaberi {{ui:Režim}} › {{ui:Visoki kvalitet (praćenje putanje)}} za sliku koja prati svjetlo onako kako ga kamera vidi:

- svjetlo se odbija između površina, pa je prostorija osvijetljena kroz prozor ili svjetiljkom sa svih strana, a boje se prelijevaju na susjedne;
- staklo je pravo staklo: svjetlo se lomi kroz njega i ono odražava model;
- metal i polirane površine odražavaju ostatak modela;
- svjetlosni paneli svijetle kao paneli, uz meke sjenke.

Mnogo je sporije od {{ui:Brzo}}: svaki prolaz ponovo prati svjetlo svakog piksela. Slika na početku ima zrnatost i čisti se kako se uzorci sabiraju, pa počni malo ({{ui:Veličina pogleda}}, {{ui:Nacrt}}) i odaberi {{ui:Vremensko ograničenje}}: kad istekne, zadržava se slika do tada. {{ui:Zaustavi}} je također zadržava. Prvi prolaz čeka dok pregledač priprema praćenje putanje.

Gdje pregledač ima WebGPU, praćenje putanje je CadCraftovo i radi na grafičkoj kartici; red ispod slike kaže {{ui:Praćena putanja na grafičkoj kartici (WebGPU)}}. Poslije {{ui:Zaustavi}} ili vremenskog ograničenja, {{ui:Nastavi}} nastavlja s istom slikom dok ne dobije sve uzorke; promjena postavke ili ponovni pritisak na {{ui:Renderuj}} počinje ispočetka. Bez WebGPU-a slika se prati pomoću WebGL-a (red to kaže), a {{ui:Nastavi}} se ne nudi.

:::linux
Firefox i većina Chrome postavki na Linuxu još nemaju WebGPU, pa visoki kvalitet tamo koristi WebGL.
:::

U ovom režimu ivice se ne crtaju, teksture iz biblioteke prikazuju boju i hrapavost, ali ne i izbočine ([materijal napravljen čvorovima](topic:shading#in-high-quality-pictures) prikazuje svoju normalu i izbočine), a presjek se pravi na modelu prije početka slike.

{{ui:Ukloni šum (briše zrnatost zaostalu nakon uzoraka)}} je uključeno podrazumijevano: kad je slika gotova ili zaustavljena, zaostalu zrnatost briše neuronska mreža napravljena za to (objavljena mreža Intel Open Image Denoise, pokrenuta na tvom računaru: na grafičkoj kartici, inače na procesoru). Slika s malo uzoraka ispadne čista; {{ui:Prikaži}} › {{ui:Slika prije uklanjanja šuma}} prikazuje je kako je renderovana.

## Renderuj u pogledu

Radni prostor {{ui:Renderuj}} pokreće praćenje putanje u samom pogledu: orbitiraj, mijenjaj model ili svjetlo i počinje odmah iznova. {{ui:Područje}}: povuci pravougaonik i renderuje se samo on; {{ui:Cijeli prikaz}} vraća. {{ui:Fokus}}: klikni ono što treba biti oštro, a dubina polja se fokusira tamo. {{ui:Detalj}} određuje koliko piksela pogleda renderuje (manje je brže). {{ui:Pauziraj}} zaustavlja i nastavlja. Treba mu WebGPU: bez njega radni prostor to kaže, a {{ui:Izvezi}} › {{ui:Renderuj sliku…}} i dalje radi.

## Nebesa i profili svjetla na grafičkoj kartici

Uz WebGPU, visoki kvalitet ima još dva neba:

- {{ui:Fizičko nebo}} računa dnevnu svjetlost iz visine sunca: duboko plavo iznad glave, blijedi pojas na horizontu i sunce koje postaje toplije i tamnije kako se spušta. {{ui:Zamućenje}} ide od vrlo vedrog dana (2) do zamagljenog (10).
- {{ui:Slika neba (HDRI)}} osvjetljava model panoramskom slikom stvarnog mjesta. {{ui:Odaberi sliku…}} uzima ekvirektangularnu datoteku `.hdr` ili `.exr`; {{ui:Okreni}} je okreće oko modela, a {{ui:Svjetlina slike}} je čini svjetlijom ili tamnijom. Slika nosi vlastito sunce, pa se sunce modela ne dodaje. Čuva se samo dok je stranica otvorena: nakon ponovnog otvaranja, odaberi je opet.

Svaka svjetiljka na listi {{ui:Svjetiljke}} može dobiti proizvođačev profil svjetla: {{ui:IES profil…}} čita IES (LM-63) datoteku, pa svjetiljka baca svjetlo onako kako to radi to tijelo (uski ugradbeni reflektor, zidni osvjetljivač). Svaka svjetiljka s tim imenom ga koristi, a svjetiljka zadržava svoju svjetlinu. Klikni naziv profila da prestaneš da ga koristiš.

Prozori od bistrog stakla pomažu svjetlu neba da nađe put u prostoriju, pa se slike unutrašnjosti pod nebom brže čiste.

Režim {{ui:Brzo}} i WebGL praćenje putanje prikazuju {{ui:Fizičko nebo}} i {{ui:Slika neba (HDRI)}} kao vedro nebo i ignorišu profile svjetla.

## Kamera

{{ui:Kamera}} postavlja sliku kao fotografiju:

- {{ui:Ekspozicija}}: zadrži {{ui:Klizač svjetline}}, ili odaberi {{ui:Postavke kamere}} i postavi {{ui:Otvor blende (f-broj)}}, {{ui:Brzina zatvarača}} i {{ui:ISO}} kao na fotoaparatu; EV pored njih je uobičajena vrijednost ekspozicije. f/16 pri 1/100 s i ISO 100 odgovara sunčanom danu; tamnija scena traži širi otvor, sporiji zatvarač ili veći ISO. Ovo radi u svakom režimu.
- {{ui:Dubina polja}} zamućuje ono što je bliže ili dalje od {{ui:Udaljenost fokusa (m)}} kao što bi to radio objektiv tog f-broja (ostavi prazno da fokusira ono što je u sredini pogleda); {{ui:Oblik otvora}} daje istaknutim dijelovima van fokusa okrugao ili lamelast oblik.
- {{ui:Perspektiva s dvije tačke (vertikalne linije ostaju vertikalne)}} izravnava kameru i pomjera sliku, kao što to radi arhitektonski tilt-shift objektiv, pa zidovi ne nagnu kad gledaš gore ili dolje prema zgradi.
- {{ui:Balans bijele}} određuje koja boja svjetla se prikazuje kao bijela: niže (na primjer 3000 K) za toplo svjetlo svjetiljki, više za hlad i oblačne dane.
- {{ui:Projekcija}}: {{ui:360° panorama}} pravi sliku 2:1 svega oko kamere za pregledače panorama; {{ui:360° stereo panorama}} slaže panoramu za lijevo i desno oko za naočale; {{ui:Kockasta mapa (6 ploha)}} pravi šest kvadratnih pogleda u mreži 3 × 2. Širina dolazi iz {{ui:Veličina}}.

Projekcija, dubina polja, perspektiva s dvije tačke i balans bijele traže praćenje putanje na grafičkoj kartici (WebGPU), pa se prikazuju samo u {{ui:Visoki kvalitet}}.

## Završi sliku

{{ui:Slika}} gradira sliku visokog kvaliteta kao fotografiju, a svaka kontrola odmah mijenja gotovu sliku, bez ponovnog renderovanja:

- {{ui:Izgled (transformacija pogleda)}}: {{ui:ACES filmski}} (slika kao prije), {{ui:AgX}} (mekši, zadržava boju u vrlo jakom svjetlu), {{ui:Filmski}} (blaga filmska krivulja) ili {{ui:Standardni}} (obično, jako svjetlo ide u bijelo).
- {{ui:Kontrast}} i {{ui:Kompresija svijetlih dijelova}} (vraća detalje u vrlo svijetlim dijelovima).
- {{ui:Bloom}} (mek sjaj oko jakog svjetla), {{ui:Odsjaj}} sa svojim {{ui:Zrake odsjaja}} (zrake poput zvijezda iz najsvjetlijih tačaka) i {{ui:Vinjeta}} (tamniji uglovi).
- {{ui:Tabela boja (.cube)…}} primjenjuje gradiranje boja iz `.cube` datoteke, sa svojom {{ui:Jačina tabele boja}}; kao i slika neba, čuva se samo dok je stranica otvorena.

## Spasi sliku

{{ui:Spasi kao}} pored {{ui:Spasi}} bira datoteku: {{ui:PNG}}, {{ui:JPEG}} ili {{ui:WebP}} za dijeljenje (JPEG i WebP samo tamo gdje pregledač može da ih upiše), a poslije renderovanja visokog kvaliteta na grafičkoj kartici i:

- {{ui:PNG, 16 bita}}: gradirana slika s finijim koracima između nijansi, za štampanje ili dalju obradu.
- {{ui:EXR, svaki sloj (32-bitni float)}}: slika kako je renderovana (linearno svjetlo, bez gradiranja) sa svakim elementom renderovanja i grupom svjetla kao zasebnim slojem, za programe za kompoziciju.
- {{ui:Datoteka renderovanja (.ccrender, za kasnije ponovno gradiranje)}}: sve što dijalog treba da ponovo miješa i gradira sliku. {{ui:Otvori datoteku renderovanja…}} je vraća, sa svojim miješanjem i gradiranjem, bez renderovanja.

## Pomiješaj svjetla nakon renderovanja

Uključi {{ui:Miješanje svjetla (mijenja boju i svjetlinu svakog svjetla nakon renderovanja)}} prije nego pritisneš {{ui:Renderuj}}. Kad je slika gotova (ili zaustavljena), {{ui:Miješaj sliku}} popisuje njena svjetla po grupama: nebo, sunce i svjetiljke po imenu (svaka svjetiljka s istim imenom je jedna grupa). Isključi grupu, daj joj boju ili je učini svjetlijom ili tamnijom, pa se slika odmah mijenja, bez ponovnog renderovanja. {{ui:Spasi mješavinu}} čuva miješanje pod imenom da ga kasnije opet odabereš; {{ui:Kako je renderovano}} vraća sliku onakvu kakva je nastala. {{ui:Spasi}} spašava miješanu sliku.

{{ui:Elementi renderovanja (albedo, normale, dubina, difuzno, spekularno, transmisija, emisija, ID-ovi)}} također čuva dijelove slike. {{ui:Prikaži}} prebacuje pogled na jedan od njih: boje površina (albedo), normale, dubinu, difuzno, spekularno i propušteno svjetlo (svako direktno i indirektno), šta svijetli i nebo, te boju po objektu ili po materijalu za pravljenje maski.

Oba čuvaju dodatne slojeve na grafičkoj kartici. Na velikim veličinama grafička kartica možda nema mjesta; dijalog to kaže i manja veličina radi.

## Red renderovanja

Poslije postavke visokog kvaliteta, {{ui:Dodaj ovu sliku u red}} pod {{ui:Red renderovanja}} zadržava sliku onako kako je sada postavljena; dijalog videa {{ui:Dodaj ovu animaciju u red}} radi isto za cijelu animaciju, praćenu putanjom kadar po kadar. {{ui:Pokreni red}} renderuje ih jednu za drugom na ovom računaru, a {{ui:Spasi}} pored svake gotove preuzima je. Zatvaranje stranice čuva red: otvori isti model i nastavlja tamo gdje je stao. Red treba WebGPU.

## Magla, dim, šum i kaustike

Ovo se nalazi pod {{ui:Magla, dim i šum}} i radi u {{ui:Visoki kvalitet}} na grafičkoj kartici; ostali motori ih izostavljaju.

- {{ui:Magla i izmaglica}} ispunjava zrak do određene visine maglicom koju osvjetljavaju sunce, nebo i svjetiljke. {{ui:Dokle vidiš, u metrima}} određuje koliko je gusta (oko 100 m je lagana izmaglica, 20 m gusta magla), {{ui:Visina magle iznad tla, u metrima}} je gdje završava, a {{ui:Svjetlosni snopovi}} je koliko maglica sija prema svjetlu. Sunčeva svjetlost napušta maglu na vrhu, pa tamo gdje sunce prolazi kroz prozor ili između zgrada vidiš ga kao snopove svjetla.
- {{ui:Dim ili oblak}} dodaje jedan volumen dima ili oblaka osvijetljen kao magla. {{ui:Vrsta}} je {{ui:Oblak}}, {{ui:Dimni stub}} ili {{ui:Iz datoteke volumena (.ccvol)}}, CadCraftov vlastiti format mreže. {{ui:Detalj}} i {{ui:Varijacija}} mijenjaju napravljen oblak ili stub, {{ui:Veličina njene najduže strane, u metrima (0 = veličina modela)}}, {{ui:Pomjeri X (m)}}, {{ui:Pomjeri Y (m)}}, {{ui:Pomjeri Z (m)}} i {{ui:Okreni}} ga postavljaju (počinje u sredini modela), {{ui:Debljina}} ga čini gušćim, {{ui:Sjaj prema naprijed}} ga čini svjetlijim prema svjetlu, a {{ui:Boja}} ga boji. Datoteka volumena čuva se samo dok je stranica otvorena, kao i slika neba.
- {{ui:Zaustavi ranije tamo gdje je slika čista (adaptivno uzorkovanje)}} ne daje više uzoraka pikselima koji su se smirili, pa ostatak slike završava ranije. {{ui:Prihvatljiv šum}} je koliko zrnatosti ostaje kad piksel stane. Red ispod slike kaže koliko je uzoraka piksel prosječno dobio.
- {{ui:Kaustike (svjetlost savijena staklom ili odbijena ogledalima)}} prati svjetlo iz svjetiljki i sunca, pa svijetla mrlja pod staklenom kuglom ili odsjaj ogledala na zidu izlazi čista umjesto zrnasta. Isključena je dok su magla, dim, {{ui:Pomiješaj svjetla nakon renderovanja}} ili elementi renderovanja uključeni, a napravljena je za slike, a ne za 360° slike, animacije ili radni prostor Renderuj.

## Koliko traje

Slika se pravi na tvom računaru, na njegovoj grafičkoj kartici; ništa se ne šalje. Koliko traje zavisi od te kartice. Vrijeme raste s prolazima i pikselima: {{ui:Najbolje}} ima 16 puta više prolaza od {{ui:Nacrt}}, a 4K slika ima oko četiri puta više piksela od Full HD. Računar bez grafičke kartice i dalje renderuje, ali sporije.

:::note
Ako dijalog kaže da pregledač ne može renderovati slike, pregledač nema WebGL 2. Ažuriraj ga ili uključi hardversko ubrzanje u njegovim postavkama.
:::
