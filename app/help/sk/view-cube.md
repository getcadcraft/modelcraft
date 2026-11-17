---
title: Kocka pohľadov
summary: Kliknite na stenu, hranu alebo roh kocky v rohu pohľadu, aby ste sa pozreli odtiaľ; potiahnite ju na obiehanie, otočte kruh kompasu, prejdite okolo pohľadu zoči-voči a vráťte sa domov.
keywords: kocka pohľadov, viewcube, kocka, kompas, sever, domovský pohľad, štandardné pohľady, zhora, spredu, sprava, izo, roh, hrana, obiehanie, otáčanie pohľadu, ikona osí, indikátor rohu, navigácia
from: e1ec1347
---

Kocka pohľadov je v pravom hornom rohu 3D pohľadu. Otáča sa spolu s pohľadom, takže vždy ukazuje, kam sa pozeráte: {{ui:Zhora}} je hore, stena {{ui:Spredu}} smeruje na juh (keď sa na ňu pozeráte, hľadíte na sever, pozdĺž zelenej osi), stena {{ui:Sprava}} smeruje na východ (červená os). Kým na ňu neukážete, zostáva priehľadná.

## Pohľad zo strany, z hrany alebo z rohu

1. Ukážte na kocku. Časť pod ukazovateľom sa rozsvieti: stred steny, hrana (rozsvieti sa na oboch stenách, ktoré zdieľa), alebo roh (na všetkých troch stenách).
2. Kliknite na ňu. Pohľad sa otočí tak, aby sa pozeral odtiaľ, pri zachovaní rovnakého stredu a priblíženia.

Je 26 miest, kam kliknúť: 6 stien ({{ui:Zhora}}, {{ui:Zdola}}, {{ui:Spredu}}, {{ui:Zozadu}}, {{ui:Zľava}}, {{ui:Sprava}}), 12 hrán a 8 rohov. Roh dáva klasický trojštvrťový pohľad; hrana vyzerá napoly medzi dvoma stenami.

Kliknutie na {{ui:Spredu}} je to isté ako {{ui:Pohľady}}, {{ui:Spredu}} na paneli nástrojov, bez prispôsobenia priblíženia. {{ui:Pohľady}} stále priblíži na celý model.

## Obiehanie ťahaním kocky

Potiahnutím kocky otočíte pohľad, rovnako ako obiehaním priamo v pohľade. Ťah sa nikdy nepovažuje za klik, takže kocku môžete uchopiť kdekoľvek.

## Kruh kompasu

Kruh pod kockou nesie písmená S, V, J a Z.

- **Potiahnite kruh**, aby sa model otočil okolo zvislej osi, ako keby stál na otočnom stole. Kruh sleduje ukazovateľ.
- **Kliknite na písmeno**, aby ste sa pozreli z tej strany, pričom zachováte, ako strmo sa pozeráte nadol. Pri pohľade priamo zhora ide písmeno, na ktoré kliknete, na spodok obrazovky.

## Pohľady kolmo na stenu: šípky

Keď sa pozeráte priamo na stenu, okolo kocky sa objavia malé šípky:

- Štyri **trojuholníky** prinesú stenu na tej strane do popredia: trojuholník nad kockou ukazuje stenu, ktorá bola hore, a tak ďalej.
- Dve **zakrivené šípky** vpravo hore otočia obrázok o štvrť otáčky v smere alebo proti smeru hodinových ručičiek, bez zmeny steny, na ktorú sa pozeráte. Použite ich, aby sa pôdorys otočil tak, že dlhá stena ide cez obrazovku.

## Domov

Tlačidlo domu vľavo hore na kocke sa vráti do trojštvrťového pohľadu {{ui:Izo}} a zmestí celý model. {{key:Home}} robí to isté, keď má kocka klávesový focus.

## Klávesnicou

{{key:Tab}} na kocku, potom:

| Klávesa | Robí |
|---|---|
| {{key:left}} / {{key:right}} | vyberie stranu, hranu alebo roh okolo kocky, v krokoch po osmine otáčky (čítačky obrazovky povedia, ktorý) |
| {{key:up}} / {{key:down}} | vyberie vyššiu alebo nižšiu, až po {{ui:Zhora}} alebo dole po {{ui:Zdola}} |
| {{key:Enter}} alebo {{key:Space}} | pozrie sa z vybranej |
| {{key:Shift+left}} / {{key:Shift+right}} | otočí pohľad o štvrť otáčky okolo zvislej osi |
| {{key:Home}} | domovský pohľad |
| {{key:Esc}} | opustí kocku |

Klávesy stlačené na kocke zostávajú pri kocke: nespúšťajú nástroje ModelCraft.

## Ikona osí alebo nič namiesto toho

Otvorte {{ui:Nastavenia}} ({{key:Mod+,}}), kartu {{ui:ModelCraft}}, a nastavte **Indikátor rohu** na {{ui:Kocka pohľadov}} (predvolená hodnota), {{ui:Ikona osí}} (malá značka X, Y, Z vľavo dole: X červená, Y zelená, Z modrá) alebo {{ui:Žiadny}}. Tento prehliadač si voľbu pamätá. Pozri [Nastavenia ModelCraft](topic:settings#corner-indicator).

:::note
ModelCraft nemá náklon (roll): mimo pohľadov priamo zhora a priamo zdola je hore na obrazovke vždy hore v modeli. Kocka a zakrivené šípky dokážu otočiť pôdorys; bočný pohľad nedokážu prevrátiť na hranu.
:::
