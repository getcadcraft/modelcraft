---
title: "Mag-export ng model para sa ibang program"
summary: "Pumili ng tamang export para sa rendering, web, 3D printing, BIM at BimCraft, at tingnan kung ano ang pinananatili ng bawat isa."
keywords: "i-print, 3mf, pdf, papel, larawan, png, picture, screenshot, render, i-save ang view, export, ibahagi, render, rendering, gltf, glb, collada, dae, obj, stl, 3d print, ifc, bim, bimcraft, ipadala, ibang software"
from: 9e13e80d
---

Gumagawa ang export ng kopya ng model sa ibang format. Itago rin ang iyong `.modelcraft` file: ito lang ang file na nagpapanatili ng lahat, at ito lang ang direktang binubuksan ng ModelCraft.

## I-export

1. I-save muna ({{key:Mod+S}}), para ligtas ang iyong working file.
2. I-click ang {{ui:I-export}} sa grupong {{ui:File}}.
3. Piliin ang format. Dina-download ito ng browser, may pangalang kapareho ng model.

Buong model ang ine-export. Para i-export ang isang bahagi, i-save, burahin ang iba, i-export, pagkatapos i-undo o buksan ulit.

## Aling format

| Gusto mong | Piliin | Mga tala |
|---|---|---|
| Buksan ito sa ibang 3D modeler | {{ui:Collada (.dae)}} | Pinananatili ang mga grupo, nested na grupo, component (shared, hindi kinopya), pangalan at kulay. Z up, meters. |
| I-render ito, o gamitin sa visualization program | {{ui:OBJ (.obj)}} o {{ui:glTF binary (.glb)}} | Ang OBJ ang pinakamalawak na nababasa; isinusulat nito ang bawat paglalagay ng grupo bilang hiwalay na object, pero walang kulay at walang shared na component. Pinananatili ng glTF ang mga component at kulay. |
| Ilagay sa web, sa game engine o sa AR | {{ui:glTF binary (.glb)}} | Isang file na may lahat ng nasa loob nito. |
| I-print sa 3D | {{ui:Suriin para sa 3D printing (STL o 3MF)…}} | Sinusuri kung sarado ang model at tama ang direksyon ng mga face, pagkatapos ay sumusulat ng STL o 3MF sa millimeters. Tingnan ang [Ihanda ang model para sa 3D printing](topic:print-3d). Isinusulat ng {{ui:STL para sa pag-print (.stl, millimeters)}} ang buong model nang walang pagsusuri. |
| Buksan sa BimCraft o ibang BIM program | {{ui:IFC para sa BimCraft (.ifc)}} | Ang bawat pinakamataas na grupo o component ay nagiging isang building element. |

Kinukumpirma ng status bar ang bawat export, halimbawa "Na-export ang House.stl (millimeters)." o "Na-export ang House.dae (Collada 1.4.1, Z up, meters; nananatiling shared ang mga component)."

## Bago mag-export

- **I-grupo ang mga object.** Pinananatili ng Collada, glTF at IFC ang mga grupo at component bilang hiwalay na object. Ang maluwag na geometry ay lumalabas bilang isang bukol; sa IFC, nagiging isang element ito na tinatawag na "Loose geometry".
- **Pangalanan ang mga ito.** Napupunta sa Collada at IFC ang mga pangalan ng grupo at component, kaya ang pader na tinawag na "North wall" ay darating na "North wall".
- **Suriin ang direksyon ng face.** Ang mga face na nagpapakita ng blue-grey sa labas ay tuturo papasok sa export. Ayusin ang mga ito gamit ang {{ui:Baligtarin ang face}} (tingnan ang [Burahin at linisin](topic:erase#a-face-facing-the-wrong-way)).
- **Para sa pag-print,** gawing sarado na solid ang mga bahagi: piliin ang bawat grupo at tingnan kung sinasabi ng {{ui:Impormasyon ng entity}} na "Solid: Yes". Pagkatapos, i-scale ang model sa laki ng pag-print, o i-scale ito sa printer software.

## Ipadala ang model sa BimCraft

1. Gawing grupo o component ang bawat bahagi ng gusali at pangalanan ito.
2. Piliin ang {{ui:I-export}}, pagkatapos ang {{ui:IFC para sa BimCraft (.ifc)}}.
3. Buksan ang na-download na `.ifc` file sa BimCraft.

Para sa concept massing, gamitin ang {{ui:I-export}} › {{ui:Massing sa BimCraft…}} sa halip: ang bawat grupo ay napupunta bilang massing option na may mga palapag, lawak ng palapag at volume. Tingnan ang [Ipadala ang massing sa BimCraft](topic:massing-to-bimcraft).

Walang direktang koneksyon sa pagitan ng dalawang app ang karaniwang IFC export. May isang palapag lang ang IFC, at ang bawat element ay generic building element proxy na walang type o property: shape at pangalan lang ang dala nito. Ang saradong grupo ay nagiging solid shape; ang bukas ay nagiging surface.

## Mga linyang walang face

Ang mga edge na hindi bahagi ng anumang face (mga linyang parang guide, isang na-import na site plan) ay napupunta sa OBJ at Collada bilang linya. Walang lugar ang glTF at STL para sa mga ito at iniiwan ang mga ito. Hindi ine-export sa anumang format ang mga guide at scene.

## I-save ang view bilang larawan

{{ui:I-export}} › {{ui:Larawan ng view (.png)}} ay sine-save nang eksakto ang ipinapakita ng 3D view, sa laki nito sa screen. {{ui:Larawan na doble ang laki (.png)}} ay sine-save ito na dalawang beses ang lapad at dalawang beses ang taas (para sa print o matalas na slide), na may mga dimension at marka na muling iginuguhit sa sukat na iyon sa halip na iunat.

Para sa larawang mukhang liwanag ng araw (langit, araw, malambot na anino, salamin), gamitin ang {{ui:I-export}} › {{ui:I-render ang larawan…}} sa halip: tingnan ang [I-render ang larawan](topic:render).

Para sa malinis na larawan, i-on muna ang [presentation view](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): hindi isinasama ang mga axis, guide, balangkas ng section at ang napili. Ihanda ang camera, style at anino ayon sa gusto mo, o pumunta sa isang [scene](topic:scenes); para mag-save ng gumagalaw na pelikula ng iyong mga scene, gamitin ang {{ui:I-export ang animation}} sa panel na {{ui:Mga scene}}.

## I-print ang view, o i-save bilang PDF

- {{ui:I-export}} › {{ui:PDF ng view (.pdf)}} ay nagse-save ng isang-pahinang PDF: ang view sa dalawang beses ng laki nito sa screen, kasama ang mga dimension nito, sa A4 na pahina (Letter kapag nasa feet at inches ang model), landscape, na may linyang nasa ilalim na nagbibigay ng pangalan ng file, petsa at unit.
- {{ui:I-export}} › {{ui:I-print ang view…}} ay inilalagay ang parehong pahina sa harap ng print dialog ng iyong browser. Pumili ng printer, o "I-save bilang PDF".

Ipinapakita ng pahina ang view kung ano ito: walang scale sa perspective view. Para sa drawing na may tamang scale, i-off ang {{ui:Perspective}} at tumingin mula sa {{ui:Top}} o {{ui:Front}}, at magdagdag ng [mga dimension](topic:dimensions) para sa mahahalagang sukat. [Presentation view](topic:styles-shadows#presentation-view) ay hindi isinasama ang mga axis, guide at ang napili; nananatili ang mga dimension.
