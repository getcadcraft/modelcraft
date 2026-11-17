---
title: Umshini wakho usebenzisa ini ukurenda
summary: Izilungiselelo › Ukurenda ibonisa imifanekiso, amakhoza eprosesa kanye nenkumbulo isiphequluli esivumela uhlelo ukuyisebenzisa, kanye nezinga elibeka lapho ukurenda kuqala khona.
keywords: umshini wakho, ikhadi lezithombe, gpu, webgpu, webgl, iprosesa, cpu, amakhoza, izintambo, inkumbulo, ram, inkumbulo yokwabelana, ukwahlukaniswa, izinga, isivinini, kancane, isivinini sokurenda, ilaptop
from: 8a0c21c9
---

Vula {{ui:Settings}} ({{key:Mod+,}}), hlala ethebhu yalolu hlelo qobo bese uskrola uze uthole {{ui:Rendering}}. {{ui:Your machine}} ibhala lokho isiphequluli sakho esivumela uhlelo ukusisebenzisa ukurenda. Akukho lapho okushiya ikhompyutha yakho.

| Umugqa | Lokho kusho ukuthi |
|---|---|
| {{ui:Graphics}} | Ikhadi lezithombe esilibikwa isiphequluli. "WebGPU" isho ukuthi lingenza wonke umsebenzi wokurenda; "WebGL 2 only" isho ukuthi ukubuka okuphilayo kanye {{ui:Render a picture…}} kuyisebenzisa (ikhwalithi ephezulu ngendlela ye-WebGL path tracer), kanti ukurenda ekubukeni nakuhlu lokurenda, okudinga i-WebGPU, akutholakali; isifaki sesofthiwe esisho ukuthi konke kusebenza ngeprosesa |
| {{ui:Processor}} | Inani lamakhoza eprosesa esiphequluli esilibikayo |
| {{ui:Memory}} | Cishe inkumbulo ikhompyutha enayo, uma isiphequluli sisho. Ezinye iziphequluli azisho |
| {{ui:Shared memory}} | Ukuthi ikhasi lingabelana yini ngenkumbulo phakathi kwabasebenzi balo. Uma kuvuliwe, wonke amakhoza angasebenza ekopini eyodwa yesiteji; uma kuvaliwe, ngayinye idinga ikopi yayo, ngakho isiteji esikhulu singalingana namakhoza ambalwa ngesikhathi esisodwa |
| {{ui:Fast processor code}} | Ukuthi isiphequluli sisebenzisa yini ikhodi esheshayo ye-WebAssembly. Ngaphandle kwayo kusetshenziswa indlela yokubuyela engasheshi |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} noma {{ui:Processor only}}, nesizathu esingaphansi kwayo |

## Izinga

Izinga libeka lapho [ukubuka okuphilayo](topic:live-view) iqala khona ({{ui:For this computer}}), inani lezinto ezihlakazekile ezidwetshwa yona, kanye nenani lobuso bokuhlukanisa [subdivision surface](topic:modifiers#subdivision-surface) okungabonakala ekubukeni, ukuze ilaptop enetshipu lezithombe elakhelwe ngaphakathi noma engenayo ikhadi lezithombe ihlale isabela. Itshipu lezithombe elakhelwe ngaphakathi noma eselula, noma inkumbulo engu-4 GB noma ngaphansi, akusoze kuthole {{ui:Graphics card, high}}.

:::note
Iziphequluli ziyahlukana. Ikhompyutha efanayo ingabonisa WebGPU kwesinye isiphequluli kanti "WebGL 2 only" kwesinye. Ku-Linux iziphequluli eziningi azinayo i-WebGPU okwamanje.
:::
