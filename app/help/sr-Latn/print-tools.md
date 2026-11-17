---
title: Oslonci, debljina zida, izdubljivanje i popravka
summary: Pogledajte gde štampa treba oslonce i koliko otprilike, nađite zidove pretanke za štampu, izdubite deo do debljine zida sa odvodnim rupama i popravite mrežu uz spisak svih ispravki.
keywords: 3D štampa, oslonci, pregled oslonaca, previs, stubni oslonci, drvoliki oslonci, debljina zida, tanki zidovi, pretanko, mlaznica, izdubljivanje, školjka, odvodna rupa, smola, popravka, popravi mrežu, ne-mnogostruko, okrenute površine, rupe, mali delovi, samopresek, preklapanje, spajanje
from: 286bde26
---

Četiri alata za pripremu modela za 3D štampač. Otvorite {{ui:Izvezi}} › {{ui:Proveri za 3D štampanje (STL ili 3MF)…}}; red **Alati za štampu** u dijalogu ima {{ui:Pregled oslonaca}}, {{ui:Debljina zida}}, {{ui:Izdubi}} i {{ui:Popravka}}. Svaki se otvara kao kartica preko prikaza; {{ui:Zatvori}} (krst) je zatvara zajedno sa njenim oznakama. Istovremeno se prikazuje jedna kartica.

Svaki alat radi nad onim što se štampa: izborom, ili svim što je prikazano kad ništa nije izabrano. {{ui:Izdubi}} i {{ui:Popravka}} traže jednu izabranu grupu, komponentu ili mrežu, jer je menjaju.

## Pregled oslonaca

Površine koje se naginju više od **ugla previsa** od uspravnog položaja šrafirane su crveno, a jednostavni oslonci se iz njih crtaju (narandžasto) do podloge, ili do dela modela ispod njih.

- **Ugao previsa**: 45° je ono što većina štampača radi bez oslonca. Povećajte ga za štampač koji dobro premošćuje.
- **Stubovi**: pravi stub na svakih 3 mm ispod svakog previsa. Procena ih računa kao uzorak oslonaca od 15%.
- **Drvo**: bliske tačke se spajaju u jedno deblo ispod njihove sredine; nijedna grana se ne naginje više od 45°. Drveće obično troši manje materijala i dodiruje podlogu na manje mesta.

Kartica kaže koliko površine treba oslonac, koliko ima tačaka oslonca i otprilike koliko materijala uzimaju. Oslonci koji stoje na modelu (a ne na podlozi) se računaju: ostavljaju tragove na njemu. Kad je podloga štampača izabrana u {{ui:Podešavanja}}, podloga se crta ispod modela.

:::note
Ovo je pregled, a ne slajser: vaš slajser odlučuje o stvarnim osloncima. Na vrlo velikom previsu tačke oslonca su raspoređene šire da pregled ostane brz; kartica to kaže.
:::

## Debljina zida

Svaka površina se meri pravo kroz telo do druge strane. Zidovi ispod **najtanjeg zida koji se dozvoljava** su crveni, a zidovi ispod jedan i po puta toga su narandžasti: štampaju se, ali mogu ispasti slabi.

Tanka mesta su navedena, od najtanjeg, sa podatkom koliko su tanka i koliko je svako veliko. {{ui:Prikaz}} okreće kameru ka njima.

Štampač ne može da napravi zid tanji od oko dve širine svoje mlaznice: 0.8 mm za uobičajenu mlaznicu od 0.4 mm (početna vrednost). Štampači na smolu prave manje; proverite vodič za svoj štampač.

Na vrlo velikom modelu samo neke površine šalju zrak, a ostale preuzimaju debljinu svojih suseda; kartica kaže koliko ih je izmereno.

## Izdubljivanje

Izdubljivanje čuva spoljašnost kakva jeste i uklanja unutrašnjost, ostavljajući zidove debele koliko zatražite. Štampe na smoli troše manje smole i manje opterećuju podlogu; štampe filamentom troše manje plastike nego što bi trošila ispuna.

