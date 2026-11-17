---
title: Maľovanie farbami a materiálmi
summary: Dajte plochám, skupinám a komponentom jednofarebnú farbu alebo materiál ako tehla, obloženie, šindle alebo drevo a zachovajte ich pri exporte.
keywords: maľovať, farba, farby, materiál, materiály, textúra, textúry, tehla, obloženie, šindle, strešná krytina, drevo, kameň, dlažba, betón, omietka, tráva, štrk, sklo, kov, vedro farby, výplň, vzorka, kvapkadlo, predvolená, glb, obj, mtl, collada
from: b1500523
---

Farby pomáhajú rozlíšiť časti modelu a **materiály** (tehla, obloženie, strešná krytina, drevo, kameň, dlažba, betón, omietka, tráva, sklo, kov) dávajú modelu vzhľad toho, z čoho je postavený. Obe sa nanášajú rovnako.

## Výber farby

Časť {{ui:Farby}} vpravo ukazuje rad jednofarebných farieb, {{ui:Predvolená}} (tá prečiarknutá čiarou: žiadna farba) a vzorku {{ui:+}} pre ľubovoľnú inú farbu. Kliknutím na jednu ju nastavíte ako aktuálnu farbu. Nástroj Farba začína s ňou.

## Maľovanie

1. Stlačte {{key:B}} ({{ui:Farba}}), alebo, keď nič nie je vybrané, kliknite na farbu. (Keď je niečo vybrané, kliknutie na farbu hneď natrie výber.)
2. Kliknutím na plochu ju natriete.
3. Kliknutím na skupinu alebo komponent natriete túto kópiu: jej plochy, ktoré nemajú vlastnú farbu, prevezmú túto farbu. Plochy, ktoré ste v nej natreli, si svoju farbu ponechajú.

Ak chcete natrieť viac vecí naraz, najprv ich vyberte a potom kliknite na farbu, alebo kliknite na ktorúkoľvek z nich s {{ui:Farba}}. Je to jeden krok späť.

| Podržte | A kliknite na plochu | Čo sa natrie |
|---|---|---|
| — | | Táto plocha |
| {{key:Ctrl}} | | Každá plocha s rovnakou farbou, ktorá s ňou súvisí |
| {{key:Shift}} | | Každá plocha tej farby v skupine, v ktorej pracujete |
| {{key:Alt}} | | Nič: namiesto toho prevezmete túto farbu |

Plochu vrátite na žiadnu farbu tak, že vyberiete {{ui:Predvolená}} a kliknete na ňu.

## Maľovanie materiálom

Časť {{ui:Materiály}} pod {{ui:Farby}} vypisuje knižnicu materiálov podľa druhu: tehla a tvárnice, obloženie, strešná krytina, drevo, kameň, dlažba, betón, omietka, terén, sklo a kov. Podržte ukazovateľ nad vzorkou, aby ste videli jej názov. Kliknite na jednu, potom maľujte presne ako farbou: {{key:B}}, kliknite na plochy, skupiny alebo komponenty; alebo najprv vyberte a potom kliknite na materiál.

- V štýle **Tieňovaný** plochy ukazujú textúru materiálu. Skrytá čiara, drôtený model a röntgen ukazujú jeho farbu.
- Textúry bežia **vodorovne pozdĺž každej plochy** a **nahor po nej**: rady tehál zostávajú vodorovné na každej stene, šindle idú po sklone strechy, dosky na podlahe sa riadia červenou osou. Majú svoju skutočnú veľkosť (tehla má asi 215 mm na dĺžku), takže vyzerajú správne z ľubovoľnej vzdialenosti.
- V [vykreslenom obrázku](topic:render) materiály zachovávajú svoju textúru, drsnosť a pri skle a kove aj lesk.
- {{key:Alt}}-kliknutie s {{ui:Farba}} prevezme aj materiál plochy.

Textúry kreslí samotný ModelCraft, takže fungujú offline a sú voľne použiteľné na čokoľvek (CC0).

## Komponenty a farby

Farba natretá na plochu **vnútri** komponentu sa zobrazí na každej kópii, pretože kópie zdieľajú jednu definíciu. Farba natretá na **kópiu** zvonka (keď je komponent zatvorený) patrí len tejto kópii, takže dve kópie jedného komponentu môžu mať rôzne farby. {{ui:Informácie o entite}} zobrazí farbu vybranej plochy, skupiny alebo komponentu.

## Farby v súboroch

- Súbor ModelCraft uchováva každú farbu a každý materiál.
- Ostatné formáty dostanú **farbu materiálu** (jeho vzhľad z diaľky) namiesto textúry: glTF, Collada, OBJ, DWG a DXF a kontrola 3D tlače. V glTF, Collada a OBJ si materiál zachová svoj názov, napríklad `Material_brick-red`.
- **glTF (.glb)** a **Collada (.dae)**: každá farba sa stane materiálom. Komponent zobrazený v rôznych farbách sa zapíše raz pre každú farbu. glTF tiež zapisuje importované textúry ako textúry.
- **OBJ**: export stiahne dva súbory, `.obj` a `.mtl` s materiálmi a farbami. Uložte ich do toho istého priečinka. S importovanými textúrami prídu `.obj`, `.mtl` a obrázky ako jeden `.zip`.
- **DWG** uchováva presné farby; **DXF** použije najbližšiu z 255 štandardných CAD farieb.
- **STL** a **PLY** nesú farby: STL v konvencii VisCAM / SolidView (programy, ktoré ju nečítajú, ju ignorujú), PLY ako farbu každého bodu. Pozri [Formáty súborov podrobne](topic:formats).

:::tip
Ak chcete namodelovať obrazovku, natrite rám antracitovou a sklo modrou farbou po tom, ako [odsadíte](topic:draw-faces) prednú plochu.
:::
