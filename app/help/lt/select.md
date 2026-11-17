---
title: Objektų pasirinkimas
summary: Spustelėkite, dukart ir trigubai spustelėkite, vilkite langą ar kirtimo rėmelį, pridėkite ir šalinkite su modifikatorių klavišais bei ištrinkite.
keywords: pasirinkimas, pasirinkti, langas, kirtimas, pridėti prie pasirinkimo, panaikinti pasirinkimą, pasirinkti viską, trigubas spustelėjimas, dukart spustelėjimas, ištrinti, naikinti
from: d56d1f89
---

{{ui:Pasirinkti}} ({{key:Space}}) yra įrankis, su kuriuo ModelCraft pradeda darbą ir į kurį grįžtama klavišu {{key:Esc}}. Pasirinkti objektai tampa mėlyni, o dešinėje esanti {{ui:Objekto informacija}} parodo, kas tai yra.

## Spustelėjimas

| Atlikite | Pasirenka |
|---|---|
| Spustelėkite paviršių arba briauną | Tą paviršių arba briauną |
| Spustelėkite grupę arba komponentą | Visą grupę arba komponentą |
| Dukart spustelėkite paviršių | Paviršių ir jo briaunas |
| Dukart spustelėkite briauną | Briauną ir paviršius abiejose jos pusėse |
| Dukart spustelėkite grupę arba komponentą | Atidaro jį redagavimui (žr. [Grupės ir komponentai](topic:groups-components)) |
| Trigubai spustelėkite paviršių arba briauną | Viską, kas su juo sujungta: visą objektą |
| Spustelėkite tuščią erdvę | Nieko (panaikina pasirinkimą) |
| Dukart spustelėkite tuščią erdvę redaguodami grupę | Uždaro grupę |

Briaunas lengviau pataikyti nei paviršius: kai žymeklis yra per kelis pikselius nuo briaunos, spustelėjimas pasirenka briauną.

## Rėmelio vilkimas

- **Iš kairės į dešinę** piešia ištisinį rėmelį: **lango** pasirinkimas. Pasirenkami tik objektai, visiškai esantys jo viduje.
- **Iš dešinės į kairę** piešia brūkšninį rėmelį: **kirtimo** pasirinkimas. Pasirenkama viskas, ko rėmelis palietė, o paviršius pasirenkamas, kai rėmelis visiškai yra jo viduje.

Grupė arba komponentas skaičiuojami kaip vienas objektas: langas turi apimti visą jį, kirtimas tik turi jį liesti.

## Pridėjimas ir šalinimas

Laikydami klavišą, spustelėkite arba vilkite:

| Klavišas | Veikimas |
|---|---|
| {{key:Shift}} | Perjungia: prideda tai, kas nepasirinkta, ir šalina tai, kas pasirinkta |
| {{key:Mod}} | Prideda |
| {{key:Shift}} ir {{key:Mod}} kartu | Šalina |

Kad pasirinktumėte visus modelio objektus (arba visus redaguojamos grupės objektus), paspauskite {{key:Mod+A}}.

## Pasirinkimo panaikinimas

Paspauskite {{key:Esc}} (kai įrankis yra {{ui:Pasirinkti}}) arba spustelėkite tuščią erdvę.

## Pasirinkto ištrynimas

Paspauskite {{key:Delete}} arba {{key:Backspace}}. Pasirinkti paviršiai, briaunos, grupės ir vedliai pašalinami vienu žingsniu; {{key:Mod+Z}} juos grąžina.

Ištrynus briauną pašalinami paviršiai, kuriems ji reikalinga, nebent briauna tik skyrė du tos pačios plokštumos paviršius: tada abu paviršiai susijungia į vieną. Ištrynus paviršių, jo briaunos lieka. Žr. [Trynimas ir valymas](topic:erase).

## Pasirinkimas grupės viduje

Spustelėjus grupę, pasirenkama visa grupė. Kad pasirinktumėte jos viduje esantį paviršių, dukart spustelėkite grupę, kad ją atidarytumėte, tada spustelėkite paviršių. Kol grupė atidaryta, spustelėjimai pasiekia tik tai, kas yra jos viduje; viskas kita išblunka. Paspauskite {{key:Esc}}, kai nieko nepasirinkta, arba dukart spustelėkite tuščią erdvę, kad ją uždarytumėte.

{{ui:Struktūra}} kairėje pasirenka grupes ir komponentus pagal pavadinimą, o tai padeda, kai jie paslėpti už kitų objektų.
