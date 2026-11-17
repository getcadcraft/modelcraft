---
title: Scalare după factori și adaos de contracție
summary: Scalați o selecție cu un factor pentru fiecare axă în jurul unui punct ales sau măriți o piesă cu procentul cu care se va contracta o piesă turnată.
keywords: scalare, neuniform, factor, procent, întindere, contracție, micșorare, turnare, model, turnătorie, adaos, redimensionare
from: 37e1bbff
---

Instrumentul Scalare ({{key:S}}) scalează uniform sau trage de un mâner pentru a întinde una sau două direcții. **Scalare după factori…** (meniul Instrumente sau grupul Modificare) este forma tastată: un număr pentru fiecare dintre cele trei axe.

1. Selectați muchii, fețe, grupuri sau componente.
2. Deschideți {{ui:Scale by factors…}}. Tastați un factor pentru roșu, verde și albastru. Un factor poate fi `1.015`, `101.5%` sau `+1.5%` (și `-2%` pentru mai mic). {{ui:Same on all three axes}} copiază primul în celelalte două.
3. Alegeți ce **rămâne pe loc**: mijlocul selecției, colțul ei cel mai de jos, mijlocul bazei ei sau originea.
4. Rândul de sub câmpuri arată dimensiunea acum și după. {{ui:Scale}} o face într-un singur pas de anulare.

Axele sunt cele ale grupului deschis (ale modelului, la nivelul de sus). Un grup sau o componentă rotită iese deformată (forfecată) dacă factorii diferă; scalați în schimb grupul care o conține. Conținutul unei componente nu este atins, deci celelalte copii rămân cum sunt.

## Adaos de contracție

O piesă turnată se contractă la răcire, deci modelul ei se face mai mare. Sub **Adaos de contracție** tastați procentul pentru fiecare axă (turnătoria sau cel care face modelul vi-l dă pentru metalul folosit; 1.5 % de mai jos este doar un exemplu) și apăsați {{ui:Use as the factors}}.

- **Procentul în sine** face factorul egal cu 1 plus procentul: 1.5 % dă 1.015, ce marchează o riglă de contracție.
- **Exact suficient** face factorul egal cu 1 împărțit la unu minus procentul: 1.5 % dă 1.0152, astfel că turnarea iese la dimensiunea piesei după ce se contractă atât.

Ultimele procente sunt reținute în acest browser.

:::note
Procentul se stabilește de utilizator: ModelCraft nu cunoaște nimic despre metalul, forma sau procesul folosit.
:::
