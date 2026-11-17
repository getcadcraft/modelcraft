---
title: "Tunnisteet: joukkojen näyttäminen ja piilottaminen"
summary: Anna ryhmille ja komponenteille tunniste, kuten Kalusteet tai Seinät, ja piilota tai näytä kaikki sillä tunnisteella kerralla.
keywords: tunnisteet, tunniste, tasot, taso, näytä, piilota, näkyvyys, järjestä, kalusteet, seinät, tunnisteettomat, nimeä tunniste uudelleen, poista tunniste
from: c1a95a05
---

Tunniste on nimi, jonka annat ryhmille ja komponenteille, kuten **Kalusteet**, **Seinät** tai **Tontti**, jotta voit piilottaa tai näyttää kaiken sillä tunnisteella kerralla. Tunnisteet vastaavat CAD-ohjelmien tasoja. Yhden kohteen piilottamisesta kerrallaan katso [Piilota, eristä ja näytä](topic:hide-isolate).

## Luo tunniste

1. Napsauta oikealla kohdassa {{ui:Tunnisteet}} {{ui:Lisää tunniste}}.
2. Kirjoita sen nimi ja paina {{key:Enter}}.

Tunnisteen nimen voi vaihtaa napsauttamalla sen nimeä kohdassa {{ui:Tunnisteet}}, kirjoittamalla uuden nimen ja painamalla {{key:Enter}}. Kahdella tunnisteella ei voi olla samaa nimeä.

## Tunnista ryhmät ja komponentit

1. Valitse yksi tai useampi ryhmä tai komponentti.
2. Valitse kohdassa {{ui:Kohteen tiedot}} tunniste kohdasta {{ui:Tunniste}}. {{ui:Uusi tunniste…}} luo uuden tunnisteen ja antaa sen valinnalle.

{{ui:Ei tunnistetta}} poistaa tunnisteen. Kunkin tunnisteen vieressä kohdassa {{ui:Tunnisteet}} oleva luku kertoo, montako ryhmää ja komponenttia sillä on.

Tunnista ryhmiä ja komponentteja, ei irrallisia pintoja ja särmiä: piirrä tunnistettavat kohteet ensin ryhmiksi (valitse ne ja paina {{key:Shift+G}}).

## Piilota ja näytä

Napsauta tunnisteen vieressä olevaa silmää. Kaikki sillä tunnisteella oleva katoaa näkyvistä missä tahansa mallissa, myös muiden ryhmien sisällä, ja napsautukset ja tartunnat menevät sen ohi. Napsauta silmää uudelleen näyttääksesi sen. {{ui:Ei tunnistetta}}-kohteet näkyvät aina.

Jos muokkaat ryhmän sisällä, jonka tunnisteen piilotat, ryhmä sulkeutuu.

## Poista tunniste

Napsauta sen vieressä olevaa roskakoria. Sillä tunnisteella olleet kohteet siirtyvät tilaan {{ui:Ei tunnistetta}} ja tulevat näkyviin.

## Asioita, jotka kannattaa tietää

- Tunnisteet, niiden nimet ja se, mitkä ovat piilossa, tallennetaan ModelCraft-tiedostoon. Tunnistetun ryhmän kopiointi toiseen malliin tuo tunnisteen mukanaan.
- Tunnisteen piilottaminen ja näyttäminen sekä kaikki muut tunnisteiden muutokset ovat yksi kumoamisvaihe.
- Vienti sisältää kaiken, myös piilotetut tunnisteet, kuten piilotetut kohteetkin.
- Tasot DWG- ja DXF-asemakaavoissa eivät vielä tule sisään tunnisteina: koko piirustus tulee yhtenä ryhmänä.
