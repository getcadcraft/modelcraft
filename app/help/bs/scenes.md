---
title: Spasi poglede kao scene
summary: Spasi kameru i stil kao scenu, ažuriraj i preimenuj je, te idi kroz scene ili ih pusti da predstaviš dizajn.
keywords: scena, pogled, sačuvani pogled, kamera, prezentacija, animacija, pusti, prezentacija slajdova, page up, page down, kartice, obilazak
from: 38680d6e
---

**Scena** pamti položaj kamere, stil i šta je sakriveno: odakle gledaš, perspektiva ili paralela, stil površina, ivice, postavke sunca, sakrivene grupe, isključene oznake i presjek. Scene se spašavaju u datoteci `.modelcraft`.

## Dodaj scenu

1. Postavi pogled: orbitiraj, zumiraj, odaberi stil, postavi sunce.
2. U panelu {{ui:Scene}} s desne strane klikni {{ui:Dodaj scenu}}.

   Scena se pojavljuje na listi, nazvana „Scena 1”, „Scena 2” i tako dalje, i kao kartica preko vrha 3D pogleda. Statusna linija kaže „Scena 1 spašena: ova kamera, stil i šta je sakriveno.”

## Idi na scenu

- Klikni njenu karticu iznad 3D pogleda, ili njen naziv na listi {{ui:Scene}}.
- Ili pritisni {{key:PageDown}} za sljedeću scenu i {{key:PageUp}} za prethodnu. {{ui:Sljedeća}} i {{ui:Prethodna}} ispod liste rade isto.

Kamera klizi do scene za nešto više od pola sekunde. Ako je tvoj računar postavljen da smanjuje kretanje, kamera tamo skače.

## Promijeni, preimenuj ili izbriši scenu

Svaka scena na listi ima tri mala dugmeta iza svog naziva:

- **Ažuriraj** (kružne strelice): spašava trenutnu kameru, stil i šta je sakriveno u tu scenu. „Scena 2 ažurirana.”
- **Preimenuj** (olovka): otvara dijalog „Preimenuj scenu”. Upiši novi naziv i klikni {{ui:Spasi}}.
- **Izbriši** (kanta za smeće): uklanja scenu. „Scena 2 izbrisana. Ctrl+Z je vraća.”

Dodavanje, ažuriranje, preimenovanje i brisanje scena su koraci poništavanja, kao i izmjene modela.

## Zaključaj kameru scene

Kad renderuješ isti pogled iznova kako se dizajn mijenja, zaključaj kameru te scene da se pogled nikad slučajno ne pomjeri.

1. Na listi {{ui:Scene}} klikni dugme **zaključavanja** (otvoreni lokot) iza naziva scene. Zatvara se, a kartica scene iznad 3D pogleda pokazuje mali lokot. Statusna linija kaže „Scena 2: kamera zaključana.”
2. Idi na scenu kad god želiš renderovati: kamera se vraća tačno na spašeni pogled, pa se slike napravljene iz njega poklapaju s ranijim.

Dok je kamera zaključana, **Ažuriraj** i dalje spašava stil i šta je sakriveno u scenu, ali kamera ostaje gdje je bila, čak i ako si orbitirao. Klikni lokot ponovo da otključaš; Ažuriraj tada ponovo spašava trenutni pogled. Zaključavanje i otključavanje su koraci poništavanja, a zaključavanje se spašava u datoteci `.modelcraft`.

## Prezentuj

1. Dodaj dvije ili više scena.
2. Klikni {{ui:Pusti}} ispod liste. ModelCraft prelazi na sljedeću scenu svakih nekoliko sekundi i vraća se na prvu nakon posljednje.
3. Klikni {{ui:Zaustavi}} (isto dugme) ili pritisni {{key:Esc}} da zaustaviš.

Za studiju sunca dodaj jednu scenu po satu s promijenjenim samo {{ui:Vrijeme}}, pa ih pusti. Vidi [Stilovi i sjenke sunca](topic:styles-shadows#a-sun-study).

Da prezentuješ bez traka, pritisni {{key:Ctrl+Shift+F}} dvaput: prvo cijeli ekran, pa cijeli ekran sa sakrivenim trakama. Kartice scena ostaju iznad pogleda.

## Šta scena prikazuje

Scena pamti šta je bilo sakriveno kad si je spasio: grupe i komponente koje si [sakrio](topic:hide-isolate), [oznake](topic:tags) koje si isključio i koja [ravan presjeka](topic:sections) sječe. Odlazak na scenu ih ponovo sakriva i prikazuje. Tako jedna scena može prikazivati cijelu kuću, sljedeća kuću s isključenom oznakom krova, a sljedeća presjek kroz nju.

Sakrivene slobodne površine i ivice nisu dio scena. Odlazak na scenu ne pravi korak poništavanja. Scene spašene ranijom verzijom ModelCrafta ostavljaju sakriveno kako jeste; klikni Ažuriraj da to spašaš u njih.

## Izvezi animaciju

{{ui:Izvezi animaciju}}, ispod liste, pušta scene od prve do posljednje, glatko pomjerajući kameru između njih, i spašava film kao **WebM** video (dvije sekunde kretanja i kratka pauza po sceni). Snima pogled onako kako ga vidiš, u njegovoj veličini na ekranu, u [prikazu prezentacije](topic:styles-shadows#presentation-view) (bez osa, vodilica ili odabira). Pritisni {{key:Esc}} ili ponovo klikni dugme da zaustaviš bez spašavanja. WebM se pušta u pregledačima i VLC-u, a video uređivači ga pretvaraju.

Za renderovan obilazak (nebo, sunce, sjenke, materijali) u veličini koju biraš, koristi {{ui:Renderuj video…}}: bez ključeva animacije uzima scene, redom, kao putanju kamere. Vidi [Animiraj kameru i objekte](topic:animation).

## Stvari koje treba znati

- Promjena stila ili pomjeranje kamere nakon odlaska na scenu ne mijenja scenu dok ne klikneš Ažuriraj.
- Scene se ne izvoze u Collada, OBJ, glTF, STL ili IFC.
