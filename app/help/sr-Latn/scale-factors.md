---
title: Skaliranje faktorima i dodatak za skupljanje
summary: Skalirajte izbor faktorom za svaku osu oko tačke koju izaberete, ili uvećajte model za procenat za koji će livena stvar da se skupi.
keywords: skaliranje, neravnomerno, faktor, procenat, istezanje, skupljanje, skupiti se, model, livnica, dodatak, promeni veličinu
from: 37e1bbff
---

Alat Skaliraj ({{key:S}}) skalira ravnomerno ili vuče grip da istegne jedan ili dva smera. **Skaliraj faktorima…** (meni Alati, ili grupa Izmena) je oblik u kome se kuca: broj za svaku od tri ose.

1. Izaberite ivice, površi, grupe ili komponente.
2. Otvorite {{ui:Skaliraj faktorima…}}. Ukucajte faktor za crvenu, zelenu i plavu. Faktor može biti `1.015`, `101.5%` ili `+1.5%` (a `-2%` za manje). {{ui:Isto na sve tri ose}} kopira prvi u preostale dve.
3. Izaberite šta **ostaje na mestu**: sredina izbora, njegov najniži ugao, sredina njegovog dna ili koordinatni početak.
4. Linija ispod polja pokazuje veličinu sada i posle. {{ui:Skaliraj}} to radi u jednom koraku poništavanja.

Ose su one grupe koju imate otvorenu (modelove, na najvišem nivou). Grupa ili komponenta koja je okrenuta izlazi iskrivljena ako se faktori razlikuju; skalirajte umesto nje grupu koja je sadrži. Sadržaj komponente se ne dira, pa njene druge kopije ostaju kakve jesu.

## Dodatak za skupljanje

Liveni deo se skupi dok se hladi, pa se njegov model pravi većim. Pod **Dodatak za skupljanje** ukucajte procenat za svaku osu (vaša livnica ili majstor za modele daje ga za vaš metal; 1,5 % ispod je samo primer) i pritisnite {{ui:Koristi kao faktore}}.

- **Sam procenat** pravi faktor 1 plus procenat: 1,5 % daje 1,015, što obeležava lenjir za skupljanje.
- **Tačno dovoljno** pravi faktor 1 podeljeno sa jedan minus procenat: 1,5 % daje 1,0152, pa livenica izlazi u veličini dela posle toliko skupljanja.

Vaši poslednji procenti se pamte u ovom pregledaču.

:::note
Procenat dajete vi: ModelCraft ne zna ništa o vašem metalu, kalupu ni procesu.
:::
