---
title: Štartovacia knižnica
summary: Asi tridsať hotových objektov na umiestnenie do modelu: dvere a okná, nábytok, kuchyňa a kúpeľňa, stĺpy a schody, stromy, ľudia a auto.
keywords: zariadiť, zariadiť izbu, rozmiestnenie nábytku, spálňa, obývačka, kuchyňa, kúpeľňa, kancelária, vykreslenie, knižnica, štartovacia, okolie, stromy, ľudia, autá, rastliny, kry, živý plot, komponenty, nábytok, dvere, okno, stolička, stôl, pohovka, posteľ, kuchyňa, kúpeľňa, záchod, schody, stĺp, strom, osoba, auto, sklad, hotový
from: 3c06b69c
---

{{ui:Štartovacia knižnica}} vám poskytuje bežné objekty v skutočných veľkostiach, aby bol model čitateľný na prvý pohľad: dvere na ukázanie mierky miestnosti, auto na príjazdovej ceste, ľudia a stromy okolo budovy.

## Umiestnenie jedného objektu

1. V {{ui:Komponenty}} na ľavej strane kliknite na {{ui:Štartovacia knižnica}}.
2. Vyberte objekt, napríklad {{ui:Stolička}}.
3. Kliknite, kam má ísť.

Na podlahe, stole alebo na zemi stojí na nej. **Dvere a okná** sú urobené tak, aby sa umiestnili do múrov: kliknite na múr a stoja v ňom, otočené von. (Sedia na povrchu múru; neotvárajú otvor. Ak ho chcete vytvoriť, nakreslite na múr obdĺžnik tam, kde má byť okno, a vytlačte ho nástrojom {{ui:Tlač/ťah}} cez múr.)

Každý objekt je **komponent**: výber toho istého znova umiestni ďalšiu kópiu a každá kópia sa zmení, ak upravíte jednu. Zobrazuje sa aj v zozname {{ui:Komponenty}} s {{ui:Umiestniť}} na pridanie ďalších.

## Čo je v nej

| Skupina | Objekty |
|---|---|
| Dvere a okná | Dvere, dvojkrídlové dvere, okno, široké okno, garážové dvere |
| Nábytok | Jedálenský stôl, okrúhly stôl, stolička, barová stolička, pohovka, kreslo, dvojlôžková a jednolôžková posteľ, písací stôl, polica na knihy, šatníková skriňa |
| Kuchyňa a kúpeľňa | Spodná a horná skrinka, kuchynská linka, chladnička, sporák, drez, záchod, vaňa, sprcha, umývadlo |
| Stavba | Priame schodisko (15 stupňov po 18 cm), okrúhly a štvorcový stĺp, nosník |
| Lokalita a ľudia | Strom, ker, osoba (1.75 m), auto |
| Okolie: stromy, ľudia a autá | Listnaté stromy (4, 6 a 10 m), ihličnan, stĺpovitý strom, okrúhle a malé kry, živý plot, kvetináč, ľudia stojaci a kráčajúci, dieťa, sedan a SUV: okrúhlejšie tvary vo vlastných farbách, pre [vykreslené obrázky](topic:render) a situačné plány |

Sú to jednoduché tvary zložené z telies, ktoré môžete natrieť, zmeniť mierku alebo [zjedinečniť](topic:groups-components) a upraviť. Horná skrinka visí 1.45 m nad miestom, kde kliknete.

Okolie nakreslil CadCraft a je voľné na použitie na čokoľvek (CC0); rovnaké stromy, ľudia a autá sú v knižnici Library pre BimCraft a CadCraft. Okná auta sú natreté materiálom {{ui:Tónované sklo}}, takže sú na obrázkoch priehľadné.

## Zariadenie izby pre vykreslenie

Vyberte podlahu izby (jedna úrovňová plocha smerujúca nahor, v modeli alebo vnútri skupiny) a použite **Usporiadanie › Zariadiť izbu…** (tlačidlo **Zariadiť**). Vyberte, čo izba je — spálňa, obývačka, jedáleň, kuchyňa, kúpeľňa alebo kancelária — alebo nechajte, aby to odhadol podľa veľkosti. Štartovací nábytok ide k stenám od najdlhšej steny dookola, nič sa neprekrýva a priestor na otvorenie ľubovoľných štartovacích dverí umiestnených v stenách izby (a šírka jej okien, pred vysokými kusmi nábytku) zostáva voľný. Je to predvolené rozmiestnenie podľa pravidiel, ktoré si máte preskúmať, nie návrh: rovnaká izba vždy dostane rovnaké rozmiestnenie.

Všetko sa načíta do **jednej skupiny** so štítkom **Nábytok**, ako jeden krok späť: vráťte späť, zmažte skupinu alebo skryte štítok, aby ste ho odstránili. Kus, ktorý sa nezmestí, je pomenovaný v stavovom riadku a uvedený v **Problémoch** ako poznámka. **Zariadiť izbu** v BimCraft používa rovnaké pravidlá.
