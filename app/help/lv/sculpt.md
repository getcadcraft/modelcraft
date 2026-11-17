---
title: Veidot tīklu
summary: Veidojiet tīklu kā mālu ar otiņām — zīmēšana, māls, izlīdzināt, satvert, piepūst, šķautne, savilkt, izlīdzināt plaknē — aizsargājiet daļas ar masku, spoguļojiet pa X un pievienojiet detaļas vietās, kur veidojat.
keywords: veidot, skulptēšana, otiņa, otiņas, māls, zīmēšana, izlīdzināt, satvert, piepūst, šķautne, savilkt, izlīdzināt plaknē, maska, simetrija, spoguļot, detaļa, dinamiskā topoloģija, pildspalva, spiediens, planšete, stils
from: 5477801a
---

Darbvieta Skulptēt veido tīklu ar otiņām, kā ar mālu: velciet pār virsmu, un tā paceļas, iegrimst, izlīdzinās vai seko rādītājam zem apaļas otiņas, visstiprāk vidū un izzūdot līdz nullei malā.

## Sākums

Atlasiet tīklu un izvēlieties {{ui:Skulptēt}} darbvietu sarakstā. Grupa vai komponents vispirms kļūst par tīklu, tāpat kā darbvietā Tīkls. Otiņas darbojas ar tīkla virsotnēm, tāpēc tīklam ar vairāk virsotnēm ir smalkākas formas: vispirms sadaliet to (darbvietas Tīkls {{ui:Sadalīt}} vai Subdivision surface modifikatoru, ko lietojat ar pogu Lietot), vai ieslēdziet {{ui:Detaļa}}.

## Otiņas

| Otiņa | Taustiņš | Ko tā dara |
| --- | --- | --- |
| {{ui:Zīmēšana}} | {{key:D}} | Paceļ virsmu zem otiņas |
| {{ui:Māls}} | {{key:C}} | Veido plakanus slāņus, vispirms aizpildot iedobes |
| {{ui:Izlīdzināt}} | {{key:S}} | Izlīdzina izcilnījumus; turiet {{key:Shift}}, lai izlīdzinātu ar jebkuru otiņu |
| {{ui:Satvert}} | {{key:G}} | Velk virsmu līdzi rādītājam |
| {{ui:Piepūst}} | {{key:I}} | Uzbriest virsmu pa tās pašas virzienu |
| {{ui:Šķautne}} | {{key:Shift+C}} | Izgriež asu rievu |
| {{ui:Savilkt}} | {{key:P}} | Velk virsmu uz otiņas vidu |
| {{ui:Izlīdzināt plaknē}} | {{key:T}} | Spiež virsmu uz tās vidējo plakni |
| {{ui:Maska}} | {{key:M}} | Krāso masku, kas aizsargā virsmu no pārējām otiņām |

Turiet {{key:Ctrl}}, kamēr velkat, lai strādātu pretēji (nospiest, nevis pacelt; kalns, nevis rieva; noņemt masku), vai ieslēdziet {{ui:Noņemt}}.

## Izmērs un stiprums

Otiņas izmērs ir pikseļos ekrānā, tāpēc tas ir vienāds neatkarīgi no tā, cik tuvināts: {{key:[}} un {{key:]}} to samazina un palielina, {{key:Shift+[}} un {{key:Shift+]}} maina tās stiprumu. Panelis rāda abus.

Ar pildspalvu uz planšetes spiežot stiprāk, otiņa kļūst lielāka un stiprāka; panelī var izslēgt jebkuru no tiem.

## Spoguļošana, maska un detaļa

- {{ui:Spoguļot X}} ({{key:X}}) veido abas puses pāri sarkanajai asij vienlaikus, sejām un figūrām.
- Maska veidošanas laikā rādās tumšāka. {{ui:Notīrīt masku}} ({{key:Alt+M}}) to noņem, {{ui:Apgriezt masku}} ({{key:Ctrl+I}}) maskē to, kas bija brīvs, un atbrīvo to, kas bija maskēts. Maska tiek saglabāta kopā ar tīklu.
- {{ui:Detaļa}} pievieno trīsstūrus tur, kur veidojat: malas, kas garākas par panelī iestatīto izmēru (pikseļi ekrānā), tiek sadalītas zem otiņas. Tam vajadzīgs trīsstūru tīkls, un tas prasa vispirms izveidot šādu.

Katrs vilciens ir viens atsaukšanas solis.

:::note
Detaļa tikai pievieno trīsstūrus; tā neņem ārā tos, kas kļuvuši sīki. Atkārtota tīklošana (Remesh) (darbvietā Tīkls) vēlreiz izlīdzina visu tīklu.
:::

Skatiet arī [Tīkla rediģēšana](topic:mesh-edit), [Tīkli](topic:meshes) un [Modifikatori tīklā](topic:modifiers).
