---
title: Štýly a slnečné tiene
summary: Zobrazte model tieňovaný, ako skryté čiary, ako drôtený alebo priehľadný, a študujte tiene, ktoré vrhá, v ľubovoľný dátum, čas a miesto.
keywords: pohľad prezentácie, čistý pohľad, skryť vodiace čiary, skryť osi, štýl, tieňovaný, skrytá čiara, drôtený, röntgen, hrany, tiene, slnko, štúdia slnka, solárny, dátum, čas, zemepisná šírka, zemepisná dĺžka, časové pásmo, sever
from: 09c95329
---

Panel {{ui:Style}} vpravo mení spôsob, akým sa model kreslí. Nič v ňom nemení samotný model a nie je súčasťou krokov späť. Každá [scéna](topic:scenes) si pamätá vlastný štýl a súbor si zapamätá štýl, ktorý ste mali pri uložení.

## Plochy

Vyberte jeden v zozname {{ui:Plochy}}:

| Štýl | Vyzerá ako |
|---|---|
| {{ui:Tieňovaný}} | Plné plochy, jemne osvetlené. Plochy pozorované zozadu sú modrosivé. Zobrazia sa importované farby. |
| {{ui:Skrytá čiara}} | Plochy vo farbe pozadia s hranami v tuši: čistá čiarová kresba bez skrytých čiar. Biela na {{ui:Papier}}, tmavá na {{ui:Model}}. |
| {{ui:Drôtený}} | Iba hrany. Plochy sa nekreslia, ale pri kliknutí a prichytávaní sa počítajú: cez ne nemožno vybrať. |
| {{ui:Röntgen}} | Priehľadné plochy, aby ste videli, čo je za alebo vnútri. Ako pri drôtenom štýle, kliknutia a prichytenia sa zastavia na najbližšej ploche. |

{{ui:Zobraziť hrany}} zapína alebo vypína hrany vo všetkých štýloch okrem {{ui:Drôtený}}. Keď je vypnuté, {{ui:Skrytá čiara}} takmer nič nezobrazí, lebo jej plochy splývajú s pozadím. Mäkké hrany, napríklad boky vytiahnutej kružnice, sa nikdy nekreslia.

## Zapnutie tieňov od slnka

1. Zaškrtnite {{ui:Tiene od slnka}}. Nastavenia slnka pod ním sa aktivujú a model vrhá tiene sám na seba aj na zem.
2. Nastavte miesto:
   - {{ui:Zemepisná šírka}}: sever je kladný, juh záporný (New York je asi 40.7, Sydney asi -33.9).
   - {{ui:Zemepisná dĺžka}}: východ je kladný, západ záporný (New York je asi -74.0).
   - {{ui:Posun UTC}}: posun miesta od UTC v hodinách, napríklad `-5` pre New York v zime. ModelCraft neuplatňuje letný čas; pre New York v lete použite `-4`.
3. Nastavte {{ui:Dátum}} (mesiac a deň) a potiahnite posúvač {{ui:Čas}}. Čas sa mení po 15-minútových krokoch a zobrazuje sa vedľa posúvača, napríklad „3:00 pm“.

Riadok pod nastaveniami hovorí, kde je slnko, napríklad „Slnko 52° nad obzorom, 250° od severu. Sever je zelená os.“ V noci sa zobrazí „Slnko je v tomto čase pod obzorom.“

Nový model začína so slnkom 21. júna o 3:00 pm, na zemepisnej šírke 40, zemepisnej dĺžke -105 a s posunom UTC -7.

## Nasmerovanie modelu na sever

Sever v ModelCraft je vždy **zelená os**. Ak chcete študovať skutočné miesto, otočte model tak, aby jeho severná strana smerovala pozdĺž zelenej: vyberte všetko ({{key:Mod+A}}), stlačte {{key:Q}}, kliknite na stred na zemi a otočte ho o uhol miesta od severu (pozri [Otočenie a mierka](topic:rotate-scale)).

## Štúdia slnka

1. Nastavte miesto a dátum.
2. Pridajte scénu ({{ui:Pridať scénu}} v {{ui:Scény}}).
3. Posuňte posúvač času, potom pridajte ďalšiu scénu. Opakujte pre každú hodinu, ktorú chcete.
4. Kliknutím na {{ui:Prehrať}} prejdete scény. Pozri [Uloženie pohľadov ako scén](topic:scenes).

## Čo treba vedieť

- Tiene môžu pôsobiť zubato na veľmi veľkom modeli, lebo jedna mapa tieňov pokrýva celý model.
- Tiene sa v {{ui:Drôtený}} nekreslia.
- Poloha slnka sa počíta podľa solárneho výpočtu NOAA a je presná na zlomok stupňa, čo na štúdie objemov stačí. Lomy svetla v atmosfére sa ignorujú, takže veľmi nízke uhly slnka pri východe a západe môžu byť mierne nepresné.

## Prezentačný pohľad

{{ui:Pohľady}} › {{ui:Prezentačný pohľad}} (alebo {{key:Shift+P}}) zobrazí iba model: osi, vodiace čiary a vodiace body, obrysy rezných rovín (rez zostane), značky svetiel, rámik otvorenej skupiny, značky prichytenia a tipy a zvýraznenie výberu sa všetky skryjú. Použite ho na jasné pozeranie modelu alebo pred snímkou obrazovky. Nástroje fungujú aj naďalej a prichytávajú; značky len nevidíte. Stlačením {{key:Shift+P}} ich zobrazíte znova. Kóty zostanú, lebo sú súčasťou výkresu. Keď upravujete vnútri skupiny, zvyšok modelu sa už nezobrazuje vybledlý: zobrazí sa taký, aký je, aj s textúrami.
