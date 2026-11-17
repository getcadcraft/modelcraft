---
title: Sochanie siete
summary: Tvarujte sieť ako hlinu štetcami – kresliť, hlina, vyhladiť, chytiť, nafúknuť, ryha, stiahnuť, zploštiť – chráňte časti maskou, zrkadlite cez X a pridávajte detail tam, kde sochate.
keywords: sochanie, štetec, štetce, hlina, kresliť, vyhladiť, chytiť, nafúknuť, ryha, stiahnuť, zploštiť, maska, symetria, zrkadlenie, detail, dynamická topológia, pero, tlak, tablet, stylus
from: 5477801a
---

Pracovný priestor {{ui:Sculpt}} tvaruje sieť štetcami, ako hlinu: potiahnite po povrchu a stúpa, klesá, vyhladzuje alebo nasleduje ukazovateľ pod okrúhlym štetcom, najsilnejšie v strede a vytrácajúc sa k okraju.

## Začiatok

Vyberte sieť a v zozname pracovných priestorov vyberte {{ui:Sculpt}}. Skupina alebo komponent sa najprv stane sieťou, ako v pracovnom priestore Sieť. Štetce pracujú s vrcholmi siete, takže sieť s ich väčším počtom dá jemnejšie tvary: najprv ju rozdeľte ({{ui:Subdivide}} v pracovnom priestore Sieť alebo modifikátor Subdivision surface, ktorý použijete), alebo zapnite {{ui:Detail}}.

## Štetce

| Štetec | Kláves | Čo robí |
| --- | --- | --- |
| {{ui:Draw}} | {{key:D}} | Zdvihne povrch pod štetcom |
| {{ui:Clay}} | {{key:C}} | Vytvára ploché vrstvy, najprv vypĺňa prehĺbeniny |
| {{ui:Smooth}} | {{key:S}} | Vyrovnáva hrbolčeky; podržte {{key:Shift}}, aby ste vyhladzovali ktorýmkoľvek štetcom |
| {{ui:Grab}} | {{key:G}} | Ťahá povrch spolu s ukazovateľom |
| {{ui:Inflate}} | {{key:I}} | Nafukuje povrch smerom von pozdĺž jeho vlastného smeru |
| {{ui:Crease}} | {{key:Shift+C}} | Vyrezáva ostrú ryhu |
| {{ui:Pinch}} | {{key:P}} | Ťahá povrch k stredu štetca |
| {{ui:Flatten}} | {{key:T}} | Stlačí povrch k jeho priemernej rovine |
| {{ui:Mask}} | {{key:M}} | Namaľuje masku, ktorá chráni povrch pred ostatnými štetcami |

Podržte {{key:Ctrl}} počas ťahania, aby ste pracovali opačne (znížiť namiesto zdvihnúť, hrebeň namiesto ryhy, odstrániť masku), alebo zapnite {{ui:Take away}}.

## Veľkosť a sila

Veľkosť štetca je v pixeloch na obrazovke, takže pôsobí rovnako bez ohľadu na to, ako ďaleko priblížite: {{key:[}} a {{key:]}} ho zmenšujú a zväčšujú, {{key:Shift+[}} a {{key:Shift+]}} menia jeho silu. Panel zobrazuje obe hodnoty.

Perom na tablete tlačenie silnejšie zväčší a zosilní štetec; panel niektorú z týchto možností vypne.

## Zrkadlenie, maska a detail

- {{ui:Mirror X}} ({{key:X}}) sochá obe strany cez červenú naraz, pre tváre a postavy.
- Maska sa počas sochania zobrazuje tmavšie. {{ui:Clear mask}} ({{key:Alt+M}}) ju odstráni, {{ui:Invert mask}} ({{key:Ctrl+I}}) zamaskuje to, čo bolo voľné, a uvoľní to, čo bolo zamaskované. Maska sa ukladá so sieťou.
- {{ui:Detail}} pridáva trojuholníky tam, kde sochate: hrany dlhšie ako veľkosť nastavená v paneli (pixely na obrazovke) sa rozdelia pod štetcom. Vyžaduje sieť z trojuholníkov a pýta sa, aby sa najprv jedna vytvorila.

Každý ťah je jeden krok späť.

:::note
Detail iba pridáva trojuholníky; neodstraňuje tie, ktoré sa stali drobnými. Remesh (v pracovnom priestore Sieť) celú sieť znovu vyrovná.
:::

Pozri aj [Úpravy siete](topic:mesh-edit), [Siete](topic:meshes) a [Modifikátory na sieti](topic:modifiers).
