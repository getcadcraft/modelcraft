---
title: Rješavanje problema
summary: Simptomi, uzroci i rješenja, od praznog 3D prikaza do uvoza pogrešne veličine, uz poruke koje ModelCraft prikazuje.
keywords: problem, teškoća, greška, ne radi, prazno, webgl, grafika, sporo, poruka, uvoz nije uspio, pogrešna veličina, ne može se odabrati, dodir, tipke ne rade, izgubljen rad
from: 6e7394be
---

## 3D prikaz je prazan

**Simptom:** sredina ekrana ostaje prazna ili prikazuje samo boju pozadine, a klik na alate ne radi ništa.

**Uzrok:** ModelCraft crta pomoću WebGL 2, 3D grafike preglednika. Ona nedostaje kad je preglednik star, kad je hardversko ubrzanje isključeno ili kad je upravljački program grafike blokiran.

**Rješenje:**

:::chromium
1. Otvori postavke preglednika i pretraži „graphics acceleration“.
2. Uključi „Use graphics acceleration when available“ i ponovo pokreni preglednik.
3. Ako je već uključeno, upiši `chrome://gpu` u adresnu traku (`edge://gpu` u Edgeu) i potraži „WebGL2“ na listi. Ako piše „disabled“, ažuriraj upravljački program grafike.
:::

:::firefox
1. Otvori **Postavke**, pa **General**, i pomakni se do „Performance“.
2. Odznači „Use recommended performance settings“, pa označi „Use hardware acceleration when available“. Ponovo pokreni Firefox.
3. Ako i dalje ne radi, upiši `about:support` u adresnu traku i pogledaj odjeljak „Graphics“ za WebGL 2.
:::

:::safari
Ažuriraj macOS i Safari. Novije verzije Safarija uvijek imaju WebGL 2 uključen. Ako si mijenjao eksperimentalne funkcije pod **Safari**, pa **Postavke**, pa **Advanced** (ili **Feature Flags**), vrati ih na početne vrijednosti.
:::

Na poslovnom računaru, udaljenoj radnoj površini ili virtuelnoj mašini, 3D grafika može biti blokirana pravilima. Probaj drugi računar. Vidi [Preglednici i računari](common:browsers).

## Tipke ne rade ili se upisuju u polje

**Uzrok:** fokus tastature je u polju panela: lista {{ui:Površine}} u {{ui:Stil}}, postavka sunca, polje {{ui:Naziv}} u {{ui:Podaci o entitetu}}, ili birač jedinica. Slova i strelice tada idu u to polje.

**Rješenje:** klikni u 3D prikaz, pa ponovo pritisni tipku. Tipke također ne rade dok je otvoren dijalog.

## Upisivanje broja ne radi ništa

- **Još nema smjera.** Upisana dužina ide u smjeru u kojem pokazivač pokazuje od prvog klika. Pomjeri pokazivač malo u željenom smjeru, pa upiši.
- **Pogrešan trenutak.** Većina alata prihvata upisanu vrijednost tek poslije prvog klika: klikni prvi ugao, površinu ili tačku od koje se pomjera. {{ui:Krug}} i {{ui:Poligon}} prihvataju broj stranica prije prvog klika.
- **„Upiši dužinu, npr. 3m, 10'6" ili 4m,3m."** ModelCraft to nije mogao pročitati. Provjeri decimalni zarez (`2,5`): koristi tačku.

## Oblik počinje na pogrešnom mjestu na ekranu osjetljivom na dodir

**Simptom:** prstom, prvi pravougaonik je dobro, ali sljedeći pravougaonik, krug ili linija počinje tamo gdje je završio prethodni dodir, umjesto gdje si dodirnuo.

**Uzrok:** greška u ovoj verziji: na ekranu osjetljivom na dodir alat pamti posljednju tačku hvatanja iz prethodnog pokreta.

**Rješenje:** dodirni dugme alata na traci s alatima ponovo prije svakog novog oblika. Tako se alat pokreće iznova, a prva tačka pada tamo gdje dodirneš.

## Uređivanje jedne grupe promijenilo je drugu

**Simptom:** kopirao si grupu s {{ui:Pomjeri}} i {{key:Ctrl}}, otvorio jednu kopiju i uredio je, a druga kopija se također promijenila. {{ui:Pregled}} prikazuje obje s istim imenom.

**Uzrok:** u ovoj verziji, kopiranje grupe pravi drugi smještaj iste grupe, kao kod komponente. Dugme {{ui:Učini jedinstvenom}} nudi se samo za komponente.

**Rješenje:** odaberi kopiju koju želiš promijeniti, klikni {{ui:Pravljenje komponente}} u {{ui:Podaci o entitetu}}, pa {{ui:Učini jedinstvenom}}. Ta kopija sada ima svoj sadržaj. Ili je {{ui:Rastavi}}.

