---
title: Skaliranje faktorima i dodatak za skupljanje
summary: Skalirajte odabir faktorom za svaku os oko točke koju odaberete ili povećajte uzorak za postotak za koji će se lijevani dio skupiti.
keywords: skaliranje, neravnomjerno, faktor, postotak, rastezanje, skupljanje, lijevanje, uzorak, ljevaonica, dodatak, promjena veličine
from: 37e1bbff
---

Alat Skaliraj ({{key:S}}) skalira ravnomjerno ili povlači ručku da rasteže jedan ili dva smjera. **Skaliraj faktorima…** (izbornik Alati ili grupa Izmjena) je upisani oblik: broj za svaku od tri osi.

1. Odaberite rubove, plohe, grupe ili komponente.
2. Otvorite {{ui:Skaliraj faktorima…}}. Upišite faktor za crvenu, zelenu i plavu. Faktor može biti `1.015`, `101.5%` ili `+1.5%` (a `-2%` za manje). {{ui:Isto na sve tri osi}} kopira prvi u druge dvije.
3. Odaberite što **ostaje na mjestu**: središte odabranog, njegov najniži kut, sredina njegova dna ili ishodište.
4. Redak ispod polja prikazuje veličinu sada i poslije. {{ui:Skaliraj}} to radi u jednom koraku poništavanja.

Osi su one grupe koju imate otvorenu (modela, na najvišoj razini). Grupa ili komponenta koja je zakrenuta izlazi iskrivljena ako su faktori različiti; umjesto toga skalirajte grupu koja je drži. Sadržaj komponente se ne dira, pa njezine druge kopije ostaju kakve jesu.

## Dodatak za skupljanje

Lijevani dio se skuplja dok se hladi, pa se njegov uzorak pravi većim. Pod **Dodatak za skupljanje** upišite postotak za svaku os (vaša ljevaonica ili izrađivač uzoraka daje ga za vaš metal; 1.5 % dolje je samo primjer) i pritisnite {{ui:Koristi kao faktore}}.

- **Sam postotak** čini faktor 1 plus postotak: 1.5 % daje 1.015, što označava mjerilo za skupljanje.
- **Točno dovoljno** čini faktor 1 podijeljeno s jedan minus postotak: 1.5 % daje 1.0152, pa odljevak izađe u veličini dijela nakon što se toliko skupi.

Vaši zadnji postoci pamte se u ovom pregledniku.

:::note
Postotak određujete vi: ModelCraft ne zna ništa o vašem metalu, kalupu ili procesu.
:::
