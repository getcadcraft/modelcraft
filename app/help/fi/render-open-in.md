---
title: Avaa kohtaus toisessa ohjelmassa
summary: Tallenna kohtaus USD- tai glTF-tiedostona mihin tahansa ohjelmaan, joka lukee niitä, tai avaa se Studiosta tällä tietokoneella olevassa ohjelmassa.
keywords: avaa, usd, gltf, glb, vienti, renderöintiohjelma, arkkitehtuurivisualisointi, studio, usdview, lähetys, luovutus, paketti, Unreal-kansio
from: 812329d5
---

Valitse {{ui:Renderöi kuva…}}-valintaikkunan Moottori-luettelosta kohta **Avaa …**, jolla viet kohtauksen toiseen ohjelmaan. Mitään ei palaa mallin.

## Tiedosto mihin tahansa ohjelmaan

- **USD-tiedosto** tallentaa kohtauksen `.usdc`-muodossa (tai `.usdz`, kun mallissa on kuvia): sama tiedosto kuin [Tallenna USD-muodossa](topic:usd), materiaaleineen, lamppuineen ja kameroineen. Se säilyttää ilmentymät ja tarkat materiaaliarvot. Useimmat renderöijät, pelimoottorit ja katseluohjelmat lukevat USD:tä.
- **glTF-tiedosto (.glb)** tallentaa kevyemmän glTF 2.0 -tiedoston, jossa ovat materiaalit, tekstuurit ja lamput. Katso [Vie malli muihin ohjelmiin](topic:export-model) muodoista, joihin ModelCraft kirjoittaa.
- **Unreal-projektikansio (.zip)** tallentaa kansion, jonka [Lähetä kohtaus pelimoottoriin](topic:render-unreal) kirjoittaa. Kansiota voi käyttää projektissa millä tahansa tietokoneella.

Kaikki kolme toimivat selaimessa ja Studiossa.

## Studiossa: avaa ohjelmassa

Studio luettelee ohjelmat, jotka se löytää tältä tietokoneelta ja jotka voivat avata kohtauksen: usdview, jos se on hakupolullasi, ja tietokoneen oma ohjelma tiedostotyypille. Valitse ohjelma, valitse USD tai glTF siinä, missä se lukee molempia, ja napsauta {{ui:Renderöi}}. Studio kirjoittaa paketin uuteen kansioon Asiakirjat-kansion alle (`CadCraft hand-off`). Mitään ei korvata, ja jokainen lähetys saa oman kansionsa. Sen jälkeen Studio käynnistää ohjelman siinä kansiossa ja kertoo, missä tiedostot ovat.

| Ohjelma | Lukee parhaiten |
|---|---|
| usdview | USD |
| Tietokoneen oma ohjelma | Mitä tietokoneella on kyseiselle tiedostotyypille |

Studio käynnistää vain tästä kiinteästä luettelosta olevia ohjelmia. Se ei aja mitään, mitä sivu pyytää nimeltä, eikä koskaan käynnistä ohjelmaa GNU GPL -lisenssillä (katso [Piirrä kuva toisella ohjelmalla](topic:render-other-program#programs-cadcraft-never-runs)). Mikä tahansa ohjelma, joka lukee USD:tä tai glTF:ää, avaa tiedoston kohdasta **Tiedosto mihin tahansa ohjelmaan** yllä.

:::note
Twinmotion, Enscape ja muut visualisointiohjelmat eivät ole luettelossa. CadCraftia ei ole testattu niiden kanssa, eikä siitä tehdä väitteitä niistä. Tästä tulevat glTF- tai USD-tiedostot ovat reitti niihin.
:::
