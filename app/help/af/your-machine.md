---
title: Waarmee jou masjien weergee
summary: Instellings › Weergee wys die grafika, verwerkerkerne en geheue wat hierdie blaaier die program laat gebruik, en die vlak wat bepaal waar weergee begin.
keywords: jou masjien, grafiekaart, gpu, webgpu, webgl, verwerker, cpu, kerne, drade, geheue, ram, gedeelde geheue, isolasie, vlak, spoed, stadig, weergeespoed, skootrekenaar
from: 8a0c21c9
---

Maak {{ui:Instellings}} oop ({{key:Mod+,}}), bly op hierdie program se eie oortjie en rol af na {{ui:Weergee}}. {{ui:Jou masjien}} lys wat hierdie blaaier die program laat gebruik vir weergee. Niks hiervan verlaat jou rekenaar nie.

| Ry | Wat dit beteken |
|---|---|
| {{ui:Grafika}} | Die grafiekaart wat die blaaier rapporteer. "WebGPU" beteken dit kan al die weergeewerk doen; "WebGL 2 only" beteken die lewendige aansig en {{ui:Weergee 'n prent…}} gebruik dit (hoë gehalte met die WebGL-padtraseerder), maar weergee in die aansig en die weergeewagry, wat WebGPU nodig het, word nie aangebied nie; 'n sagteware-plaasvervanger beteken alles loop op die verwerker |
| {{ui:Verwerker}} | Hoeveel verwerkerkerne die blaaier rapporteer |
| {{ui:Geheue}} | Ongeveer hoeveel geheue die rekenaar het, wanneer die blaaier dit sê. Sommige blaaiers doen nie |
| {{ui:Gedeelde geheue}} | Of die bladsy geheue tussen sy werkers mag deel. Aan, elke kern kan aan een kopie van 'n toneel werk; af, elkeen benodig sy eie kopie, so 'n groot toneel pas op minder kerne op dieselfde tyd |
| {{ui:Vinnige verwerkerkode}} | Of die blaaier die vinniger WebAssembly-kode loop. Sonder dit word 'n stadiger terugvalkode gebruik |
| {{ui:Vlak}} | {{ui:Grafiekaart, hoog}}, {{ui:Grafiekaart, basies}} of {{ui:Net verwerker}}, met die rede daaronder |

## Die vlak

Die vlak bepaal waar die [lewendige aansig](topic:live-view) begin ({{ui:Vir hierdie rekenaar}}), hoeveel verspreide items dit teken, en hoeveel vlakke 'n [onderverdelingsoppervlak](topic:modifiers#subdivision-surface) in die aansig mag wys, sodat 'n skootrekenaar met 'n ingeboude grafiekchip of geen grafiekaart nie responsief bly. 'n Ingeboude of selfoon-grafiekchip, of 4 GB geheue of minder, kry nooit {{ui:Grafiekaart, hoog}} nie.

:::note
Blaaiers verskil. Dieselfde rekenaar kan WebGPU in een blaaier wys en "WebGL 2 only" in 'n ander. Op Linux het die meeste blaaiers nog geen WebGPU nie.
:::
