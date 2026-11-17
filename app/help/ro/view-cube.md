---
title: Cubul de vizualizare
summary: Faceți clic pe o față, muchie sau colț al cubului din colțul vederii ca să priviți de acolo, trageți-l ca să orbitați, rotiți inelul busolei, treceți la o vedere frontală și reveniți acasă.
keywords: cub de vizualizare, viewcube, cub, busolă, nord, vedere de start, vederi standard, sus, față, dreapta, izometric, colț, muchie, orbitare, rotire vedere, pictograma axelor, indicator de colț, navigare
from: e1ec1347
---

Cubul de vizualizare se află în colțul din dreapta sus al vederii 3D. Se rotește odată cu vederea, deci arată mereu în ce direcție priviți: {{ui:Sus}} este sus, {{ui:Față}} este orientată spre sud (priviți spre nord, de-a lungul axei verzi, când vă uitați la ea), {{ui:Dreapta}} este orientată spre est (axa roșie). Rămâne transparent până îl indicați.

## Priviți dintr-o parte, dintr-o muchie sau dintr-un colț

1. Indicați cubul. Partea de sub cursor se luminează: mijlocul unei fețe, o muchie (se luminează pe ambele fețe care o împart) sau un colț (pe toate cele trei fețe).
2. Faceți clic pe ea. Vederea se întoarce să privească de acolo, păstrând același mijloc și același zoom.

Există 26 de locuri pe care puteți face clic: 6 fețe ({{ui:Sus}}, {{ui:Jos}}, {{ui:Față}}, {{ui:Spate}}, {{ui:Stânga}}, {{ui:Dreapta}}), 12 muchii și 8 colțuri. Un colț dă vederea clasică în trei sferturi; o muchie se află la jumătatea drumului între două fețe.

Clic pe {{ui:Față}} este același lucru cu {{ui:Vederi}}, {{ui:Față}} din bara de instrumente, fără încadrarea la zoom. {{ui:Vederi}} încadrează în continuare întregul model.

## Orbitarea trăgând cubul

Trageți cubul ca să rotiți vederea, la fel ca orbitarea din vederea în sine. O tragere nu este niciodată luată drept clic, deci puteți apuca cubul oriunde.

## Inelul busolei

Inelul de sub cub poartă N, E, S și V.

- **Trageți inelul** ca să rotiți modelul în jurul axei verticale, ca și cum ar sta pe o platformă rotitoare. Inelul urmează cursorul.
- **Faceți clic pe o literă** ca să priviți de pe acea latură, păstrând cât de abrupt priviți în jos. Dintr-o vedere de sus, litera pe care faceți clic ajunge jos pe ecran.

## Vederi față în față: săgeți

Când priviți drept spre o față, apar săgeți mici în jurul cubului:

- Cele patru **triunghiuri** aduc fața de pe acea parte în față: triunghiul de deasupra cubului arată fața care era sus, și așa mai departe.
- Cele două **săgeți curbate** din dreapta sus rotesc imaginea cu un sfert de tură, în sensul acelor de ceasornic sau invers, fără să schimbe fața pe care o priviți. Folosiți-le ca să rotiți un plan astfel încât un perete lung să treacă pe ecran.

## Acasă

Butonul casă din colțul stânga sus al cubului revine la vederea izometrică în trei sferturi, {{ui:Izometric}}, și încadrează tot modelul. {{key:Home}} face același lucru cât timp cubul are focalizarea tastaturii.

## Cu tastatura

{{key:Tab}} până la cub, apoi:

| Tastă | Face |
|---|---|
| {{key:left}} / {{key:right}} | alege o latură, muchie sau colț în jurul cubului, în pași de o optime de tură (cititoarele de ecran spun care este) |
| {{key:up}} / {{key:down}} | alege una mai sus sau mai jos, până la {{ui:Sus}} sau până la {{ui:Jos}} |
| {{key:Enter}} sau {{key:Space}} | privește de la cea aleasă |
| {{key:Shift+left}} / {{key:Shift+right}} | rotește vederea cu un sfert de tură în jurul axei verticale |
| {{key:Home}} | vederea de start |
| {{key:Esc}} | părăsește cubul |

Tastele apăsate pe cub rămân la cub: nu pornesc unelte ModelCraft.

## Pictograma axelor sau nimic

Deschideți {{ui:Setări}} ({{key:Mod+,}}), fila {{ui:ModelCraft}}, și setați **Indicator de colț** la {{ui:Cub de vizualizare}} (implicit), {{ui:Pictograma axelor}} (un mic marcaj X, Y, Z în colțul stânga jos: X roșu, Y verde, Z albastru) sau {{ui:Niciunul}}. Acest browser reține alegerea. Vezi [Setările ModelCraft](topic:settings#corner-indicator).

:::note
ModelCraft nu are rotire în jurul axei de vizare: în afara vederilor drept în jos și drept în sus, sus pe ecran este mereu sus în model. Cubul și săgețile curbate pot roti o vedere în plan; nu pot înclina o vedere laterală pe muchie.
:::
