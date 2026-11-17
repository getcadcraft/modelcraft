---
title: Kurveobjekter
summary: Tegn Bézier-, NURBS- og kurver med lige segmenter, giv dem en tykkelse, en bredde eller en tilspidsning, udfyld flade kurver, sæt tekst som kurve, og lav dem om til net.
keywords: kurve, kurver, bezier, nurbs, spline, splines, sti, rør, slange, kabel, reb, afrunding, ekstrudér, tilspidsning, hældning, radius, udfyldning, profil, tekst, bogstaver, logo, kurve til net
from: 602bf077
---

Et **kurveobjekt** er en kurve, der laver en form: et rør langs den (afrunding), et bånd (ekstrudér), et tilspidsende horn (tilspidsning), eller — når den er flad og lukket — en udfyldt plade eller bogstaver. Formen følger kurven: flytter du et punkt, flytter røret sig med. Når formen er rigtig, gør du den til et net.

## Tilføj en kurve

Vælg {{ui:Kurve}} i listen over arbejdsområder og tryk på {{ui:Tilføj}}:

| Type | Hvad det er |
| --- | --- |
| Bézier-kurve, Bézier-cirkel | Går gennem sine punkter; hvert punkt har to greb, der sætter kurvens retning |
| NURBS-kurve, NURBS-cirkel, Sti | Glat, tegnet hen mod sine punkter (den starter og slutter i sine endepunkter); hvert punkt har en vægt |
| Tekst | Din tekst som flade, udfyldte bogstavkonturer |

En ny kurve får et tyndt rør, så den kan ses og vælges; sæt dens afrundingsdybde til 0 for en nøgen kurve.

Du kan også starte fra noget tegnet: vælg en bue, en cirkel, en polygon eller en tegnet kurve i Model-arbejdsområdet og tryk på {{ui:Lav et kurveobjekt}} i Objektinfo. De tegnede linjer bliver.

## Rediger punkterne

Dobbeltklik på et kurveobjekt (eller vælg det og vælg {{ui:Kurve}}) for at redigere det.

- Klik på et punkt eller greb ({{key:Shift}} tilføjer eller fjerner); træk det for at flytte det. Træk i tomt rum for at vælge med en boks.
- {{ui:Forlæng}} ({{key:E}}, eller {{key:Ctrl}}+klik) tilføjer et punkt efter den valgte ende, ved markøren.
- {{ui:Del}} ({{key:W}}) sætter et punkt mellem hvert par valgte naboer; en Bézier bevarer sin form.
- {{ui:Flyt}}, {{ui:Drej}}, {{ui:Skalér}} flytter de valgte punkter med markøren (modelleringstasterne {{key:G}} {{key:R}} {{key:S}}, skub/træk-tasterne {{key:M}} {{key:Q}} {{key:S}}); klik for at beholde, {{key:Esc}} for at annullere.
- {{ui:Luk}} ({{key:C}}) lukker en åben spline eller åbner en lukket; {{ui:Vend om}} ({{key:Shift+R}}) kører den den anden vej.
- Bézier-greb: {{ui:Udglat}} ({{key:V}}) placerer dem for en glat kurve, {{ui:Hjørne}} ({{key:Shift+V}}) peger dem mod naboerne, {{ui:Fri}} ({{key:Alt+V}}) lader dem blive, hvor du satte dem. Træk et greb gør det frit.
- {{ui:Bézier}}, {{ui:NURBS}} og {{ui:Poly}} ændrer typen på de valgte splines og beholder punkterne.

Hver ændring er ét fortryd-trin.

## Form

Indstillingerne står i panelet (og i Objektinfo i Model-arbejdsområdet):

- **Form:** 3D-kurver går hvilken vej som helst; en flad kurve bliver i sit eget plan og kan udfyldes.
- **Udfyld lukkede splines** (flad): konturerne bliver en plade; en kontur inde i en anden er et hul, så bogstaver beholder deres huller.
- **Ekstrudér:** halvdelen af båndets bredde (åbne eller 3D-kurver), eller halvdelen af pladens tykkelse (udfyldt).
- **Afrundingsdybde** og **rundhed:** et rundt rør langs kurven (med ekstrudér: et rundt bånd); på en udfyldt form, en afrundet kant.
- **Luk enderne:** hætter på et åbent rør.
- **Tilspids langs den:** skalerer jævnt langs hver spline, for eksempel `1, 0.2` for et horn, `0, 1, 0` for en spindel.
- **Glathed** og, for NURBS, **orden**: hvor fint den tegnes, og hvor glat (2 lige … 6 glattest).
- Med punkter valgt: **radius** (rørets tykkelse der, gange afrundingen), **hældning** (drejer båndet om kurven) og, for NURBS, **vægt**.

Modifikatorer virker oven på et kurveobjekt, som de gør på et net: et Array langs den, et Spejl, en Subdivision-flade. Se [Modifikatorer på et net](topic:modifiers).

## Lav den om til et net

{{ui:Til net}} (i Kurve-arbejdsområdet eller i Objektinfo, {{ui:Kurve til net}}) gør kurveobjektet til det net, det viser nu; dets modifikatorer bliver ovenpå. Rediger det derefter i Net-arbejdsområdet. Fortryd gør det tilbage.

Se også [Net](topic:meshes) og [Rediger et net](topic:mesh-edit).
