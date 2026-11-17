---
title: Piilota, eristä ja näytä
summary: Siirrä asioita sivuun, jotta voit työskennellä niiden välissä, tai näytä vain se, mitä muokkaat. Piilotetut asiat pysyvät piilossa tiedostossa.
keywords: piilota, näytä, näytä kaikki, eristä, piilota muut, piilossa, paikallinen näkymä, näkyvyys, sivuun
from: 2c8a3457
---

Piilottaminen siirtää asioita sivuun poistamatta niitä. Piilotettua pintaa, reunaa, ryhmää tai komponenttia ei piirretä, eikä siihen voi tarttua, napsauttaa tai valita sitä, joten voit työskennellä sen takana tai välissä olevien asioiden kanssa.

## Piilota

1. Valitse piilotettavat: pinnat, reunat, ryhmät tai komponentit.
2. {{ui:Edit}} › {{ui:More}} › {{ui:Hide}}.

Esimerkiksi kahden lähekkäin seisovan ryhmän välisessä kapeassa raossa työskennellessä valitse edessä oleva ja piilota se: napsautukset ja tarttumiset ulottuvat nyt sen takana olevaan pintaan.

## Eristä

Valitse se, minkä haluat pitää näkyvissä, ja valitse sitten {{ui:Edit}} › {{ui:More}} › {{ui:Isolate (hide the rest)}}. Kaikki muu mallissa piiloutuu, tai jos muokkaat ryhmän sisällä, kaikki muu siinä ryhmässä. Valitun pinnan reunat jäävät näkyviin.

## Näytä kaikki

{{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} näyttää kaiken uudelleen kaikissa ryhmissä. {{ui:Entity info}} kertoo, kuinka monta asiaa on piilotettu, kun mitään ei ole valittuna, ja siinä on myös {{ui:Unhide all}}-painike.

{{ui:Outliner}} näyttää piilotetut ryhmät ja komponentit kursivoituina ja yliviivatulla silmällä. Napsauta silmää näyttääksesi yhden uudelleen.

:::note
Modeler-näppäimillä {{key:H}} piilottaa, {{key:Shift+H}} eristää ja {{key:Alt+H}} näyttää kaiken. ({{ui:Settings}} › {{ui:ModelCraft}} valitsee näppäintyylin.)
:::

## Hyvä tietää

- Piilotettu tila tallennetaan ModelCraft-tiedostoon, ja se palautuu piilotettuna, kun tiedosto avataan.
- Piilotetut asiat ovat yhä mallissa: viennit sisältävät ne, ja samoin tilavuudet ja koot kohdassa {{ui:Entity info}}.
- Jokainen piilotus, eristys tai näyttäminen on yksi kumoamisvaihe.
