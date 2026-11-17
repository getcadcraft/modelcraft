---
title: ViewCube
summary: Kliknite stranu, brid ili kut kocke u kutu prikaza da pogledate odatle, povucite je za orbitu, okrećite prsten kompasa, koristite poglede okomite na plohu i vratite se na početni prikaz.
keywords: view cube, viewcube, kocka, kompas, sjever, početni prikaz, standardni prikazi, gore, naprijed, desno, izometrija, kut, brid, orbita, zakretanje prikaza, ikona osi, indikator kuta, navigacija
from: e1ec1347
---

ViewCube je u gornjem desnom kutu 3D prikaza. Okreće se s prikazom pa uvijek pokazuje u kojem smjeru gledate: {{ui:Gore}} je gore, {{ui:Naprijed}} je okrenuto prema jugu (gledate prema sjeveru, duž zelene osi, kad ga gledate), {{ui:Desno}} je okrenuto prema istoku (crvena os). Dok na njega ne pokažete, ostaje prozirno.

## Gledanje sa strane, brida ili kuta

1. Pokažite na kocku. Dio ispod pokazivača se osvijetli: sredina plohe, brid (osvijetli se na obje plohe koje dijele) ili kut (na sve tri plohe).
2. Kliknite. Prikaz se okreće da gleda odatle, zadržavajući istu sredinu i zumiranje.

Ima 26 mjesta za klik: 6 ploha ({{ui:Gore}}, {{ui:Dolje}}, {{ui:Naprijed}}, {{ui:Straga}}, {{ui:Lijevo}}, {{ui:Desno}}), 12 bridova i 8 kutova. Kut daje klasični pogled u tri četvrtine; brid izgleda na pola puta između dviju ploha.

Klik na {{ui:Naprijed}} isto je kao {{ui:Pogledi}}, {{ui:Naprijed}} na alatnoj traci, bez zumiranja na cijeli prikaz. {{ui:Pogledi}} i dalje zumiraju na cijeli model.

## Orbita povlačenjem kocke

Povucite kocku da okrenete prikaz, isto kao orbitiranje u samom prikazu. Povlačenje se nikad ne shvaća kao klik, pa kocku možete uhvatiti bilo gdje.

## Prsten kompasa

Prsten ispod kocke nosi S, I, J i Z.

- **Povucite prsten** da okrenete model oko vertikalne osi, kao da stoji na okretnom stolu. Prsten prati pokazivač.
- **Kliknite slovo** da gledate s te strane, zadržavajući koliko strmo gledate dolje. U pogledu odozgo, slovo na koje kliknete ide na dno zaslona.

## Pogledi okomito na plohu: strelice

Kad gledate ravno u plohu, oko kocke se pojave male strelice:

- Četiri **trokuta** dovode plohu s te strane naprijed: trokut iznad kocke pokazuje plohu koja je bila na vrhu, i tako dalje.
- Dvije **zakrivljene strelice** u gornjem desnom kutu okreću sliku za četvrtinu okreta u smjeru kazaljke ili suprotno, bez promjene plohe koju gledate. Upotrijebite ih da okrenete tlocrt tako da dugi zid ide preko zaslona.

## Početni prikaz

Gumb kuće u gornjem lijevom kutu kocke vraća na tro četvrtinski prikaz {{ui:Izometrija}} i prilagođava cijeli model. {{key:Home}} radi isto dok kocka ima fokus tipkovnice.

## Tipkovnicom

Pritisnite {{key:Tab}} do kocke, zatim:

| Tipka | Radi |
|---|---|
| {{key:left}} / {{key:right}} | odabire stranu, brid ili kut oko kocke, u koracima od osmine okreta (čitači zaslona kažu koji) |
| {{key:up}} / {{key:down}} | odabire višu ili nižu, do {{ui:Gore}} ili dolje do {{ui:Dolje}} |
| {{key:Enter}} ili {{key:Space}} | gleda s odabranoga |
| {{key:Shift+left}} / {{key:Shift+right}} | okreće prikaz za četvrtinu okreta oko vertikalne osi |
| {{key:Home}} | početni prikaz |
| {{key:Esc}} | napušta kocku |

Tipke pritisnute na kocki ostaju na kocki: ne pokreću ModelCraft alate.

## Ikona osi ili ništa

Otvorite {{ui:Postavke}} ({{key:Mod+,}}), karticu {{ui:ModelCraft}}, i postavite **Indikator kuta** na {{ui:ViewCube}} (početno), {{ui:Ikona osi}} (mala oznaka X, Y, Z u donjem lijevom kutu: X crveno, Y zeleno, Z plavo) ili {{ui:Nema}}. Ovaj preglednik pamti izbor. Vidi [Postavke ModelCraft](topic:settings#corner-indicator).

:::note
ModelCraft nema zakretanje oko osi gledanja (roll): osim u pogledima ravno odozgo i ravno odozdo, gore na zaslonu je uvijek gore u modelu. Kocka i zakrivljene strelice mogu okrenuti pogled tlocrta; ne mogu bočni pogled nagnuti na rub.
:::
