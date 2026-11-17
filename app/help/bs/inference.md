---
title: Zaključivanje i hvatanje
summary: Šta znače obojeni markeri, koje hvatanje pobjeđuje i kako zaključati pravac strelicama ili Shift tasterom.
keywords: zaključivanje, hvatanje, krajnja tačka, sredina, centar plohe, centar, na ivici, na plohi, osa, crvena osa, zelena osa, plava osa, paralelno, normalno, zaključavanje, shift, osnap
from: e78984e9
---

Dok alat za crtanje ili uređivanje radi, ModelCraft gleda što je pod pokazivačem i hvata se za najkorisnije što je blizu. Marker pokazuje što je pronašao, a vrh dolje lijevo to imenuje.

## Markeri i vrhovi

| Tip | Marker | Hvata se za |
|---|---|---|
| Krajnja tačka | Zeleni krug | Kraj ivice |
| Sredina | Cijan krug | Sredinu ivice |
| Centar plohe | Plavi krug | Sredinu plohe pod pokazivačem |
| Tačka vodilice | Siva | Tačku vodilice koju ostavlja mjerna traka |
| Ishodište | Oker | Mjesto gdje se sastaju crvena, zelena i plava osa |
| Na crvenoj osi / Na zelenoj osi / Na plavoj osi | Linija te boje | Liniju od početne tačke u tom pravcu |
| Paralelno s ivicom / Normalno na ivicu | Magenta linija | Liniju od početne tačke paralelnu ili normalnu na zapamćenu ivicu (vidi dolje) |
| Zaključano | Magenta linija | Pravac koji ste zaključali strelicom ili {{key:Shift}} |
| Na ivici | Crveni kvadrat | Bilo gdje duž ivice |
| Na vodilici | Siva | Bilo gdje duž vodeće linije |
| Na plohi | Plavi romb | Bilo gdje na plohi |
| Na ravni | nema | Ravan na kojoj ste počeli, kad je pokazivač nad praznim prostorom |
| Na tlu | nema | Tlo (crveno-zelena ravan), kad nema ničega drugog |

Kad linija ose iz vaše početne tačke siječe ivicu ili vodilicu, ModelCraft se hvata za presjek i vrh imenuje oba, npr. "Na crvenoj osi, na ivici".

## Koje hvatanje pobjeđuje

1. **Tačke** unutar otprilike 12 piksela: prvo krajnje tačke, zatim tačke vodilica, sredine, centar plohe pod pokazivačem i ishodište.
2. **Pravci** od početne tačke: crvena, zelena i plava osa, te paralelno ili normalno na zapamćenu ivicu.
3. **Na ivici** ili vodećoj liniji.
4. **Na plohi.**
5. **Ravan crtanja** ili tlo.

Stvari sakrivene iza plohe se nikad ne hvataju. Orbitirajte da vidite tačku koju želite.

## Crtanje na plohi iz tačke

{{ui:Rectangle}}, {{ui:Circle}} ili {{ui:Polygon}} započet na uglu, sredini, ivici ili centru plohe crta se **u ravni plohe pod pokazivačem** i siječe tu plohu. Ivica pripada dvjema plohama, pa odluku donosi strana ivice na kojoj je pokazivač: da nacrtate na kraju dugačke kutije, počnite od sredine jedne od njenih ivica, s pokazivačem odmah unutar krajnje plohe.

## Paralelno i normalno

ModelCraft pamti **posljednju ivicu preko koje je pokazivač prešao prije vašeg prvog klika**. Početak na uglu ili na ivici računa se kao prelazak preko te ivice. Kad alat radi, druge ivice preko kojih prelazite ne mijenjaju je.

Da nacrtate liniju paralelnu s postojećom ivicom:

1. Pritisnite {{key:L}} i pređite preko ivice koju želite uskladiti.
2. Pomjerite se do početne tačke, bez prelaženja preko drugih ivica ako možete, i kliknite.
3. Pomjerite se u pravcu paralelnom s tom ivicom. Linija postaje magenta, a vrh kaže "Parallel to edge". Normalno radi isto, u ravni na kojoj crtate.

Ako je zapamćena pogrešna ivica, pritisnite {{key:Esc}}, pređite preko prave ivice i počnite ponovo.

## Zaključajte pravac

Nakon prvog klika alata, sljedeću tačku možete držati na jednoj liniji:

| Taster | Zaključava na |
|---|---|
| {{key:Right}} | Crvena osa |
| {{key:Left}} | Zelena osa |
| {{key:Up}} | Plava osa (ravno gore) |
| {{key:Down}} | Paralelno sa zapamćenom ivicom (vidi gore) |

Pritisnite istu strelicu ponovo da otključate. Statusna traka kaže "Locked to the red axis. Press the same arrow to unlock."

Dok je zaključano, tačka klizi duž linije prema tome gdje je pokazivač i i dalje se poravnava s tačkama preko kojih prelazite: pređite preko ugla druge kutije da nacrtate liniju duž crvene ose tačno onoliko koliko je taj ugao.

**{{key:Shift}}** zaključava pravac na koji se trenutno hvatate (osu ili paralelno), dok ga držite. Pustite da otključate.

Zaključavanja rade u {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} i {{ui:Tape}}. Prije prvog klika, tasteri sa strelicama umjesto toga orbitiraju prikaz.

## Unutar grupe

Dok uređujete unutar grupe ili komponente, ose su vlastite ose grupe (pomjeraju se s njom i okreću se s njom ako je bila rotirana). Hvatanje i dalje nalazi tačke i ivice izvan grupe, pa možete poravnati stvari s ostatkom modela.
