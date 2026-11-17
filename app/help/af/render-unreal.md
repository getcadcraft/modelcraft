---
title: Stuur die toneel na 'n speletjiemotor
summary: Studio kan die toneel na 'n Unreal Engine-projek skryf en dit by elke stuur gelyk hou; jou eie wysigings bly in 'n laag wat CadCraft nooit skryf nie. Die inprop wat dit oopmaak, is nog nie vrygestel nie.
keywords: unreal, unreal engine, speletjiemotor, skakel, stuur, usd-verhoog, projek, lewendig, filmkamera, filmweergee-reeks
from: 9a765cc2
---

In CadCraft Studio kan die Engine-lys 'n **skakel** na 'n Unreal Engine-projek hou. Net een rigting: van CadCraft na Unreal.

## Stuur die toneel

1. Kies die Unreal-inskrywing in die Engine-lys. Die eerste keer vra Studio jou om die vouer van jou projek te kies (die een met die `.uproject`-lêer); dit onthou dit.
2. Klik {{ui:Stuur}}. Studio skryf `CadCraft/<lêernaam>/` binne die projek: die toneel as 'n USD-lêer, die instellingslêer, liprofiele en twee klein laaglêers.
3. Verander die model, stoor en stuur weer. Net die toneel en die instellingslêer word vervang.

## Jou eie wysigings is veilig

Die verhoog wat Unreal oopmaak, is 'n klein wortellaag wat een keer gemaak word, met twee lae onder dit: **joune** bo-op (`<naam>.user.usda`, leeg aan die begin, nooit weer deur CadCraft geskryf nie) en CadCraft se toneel onder. Wysigings wat jy in jou eie laag stoor, bly wanneer die toneel weer gestuur word. Ligte en ander akteurs wat jy in die Unreal-vlak plaas, is buite die verhoog en word ook nie aangeraak nie.

## Sonder Studio

In die blaaier, of op 'n rekenaar waar Studio nie Unreal vind nie, kies **Unreal-projekvouer (.zip)** in die Engine-lys en klik {{ui:Weergee}}. Dit stoor dieselfde vouer as 'n zip: pak dit uit in die `CadCraft`-vouer van jou projek. Laat **Sluit die verhoogslêers in** die eerste keer aan; skakel dit af vir latere stoorings, sodat die zip net die toneel en die instellingslêer bevat en jou eie laag nooit vervang word nie.

:::note
Die Unreal-inprop wat die verhoog oopmaak, die son, lampe, kameras en blootstelling toepas, elke stuur volg en 'n kamera weergee, is **nog nie vrygestel nie** en is nog nie in Unreal uitgevoer nie. Totdat dit is, plaas Stuur die lêers in die projek en kan Unreal se eie USD-gereedskap hulle oopmaak. Windows is die eerste stelsel; macOS volg.
:::
