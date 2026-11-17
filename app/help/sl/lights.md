---
title: Osvetlitev modela s svetilkami
summary: V model postavite svetilke, reflektorje in svetlobne panele, da lahko upodobljene slike prikažejo sobe ponoči ali osvetljene notranjosti, z mehkimi sencami.
keywords: luč, luči, svetilka, svetilke, osvetlitev, žarnica, stropna luč, reflektor, spustna luč, svetlobni panel, površinska luč, lumni, svetlost, barvna temperatura, topla, noč, notranjost, upodobitev
from: c8d72cbc
---

Svetilke osvetljujejo [upodobljene slike](topic:render). Ne spreminjajo 3D pogleda, kjer je vsaka svetilka prikazana kot majhna oznaka v svoji barvi.

## Dodajte svetilko

1. V razdelku {{ui:Luči}} na desni kliknite {{ui:Svetilka}}, {{ui:Reflektor}} ali {{ui:Svetlobni panel}}.
2. Kliknite, kamor jo želite. Lovljenje deluje kot pri risanju.
   - Na stropu ali steni **svetilka** visi 25 cm od ploskve, na strani, s katere gledate; **svetlobni panel** leži na ploskvi in sveti stran od nje.
   - **Reflektor** zahteva dva klika: najprej kje je, nato kam kaže.

Nova svetilka je izbrana v {{ui:Luči}}, pripravljena za spremembe.

## Spremenite svetilko

Kliknite ime svetilke v {{ui:Luči}} ali njeno oznako v pogledu z {{ui:Izberi}}. Nato:

| Nastavitev | Kaj naredi |
|---|---|
| {{ui:Svetlost (lumni)}} | Koliko svetlobe da. Običajna gospodinjska žarnica je približno 800 lumnov, svetel stropni panel 3000 |
| {{ui:Barva}} | {{ui:Topla}} (domača žarnica), {{ui:Nevtralna}} ali {{ui:Dnevna}}, ali katera koli barva |
| {{ui:Žarek (stopinje)}} | Stožec reflektorja, od roba do roba |
| {{ui:Velikost žarnice}}, {{ui:Širina}}, {{ui:Globina}} | Večje žarnice in paneli dajo mehkejše sence |
| {{ui:Rdeča (x)}}, {{ui:Zelena (y)}}, {{ui:Višina}} | Kje je |

Kljukica ob imenu svetilke jo vklopi ali izklopi. {{ui:Izbriši luč}} jo odstrani. Vsaka sprememba je en korak: {{key:Ctrl+Z}} jo razveljavi. Svetilke so shranjene v datoteki `.modelcraft`.

## Slike ponoči

V {{ui:Upodobi sliko…}} označite {{ui:Za to sliko uporabi drug datum in čas}} in izberite večerno uro. Ko sonce zaide, nebo potemni in model osvetljujejo samo svetilke. Če je slika pretemna, v pogovornem oknu povečajte {{ui:Svetlost}} ali dodajte svetilke.

:::tip
Za sobo, gledano iz notranjosti, postavite kamero v sobo (zavrtite in približajte ali uporabite [prizor](topic:scenes)), dodajte svetilko na strop in upodobite ponoči. V načinu {{ui:Hitro}} so koti, oddaljeni od svetilke, temnejši kot na fotografiji; [način visoke kakovosti](topic:render#high-quality) pa omogoča, da se svetloba odbija od sten.
:::
