---
title: Mierka podľa súčiniteľov a prídavok na zmrštenie
summary: Zmeňte mierku výberu súčiniteľom pre každú os okolo zvoleného bodu alebo zväčšite vzor o percento, o ktoré sa odliatok zmrští.
keywords: mierka, nerovnomerná, súčiniteľ, percento, natiahnutie, zmrštenie, zmršťovanie, odliatok, vzor, zlievareň, prídavok, zmena veľkosti
from: 37e1bbff
---

Nástroj Mierka ({{key:S}}) mení mierku rovnomerne alebo potiahne úchyt, aby natiahol jeden alebo dva smery. **Zmeniť mierku súčiniteľmi…** (ponuka Nástroje alebo skupina Úpravy) je zadaná forma: číslo pre každú z troch osí.

1. Vyberte hrany, plochy, skupiny alebo komponenty.
2. Otvorte {{ui:Scale by factors…}}. Zadajte súčiniteľ pre červenú, zelenú a modrú. Súčiniteľ môže byť `1.015`, `101.5%` alebo `+1.5%` (a `-2%` pre menší). {{ui:Same on all three axes}} skopíruje prvý do ostatných dvoch.
3. Vyberte, čo **zostane na mieste**: stred výberu, jeho najnižší roh, stred jeho spodnej strany alebo počiatok súradníc.
4. Riadok pod poľami ukazuje veľkosť teraz a potom. {{ui:Scale}} to vykoná v jednom kroku späť.

Osi sú osi skupiny, ktorú máte otvorenú (modelu, na najvyššej úrovni). Skupina alebo komponent, ktorý je otočený, sa po zmene súčiniteľov zošikmí, ak sú súčinitele rozdielne; zmeňte mierku skupiny, ktorá ho obsahuje. Obsah komponentu sa nedotkne, takže jeho ostatné kópie zostanú, aké sú.

## Prídavok na zmrštenie

Odliatok sa pri chladnutí zmršťuje, preto sa jeho vzor zväčší. V časti **Prídavok na zmrštenie** zadajte percento pre každú os (vaša zlievareň alebo modelár vzorov ho dá pre váš kov; 1.5 % nižšie je iba príklad) a stlačte {{ui:Use as the factors}}.

- **Samotné percento** urobí súčiniteľ 1 plus percento: 1.5 % dá 1.015, čo označuje zmršťovacie pravítko.
- **Presne dosť** urobí súčiniteľ 1 delené jedna mínus percento: 1.5 % dá 1.0152, takže odliatok vyjde v rozmere dielu po jeho zmrštení o toľko.

Vaše posledné percentá sa pamätajú v tomto prehliadači.

:::note
Percento zadáva vy: ModelCraft nič nevie o vašom kove, forme ani postupe.
:::
