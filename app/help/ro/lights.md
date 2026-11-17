---
title: Iluminarea unui model cu lămpi
summary: Puneți lămpi, reflectoare și panouri de lumină într-un model, ca imaginile randate să arate camerele noaptea sau interioarele luminate, cu umbre moi.
keywords: lumină, lumini, lampă, lămpi, iluminare, bec, lampă de tavan, reflector, spot încastrat, panou de lumină, lumină de suprafață, lumeni, luminozitate, temperatură de culoare, cald, noapte, interior, randare
from: c8d72cbc
---

Lămpile luminează [imaginile randate](topic:render). Ele nu schimbă vizualizarea 3D, unde fiecare lampă apare ca un mic semn în culoarea ei.

## Adăugarea unei lămpi

1. În secțiunea {{ui:Lumini}} din dreapta, faceți clic pe {{ui:Lampă}}, {{ui:Reflector}} sau {{ui:Panou de lumină}}.
2. Faceți clic unde trebuie să fie. Agățarea funcționează ca la desen.
   - Pe un tavan sau un perete, o **lampă** atârnă la 25 cm de suprafață, pe partea din care priviți; un **panou de lumină** stă pe suprafață și luminează în direcția opusă.
   - Un **reflector** cere două clicuri: unde se află, apoi ce luminează.

Noua lampă este selectată în {{ui:Lumini}}, gata de modificat.

## Modificarea unei lămpi

Faceți clic pe numele unei lămpi în {{ui:Lumini}}, sau pe semnul ei din vizualizare, cu {{ui:Selectare}}. Apoi:

| Setare | Ce face |
|---|---|
| {{ui:Luminozitate (lumeni)}} | Cât de multă lumină dă. Un bec de uz casnic are circa 800 lumeni; un panou puternic de tavan, 3000 |
| {{ui:Culoare}} | {{ui:Cald}} (un bec de casă), {{ui:Neutru}} sau {{ui:Lumină de zi}}, sau orice culoare |
| {{ui:Fascicul (grade)}} | Conul unui reflector, de la margine la margine |
| {{ui:Dimensiunea becului}}, {{ui:Lățime}}, {{ui:Adâncime}} | Becurile și panourile mai mari dau umbre mai moi |
| {{ui:Roșu (x)}}, {{ui:Verde (y)}}, {{ui:Înălțime}} | Unde se află |

Bifa de lângă numele unei lămpi o pornește sau o oprește. {{ui:Ștergeți lumina}} o elimină. Fiecare modificare este un singur pas: {{key:Ctrl+Z}} o anulează. Lămpile se salvează în fișierul `.modelcraft`.

## Imagini noaptea

În {{ui:Randare imagine…}}, bifați {{ui:Folosiți altă dată și oră pentru această imagine}} și alegeți o oră de seară. Cu soarele sub orizont, cerul devine întunecat și doar lămpile luminează modelul. Măriți {{ui:Luminozitate}} în caseta de dialog dacă imaginea este prea întunecată, sau adăugați lămpi.

:::tip
Pentru o cameră văzută din interior, puneți camera în interiorul ei (orbitați și măriți, sau folosiți o [scenă](topic:scenes)), adăugați o lampă pe tavan și faceți randarea noaptea. În modul {{ui:Rapid}}, colțurile departe de o lampă rămân mai întunecate decât într-o fotografie; [modul de calitate ridicată](topic:render#high-quality) lasă lumina să se reflecte de pe pereți.
:::
