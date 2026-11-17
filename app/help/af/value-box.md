---
title: Tik presiese groottes in die waardeboks
summary: Elke manier om lengtes, groottes, punte, verskuiwings, hoeke, sye en kopieë te tik, en hoe eenhede en kaal getalle gelees word.
keywords: waardeboks, maatboks, vcb, tik, presies, afmeting, lengte, eenhede, voet, duim, metries, millimeter, koördinate, verskuiwing, skikking, sye, hoek, desimale komma
from: 0148dc3d
---

Die waardeboks sit in die statusbalk onderaan, met 'n etiket wat met die gereedskap verander. Terwyl jy werk, wys dit die lewendige grootte; enige oomblik kan jy 'n presiese een tik.

## Hoe om te tik

1. Begin die handeling met 'n klik (die eerste hoek, die vlak, die punt om van te skuif).
2. Tik. Jy hoef nie die waardeboks te klik nie: 'n syfer of een van `. , - ' " [ < * /` stuur jou tik daarheen.
3. Druk {{key:Enter}}.

Druk {{key:Esc}} in die waardeboks om dit skoon te maak en terug na die aansig te gaan. Op 'n aanraakskerm, tik die waardeboks om die sleutelbord op te roep.

As ModelCraft nie kan lees wat jy getik het nie, sê die statusbalk "Tik 'n lengte soos 3m, 10'6" of 4m,3m." As die gereedskap dit nie kan gebruik nie, sê dit "Dit het nie gewerk nie: …" met die rede.

## Lengtes

| Tik | Beteken |
|---|---|
| `3m` `320cm` `3200mm` | Meter, sentimeter, millimeter |
| `10'` `10ft` `10 feet` | Voet |
| `6"` `6in` `6 inches` | Duim |
| `10'6"` `10' 6"` `10'-6 1/2"` | Voet en duim, met 'n breuk |
| `6 1/2"` `6-1/2"` `3/4"` | Duim met 'n breuk |
| `1.5ft` `.5m` | Desimale met 'n eenheid |
| `120` | 'n Kaal getal, in die model se eenheid |

**'n Kaal getal gebruik die model se eenheid**, soos in die kieser onder regs gewys: duim in 'n voet-en-duim-model (dus is `120` 10 voet), millimeter in 'n millimeter-model, en so meer. Om 'n eenheid te tik wen altyd, wat die model se eenheid ook al is. Krullerige aanhalingstekens en priemtekens (’ ” ′ ″) word ook as voet en duim gelees.

:::warning
Gebruik altyd 'n **punt** vir desimale: `2.5m`. 'n Komma skei twee waardes, so `2,5` beteken 2 en 5 (twee waardes), wat ook al jou taalinstellings is.
:::

## Berekeninge

Enige lengte kan 'n berekening wees: tel by met `+`, trek af met `-`, vermenigvuldig met `*`, deel met `/`, en gebruik hakies. Geen sakrekenaar nodig nie.

| Tik | Beteken |
|---|---|
| `2.5/3` | 'n Derde van 2.5 (in die model se eenheid) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" in 'n voet-en-duim-model |
| `3m-25cm` | 2.75 m |

