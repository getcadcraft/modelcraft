---
title: Kocka pogleda
summary: Klikni na stranu, ivicu ili ugao kocke u uglu prikaza da gledaš odatle, prevuci je da orbitiraš, okreni prsten kompasa, zaokreni pogled oko pogleda spreda i vrati se na početak.
keywords: kocka pogleda, viewcube, kocka, kompas, sjever, početni pogled, standardni pogledi, gore, naprijed, desno, izometrija, ugao, ivica, orbita, okreni pogled, ikona osa, indikator ugla, navigacija
from: e1ec1347
---

Kocka pogleda nalazi se u gornjem desnom uglu 3D prikaza. Okreće se s pogledom, pa uvijek pokazuje kuda gledaš: {{ui:Gore}} je gore, {{ui:Naprijed}} je okrenuto prema jugu (gledaš prema sjeveru, duž zelene ose, kad je posmatraš), {{ui:Desno}} je okrenuto prema istoku (crvena osa). Ostaje providna dok na nju ne pokažeš.

## Gledaj sa strane, ivice ili ugla

1. Pokaži na kocku. Dio ispod pokazivača se osvijetli: sredina strane, ivica (osvijetli se na obje strane koje dijele) ili ugao (na sve tri strane).
2. Klikni na njega. Pogled se okreće da gleda odatle, zadržavajući istu sredinu i zum.

Ima 26 mjesta za klik: 6 strana ({{ui:Gore}}, {{ui:Dolje}}, {{ui:Naprijed}}, {{ui:Nazad}}, {{ui:Lijevo}}, {{ui:Desno}}), 12 ivica i 8 uglova. Ugao daje klasičan pogled na tri četvrtine; ivica izgleda na pola puta između dvije strane.

Klik na {{ui:Naprijed}} isto je kao {{ui:Pogledi}}, {{ui:Naprijed}} na alatnoj traci, bez uklapanja zuma. {{ui:Pogledi}} ipak zumira na cijeli model.

## Orbitiranje prevlačenjem kocke

Prevuci kocku da okreneš pogled, isto kao orbitiranje u samom prikazu. Prevlačenje se nikad ne shvata kao klik, pa kocku možeš uhvatiti bilo gdje.

## Prsten kompasa

Prsten ispod kocke nosi S, I, J i Z.

- **Prevuci prsten** da okreneš model oko vertikalne ose, kao da stoji na okretnom stolu. Prsten prati pokazivač.
- **Klikni slovo** da gledaš sa te strane, zadržavajući koliko strmo gledaš dolje. U pogledu ravno odozgo, slovo na koje klikneš ide na dno ekrana.

## Pogledi okrenuti licem: strelice

Kad gledaš ravno u stranu, male strelice se pojavljuju oko kocke:

- Četiri **trougla** dovode stranu s te strane naprijed: trougao iznad kocke pokazuje stranu koja je bila gore, i tako dalje.
- Dvije **zakrivljene strelice** u gornjem desnom uglu okreću sliku za četvrtinu okreta u smjeru kazaljke ili suprotno, bez promjene strane koju gledaš. Koristi ih da okreneš plan tako da duga zid ide preko ekrana.

## Početak

Dugme kuće u gornjem lijevom uglu kocke vraća na pogled na tri četvrtine {{ui:Izometrija}} i uklapa cijeli model. {{key:Home}} radi isto dok kocka ima fokus tastature.

## Tastaturom

{{key:Tab}} do kocke, zatim:

| Taster | Radi |
| --- | --- |
| {{key:left}} / {{key:right}} | bira stranu, ivicu ili ugao oko kocke, u koracima od osmine okreta (čitači ekrana kažu koje) |
| {{key:up}} / {{key:down}} | bira višu ili nižu, do {{ui:Gore}} ili dolje do {{ui:Dolje}} |
| {{key:Enter}} ili {{key:Space}} | gleda s izabranog |
| {{key:Shift+left}} / {{key:Shift+right}} | okreće pogled za četvrtinu okreta oko vertikalne ose |
| {{key:Home}} | početni pogled |
| {{key:Esc}} | napušta kocku |

Tasteri pritisnuti na kocki ostaju kod kocke: ne pokreću alate ModelCraft-a.

## Ikona osa ili ništa

Otvori {{ui:Postavke}} ({{key:Mod+,}}), karticu {{ui:ModelCraft}}, i postavi **Indikator ugla** na {{ui:Kocka pogleda}} (početno), {{ui:Ikona osa}} (mala oznaka X, Y, Z dolje lijevo: X crveno, Y zeleno, Z plavo) ili {{ui:Ništa}}. Ovaj preglednik pamti izbor. Vidi [Postavke ModelCraft-a](topic:settings#corner-indicator).

:::note
ModelCraft nema roll (rotaciju oko ose pogleda): osim u pogledima ravno odozgo i ravno odozdo, gore na ekranu je uvijek gore u modelu. Kocka i zakrivljene strelice mogu okrenuti pogled na plan; ne mogu nagnuti bočni pogled na ivicu.
:::
