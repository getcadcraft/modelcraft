---
title: Potpore, debljina stijenke, izdubljivanje i popravak
summary: Pogledajte gdje ispis treba potpore i otprilike koliko, pronađite stijenke pretanke za ispis, izdubite dio do debljine stijenke s rupama za odvod i popravite mrežu uz popis svakog popravka.
keywords: 3d ispis, potpore, pregled potpora, previs, potporni stupovi, debljina stijenke, tanke stijenke, pretanko, mlaznica, izdubljivanje, ljuska, rupa za odvod, smola, popravak, popravak mreže, non-manifold, okrenute plohe, rupe, mali dijelovi, samopresijecanje, preklapanje, spajanje
from: 286bde26
---

Četiri alata za pripremu modela za 3D pisač. Otvorite {{ui:Izvezi}} › {{ui:Provjera za 3D ispis (STL ili 3MF)…}}; u retku **Alati za ispis** nalaze se {{ui:Pregled potpora}}, {{ui:Debljina stijenke}}, {{ui:Izdubi}} i {{ui:Popravak}}. Svaki se otvara kao kartica preko prikaza; {{ui:Zatvori}} (križić) zatvara je i uklanja njezine oznake. Prikazuje se jedna kartica odjednom.

Svaki alat radi s onim što se ispisuje: odabirom ili svime što je prikazano kad ništa nije odabrano. {{ui:Izdubi}} i {{ui:Popravak}} trebaju jednu odabranu grupu, komponentu ili mrežu, jer je mijenjaju.

## Pregled potpora

Plohe koje se naginju van više od **kuta previsa** od uspravnog položaja osjenčane su crveno, a jednostavne potpore crtaju se od njih (narančasto) do podloge ili do dijela modela ispod njih.

- **Kut previsa**: 45° je ono što većina pisača ispisuje bez potpore. Povećajte ga za pisač koji dobro premošćuje.
- **Stupovi**: ravan stup svakih 3 mm ispod svakog previsa. Procjena ih računa kao uzorak potpore od 15%.
- **Stablo**: obližnje točke spajaju se u jedno deblo ispod njihove sredine; nijedna grana ne naginje više od 45°. Stabla obično troše manje materijala i dodiruju podlogu na manje mjesta.

Kartica kaže koliko površine treba potporu, koliko ima točaka potpore i otprilike koliko materijala uzimaju. Potpore koje stoje na modelu (ne na podlozi) se računaju: ostavljaju oznake na njemu. Kad je podloga pisača odabrana u {{ui:Postavke}}, podloga se crta ispod modela.

:::note
Ovo je pregled, a ne slicer: vaš slicer odlučuje o stvarnim potporama. Kod vrlo velikog previsa točke potpore raširene su šire da pregled ostane brz; kartica to kaže.
:::

## Debljina stijenke

Svaka ploha mjeri se ravno kroz tijelo do druge strane. Stijenke ispod **najtanje stijenke koju dopuštate** su crvene, a one ispod jedan i pol puta toga narančaste: ispisat će se, ali mogu ispasti slabe.

Tanka područja navedena su od najtanjeg, s tim koliko su tanka i koliko su velika. {{ui:Prikaži}} okreće kameru prema njemu.

Pisač ne može napraviti stijenku tanju od otprilike dvije širine njegove mlaznice: 0,8 mm za uobičajenu mlaznicu od 0,4 mm (početna vrijednost). Pisači na smolu postižu manje; provjerite vodič za svoj pisač.

Kod vrlo velikog modela samo neke plohe šalju zraku, a ostale preuzimaju debljinu svojih susjeda; kartica kaže koliko ih je izmjereno.

## Izdubi

Izdubljivanje čuva vanjštinu i uklanja unutrašnjost, ostavljajući stijenke onoliko debele koliko tražite. Ispisi na smolu troše manje smole i manje opterećuju podlogu za izradu; ispisi filamentom troše manje plastike nego što bi ispuna.

