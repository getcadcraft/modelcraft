---
title: Atidarykite sceną kitoje programoje
summary: Įrašykite sceną kaip USD ar glTF failą bet kuriai programai, kuri juos skaito, arba atidarykite ją iš Studio programoje šiame kompiuteryje.
keywords: atidaryti, usd, gltf, glb, eksportas, atvaizdavimo programa, archviz, studio, usdview, siųsti, perdavimas, paketas, unreal aplankas
from: 812329d5
---

Pasirinkite įrašą **Atidaryti** {{ui:Atvaizduoti paveikslėlį…}} variklių sąraše, kad nuvestumėte sceną į kitą programą. Į modelį nieko negrįžta.

## Failas bet kuriai programai

- **USD failas** įrašo sceną kaip `.usdc` (arba `.usdz`, kai modelis turi paveikslėlius): [tas pats failas kaip Įrašyti kaip USD](topic:usd), su medžiagomis, lempomis ir kameromis. Jis išsaugo egzempliorius ir tikslias medžiagų reikšmes. Dauguma atvaizdavimo programų, žaidimų variklių ir peržiūros programų skaito USD.
- **glTF failas (.glb)** įrašo lengvesnį glTF 2.0 failą su medžiagomis, tekstūromis ir lempomis; žr. [Eksportuokite modelį kitoms programoms](topic:export-model) formatus, kuriuos rašo ModelCraft.

- **Unreal projekto aplankas (.zip)** įrašo aplanką, kurį rašo [Siųskite sceną žaidimų varikliui](topic:render-unreal), skirtą projektui bet kuriame kompiuteryje.

Visi trys veikia naršyklėje ir Studio.

## Studio: atidarykite programoje

Studio išvardija programas, kurias randa šiame kompiuteryje ir kurios gali atidaryti sceną: usdview, jei jis yra jūsų paieškos kelyje, ir kompiuterio pačios programos tam failo tipui. Pasirinkite vieną, pasirinkite USD arba glTF ten, kur ji skaito abu, ir spustelėkite {{ui:Atvaizduoti}}. Studio įrašo paketą į naują aplanką po Dokumentai (`CadCraft hand-off`; niekas neperrašoma, kiekvienas siuntimas gauna savo aplanką), paleidžia programą jame ir praneša, kur yra failai.

| Programa | Geriausiai skaito |
|---|---|
| usdview | USD |
| Kompiuterio pati programa | Ką kompiuteris turi tam failo tipui |

Studio paleidžia tik programas iš šio fiksuoto sąrašo; ji nepaleidžia nieko, ko puslapis pareikalauja vardu, ir niekada nepaleidžia programos pagal GNU GPL licenciją (žr. [Nubraižykite paveikslėlį kita programa](topic:render-other-program#programs-cadcraft-never-runs)). Bet kuri programa, skaitanti USD ar glTF, atidaro failą iš **Failas bet kuriai programai** aukščiau.

:::note
Twinmotion, Enscape ir kitos vizualizacijos programos nėra sąraše: su CadCraft jos nebuvo patikrintos, ir apie jas nieko netvirtinama. Čia gautas glTF ar USD failas yra kelias į jas.
:::
