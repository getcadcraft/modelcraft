---
title: Renderiraj sliku modela
summary: Napravite sliku koja izgleda kao dnevna svjetlost: nebo, sunce s mjesta i datuma vašeg modela, meke sjene, izgled stakla i metala, pa je spremite kao PNG.
keywords: render, predložak, predlošci, predložak scene, interijer, eksterijer, pogled presjeka, noć, jedan klik, renderiranje, path tracing, path traced, ray tracing, globalna iluminacija, refleksije, refrakcija, visoka kvaliteta, fotografija, fotorealistično, realistično, slika, png, nepomična, nebo, sunce, dnevna svjetlost, sjene, meke sjene, ambijentalna okluzija, staklo, metal, sjajno, materijali, ekspozicija, svjetlina, oblačno, sumrak, studio, prezentacija, magla, izmaglica, dim, oblak, volumen, snopovi svjetla, kaustike, prilagodljivo uzorkovanje, šum
from: 517ba4d3
---

{{ui:Renderiraj sliku…}} pravi sliku prikaza koja izgleda kao dnevna svjetlost, a ne kao crtež: nebo, sunce na mjestu i u datumu vašeg modela, meke sjene, svjetlo s cijelog neba koje tamni kutove i procjepe te boje koje mogu izgledati kao staklo, metal ili sjajna boja. Model se ne mijenja.

## Renderiranje prikaza

