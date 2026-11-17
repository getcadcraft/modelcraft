---
title: Bigyan ng ilaw ang model gamit ang mga lampara
summary: Maglagay ng mga lampara, spotlight at light panel sa model para makita sa mga rendered na larawan ang mga silid sa gabi o naiilawang interior, na may malambot na anino.
keywords: ilaw, lights, lampara, lamp, lighting, bombilya, ceiling light, spotlight, downlight, light panel, area light, lumens, liwanag, color temperature, warm, gabi, interior, render
from: c8d72cbc
---

Nagbibigay ng ilaw ang mga lampara sa [rendered na mga larawan](topic:render). Hindi nila binabago ang 3D view, kung saan makikita ang bawat lampara bilang maliit na marka na may sariling kulay.

## Magdagdag ng lampara

1. Sa seksyong {{ui:Lights}} sa kanan, i-click ang {{ui:Lamp}}, {{ui:Spotlight}} o {{ui:Light panel}}.
2. I-click kung saan ito ilalagay. Gumagana ang snapping gaya ng sa pagguhit.
   - Sa kisame o dingding, ang **lampara** ay nakabitin nang 25 cm mula sa ibabaw, sa panig na tinitingnan mo; ang **light panel** ay nakadikit sa ibabaw at nagliliwanag palayo rito.
   - Ang **spotlight** ay nangangailangan ng dalawang click: kung nasaan ito, saka kung saan ito nakatutok.

Ang bagong lampara ay napipili sa {{ui:Lights}}, handa nang baguhin.

## Baguhin ang lampara

I-click ang pangalan ng lampara sa {{ui:Lights}}, o ang marka nito sa view gamit ang {{ui:Select}}. Pagkatapos:

| Setting | Ano ang ginagawa nito |
|---|---|
| {{ui:Brightness (lumens)}} | Gaano karaming ilaw ang ibinibigay nito. Ang karaniwang bombilya sa bahay ay mga 800 lumens; ang maliwanag na ceiling panel ay 3000 |
| {{ui:Color}} | {{ui:Warm}} (karaniwang bombilya sa bahay), {{ui:Neutral}} o {{ui:Daylight}}, o anumang kulay |
| {{ui:Beam (degrees)}} | Ang cone ng spotlight, mula gilid hanggang gilid |
| {{ui:Bulb size}}, {{ui:Width}}, {{ui:Depth}} | Mas malalaking bombilya at panel ay nagbibigay ng mas malambot na anino |
| {{ui:Red (x)}}, {{ui:Green (y)}}, {{ui:Height}} | Kung nasaan ito |

Ang tick sa tabi ng pangalan ng lampara ay nagpapailaw o nagpapatay dito. Inaalis ng {{ui:Delete the light}} ang lampara. Isang hakbang ang bawat pagbabago: binabawi ito ng {{key:Ctrl+Z}}. Naka-save ang mga lampara sa `.modelcraft` file.

## Mga larawan sa gabi

Sa {{ui:Render a picture…}}, lagyan ng tick ang {{ui:Use another date and time for this picture}} at pumili ng oras sa gabi. Kapag lumubog na ang araw, dumidilim ang langit at tanging mga lampara ang nagpapailaw sa model. Itaas ang {{ui:Brightness}} sa dialog kung masyadong madilim ang larawan, o magdagdag ng mga lampara.

:::tip
Para sa silid na tinitingnan mula sa loob, ilagay ang camera sa loob ng silid (i-orbit at i-zoom in, o gumamit ng [scene](topic:scenes)), magdagdag ng lampara sa kisame, at mag-render sa gabi. Sa {{ui:Fast}} mode, mas madilim ang mga sulok na malayo sa lampara kaysa sa litrato; ang [high-quality mode](topic:render#high-quality) ay nagpapahintulot sa liwanag na tumalbog sa mga dingding.
:::
