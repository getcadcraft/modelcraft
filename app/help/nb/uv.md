---
title: Legg ut et netts UV-er
summary: Merk sømmer, pakk ut, projiser og pakk et netts teksturkoordinater i UV-arbeidsområdet, og kontroller dem med en sjakkrute og strekkfargene.
keywords: uv, uv-er, pakk ut, unwrap, søm, sømmer, tekstur, teksturkoordinater, atlas, pakk, pakking, øy, øyer, sjakkrute, strekk, forvrengning, boksprojeksjon, sylinderprojeksjon, kuleprojeksjon, konform, vinkelbasert, lscm, abf
from: 00028f20
---

En tekstur er et flatt bilde; et nett er ikke flatt. Dets **UV-er** sier hvor hvert hjørne av hver flate ligger på bildet. UV-arbeidsområdet lager dem: du skjærer nettet opp langs **sømmer**, legger brikkene flatt (**pakk ut**), og passer dem inn i kvadratet (**pakk**).

## Åpne den

Velg et nett og velg {{ui:UV}} i Arbeidsområde-listen. En gruppe eller komponent blir først til et nett, slik som i Nett-arbeidsområdet. 3D-visningen flytter seg til venstre halvdel; **UV-editoren** til høyre viser nettets flater lagt ut på teksturkvadratet. Å velge virker som i Nett-arbeidsområdet, og det du velger i den ene visningen, er valgt i den andre.

## Merk sømmer

Sømmer er der nettet kan skjæres opp; de vises røde i begge visningene.

- Velg kanter ({{ui:Kant}}, eller {{key:2}}) og trykk {{ui:Marker søm}} ({{key:Ctrl+E}}). {{ui:Fjern søm}} ({{key:Ctrl+Shift+E}}) tar dem bort.
- {{ui:Sømmer ved skarpe}} merker hver skarp kant og hver kant der flater møtes i mer enn 60°: en boks deles opp i sine seks sider.
- {{ui:Sømmer fra UV-er}} merker søm der UV-ene allerede brytes, for eksempel etter en projeksjon.

En lukket del trenger søm for å ligge flatt: en ball trenger minst ett kutt, et rør et kutt langs lengden.

## Pakk ut

Velg flatene som skal legges ut (eller ingen, for hele nettet) og trykk {{ui:Pakk ut}} ({{key:U}}). Hver del mellom sømmene legges flatt, med vinklene så korrekte som mulig (vinkelbasert flating); deretter pakkes delene inn i kvadratet. {{ui:Konform}} pakker ut med konforme minste kvadraters avbildninger i stedet: raskere, litt mindre korrekt på sterkt buede deler. En form som kan lages av et flatt ark, for eksempel sylinderens sideflate kuttet én gang, pakkes ut helt uten strekk.

## Projiser

For enkle former er en projeksjon ofte nok:

| Projeksjon | Hva den gjør |
| --- | --- |
| {{ui:Boks}} | Hver flate over på den siden av en boks den vender mest mot |
| {{ui:Sylinder}} | Rundt den blå aksen: på tvers er vinkelen rundt, opp er høyden |
| {{ui:Kule}} | Fra sentrum: på tvers er vinkelen rundt, opp er breddegraden |
| {{ui:Fra visning}} | Slik flatene sees i 3D-visningen nå |

En flate som krysser sylinderens eller kulens skjøt, holdes i ett stykke, så UV-ene kan gå litt forbi høyre kant av kvadratet; teksturer gjentas der.

## Ordne

- {{ui:Pakk}} passer delene (øyer) inn i kvadratet i én teksel-størrelse, hver snudd slik at den tar minst plass. Panelet angir plassen mellom dem.
- {{ui:Drei 90°}} og {{ui:Speil}} dreier eller speiler UV-ene til de valgte flatene.
- I UV-editoren drar du en valgt flate for å flytte utvalgets UV-er, eller peker i editoren og trykker {{key:R}} eller {{key:S}}, og beveger deretter musen for å dreie eller skalere dem (et klikk beholder endringen, {{key:Esc}} avbryter). {{key:G}} flytter uten å dra. Dobbeltklikk en flate (eller {{key:L}}) for å velge hele øya. Hjulet zoomer; dra med midtknappen eller høyreknappen for å panorere; {{key:F}} tilpasser kvadratet igjen.

Hver endring er ett Angre-steg.

## Sjekk dem

- {{ui:Sjakkrutemønster}} viser en merket sjakkrute på nettet i dets UV-er: jevne, kvadratiske ruter betyr at teksturen ligger jevnt; merkene viser hvilken vei den går.
- {{ui:Strekk}} farger hver flate etter hvor mye UV-ene strekker den: blå ingen, gjennom grønn, til rød mye. Panelet velger om det måler **bøyde vinkler** eller **endret størrelse**, og viser gjennomsnittet.

Se også [Rediger et nett](topic:mesh-edit), [Nett](topic:meshes) og [Modifikatorer på et nett](topic:modifiers).
