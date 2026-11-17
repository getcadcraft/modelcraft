---
title: Waarmee uw computer rendert
summary: Instellingen › Renderen toont de grafische kaart, processorkernen en het geheugen die deze browser de app laat gebruiken, en het niveau dat bepaalt waar renderen begint.
keywords: uw computer, grafische kaart, gpu, webgpu, webgl, processor, cpu, kernen, threads, geheugen, ram, gedeeld geheugen, isolatie, laag, niveau, snelheid, renders snelheid, traag, laptop
from: 8a0c21c9
---

Open {{ui:Instellingen}} ({{key:Mod+,}}), blijf op het eigen tabblad van deze app en scrol naar {{ui:Renderen}}. {{ui:Uw computer}} toont wat deze browser de app laat gebruiken voor renderen. Niets daarvan verlaat uw computer.

| Rij | Wat het betekent |
|---|---|
| {{ui:Grafisch}} | De grafische kaart die de browser meldt. "WebGPU" betekent dat alle renderwerk kan worden gedaan; "WebGL 2 only" betekent dat de live-weergave en {{ui:Een afbeelding renderen…}} die gebruiken (hoge kwaliteit met de WebGL path tracer), terwijl renderen in de weergave en de renderwachtrij, die WebGPU nodig hebben, niet worden aangeboden; een softwarematige vervanging betekent dat alles op de processor draait |
| {{ui:Processor}} | Hoeveel processorkernen de browser meldt |
| {{ui:Geheugen}} | Ongeveer hoeveel geheugen de computer heeft, wanneer de browser dat meldt. Sommige browsers doen dat niet |
| {{ui:Gedeeld geheugen}} | Of de pagina geheugen mag delen tussen zijn workers. Aan: elke kern kan aan één kopie van een scène werken; uit: elke kern heeft een eigen kopie nodig, zodat een grote scène op minder kernen tegelijk past |
| {{ui:Snelle processorcode}} | Of de browser de snellere WebAssembly-code uitvoert. Zonder die code wordt een langzamere terugvalmodus gebruikt |
| {{ui:Niveau}} | {{ui:Grafische kaart, hoog}}, {{ui:Grafische kaart, basis}} of {{ui:Alleen processor}}, met de reden eronder |

## Het niveau

Het niveau bepaalt waar de [live-weergave](topic:live-view) start ({{ui:Voor deze computer}}), hoeveel verspreide items die tekent, en hoeveel vlakken een [subdivisie-oppervlak](topic:modifiers#subdivision-surface) in de weergave mag tonen, zodat een laptop met een ingebouwde grafische chip of helemaal zonder grafische kaart responsief blijft. Een ingebouwde grafische chip of telefoonchip, of 4 GB geheugen of minder, krijgt nooit {{ui:Grafische kaart, hoog}}.

:::note
Browsers verschillen. Dezelfde computer kan in de ene browser WebGPU tonen en in een andere "WebGL 2 only". Op Linux hebben de meeste browsers nog geen WebGPU.
:::