1. Postavite prikaz kako želite da slika izgleda: orbitirajte, zumirajte, odaberite [scenu](topic:scenes), sakrijte što ne smije biti vidljivo. Slika koristi kameru samog prikaza.
2. Kliknite {{ui:Izvezi}} u grupi {{ui:Datoteka}}, zatim {{ui:Renderiraj sliku…}}.
3. Odaberite {{ui:Scena}} ako pritisnuta nije ono što želite (vidi [Predlošci scene](topic:render#scene-presets-a-good-picture-in-one-click)), odaberite {{ui:Veličina}}, zatim kliknite {{ui:Renderiraj}}.

   Slika se popunjava dok se renderira i postaje glađa sa svakim prolazom. {{ui:Zaustavi}} (ili {{key:Esc}}) završava renderiranje ranije i zadržava sliku do tog trenutka.

4. Kliknite {{ui:Spremi}} da je preuzmete (PNG, osim ako {{ui:Spremi kao}} ne kaže drugačije).

:::tip
Počnite s {{ui:Radna}} pri {{ui:Veličina prikaza}} da provjerite kameru i izgled, zatim renderirajte {{ui:Dobra}} ili {{ui:Najbolja}} u većoj veličini za konačnu sliku.
:::

## Predlošci scene: dobra slika jednim klikom

Na vrhu dijaloga nalaze se četiri gumba {{ui:Scena}}. Svaki jednim klikom postavlja nebo, svjetlinu, tlo, linije bridova, kvalitetu i sunce, tako da prije prve slike nema što učiti. Kliknite jedan, zatim {{ui:Renderiraj}}.

| Scena | Što postavlja | Za što se koristi |
|---|---|---|
| {{ui:Eksterijer}} | Vedro nebo, vlastito sunce modela, tlo uključeno | Zgradu izvana |
| {{ui:Interijer}} | Oblačno nebo (ravnomjerno svjetlo, bez oštrih sunčanih mrlja), za pola blende svjetlije | Pogled iznutra prostorije |
| {{ui:Prikaz presjeka}} | Bijeli studio, bez tla, linije bridova u brzom renderiranju | Model presječen presjekom |
| {{ui:Noć}} | Sunce ispod horizonta (ponoć u zimi za polutku u kojoj je lokacija), za jednu blendu svjetlije | Svjetiljke koje osvjetljavaju model. Bez svjetiljki slika je tamna |

- {{ui:Odaberi za ovaj pogled}} bira umjesto vas: {{ui:Prikaz presjeka}} kad je uključen rez presjeka, {{ui:Interijer}} kad je kamera unutar modela, inače {{ui:Eksterijer}}. Kad prvi put otvorite dijalog, počinje ovako samo od sebe.
- Svaka postavka ostaje dolje i može se mijenjati. Kad promijenite jednu, scena više nije pritisnuta, a redak ispod gumba kaže da su postavke vaše. Ponovno kliknite scenu da vrati njezine vrijednosti.
- Scena ne dira motor, način, veličinu, materijale, kameru ni svjetiljke.

:::note
Predlošci daju iste vrijednosti u ModelCraftu i BimCraftu. Kako će gotova slika izgledati ovisi o vašem modelu i grafičkoj kartici.
:::

## Postavke

| Postavka | Što radi |
|---|---|
| {{ui:Veličina}} | Veličina prikaza, dvostruka veličina prikaza, Full HD, 4K ili kvadrat. Fiksne veličine čuvaju kameru prikaza i prikazuju više ili manje sa strana |
| {{ui:Način}} | {{ui:Brzo}}, ili {{ui:Visoka kvaliteta (path tracing)}} (dolje) sa svojim {{ui:Vremensko ograničenje}} |
| {{ui:Kvaliteta}} | Koliko prolaza (ili, u visokoj kvaliteti, uzoraka) se uprosječuje: {{ui:Radna}} 16, {{ui:Dobra}} 64, {{ui:Najbolja}} 256. Više prolaza daje glađe sjene i bridove, ali traje dulje |
| {{ui:Nebeska}} | {{ui:Vedro nebo}}, {{ui:Oblačno}} (meka svjetlost, slabe sjene), {{ui:Sumrak}} (nisko, toplo svjetlo) ili {{ui:Bijeli studio}} (obična bijela pozadina) |
| {{ui:Sunce}} | Sunce dolazi iz datuma, vremena i mjesta u {{ui:Stil}} › sunce. Označite {{ui:Koristi drugi datum i vrijeme za ovu sliku}} da isprobate drugo vrijeme bez mijenjanja stila modela |
| {{ui:Svjetlina}} | Svjetlije ili tamnije, u koracima (blendama) |
| {{ui:Tlo ispod modela}} | Tlo koje prima sjene i stapa se s horizontom. Isključite ga za model koji lebdi |
| {{ui:Crtaj bridove}} | Tanko crta bridove modela preko slike, za nacrtani izgled |

Kad je sunce ispod horizonta u odabranom vremenu, nastupa noć: nebo potamni, a [svjetiljke](topic:lights) osvjetljavaju model. Dijalog to kaže.

Postavke se spremaju u datoteku `.modelcraft`, pa sljedeća slika istog modela kreće tamo gdje ste stali.

## Da boje izgledaju kao staklo ili metal

Pod {{ui:Materijali}} svaka boja na ekranu ima izgled: {{ui:Mat}}, {{ui:Satenski}}, {{ui:Sjajan}}, {{ui:Metal}}, {{ui:Polirani metal}}, {{ui:Staklo}} ili {{ui:Matirano staklo}}. {{ui:Neobojene plohe}} su plohe bez vlastite boje.

Da prozori izgledaju kao staklo, [obojite](topic:paint) okna jednom bojom, zatim postavite tu boju na {{ui:Staklo}}. Staklo propušta nebo i ono što je iza, obojeno svojom bojom, te odbija nebo.

:::note
U načinu {{ui:Brzo}} staklo i metal odbijaju nebo, a ne ostatak modela, a svjetlo se ne lomi kroz staklo. Način {{ui:Visoka kvaliteta (path tracing)}} dolje radi oboje.
:::

## Visoka kvaliteta

Odaberite {{ui:Način}} › {{ui:Visoka kvaliteta (path tracing)}} za sliku koja prati svjetlo onako kako ga kamera vidi:

- svjetlo se odbija između površina, pa je prostorija osvijetljena kroz prozor ili svjetiljkom sa svih strana, a boje se prelijevaju na susjedne;
- staklo je pravo staklo: svjetlo se lomi kroz njega i ono odbija model;
- metal i polirane površine odbijaju ostatak modela;
- svjetlosne ploče svijetle kao ploče, s mekim sjenama.

Mnogo je sporija od {{ui:Brzo}}: svaki prolaz ponovno prati svjetlo za svaki piksel. Slika na početku ima zrnatost i čisti se kako se uzorci zbrajaju, pa počnite malo ({{ui:Veličina prikaza}}, {{ui:Radna}}) i odaberite {{ui:Vremensko ograničenje}}: kad istekne, zadržava se slika do tada. {{ui:Zaustavi}} je također zadržava. Prvi prolaz čeka dok preglednik priprema path tracer.

Tamo gdje preglednik ima WebGPU, path tracer je dio CadCrafta i radi na grafičkoj kartici; redak ispod slike kaže {{ui:Path tracing na grafičkoj kartici (WebGPU)}}. Nakon {{ui:Zaustavi}} ili isteka vremenskog ograničenja, {{ui:Nastavi}} nastavlja s istom slikom dok ne dobije sve uzorke; promjena postavke ili ponovni pritisak na {{ui:Renderiraj}} počinje ispočetka. Bez WebGPU-a slika se računa path tracingom s WebGL-om (redak to kaže), a {{ui:Nastavi}} se ne nudi.

:::linux
Firefox i većina Chrome postavki na Linuxu još nemaju WebGPU, pa visoka kvaliteta tamo koristi WebGL.
:::

U ovom načinu bridovi se ne crtaju, teksture iz knjižnice pokazuju boju i hrapavost, ali ne i reljef (a [materijal izrađen čvorovima](topic:shading#in-high-quality-pictures) pokazuje svoje normale i reljef), a rez presjeka radi se na modelu prije početka slike.

{{ui:Ukloni šum (briše zrnatost zaostalu nakon uzoraka)}} uključeno je prema zadanim postavkama: kad je slika gotova ili zaustavljena, zrnatost koja ostane uklanja neuronska mreža napravljena za to (objavljena mreža Intel Open Image Denoise, pokrenuta na vašem računalu: na grafičkoj kartici, inače na procesoru). Slika s malo uzoraka izlazi čista; {{ui:Prikaz}} › {{ui:Slika prije uklanjanja šuma}} prikazuje je onakvu kakva je renderirana.

## Renderiranje u prikazu

Radni prostor {{ui:Renderiraj}} pokreće path tracer u samom prikazu: orbitirate, uređujete model ili mijenjate svjetlo i kreće ponovno odmah. {{ui:Područje}}: povucite pravokutnik i samo on se renderira; {{ui:Cijeli prikaz}} vraća natrag. {{ui:Fokus}}: kliknite što treba biti oštro, a dubinska oštrina se fokusira tamo. {{ui:Detalj}} određuje koliko piksela prikaza se renderira (manje je brže). {{ui:Pauziraj}} zaustavlja i nastavlja. Treba mu WebGPU: bez njega radni prostor to kaže, a {{ui:Izvezi}} › {{ui:Renderiraj sliku…}} i dalje radi.

## Nebo i profili svjetla na grafičkoj kartici

S WebGPU-om visoka kvaliteta ima još dva neba:

- {{ui:Fizikalno nebo}} računa dnevno svjetlo iz visine sunca: duboko plavo iznad glave, blijedi pojas na horizontu i sunce koje postaje toplije i prigušenije kako je nisko. {{ui:Zamagljenost}} ide od vrlo vedrog dana (2) do maglovitog (10).
- {{ui:Slika neba (HDRI)}} osvjetljava model panoramskom slikom stvarnog mjesta. {{ui:Odaberi sliku…}} uzima datoteku `.hdr` ili `.exr` u equirectangular obliku; {{ui:Zakreni}} je okreće oko modela, a {{ui:Svjetlina slike}} ju čini svjetlijom ili tamnijom. Slika nosi vlastito sunce, pa se sunce modela ne dodaje. Čuva se samo dok je stranica otvorena: nakon ponovnog otvaranja odaberite je ponovno.

Svaka svjetiljka na popisu {{ui:Svjetiljke}} može uzeti proizvođačev profil svjetla: {{ui:IES profil…}} čita datoteku IES (LM-63), a svjetiljka tada baca svjetlo onako kako to čini ta armatura (uska stropna svjetiljka, svjetiljka za osvjetljavanje zida). Svaka svjetiljka s tim imenom koristi ga, a svjetiljka zadržava vlastitu svjetlinu. Kliknite naziv profila da prestanete ga koristiti.

Prozori od bistrog stakla pomažu svjetlu neba da nađe put u prostoriju, pa se slike interijera pod nebom brže razbistre.

Način {{ui:Brzo}} i path tracer s WebGL-om prikazuju {{ui:Fizikalno nebo}} i {{ui:Slika neba (HDRI)}} kao vedro nebo i zanemaruju profile svjetla.

## Kamera

{{ui:Kamera}} postavlja sliku kao fotografiju:

- {{ui:Ekspozicija}}: zadržite {{ui:Klizač svjetline}} ili odaberite {{ui:Postavke kamere}} i postavite {{ui:Otvor blende (f-broj)}}, {{ui:Brzina zatvarača}} i {{ui:ISO}} kao na kameri; EV pored njih je uobičajena vrijednost ekspozicije. f/16 pri 1/100 s i ISO 100 odgovara sunčanom danu; tamnija scena traži širi otvor blende, sporiji zatvarač ili veći ISO. Ovo radi u svakom načinu.
- {{ui:Dubinska oštrina}} zamućuje ono što je bliže ili dalje od {{ui:Udaljenost fokusa (m)}}, kao što bi to učinio objektiv s tim f-brojem (ostavite prazno da se fokusira na ono što je u sredini prikaza); {{ui:Oblik otvora blende}} daje istaknutim dijelovima izvan fokusa okrugli ili lamelasti oblik.
- {{ui:Perspektiva s dvije točke nedogleda (okomite linije ostaju okomite)}} izravnava kameru i pomiče sliku, kao što to čini arhitektonski tilt-shift objektiv, pa zidovi ne nagnu kad gledate prema gore ili dolje na zgradu.
- {{ui:Balans bijele}} određuje koja boja svjetla se prikazuje kao bijela: niže (na primjer 3000 K) za toplo svjetlo svjetiljki, više za sjenu i oblačne dane.
- {{ui:Projekcija}}: {{ui:Panorama 360°}} pravi sliku 2:1 svega oko kamere za preglednike panorama; {{ui:Stereo panorama 360°}} slaže panoramu za lijevo i desno oko za VR naočale; {{ui:Kocka karta (6 ploha)}} pravi šest kvadratnih pogleda u mreži 3 × 2. Širina dolazi iz {{ui:Veličina}}.

Projekcija, dubinska oštrina, perspektiva s dvije točke nedogleda i balans bijele trebaju path tracer na grafičkoj kartici (WebGPU), pa se prikazuju samo u {{ui:Visoka kvaliteta}}.

## Dovršavanje slike

{{ui:Slika}} gradira sliku visoke kvalitete kao fotografiju, a svaka kontrola odmah mijenja gotovu sliku, bez ponovnog renderiranja:

- {{ui:Izgled (transformacija prikaza)}}: {{ui:ACES filmski}} (slika kao prije), {{ui:AgX}} (mekše, čuva boju u vrlo jakom svjetlu), {{ui:Filmic}} (blaga filmska krivulja) ili {{ui:Standardno}} (jednostavno, jako svjetlo se izrezuje u bijelo).
- {{ui:Kontrast}} i {{ui:Kompresija svjetlina}} (vraća detalje u vrlo svijetlim dijelovima).
- {{ui:Bloom}} (meki sjaj oko jakog svjetla), {{ui:Odsjaj}} sa svojim {{ui:Zrake odsjaja}} (zvjezdaste zrake od najsvjetlijih točaka) i {{ui:Vinjeta}} (tamniji kutovi).
- {{ui:Tablica boja (.cube)…}} primjenjuje gradaciju boja iz datoteke `.cube`, sa svojom {{ui:Jačina tablice boja}}; kao i slika neba, čuva se samo dok je stranica otvorena.

## Spremanje slike

{{ui:Spremi kao}} pored {{ui:Spremi}} bira datoteku: {{ui:PNG}}, {{ui:JPEG}} ili {{ui:WebP}} za dijeljenje (JPEG i WebP samo tamo gdje ih preglednik može zapisati), a nakon renderiranja visoke kvalitete na grafičkoj kartici i:

- {{ui:PNG, 16 bita}}: gradirana slika s finijim koracima između nijansi, za ispis ili daljnju obradu.
- {{ui:EXR, svaki sloj (32-bitni float)}}: slika kakva je renderirana (linearno svjetlo, bez gradacije), sa svakim elementom renderiranja i grupom svjetla kao vlastitim slojem, za programe za kompoziranje.
- {{ui:Datoteka renderiranja (.ccrender, za kasnije ponovno ocjenjivanje)}}: sve što dijalog treba da ponovno miješa i gradira sliku. {{ui:Otvori datoteku renderiranja…}} je vraća, s njezinim miješanjem i gradacijom, bez renderiranja.

## Miješanje svjetala nakon renderiranja

Uključite {{ui:Miješanje svjetla (promijenite boju i svjetlinu svakog svjetla nakon renderiranja)}} prije nego pritisnete {{ui:Renderiraj}}. Kad je slika gotova (ili zaustavljena), {{ui:Pomiješaj sliku}} navodi njezina svjetla u grupama: nebo, sunce i svjetiljke po imenu (svaka svjetiljka istog imena je jedna grupa). Isključite grupu, dajte joj boju ili je učinite svjetlijom ili tamnijom, i slika se odmah mijenja, bez ponovnog renderiranja. {{ui:Spremi miješanje}} čuva miješanje pod imenom za kasniji odabir; {{ui:Kako je renderirano}} vraća sliku kakva je nastala. {{ui:Spremi}} sprema miješanu sliku.

{{ui:Elementi renderiranja (albedo, normale, dubina, difuzno, spekularno, transmisija, emisija, ID-ovi)}} čuva i dijelove slike. {{ui:Prikaz}} prebacuje prikaz na jedan od njih: boje površina (albedo), normale, dubinu, difuzno, spekularno i propušteno svjetlo (svako izravno i neizravno), što svijetli i nebo, te boju po objektu ili po materijalu za izradu maski.

Oba čuvaju dodatne slojeve na grafičkoj kartici. Pri velikim veličinama grafička kartica možda nema mjesta; dijalog to kaže, a manja veličina radi.

## Red renderiranja

Nakon postavljanja visoke kvalitete, {{ui:Dodaj ovu sliku u red}} pod {{ui:Red renderiranja}} zadržava sliku kako je sada postavljena; u dijalogu za video, {{ui:Dodaj ovu animaciju u red}} radi isto za cijelu animaciju, s path tracingom okvir po okvir. {{ui:Pokreni red}} renderira ih jednu za drugom na ovom računalu, a {{ui:Spremi}} pored svake gotove preuzima je. Zatvaranje stranice čuva red: otvorite isti model i nastavlja se tamo gdje je stao. Red treba WebGPU.

## Magla, dim, šum i kaustike

Ovo se nalazi u {{ui:Magla, dim i šum}} i radi u {{ui:Visoka kvaliteta}} na grafičkoj kartici; ostali motori ih izostavljaju.

- {{ui:Magla i izmaglica}} ispunjava zrak do visine maglicom koju osvjetljavaju sunce, nebo i svjetiljke. {{ui:Koliko daleko se vidi, u metrima}} određuje koliko je gusta (oko 100 m je lagana izmaglica, 20 m gusta magla), {{ui:Visina magle iznad tla, u metrima}} je mjesto gdje završava, a {{ui:Snopovi svjetla}} je koliko se maglica sjaji prema svjetlu. Sunčeva svjetlost napušta maglu pri vrhu, pa tamo gdje sunce prodire kroz prozor ili između zgrada vidite ga kao snopove svjetla.
- {{ui:Dim ili oblak}} dodaje jedan volumen dima ili oblaka osvijetljen kao magla. {{ui:Vrsta}} je {{ui:Oblak}}, {{ui:Stup dima}} ili {{ui:Iz datoteke volumena (.ccvol)}}, CadCraftov vlastiti format mreže podataka. {{ui:Detalj}} i {{ui:Varijacija}} mijenjaju napravljeni oblak ili stup, {{ui:Veličina njegove najdulje stranice, u metrima (0 = veličina modela)}}, {{ui:Pomak X (m)}}, {{ui:Pomak Y (m)}}, {{ui:Pomak Z (m)}} i {{ui:Zakreni}} postavljaju ga (počinje u sredini modela), {{ui:Debljina}} ga čini gušćim, {{ui:Sjaj prema naprijed}} ga čini svjetlijim prema svjetlu, a {{ui:Boja}} ga boji. Datoteka volumena čuva se samo dok je stranica otvorena, kao i slika neba.
- {{ui:Prestani rano gdje je slika čista (prilagodljivo uzorkovanje)}} ne daje više uzoraka pikselima koji su se smirili, pa se ostatak slike završava ranije. {{ui:Prihvatljiv šum}} je koliko zrnatosti ostane kad piksel stane. Redak ispod slike kaže koliko je uzoraka piksel dobio u prosjeku.
- {{ui:Kaustike (svjetlo koje lomi staklo ili odbijaju zrcala)}} prati svjetlo iz svjetiljki i sunca, pa svijetla mrlja ispod staklene kugle ili zrcalno svjetlo na zidu izlazi čisto umjesto zrnato. Isključeno je dok su uključeni magla, dim, Miješanje svjetala nakon renderiranja ili elementi renderiranja, a napravljeno je za slike, ne za 360° slike, animacije ili radni prostor {{ui:Renderiraj}}.

## Koliko traje

Slika se izrađuje na vašem računalu, na njegovoj grafičkoj kartici; ništa se ne šalje u oblak. Koliko traje ovisi o toj kartici. Vrijeme raste s prolazima i pikselima: {{ui:Najbolja}} ima 16 puta više prolaza od {{ui:Radna}}, a slika 4K ima oko četiri puta više piksela od Full HD-a. Računalo bez grafičke kartice i dalje renderira, ali sporije.

:::note
Ako dijalog kaže da preglednik ne može renderirati slike, preglednik nema WebGL 2. Ažurirajte ga ili uključite hardversko ubrzanje u njegovim postavkama.
:::
