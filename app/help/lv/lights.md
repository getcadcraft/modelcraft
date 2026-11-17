---
title: Apgaismojiet modeli ar lampām
summary: Novietojiet modelī lampas, prožektorus un gaismas paneļus, lai renderētos attēlos telpas varētu rādīt naktī vai apgaismotas, ar mīkstām ēnām.
keywords: gaisma, gaismas, lampa, lampas, apgaismojums, spuldze, griestu gaisma, prožektors, lejupvērsta gaisma, gaismas panelis, laukuma gaisma, lūmeni, spilgtums, krāsu temperatūra, silta, nakts, interjers, renderēt
from: c8d72cbc
---

Lampas apgaismo [renderētus attēlus](topic:render). Tās nemaina 3D skatu, kur katra lampa redzama kā neliela atzīme savā krāsā.

## Lampas pievienošana

1. Sadaļā {{ui:Gaismas}} labajā pusē noklikšķiniet uz {{ui:Lampa}}, {{ui:Prožektors}} vai {{ui:Gaismas panelis}}.
2. Noklikšķiniet, kur to novietot. Piesaiste darbojas tāpat kā zīmējot.
   - Uz griestiem vai sienas **lampa** karājas 25 cm no virsmas tajā pusē, no kuras skatāties; **gaismas panelis** guļ uz virsmas un spīd prom no tās.
   - **Prožektoram** vajag divus klikšķus: vispirms vietu, tad to, uz ko tas vērsts.

Jaunā lampa ir atlasīta sadaļā {{ui:Gaismas}} un gatava labošanai.

## Lampas maiņa

Noklikšķiniet uz lampas nosaukuma sadaļā {{ui:Gaismas}} vai uz tās atzīmes skatā ar {{ui:Atlasīt}}. Pēc tam:

| Iestatījums | Ko tas dara |
|---|---|
| {{ui:Spilgtums (lūmeni)}} | Cik daudz gaismas tā dod. Parasta mājas spuldze ir apmēram 800 lūmenu; spilgts griestu panelis — 3000 |
| {{ui:Krāsa}} | {{ui:Silta}} (mājas spuldze), {{ui:Neitrāla}} vai {{ui:Dienasgaisma}}, vai jebkura krāsa |
| {{ui:Staru kūlis (grādi)}} | Prožektora konuss, no malas līdz malai |
| {{ui:Spuldzes izmērs}}, {{ui:Platums}}, {{ui:Dziļums}} | Lielākas spuldzes un paneļi dod mīkstākas ēnas |
| {{ui:Sarkanā (x)}}, {{ui:Zaļā (y)}}, {{ui:Augstums}} | Kur tā atrodas |

Atzīme blakus lampas nosaukumam to ieslēdz vai izslēdz. {{ui:Dzēst gaismu}} to noņem. Katra izmaiņa ir viens solis: {{key:Ctrl+Z}} to atsauc. Lampas tiek saglabātas failā `.modelcraft`.

## Attēli naktī

Dialogā {{ui:Renderēt attēlu…}} atzīmējiet {{ui:Šim attēlam izmantot citu datumu un laiku}} un izvēlieties vakara stundu. Kad saule ir norietējusi, debesis kļūst tumšas un modeli apgaismo tikai lampas. Ja attēls ir pārāk tumšs, dialogā palieliniet {{ui:Spilgtums}} vai pievienojiet lampas.

:::tip
Telpai, kas redzama no iekšpuses, novietojiet kameru telpā (orbitējot un tuvinot, vai [ainā](topic:scenes)), pievienojiet lampu pie griestiem un renderējiet naktī. Režīmā {{ui:Ātrais}} stūri, kas atrodas tālu no lampas, paliek tumšāki nekā fotogrāfijā; [augstas kvalitātes režīms](topic:render#high-quality) ļauj gaismai atsisties no sienām.
:::
