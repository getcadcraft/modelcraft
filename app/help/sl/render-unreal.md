---
title: Pošlji prizor v igralni pogon
summary: Studio lahko zapiše prizor v projekt Unreal Engine in ga ob vsakem pošiljanju ohrani usklajenega; vaše lastne spremembe so v plasti, ki je CadCraft nikoli ne zapiše. Vtičnik, ki ga odpre, še ni izdan.
keywords: unreal, unreal engine, igralni pogon, povezava, pošlji, usd stage, projekt, v živo, filmska kamera, filmska vrsta upodobitev
from: 9a765cc2
---

V CadCraft Studio lahko seznam pogonov hrani **povezavo** do projekta Unreal Engine. Samo v eno smer: iz CadCraft v Unreal.

## Pošlji prizor

1. V seznamu pogonov izberite vnos Unreal. Ob prvi uporabi vas Studio prosi, da izberete mapo projekta (tisto z datoteko `.uproject`); mapo si zapomni.
2. Kliknite {{ui:Pošlji}}. Studio v projektu zapiše `CadCraft/<ime datoteke>/`: prizor kot datoteko USD, datoteko nastavitev, profile luči in dve majhni datoteki plasti.
3. Spremenite model, shranite in ponovno pošljite. Zamenjata se samo prizor in datoteka nastavitev.

## Vaše lastne spremembe so varne

Stage, ki ga odpre Unreal, je majhna korenska plast, narejena enkrat, pod njo pa sta dve plasti: **vaša** zgoraj (`<name>.user.usda`, sprva prazna, CadCraft je nikoli ne prepiše) in prizor CadCraft spodaj. Spremembe, ki jih shranite v svojo plast, ostanejo, ko prizor znova pošljete. Luči in drugi akterji, ki jih postavite v ravni Unreal, so zunaj stage in se prav tako ne spremenijo.

## Brez Studia

V brskalniku ali na računalniku, kjer Studio ne najde Unreala, v seznamu pogonov izberite **Mapa projekta Unreal (.zip)** in kliknite {{ui:Upodobi}}. Shranjena je ista mapa kot zip: razpakirajte jo v mapo `CadCraft` vašega projekta. Ob prvem shranjevanju pustite **Vključi datoteke stage**; pri poznejših shranjevanjih to možnost izklopite, da zip vsebuje samo prizor in datoteko nastavitev, vaša lastna plast pa se nikoli ne zamenja.

:::note
Vtičnik Unreal, ki odpre stage, uporabi sonce, svetilke, kamere in osvetlitev, ob vsakem pošiljanju posodobi prizor in upodobi pogled kamere, še **ni izdan** in še ni bil zagnan v Unreal. Do takrat gumb {{ui:Pošlji}} samo shrani datoteke v projekt, lastna orodja USD v Unrealu pa jih lahko odprejo. Prvi sistem je Windows; macOS sledi.
:::
