---
title: Rozloženie UV súradníc siete
summary: Označte švy, rozviňte, premietnite a zbaľte UV súradnice siete v pracovnom priestore UV a skontrolujte ich šachovnicou a farbami natiahnutia.
keywords: uv, uvs, rozvinúť, rozvinutie, šev, švy, textúra, súradnice textúry, atlas, zbaliť, zbaľovanie, ostrov, ostrovy, šachovnica, natiahnutie, skreslenie, projekcia kvádra, projekcia valca, projekcia gule, konformné, podľa uhlov, lscm, abf
from: 00028f20
---

Textúra je plochý obrázok; sieť plochá nie je. Jej **UV** súradnice určujú, kde každý roh každej plochy leží na obrázku. Pracovný priestor UV ich vytvára: sieť rozrežete pozdĺž **švov**, položíte kúsky naplocho (**rozvinúť**) a zmestíte ich do štvorca (**zbaliť**).

## Otvorenie

Vyberte sieť a v zozname {{ui:Pracovný priestor}} zvoľte {{ui:UV}}. Skupina alebo komponent sa najprv zmení na sieť, ako v pracovnom priestore {{ui:Sieť}}. 3D pohľad sa presunie do ľavej polovice; **editor UV** vpravo zobrazuje plochy siete rozložené na štvorci textúry. Výber funguje ako v pracovnom priestore {{ui:Sieť}} a to, čo vyberiete v jednom pohľade, je vybrané aj v druhom.

## Označenie švov

Švy sú miesta, kde sa sieť môže rozrezať; v oboch pohľadoch sú červené.

- Vyberte hrany ({{ui:Hrana}}, alebo {{key:2}}) a stlačte {{ui:Označiť šev}} ({{key:Ctrl+E}}). {{ui:Vymazať šev}} ({{key:Ctrl+Shift+E}}) ich zruší.
- {{ui:Švy na ostrých}} označí každú ostrú hranu a každú hranu, kde sa plochy stretávajú pod uhlom väčším ako 60°: kváder sa rozpadne na svojich šesť strán.
- {{ui:Švy z UV}} označí švy tam, kde sa UV už zlomia, napríklad po projekcii.

Uzavretý kus potrebuje švy, aby ležal naplocho: guľa potrebuje aspoň jeden rez, rúra rez pozdĺž svojej dĺžky.

## Rozvinutie

Vyberte plochy, ktoré chcete rozložiť (alebo nič, pre celú sieť), a stlačte {{ui:Rozvinúť}} ({{key:U}}). Každý kus medzi švami sa položí naplocho, pričom si uhly čo najlepšie zachová (vyrovnávanie podľa uhlov), potom sa kusy zbalia do štvorca. {{ui:Konformné}} rozvinie metódou konformných zobrazení najmenších štvorcov: rýchlejšie, ale o niečo menej verne pri silno zakrivených kusoch. Tvar, ktorý sa dá vyrobiť z plochého plechu, napríklad plášť valca rezaný raz, sa rozvinie bez akéhokoľvek natiahnutia.

## Projekcia

Pri jednoduchých tvaroch často stačí projekcia:

| Projekcia | Čo robí |
| --- | --- |
| {{ui:Kváder}} | Každá plocha na stranu kvádra, ku ktorej je najviac otočená |
| {{ui:Valec}} | Okolo modrej osi: do šírky je uhol okolo, do výšky výška |
| {{ui:Guľa}} | Zo stredu: do šírky je uhol okolo, do výšky zemepisná šírka |
| {{ui:Z pohľadu}} | Tak, ako sú plochy teraz vidieť v 3D pohľade |

Plocha cez spoj valca alebo gule ostane v jednom kuse, takže jej UV môžu trochu prečnievať za pravý okraj štvorca; textúra sa tam opakuje.

## Úpravy rozloženia

- {{ui:Zbaliť}} vloží kusy (ostrovy) do štvorca pri jednej veľkosti texelu, každý otočený tak, aby zabral čo najmenej miesta. Panel nastavuje medzeru medzi nimi.
- {{ui:Otočiť o 90°}} a {{ui:Zrkadliť}} otočia alebo zrkadlia UV vybraných plôch.
- V editore UV potiahnite vybranú plochu, aby ste presunuli UV výberu, alebo ukážte do editora a stlačte {{key:R}} alebo {{key:S}}, potom pohnite myšou, aby ste ich otočili alebo zmenili mierku (klik ponechá zmenu, {{key:Esc}} ju zruší). {{key:G}} presúva bez ťahania. Dvojklik na plochu (alebo {{key:L}}) vyberie celý jej ostrov. Koliesko zväčšuje; ťahanie prostredným alebo pravým tlačidlom posúva; {{key:F}} znova prispôsobí štvorec.

Každá zmena je jeden krok späť.

## Kontrola

- {{ui:Šachovnica}} zobrazí na sieti označenú šachovnicu podľa jej UV: rovnomerné, štvorcové polia znamenajú, že textúra leží rovnomerne; popisky ukazujú, ktorým smerom beží.
- {{ui:Natiahnutie}} sfarbí každú plochu podľa toho, koľko ju UV natiahnu: modrá žiadne, cez zelenú, až po červenú veľa. Panel volí, či sa meria **ohnutie uhlov** alebo **zmena veľkosti**, a ukazuje priemer.

Pozri aj [Úprava siete](topic:mesh-edit), [Siete](topic:meshes) a [Modifikátory na sieti](topic:modifiers).
