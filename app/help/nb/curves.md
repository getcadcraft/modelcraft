---
title: Kurveobjekter
summary: Tegn Bézier-, NURBS- og rettlinjede kurver, gi dem tykkelse, bredde eller avsmalning, fyll flate kurver, sett tekst som kurve, og gjør dem om til nett.
keywords: kurve, kurver, bezier, nurbs, spline, splines, bane, rør, kabel, tau, fasing, ekstrudering, avsmalning, helning, radius, fyll, profil, tekst, bokstaver, logo, kurve til nett
from: 602bf077
---

Et **kurveobjekt** er en kurve som lager en form: et rør langs den (fasing), et bånd (ekstrudering), et avsmalnende horn (avsmalning), eller — når den er flat og lukket — en fylt plate eller bokstaver. Formen følger kurven: flytt et punkt, og røret beveger seg med det. Når formen er riktig, gjør du den om til et nett.

## Legg til en kurve

Velg {{ui:Kurve}} i arbeidsområdelisten og trykk {{ui:Legg til}}:

| Type | Hva det er |
| --- | --- |
| Bézier-kurve, Bézier-sirkel | Går gjennom sine punkter; hvert punkt har to håndtak som setter kurvens retning |
| NURBS-kurve, NURBS-sirkel, Bane | Glatt, tegnet mot sine punkter (den starter og slutter i endepunktene); hvert punkt har en vekt |
| Tekst | Teksten din som flate, fylte bokstavkonturer |

En ny kurve får et tynt rør slik at den kan ses og velges; sett fasedybden til 0 for en bar kurve.

Du kan også starte fra noe som er tegnet: velg en bue, en sirkel, en mangekant eller en tegnet kurve i Modell-arbeidsområdet, og trykk {{ui:Lag et kurveobjekt}} i {{ui:Elementinfo}}. De tegnede linjene blir stående.

## Rediger punktene

Dobbeltklikk et kurveobjekt (eller velg det og velg {{ui:Kurve}}) for å redigere det.

- Klikk et punkt eller håndtak ({{key:Shift}} legger til eller fjerner); dra det for å flytte det. Dra på tomt rom for å velge med en boks.
- {{ui:Forleng}} ({{key:E}}, eller {{key:Ctrl}}+klikk) legger til et punkt etter den valgte enden, ved pekeren.
- {{ui:Del opp}} ({{key:W}}) setter et punkt mellom hvert par av valgte naboer; en Bézier beholder formen sin.
- {{ui:Flytt}}, {{ui:Drei}}, {{ui:Skaler}} flytter de valgte punktene med pekeren (modelleringstaster {{key:G}} {{key:R}} {{key:S}}, trykk/trekk-taster {{key:M}} {{key:Q}} {{key:S}}); klikk for å beholde, {{key:Esc}} for å avbryte.
- {{ui:Lukk}} ({{key:C}}) lukker en åpen spline eller åpner en lukket; {{ui:Snu retning}} ({{key:Shift+R}}) kjører den den andre veien.
- Bézier-håndtak: {{ui:Jevn}} ({{key:V}}) setter dem for en jevn kurve, {{ui:Hjørne}} ({{key:Shift+V}}) peker dem mot naboene, {{ui:Fri}} ({{key:Alt+V}}) lar dem bli der du satte dem. Å dra et håndtak gjør det fritt.
- {{ui:Bézier}}, {{ui:NURBS}} og {{ui:Poly}} endrer type på de valgte splinene, og beholder punktene.

Hver endring er ett steg i angre.

## Form

Innstillingene ligger i panelet (og i {{ui:Elementinfo}} i Modell-arbeidsområdet):

- **Form:** 3D-kurver går hvilken vei som helst; en flat kurve blir i sitt eget plan og kan fylles.
- **Fyll lukkede splines** (flate): konturene blir en plate; en kontur inni en annen er et hull, slik at bokstaver beholder hullene sine.
- **Ekstrudering:** halvparten av båndets bredde (åpne eller 3D-kurver), eller halvparten av platens tykkelse (fylt).
- **Fasedybde** og **rundhet:** et rundt rør langs kurven (med ekstrudering: et avrundet bånd); på en fylt form, en avrundet kant.
- **Lukk endene:** lokk på et åpent rør.
- **Avsmalning langs den:** skalerer jevnt langs hver spline, for eksempel `1, 0.2` for et horn, `0, 1, 0` for en spindel.
- **Glatthet** og, for NURBS, **orden**: hvor fint den tegnes, og hvor glatt (2 rett … 6 glattest).
- Med punkter valgt: **radius** (rørets tykkelse der, ganger fasen), **helning** (dreier båndet om kurven) og, for NURBS, **vekt**.

Modifikatorer virker oppå et kurveobjekt slik de gjør på et nett: en matrise langs den, et speil, en underinndelingsflate. Se [Modifikatorer på et nett](topic:modifiers).

## Gjør den om til et nett

{{ui:Til nett}} (i Kurve-arbeidsområdet eller i {{ui:Elementinfo}}, {{ui:Kurve til nett}}) gjør kurveobjektet om til nettet det viser nå; modifikatorene blir oppå. Deretter redigerer du det i Nett-arbeidsområdet. Angre gjør det tilbake.

Se også [Nett](topic:meshes) og [Rediger et nett](topic:mesh-edit).
