---
title: Objektide valimine
summary: Klõpsa, topeltklõpsa ja kolmikklõpsa, lohista aken või ristkast, lisa ja eemalda klahvidega ning kustuta.
keywords: vali, valik, aken, ristkast, lisa valikusse, tühista valik, vali kõik, kolmikklõps, topeltklõps, kustuta, kustuta jälg
from: d56d1f89
---

{{ui:Vali}} ({{key:Space}}) on tööriist, millega ModelCraft alustab, ja see, millele {{key:Esc}} sind tagasi viib. Valitud objektid muutuvad siniseks ja paremal olev {{ui:Objekti teave}} ütleb, mis need on.

## Klõps

| Tee see | Valib |
|---|---|
| Klõpsa tahku või serva | Selle tahk või serv |
| Klõpsa gruppi või komponenti | Terve grupp või komponent |
| Topeltklõpsa tahku | Tahk ja tema servad |
| Topeltklõpsa serva | Serv ja selle mõlemal pool olevad tahud |
| Topeltklõpsa gruppi või komponenti | Avab selle muutmiseks (vt [Grupid ja komponendid](topic:groups-components)) |
| Kolmikklõpsa tahku või serva | Kõik sellega ühendatud: terve objekt |
| Klõpsa tühja ruumi | Mitte midagi (tühistab valiku) |
| Topeltklõpsa tühja ruumi grupi muutmise ajal | Sulgeb grupi |

Servi on lihtsam tabada kui tahke: kui kursor on serva lähedal (mõne pikslikauguse piires), võtab klõps serva.

## Lohista kast

- **Vasakult paremale** joonistab tahke kasti: **akna** valiku. Valitakse ainult need objektid, mis jäävad kasti täielikult sisse.
- **Paremalt vasakule** joonistab katkendliku kasti: **ristkasti** valiku. Valitakse kõik, mida kast puudutab, ja tahk valitakse, kui kast jääb tahu sisse täielikult.

Grupp või komponent loetakse üheks objektiks: aken peab seda tervikuna hõlmama, ristkast peab seda ainult puudutama.

## Lisa ja eemalda

Hoia klahvi all, kui klõpsad või lohistad:

| Klahv | Mõju |
|---|---|
| {{key:Shift}} | Lülitab: lisab need, mis pole valitud, ja eemaldab need, mis on |
| {{key:Mod}} | Lisab |
| {{key:Shift}} ja {{key:Mod}} koos | Eemaldab |

Kogu mudeli (või muudetava grupi kõigi objektide) valimiseks vajuta {{key:Mod+A}}.

## Tühista valik

Vajuta {{key:Esc}} (kui tööriist on {{ui:Vali}}) või klõpsa tühja ruumi.

## Kustuta valitu

Vajuta {{key:Delete}} või {{key:Backspace}}. Valikus olevad tahud, servad, grupid ja abijooned eemaldatakse ühe sammuga; {{key:Mod+Z}} toob need tagasi.

Serva kustutamine eemaldab tahud, mis seda vajavad, välja arvatud juhul, kui serv eraldas ainult kahte tahku samal tasapinnal: siis need kaks tahku liituvad üheks. Tahu kustutamine jätab tema servad alles. Vt [Kustutamine ja puhastamine](topic:erase).

## Vali grupi seest

Grupi klõpsamine valib kogu grupi. Selle sees oleva tahu valimiseks topeltklõpsa gruppi, et see avada, ja siis klõpsa. Kui grupp on avatud, jõuavad klõpsud ainult selle sees olevateni; kõik muu on tuhmunud. Vajuta {{key:Esc}}, kui midagi pole valitud, või topeltklõpsa tühja ruumi, et grupp sulgeda.

{{ui:Struktuur}} vasakul valib grupid ja komponendid nime järgi, mis aitab, kui need on teiste asjade taga peidus.
