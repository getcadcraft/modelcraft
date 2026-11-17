---
title: Terräng: mark från höjdkurvor, och att skulptera den
summary: Gör mark av höjdkurvor eller som ett rutnät, och höj sedan eller sänk den med en mjuk pensel.
keywords: terräng, mark, landskap, topografi, höjdkurvor, höjdlinjer, tomt, lutning, kulle, vall, sandlåda, smoove, skulptera, planering, TIN
from: 407652b3
---

Terräng är mark som består av trianglar, så den kan följa vilken form som helst. Den är en grupp: dubbelklicka på den för att redigera den.

## Från höjdkurvor

1. Skaffa höjdkurvorna på rätt höjd: rita dem, eller [importera en situationsplan](topic:site-plan) och flytta varje höjdkurva upp till sin nivå.
2. Markera dem (alla kanter på alla höjdkurvor).
3. {{ui:Redigera}} › {{ui:Mer}} › {{ui:Terräng från markerade höjdkurvor}}.

ModelCraft sammanfogar höjdkurvornas punkter med trianglar (en TIN) och mjukar upp varje kant inuti så att marken skuggas jämnt. Linjerna själva finns kvar; radera eller dölj dem när du inte längre behöver dem. Mycket täta höjdkurvor gallras till 8 000 punkter.

## Ett rutnät att skulptera

{{ui:Redigera}} › {{ui:Mer}} › {{ui:Terrängrutnät…}} frågar efter en bredd, ett djup och en cellstorlek och placerar sedan ett plant rutnät av trianglar där du klickar på dess hörn. Små celler skulpterar jämnare men ger fler ytor (högst 200 × 200 celler).

## Skulptera: höj och sänk marken

1. Dubbelklicka på terrängen för att öppna den.
2. {{ui:Redigera}} › {{ui:Mer}} › {{ui:Skulptera terräng}}. En cirkel visar penseln på marken under pekaren.
3. Dra uppåt för att höja marken under penseln, eller nedåt för att sänka den. Mitten rör sig mest och marken övergår mjukt till ingenting vid cirkelns kant, så att kullar och håligheter blir jämna.

För att göra en kulle med exakt höjd klickar du en gång, skriver sedan höjden, till exempel `1.5m` (ett minustecken sänker), och trycker på {{key:Enter}}. Vill du ändra penseln skriver du en längd innan du klickar: `5m` ger en pensel med radien 5 m.

Varje skulptering är ett steg i ångra.

## Att tänka på

- Skulptering flyttar bara triangelytor, så varje yta förblir plan. Ytor som ritats för hand (rektanglar, polygoner) är inte terräng: verktyget säger till om det.
- Skulptering flyttar punkter rakt upp och ner; den lägger inte till punkter. För finare detaljer, gör ett rutnät med mindre celler.
- Terräng exporteras som vilken annan grupp som helst. I IFC är den ett byggelementproxy, precis som allt annat.
