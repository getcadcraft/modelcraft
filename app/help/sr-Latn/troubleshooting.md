---
title: Rešavanje problema
summary: Simptomi, uzroci i rešenja, od praznog 3D prikaza do uvoza pogrešne veličine, uz poruke koje ModelCraft prikazuje.
keywords: problem, greška, nije uspelo, ne radi, prazno, webgl, grafika, sporo, poruka, uvoz nije uspeo, pogrešna veličina, ne može da se izabere, dodir, tasteri ne rade, izgubljen rad
from: 6e7394be
---

## 3D prikaz je prazan

**Simptom:** sredina ekrana ostaje prazna ili prikazuje samo boju pozadine, a klikovi na alate ne rade ništa.

**Uzrok:** ModelCraft crta pomoću WebGL 2, 3D grafike pregledača. Ona nedostaje kad je pregledač star, kad je hardversko ubrzanje isključeno ili kad je upravljački program grafike blokiran.

**Rešenje:**

:::chromium
1. Otvori podešavanja pregledača i potraži „ubrzanje grafike“.
2. Uključi „Koristi ubrzanje grafike kad je dostupno“ i ponovo pokreni pregledač.
3. Ako je već uključeno, u adresnu traku ukucaj `chrome://gpu` (`edge://gpu` u Edge-u) i potraži „WebGL2“ na spisku. Ako piše da je isključeno, ažuriraj upravljački program grafike.
:::

:::firefox
1. Otvori **Podešavanja**, pa **Opšte**, i skroluj do „Performanse“.
2. Isključi „Koristi preporučena podešavanja performansi“, pa uključi „Koristi hardversko ubrzanje kad je dostupno“. Ponovo pokreni Firefox.
3. Ako i dalje ne uspe, u adresnu traku ukucaj `about:support` i u odeljku „Graphics“ pogledaj WebGL 2.
:::

:::safari
Ažuriraj macOS i Safari. Novije verzije Safarija uvek imaju WebGL 2 uključen. Ako si menjao eksperimentalne funkcije pod **Safari**, pa **Settings**, pa **Advanced** (ili **Feature Flags**), vrati ih na početne vrednosti.
:::

Na radnom računaru, udaljenoj radnoj površi ili virtuelnoj mašini 3D grafika može biti blokirana pravilima. Probaj drugi računar. Vidi [Pregledači i računari](common:browsers).

## Tasteri ne rade ili kucaju u polje

**Uzrok:** fokus tastature je u polju panela: u listi {{ui:Površi}} u {{ui:Stil}}, u podešavanju sunca, u polju {{ui:Naziv}} u {{ui:Podaci o entitetu}}, ili u biraču jedinica. Slova i strelice tada idu u to polje.

**Rešenje:** klikni u 3D prikaz, pa pritisni taster ponovo. Tasteri ne rade ni dok je otvoren dijalog.

## Unos broja ne radi

- **Još nema pravca.** Ukucana dužina ide u pravcu u kom pokazivač ide od prvog klika. Pomeri pokazivač malo u željenom pravcu, pa ukucaj.
- **Pogrešan trenutak.** Većina alata prihvata ukucanu vrednost tek posle prvog klika: klikni prvi ugao, površ ili tačku od koje se pomera. {{ui:Krug}} i {{ui:Poligon}} prihvataju broj stranica pre prvog klika.
- **„Ukucaj dužinu kao što je 3m, 10'6" ili 4m,3m.“** ModelCraft to nije mogao da pročita. Proveri da nisi koristio zarez kao decimalni znak (`2,5`): koristi tačku.

## Oblik počinje na pogrešnom mestu na ekranu osetljivom na dodir

**Simptom:** prstom je prvi pravougaonik dobar, ali sledeći pravougaonik, krug ili linija počinje tamo gde je prethodni dodir završio, a ne tamo gde si dodirnuo.

**Uzrok:** greška u ovoj verziji: na ekranu osetljivom na dodir alat pamti poslednju tačku hvatanja iz prethodnog pokreta.

**Rešenje:** pre svakog novog oblika ponovo dodirni dugme alata na traci alata. To pokreće alat ispočetka, a prva tačka pada tamo gde dodirneš.

## Izmena jedne grupe promenila je drugu

**Simptom:** kopirao si grupu sa {{ui:Premesti}} i {{key:Ctrl}}, otvorio jednu kopiju i izmenio je, a druga kopija se takođe promenila. {{ui:Pregled}} prikazuje obe sa istim imenom.

**Uzrok:** u ovoj verziji kopiranje grupe pravi drugo postavljanje iste grupe, kao kod komponente. Dugme {{ui:Napravi jedinstvenu}} nudi se samo za komponente.

