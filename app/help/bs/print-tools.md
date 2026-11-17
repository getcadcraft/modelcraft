---
title: Podrške, debljina zida, šupljenje i popravka
summary: Pogledaj gdje štampa treba podrške i koliko otprilike, pronađi zidove pretanke za štampu, izdubi dio na zadatu debljinu zida sa odvodnim rupama i popravi mrežu uz navod svake ispravke.
keywords: 3d štampa, podrške, pregled podrški, navis, stablaste podrške, stubne podrške, debljina zida, tanki zidovi, pretanko, mlaznica, šuplje, šupljenje, ljuska, odvodna rupa, smola, popravka, popravi mrežu, non-manifold, okrenute strane, rupe, mali dijelovi, samopresijecanje, preklapanje, spajanje
from: 286bde26
---

Četiri alata za pripremu modela za 3D štampač. Otvori {{ui:Izvezi}} › {{ui:Provjeri za 3D štampanje (STL ili 3MF)…}}; u redu **Alati za štampu** u dijalogu su {{ui:Pregled podrški}}, {{ui:Debljina zida}}, {{ui:Šuplje}} i {{ui:Popravka}}. Svaki se otvara kao kartica iznad prikaza; {{ui:Zatvori}} (križić) je zatvara zajedno sa njenim oznakama. Jedna kartica se prikazuje odjednom.

Svaki alat radi nad onim što se štampa: odabrano, ili sve što je prikazano ako ništa nije odabrano. {{ui:Šuplje}} i {{ui:Popravka}} traže jednu odabranu grupu, komponentu ili mrežu, jer ih mijenjaju.

## Pregled podrški

Površine koje se nagnu više od **ugla navisa** od uspravnog položaja se boje crveno, a jednostavne podrške se crtaju od njih (narandžasto) do podloge, ili do dijela modela ispod njih.

- **Ugao navisa**: 45° je ono što većina štampača radi bez podrške. Povećaj ga za štampač koji dobro premošćuje.
- **Stubovi**: pravi stub na svakih 3 mm ispod svakog navisa. Procjena ih računa kao uzorak podrške od 15%.
- **Stablo**: bliske tačke se spajaju u jedno deblo ispod njihove sredine; nijedna grana se ne nagne više od 45°. Stabla obično uzimaju manje materijala i dodiruju podlogu na manje mjesta.

Kartica kaže koliko površine treba podršku, koliko ima tačaka podrške i otprilike koliko materijala uzimaju. Podrške koje stoje na modelu (ne na podlozi) se broje: ostavljaju tragove na njemu. Sa izabranom podlogom štampača u {{ui:Postavke}}, podloga se crta ispod modela.

:::note
Ovo je pregled, a ne slajser: tvoj slajser odlučuje o stvarnim podrškama. Kod vrlo velikog navisa tačke podrške se šire da pregled ostane brz; kartica to kaže.
:::

## Debljina zida

Svaka strana se mjeri ravno kroz tijelo do druge strane. Zidovi ispod **najtanjeg dozvoljenog zida** su crveni, a zidovi ispod jedan i po puta toliko su narandžasti: štampaju se, ali mogu ispasti slabi.

Tanka mjesta su navedena, od najtanjeg, sa tim koliko su tanka i koliko je svako veliko. {{ui:Prikaži}} okreće kameru na njih.

Štampač ne može napraviti zid tanji od oko dvije širine svoje mlaznice: 0,8 mm za uobičajenu mlaznicu od 0,4 mm (početna vrijednost). Štampači sa smolom to rade manje; provjeri vodič za svoj štampač.

Kod vrlo velikog modela samo neke strane šalju zraku, a ostale preuzmu debljinu svojih susjeda; kartica kaže koliko ih je izmjereno.

## Šupljenje

Šupljenje čuva vanjsku stranu kakva jeste i uklanja unutrašnjost, ostavljajući zidove debljine koju zatražiš. Štampe smolom troše manje smole i manje opterećuju podlogu za izradu; štampe filamentom koriste manje plastike nego što bi koristila ispuna.

