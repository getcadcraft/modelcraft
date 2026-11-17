---
title: Podpery, hrúbka stien, vydlabanie a oprava
summary: Zistite, kde tlač potrebuje podpery a približne koľko, nájdite steny príliš tenké na tlač, vydlabte model na zvolenú hrúbku steny s odtokovými otvormi a opravte sieť so všetkými opravami v zozname.
keywords: 3D tlač, podpery, náhľad podpier, previs, stromové podpery, stĺpové podpery, hrúbka stien, tenké steny, príliš tenké, dýza, vydlabanie, vydlabať, škrupina, odtokový otvor, živica, oprava, oprava siete, neuzavreté, prevrátené plochy, diery, malé časti, samoprienik, prekrytie, spojiť
from: 286bde26
---

Štyri nástroje na prípravu modelu na 3D tlačiareň. Otvorte {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}; na riadku **Nástroje na tlač** v dialógu sú {{ui:Náhľad podpier}}, {{ui:Hrúbka stien}}, {{ui:Vydlabať}} a {{ui:Oprava}}. Každý sa otvorí ako karta nad zobrazením; {{ui:Zavrieť}} (krížik) ju aj s jej značkami odstráni. Naraz sa zobrazuje jedna karta.

Každý nástroj pracuje na tom, čo sa vytlačí: na výbere, alebo na všetkom zobrazenom, keď nič nie je vybrané. {{ui:Vydlabať}} a {{ui:Oprava}} potrebujú vybranú jednu skupinu, komponent alebo sieť, pretože ju menia.

## Náhľad podpier

Plochy, ktoré sa od zvislej polohy vychyľujú viac ako **uhol previsu**, sú sfarbené na červeno a z nich sa k podložke, alebo k časti modelu pod nimi, kreslia jednoduché podpery (oranžovo).

- **Uhol previsu**: 45° je to, čo väčšina tlačiarní zvládne bez podpery. Zvýšte ho pre tlačiareň, ktorá dobre premosťuje.
- **Stĺpce**: rovný stĺpec každé 3 mm pod každým previsom. Odhad ich počíta ako vzor podpery 15 %.
- **Strom**: blízke body sa spájajú do jedného kmeňa pod ich stredom; žiadna vetva sa nenakláňa viac ako o 45°. Stromy zvyčajne potrebujú menej materiálu a dotýkajú sa podložky na menej miestach.

Karta povie, akú plochu treba podoprieť, koľko je bodov podpier a približne koľko materiálu zaberú. Podpery stojace na modeli (nie na podložke) sa počítajú: zanechávajú tam stopy. Ak je v {{ui:Nastavenia}} vybratá podložka tlačiarne, podložka sa nakreslí pod model.

:::note
Toto je náhľad, nie slicer: skutočné podpery určí váš slicer. Pri veľmi veľkom previse sú body podpier rozložené širšie, aby náhľad zostal rýchly; karta to povie.
:::

## Hrúbka stien

Každá plocha sa meria priamo cez teleso na druhú stranu. Steny pod **najtenšou povolenou stenou** sú červené a steny pod jeden a pol násobku sú oranžové: vytlačia sa, ale môžu vyjsť slabé.

Tenké oblasti sú vypísané, najtenšie prvé, s uvedením, aké tenké a aké veľké je každá. {{ui:Zobrazenie}} otočí kameru k nej.

Tlačiareň nevytvorí stenu tenšiu ako približne dve šírky svojej dýzy: 0.8 mm pri bežnej dýze 0.4 mm (východzia hodnota). Tlačiarne so živicou zvládnu menej; pozrite si návod k tlačiarni.

Pri veľmi veľkom modeli len niektoré plochy vysielajú lúč a ostatné preberajú hrúbku svojich susedov; karta povie, koľko ich bolo odmerané.

## Vydlabanie

Vydlabanie ponechá vonkajšok taký, aký je, a vyberie vnútro, takže steny zostanú také hrubé, ako požadujete. Tlač so živicou spotrebuje menej živice a menej ťahá za tlačovú podložku; tlač z vlákna spotrebuje menej plastu, než by spotrebovala výplň.

