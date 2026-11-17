---
title: Millä koneesi renderöi
summary: Asetukset › Renderöinti näyttää grafiikan, suoritinytimet ja muistin, jotka tämä selain sallii sovelluksen käyttää, sekä tason, josta renderöinti alkaa.
keywords: koneesi, näytönohjain, gpu, webgpu, webgl, suoritin, cpu, ytimet, säikeet, muisti, ram, jaettu muisti, eristys, taso, nopeus, hidas, renderöinnin nopeus, kannettava
from: 8a0c21c9
---

Avaa {{ui:Asetukset}} ({{key:Mod+,}}), pysy tämän sovelluksen omalla välilehdellä ja vieritä kohtaan {{ui:Renderöinti}}. {{ui:Koneesi}} luettelee, mitä tämä selain sallii sovelluksen käyttää renderöintiin. Mikään siinä ei poistu tietokoneeltasi.

| Rivi | Mitä se tarkoittaa |
|---|---|
| {{ui:Grafiikka}} | Selaimen ilmoittama näytönohjain. ”WebGPU” tarkoittaa, että se pystyy tekemään kaiken renderöintityön; ”WebGL 2 only” tarkoittaa, että live-näkymä ja {{ui:Renderöi kuva…}} käyttävät sitä (laadukas WebGL-polunjäljityksellä), mutta renderöintiä näkymässä ja renderöintijonoa, jotka vaativat WebGPU:n, ei tarjota; ohjelmistollinen korvike tarkoittaa, että kaikki suoritetaan suorittimella |
| {{ui:Suoritin}} | Kuinka monta suoritinydintä selain ilmoittaa |
| {{ui:Muisti}} | Likimääräinen muistin määrä tietokoneessa, kun selain sen ilmoittaa. Jotkin selaimet eivät ilmoita sitä |
| {{ui:Jaettu muisti}} | Saako sivu jakaa muistia työntekijöidensä välillä. Kun päällä, jokainen ydin voi työskennellä yhden kohtauksen kopiolla; kun pois, jokainen tarvitsee oman kopionsa, joten suuri kohtaus mahtuu kerralla harvempiin ytimiin |
| {{ui:Nopea suorituskoodi}} | Ajaako selain nopeampaa WebAssembly-koodia. Ilman sitä käytetään hitaampaa varakoodia |
| {{ui:Taso}} | {{ui:Näytönohjain, korkea}}, {{ui:Näytönohjain, perus}} tai {{ui:Vain suoritin}}, ja syy on sen alla |

## Taso

Taso määrittää, mistä [live-näkymä](topic:live-view) alkaa ({{ui:Tälle tietokoneelle}}), kuinka monta hajallaan olevaa kohdetta se piirtää ja kuinka monta pintaa [jakopinta](topic:modifiers#subdivision-surface) saa näyttää näkymässä, jotta kannettava, jossa on sisäinen näytönohjainpiiri tai ei lainkaan näytönohjainta, pysyy reagoivana. Sisäinen tai puhelimen grafiikkapiiri tai enintään 4 GB muistia ei koskaan saa {{ui:Näytönohjain, korkea}}-tasoa.

:::note
Selaimet eroavat toisistaan. Sama tietokone voi näyttää WebGPU:n yhdessä selaimessa ja ”WebGL 2 only” toisessa. Linuxissa useimmissa selaimissa WebGPU ei ole vielä käytössä.
:::
