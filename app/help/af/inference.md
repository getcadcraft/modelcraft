---
title: Afleiding en vasvang
summary: Wat die gekleurde merkers beteken, watter vasvang wen, en hoe om 'n rigting met die pylsleutels of Shift vas te sluit.
keywords: afleiding, vasvang, vaspunt, eindpunt, middelpunt, sentrum van vlak, op rand, op vlak, as, rooi as, groen as, blou as, parallel, loodreg, slot, shift, osnap
from: e78984e9
---

Terwyl 'n teken- of wysiggereedskap werk, kyk ModelCraft na wat onder die wyser is en vang vas aan die nuttigste ding naby. 'n Merker wys wat dit gevind het, en die aanwyser linksonder noem dit.

## Merkers en aanwysers

| Aanwyser | Merker | Vang vas aan |
|---|---|---|
| Eindpunt | Groen sirkel | Die einde van 'n rand |
| Middelpunt | Siaan sirkel | Die middel van 'n rand |
| Middelpunt van vlak | Blou sirkel | Die middel van die vlak onder die wyser |
| Leidpunt | Grys | 'n Leidpunt wat deur die maatband gelaat is |
| Oorsprong | Okerkleur | Waar die rooi, groen en blou asse ontmoet |
| Op rooi as / Op groen as / Op blou as | 'n Lyn in daardie kleur | 'n Lyn vanaf jou beginpunt in daardie rigting |
| Parallel aan rand / Loodreg op rand | Magenta-lyn | 'n Lyn vanaf jou beginpunt, parallel of loodreg op die onthoude rand (sien hieronder) |
| Vasgesluit | Magenta-lyn | 'n Rigting wat jy met 'n pylsleutel of {{key:Shift}} vasgesluit het |
| Op rand | Rooi vierkant | Êrens langs 'n rand |
| Op leidraad | Grys | Êrens langs 'n leidlyn |
| Op vlak | Blou ruit | Êrens op 'n vlak |
| Op beginvlak | geen | Die vlak waarop jy begin het, wanneer die wyser oor leë ruimte is |
| Op die grond | geen | Die grond (die rooi-groen-vlak), wanneer niks anders daar is nie |

Wanneer 'n asslyn vanaf jou beginpunt 'n rand of leidlyn kruis, vang ModelCraft by die kruising vas en die aanwyser noem albei, soos "Op rooi as, op rand".

## Watter vasvang wen

1. **Punte** binne ongeveer 12 pixels: eindpunte eerste, dan leidpunte, middelpunte, die middelpunt van die vlak onder die wyser en die oorsprong.
2. **Rigtings** vanaf die beginpunt: die rooi, groen en blou asse, en parallel of loodreg op die onthoude rand.
3. **Op 'n rand** of 'n leidlyn.
4. **Op 'n vlak.**
5. **Die tekenvlak**, of die grond.

Dinge wat agter 'n vlak versteek is, vang nooit vas nie. Wentel sodat jy die punt wat jy wil hê, kan sien.

## Teken op 'n vlak vanaf 'n punt

'n {{ui:Rectangle}}, {{ui:Circle}} of {{ui:Polygon}} wat op 'n hoek, 'n middelpunt, 'n rand of die middelpunt van 'n vlak begin word, word **in die vlak van die vlak onder die wyser** geteken, en sny daardie vlak. 'n Rand behoort aan twee vlakke, so die kant van die rand waarop die wyser is, besluit: om op die einde van 'n lang boks te teken, begin vanaf die middel van een van sy rande, met die wyser net binne die eindvlak.

## Parallel en loodreg

ModelCraft onthou die **laaste rand wat die wyser oor gegaan het voor jou eerste klik**. Begin op 'n hoek of op 'n rand tel as oor daardie rand gaan. Sodra die gereedskap werk, verander ander rande wat jy oorhou dit nie.

Om 'n lyn parallel met 'n bestaande rand te teken:

1. Druk {{key:L}} en hou oor die rand wat jy wil pas.
2. Beweeg na die beginpunt, sonder om ander rande op die pad te kruis as jy kan, en klik.
3. Beweeg in die rigting parallel met daardie rand. Die lyn word magenta en die aanwyser sê "Parallel aan rand". Loodreg werk op dieselfde manier, binne die vlak waarop jy teken.

As die verkeerde rand onthou is, druk {{key:Esc}}, hou oor die regte rand, en begin weer.

## Sluit 'n rigting vas

Ná die eerste klik van 'n gereedskap, kan jy die volgende punt op een lyn hou:

| Sleutel | Sluit vas op |
|---|---|
| {{key:Right}} | Die rooi as |
| {{key:Left}} | Die groen as |
| {{key:Up}} | Die blou as (reg op) |
| {{key:Down}} | Parallel aan die onthoude rand (sien hierbo) |

Druk dieselfde pyl weer om oop te sluit. Die statusbalk sê "Vasgesluit op die rooi as. Druk dieselfde pyl om oop te sluit."

Terwyl dit vasgesluit is, skuif die punt langs die lyn na waar die wyser ook al is, en lyn steeds op met punte wat jy oorhou: hou oor die hoek van 'n ander boks om 'n lyn langs rooi net so ver te teken as daardie hoek.

**{{key:Shift}}** sluit enige rigting waarop jy nou vasgevang is, vas ('n as, of parallel), so lank as jy dit hou. Laat los om oop te sluit.

Slotte werk in {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} en {{ui:Tape}}. Voor die eerste klik wentel die pylsleutels eerder die aansig.

## Binne 'n groep

Terwyl jy binne 'n groep of komponent redigeer, is die asse die groep se eie asse (hulle beweeg daarmee, en draai daarmee as dit gedraai was). Vasvang vind steeds punte en rande buite die groep, so jy kan dinge met die res van die model belyn.
