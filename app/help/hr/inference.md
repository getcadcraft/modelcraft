---
title: Usmjeravanje i hvatanje
summary: Što znače obojene oznake, koje hvatanje pobjeđuje i kako zaključati smjer strelicama ili tipkom Shift.
keywords: usmjeravanje, hvatanje, krajnja točka, polovište, središte plohe, središte, na bridu, na plohi, os, crvena os, zelena os, plava os, paralelno, okomito, zaključavanje, shift, osnap
from: e78984e9
---

Dok radi alat za crtanje ili uređivanje, ModelCraft gleda što je pod pokazivačem i hvata se za najkorisniju stvar u blizini. Oznaka pokazuje što je pronašao, a natpis u donjem lijevom kutu to imenuje.

## Oznake i natpisi

| Natpis | Marker | Hvata se za |
|---|---|---|
| Krajnja točka | Zeleni krug | Kraj brida |
| Polovište | Cijan krug | Sredinu brida |
| Središte plohe | Plavi krug | Sredinu plohe pod pokazivačem |
| Pomoćna točka | Siva | Pomoćnu točku koju je ostavila mjerna vrpca |
| Ishodište | Oker | Mjesto gdje se sastaju crvena, zelena i plava os |
| Na crvenoj osi / Na zelenoj osi / Na plavoj osi | Linija u toj boji | Liniju od početne točke u tom smjeru |
| Paralelno s bridom / Okomito na brid | Magenta linija | Liniju od početne točke paralelnu ili okomitu na zapamćeni brid (vidi niže) |
| Zaključano | Magenta linija | Smjer koji ste zaključali strelicom ili {{key:Shift}} |
| Na bridu | Crveni kvadrat | Bilo gdje duž brida |
| Na pomoćnoj liniji | Siva | Bilo gdje duž pomoćne linije |
| Na plohi | Plavi romb | Bilo gdje na plohi |
| Na ravnini | nema | Ravninu na kojoj ste započeli, kad je pokazivač iznad praznog prostora |
| Na tlu | nema | Tlo (crveno-zelena ravnina), kad nema ničega drugog |

Kad os iz vaše početne točke siječe brid ili pomoćnu liniju, ModelCraft se hvata za presjecište i natpis imenuje oboje, npr. "Na crvenoj osi, na bridu".

## Koje hvatanje pobjeđuje

1. **Točke** unutar oko 12 piksela: najprije krajnje točke, zatim pomoćne točke, polovišta, središte plohe pod pokazivačem i ishodište.
2. **Smjerovi** od početne točke: crvena, zelena i plava os, te paralelno ili okomito na zapamćeni brid.
3. **Na bridu** ili pomoćnoj liniji.
4. **Na plohi.**
5. **Ravnina crtanja**, ili tlo.

Stvari skrivene iza plohe se nikad ne hvataju. Okrenite prikaz da vidite točku koju želite.

## Crtanje na plohi iz točke

{{ui:Pravokutnik}}, {{ui:Kružnica}} ili {{ui:Poligon}} započet na kutu, polovištu, bridu ili središtu plohe crta se **u ravnini plohe pod pokazivačem** i reže tu plohu. Brid pripada dvjema plohama, pa odluku donosi strana brida na kojoj je pokazivač: da biste crtali na kraju dugačke kutije, započnite od sredine jednog od njezinih bridova s pokazivačem tik unutar krajnje plohe.

## Paralelno i okomito

ModelCraft pamti **zadnji brid preko kojeg je pokazivač prošao prije vašeg prvog klika**. Početak na kutu ili na bridu računa se kao prelazak preko tog brida. Kad alat radi, drugi bridovi preko kojih prelazite ne zamjenjuju ga.

Da nacrtate liniju paralelnu s postojećim bridom:

1. Pritisnite {{key:L}} i prijeđite preko brida koji želite uskladiti.
2. Pomaknite se do početne točke, bez prelaženja preko drugih bridova ako možete, i kliknite.
3. Pomaknite se u smjeru paralelnom s tim bridom. Linija postaje magenta, a natpis kaže "Paralelno s bridom". Okomito funkcionira isto, unutar ravnine na kojoj crtate.

Ako je zapamćen pogrešan brid, pritisnite {{key:Esc}}, prijeđite preko ispravnog brida i počnite ponovno.

## Zaključavanje smjera

Nakon prvog klika alata možete zadržati sljedeću točku na jednoj liniji:

| Tipka | Zaključava na |
|---|---|
| {{key:Right}} | Crvenu os |
| {{key:Left}} | Zelenu os |
| {{key:Up}} | Plavu os (ravno gore) |
| {{key:Down}} | Paralelno sa zapamćenim bridom (vidi gore) |

Pritisnite istu strelicu ponovno za otključavanje. Statusna traka kaže "Zaključano na crvenu os. Pritisnite istu strelicu za otključavanje."

Dok je zaključano, točka klizi duž linije prema mjestu gdje je pokazivač i dalje se poravnava s točkama preko kojih prelazite: prijeđite preko kuta druge kutije da nacrtate liniju duž crvene osi točno koliko i taj kut.

{{key:Shift}} zaključava smjer na koji se trenutačno hvatate (os ili paralelno), dok ga držite. Otpustite za otključavanje.

Zaključavanja rade u {{ui:Linija}}, {{ui:Pravokutnik}}, {{ui:Kružnica}}, {{ui:Poligon}}, {{ui:Pomakni}}, {{ui:Skaliraj}} i {{ui:Mjerna vrpca}}. Prije prvog klika strelice umjesto toga okreću prikaz.

## Unutar grupe

Dok uređujete unutar grupe ili komponente, osi su vlastite osi grupe (pomiču se s njom i zakreću se s njom ako je bila zakrenuta). Hvatanje i dalje pronalazi točke i bridove izvan grupe, pa možete poravnati stvari s ostatkom modela.
