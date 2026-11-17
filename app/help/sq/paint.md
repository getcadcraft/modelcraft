---
title: Lyej me ngjyra dhe materiale
summary: Jep sipërfaqeve, grupeve dhe komponentëve një ngjyrë të ngurtë ose një material si tulla, lamperi, mbulesa çatie ose dru, dhe mbaji kur eksportohen.
keywords: lyej, ngjyrë, ngjyra, material, materiale, tekstura, tulla, lamperi, mbulesë çatie, dru, gur, pllakë, beton, stuko, bar, zhavorr, xham, metal, kovë boje, mbush, mostër, pipetë, parazgjedhur, glb, obj, mtl, collada
from: b1500523
---

Ngjyrat të ndihmojnë të dallosh pjesët e një modeli, dhe **materialet** (tulla, lamperi, mbulesa çatie, dru, gur, pllakë, beton, stuko, bar, xham, metal) e bëjnë të duket si ajo nga çfarë është ndërtuar. Të dyja lyhen në të njëjtën mënyrë.

## Zgjidh një ngjyrë

Seksioni {{ui:Ngjyrat}} në të djathtë shfaq një rresht ngjyrash të ngurta, {{ui:Parazgjedhur}} (ai i kryqëzuar me një vijë: pa ngjyrë) dhe një mostër {{ui:+}} për çdo ngjyrë tjetër. Kliko një prej tyre për ta bërë ngjyrë aktuale. Mjeti Lyej nis me të.

## Lyej

1. Shtyp {{key:B}} ({{ui:Lyej}}), ose, kur nuk ka asgjë të zgjedhur, kliko një ngjyrë. (Kur ka diçka të zgjedhur, klikimi i një ngjyre lyen përzgjedhjen menjëherë.)
2. Kliko një sipërfaqe për ta lyer.
3. Kliko një grup ose një komponent për të lyer atë kopje: sipërfaqet e tij që nuk kanë ngjyrë të vetën marrin këtë ngjyrë. Sipërfaqet që ke lyer brenda tij i mbajnë të tyre.

Për të lyer disa gjëra njëherësh, zgjidhi së pari dhe pastaj kliko një ngjyrë, ose kliko çdo njërën prej tyre me {{ui:Lyej}}. Është një hap i vetëm zhbërjeje.

| Mbaj | Dhe kliko një sipërfaqe | Çfarë lyhet |
|---|---|---|
| — | | Atë sipërfaqe |
| {{key:Ctrl}} | | Çdo sipërfaqe e lidhur me të që ka të njëjtën ngjyrë |
| {{key:Shift}} | | Çdo sipërfaqe e asaj ngjyre në grupin me të cilin punon |
| {{key:Alt}} | | Asgjë: ti merr atë ngjyrë |

Për ta kthyer një sipërfaqe në pa ngjyrë, zgjidh {{ui:Parazgjedhur}} dhe kliko mbi të.

## Lyej me material

Seksioni {{ui:Materialet}}, nën {{ui:Ngjyrat}}, liston bibliotekën e materialeve sipas llojit: tulla dhe blloqe, lamperi, mbulesa çatie, dru, gur, pllakë, beton, stuko, tokë, xham dhe metal. Qëndro mbi një mostër për emrin e saj. Kliko një, pastaj lyej me të ashtu si me një ngjyrë: {{key:B}}, kliko sipërfaqe, grupe ose komponentë; ose zgjidh së pari dhe kliko materialin.

- Në stilin **Shaded** sipërfaqet shfaqin teksturën e materialit. Vijë e fshehur, tela dhe rreze X shfaqin ngjyrën e tij.
- Teksturat vizatohen **nivel përgjatë çdo sipërfaqeje** dhe **lart përgjatë saj**: radhët e tullave qëndrojnë nivel në çdo mur, shindrilat zbresin përgjatë pjerrësisë së një çatie, dërrasat në një dysheme ndjekin boshtin e kuq. Ato janë në madhësinë e tyre reale (një tullë është rreth 215 mm e gjatë), kështu që duken të sakta nga çdo distancë.
- Në një [foto e renderuar](topic:render) materialet mbajnë teksturën, rrugozitetin dhe, për xhamin dhe metalin, shkëlqimin e tyre.
- {{key:Alt}}-klikimi me {{ui:Lyej}} merr edhe materialin e një sipërfaqeje.

Teksturat vizatohen nga vetë ModelCraft, kështu që funksionojnë jashtë linje dhe janë falas për çdo përdorim (CC0).

## Komponentët dhe ngjyrat

Një ngjyrë e lyer mbi një sipërfaqe **brenda** një komponenti shfaqet në çdo kopje, sepse kopjet ndajnë një përkufizim të vetëm. Një ngjyrë e lyer mbi një **kopje** nga jashtë (me komponentin të mbyllur) i përket vetëm asaj kopjeje, kështu që dy kopje të një komponenti mund të kenë ngjyra të ndryshme. {{ui:Informacioni i entitetit}} shfaq ngjyrën e një sipërfaqeje, grupi ose komponenti të zgjedhur.

## Ngjyrat në skedarë

- Skedari ModelCraft mban çdo ngjyrë dhe çdo material.
- Formatet e tjera marrin **ngjyrën e materialit** (pamjen e tij nga larg) në vend të teksturës: glTF, Collada, OBJ, DWG dhe DXF, dhe kontrolli për printim 3D. Në glTF, Collada dhe OBJ materiali mban emrin e tij, si `Material_brick-red`.
- **glTF (.glb)** dhe **Collada (.dae)**: çdo ngjyrë bëhet një material. Një komponent i shfaqur me ngjyra të ndryshme shkruhet një herë për çdo ngjyrë. glTF shkruan gjithashtu teksturat e importuara si tekstura.
- **OBJ**: eksportimi shkarkon dy skedarë, `.obj` dhe një skedar materialesh `.mtl` me ngjyrat. Mbaji në të njëjtën dosje. Me tekstura të importuara, `.obj`, `.mtl` dhe imazhet vijnë si një `.zip` i vetëm.
- **DWG** mban ngjyrat e sakta; **DXF** përdor më të afërtën nga 255 ngjyrat standarde CAD.
- **STL** dhe **PLY** mbartin ngjyra: STL me konventën VisCAM / SolidView (programet që nuk e lexojnë e injorojnë), PLY si ngjyrë për çdo pikë. Shih [Formatet e skedarëve në detaj](topic:formats).

:::tip
Për të modeluar një ekran, lyej kornizën me ngjyrë qymyri dhe xhamin me blu pasi të [ofsetosh](topic:draw-faces) sipërfaqen e përparme.
:::
