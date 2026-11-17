---
title: Kiparjenje mreže
summary: Oblikujte mrežo kot glino s čopiči: riši, glina, zgladi, zgrabi, napihni, zareza, stisni, sploščí. Zaščitite dele z masko, zrcalite čez X in dodajte podrobnosti, kjer kiparite.
keywords: kiparjenje, kiparski, čopič, čopiči, glina, risanje, glajenje, zgrabi, napihni, zareza, stiskanje, sploščenje, maska, simetrija, zrcali, podrobnost, dinamična topologija, pero, tlak, tablica, pisalo
from: 5477801a
---

Delovno okolje Kiparjenje oblikuje mrežo s čopiči, kot z glino: povlecite čez površino in ta se dvigne, vdre, zgladi ali sledi kazalcu pod okroglim čopičem; najmočnejši je na sredini in na robu izgine.

## Začetek

Izberite mrežo in v seznamu delovnih okolij izberite {{ui:Kiparjenje}}. Skupina ali komponenta najprej postane mreža, kot v delovnem okolju Mreža. Čopiči delujejo na ogliščih mreže, zato mreža z več oglišči dovoli finejše oblike: najprej jo razdelite (z {{ui:Razdeli}} v delovnem okolju Mreža ali z modifikatorjem Subdivision surface, ki ga uveljavite), ali vklopite {{ui:Podrobnost}}.

## Čopiči

| Čopič | Tipka | Kaj naredi |
| --- | --- | --- |
| {{ui:Risanje}} | {{key:D}} | Dvigne površino pod čopičem |
| {{ui:Glina}} | {{key:C}} | Gradi ploske plasti in najprej zapolni vdolbine |
| {{ui:Zgladi}} | {{key:S}} | Izenači izbokline; držite {{key:Shift}}, da glajenje deluje z vsakim čopičem |
| {{ui:Zgrabi}} | {{key:G}} | Povleče površino za kazalcem |
| {{ui:Napihni}} | {{key:I}} | Nabrekne površino vzdolž njene lastne smeri |
| {{ui:Zareza}} | {{key:Shift+C}} | Izreže ostro brazdo |
| {{ui:Stisni}} | {{key:P}} | Potegne površino proti sredini čopiča |
| {{ui:Sploščí}} | {{key:T}} | Pritisne površino proti njeni povprečni ravnini |
| {{ui:Maska}} | {{key:M}} | Nariše masko, ki ščiti površino pred drugimi čopiči |

Med potezo držite {{key:Ctrl}}, da delate v nasprotni smeri (spustite namesto dvigovanja, greben namesto brazde, odstranite masko), ali vklopite {{ui:Odvzemi}}.

## Velikost in moč

Velikost čopiča je v slikovnih pikah na zaslonu, zato se zdi enaka, kakor koli daleč povečate: {{key:[}} in {{key:]}} ga naredita manjšega in večjega, {{key:Shift+[}} in {{key:Shift+]}} spremenita njegovo moč. Podokno prikazuje obe vrednosti.

S peresom na tablici pritiskanje močneje naredi čopič večji in močnejši; v podoknu lahko izklopite katero koli od teh.

## Zrcaljenje, maska in podrobnosti

- {{ui:Zrcali X}} ({{key:X}}) kiparja obe strani čez rdečo naenkrat, za obraze in figure.
- Maska se med kiparjenjem prikaže temneje. {{ui:Odstrani masko}} ({{key:Alt+M}}) jo odstrani, {{ui:Obrni masko}} ({{key:Ctrl+I}}) zamaskira, kar je bilo prosto, in osvobodi, kar je bilo zamaskirano. Maska se shrani skupaj z mrežo.
- {{ui:Podrobnost}} doda trikotnike tam, kjer kiparite: robovi, daljši od velikosti, nastavljene v podoknu (slikovne pike na zaslonu), se pod čopičem razdelijo. Potrebuje mrežo iz trikotnikov in prosi, naj jo najprej ustvarite.

Vsaka poteza je en korak razveljavitve.

:::note
Podrobnost samo dodaja trikotnike; ne odstrani tistih, ki so postali majhni. Ponovna mreža (Remesh) v delovnem okolju Mreža znova izenači celotno mrežo.
:::

Glejte tudi [Urejanje mreže](topic:mesh-edit), [Mreže](topic:meshes) in [Modifikatorji na mreži](topic:modifiers).
