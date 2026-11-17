---
title: Tuo tonttialue CivilCraftista
summary: Avaa CivilCraftin tekemä osoitteesta tonttialueeksi -tiedosto ja lisää sen ympärille rakennukset ja tontti massoina sekä tonttiviivana, vain rastitetut.
keywords: tonttialue, civilcraft, osoite, tontti, naapurirakennukset, massat, konteksti, ccsite, avoin data, openstreetmap
from: f28e4a3b
---

CivilCraft voi hakea osoitteen ja tallentaa sen ympärillä olevat tiedot avoimista tietolähteistä: naapurirakennukset, tontin sekä tulva-, kaavoitus- ja maaperärajaukset. ModelCraft ottaa tiedoston ehdotuksina. Mitään ei lisätä, ennen kuin lisäys vahvistetaan.

## Tuo tiedosto

1. Lähetä tonttialue CivilCraftista ModelCraft-sovellukseen tai tallenna tiedosto (sen loppu on `.ccsite.json`).
2. Avaa tiedosto ModelCraft-sovelluksessa tai pudota se sinne. Avautuu luettelo, jossa on rasti jokaiselle rakennukselle ja tontille.
3. Kirjoita korkeus niille rakennuksille, joille lähde ei antanut sitä. Kunkin vieressä on rivi, joka kertoo korkeuden alkuperän: kerrosten määrä kerrottuna 3 m:llä tai kirjoitettu korkeus.
4. Paina {{ui:Lisää valitut}}.

Rastitetut rakennukset muuttuvat pursotetuiksi massoiksi yhteen komponenttiin, ja tontti muuttuu viivaksi tonttialueen ympärille. Kaikki tämä on yksi kumoamisvaihe. Osoitepiste on origossa, ja muut kohteet ovat metreinä sen itä- ja pohjoissuunnassa.

Tulva-, kaavoitus- ja maaperärajaukset on lueteltu vain tiedoksi; niitä ei piirretä.

Tiedot tulevat avoimista lähteistä, ja lähdemerkintä on luettelon alareunassa. Korkeudet, joita ei annettu, ovat oletuksia, joten tarkista ne ennen kuin luotat niihin.
