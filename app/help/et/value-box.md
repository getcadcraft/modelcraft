---
title: Sisesta täpsed mõõdud väärtusekastis
summary: Kõik viisid, kuidas kirjutada pikkusi, mõõte, punkte, nihkeid, nurki, külgi ja koopiaid, ning kuidas loetakse ühikuid ja paljaid arve.
keywords: väärtusekast, mõõtmekast, vcb, sisesta, täpne, mõõt, pikkus, ühikud, jalad, tollid, meetriline, millimeetrid, koordinaadid, nihe, massiiv, küljed, nurk, kümnendkoma
from: 0148dc3d
---

Väärtusekast asub all olevas olekuribas ja selle silt muutub vastavalt tööriistale. Töö ajal näitab see reaalajas mõõdet; igal hetkel saad sisestada täpse.

## Kuidas sisestada

1. Alusta toimingut klõpsuga (esimene nurk, tahk, punkt, millest liigutada).
2. Kirjuta. Väärtusekasti ei pea klõpsama: number või üks märkidest `. , - ' " [ < * /` saadab sinu kirjutatu sinna.
3. Vajuta {{key:Enter}}.

Vajuta väärtusekastis {{key:Esc}}, et see tühjendada ja naasta vaatesse. Puuteekraanil puuduta väärtusekasti, et klaviatuur ilmuks.

Kui ModelCraft ei suuda sinu kirjutatut lugeda, ütleb olekuriba: „Sisesta pikkus, näiteks 3m, 10'6" või 4m,3m.“ Kui tööriist seda ei kasuta, ütleb see: „See ei töötanud: …“ koos põhjusega.

## Pikkused

| Kirjuta | Tähendab |
|---|---|
| `3m` `320cm` `3200mm` | Meetrid, sentimeetrid, millimeetrid |
| `10'` `10ft` `10 feet` | Jalad |
| `6"` `6in` `6 inches` | Tollid |
| `10'6"` `10' 6"` `10'-6 1/2"` | Jalad ja tollid, murdosaga |
| `6 1/2"` `6-1/2"` `3/4"` | Tollid murdosaga |
| `1.5ft` `.5m` | Kümnendarvud ühikuga |
| `120` | Paljas arv mudeli ühikus |

**Paljas arv kasutab mudeli ühikut**, nagu on näidatud paremal all valijas: jalgade ja tollidega mudelis tollid (nii et `120` on 10 jalga), millimeetrites mudelis millimeetrid ja nii edasi. Ühiku kirjutamine võidab alati, olenemata mudeli ühikust. Kaarjad jutumärgid ja prime-märgid (’ ” ′ ″) loetakse samuti jalgade ja tollidena.

:::warning
Kümnendkohtade puhul kasuta alati **punkti**: `2.5m`. Koma eraldab kaks väärtust, nii et `2,5` tähendab 2 ja 5 (kaks väärtust), olenemata sinu keelesätetest.
:::

## Arvutused

Iga pikkus võib olla arvutus: liida `+`, lahuta `-`, korruta `*`, jaga `/` ja kasuta sulge. Kalkulaatorit pole vaja.

| Kirjuta | Tähendab |
|---|---|
| `2.5/3` | Kolmandik arvust 2.5 (mudeli ühikus) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" jalgade ja tollidega mudelis |
| `3m-25cm` | 2.75 m |

Paljas arv on mudeli ühikus, kui see on pikkus (`2.5/3` meetrites mudelis on 0.833 m), ja lihttegur, kui see korrutab või jagab pikkust (`2*450mm`). Ka nurgad ja tegurid võivad olla arvutused: `90/2` on 45°. Kaks korrutatud pikkust annavad pindala, mitte pikkuse, seega `2m*3m` lükatakse tagasi.

Kui ModelCraft ei suuda seda arvutada, ütleb olekuriba, mis on valesti ja kus, näiteks „Nulliga jagamine (märk 4).“ Sulg käivitab samuti väärtusekasti, nii et võid alustada `(`-ga.

Need säilitavad oma tähenduse: `/3`, `3x` ja `*3` pärast koopiat, `24s` külgede jaoks ning `/3` valitud servaga (see [jagab serva](topic:divide)).

## Tööriistade kaupa

