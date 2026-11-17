---
title: Læg en nets UV'er ud
summary: Markér søm, afvikl, projicér og pak et nets teksturkoordinater i UV-arbejdsområdet, og kontrollér dem med et skakternet og strækfarverne.
keywords: uv, uv'er, afvikling, søm, tekstur, teksturkoordinater, atlas, pak, pakning, ø, skakternet, stræk, forvrængning, boksprojektion, cylinderprojektion, kugleprojektion, konform, vinkelbaseret, lscm, abf
from: 00028f20
---

En tekstur er et fladt billede, og et net er ikke fladt. Dets **UV'er** siger, hvor hvert hjørne af hver flade ligger på billedet. UV-arbejdsområdet laver dem: du skærer nettet op langs **søm**, lægger stykkerne fladt (**afvikl**) og passer dem ind i kvadratet (**pak**).

## Åbn det

Vælg et net, og vælg {{ui:UV}} i listen {{ui:Arbejdsområde}}. En gruppe eller komponent bliver først til et net, som i {{ui:Net}}-arbejdsområdet. 3D-visningen flytter til venstre halvdel. **UV-editoren** til højre viser nettets flader lagt ud på teksturkvadratet. Valg fungerer som i {{ui:Net}}-arbejdsområdet, og det, du vælger i den ene visning, vælges i den anden.

## Markér søm

Søm er de steder, hvor nettet må skæres op. De vises røde i begge visninger.

- Vælg kanter ({{ui:Kant}}, eller {{key:2}}) og tryk på {{ui:Markér søm}} ({{key:Ctrl+E}}). {{ui:Ryd søm}} ({{key:Ctrl+Shift+E}}) fjerner dem.
- {{ui:Sømme ved skarpe}} markerer hver skarp kant og hver kant, hvor flader mødes i mere end 60°. En boks falder i sine seks sider.
- {{ui:Sømme fra UV'er}} markerer søm, hvor UV'erne allerede brydes, for eksempel efter en projektion.

Et lukket stykke har brug for søm for at ligge fladt: en kugle har brug for mindst ét snit, og et rør et snit på langs.

## Afvikl

Vælg de flader, der skal lægges ud (eller ingen, for hele nettet), og tryk på {{ui:Afvikl}} ({{key:U}}). Hvert stykke mellem søm lægges fladt, og dets vinkler bevares så rigtige som muligt (vinkelbaseret udfladning). Derefter pakkes stykkerne ind i kvadratet. {{ui:Konform}} afvikler i stedet med konforme afbildninger efter mindste kvadraters metode. Det er hurtigere, men lidt mindre korrekt på kraftigt buede stykker. En form, der kan laves af et fladt stykke plade, som en cylinders side skåret én gang, afvikles uden nogen strækning overhovedet.

## Projicér

For simple former er en projektion ofte nok:

| Projektion | Hvad den gør |
| --- | --- |
| {{ui:Boks}} | Hver flade på den side af en boks, den vender mest imod |
| {{ui:Cylinder}} | Rundt om den blå akse: på tværs er vinklen rundt, op er højden |
| {{ui:Kugle}} | Fra centrum: på tværs er vinklen rundt, op er breddegraden |
| {{ui:Fra visning}} | Som fladerne ses i 3D-visningen nu |

En flade hen over cylinderens eller kuglens samling holdes i ét stykke. Derfor kan dens UV'er løbe en smule ud over kvadratets højre kant, og teksturer gentager sig dér.

## Ordn

- {{ui:Pak}} passer stykkerne (øerne) ind i kvadratet i én texelstørrelse, og hvert drejes, så det fylder mindst. Panelet angiver pladsen mellem dem.
- {{ui:Drej 90°}} og {{ui:Spejl}} drejer eller spejler de valgte fladers UV'er.
- I UV-editoren trækker du en valgt flade for at flytte valgets UV'er. Eller du peger på editoren og trykker på {{key:R}} eller {{key:S}} og flytter derefter for at dreje eller skalere dem. Et klik beholder ændringen, og {{key:Esc}} annullerer den. {{key:G}} flytter uden at trække. Dobbeltklik på en flade (eller tryk {{key:L}}) for at vælge hele dens ø. Hjulet zoomer. Træk med midter- eller højreknappen for at panorere. {{key:F}} tilpasser kvadratet igen.

Hver ændring er ét fortryd-trin.

## Kontrollér dem

- {{ui:Skakternet}} viser et mærket skakternet på nettet i dets UV'er. Jævne, kvadratiske felter betyder, at teksturen ligger jævnt. Etiketterne viser, hvilken vej den løber.
- {{ui:Stræk}} farver hver flade efter, hvor meget dens UV'er strækker den: blå ingen, over grøn, til rød meget. Panelet vælger, om det måler **vinkler bøjet** eller **størrelse ændret**, og viser gennemsnittet.

Se også [Rediger et net](topic:mesh-edit), [Net](topic:meshes) og [Modifikatorer på et net](topic:modifiers).