1. Vyberte skupinu, komponent alebo sieť a potom otvorte {{ui:Vydlabať}}.
2. Nastavte **stenu** (na začiatku 2 mm) a šírku **odtokových otvorov**.
3. Pri tlači so živicou kliknite na {{ui:Umiestniť odtokový otvor}} a potom kliknite na vonkajšok modelu tam, kde má byť: nízko, pri tlačovej podložke, aby tekutá živica vytiekla. Umiestnite toľko, koľko potrebujete; každý sa zobrazí ako modrý kruh a je uvedený v zozname s {{ui:Odstrániť}}.
4. {{ui:Náhľad}} povie, koľko materiálu vydlabanie odoberie.
5. {{ui:Vydlabať ho}} vykoná zmenu: jeden krok, ktorý {{key:Mod+Z}} vráti späť.

Výsledkom je jedno uzavreté teleso, ktoré kontrola pre 3D tlač prijme: ModelCraft ho najskôr skontroluje a nič nezmení, ak by neprešlo. Tam, kde je model tenší než dve steny, zostane plný. Výsledkom je skupina, ktorej rovné strany sú jednotlivé plochy, takže ju môžete ďalej modelovať pomocou {{ui:Tlač/ťah}}; zakrivená časť vydlabaná na jemnej mriežke má zvyčajne na to príliš veľa plôch a namiesto toho sa stane sieťou; riadok stavu povie, ktorá.

:::tip
Pri väčšine tvarov je vnútro vonkajšok posunutý dovnútra presne o hrúbku steny. Tam, kde to nie je možné kvôli rohom alebo tenkým častiam, ModelCraft namiesto toho sleduje vonkajšok vo vzdialenosti steny na jemnej mriežke; karta potom povie, ako presne (na zlomok milimetra).
:::

## Oprava

{{ui:Oprava}} prezrie vybratú časť tak, ako ju prezrie slicer tlačiarne, bezpečne opraví, čo sa dá, a uvedie každú opravu:

| Opraví | Čo to znamená |
|---|---|
| Trojuholníky bez plochy | vynechajú sa |
| Trojuholník nakreslený dvakrát | ponechá sa jedna kópia; plocha nakreslená chrbtom k sebe sama (bez hrúbky) sa odstráni |
| Voľné časti pod 0.5 mm | odstránia sa |
| Trojuholníky otočené zlým smerom | otočia sa podľa susedov |
| Diery, rovné alebo nie | uzavrú sa vejárom nových trojuholníkov zo stredu každej diery |
| Časť naopak | otočí sa von (dutina vnútri inej časti sa ponechá, pretože má smerovať dovnútra) |

{{ui:Opraviť bezpečné}} urobí všetky v jednom kroku, ktorý {{key:Mod+Z}} vráti späť, a riadok stavu vypíše každú opravu. Opravená časť sa stane skupinou, ktorej rovné strany sú jednotlivé plochy. Ak sa stále neuzavrie (zostáva niečo pod **Ponechané pre vás**), alebo by mala na skupinu príliš veľa plôch, stane sa namiesto toho sieťou: jej plochy zostanú trojuholníkmi a rovné strany budú stále vyzerať rovné. Riadok stavu povie, ktorá. {{ui:Spojiť prekrývajúce sa kusy}} funguje rovnako.

Čo sa nedá bezpečne opraviť, je uvedené pod **Ponechané pre vás** a označené fialovo v zobrazení, s {{ui:Zobrazenie}}:

- **Hrany, kde sa stretáva tri alebo viac plôch**: rozhodnite, ktorá plocha patrí, a ostatné zmažte.
- **Časť prechádzajúca sama sebou**: presuňte alebo prekreslite túto časť. Pozrite [Prienik plôch](topic:intersect).
- **Diery príliš veľké alebo príliš zamotané na uzavretie**: nakreslite cez ne plochy.
- **Samostatné kusy, ktoré sa prekrývajú**: slicery ich aj tak spoja. {{ui:Spojiť prekrývajúce sa kusy}} z nich urobí jedno uzavreté teleso (prestavia plochy tam, kde sa stretávajú, preto je to samostatné tlačidlo, nikdy sa nevykonáva za vás).

Pre skupiny tlače/ťahu môžete opravovať aj jednu po druhej v {{ui:Informácie o entite}} › {{ui:Zobraziť problémy}} / {{ui:Opraviť}}, čím sa zachovajú plochy, ktoré ste nakreslili. Pozrite [Nástroje telies](topic:solids).

Súvisiace: [Pripravte model na 3D tlač](topic:print-3d) · [Štýl Začiatočník](topic:beginner) · [Ešte nie je hotové](topic:not-built-yet#3d-printing)