| Tööriist | Silt | Kirjuta |
|---|---|---|
| {{ui:Joon}} | {{ui:Pikkus}} | Pikkus (osuti suunas) või punkt või nihe (allpool) |
| {{ui:Ristkülik}} | {{ui:Mõõdud}} | Kaks pikkust: `4m,3m`, `12',10'`. Töötab ka semikoolon: `4m;3m` |
| {{ui:Ring}}, {{ui:Hulknurk}} | {{ui:Küljed}}, seejärel {{ui:Raadius}} | Enne esimest klõpsu külgede arv: `12s` või `12` (3 kuni 999). Pärast seda raadius |
| {{ui:Lükka/tõmba}} | {{ui:Vahemaa}} | Pikkus. Negatiivne läheb vastupidises suunas |
| {{ui:Teisalda}} | {{ui:Vahemaa}} | Pikkus (osuti suunas) või punkt või nihe. Pärast koopiat: `3x`, `*3`, `/3` |
| {{ui:Pööra}} | {{ui:Nurk}} | Kraadid: `90`, `-45`, `22.5` |
| {{ui:Mõõtkava}} | {{ui:Mõõtkava}} | Tegur suurem kui 0: `2`, `0.5`, `1.25` |
| {{ui:Mõõdulint}} | {{ui:Nihe}} või {{ui:Pikkus}} | Pikkus |
| {{ui:Jaga}} | {{ui:Osad}} | Mitu võrdset osa: `5`, `5s` või `/5` (2 kuni 1000). Vt [Jaga serv või kõver võrdseteks osadeks](topic:divide) |
| {{ui:Mõõt}} | {{ui:Nihe}}, seejärel {{ui:Pikkus}} | Kuhu mõõtejoon läheb; kohe pärast paigutamist muudab uus pikkus mudeli suurust |
| {{ui:Vali}} | {{ui:Väärtus}} | Kui valitud on üks mõõde või serv, muudab uus pikkus mudeli suurust. Vt [Mõõt ja suuruse muutmine](topic:dimensions) |

## Punktid ja nihked

{{ui:Joon}} ja {{ui:Teisalda}} puhul pärast esimest klõpsu:

- `[x,y,z]` viib sellesse täpsesse punkti mudelis (grupi enda telgedes, kui muudad gruppi seest). Näide: `[0,0,3m]` on 3 m otse koordinaatide alguspunktist üleval.
- `<dx,dy,dz>` läheb nii kaugele esimesest punktist mööda punast, rohelist ja sinist telge. Näide: `<0,0,10'>` on 10 jalga otse üles.

Igal kolmest väärtusest võib olla oma ühik: `<12',0,6">`.

## Koopiad pärast teisaldamist

Vahetult pärast koopiat {{ui:Teisalda}} abil:

| Kirjuta | Teeb |
|---|---|
| `3x` või `*3` | 3 koopiat järjest samal vahel |
| `/3` | 3 koopiat ühtlaselt laiali originaalist esimese koopiani |

Kuni 500 koopiat. Vt [Teisalda, kopeeri ja tee massiive](topic:move-copy#a-row-of-copies).

## Kirjutatud pikkused vajavad suunda

Üks kirjutatud pikkus läheb sellises suunas, nagu osuti on esimesest klõpsust. Kui kirjutad kohe pärast klõpsu, enne liigutamist, suunda veel pole ja midagi ei juhtu. Liiguta osutit natuke sinna, kuhu tahad minna, ja siis kirjuta.

## Mudeli ühik

Muuda ühikut paremal all olevast valijast: {{ui:jalad ja tollid}}, in, ft, yd, mi, mil, µm, mm, cm, m või km, niivõrd, kuivõrd need on sisse lülitatud {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Ühikud}} all (mudeli enda ühik on alati olemas). Pikkus, mis on kirjutatud mis tahes ühiku tähisega, loetakse selles ühikus. Vt [Ühikud, kirjutatud väärtused ja ühikuloendid](common:unit-lists). See muudab seda, kuidas pikkused kuvatakse ja kuidas paljaid arve loetakse; mudel jääb samasuuruseks. Ühik salvestatakse faili.

Kuidas suurused kuvatakse:

| Ühik | Pikkused | Pindalad | Mahud |
|---|---|---|---|
| jalad ja tollid | `10' 6 1/2"` (täpsusega 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² alates 0.01 m², muidu mm² | m³ alates 0.01 m³, muidu mm³ |

Uus mudel algab jalgades ja tollides, kui brauseri keel on seatud USA piirkonnale (ning Libeeria ja Myanmari puhul), ja kõikjal mujal millimeetrites. Selle asemel kasutatakse ühikut, mis on {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Ühikud}} all tärniga märgitud, kui ModelCraft seda toetab. Või muuda valijat pärast {{ui:Uus}}.
