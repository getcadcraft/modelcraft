---
title: Čuvanje prikaza kao scena
summary: Sačuvajte kameru i stil kao scenu, ažurirajte je i preimenujte, i prolazite kroz scene ili ih puštajte da predstavite dizajn.
keywords: scena, prikaz, sačuvan prikaz, kamera, prezentacija, animacija, reprodukcija, prezentacija slajdova, page up, page down, kartice, obilazak
from: 38680d6e
---

**Scena** pamti položaj kamere, stil i ono što je sakriveno: odakle gledate, perspektivu ili paralelnu projekciju, stil površi, ivice, podešavanja sunca, sakrivene grupe, isključene oznake i presek. Scene se čuvaju u datoteci `.modelcraft`.

## Dodajte scenu

1. Postavite prikaz: orbitirajte, zumirajte, izaberite stil, postavite sunce.
2. U panelu {{ui:Scene}} sa desne strane kliknite {{ui:Dodaj scenu}}.

   Scena se pojavljuje u listi, nazvana „Scena 1”, „Scena 2” i tako dalje, i kao kartica preko vrha 3D prikaza. Statusna linija kaže „Scena 1 je sačuvana: ova kamera, stil i ono što je sakriveno.”

## Idite na scenu

- Kliknite njenu karticu preko 3D prikaza, ili njen naziv u listi {{ui:Scene}}.
- Ili pritisnite {{key:PageDown}} za sledeću scenu i {{key:PageUp}} za prethodnu. {{ui:Sledeća}} i {{ui:Prethodna}} ispod liste rade isto.

Kamera klizi do scene za nešto više od pola sekunde. Ako je vaš računar podešen da smanji kretanje, kamera tamo odmah skače.

## Promenite, preimenujte ili obrišite scenu

Svaka scena u listi ima tri mala dugmeta posle svog naziva:

- **Ažuriraj** (kružne strelice): čuva trenutnu kameru, stil i ono što je sakriveno u tu scenu. „Scena 2 je ažurirana.”
- **Preimenuj** (olovka): otvara dijalog „Preimenuj scenu”. Ukucajte novi naziv i kliknite {{ui:Sačuvaj}}.
- **Izbriši** (kanta za smeće): uklanja scenu. „Scena 2 je obrisana. Ctrl+Z je vraća.”

Dodavanje, ažuriranje, preimenovanje i brisanje scena su koraci poništavanja, kao promene modela.

## Zaključajte kameru scene

Kada iznova renderujete isti prikaz dok se dizajn menja, zaključajte kameru te scene da se prikaz ne pomeri slučajno.

1. U listi {{ui:Scene}} kliknite dugme **za zaključavanje** (otvoren katanac) posle naziva scene. Ono se zatvara, a kartica scene preko 3D prikaza pokazuje mali katanac. Statusna linija kaže „Scena 2: kamera zaključana.”
2. Idite na scenu kad god želite da renderujete: kamera se vraća tačno na sačuvan prikaz, pa se slike napravljene iz njega poklapaju sa ranijim.

Dok je kamera zaključana, **Ažuriraj** i dalje čuva stil i ono što je sakriveno u scenu, ali kamera ostaje gde je bila, čak i ako ste orbitirali. Kliknite katanac ponovo da otključate; tada Ažuriraj ponovo čuva trenutni prikaz. Zaključavanje i otključavanje su koraci poništavanja, a zaključavanje se čuva u datoteci `.modelcraft`.

## Prezentacija

1. Dodajte dve ili više scena.
2. Kliknite {{ui:Pusti}} ispod liste. ModelCraft prelazi na sledeću scenu svakih nekoliko sekundi i vraća se na prvu posle poslednje.
3. Kliknite {{ui:Zaustavi}} (isto dugme) ili pritisnite {{key:Esc}} da zaustavite.

Za studiju sunca dodajte jednu scenu po satu, sa promenjenim samo {{ui:Vreme}}, pa ih pustite. Vidi [Stilovi i senke od sunca](topic:styles-shadows#a-sun-study).

Da prezentujete bez traka, pritisnite {{key:Ctrl+Shift+F}} dva puta: ceo ekran, pa ceo ekran sa sakrivenim trakama. Kartice scena ostaju preko prikaza.

## Šta scena prikazuje

Scena pamti šta je bilo sakriveno kada ste je sačuvali: grupe i komponente koje ste [sakrili](topic:hide-isolate), [oznake](topic:tags) koje ste isključili, i koje [ravni preseka](topic:sections) seku. Odlazak na scenu ponovo sakriva i prikazuje ih. Tako jedna scena može da prikaže celu kuću, sledeća kuću sa isključenom oznakom krova, a sledeća presek kroz nju.

Sakrivene slobodne površi i ivice nisu deo scena. Odlazak na scenu ne pravi korak poništavanja. Scene sačuvane ranijim izdanjem ModelCraft-a zadržavaju ono što je sakriveno kako jeste; kliknite Ažuriraj da to sačuvate u njih.

## Izvoz animacije

{{ui:Izvezi animaciju}}, ispod liste, pušta scene od prve do poslednje, glatko pomerajući kameru između njih, i čuva film kao **WebM** video (dve sekunde pomeranja i kratka pauza po sceni). Snima prikaz kako ga vidite, u njegovoj veličini na ekranu, u [prikazu za prezentaciju](topic:styles-shadows#presentation-view) (bez osa, vodilica i izbora). Pritisnite {{key:Esc}} ili ponovo kliknite dugme da zaustavite bez čuvanja. WebM radi u pregledačima i VLC-u, a video uređivači ga pretvaraju.

Za renderovan obilazak (nebo, sunce, senke, materijali) u veličini koju izaberete, koristite {{ui:Renderuj video…}}: bez ključeva animacije uzima scene, redom, kao putanju kamere. Vidi [Animiranje kamere i objekata](topic:animation).

## Stvari koje treba znati

- Promena stila ili pomeranje kamere posle odlaska na scenu ne menja scenu dok ne kliknete Ažuriraj.
- Scene se ne izvoze u Collada, OBJ, glTF, STL ili IFC.
