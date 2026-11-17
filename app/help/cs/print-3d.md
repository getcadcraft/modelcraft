---
title: Příprava modelu na 3D tisk
summary: Zkontrolujte, že je model uzavřený a jeho plochy směřují správně, zjistěte jeho velikost, podstavu a převisy, opravte, co je špatně, a stáhněte jej jako STL nebo 3MF pro váš slicer.
keywords: 3d tisk, 3d tisknutí, tiskárna, tisk, slicer, stl, 3mf, vodotěsný, uzavřený, manifold, těleso, díry, naruby, převis, podpory, podstava, podložka, velikost podložky, milimetry, export, opravit, oprava, dutina, velikost podložky, začátečník, tloušťka stěn, nástroje tisku
from: 948e19af
---

Slicer tiskárny potřebuje uzavřený tvar: žádné díry, každá plocha směřuje ven, nic neprochází samo sebou. {{ui:Export}} › {{ui:Zkontrolovat pro 3D tisk (STL nebo 3MF)…}} to přesně hledá, než soubor stáhnete.

## Kontrola a stažení

1. Vyberte, co chcete vytisknout: jednu nebo více skupin či komponent, nebo některé plochy. Když nic není vybráno, vytiskne se vše, co je zobrazeno.
2. Klikněte na {{ui:Export}} ve skupině {{ui:Soubor}}, pak na {{ui:Zkontrolovat pro 3D tisk (STL nebo 3MF)…}}.

   Dialog začíná jedním řádkem: „Připraveno k tisku“, kolik věcí je třeba opravit před tiskem, nebo kolik jich je třeba nejprve zkontrolovat. Každý problém má tři části: co je špatně, proč na tom záleží a co udělat. Pak následují velikost v milimetrech, objem, počet trojúhelníků a vaše podložka tiskárny.

3. Pokud dialog vypíše věci k opravě, klikněte na {{ui:Opravit, co jde opravit}} (viz níže). Kontrola se spustí znovu sama.
4. Klikněte na {{ui:Stáhnout 3MF}} nebo {{ui:Stáhnout STL}}.

Vytiskne se to, co vidíte: skryté plochy, skryté skupiny a komponenty a cokoli na skryté značce se vynechá. Velikosti jsou vždy v milimetrech, jednotce, kterou slicery očekávají, bez ohledu na jednotku, kterou model zobrazuje.

:::tip
Dávejte přednost 3MF, pokud je váš slicer čte: zachovává barvy i jednotky. STL nemá ani jedno a slicery předpokládají milimetry.
:::

## Co kontrola hledá

Tyto věci tisk zastaví nebo zkazí a dialog napíše „Není připraveno k tisku“:

| Problém | Co to znamená | Co udělat |
|---|---|---|
| Plocha jen na jedné straně | Díra: hrana má plochu na jedné straně a na druhé nic | Nakreslete chybějící plochu (čára přes mezeru ji často uzavře), nebo použijte {{ui:Opravit}} (níže) |
| Sdíleno třemi a více plochami | Plochy se setkávají v žebru nebo ve stěně uvnitř tělesa | Smažte vnitřní plochu |
| Plochy směřují opačně | Některé plochy směřují dovnitř, některé ven | Vyberte plochy, které směřují dovnitř, a klikněte na {{ui:Obrátit plochu}} v {{ui:Informace o prvku}} |
| Naruby | Celý uzavřený díl směřuje dovnitř | Vyberte jeho plochy a obraťte je |
| Prochází sám sebou | Jeden díl se ohýbá skrz sebe | {{ui:Úpravy}} › {{ui:Další}} › {{ui:Protnout s modelem}}, pak smažte, co je uvnitř. Viz [Průnik ploch](topic:intersect) |

Toto jsou varování: model se vytiskne, ale nejprve se na něj podívejte.

