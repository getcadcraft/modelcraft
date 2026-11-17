---
title: Spremanje pogleda kao scena
summary: Spremite kameru i stil kao scenu, ažurirajte je i preimenujte, te se kretanjem kroz scene ili reprodukcijom predstavite dizajn.
keywords: scena, pogled, spremljeni pogled, kamera, prezentacija, animacija, reproduciraj, page up, page down, kartice, vodič korak po korak
from: 38680d6e
---

**Scena** pamti položaj kamere, stil i što je skriveno: odakle gledate, perspektiva ili paralelno, stil ploha, bridove, postavke sunca, skrivene grupe, isključene oznake i rez presjeka. Scene se spremaju u datoteku `.modelcraft`.

## Dodavanje scene

1. Postavite prikaz: orbitirajte, zumirajte, odaberite stil, postavite sunce.
2. U ploči {{ui:Scene}} na desnoj strani kliknite {{ui:Dodaj scenu}}.

   Scena se pojavljuje na popisu, nazvana „Scene 1“, „Scene 2“ i tako dalje, i kao kartica preko 3D prikaza. Statusna traka kaže „Scene 1 spremljena: ovaj pogled, stil i ono što je skriveno.“

## Prelazak na scenu

- Kliknite njezinu karticu iznad 3D prikaza ili njezin naziv na popisu {{ui:Scene}}.
- Ili pritisnite {{key:PageDown}} za sljedeću scenu i {{key:PageUp}} za prethodnu. {{ui:Sljedeća}} i {{ui:Prethodna}} ispod popisa rade isto.

Kamera klizi do scene za nešto više od pola sekunde. Ako je vaše računalo postavljeno da smanji pokret, ona tamo jednostavno skoči.

## Promjena, preimenovanje ili brisanje scene

Svaka scena na popisu ima tri mala gumba iza naziva:

- **Ažuriraj** (kružne strelice): sprema trenutni pogled, stil i ono što je skriveno u tu scenu. „Scene 2 ažurirana.“
- **Preimenuj** (olovka): otvara dijalog „Preimenuj scenu“. Upišite novi naziv i kliknite {{ui:Spremi}}.
- **Izbriši** (kanta za smeće): uklanja scenu. „Scene 2 izbrisana. Ctrl+Z je vraća.“

Dodavanje, ažuriranje, preimenovanje i brisanje scena su koraci poništavanja, kao i promjene modela.

## Zaključavanje kamere scene

Kad iznova renderirate isti pogled dok se dizajn mijenja, zaključajte kameru te scene da se pogled nikad ne pomakne slučajno.

1. U popisu {{ui:Scene}} kliknite gumb **zaključaj** (otvoreni lokot) iza naziva scene. Zatvara se, a kartica scene iznad 3D prikaza pokazuje mali lokot. Statusna traka kaže „Scene 2: kamera zaključana.“
2. Idite na scenu kad god želite renderirati: kamera se vraća točno na spremljeni pogled, pa se slike napravljene iz njega poklapaju s ranijima.

Dok je kamera zaključana, **Ažuriraj** i dalje sprema stil i ono što je skriveno u scenu, ali kamera ostaje gdje je bila, čak i ako ste orbitirali. Ponovno kliknite lokot da otključate; tada Ažuriraj ponovno sprema trenutni pogled. Zaključavanje i otključavanje su koraci poništavanja, a zaključavanje se sprema u datoteku `.modelcraft`.

## Prezentiranje

1. Dodajte dvije ili više scena.
2. Kliknite {{ui:Reproduciraj}} ispod popisa. ModelCraft prelazi na sljedeću scenu svakih nekoliko sekundi i vraća se na prvu nakon zadnje.
3. Kliknite {{ui:Zaustavi}} (isti gumb) ili pritisnite {{key:Esc}} za zaustavljanje.

Za studiju sunca dodajte jednu scenu po satu, mijenjajući samo {{ui:Vrijeme}}, zatim ih reproducirajte. Vidi [Stilovi i sjene od sunca](topic:styles-shadows#a-sun-study).

Da prezentirate bez traka, pritisnite dvaput {{key:Ctrl+Shift+F}}: cijeli zaslon, pa cijeli zaslon sa skrivenim trakama. Kartice scena ostaju iznad prikaza.

## Što scena prikazuje

Scena pamti što je bilo skriveno kad ste je spremili: grupe i komponente koje ste [sakrili](topic:hide-isolate), [oznake](topic:tags) koje ste isključili i koje [ravnine presjeka](topic:sections) režu. Prelazak na scenu ponovno ih skriva i prikazuje. Tako jedna scena može prikazati cijelu kuću, sljedeća kuću s isključenom oznakom krova, a sljedeća presjek kroz nju.

Skrivene slobodne plohe i bridovi nisu dio scena. Prelazak na scenu ne stvara korak poništavanja. Scene spremljene ranijom verzijom ModelCrafta ostavljaju skriveno kakvo je; kliknite Ažuriraj da to spremite u njih.

## Izvoz animacije

{{ui:Izvezi animaciju}}, ispod popisa, reproducira scene od prve do zadnje, glatko pomičući kameru između njih, i sprema film kao video **WebM** (dvije sekunde pomaka i kratka pauza po sceni). Bilježi pogled onakav kakav vidite, u njegovoj veličini na zaslonu, u [prezentacijskom prikazu](topic:styles-shadows#presentation-view) (bez osi, pomoćnih linija ili odabira). Pritisnite {{key:Esc}} ili ponovno kliknite gumb da zaustavite bez spremanja. WebM se reproducira u preglednicima i VLC-u, a programi za uređivanje videa ga pretvaraju.

Za renderiranu šetnju (nebo, sunce, sjene, materijali) u veličini koju odaberete, umjesto toga koristite {{ui:Renderiraj video…}}: bez ključeva animacije uzima scene, redom, kao put kamere. Vidi [Animiranje kamere i objekata](topic:animation).

## Što treba znati

- Promjena stila ili pomicanje kamere nakon prelaska na scenu ne mijenja scenu dok ne kliknete Ažuriraj.
- Scene se ne izvoze u Collada, OBJ, glTF, STL ni IFC.
