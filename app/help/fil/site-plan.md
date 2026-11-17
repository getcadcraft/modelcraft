---
title: Mag-model sa site plan mula sa DWG o DXF
summary: Dalhin ang CAD site o floor plan bilang mga linya sa lupa, sagutin ang tanong tungkol sa unit, at i-trace ito sa mga face at mass.
keywords: site plan, dwg, dxf, cad, import, sketch, larawan ng sketch, hand sketch, napkin sketch, photo, papel, kulay ng panulat, dynamic blocks, visibility states, text, hatch, spline, ellipse, 3d face, trace, floor plan, lot, property line, units, underlay, konteksto
from: 3415dc96
---

Maaaring dalhin ng ModelCraft ang mga linya ng 2D CAD drawing, site plan o floor plan, at ilatag ang mga ito sa lupa para makapag-model ka sa ibabaw nito.

## I-import ang drawing

1. I-click ang {{ui:Import}} sa grupong {{ui:File}} (o i-drop ang file sa 3D view).
2. Pumili ng file na `.dwg` o `.dxf`.

   Tumatagal nang kaunti ang malaking DWG: sinasabi ng status bar ang "Reading plan.dwg…" hanggang sa makapasok ito.

3. Kung hindi sinasabi ng drawing kung ano ang mga unit nito, magtatanong ang dialog na pinamagatang "Mga unit ng drawing": "Ano ang isang unit ng drawing?" Pumili ng {{ui:Inches}}, {{ui:Feet}}, {{ui:Millimeters}} o {{ui:Meters}}. Karamihan sa US site plan ay nakaguhit sa feet, ang architectural plan sa inches, at ang metric na plano sa millimeters.

   Dumarating ang drawing bilang isang group ng edge sa lupa, napili, at nagzu-zoom ang view dito. Sinasabi ng status bar kung ilang edge ang dumating, halimbawa: "Naimport ang site.dwg: 1697 na edge sa lupa, sa isang group. I-{{ui:Explode}} ito para direktang makaguhit dito."

## Ano ang dumarating

- Mga linya, polyline (kasama ang kanilang mga arko), bilog at arko, at block kasama ang lahat ng nasa loob, mula sa **model space** lamang. Ang mga kurba ay nagiging maiikling tuwid na piraso.
- Ang mga linya, polyline, arko, bilog, ellipse at spline ay dumadapo nang patag sa lupa, bilang mga edge.
- Ang **Hatches** ay nagiging face sa lupa, na ang mga isla ay nagiging butas, kaya maaari mong i-push/pull agad ang nahatch na lugar.
- Ang **3D face** at solid fill ay nagiging face; pinananatili ng 3D face ang kanilang taas.
- Ang **Text** (single-line text, multiline text at attribute value) ay iginuguhit bilang mga edge sa simpleng single-stroke na lettering, sa sarili nitong taas, anggulo at alignment. Hindi ang font ng drawing ang gamit, kaya maaaring medyo mas mahaba o mas maikli ang mga salita. Ang mga karakter na walang hugis sa lettering ay iginuguhit bilang maliliit na kahon at binibilang.
- Ang **Dimensions** ay iginuguhit gaya ng ipinapakita ng drawing (ang kanilang mga linya, arrowhead at text, bilang mga edge at face).
- Ang **Dynamic blocks** ay dumarating gaya ng ipinapakita ng drawing: bawat nakalagay na block sa visibility state na kung saan ito na-save, at ang mga linya lamang ng state na iyon. Inililista ng status bar ang mga ito kasama ang state na ipinapakita at ang iba pang state ng bawat isa, halimbawa "Receptacle shown as Duplex ×38, GFI ×7 (states: Duplex, GFI)". Hindi nagpapalit ng state ang ModelCraft.
- Ang **3D solids, regions at bodies** (ACIS data ng drawing) ay dumarating bilang sariling group: ang saradong solid bilang solid, ang region o bukas na body bilang mga face. Buo ang pagdating ng mga patag na face; ang mga kurbadong face (silindro, kono, sphere, torus, simpleng spline surface) ay dumarating bilang maliliit na triangle na may malambot na gilid sa pagitan, kaya tanging ang sariling mga gilid ng solid ang lumalabas. Ang face sa ibang uri ng surface ay naiiwan at nakalista: "Hindi pa naiguguhit (3D solids): …".
- Hindi naiimport: point, table, multileader, larawan at iba pang uri ng object. Inililista ng status bar ang mga ito ayon sa uri, gaya ng "Hindi naiimport: 12 POINT." Ang anumang nasa layout (paper space) ay naiiwan din, nang hindi nililista.
- Hindi pinananatili ang mga layer: magkakapareho ang dating ng lahat ng linya.

