---
title: Rješavanje problema
summary: Simptomi, uzroci i rješenja, od prazne 3D slike do uvoza pogrešne veličine, s porukama koje ModelCraft prikazuje.
keywords: problem, smetnja, pogreška, ne radi, prazno, webgl, grafika, sporo, poruka, uvoz nije uspio, pogrešna veličina, ne mogu odabrati, dodir, tipke ne rade, izgubljen rad
from: 6e7394be
---

## 3D prikaz je prazan

**Simptom:** sredina ekrana ostaje prazna ili prikazuje samo boju pozadine, a klik na alate ne radi ništa.

**Uzrok:** ModelCraft crta pomoću WebGL 2, 3D grafike preglednika. Nedostaje kad je preglednik star, kad je isključeno hardversko ubrzanje ili kad je upravljački program grafike blokiran.

**Rješenje:**

:::chromium
1. Otvorite postavke preglednika i potražite „ubrzanje grafike“.
2. Uključite „Koristi ubrzanje grafike kada je dostupno“ i ponovno pokrenite preglednik.
3. Ako je već uključeno, u adresnu traku upišite `chrome://gpu` (`edge://gpu` u Edgeu) i potražite „WebGL2“ na popisu. Ako piše da je onemogućeno, ažurirajte upravljački program grafike.
:::

:::firefox
1. Otvorite **Postavke**, zatim **Općenito**, i pomaknite se do „Performanse“.
2. Odznačite „Koristi preporučene postavke performansi“, zatim označite „Koristi hardversko ubrzanje kada je dostupno“. Ponovno pokrenite Firefox.
3. Ako i dalje ne radi, u adresnu traku upišite `about:support` i pogledajte odjeljak „Grafika“ za WebGL 2.
:::

:::safari
Ažurirajte macOS i Safari. Novije verzije Safarija uvijek imaju uključen WebGL 2. Ako ste mijenjali eksperimentalne značajke pod **Safari**, zatim **Postavke**, zatim **Napredno** (ili **Feature Flags**), vratite ih na zadano.
:::

Na poslovnom računalu, udaljenoj radnoj površini ili virtualnom stroju 3D grafika može biti blokirana pravilima. Isprobajte drugo računalo. Vidi [Preglednici i računala](common:browsers).

## Tipke ne rade ili se upisuju u okvir

**Uzrok:** fokus tipkovnice je u polju ploče: popis {{ui:Plohe}} u {{ui:Stil}}, postavka sunca, polje {{ui:Naziv}} u {{ui:Informacije o entitetu}} ili birač jedinica. Slova i strelice tada idu u to polje.

**Rješenje:** kliknite u 3D prikaz, zatim ponovno pritisnite tipku. Tipke također ne rade dok je otvoren dijaloški okvir.

## Upisivanje broja ne radi ništa

- **Još nema smjera.** Upisana duljina ide u smjeru u kojem pokazivač pokazuje od prvog klika. Pomaknite pokazivač malo u željenom smjeru, pa upišite.
- **Pogrešan trenutak.** Većina alata prihvaća upisanu vrijednost tek nakon prvog klika: prvo kliknite prvi kut, plohu ili točku od koje se pomiče. {{ui:Kružnica}} i {{ui:Poligon}} prihvaćaju broj stranica prije prvog klika.
- **„Upišite duljinu poput 3m, 10'6“ ili 4m,3m.** ModelCraft to nije mogao pročitati. Provjerite ima li decimalni zarez (`2,5`): upotrijebite točku.

## Oblik počinje na pogrešnom mjestu na zaslonu osjetljivom na dodir

**Simptom:** prstom, prvi pravokutnik je u redu, ali sljedeći pravokutnik, kružnica ili linija počinje tamo gdje je završio prethodni dodir, umjesto gdje ste dodirnuli.

**Uzrok:** greška u ovoj verziji: na zaslonu osjetljivom na dodir alat pamti zadnju točku hvatanja iz prethodne geste.

**Rješenje:** prije svakog novog oblika ponovno dodirnite gumb alata na alatnoj traci. Time alat kreće ispočetka, a prva točka pada tamo gdje dodirnete.

## Uređivanje jedne grupe promijenilo je drugu

**Simptom:** kopirali ste grupu s {{ui:Pomakni}} i {{key:Ctrl}}, otvorili jednu kopiju i uredili je, a druga kopija se također promijenila. {{ui:Struktura}} prikazuje obje s istim nazivom.

**Uzrok:** u ovoj verziji kopiranje grupe stvara drugi položaj iste grupe, kao i kod komponente. Gumb {{ui:Učini jedinstvenom}} nudi se samo za komponente.

**Rješenje:** odaberite kopiju koju želite promijeniti, kliknite {{ui:Napravi komponentu}} u {{ui:Informacije o entitetu}}, zatim {{ui:Učini jedinstvenom}}. Ta kopija sada ima vlastiti sadržaj. Ili je {{ui:Rastavi}}.

