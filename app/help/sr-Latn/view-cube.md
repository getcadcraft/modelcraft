---
title: Kocka pogleda
summary: Kliknite stranu, ivicu ili ugao kocke u uglu prikaza da biste gledali odatle, prevucite je da okrenete prikaz, okrenite prsten kompasa, obrnite pogled pravo na stranu i vratite se na početni pogled.
keywords: kocka pogleda, viewcube, kocka, kompas, sever, početni pogled, standardni pogledi, gore, spredaj, desno, iso, ugao, ivica, okretanje, okretanje pogleda, ikona osa, indikator ugla, navigacija
from: e1ec1347
---

Kocka pogleda nalazi se u gornjem desnom uglu 3D pogleda. Okreće se zajedno sa prikazom, pa uvek pokazuje u kom pravcu gledate: {{ui:Gore}} je gore, {{ui:Spredaj}} gleda na jug (kad na nju gledate, gledate na sever, duž zelene ose), {{ui:Desno}} gleda na istok (crvena osa). Ostaje prozirna dok na nju ne pokažete.

## Gledajte sa strane, ivice ili ugla

1. Pokažite na kocku. Deo ispod pokazivača se osvetli: sredina strane, ivica (osvetli obe strane koje deli) ili ugao (na sve tri strane).
2. Kliknite. Prikaz se okreće da gleda odatle, zadržavajući istu sredinu i zumiranje.

Ima 26 mesta na koja možete kliknuti: 6 strana ({{ui:Gore}}, {{ui:Dole}}, {{ui:Spredaj}}, {{ui:Pozadi}}, {{ui:Levo}}, {{ui:Desno}}), 12 ivica i 8 uglova. Ugao daje klasičan pogled pod tri četvrtine; ivica izgleda na pola puta između dve strane.

Klik na {{ui:Spredaj}} isto je kao {{ui:Pogledi}}, {{ui:Spredaj}} u alatnoj traci, bez uklapanja zumiranja. {{ui:Pogledi}} i dalje zumira na ceo model.

## Okrenite prikaz prevlačenjem kocke

Prevucite kocku da okrenete prikaz, isto kao orbitiranje u samom prikazu. Prevlačenje se nikad ne shvata kao klik, pa možete da je uhvatite bilo gde.

## Prsten kompasa

Prsten ispod kocke nosi S, I, J i Z.

- **Prevucite prsten** da okrenete model oko vertikalne ose, kao da stoji na okretnoj ploči. Prsten prati pokazivač.
- **Kliknite slovo** da gledate sa te strane, zadržavajući koliko strmo gledate nadole. U pogledu pravo odozgo, slovo na koje kliknete ide na dno ekrana.

## Pogledi na strane: strelice

Kad gledate pravo u stranu, oko kocke se pojave male strelice:

- Četiri **trouglića** dovode stranu na toj strani napred: trougao iznad kocke pokazuje stranu koja je bila gore, i tako dalje.
- Dve **zakrivljene strelice** gore desno okreću sliku za četvrtinu okreta u smeru kazaljke na satu ili suprotno, bez promene strane na koju gledate. Koristite ih da okrenete plan tako da dugačak zid ide preko ekrana.

## Početni pogled

Dugme kuće gore levo na kocki vraća na pogled pod tri četvrtine, {{ui:Izometrija}}, i uklapa ceo model. {{key:Home}} radi isto dok kocka ima fokus tastature.

## Tastaturom

{{key:Tab}} do kocke, zatim:

| Taster | Radi |
|---|---|
| {{key:left}} / {{key:right}} | bira stranu, ivicu ili ugao oko kocke, u koracima od osmine okreta (čitači ekrana kažu koji) |
| {{key:up}} / {{key:down}} | bira višu ili nižu, do {{ui:Gore}} ili dole do {{ui:Dole}} |
| {{key:Enter}} ili {{key:Space}} | gleda sa izabranog |
| {{key:Shift+left}} / {{key:Shift+right}} | okreće pogled za četvrtinu okreta oko vertikalne ose |
| {{key:Home}} | početni pogled |
| {{key:Esc}} | napušta kocku |

Tasteri pritisnuti na kocki ostaju kod kocke: ne pokreću alate ModelCraft-a.

## Ikona osa ili ništa umesto toga

Otvorite {{ui:Podešavanja}} ({{key:Mod+,}}), karticu {{ui:ModelCraft}}, i postavite **Indikator ugla** na {{ui:Kocka pogleda}} (početno), {{ui:Ikona osa}} (mali X, Y, Z marker dole levo: X crveno, Y zeleno, Z plavo) ili {{ui:Nijedan}}. Ovaj pregledač pamti izbor. Vidi [Podešavanja ModelCraft-a](topic:settings#corner-indicator).

:::note
ModelCraft nema valjanje: osim pogleda pravo odozgo i pravo odozdo, gore na ekranu je uvek gore u modelu. Kocka i zakrivljene strelice mogu da okrenu pogled odozgo; ne mogu da nagnu bočni pogled na ivicu.
:::
