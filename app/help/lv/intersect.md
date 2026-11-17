---
title: Virsmu krustošana
summary: Zīmējiet līnijas, kur virsmas šķeļas cita citu, lai varētu bīdīt, dzēst vai krāsot gabalus.
keywords: krustot, krustot virsmas, krustot ar modeli, griezt, atvere, caurums, savienot, līnijas, kur virsmas krustojas, būla
from: 6bc58526
---

Kad viena forma iet cauri citai, ModelCraft nezīmē līniju, kur to virsmas saskaras: tās vienkārši pārklājas. **Krustot** zīmē šīs līnijas kā malas, tāpēc virsmas tur sadalās. Pēc tam varat bīdīt/vilkt, dzēst vai krāsot gabalus.

Abas komandas atrodas {{ui:Edit}} › {{ui:More}}.

## Krustot ar modeli

Griež atlasīto pret **katru ekrānā redzamo virsmu**.

Piemēram, sija (grupa) iet cauri sienai (citai grupai), un vēlaties atveri sienā:

1. Veiciet dubultklikšķi uz sienas, lai to atvērtu, un atlasiet visas tās virsmas ({{key:Ctrl+A}}).
2. {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}.

Sijas kontūra tiek uzzīmēta uz abām sienas virsmām kā divas jaunas virsmas. Pabīdiet vienu no tām cauri sienai, lai izveidotu atveri, pēc tam aizveriet sienu.

## Krustot ar atlasi

Griež atlasītās virsmas, grupas un komponentus **tikai savā starpā**. Atlasiet vismaz divus.

## Kur iet līnijas

Līnijas vienmēr zīmējas **atvērtajā kontekstā**: modelī, ja nav atvērta neviena grupa, vai grupā, kuru rediģējat. Grupas un komponenti, kas nav atvērti, netiek mainīti. Tātad, lai krustotu grupas virsmas, vispirms atveriet to, kā iepriekšējā piemērā.

## Ko vajadzētu zināt

- Virsmas, kas atrodas vienā plaknē, netiek krustotas.
- Līnijas, kas aizver cilpu uz virsmas, veido jaunu virsmu, kā zīmētas līnijas.
- Katra krustošana ir viens atsaukšanas solis. Ja nekas nekrustojas, nekas nemainās.
- Slēgtām formām [cietvielu rīki](topic:solids) (Apvienot, Atņemt) veic visu darbu vienā solī.