**Rešenje:** izaberi kopiju koju želiš da promeniš, klikni {{ui:Napravi komponentu}} u {{ui:Podaci o entitetu}}, pa {{ui:Napravi jedinstvenu}}. Ta kopija sada ima sopstveni sadržaj. Ili je {{ui:Rastavi}}.

## Guraj/vuci ne radi kao što očekujem

- **„Guraj/vuci radi na površi. Klikni površ.“** Kliknuo si ivicu ili prazan prostor. Zadrži pokazivač dok se površ ne istakne, pa klikni.
- **Površ je unutar grupe.** Prvo dvaput klikni grupu da je otvoriš.
- **Prozor nije prošao kroz zid.** Pravougaonik mora biti nacrtan na površi zida, a ne ispred nje, i zid mora imati zadnju površ. Vidi [Iseci otvor kroz zid](topic:openings#if-it-did-not-cut-through).
- **Dva tela se preklapaju bez spajanja.** Čvrsta tela gurnuta jedno u drugo u ovoj verziji ne seku niti spajaju jedno drugo.

## Linija ili oblik nije napravio površ

Površ se popunjava samo kad ivice zatvore ravnu petlju. Proveri da se poslednja tačka uhvatila za prvu („Krajnja tačka“) i da su sve ivice u jednoj ravni. Petlja koja je malo van ravni ostaje kao linije. Nacrtaj ponovo jednu od njenih ivica, hvatajući se za uglove.

## Ne mogu da izaberem ili obrišem površ

- Alatom {{ui:Izaberi}}, klik blizu ivice bira ivicu. Klikni bliže sredini površi.
- {{ui:Gumica}} ne bira površi. Izaberi površ i pritisni {{key:Delete}}, ili obriši jednu od njenih ivica.
- Ako pripada grupi ili komponenti, klik bira celu stvar. Dvaput klikni da je otvoriš.

## „Prvo izaberi nešto za pomeranje, ili klikni na to.“

{{ui:Premesti}}, {{ui:Rotiraj}} i {{ui:Skaliraj}} trebaju nešto da obrade: izaberi to prvo, ili pokreni alat klikom na samu stvar (ne na prazan prostor ili vodilicu).

## „Prvo izaberi geometriju (prevuci okvir ili trostruko klikni da izabereš sve povezano).“

{{key:G}} i {{key:Shift+G}} trebaju izbor. Vodilice ne mogu da se grupišu.

## Strelice tastature okreću pogled umesto da zaključavaju

Zaključavanja rade tek posle prvog klika u alatu za crtanje ili uređivanje. {{ui:Guraj/vuci}} nema zaključavanja, a u {{ui:Rotiraj}} ona ne menjaju okretanje. U ostalim slučajevima strelice okreću pogled.

## Esc u punom ekranu

U punom ekranu pregledač može prvi {{key:Esc}} da iskoristi za izlaz iz punog ekrana. Pritisni {{key:Esc}} ponovo da otkažeš alat.

## Nema srednjeg tastera miša

Pritisni {{key:O}} za {{ui:Orbitiraj}} i prevuci, ili koristi strelice. Vidi [Orbitiranje, pomeranje i zumiranje](topic:orbit-pan-zoom#without-a-middle-button).

## Uvoz

| Poruka | Šta da uradiš |
|---|---|
| „ModelCraft uvozi SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG i DXF. … nije nijedan od ovih.“ | Izvezi model iz drugog programa u jednom od ovih formata |
| „Ova datoteka je veća od 300 MB.“ | Pojednostavi ili podeli model u drugom programu |
| „…prevelik za modelovanje ovde (preko 2 miliona tačaka).“ | Isto |
| „Ovaj .gltf treba „…“…“ | Prevuci `.gltf` zajedno sa `.bin` i datotekama tekstura, ili otvori `.glb` verziju |
| „Ovaj glTF treba … proširenje, koje ModelCraft još ne čita.“ | Izvezi ponovo iz drugog programa bez tog proširenja (na primer KTX2 teksture) |
| OBJ se uvozi bez boja ili tekstura | Prevuci `.obj` zajedno sa `.mtl` i slikama |
| „Ova Alembic datoteka koristi stari HDF5 raspored…“ | Sačuvaj je ponovo iz drugog programa kao Ogawa Alembic datoteku |
| FBX se uvozi bez tekstura | Prevuci `.fbx` zajedno sa slikama tekstura, ili ugradi medijume pri izvozu |
| „Ovaj FBX je verzija …, koju ModelCraft ne čita“ | Izvezi ponovo kao FBX 2011 ili noviji |
| STL ili PLY se uvozi 1,000 puta veći ili manji | STL se čita kao milimetri, a PLY kao metri: skaliraj ga (vidi [Rotiraj i skaliraj](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| „Ovo nije Collada (.dae) datoteka…“ ili „…nije ispravan XML…“ | Datoteka je oštećena ili nije Collada. Izvezi je ponovo |
| „Ova Collada datoteka nema geometriju koju ModelCraft može da uveze.“ | Sadrži samo kamere, svetla ili reference na druge datoteke |
| „Ovo je binarni DXF. Sačuvaj ga kao ASCII DXF i pokušaj ponovo.“ | Sačuvaj ga ponovo iz CAD programa kao ASCII |
| „Ovo nije DWG crtež…“ | Datoteka nije DWG, ili je oštećena |
| „Ovaj crtež nije mogao da se pročita (…). Možda je oštećen, ili sačuvan u DWG verziji koju čitač ne podržava…“ | Zagrade kažu razlog. Sačuvaj ga kao DXF, ili kao DWG od AutoCAD 2000 do 2018, iz CAD programa |
| „Ovaj crtež seže više od 10,000 km od svog ishodišta…“ | Pomeri crtež blizu 0,0 u CAD programu |

### Uvoz je pogrešne veličine ili leži na boku

- **OBJ:** OBJ nema jedinicu; ModelCraft ga čita kao metre. Model u milimetrima uvozi se 1000 puta veći: [skaliraj](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) ga sa `0.001`; model u inčima sa `0.0254`.
- **OBJ na boku:** ModelCraft očekuje OBJ datoteke sa Y osom nagore. Datoteka napisana sa Z osom nagore uvozi se ležeći. Okreni je za 90° oko crvene ose: klikni centar {{ui:Rotiraj}} na površi koja gleda duž crvene, ili otvori datoteku u njenom programu i izvezi je sa Y osom nagore.
- **DWG ili DXF:** izabrao si pogrešnu jedinicu u dijalogu „Jedinice crteža“. Opozovi i uvezi ponovo.

## Otvaranje datoteka

| Poruka | Šta da uradiš |
|---|---|
| „Ovo nije ModelCraft model (nije JSON).“ | Za druge formate koristi {{ui:Uvezi}} |
| „Ovo nije ModelCraft datoteka koju možemo da otvorimo: …“ | Datoteka je oštećena ili je ručno izmenjena |
| „Ovaj model je sačuvao noviji ModelCraft…“ | Otvori ga u novijoj verziji |
| „Ova datoteka je veća od 200 MB.“ | Model je ovde prevelik za otvaranje |

## Izgubio sam rad

ModelCraft ne čuva sam u datoteku. Kad zatvoriš ili ponovo učitaš karticu sa nesačuvanim izmenama, pregledač prvo pita („Napusti sajt?“ ili „Ponovo učitaj sajt?“); izaberi da ostaneš i sačuvaj. Novo i Otvori takođe pitaju („Nesačuvane izmene“). Ako su se pregledač ili računar srušili, ponovo otvori ModelCraft u istom pregledaču: ponudiće ti nesačuvani rad („Povrati svoj rad?“; vidi [Povrati svoj rad](common:recover)). Često čuvaj sa {{key:Mod+S}}.

## Moje preuzimanje se puni kopijama

Svako čuvanje je novo preuzimanje, nazvano `Untitled (1).modelcraft`, `Untitled (2).modelcraft` i tako dalje. Obriši stare ili podesi pregledač da pita gde da sačuva svaku datoteku, pa sam prepiši staru. Vidi [Otvaranje, čuvanje, uvoz i izvoz](topic:files#save-a-model).

## Sporo je

- Svaki korak opozivanja čuva kopiju modela (a [mreža](topic:meshes) čuva samo ono što se promenilo), pa na vrlo velikom uvozu geometrije guranja/vuče svaka izmena traje duže. Rastavi ili obriši ono što ti ne treba, sačuvaj i ponovo otvori: ponovno otvaranje takođe briše istoriju opozivanja.
- Senke od sunca najviše koštaju. Isključi {{ui:Senke od sunca}} dok modeluješ.

## Nema senki

{{ui:Senke od sunca}} su isključene, sunce je ispod horizonta u vreme koje si izabrao („Sunce je u ovom trenutku ispod horizonta.“), ili je stil {{ui:Žičani model}}, koji ne crta senke.

## „Ovaj pregledač nije dozvolio ceo ekran.“

Neki pregledači i neki ugrađeni prikazi odbijaju ceo ekran. Umesto toga koristi ceo ekran samog pregledača ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft se ne otvara bez veze

ModelCraft se otvara van mreže samo ako je bio sačuvan za rad van mreže u tom pregledaču: dugme na traci aplikacije mora da piše {{ui:Spremno za rad van mreže}}. Otvori ga dok si na mreži i klikni {{ui:Sačuvaj za rad van mreže}}. Ako dugme piše {{ui:Nije moguće sačuvati}}, klikni ga ponovo na boljoj vezi; {{ui:Rad van mreže nije dostupan}} znači da ovaj prozor (privatni prozor ili upravljani računar) ne može da zadrži kopiju. Vidi [Rad van mreže](common:offline).
