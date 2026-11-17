---
title: Nubraižykite paveikslėlį kita programa
summary: Mūsų pačių kelio sekiklis nubraižo atvaizdavimo paveikslėlį; kita programa gali jį nubraižyti tik per atvaizdavimo variklio priedą CadCraft Studio. Kas perduodama ir kodėl kai kurios programos niekada nesiūlomos.
keywords: atvaizdavimas, variklis, išorinė programa, priedo variklis, studio, fonas, eilė, usd, gltf, nubraižyta, blender, gpl
from: 150f94f1
---

Paveikslėlį {{ui:Atvaizduoti paveikslėlį…}} nubraižo **mūsų pačių varikliai**: Greitas ir Kelio sekėjas, naršyklėje ir CadCraft Studio. Kita programa gali jį nubraižyti tik tada, kai jį pateikia **atvaizdavimo variklio priedas**: žr. [Pridėkite atvaizdavimo variklį su priedu](topic:render-engine-addons). Norėdami nuvesti sceną į kitą programą ir toliau dirbti ten, naudokite [Atidarykite sceną kitoje programoje](topic:render-open-in) arba [Siųskite sceną žaidimų varikliui](topic:render-unreal).

## Nubraižykite paveikslėlį priedo varikliu

1. Įjunkite priedą {{ui:Parametrai}} › {{ui:Priedai}}. Jo variklis atsiranda {{ui:Atvaizduoti paveikslėlį…}} variklių sąraše.
2. Pasirinkite jį. Jo paties nustatymai rodomi po variklių sąrašu.
3. Spustelėkite {{ui:Atvaizduoti}}. Pirmą kartą, kai priedas paleidžia programą, Studio klausia savo dialoge. Eiga rodoma, kol jis braižo; {{ui:Stabdyti}} ją nutraukia. Paveikslėlis atsiranda pažymėtas varikliu, kuris jį nubraižė.

Variklis, parašytas JavaScript, veikia ir naršyklėje. Variklis, kuris paleidžia programą šiame kompiuteryje, veikia tik Studio; naršyklėje jis rodomas kaip failas, kurį reikia įrašyti.

## Kas perduodama

Variklis gauna **paketą**: modelį kaip USD failą (ir glTF failą, kai jo prašo), ir nustatymų failą su tiksliomis medžiagų reikšmėmis, saule ir dangumi, kiekviena įjungta lempa su galia ir šviesos profiliu, kamera ir ekspozicija. Kiekviena programa šviesą, toną ir mėginius apdoroja savaip, todėl paveikslėliai yra panašūs kameros, saulės, lempų ir ekspozicijos atžvilgiu, bet ne pikselis į pikselį.

## Programos, kurių CadCraft niekada nepaleidžia

CadCraft niekada nepaleidžia programos pagal GNU GPL licenciją ir niekada jos neįtraukia nei kaip variklio, nei kaip **Atidaryti** paskirties. Blender yra viena iš jų, todėl jos nėra variklių sąraše. USD ar glTF failas, įrašytas iš {{ui:Atvaizduoti paveikslėlį…}}, vis dar atsidaro joje, kaip ir bet kurioje programoje, skaitančioje tuos failus.

:::note
Panoraminės ir stereo kameros bei dangaus paveikslėlis (naudojamos dangaus spalvos) kitai programai neperduodami. Nieko, padaryto kitoje programoje, į modelį negrįžta.
:::