1. Izaberite grupu, komponentu ili mrežu, pa otvorite {{ui:Izdubi}}.
2. Podesite **zid** (2 mm za početak) i koliko su široke **odvodne rupe**.
3. Za štampu na smoli kliknite {{ui:Postavi odvodni otvor}}, pa kliknite spoljašnost modela gde ide: nisko, blizu podloge, da tečna smola iz nje ističe. Postavite koliko god treba; svaka se prikazuje kao plavi krug i navodi se uz {{ui:Ukloni}}.
4. {{ui:Pregled}} kaže koliko izdubljivanje uklanja.
5. {{ui:Izdubi ga}} pravi promenu: jedan korak koji {{key:Mod+Z}} poništava.

Rezultat je jedno zatvoreno čvrsto telo koje provera za 3D štampu prihvata: ModelCraft ga prvo proverava i ništa ne menja ako ne bi prošlo. Gde je model tanji od dva zida, ostaje čvrst. Rezultat je grupa čije su ravne strane pojedinačne površine, pa modelovanje možete nastaviti sa {{ui:Guraj/vuci}}; zakrivljen deo izdubljen na finoj mreži obično ima previše površina za to i postaje mreža, a statusna linija kaže koji je slučaj.

:::tip
Za većinu oblika unutrašnjost je spoljašnost pomerena unutra za tačno debljinu zida. Gde uglovi ili tanki delovi to onemogućavaju, ModelCraft prati spoljašnost na udaljenosti zida na finoj mreži; kartica tada kaže koliko je to tačno (na delić milimetra).
:::

## Popravka

{{ui:Popravka}} gleda izabrani deo onako kako ga gleda slajser štampača, bezbedno popravlja šta može i navodi svaku ispravku:

| Popravlja | Šta to znači |
|---|---|
| Trouglovi bez površine | izostavljaju se |
| Trougao nacrtan dvaput | jedan primerak se zadržava; površina nacrtana leđima jedna uz drugu (bez debljine) se uklanja |
| Labavi delovi ispod 0.5 mm | uklanjaju se |
| Trouglovi okrenuti na pogrešnu stranu | okreću se da se poklope sa susedima |
| Rupe, ravne ili ne | zatvaraju se lepezom novih trouglova iz sredine svake rupe |
| Deo naopako okrenut | okreće se napolje (šupljina unutar drugog dela ostaje kakva jeste: namerno je okrenuta unutra) |

{{ui:Popravi bezbedne}} pravi sve njih u jednom koraku koji {{key:Mod+Z}} poništava, a statusna linija navodi svaku ispravku. Popravljeni deo postaje grupa čije su ravne strane pojedinačne površine. Ako se i dalje ne zatvara (ostaje nešto pod **Ostavljeno vama**), ili bi imao previše površina za grupu, postaje mreža: njene površine ostaju trouglovi, a ravne strane i dalje izgledaju ravno. Statusna linija kaže koji je slučaj. {{ui:Spoji preklapajuće delove}} radi isto.

Ono što se ne može bezbedno popraviti navedeno je pod **Ostavljeno vama** i obeleženo ljubičastom bojom u prikazu, uz {{ui:Prikaz}}:

- **Ivice gde se sastaju tri ili više površina**: odlučite koja površina pripada i obrišite ostale.
- **Deo koji prolazi kroz sebe**: pomerite ili ponovo nacrtajte taj deo. Pogledajte [Presek površina](topic:intersect).
- **Rupe prevelike ili previše zamršene da se zatvore**: nacrtajte površine preko njih.
- **Odvojeni delovi koji se preklapaju**: slajseri ih ionako spajaju. {{ui:Spoji preklapajuće delove}} pravi od njih jedno zatvoreno telo (ponovo gradi površine gde se sastaju, zato je to zasebno dugme koje se nikad ne radi automatski).

Za grupe guraj/vuci možete popravljati i pojedinačno u {{ui:Podaci o entitetu}} › {{ui:Prikaži probleme}} / {{ui:Popravi}}, što čuva površine koje ste nacrtali. Pogledajte [Alati za čvrsta tela](topic:solids).

Povezano: [Priprema modela za 3D štampu](topic:print-3d) · [Početnički stil](topic:beginner) · [Još nije napravljeno](topic:not-built-yet#3d-printing)
