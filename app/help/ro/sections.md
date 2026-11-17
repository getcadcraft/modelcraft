---
title: Planuri de secțiune: tăiați modelul
summary: Plasați un plan de secțiune pentru a vedea în interiorul modelului, glisați-l prin el, inversați-l sau opriți tăietura.
keywords: secțiune, plan de secțiune, tăietură de secțiune, tăiere, decupaj, decupare, interior, plan de etaj, felie, secțiune transversală
from: 28c3a645
---

Un plan de secțiune taie modelul, ca să vedeți și să lucrați în interior: un plan de etaj al unei case, interiorul unui dulap. Modelul nu se modifică; tăietura este doar o vizualizare.

## Plasarea unui plan

1. Faceți clic pe {{ui:Section}} din grupul {{ui:Camera}}.
2. Faceți clic pe o față. Planul se plasează pe acea față, cu patru săgeți îndreptate spre cameră.

   Faceți clic departe de orice față pentru un plan pătrat față de direcția în care priviți cel mai mult. Apăsați mai întâi o tastă săgeată pentru a-l pune perpendicular pe roșu ({{key:Right}}), verde ({{key:Left}}) sau albastru ({{key:Up}}).

Latura spre care arată săgețile este **îndepărtată**. Un plan plasat pe o față nu taie încă nimic: glisați-l în model.

## Glisare, inversare, oprire

Faceți clic pe conturul planului pentru a-l selecta. În {{ui:Entity info}}:

- {{ui:Along its arrows}} arată unde se află. Tastați o distanță nouă și apăsați {{key:Enter}} pentru a glisa planul prin model; tastarea `-1m` pe un plan plasat pe o față frontală îl mută cu 1 m în model.
- {{ui:Reverse}} întoarce săgețile, astfel că cealaltă parte este îndepărtată.
- {{ui:Active (cuts the model)}}: un singur plan taie pe rând. Bifați caseta altui plan sau plasați unul nou, iar acela taie în loc.
- Redenumiți-l în {{ui:Name}}; ștergeți-l cu {{key:Delete}} sau cu {{ui:Eraser}}.

Acolo unde planul trece printr-un solid închis, tăietura se umple cu o culoare închisă. Geometria care nu este închisă (o singură față, o cutie deschisă) este tăiată, dar nu umplută.

## Afișare și ascundere

În {{ui:Views}}:

- {{ui:Show section planes}} ascunde conturul și săgețile planurilor (tăietura rămâne).
- {{ui:Show section cuts}} oprește tăietura și arată întregul model, fără a șterge planurile.

[Vizualizarea de prezentare](topic:styles-shadows#presentation-view) ascunde și conturele.

## Lucruri de știut

- Ce este îndepărtat nu poate fi făcut clic sau agățat, așa că puteți desena pe ceea ce arată tăietura.
- Planurile de secțiune, planul activ și cele două comutatoare se salvează în fișierul ModelCraft. Fiecare modificare este un pas de anulare.
- Exporturile conțin mereu întregul model: o secțiune este o vizualizare, nu o editare.
