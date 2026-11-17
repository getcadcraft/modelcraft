---
title: Nosūtīt ainu uz spēļu dzinēju
summary: Studio var ierakstīt ainu Unreal Engine projektā un to sinhronizēt ik reizi, kad sūtāt; jūsu paši labojumi atrodas slānī, ko CadCraft nekad nerakstīs. Spraudnis, kas to atver, vēl nav izlaists.
keywords: unreal, unreal engine, spēļu dzinējs, saite, sūtīt, usd skatuve, projekts, sinhronizācija, kinokamera, filmas renderēšanas rinda
from: 9a765cc2
---

CadCraft Studio dzinēju sarakstā var glabāt **saiti** uz Unreal Engine projektu. Tikai vienā virzienā: no CadCraft uz Unreal.

## Nosūtīt ainu

1. Dzinēju sarakstā izvēlieties Unreal ierakstu. Pirmajā reizē Studio lūgs izvēlēties projekta mapi (to, kurā ir fails `.uproject`); tā to atceras.
2. Noklikšķiniet uz {{ui:Sūtīt}}. Studio projektā ieraksta `CadCraft/<file name>/`: ainu kā USD failu, iestatījumu failu, gaismu profilus un divus mazus slāņu failus.
3. Mainiet modeli, saglabājiet un sūtiet vēlreiz. Tiek aizstāti tikai aina un iestatījumu fails.

## Jūsu paši labojumi ir droši

Skatuve, ko atver Unreal, ir neliels saknes slānis, kas tiek izveidots vienreiz, un zem tā divi slāņi: **jūsu** augšā (`<name>.user.usda`, sākumā tukšs, CadCraft to nekad nepārraksta) un CadCraft aina apakšā. Labojumi, ko saglabājat savā slānī, paliek, kad aina tiek nosūtīta vēlreiz. Gaismas un citi aktori, ko novietojat Unreal līmenī, atrodas ārpus skatuves, un arī tos neskar.

## Bez Studio

Pārlūkprogrammā vai datorā, kurā Studio neatrod Unreal, dzinēju sarakstā izvēlieties **Unreal projekta mape (.zip)** un noklikšķiniet uz {{ui:Renderēt}}. Tiek saglabāta tā pati mape kā zip fails: izsaiņojiet to projekta mapē `CadCraft`. Pirmajā reizē atstājiet ieslēgtu **Iekļaut skatuves failus**; nākamajām saglabāšanām to izslēdziet, lai zip failā būtu tikai aina un iestatījumu fails un jūsu paša slānis nekad netiktu aizstāts.

:::note
Unreal spraudnis, kas atver skatuvi, piemēro sauli, lampas, kameras un ekspozīciju, seko katrai nosūtīšanai un renderē kameru, **vēl nav izlaists**, un to Unreal vēl nav palaists. Līdz tam Sūtīt ievieto failus projektā, un Unreal pašu USD rīki tos var atvērt. Pirmā sistēma ir Windows; macOS seko.
:::
