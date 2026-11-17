---
title: USD įrašymas, atidarymas ir eksportas
summary: Įrašykite visą modelį kaip USD (.usda, .usdc arba .usdz) be jokių praradimų, atidarykite jį vėl ir importuokite USD scenas iš kitų 3D programų.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, įrašyti kaip, eksportas, importas, scenos surinkimas, archviz, openpbr, materialx, paketas
from: 73d299f9
---

USD yra scenos formatas, kurį naudoja daugybė 3D, atvaizdavimo ir archviz programų. ModelCraft jį rašo ir skaito. `.modelcraft` lieka formatu, kurį įrašo {{ui:Įrašyti}}; USD yra pasirinkimas {{ui:Įrašyti kaip}}.

## Įrašyti kaip USD

1. Grupėje {{ui:Failas}} pasirinkite {{ui:Įrašyti kaip}} (arba paspauskite {{key:Mod+Shift+S}}).
2. Pasirinkite formatą: {{ui:Tekstas (.usda)}} (skaitomas, tinka versijų valdymui), {{ui:Dvejetainis (.usdc)}} (mažiausias ir greičiausias) arba {{ui:Paketas (.usdz)}} (vienas failas su tekstūromis viduje).
3. Failas atsisiunčiamas (darbalaukio programoje pasirenkate, kur jį įrašyti).

Tos pačios parinktys yra {{ui:Eksportas}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Nieko neprarandama

Atidarykite USD failą, kurį įrašė ModelCraft, ir gausite modelį atgal tiksliai: paviršius su skylėmis, minkštas ir paslėptas briaunas, kreives, grupes ir komponentus, žymes, scenas, matmenis, pagalbines linijas, pjūvio plokštumas, šviestuvus, importuotas tekstūras ir vaizdą. Kitos programos tą patį modelį mato kaip tinklus, grupes, komponentų prototipus, medžiagas, šviestuvus ir kameras.

:::note
Jei kita programa pakeičia grupės ar komponento geometriją, ModelCraft atidaro tą dalį kaip tinklą su tuo pakeitimu ir praneša, kiek dalių taip perskaitė. Vieta, perkelta ar ištrinta kitoje programoje, lieka perkelta ar ištrinta.
:::

## Atidaryti ar importuoti kito žmogaus USD

- {{ui:Atidaryti}} `.usd`, `.usda`, `.usdc` ar `.usdz` failą, kad pradėtumėte modelį iš jo.
- {{ui:Importuoti}} jį, kad pridėtumėte prie atidaryto modelio. Kartu su juo įkelkite failus, į kuriuos jis nurodo (kitus sluoksnius, tekstūras).

Tinklai atkeliauja su savo normalėmis, UV koordinatėmis ir spalvomis, bendra geometrija – kaip komponentai, medžiagos – kaip dažymo spalvos, šviestuvai – kaip šviestuvai, o kameros – kaip scenos, metrais su Z aukštyn, nepriklausomai nuo failo vienetų ir aukščio ašies.

## Dar ne

Animacija, skeletai ir MaterialX mazgų grafai kol kas nėra skaitomi ar rašomi kaip USD. ModelCraft savo animacija ir mazgų medžiagos išlaikomos USD faile, kurį jis įrašė, kad ModelCraft galėtų jį vėl atidaryti, bet kitos programos jų nemato. Sluoksniai, į kuriuos failas nurodo, o ModelCraft negali perskaityti (pavyzdžiui, MaterialX dokumentas), praleidžiami su pastaba.