'n Kaal getal is in die model se eenheid wanneer dit 'n lengte is (`2.5/3` in 'n meter-model is 0.833 m), en 'n gewone faktor wanneer dit een vermenigvuldig of deel (`2*450mm`). Hoeke en faktore neem ook berekeninge: `90/2` is 45°. Twee lengtes wat vermenigvuldig word, maak 'n oppervlakte, nie 'n lengte nie, so `2m*3m` word geweier.

As ModelCraft dit nie kan uitwerk nie, sê die statusbalk wat verkeerd is en waar, byvoorbeeld "Deling deur nul (karakter 4)." 'n Hakie begin ook die waardeboks, so jy kan met `(` begin.

Hierdie behou hul eie betekenis: `/3`, `3x` en `*3` na 'n kopie, `24s` vir sye, en `/3` met 'n rand gekies (dit [verdeel die rand](topic:divide)).

## Per gereedskap

| Gereedskap | Etiket | Tik |
|---|---|---|
| {{ui:Lyn}} | {{ui:Lengte}} | 'n Lengte (na die wyser toe), of 'n punt of verskuiwing (hieronder) |
| {{ui:Reghoek}} | {{ui:Afmetings}} | Twee lengtes: `4m,3m`, `12',10'`. 'n Kommapunt werk ook: `4m;3m` |
| {{ui:Sirkel}}, {{ui:Veelhoek}} | {{ui:Sye}}, dan {{ui:Radius}} | Voor die eerste klik, die aantal sye: `12s` of `12` (3 tot 999). Daarna die radius |
| {{ui:Stoot/trek}} | {{ui:Afstand}} | 'n Lengte. 'n Negatiewe een gaan die ander kant op |
| {{ui:Skuif}} | {{ui:Afstand}} | 'n Lengte (na die wyser toe), of 'n punt of verskuiwing. Na 'n kopie: `3x`, `*3`, `/3` |
| {{ui:Draai}} | {{ui:Hoek}} | Grade: `90`, `-45`, `22.5` |
| {{ui:Skaal}} | {{ui:Skaal}} | 'n Faktor bo 0: `2`, `0.5`, `1.25` |
| {{ui:Maatband}} | {{ui:Ofset}} of {{ui:Lengte}} | 'n Lengte |
| {{ui:Verdeel}} | {{ui:Dele}} | Hoeveel gelyke dele: `5`, `5s` of `/5` (2 tot 1000). Sien [Verdeel 'n rand of kromme in gelyke dele](topic:divide) |
| {{ui:Maat}} | {{ui:Ofset}}, dan {{ui:Lengte}} | Waar die maatlyn gaan; net na plasing herstel 'n nuwe lengte die model |
| {{ui:Kies}} | {{ui:Waarde}} | Met een afmeting of rand gekies, herstel 'n nuwe lengte die model. Sien [Maat en herstel grootte](topic:dimensions) |

## Punte en verskuiwings

Vir {{ui:Lyn}} en {{ui:Skuif}}, na die eerste klik:

- `[x,y,z]` gaan na daardie presiese punt in die model (in die groep se eie asse wanneer jy binne 'n groep wysig). Voorbeeld: `[0,0,3m]` is 3 m reg bo die oorsprong.
- `<dx,dy,dz>` gaan so ver van die eerste punt langs rooi, groen en blou. Voorbeeld: `<0,0,10'>` is 10 voet reg op.

Elk van die drie waardes kan sy eie eenheid hê: `<12',0,6">`.

## Kopieë na 'n skuif

Net na 'n kopie met {{ui:Skuif}}:

| Tik | Maak |
|---|---|
| `3x` of `*3` | 3 kopieë in 'n ry op dieselfde afstand |
| `/3` | 3 kopieë gelyk versprei van die oorspronklike na die eerste kopie |

Tot 500 kopieë. Sien [Skuif, kopieer en maak skikkings](topic:move-copy#a-row-of-copies).

## Getikte lengtes benodig 'n rigting

'n Enkele getikte lengte gaan in die rigting waarin die wyser van die eerste klik af wys. As jy net na 'n klik tik, voordat jy enigsins beweeg, is daar nog geen rigting nie en gebeur niks. Beweeg die wyser 'n bietjie na waar jy wil gaan, en tik dan.

## Die model se eenheid

Verander die eenheid in die kieser onder regs: {{ui:vt en duim}}, in, ft, yd, mi, mil, µm, mm, cm, m of km, solank hulle in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Eenhede}} aangeskakel is (die model se eie eenheid is altyd daar). 'n Lengte wat met enige eenheid se merk getik is, word in daardie eenheid gelees. Sien [Eenhede, getikte waardes en die eenheidlyste](common:unit-lists). Dit verander hoe lengtes gewys word en hoe kaal getalle gelees word; die model bly dieselfde grootte. Die eenheid word in die lêer gestoor.

Hoe groottes gewys word:

| Eenheid | Lengtes | Oppervlaktes | Volumes |
|---|---|---|---|
| vt en duim | `10' 6 1/2"` (tot 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² vanaf 0.01 m², anders mm² | m³ vanaf 0.01 m³, anders mm³ |

'n Nuwe model begin in voet en duim wanneer die blaaier se taal op 'n VSA-streek gestel is (en Liberië en Mianmar), en in millimeter oral anders. 'n Eenheid met 'n ster in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Eenhede}} word eerder gebruik, wanneer ModelCraft dit het. Of verander die kieser na {{ui:Nuut}}.
