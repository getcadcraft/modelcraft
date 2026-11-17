---
title: Venivad komponendid
summary: Tee komponendi koopiast laiem, sügavam või kõrgem nii, et selle osad säilitavad oma mõõtmed: pikem laud samade jalgadega, kõrgem riiul laiali asetatud riiulitega, piire, mille postid korduvad.
keywords: dünaamiline komponent, venitus, komponendi suuruse muutmine, parameetriline, nimetatud suurused, kordus, massiiv, jalad, riiulid, piire, reeglid, muutujad
from: b4c40f43
---

Komponendi skaleerimine muudab kõike selles suuremaks, sealhulgas jalgu ja latte. **Venita seda koopiat** muudab komponendi laiust, sügavust või kõrgust, kusjuures iga osa järgib reeglit: laua pealispind kasvab, selle jalad säilitavad oma paksuse ja jäävad otstesse.

See töötab komponentidega, mis koosnevad osadest, ehk gruppidest või komponentidest komponendi sees, nagu iga [algteegi](topic:starter) objekt.

## Koopia venitamine

1. Vali komponent.
2. Paneelis {{ui:Objekti teave}} klõpsa {{ui:Venita seda koopiat…}}.
3. Sisesta uus {{ui:Laius (punane)}}, {{ui:Sügavus (roheline)}} ja {{ui:Kõrgus (sinine)}} ning klõpsa {{ui:Venitus}}.

Muutub ainult see koopia: sellest saab omaette komponent, mis mäletab originaali, millest see pärit on. Venita seda igal ajal uuesti, ja see arvutatakse originaalist uuesti, nii et midagi ei nihku. Originaali teised koopiad jäävad muutmata.

## Reeglid

Ava komponent (topeltklõps sellel) ja vali üks selle osadest. {{ui:Objekti teave}} näitab rubriiki {{ui:Kui komponent venitatakse}} koos reegliga punase, rohelise ja sinise telje suunas:

| Reegel | Mida osa teeb | Näiteks |
|---|---|---|
| {{ui:Venitus}} | Kasvab koos komponendiga; selle kaugus mõlemale poolele jääb samaks | Laua pealispind |
| {{ui:Jää algusesse}} / {{ui:Jää lõppu}} | Säilitab oma suuruse ja kauguse sellele poolele | Jalad |
| {{ui:Teisalda proportsionaalselt}} | Säilitab oma suuruse; selle keskpunkt liigub proportsionaalselt | Riiulid, ukselink |
| {{ui:Skaleeri proportsionaalselt}} | Nii asukoht kui suurus muutuvad proportsionaalselt | Trepi astmed |
| {{ui:Kordus}} | Selle koopiad iga teatud vahemaa tagant ({{ui:Iga}}), algusest kuni kaugema poolani | Piirde postid |

{{ui:Automaatne}} (algväärtus) arvutab reegli välja ja näitab, milline see on: {{ui:Venitus}}, kui osa ulatub üle komponendi, {{ui:Teisalda proportsionaalselt}}, kui see asub umbes keskel, muidu jääb see poolele, mis on lähemal.

## Mida tuleb teada

- Osade enda kujud on jagatud, nii et venitatud koopia on kerge. Osa muutmine muudab seda igas koopias.
- Venitatud koopia ei järgi originaali reeglite ega paigutuse hilisemaid muudatusi: venita uuesti, et need sisse tuua.
- Komponendis vabalt joonistatud tahud (mitte osa sees) säilitavad oma suuruse; muuda need osaks, et nad järgiksid.
- Reeglid ning see, millest iga koopia venitati, salvestatakse ModelCraft-i faili.
