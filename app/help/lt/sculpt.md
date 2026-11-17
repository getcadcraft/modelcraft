---
title: Tinklelio skulptavimas
summary: Formuokite tinklelį kaip molį teptukais – braižymas, molis, lyginti, sugriebti, pripūsti, raukšlė, suspausti, suplokštinti – apsaugokite dalis kauke, atspindėkite per X ašį ir pridėkite detalių ten, kur skulptuojate.
keywords: skulptūra, skulptavimas, teptukas, teptukai, molis, braižymas, lyginti, sugriebti, pripūsti, raukšlė, suspausti, suplokštinti, kaukė, simetrija, veidrodis, detalė, dinaminė topologija, rašiklis, spaudimas, planšetė, stiliusas
from: 5477801a
---

Darbo sritis Skulptūra formuoja tinklelį teptukais, kaip su moliu: vilkite per paviršių – jis kyla, leidžiasi, išlyginasi arba seka žymeklį po apvaliu teptuku, stipriausias viduryje ir išnykstantis ties kraštu.

## Pradžia

Pažymėkite tinklelį ir pasirinkite {{ui:Skulptūra}} darbo sričių sąraše. Grupė ar komponentas pirmiausia tampa tinkleliu, kaip ir tinklelio darbo srityje. Teptukai veikia tinklelio viršūnes, todėl tinklelis su jų daugiau priima smulkesnes formas: pirma padalinkite jį ({{ui:Padalinti}} tinklelio darbo srityje arba paskirkite Subdivision surface modifikatorių, kurį pritaikote), arba įjunkite {{ui:Detalė}}.

## Teptukai

| Teptukas | Klavišas | Ką daro |
| --- | --- | --- |
| {{ui:Braižymas}} | {{key:D}} | Pakelia paviršių po teptuku |
| {{ui:Molis}} | {{key:C}} | Formuoja plonus lygius sluoksnius, pirma užpildydamas įdubimus |
| {{ui:Lyginti}} | {{key:S}} | Išlygina iškilimus; laikykite {{key:Shift}}, kad lygintumėte bet kuriuo teptuku |
| {{ui:Sugriebti}} | {{key:G}} | Tempia paviršių kartu su žymekliu |
| {{ui:Pripūsti}} | {{key:I}} | Išpučia paviršių jo paties kryptimi |
| {{ui:Raukšlė}} | {{key:Shift+C}} | Įpjauna aštrų griovelį |
| {{ui:Suspausti}} | {{key:P}} | Traukia paviršių link teptuko vidurio |
| {{ui:Suplokštinti}} | {{key:T}} | Spaudžia paviršių link jo vidutinės plokštumos |
| {{ui:Kaukė}} | {{key:M}} | Dažo kaukę, kuri apsaugo paviršių nuo kitų teptukų |

Vedant laikykite {{key:Ctrl}}, kad dirbtumėte priešinga kryptimi (leiskite žemyn vietoj kėlimo, kalnagūbrį vietoj griovelio, pašalinkite kaukę), arba įjunkite {{ui:Atimti}}.

## Dydis ir stiprumas

Teptuko dydis matuojamas ekrano pikseliais, todėl jis jaučiasi vienodai, kaip toli bepriartintumėte: {{key:[}} ir {{key:]}} jį padaro mažesnį ir didesnį, {{key:Shift+[}} ir {{key:Shift+]}} keičia jo stiprumą. Skydelyje rodomi abu.

Su rašikliu planšetėje spaudžiant stipriau teptukas tampa didesnis ir stipresnis; skydelyje galima išjungti vieną ar abu.

## Veidrodis, kaukė ir detalė

- {{ui:Veidrodis X}} ({{key:X}}) skulptuoja abi puses per raudoną ašį iš karto, veidams ir figūroms.
- Kaukė skulptuojant rodoma tamsesnė. {{ui:Pašalinti kaukę}} ({{key:Alt+M}}) ją nuima, {{ui:Apversti kaukę}} ({{key:Ctrl+I}}) apsaugo tai, kas buvo laisva, ir atlaisvina tai, kas buvo apsaugota. Kaukė išsaugoma kartu su tinkleliu.
- {{ui:Detalė}} prideda trikampių ten, kur skulptuojate: briaunos, ilgesnės nei skydelyje nustatytas dydis (ekrano pikseliais), padalijamos po teptuku. Jam reikia trikampių tinklelio, ir jis prašo pirma tokį sukurti.

Kiekvienas brūksnis – vienas anuliavimo žingsnis.

:::note
Detalė tik prideda trikampių; ji nepašalina tų, kurie tapo labai maži. Remesh (tinklelio darbo sritis) vėl išlygina visą tinklelį.
:::

Taip pat žr. [Tinklelio redagavimas](topic:mesh-edit), [Tinkleliai](topic:meshes) ir [Modifikatoriai ant tinklelio](topic:modifiers).