## Gurni/povuci ne radi ono što sam očekivao

- **„Gurni/povuci radi na površini. Klikni površinu.“** Kliknuo si ivicu ili prazan prostor. Zadrži pokazivač dok se površina ne istakne, pa klikni.
- **Površina je unutar grupe.** Prvo dvaput klikni grupu da je otvoriš.
- **Prozor nije probio zid.** Pravougaonik mora biti nacrtan na površini zida, a ne ispred nje, i zid mora imati zadnju površinu. Vidi [Probij otvor kroz zid](topic:openings#if-it-did-not-cut-through).
- **Dvije kutije se preklapaju bez spajanja.** Tijela gurnuta jedno u drugo se u ovoj verziji ne sijeku niti spajaju.

## Linija ili oblik nije napravio površinu

Površina se popuni samo kad ivice zatvore ravnu petlju. Provjeri da se posljednja tačka uhvatila za prvu („Endpoint“) i da sve ivice leže u jednoj ravni. Petlja koja je malo izvan ravni ostaje kao linije. Nacrtaj jednu njenu ivicu ponovo, hvatajući se za uglove.

## Ne mogu odabrati ili izbrisati površinu

- Sa {{ui:Odaberi}}, klik blizu ivice uzima ivicu. Klikni bliže sredini površine.
- {{ui:Gumica}} ne bira površine. Odaberi površinu i pritisni {{key:Delete}}, ili izbriši jednu od njenih ivica.
- Ako pripada grupi ili komponenti, klik odabere cijelu stvar. Dvaput klikni da je otvoriš.

## „Prvo odaberi nešto za pomjeranje, ili klikni na to.“

{{ui:Pomjeri}}, {{ui:Rotiraj}} i {{ui:Skaliraj}} trebaju nešto na čemu rade: prvo odaberi to, ili pokreni alat klikom na samu stvar (ne na prazan prostor ili vodilicu).

## „Prvo odaberi neku geometriju (prevuci okvir ili trostruki klik za odabir svega povezanog).“

{{key:G}} i {{key:Shift+G}} trebaju odabir. Vodilice se ne mogu grupisati.

## Strelice kruže umjesto zaključavanja

Zaključavanja rade samo poslije prvog klika u alatu za crtanje ili uređivanje. {{ui:Gurni/povuci}} nema zaključavanja, a u {{ui:Rotiraj}} ona ne mijenjaju okret. Inače strelice kruže pogled.

## Esc u cijelom ekranu

U cijelom ekranu, preglednik može prvi {{key:Esc}} iskoristiti da izađe iz cijelog ekrana. Pritisni {{key:Esc}} ponovo da otkaziš alat.

## Nema srednje tipke

Pritisni {{key:O}} za {{ui:Orbita}} i prevuci, ili koristi strelice. Vidi [Orbita, pomjeranje i zumiranje](topic:orbit-pan-zoom#without-a-middle-button).

## Uvoz

| Poruka | Šta uraditi |
|---|---|
| „ModelCraft uvozi SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG i DXF. … nije nijedan od ovih.“ | Izvezi model iz drugog programa u jednom od ovih formata |
| „Ova datoteka je veća od 300 MB.“ | Pojednostavi ili podijeli model u drugom programu |
| „…prevelik za modeliranje ovdje (preko 2 miliona vrhova).“ | Isto |
| „Ova .gltf datoteka treba ‚…‘…“ | Prevuci `.gltf` zajedno s njegovim `.bin` i datotekama tekstura, ili otvori `.glb` verziju |
| „Ova glTF datoteka treba … ekstenziju, koju ModelCraft još ne čita.“ | Izvezi ponovo iz drugog programa bez te ekstenzije (na primjer KTX2 teksture) |
| OBJ se uveze bez boja ili tekstura | Prevuci `.obj` zajedno sa `.mtl` i slikama |
| „Ova Alembic datoteka koristi stari HDF5 raspored…“ | Spasi je ponovo iz drugog programa kao Ogawa Alembic datoteku |
| FBX se uveze bez tekstura | Prevuci `.fbx` zajedno sa slikama tekstura, ili ugradi medije pri izvozu |
| „Ova FBX datoteka je verzija …, koju ModelCraft ne čita“ | Izvezi ponovo kao FBX 2011 ili noviji |
| STL ili PLY se uveze 1,000 puta prevelik ili premali | STL se čita kao milimetri, a PLY kao metri: skaliraj ga (vidi [Rotiraj i skaliraj](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| „Ovo nije Collada (.dae) datoteka…“ ili „…nije ispravan XML…“ | Datoteka je oštećena ili nije Collada. Izvezi je ponovo |
| „Ova Collada datoteka nema geometriju koju ModelCraft može uvesti.“ | Sadrži samo kamere, svjetla ili reference na druge datoteke |
| „Ovo je binarni DXF. Spasi ga kao ASCII DXF i pokušaj ponovo.“ | Spasi ga ponovo iz CAD programa kao ASCII |
| „Ovo nije DWG crtež…“ | Datoteka nije DWG, ili je oštećena |
| „Crtež nije mogao biti pročitan (…). Možda je oštećen ili spašen u DWG verziji koju čitač ne podržava…“ | Zagrade daju razlog. Spasi ga kao DXF, ili kao DWG iz AutoCAD 2000 do 2018, iz CAD programa |
| „Crtež seže više od 10,000 km od svog ishodišta…“ | Pomjeri crtež blizu 0,0 u CAD programu |

### Uvoz je pogrešne veličine ili leži na boku

- **OBJ:** OBJ nema jedinicu; ModelCraft čita metre. Model u milimetrima se uveze 1000 puta prevelik: [skaliraj](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) ga sa `0.001`; model u inčima sa `0.0254`.
- **OBJ na boku:** ModelCraft očekuje OBJ datoteke s Y prema gore. Datoteka napisana s Z prema gore uveze se položena. Rotiraj je za 90° oko crvene ose: klikni centar {{ui:Rotiraj}} na površini koja gleda duž crvene, ili otvori datoteku u njenom programu i izvezi s Y prema gore.
- **DWG ili DXF:** u dijalogu „Jedinice crteža“ izabrao si pogrešnu jedinicu. Poništi i uvezi ponovo.

## Otvaranje datoteka

| Poruka | Šta uraditi |
|---|---|
| „Ova datoteka nije ModelCraft model (nije JSON).“ | Za druge formate koristi {{ui:Uvezi}} |
| „Ovo nije ModelCraft datoteka koju možemo otvoriti: …“ | Datoteka je oštećena ili je ručno izmijenjena |
| „Ovaj model je spašen novijim ModelCraftom…“ | Otvori ga u novijoj verziji |
| „Ova datoteka je veća od 200 MB.“ | Model je previše velik za otvaranje ovdje |

## Izgubio sam rad

ModelCraft sam od sebe ne sprema u datoteku. Kad zatvoriš ili ponovo učitaš karticu s nespašenim promjenama, preglednik prvo pita („Leave site?“ ili „Reload site?“); izaberi da ostaneš i spasi. {{ui:Otvori}} i Novo također pitaju („Nespašene promjene“). Ako su preglednik ili računar pali, ponovo otvori ModelCraft u istom pregledniku: ponudiće ti nespašeni rad nazad („Vratiti tvoj rad?“; vidi [Vrati svoj rad](common:recover)). Često spašavaj s {{key:Mod+S}}.

## Mapa za preuzimanja se puni kopijama

Svako spašavanje je novo preuzimanje, nazvano `Untitled (1).modelcraft`, `Untitled (2).modelcraft` i tako dalje. Izbriši stare, ili podesi preglednik da pita gdje da spasi svaku datoteku, pa sam prepiši staru datoteku. Vidi [Otvori, spasi, uvezi i izvezi](topic:files#save-a-model).

## Postaje sporo

- Svaki korak poništavanja čuva kopiju modela ([mreža](topic:meshes) čuva samo ono što se promijenilo), pa na vrlo velikom uvozu geometrije gurni/povuci svaka izmjena traje duže. Rastavi ili izbriši ono što ne trebaš, spasi i ponovo otvori: ponovno otvaranje također briše historiju poništavanja.
- Sunčeve sjene najviše koštaju. Odznači {{ui:Sunčeve sjene}} dok modeliraš.

## Nema sjena

{{ui:Sunčeve sjene}} su isključene, sunce je ispod horizonta u vrijeme koje si izabrao („Sunce je u ovom trenutku ispod horizonta.“), ili je stil {{ui:Žičani model}}, koji ne crta sjene.

## „Ovaj preglednik nije dozvolio cijeli ekran.“

Neki preglednici i ugrađeni prikazi odbijaju cijeli ekran. Umjesto toga koristi cijeli ekran samog preglednika ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft se ne otvara bez veze

ModelCraft se otvara van mreže tek kad je spašen za rad van mreže u tom pregledniku: dugme na traci aplikacije mora pisati {{ui:Spremno za rad van mreže}}. Otvori ga dok si na mreži i klikni {{ui:Spasi za rad van mreže}}. Ako dugme piše {{ui:Nije moguće spasiti}}, klikni ponovo na boljoj vezi; {{ui:Rad van mreže nije dostupan}} znači da ovaj prozor (privatni prozor ili upravljani računar) ne može sačuvati kopiju. Vidi [Rad van mreže](common:offline).
