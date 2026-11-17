---
title: Posuňte a otočte osi kreslenia
summary: Otočte červenú, zelenú a modrú os tak, aby sedeli na budove, ktorá nie je kolmá na ne, alebo ich zarovnajte na plochu, aby kreslenie a zadávanie nasledovali budovu.
keywords: osi, osi kreslenia, počiatok, zarovnať osi, otočiť osi, obnoviť osi, budova pod uhlom, šikmá, ucs, súradnicový systém
from: cab258f7
---

Červená, zelená a modrá os vedú všetko, čo kreslíte: obdĺžniky sa podľa nich zarovnajú, čiary sa k nim uzamknú a zem je rovina červená–zelená. Keď budova stojí pod uhlom (situačný plán, ktorý nie je kolmý na sever, krídlo otočené o 30°), presuňte na ňu osi, aby kreslenie nasledovalo jej steny. Samotný model sa nepohne.

Všetky tri príkazy sú v {{ui:Úpravy}} › {{ui:Viac}}.

## Umiestnenie osí

1. {{ui:Úpravy}} › {{ui:Viac}} › {{ui:Umiestniť osi}}.
2. Kliknite tam, kam patrí počiatok, napríklad na roh budovy.
3. Kliknite na bod pozdĺž novej červenej osi, napríklad ďalej pozdĺž steny.
4. Kliknite na bod smerom k novej zelenej osi. Zelená sa kolmo zarovná na červenú a modrá stojí kolmo na obidve.

Osi sa vykreslia na novom mieste. Obdĺžnik, ktorý teraz nakreslíte na zem alebo zadáte ako `4m,3m`, vedie pozdĺž otočenej červenej a zelenej; šípky ho uzamykajú; a prichytenie k počiatku je v novom počiatku.

## Zarovnanie osí na plochu

Vyberte jednu plochu a potom {{ui:Úpravy}} › {{ui:Viac}} › {{ui:Zarovnať osi s plochou}}. Modrá potom smeruje von z plochy, červená vedie pozdĺž jej najdlhšej hrany a počiatok je na začiatku tejto hrany. Použite to na kreslenie na šikmú strechu, akoby bola zemou.

## Obnovenie osí

{{ui:Úpravy}} › {{ui:Viac}} › {{ui:Obnoviť osi}} ich vráti tam, kde model začínal.

## Čo treba vedieť

- Vnútri otvorenej skupiny alebo komponentu sa používajú jej vlastné osi (otáčajú sa s ňou); osi modelu platia na najvyššej úrovni.
- Osi sa uložia do súboru ModelCraft a každá zmena je jeden krok späť.
- Exporty a štandardné pohľady ({{ui:Zhora}}, {{ui:Spredu}}…) stále používajú vlastné smery modelu.
