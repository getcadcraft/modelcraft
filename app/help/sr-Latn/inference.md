---
title: Usmeravanje i hvatanje
summary: Šta znače obojeni markeri, koje hvatanje pobeđuje i kako zaključati pravac strelicama ili tasterom Shift.
keywords: usmeravanje, hvatanje, krajnja tačka, središnja tačka, centar površi, na ivici, na površi, osa, crvena osa, zelena osa, plava osa, paralelno, upravno, zaključavanje, shift, osnap
from: e78984e9
---

Dok alat za crtanje ili uređivanje radi, ModelCraft gleda šta je pod pokazivačem i hvata se za najkorisnije obližnje. Marker pokazuje šta je našao, a vrh u donjem levom uglu ga imenuje.

## Markeri i vrhovi

| Vrh | Marker | Hvata se za |
|---|---|---|
| Krajnja tačka | Zeleni krug | Kraj ivice |
| Središnja tačka | Cijan krug | Sredinu ivice |
| Centar površi | Plavi krug | Sredinu površi pod pokazivačem |
| Tačka vodilice | Siva | Tačku vodilice koju je ostavila merna traka |
| Ishodište | Oker | Mesto gde se seku crvena, zelena i plava osa |
| Na crvenoj osi / Na zelenoj osi / Na plavoj osi | Linija te boje | Liniju od početne tačke u tom pravcu |
| Paralelno s ivicom / Upravno na ivicu | Magenta linija | Liniju od početne tačke paralelnu ili upravnu na zapamćenu ivicu (vidi dole) |
| Zaključano | Magenta linija | Pravac koji ste zaključali strelicom ili {{key:Shift}} |
| Na ivici | Crveni kvadrat | Bilo gde duž ivice |
| Na vodilici | Siva | Bilo gde duž vodilne linije |
| Na površi | Plavi romb | Bilo gde na površi |
| Na ravni | nema | Ravan na kojoj ste počeli, kad je pokazivač iznad prazne okoline |
| Na tlu | nema | Tlo (crveno-zelena ravan), kad tu nema ničega drugog |

Kad linija ose od početne tačke seče ivicu ili vodilicu, ModelCraft se hvata za presek, a vrh imenuje oba, na primer „Na crvenoj osi, na ivici“.

## Koje hvatanje pobeđuje

1. **Tačke** u krugu od oko 12 piksela: prvo krajnje tačke, zatim tačke vodilica, središnje tačke, centar površi pod pokazivačem i ishodište.
2. **Pravci** od početne tačke: crvena, zelena i plava osa, i paralelno ili upravno na zapamćenu ivicu.
3. **Na ivici** ili vodilnoj liniji.
4. **Na površi.**
5. **Ravan crtanja**, ili tlo.

Stvari sakrivene iza površi se nikad ne hvataju. Okrenite pogled da vidite tačku koju želite.

## Crtanje na površi iz tačke

{{ui:Pravougaonik}}, {{ui:Krug}} ili {{ui:Poligon}} započet na uglu, središnjoj tački, ivici ili centru površi crta se **u ravni površi pod pokazivačem**, i seče tu površ. Ivica pripada dvema površima, pa stranu ivice na kojoj je pokazivač odlučuje: da biste crtali na kraju dugačke kutije, počnite od sredine jedne od njenih ivica s pokazivačem tačno unutar krajnje površi.

## Paralelno i upravno

ModelCraft pamti **poslednju ivicu preko koje je pokazivač prešao pre prvog klika**. Početak na uglu ili na ivici računa se kao prelazak preko te ivice. Kad alat radi, druge ivice preko kojih prelazite ne menjaju je.

Da biste nacrtali liniju paralelnu postojećoj ivici:

1. Pritisnite {{key:L}} i pređite preko ivice koju želite da prilagodite.
2. Pomerite se do početne tačke, bez prelaska preko drugih ivica ako možete, i kliknite.
3. Pomerite se u pravcu paralelnom toj ivici. Linija postaje magenta, a vrh kaže „Paralelno s ivicom“. Upravno radi na isti način, u ravni na kojoj crtate.

Ako je zapamćena pogrešna ivica, pritisnite {{key:Esc}}, pređite preko prave ivice i počnite ponovo.

## Zaključavanje pravca

Posle prvog klika alata, sledeću tačku možete zadržati na jednoj liniji:

| Taster | Zaključava na |
|---|---|
| {{key:Right}} | Crvenu osu |
| {{key:Left}} | Zelenu osu |
| {{key:Up}} | Plavu osu (pravo gore) |
| {{key:Down}} | Paralelno sa zapamćenom ivicom (vidi gore) |

Ponovo pritisnite istu strelicu da otključate. Statusna traka kaže „Zaključano za crvenu osu. Pritisnite istu strelicu za otključavanje.“

Dok je zaključano, tačka klizi po liniji ka mestu gde je pokazivač, i i dalje se poravnava sa tačkama preko kojih pređete: pređite preko ugla druge kutije da nacrtate liniju duž crvene ose tačno onoliko koliko je taj ugao daleko.

**{{key:Shift}}** zaključava pravac na koji se trenutno hvatate (osu ili paralelan pravac), dok ga držite. Pustite da otključate.

Zaključavanja rade u {{ui:Linija}}, {{ui:Pravougaonik}}, {{ui:Krug}}, {{ui:Poligon}}, {{ui:Premesti}}, {{ui:Skaliraj}} i {{ui:Merna traka}}. Pre prvog klika, strelice umesto toga okreću pogled.

## Unutar grupe

Dok uređujete unutar grupe ili komponente, ose su sopstvene ose grupe (kreću se s njom i okreću se ako je bila rotirana). Hvatanja i dalje nalaze tačke i ivice izvan grupe, pa možete da poravnate stvari s ostatkom modela.
