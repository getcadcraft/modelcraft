---
title: Skaliraj faktorima i dodatak za skupljanje
summary: Skaliraj odabrano faktorom za svaku osu oko tačke koju odabereš, ili povećaj model za lijevanje za procenat za koji će se odljevak skupiti.
keywords: skaliraj, neujednačeno, faktor, procenat, rastezanje, skupljanje, skupiti, lijevanje, model za lijevanje, livnica, dodatak, promijeni veličinu
from: 37e1bbff
---

Alat Skaliraj ({{key:S}}) skalira ravnomjerno ili povlači hvatište da rasteže jedan ili dva smjera. **Skaliraj faktorima…** (meni Alati, ili grupa Izmijeni) je upisani oblik: broj za svaku od tri ose.

1. Odaberi ivice, površine, grupe ili komponente.
2. Otvori {{ui:Skaliraj faktorima…}}. Upiši faktor za crvenu, zelenu i plavu. Faktor može biti `1.015`, `101.5%` ili `+1.5%` (a `-2%` za manje). {{ui:Isto na sve tri ose}} kopira prvi u preostale dvije.
3. Odaberi šta **ostaje na mjestu**: sredina odabranog, njegov najniži ugao, sredina njegovog dna ili ishodište.
4. Red ispod polja pokazuje veličinu sad i poslije. {{ui:Skaliraj}} to radi u jednom koraku poništavanja.

Ose su one grupe koju imaš otvorenu (ose modela, na najvišem nivou). Grupa ili komponenta koja je okrenuta ispadne iskrivljena ako se faktori razlikuju; umjesto toga skaliraj grupu koja je sadrži. Sadržaj komponente se ne dira, pa njene ostale kopije ostaju kakve jesu.

## Dodatak za skupljanje

Odljevak se skuplja dok se hladi, pa se njegov model za lijevanje pravi veći. Pod **Dodatak za skupljanje** upiši procenat za svaku osu (tvoja livnica ili izrađivač modela ga daje za tvoj metal; 1.5 % ispod je samo primjer) i pritisni {{ui:Koristi kao faktore}}.

- **Sam procenat** pravi faktor 1 plus procenat: 1.5 % daje 1.015, ono što označava lenjir za skupljanje.
- **Tačno dovoljno** pravi faktor 1 podijeljeno s jedan minus procenat: 1.5 % daje 1.0152, pa odljevak izađe u veličini dijela nakon što se toliko skupi.

Tvoji posljednji procenti pamte se u ovom pregledaču.

:::note
Procenat daješ ti: ModelCraft ne zna ništa o tvom metalu, kalupu ili procesu.
:::