1. Izaberi grupu, komponentu ili mrežu, zatim otvori {{ui:Šuplje}}.
2. Postavi **zid** (2 mm za početak) i koliko su široke **odvodne rupe**.
3. Za štampu smolom klikni {{ui:Postavi odvodni otvor}}, zatim klikni vanjsku stranu modela gdje ide: nisko, blizu podloge za izradu, da tečna smola isteče. Postavi koliko ti treba; svaka se prikazuje kao plavi krug i navodi se uz {{ui:Ukloni}}.
4. {{ui:Pregled}} kaže koliko šupljenje uklanja.
5. {{ui:Izdubi ga}} pravi promjenu: jedan korak koji {{key:Mod+Z}} poništava.

Rezultat je jedno zatvoreno tijelo koje provjera za 3D štampu prihvata: ModelCraft ga prvo provjeri i ništa ne mijenja ako ne bi prošlo. Gdje je model tanji od dva zida, ostaje čvrst. Rezultat je grupa čije su ravne strane pojedinačne površine, pa možeš dalje modelirati sa {{ui:Gurni/povuci}}; zakrivljeni dio izdubljen na finoj mreži obično ima previše površina za to i postaje mreža, a statusna linija kaže koji.

:::tip
Za većinu oblika unutrašnjost je vanjska strana pomaknuta unutra za tačno zid. Gdje uglovi ili tanki dijelovi to onemogućavaju, ModelCraft umjesto toga prati vanjsku stranu na zadatoj udaljenosti zida na finoj mreži; kartica tada kaže koliko je to blizu (u okviru djelića milimetra).
:::

## Popravka

{{ui:Popravka}} pregleda izabrani dio onako kako ga slajser štampača vidi, popravlja ono što može bezbjedno popraviti i navodi svaku ispravku:

| Popravlja | Šta to znači |
|---|---|
| Trouglove bez površine | izostavljeni |
| Trougao nacrtan dvaput | zadržava se jedna kopija; površina nacrtana naopako uz samu sebe (bez debljine) se uklanja |
| Labave dijelove manje od 0,5 mm | uklonjeni |
| Trouglove okrenute na pogrešnu stranu | okrenuti da se poklope sa susjedima |
| Rupe, ravne ili ne | zatvorene lepezom novih trouglova iz sredine svake rupe |
| Dio okrenut iznutra | okrenut prema van (šupljina unutar drugog dijela ostaje kakva jeste: namjerno je okrenuta unutra) |

{{ui:Popravi sigurne}} pravi sve njih u jednom koraku koji {{key:Mod+Z}} poništava, a statusna linija navodi svaku ispravku. Popravljeni dio postaje grupa čije su ravne strane pojedinačne površine. Ako se i dalje ne zatvori (nešto pod **Ostavljeno tebi** ostaje), ili bi imao previše površina za grupu, postaje mreža: njene površine ostaju trouglovi, a ravne strane i dalje izgledaju ravno. Statusna linija kaže koji. {{ui:Spoji preklapajuće dijelove}} radi isto.

Ono što se ne može bezbjedno popraviti navodi se pod **Ostavljeno tebi** i označeno je ljubičasto u prikazu, uz {{ui:Prikaži}}:

- **Ivice gdje se sastaju tri ili više površina**: odluči koja površina pripada, i obriši ostale.
- **Dio koji prolazi kroz sebe**: pomjeri ili ponovo nacrtaj taj dio. Vidi [Presjek površina](topic:intersect).
- **Rupe prevelike ili previše isprepletene da se zatvore**: nacrtaj površine preko njih.
- **Zasebni dijelovi koji se preklapaju**: slajseri ih ionako spoje. {{ui:Spoji preklapajuće dijelove}} pravi od njih jedno zatvoreno tijelo (ponovo gradi površine gdje se sastaju, zato je to zasebno dugme koje se nikad ne pokreće za tebe).

Za grupe guraj/povuci možeš i popraviti jedan po jedan u {{ui:Podaci o entitetu}} › {{ui:Prikaži probleme}} / {{ui:Popravi}}, što čuva površine koje si nacrtao. Vidi [Alati za tijela](topic:solids).

Srodno: [Pripremi model za 3D štampu](topic:print-3d) · [Početnički stil](topic:beginner) · [Još nije napravljeno](topic:not-built-yet#3d-printing)
