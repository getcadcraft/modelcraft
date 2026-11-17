---
title: Keisti mastelį koeficientais ir susitraukimo leidimu
summary: Pakeiskite pažymėtos dalies mastelį koeficientu kiekvienai ašiai apie jūsų pasirinktą tašką arba padidinkite raštą procentu, kiek liejama detalė susitrauks.
keywords: mastelis, nevienodas, koeficientas, procentas, tempimas, susitraukimas, susitraukti, liejimas, raštas, liejykla, leidimas, keisti dydį
from: 37e1bbff
---

Įrankis {{ui:Mastelis}} ({{key:S}}) keičia mastelį vienodai arba tempia rankenėlę, kad ištemptų vieną ar dvi kryptis. **{{ui:Keisti mastelį koeficientais…}}** (Įrankių meniu arba grupė Keisti) yra įvedamoji forma: skaičius kiekvienai iš trijų ašių.

1. Pažymėkite briaunas, paviršius, grupes ar komponentus.
2. Atidarykite {{ui:Keisti mastelį koeficientais…}}. Įveskite koeficientą raudonai, žaliai ir mėlynai. Koeficientas gali būti `1.015`, `101.5%` arba `+1.5%` (o `-2%`, kad būtų mažesnis). {{ui:Tas pats visose trijose ašyse}} pirmąjį nukopijuoja į kitas dvi.
3. Pasirinkite, kas **lieka vietoje**: pažymėtos dalies vidurys, jos žemiausias kampas, jos apačios vidurys arba pradžios taškas.
4. Eilutė po laukais rodo dabartinį ir būsimą dydį. {{ui:Mastelis}} atlieka tai vienu anuliavimo žingsniu.

Ašys yra atidarytos grupės ašys (modelio ašys aukščiausiame lygyje). Pasukta grupė ar komponentas, jei jų koeficientai skiriasi, išeina iškreipti; vietoje to keiskite mastelį grupės, kurioje jis yra. Komponento turinys nekeičiamas, todėl kitos jo kopijos lieka kaip buvo.

## Susitraukimo leidimas

Liejama detalė susitraukia atvėsdama, todėl jos raštas daromas didesnis. Skiltyje **Susitraukimo leidimas** įveskite procentą kiekvienai ašiai (jį jūsų liejykla arba modelių gamintojas nurodo jūsų metalui; žemiau pateiktas 1.5 % yra tik pavyzdys) ir paspauskite {{ui:Naudoti kaip koeficientus}}.

- **Pats procentas** padaro koeficientą lygų 1 + procentas: 1.5 % duoda 1.015 – tai, ką žymi susitraukimo liniuotė.
- **Tiksliai pakankamas** padaro koeficientą lygų 1 padalinta iš (1 − procentas): 1.5 % duoda 1.0152, todėl liejinys išeina detalės dydžio, kai toks procentas susitraukia.

Jūsų paskutiniai procentai įsimenami šioje naršyklėje.

:::note
Procentą nurodote jūs: ModelCraft nieko nežino apie jūsų metalą, liejimo formą ar procesą.
:::
