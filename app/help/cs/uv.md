---
title: Rozložení UV souřadnic sítě
summary: Označte švy, rozbalte, promítněte a srovnejte texturovací souřadnice sítě v pracovním prostoru UV a zkontrolujte je šachovnicí a barvami natažení.
keywords: uv, uvs, rozbalit, rozbalování, šev, švy, textura, souřadnice textury, atlas, srovnat, srovnávání, ostrov, ostrovy, šachovnice, natažení, zkreslení, promítnutí krabice, promítnutí válce, promítnutí koule, konformní, podle úhlů, lscm, abf
from: 00028f20
---

Textura je plochý obrázek; síť plochá není. Její **UV souřadnice** určují, kde na obrázku leží každý roh každé plochy. Pracovní prostor UV je vytvoří: síť rozřežete podél **švů**, kusy rozložíte naplocho (**rozbalit**) a vejdou se do čtverce (**srovnat**).

## Otevření

Vyberte síť a v seznamu pracovních prostorů zvolte {{ui:UV}}. Skupina nebo komponenta se nejprve změní na síť, jako v pracovním prostoru pro sítě. 3D pohled se posune do levé poloviny; **editor UV** vpravo ukazuje plochy sítě rozložené na čtverci textury. Výběr funguje stejně jako v pracovním prostoru pro sítě a co vyberete v jednom pohledu, je vybráno i ve druhém.

## Označení švů

Švy jsou místa, kde lze síť rozříznout; v obou pohledech se zobrazují červeně.

- Vyberte hrany ({{ui:Hrana}}, nebo {{key:2}}) a stiskněte {{ui:Označit šev}} ({{key:Ctrl+E}}). {{ui:Zrušit šev}} ({{key:Ctrl+Shift+E}}) je odstraní.
- {{ui:Švy u ostrých hran}} označí každou ostrou hranu a každou hranu, kde se plochy stýkají pod úhlem větším než 60°: krabice se rozpadne na šest stran.
- {{ui:Švy z UV}} označí švy tam, kde se UV souřadnice už přerušují, například po promítnutí.

Uzavřený kus potřebuje švy, aby mohl ležet naplocho: koule potřebuje alespoň jeden řez, trubka řez podél své délky.

## Rozbalení

Vyberte plochy, které chcete rozložit (nebo žádné, pro celou síť), a stiskněte {{ui:Rozbalit}} ({{key:U}}). Každý kus mezi švy se rozloží naplocho a co nejvěrněji zachová své úhly (zplošťování založené na úhlech); potom se kusy srovnají do čtverce. {{ui:Konformní}} místo toho rozbaluje pomocí konformních zobrazení metodou nejmenších čtverců: je rychlejší, na silně zakřivených kusech o něco méně věrné. Tvar, který lze vytvořit z plochého plechu, například bočnice válce přeříznutá jednou, se rozbalí bez jakéhokoli natažení.

## Promítnutí

U jednoduchých tvarů často stačí promítnutí:

| Promítnutí | Co dělá |
| --- | --- |
| {{ui:Krabice}} | Každá plocha na stranu krabice, ke které je nejvíce otočena |
| {{ui:Válec}} | Kolem modré osy: napříč je úhel dokola, nahoru je výška |
| {{ui:Koule}} | Ze středu: napříč je úhel dokola, nahoru je zeměpisná šířka |
| {{ui:Z pohledu}} | Tak, jak jsou plochy nyní vidět ve 3D pohledu |

Plocha přes spoj válce nebo koule zůstane v jednom kuse, takže její UV souřadnice mohou přesáhnout pravý okraj čtverce o kousek; textury se tam opakují.

## Uspořádání

- {{ui:Srovnat}} vloží kusy (ostrovy) do čtverce v jedné velikosti texelu, každý otočený tak, aby zabral co nejméně místa. Panel nastavuje mezeru mezi nimi.
- {{ui:Otočit o 90°}} a {{ui:Zrcadlit}} otočí nebo zrcadlí UV souřadnice vybraných ploch.
- V editoru UV přetáhněte vybranou plochu a přesunete UV souřadnice výběru, nebo ukažte kurzorem do editoru a stiskněte {{key:R}} nebo {{key:S}}, potom pohybujte a otočíte či zvětšíte je (klik to ponechá, {{key:Esc}} zruší). {{key:G}} přesouvá bez tažení. Dvojklikem na plochu (nebo {{key:L}}) vyberete celý její ostrov. Kolečko přibližuje; tažením prostředním nebo pravým tlačítkem posouváte pohled; {{key:F}} znovu přizpůsobí čtverec.

Každá změna je jeden krok zpět.

## Kontrola

- {{ui:Šachovnice}} zobrazí na síti popisovanou šachovnici podle jejích UV souřadnic: rovnoměrná čtvercová pole znamenají, že textura leží rovnoměrně; popisky ukazují, kterým směrem běží.
- {{ui:Natažení}} obarví každou plochu podle toho, jak moc ji UV souřadnice natahují: modrá žádné, přes zelenou až po červenou při velkém natažení. Panel volí, zda měří **ohnuté úhly**, nebo **změněnou velikost**, a ukazuje průměr.

Viz také [Úprava sítě](topic:mesh-edit), [Sítě](topic:meshes) a [Modifikátory sítě](topic:modifiers).
