---
title: Skaalaa kertoimilla ja kutistumisvarauksella
summary: Skaalaa valinta kertoimella kullekin akselille valitsemasi pisteen ympäri tai suurenna kuvio valettavan osan kutistumisprosentin verran.
keywords: skaalaus, epätasainen, kerroin, prosentti, venytys, kutistuma, kutistuminen, valu, kuvio, valimo, varaus, koon muutos
from: 37e1bbff
---

Skaalaustyökalu ({{key:S}}) skaalaa tasaisesti tai vetää kahvasta venyttääkseen yhtä tai kahta suuntaa. **Skaalaa kertoimilla…** (Työkalut-valikko tai Muokkaa-ryhmä) on kirjoitettu muoto: yksi luku kullekin kolmelle akselille.

1. Valitse särmät, pinnat, ryhmät tai komponentit.
2. Avaa {{ui:Skaalaa kertoimilla…}}. Kirjoita kerroin punaiselle, vihreälle ja siniselle. Kerroin voi olla `1.015`, `101.5%` tai `+1.5%` (ja `-2%` pienemmälle). {{ui:Sama kaikilla kolmella akselilla}} kopioi ensimmäisen kahteen muuhun.
3. Valitse, mikä **pysyy paikallaan**: valinnan keskikohta, sen alin kulma, sen alareunan keskikohta tai origo.
4. Rivi kenttien alla näyttää koon nyt ja sen jälkeen. {{ui:Skaalaa}} tekee sen yhdellä kumoamisvaiheella.

Akselit ovat avaamasi ryhmän akselit (mallin omat ylätasolla). Kierretty ryhmä tai komponentti tulee vinoksi, jos sen kertoimet eroavat. Skaalaa siinä tapauksessa sitä ryhmää, joka sen sisältää. Komponentin sisältö ei muutu, joten sen muut kopiot pysyvät ennallaan.

## Kutistumisvaraus

Valettu osa kutistuu jäähtyessään, joten sen kuvio tehdään suuremmaksi. Kirjoita kohdassa **Kutistumisvaraus** jokaiselle akselille prosentti (valimo tai kuvion tekijä antaa sen metallillesi; 1.5 % alla on vain esimerkki) ja paina {{ui:Käytä kertoimina}}.

- **Prosentti itsessään** tekee kertoimesta 1 plus prosentti: 1.5 % antaa 1.015, sen mukaan jonka kutistusmitta merkitsee.
- **Täsmälleen riittävä** tekee kertoimesta 1 jaettuna yhdellä miinus prosentti: 1.5 % antaa 1.0152, joten valu tulee osan kokoiseksi sen kutistuttua näin paljon.

Viimeisimmät prosentit muistetaan tässä selaimessa.

:::note
Prosentti on sinun annettavissasi: ModelCraft ei tiedä metallistasi, muotistasi tai prosessistasi mitään.
:::
