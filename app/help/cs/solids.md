---
title: Nástroje pro tělesa: sjednotit, odečíst, průnik
summary: Spojte uzavřené skupiny a komponenty do jedné, vyřízněte jednu z druhé nebo ponechte jen to, co sdílejí.
keywords: těleso, tělesa, kontrola tělesa, není těleso, oprava tělesa, otvor, volná hrana, naopak, sjednotit, spojit, sloučit, odečíst, rozdíl, vyříznout, průnik, boolean, vnější obal
from: f35df1cc
---

Nástroje pro tělesa spojují **tělesa**: skupiny a komponenty, jejichž plochy uzavírají objem, přičemž každá hrana spojuje přesně dvě plochy. {{ui:Informace o prvku}} hlásí {{ui:Těleso}}: {{ui:Ano}} u tělesa a ukazuje jeho objem.

Jsou v nabídce {{ui:Tělesa}} ve skupině {{ui:Uspořádat}}.

## Když něco není těleso

Vyberte skupinu nebo komponentu. Když není tělesem, {{ui:Informace o prvku}} řekne proč, například „Není těleso: 4 hrany lemují otvor · 1 volná hrana“:

| Problém | Co to znamená |
|---|---|
| Hrany lemují otvor | Chybí plocha |
| Hrany sdílené třemi a více plochami | Plocha dělí vnitřek, nebo se dva tvary dotýkají podél hrany |
| Plochy uvnitř tvaru | Stěna zůstala uvnitř objemu |
| Volné hrany | Čáry, které neohraničují žádnou plochu |
| Plochy obrácené naopak | Jejich přední strany dovnitř, proti sousedům |

{{ui:Zobrazit problémy}} ji otevře s vybranými těmito hranami a plochami, abyste je viděli. {{ui:Opravit}} opraví jednoduché případy jedním krokem zpět: odstraní volné hrany a plochy uvnitř tvaru, otočí plochy správným směrem ven a uzavře otvory, jejichž okraj leží naplocho. Cokoli, co nelze bezpečně opravit (otvor, který není rovný, hrana sdílená mnoha plochami), nechá na vás a řekne, co zbylo.

## Sjednocení

1. Vyberte dvě nebo více těles (klikněte na jedno, {{key:Ctrl}}+klik na ostatní).
2. {{ui:Tělesa}} › {{ui:Sjednotit}}.

Stanou se jedním tělesem v jedné skupině. Tam, kde se překrývala, plochy uvnitř zmizí.

## Odečtení

1. {{ui:Tělesa}} › {{ui:Odečíst}}.
2. Klikněte na těleso, které se má **odebrat** (nástroj řezu).
3. Klikněte na těleso, které se má **řezat**.

Co zbude z druhého tělesa, zůstane; nástroj řezu se spotřebuje. Chcete-li například udělat díru skrz blok, nakreslete sloupek, který jím prochází, udělejte ze sloupku skupinu a pak odečtěte sloupek od bloku.

## Průnik

Vyberte dvě nebo více těles, pak {{ui:Tělesa}} › {{ui:Průnik}}. Zachová se jen část, kterou všechna sdílejí.

## Co je dobré vědět

- Výsledkem je nová skupina. Zachová název, barvu a štítek prvního tělesa (u odečtení: toho, které řežete). Barvy natřené na jeho plochy se neuchovají.
- Rovné strany výsledku jsou jednotlivé plochy. Zaoblené strany vyjdou jako rovné fasety, kterými byly nakresleny.
- Pokud skupina nebo komponenta není tělesem, nástroj řekne, která to je, a nic nezmění. Hledejte chybějící plochu nebo volnou plochu uvnitř ní.
- Uvnitř otevřené skupiny nástroje pracují se skupinami a komponentami v této skupině.
- Každý nástroj je jeden krok zpět.
- Při prvním použití nástroje pro tělesa se načte jeho engine (manifold-3d), což může chvíli trvat.