1. Odaberite grupu, komponentu ili mrežu, zatim otvorite {{ui:Izdubi}}.
2. Postavite **stijenku** (2 mm za početak) i koliko su široke **rupe za odvod**.
3. Za ispis na smolu kliknite {{ui:Postavi otvor za odvod}}, zatim kliknite na vanjsku stranu modela gdje ide: nisko, blizu podloge za izradu, da tekuća smola može isteći. Postavite koliko treba; svaka se prikazuje kao plavi krug i navodi se uz {{ui:Ukloni}}.
4. {{ui:Pregled}} kaže koliko izdubljivanje uklanja.
5. {{ui:Izdubi}} napravi promjenu: jedan korak koji {{key:Mod+Z}} poništava.

Rezultat je jedno zatvoreno tijelo koje provjera za 3D ispis prihvaća: ModelCraft ga prvo provjeri i ništa ne mijenja ako ne bi prošlo. Gdje je model tanji od dvije stijenke, ostaje pun. Rezultat je grupa čije su ravne plohe pojedinačne plohe, pa je možete dalje modelirati s {{ui:Potisni/povuci}}; zakriveni dio izdubljen na finoj mreži obično ima previše ploha za to i postaje mreža, a statusni redak kaže koje.

:::tip
Za većinu oblika unutrašnjost je vanjština pomaknuta unutra za točno stijenku. Gdje kutovi ili tanki dijelovi to onemogućuju, ModelCraft umjesto toga prati vanjštinu na razmaku stijenke na finoj mreži; kartica tada kaže koliko je to blizu (na manje od dijela milimetra).
:::

## Popravak

{{ui:Popravak}} pregledava odabrani dio onako kako ga pregledava slicer pisača, popravlja što može sigurno popraviti i navodi svaki popravak:

| Popravlja | Što to znači |
|---|---|
| Trokuti bez površine | izostavljeni |
| Trokut nacrtan dvaput | zadržana jedna kopija; ploha nacrtana leđa uz leđa sama sa sobom (bez debljine) se uklanja |
| Labavi dijelovi manji od 0,5 mm | uklonjeni |
| Trokuti okrenuti krivo | okrenuti da se poklope sa susjedima |
| Rupe, ravne ili ne | zatvorene lepezom novih trokuta iz središta svake rupe |
| Dio izvrnut iznutra | okrenut prema van (šupljina unutar drugog dijela ostaje kakva je: namijenjena je da gleda unutra) |

{{ui:Popravi sigurne}} radi sve njih u jednom koraku koji {{key:Mod+Z}} poništava, a statusni redak navodi svaki popravak. Popravljeni dio postaje grupa čije su ravne plohe pojedinačne. Ako se još ne zatvara (ostaje nešto pod **Ostavljeno vama**) ili bi imala previše ploha za grupu, postaje mreža: plohe su i dalje trokuti, a ravne plohe i dalje izgledaju ravno. Statusni redak kaže koje. {{ui:Spoji preklopljene dijelove}} radi isto.

Što se ne može sigurno popraviti navodi se pod **Ostavljeno vama** i označava ljubičasto u prikazu, uz {{ui:Prikaži}}:

- **Bridovi gdje se sastaju tri ili više ploha**: odlučite koja pripada, a ostale izbrišite.
- **Dio koji prolazi kroz sebe**: pomaknite ili nacrtajte taj dio iznova. Vidi [Presijecanje ploha](topic:intersect).
- **Rupe prevelike ili previše zamršene za zatvaranje**: nacrtajte plohe preko njih.
- **Zasebni dijelovi koji se preklapaju**: slicer ih ionako spaja. {{ui:Spoji preklopljene dijelove}} od njih napravi jedno zatvoreno tijelo (ponovno gradi plohe gdje se sastaju, zato je to zaseban gumb koji se nikad ne radi automatski).

Za grupe potisni/povuci možete popraviti i jedan po jedan u {{ui:Informacije o entitetu}} › {{ui:Prikaži probleme}} / {{ui:Popravi}}, što čuva plohe koje ste nacrtali. Vidi [Alati za tijela](topic:solids).

Povezano: [Pripremite model za 3D ispis](topic:print-3d) · [Stil za početnike](topic:beginner) · [Još nije izrađeno](topic:not-built-yet#3d-printing)
