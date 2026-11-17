---
title: Gå gjennom modellen i et VR-hodesett
summary: Gå rundt i modellen i full størrelse i et VR-hodesett: hopp rundt, snu deg, mål, kutt den opp, plasser saker med et bilde, se den som en bordmodell, og møt de andre i en live-økt.
keywords: vr, virtuell virkelighet, hodesett, webxr, xr, oppslukende, quest, oculus, vive, index, pico, gå gjennom, gjennomgang, teleportering, designgjennomgang, mål, snitt, kutt, sak, saker, bcf, bordmodell, skalamodell, tilstedeværelse, avatarer, live, sammen
from: fa2f591a
---

{{ui:Gjennomgang i VR}} setter deg inne i modellen med et VR-hodesett, i full størrelse. Du står der visningens kamera er, på gulvet under det, og vender samme vei. Ingenting lastes opp: hodesettet viser det nettleseren tegner på denne datamaskinen (eller i hodesettets egen nettleser).

## Hva du trenger

- Et hodesett nettleseren kan styre (WebXR): et frittstående hodesetts egen nettleser, eller Chrome eller Edge på en PC med et hodesett koblet til.
- ModelCraft åpnet på en sikker side (https), slik den er på denne siden.

Når det ikke finnes noe hodesett, er {{ui:Gjennomgang i VR}} nedtonet og sier hvorfor.

## Start

1. Still opp visningen der du vil starte: i et rom, eller utenfor og se på bygningen.
2. Klikk {{ui:Visninger}} i gruppen {{ui:Kamera}}, og deretter {{ui:Gjennomgang i VR}}.
3. Ta på hodesettet.

Menyen er på baksiden av venstre hånd. Pek på den med høyre kontroller og trykk på avtrekkeren for å velge en knapp. (Med bare én hånd svever menyen foran stedet du startet.)

## Slik ser det ut

Hodesettet viser modellen med [livevisningens](topic:live-view) utseende: utseendet og materialene du ga flatene, himmelen og solen ut fra modellens sted og dato med skyggen sin, lamper, spredte planter og steiner, og lys som kastes fra vegger og gulv (regnet ut på denne datamaskinen mens du ser deg rundt, og følger deg når du beveger deg). Lysstyrke og visningstransformasjonen (ACES eller AgX) er de samme som i [Render et bilde](topic:render). Hvor mye som tegnes, avhenger av hva hodesettets nettleser har, som på skrivebordet; ambient occlusion, refleksjoner og bloom blir på skrivebordet.

## Bevege deg rundt

- **Hopp:** i {{ui:Flytt}} peker du på et gulv og trykker på avtrekkeren; du lander der. Eller skyv styrespaken fremover for å sikte, og slipp for å hoppe. Du kan bare lande på gulv og bakken (flater som vender opp), aldri på en vegg.
- **Snu deg:** skyv styrespaken til venstre eller høyre: du snur deg 30° hver gang.
- **Gå:** i spilleområdet ditt går du bare.

## Mål

Velg {{ui:Mål}}, og trykk deretter på avtrekkeren på to punkter. Avstanden vises mellom dem, i modellens enheter. Et punkt nær et hjørne fester seg til hjørnet.

## Kutt den opp

Velg {{ui:Snitt}} og trykk på avtrekkeren på en flate:

- på en vegg (eller noe som ikke er et gulv): alt mellom deg og den flaten kuttes bort, så du ser inn. Dette virker best utenfra, eller på tvers av et rom;
- på et gulv, ovenfra: et plansnitt 1.2 m over det gulvet, slik at veggene viser sin nedre del.

{{ui:Tøm}} fjerner snittet og målingene. Hvis et snittplan kutter modellen i visningen når du starter, starter hodesettet med det.

## Plasser en sak

Velg {{ui:Sak}} og trykk på avtrekkeren der problemet er. En nummerert nål markerer det, og ModelCraft beholder saken med et bilde av det du så og hvor du sto. Når du forlater VR, ligger sakene i listen {{ui:Saker}} til høyre:

- øyeknappen viser saken fra der den ble plassert;
- {{ui:Lagre som BCF}} laster ned dem alle som en BCF-fil, som BIM-gjennomgangsprogrammer åpner (med kamera og bilde);
- de lagres også i `.modelcraft`-filen.

Legg til en kommentar til en sak etter at du har forlatt VR, i et BCF-program: å skrive i hodesettet er ikke bygget ennå.

## Se den som en bordmodell

{{ui:Bordmodell}} krymper modellen så den passer på et bord foran deg; gå rundt den, eller snu den med styrespaken. {{ui:Full størrelse}} setter deg tilbake der du var.

## Sammen med andre, live

I en [live-økt](topic:work-live) ser alle i VR de andre som et hode og to hender i sin egen farge, med navnet sitt, og en prikk der hver peker. Endringer alle gjør, når hodesettet ditt innen et øyeblikk. Folk ved skrivebordet vises ikke i hodesettet ennå.

## Gå ut

Velg {{ui:Forlat VR}} (eller ta av hodesettet og avslutt der). Visningen på skjermen flytter seg til der hodet ditt var.

:::note
Testet bare med en hodesettemulator, ikke ennå med et ekte hodesett. En stor modell kan få hodesettet til å hakke: skjul det du ikke trenger først ([skjul og isoler](topic:hide-isolate)).
:::