- **Oddělené díly se překrývají** nebo se **dotýkají plochami**: slicery je obvykle sloučí v jeden. Pro čistší soubor je spojte pomocí {{ui:Tělesa}} › {{ui:Sjednotit}}. Viz [Nástroje pro tělesa](topic:solids).
- **Nic neleží rovně dole**: otočte model tak, aby plocha ležela na podložce, jinak slicer přidá podpory nebo raft.
- **Vybočuje více než 45° od svislice**: tyto plochy potřebují podporu. Dialog řekne, jak velká část povrchu to je.
- **Méně než 1 mm napříč**: pravděpodobně namodelováno v jiné jednotce. Zkontrolujte jednotku ve stavovém řádku.

Dutý díl (uzavřený plášť uvnitř jiného) je v pořádku: jeho plochy směřují do dutiny a jeho objem se odečte.

## Oprava problémů

Pod **Kde jsou problémy** dialog jmenuje každou skupinu nebo komponentu, která má něco špatně (volné plochy, které nejsou ve skupině, se uvedou jako „Plochy mimo skupinu“), spolu s tím, co je v ní špatně. Komponenta umístěná vícekrát se uvede jednou: oprava ji opraví u každé kopie.

- {{ui:Zobrazit}} otevře tu skupinu a vybere hrany a plochy, které jsou špatně, takže jsou zvýrazněné.
- {{ui:Opravit, co jde opravit}} opraví všechny najednou: uzavře díry, jejichž hrany leží rovně, odstraní plochy uvnitř tvaru a volné hrany a obrátí plochy správným směrem ven. Je to jeden krok: {{key:Mod+Z}} to vrátí zpět. Kontrola pak běží znovu a ukáže, co zbylo.

Co nelze opravit (díra, jejíž hrany neleží rovně, díl procházející sám sebou), zůstane v seznamu s tím, co udělat ručně. {{ui:Oprava}} pod **Nástroje tisku** jde dál: uzavře díry, které nejsou rovné, odstraní volné kusy a zdvojené plochy a vypíše každou opravu. Viz [Podpory, tloušťka stěn, vydlabání a oprava](topic:print-tools#repair). Také můžete opravit jednu skupinu najednou: vyberte ji a pak použijte {{ui:Zobrazit problémy}} a {{ui:Opravit}} v {{ui:Informace o prvku}}. Viz [Nástroje pro tělesa](topic:solids).

## Dutý díl

{{ui:Dutina}} pod **Nástroje tisku** vydlabe díl na tloušťku stěny, kterou zadáte, s odtokovými otvory tam, kam kliknete. Viz [Dutina](topic:print-tools#hollow).

Dutinu můžete nakreslit i sami: uzavřená skupina uvnitř dílu, která se ho nedotýká, se všemi plochami obrácenými tak, aby směřovaly do dutiny. Kontrola ji započítá jako dutinu a odečte její objem; neuvádí se jako věc k opravě.

## Podložka vaší tiskárny

Velikost podložky vyberte v {{ui:Nastavení}} › {{ui:ModelCraft}} › {{ui:Podložka 3D tiskárny}}. Kontrola pak varuje, je-li model větší než podložka, otočený libovolným směrem. Viz [Nastavení](topic:settings#3d-printer-bed).

## Nástroje tisku

Pod nálezy dialogu otevře **Nástroje tisku** {{ui:Náhled podpor}} (kam podpory půjdou a zhruba kolik jich bude), {{ui:Tloušťka stěn}} (stěny příliš tenké na tisk), {{ui:Dutina}} a {{ui:Oprava}}. Viz [Podpory, tloušťka stěn, vydlabání a oprava](topic:print-tools). {{ui:Rozdělit pro tisk}} rozřeže model příliš velký pro podložku na kusy se spojkami a očíslovanými spoji: viz [Rozdělení velkého modelu pro tisk](topic:print-split).

## Co se nekontroluje

Kontrola neslicuje: drobné detaily, které vaše tryska nedokáže nakreslit, a skutečné podpory patří vašemu slicerovi. Viz [Ještě není hotovo](topic:not-built-yet#3d-printing).