## Potisni/povuci ne radi što sam očekivao

- **„Potisni/povuci radi na plohi. Kliknite plohu.“** Kliknuli ste brid ili prazan prostor. Zadržite pokazivač dok se ploha ne istakne, zatim kliknite.
- **Ploha je unutar grupe.** Prvo dvaput kliknite grupu da je otvorite.
- **Prozor nije probio zid.** Pravokutnik mora biti nacrtan na plohi zida, a ne ispred nje, i zid mora imati stražnju plohu. Vidi [Probijanje otvora kroz zid](topic:openings#if-it-did-not-cut-through).
- **Dvije kutije se preklapaju bez spajanja.** Puna tijela gurnuta jedno u drugo u ovoj verziji se ne režu niti spajaju.

## Linija ili oblik nije stvorio plohu

Ploha se ispunjava tek kad bridovi zatvore ravnu petlju. Provjerite je li se zadnja točka uhvatila za prvu („Krajnja točka“) i leže li svi bridovi u jednoj ravnini. Petlja koja je malo izvan ravnine ostaje kao linije. Ponovno nacrtajte jedan od njezinih bridova, hvatajući se za kutove.

## Ne mogu odabrati ili izbrisati plohu

- S {{ui:Odaberi}} klik blizu brida odabire brid. Kliknite bliže sredini plohe.
- {{ui:Gumica}} ne odabire plohe. Odaberite plohu i pritisnite {{key:Delete}}, ili izbrišite jedan od njezinih bridova.
- Ako pripada grupi ili komponenti, klik odabire cijelu stvar. Dvaput kliknite da je otvorite.

## „Prvo odaberite nešto za pomicanje ili kliknite na to.“

{{ui:Pomakni}}, {{ui:Zakreni}} i {{ui:Skaliraj}} trebaju nešto za rad: prvo to odaberite ili započnite alat klikom na samu stvar (ne na prazan prostor ili pomoćnu liniju).

## „Prvo odaberite geometriju (povucite prozor ili trostruko kliknite da odaberete sve povezano).“

{{key:G}} i {{key:Shift+G}} trebaju odabir. Pomoćne linije ne mogu se grupirati.

## Tipke sa strelicama okreću umjesto da zaključavaju

Zaključavanja rade tek nakon prvog klika alata za crtanje ili uređivanje. {{ui:Potisni/povuci}} nema zaključavanja, a u {{ui:Zakreni}} ona ne mijenjaju okretanje. Inače tipke sa strelicama okreću pogled.

## Esc na cijelom zaslonu

Na cijelom zaslonu preglednik prvi {{key:Esc}} može upotrijebiti za izlazak iz cijelog zaslona. Ponovno pritisnite {{key:Esc}} da otkažete alat.

## Nema srednje tipke

Pritisnite {{key:O}} za {{ui:Orbit}} i povucite, ili upotrijebite tipke sa strelicama. Vidi [Orbit, pan i zumiranje](topic:orbit-pan-zoom#without-a-middle-button).

## Uvoz

| Poruka | Što učiniti |
|---|---|
| „ModelCraft uvozi SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG i DXF. … nije nijedan od njih.“ | Izvezite model iz drugog programa u jednom od ovih formata |
| „Ova datoteka je veća od 300 MB.“ | Pojednostavite ili podijelite model u drugom programu |
| „…prevelik za modeliranje ovdje (više od 2 milijuna vrhova).“ | Isto |
| „Ovoj .gltf datoteci treba „…“…“ | Spustite `.gltf` zajedno s njegovim `.bin` i datotekama tekstura ili otvorite verziju `.glb` |
| „Ovoj glTF datoteci treba proširenje …, koje ModelCraft još ne čita.“ | Ponovno izvezite iz drugog programa bez tog proširenja (na primjer, KTX2 teksture) |
| OBJ se uvozi bez boja ili tekstura | Spustite `.obj` zajedno s njegovom `.mtl` datotekom i slikama |
| „Ova Alembic datoteka koristi stari HDF5 raspored…“ | Ponovno je spremite u drugom programu kao Ogawa Alembic datoteku |
| FBX se uvozi bez tekstura | Spustite `.fbx` zajedno sa slikama tekstura ili ugradite medije pri izvozu |
| „Ova FBX datoteka je verzije …, koju ModelCraft ne čita“ | Ponovno izvezite kao FBX 2011 ili noviji |
| STL ili PLY se uvozi 1,000 puta preveliko ili premalo | STL se čita kao milimetri, a PLY kao metri: skalirajte ga (vidi [Zakretanje i skaliranje](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| „Ovo nije Collada (.dae) datoteka…“ ili „…nije ispravan XML…“ | Datoteka je oštećena ili nije Collada. Ponovno je izvezite |
| „Ova Collada datoteka nema geometriju koju ModelCraft može uvesti.“ | Sadrži samo kamere, svjetla ili reference na druge datoteke |
| „Ovo je binarni DXF. Spremite ga kao ASCII DXF i pokušajte ponovno.“ | Ponovno ga spremite iz CAD programa kao ASCII |
| „Ovo nije DWG crtež…“ | Datoteka nije DWG ili je oštećena |
| „Crtež nije moguće pročitati (…). Možda je oštećen ili spremljen u DWG verziji koju čitač ne podržava…“ | Zagrade navode razlog. Spremite ga kao DXF ili kao DWG od AutoCADa 2000 do 2018 iz CAD programa |
| „Ovaj crtež seže više od 10,000 km od svog ishodišta…“ | Pomaknite crtež blizu 0,0 u CAD programu |

### Uvoz je pogrešne veličine ili leži na boku

- **OBJ:** OBJ nema jedinicu; ModelCraft čita metre. Model u milimetrima uvozi se 1000 puta prevelik: [skalirajte](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) ga s `0.001`; model u inčima s `0.0254`.
- **OBJ na boku:** ModelCraft očekuje OBJ datoteke s Y prema gore. Datoteka zapisana s Z prema gore uvozi se ležeći. Zakrenite je za 90° oko crvene osi: kliknite središte {{ui:Zakreni}} na plohi koja gleda duž crvene osi, ili otvorite datoteku u njezinom programu i izvezite s Y prema gore.
- **DWG ili DXF:** u dijaloškom okviru „Jedinice crteža“ odabrali ste pogrešnu jedinicu. Poništite i ponovno uvezite.

## Otvaranje datoteka

| Poruka | Što učiniti |
|---|---|
| „Ova datoteka nije model ModelCraft (nije JSON).“ | Upotrijebite {{ui:Uvezi}} za druge formate |
| „Ovo nije datoteka ModelCraft koju možemo otvoriti: …“ | Datoteka je oštećena ili je ručno promijenjena |
| „Ovaj model spremio je noviji ModelCraft…“ | Otvorite ga u novijoj verziji |
| „Ova datoteka je veća od 200 MB.“ | Model je preveliki za otvaranje ovdje |

## Izgubio sam rad

ModelCraft sam ne sprema u datoteku. Kad zatvorite ili ponovno učitate karticu s nespremljenim promjenama, preglednik prvo pita („Napustiti stranicu?“ ili „Ponovno učitati stranicu?“); odaberite ostanak i spremanje. {{ui:Novo}} i {{ui:Otvori}} također pitaju („Nespremljene promjene“). Ako su preglednik ili računalo pali, ponovno otvorite ModelCraft u istom pregledniku: ponudit će vam nespremljeni rad („Oporaviti vaš rad?“; vidi [Oporavak vašeg rada](common:recover)). Često spremajte pomoću {{key:Mod+S}}.

## Mapa za preuzimanja puni se kopijama

Svako spremanje je novo preuzimanje, nazvano `Untitled (1).modelcraft`, `Untitled (2).modelcraft` i tako dalje. Izbrišite stare ili postavite preglednik da pita gdje spremiti svaku datoteku, pa sami prepišite staru datoteku. Vidi [Otvaranje, spremanje, uvoz i izvoz](topic:files#save-a-model).

## Sporo je

- Svaki korak poništavanja čuva kopiju modela ([mreža](topic:meshes) čuva samo ono što se promijenilo), pa se na vrlo velikom uvozu geometrije potisni/povuci svaka promjena duže izvodi. Rastavite ili izbrišite ono što vam ne treba, spremite i ponovno otvorite: ponovno otvaranje također briše povijest poništavanja.
- Sjene od sunca najviše opterećuju. Dok modelirate, odznačite {{ui:Sjene od sunca}}.

## Nema sjena

{{ui:Sjene od sunca}} su isključene, sunce je u vremenu koje ste odabrali ispod obzorja („Sunce je u to vrijeme ispod obzorja.“), ili je stil {{ui:Žičani model}}, koji ne crta sjene.

## „Ovaj preglednik nije dopustio cijeli zaslon.“

Neki preglednici i neki ugrađeni prikazi ne dopuštaju cijeli zaslon. Umjesto toga upotrijebite cijeli zaslon samog preglednika ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft se ne otvara bez veze

ModelCraft se otvara offline tek nakon što je spremljen za rad offline u tom pregledniku: gumb u traci aplikacije mora pisati {{ui:Spremno za offline}}. Otvorite ga dok ste na mreži i kliknite {{ui:Spremi za offline}}. Ako gumb piše {{ui:Spremanje nije uspjelo}}, ponovno kliknite na boljoj vezi; {{ui:Offline nije dostupan}} znači da ovaj prozor (privatni prozor ili upravljano računalo) ne može zadržati kopiju. Vidi [Rad offline](common:offline).
