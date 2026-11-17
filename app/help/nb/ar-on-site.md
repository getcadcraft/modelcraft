---
title: Se modellen på stedet med en Android-telefon (AR)
summary: Hold opp en Android-telefon med Chrome og se modellen i full størrelse over kameraet, innrettet på bygningen etter to punkter du står på, med en røntgenlinse og en rask kontroll ved neste besøk. For å se på, ikke for utsetting.
keywords: ar, utvidet virkelighet, telefon, android, chrome, webxr, på stedet, sted, kamera, full størrelse, røntgen, innrett, juster, kontroller på nytt, arcore
from: 0f43b50b
---

{{ui:Visning på stedet (AR, telefon)}} i {{ui:Visninger}}-menyen viser modellen i sin virkelige størrelse over telefonens kamera. Det fungerer på en **Android-telefon med Chrome**, på en sikker (https) side, der telefonen støtter AR. På en iPhone eller iPad, en datamaskin, eller en Android-app som bare viser en nettside, sier elementet hvorfor det ikke kan starte; bruk 3D-visningen der, eller åpne denne siden i Chrome på telefonen.

**En telefon er til å se på.** Ikke mål, sett ut eller kutt noe ut fra det skjermen viser: telefonen driver når du går, og peilefeilen øker med avstanden fra de to punktene du innrettet på (noen centimeter nær dem, mer langt unna). Ingenting her er målt med landmålingskvalitet.

## Innrett modellen

1. Åpne modellen på telefonen og velg {{ui:Visning på stedet (AR, telefon)}}. Gi tilgang til kameraet.
2. Panelet nederst nevner det første punktet (et bakkehjørne på modellen). Stå der på stedet, sikt den grønne ringen mot bakken, og trykk {{ui:Plasser punkt}}.
3. Gå til det andre punktet, minst en halv meter unna (jo lenger fra hverandre, jo bedre passform), og gjør det samme.
4. Modellen vises i full størrelse, dreid og flyttet for å passe de to stedene. Panelet viser hvor godt de to punktene stemmer overens.

{{ui:Start på nytt}} fjerner punktene. Innrettingen lagres i modellfilen, så neste gang du åpner modellen på stedet, starter den innrettet.

## Røntgenlinse

{{ui:Røntgenlinse}} viser hele modellen inne i en boks foran telefonen (omtrent en og en halv meter bred og tre meter dyp) og bare et svakt spøkelsesaktig bilde ellers, slik at du kan se hva som er bak en vegg uten å miste den virkelige veggen.

## Neste besøk

Stå ved det første punktet og trykk {{ui:Kontroller på nytt}}, og deretter {{ui:Plasser punkt}}. Under 5 cm unna beholdes innrettingen. Opptil en halv meter unna flytter modellen seg med forskjellen. Mer enn det, og panelet ber deg peke på de to stedene igjen.

## Forlat

{{ui:Forlat AR}} avslutter økten. Kamerabildet blir i nettleseren: ingenting lastes opp.