Kung malayo ang drawing sa origin nito (halimbawa, state plane coordinates), maiimport pa rin ito, pero maaaring mapunta ito nang malayo sa origin ng ModelCraft. Tinatanggihan ang mga drawing na lumalayo nang higit sa 10,000 km mula sa origin nila: ilapit muna ang drawing sa 0,0 sa CAD program.

## I-trace ito sa mga face

Bihirang magsara nang maayos ang mga naimport na linya sa sarili nilang mga face. Dalawang paraan ng pagtatrabaho:

**Panatilihin ang plano bilang underlay (inirerekomenda)**

1. Iwanang sariling group ang plano.
2. Gumuhit ng gusali mo sa ibabaw nito gamit ang {{ui:Rectangle}} at {{ui:Line}}, nagsasnap sa mga sulok ng plano ("Endpoint") at sa mga gilid nito ("On edge").
3. I-push/pull ang mga face mo pataas. Nananatiling hindi nagagalaw ang plano sa ilalim, at maaari mong burahin ang buong group sa isang click sa susunod.

Gumagana ang snapping sa pagitan ng mga group: maaari kang mag-snap sa mga sulok ng plano nang hindi ito binubuksan.

**Gumuhit sa sariling linya ng plano**

1. Piliin ang plan group at i-click ang {{ui:Explode}}. Nagiging maluwag na edge ang mga linya nito.
2. Kung saan dapat maging face ang isang sarado na outline, gumuhit ng isang linya sa ibabaw ng alinman sa mga edge nito gamit ang {{ui:Line}}, mula sulok hanggang sulok. Kapag sarado at patag ang outline, kadalasang napupuno ang face. Kung hindi, hanapin ang puwang o overlap sa outline at gumuhit sa ibabaw nito.
3. I-push/pull ito.

Pinakamahusay ito sa malinis na plano. Sa abalang survey, mas mabilis ang pag-trace sa ibabaw.

## Mga problema

- "Ito ay binary DXF. I-save ito bilang ASCII DXF at subukan ulit." I-save muli ang DXF mula sa CAD program bilang ASCII (text).
- "…walang linya, arko o bilog sa model space na maaaring i-import." Malamang nasa mga layout lahat ng drawing, o puro text at hatch lamang.
- "Hindi mabasa ang drawing na ito (…). Maaaring sira ito, o naka-save sa DWG version na hindi kayang basahin ng reader…" Ipinapaliwanag ng nasa loob ng mga bracket kung bakit, halimbawa "DWG version AC1009 is not supported". I-save ito bilang DXF, o bilang DWG mula AutoCAD 2000 hanggang 2018, mula sa CAD program.
- Mali ang laki ng plano: nakapili ka ng maling unit. I-undo ({{key:Mod+Z}}) at mag-import ulit, o [i-scale](topic:rotate-scale) ang group sa tamang factor (12 sa pagitan ng feet at inches, 25.4 sa pagitan ng inches at millimeters).

Para gawing lupang maaari mong hubugin ang mga contour line, tingnan ang [Terrain](topic:terrain).

## Mula sa larawan ng sketch sa kamay

**File › I-import ang larawan ng sketch…** ay tumatanggap ng larawan ng sketch sa papel (JPEG, PNG o TIFF; direkta mula sa telepono ay ayos) at gumagawa ng parehong uri ng edge sa lupa. Sabihin kung anong papel ito (o hayaang hanapin ang sheet, ipinapalagay na A4) at ang scale ng sketch, halimbawa 1 : 100. Hinahanap ang gilid ng papel at itinutuwid ang larawan, ang tinta ay itinatrace bilang mga linya at arko, at bawat kulay ng panulat (itim, pula, asul, berde) ay nagiging sariling group na may tag (**Sketch black**, **Sketch red**, …), lahat sa loob ng isang group na pinangalanan ayon sa larawan. Isang undo step ito, at nangyayari ang lahat sa computer na ito: walang ipinapadala kahit saan.

Kapag walang matagpuang gilid ng papel, ang buong larawan ang kinukuhang sheet at sinasabi ito ng status line: sukatin ang isang bagay na alam mo at i-scale ang group kung mali ito. I-trace ang mga linya sa mga face gaya ng nasa itaas.
