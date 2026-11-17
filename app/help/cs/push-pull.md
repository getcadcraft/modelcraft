---
title: Tlač a tah ploch na tělesa
summary: Změňte plochu na krabici, zvyšte nebo snižte budovu, přidejte arkýř nebo prohlubeň a opakujte vzdálenost dvojklikem.
keywords: tlač tah, vytáhnout, výška, těleso, krabice, hmotnost, vyšší, výklenek, prohlubeň, opakovat, dvojklik, objem, úroveň, na ploše, zarovnat, stejná výška
from: dc093c91
---

{{ui:Tlač/tah}} ({{key:P}}) posune plochu podél jejího vlastního směru: nahoru a dolů u podlahy, dovnitř a ven u stěny. Co se stane, záleží na ploše.

## Vytvořte těleso z plochy

1. Nakreslete plochu, například obdélník na zemi ([Kreslení ploch](topic:draw-faces)).
2. Stiskněte {{key:P}}.
3. Najeďte na plochu. Zvýrazní se.
4. Klikněte na plochu a pak pohybujte ukazatelem. Plocha se zvedne (nebo klesne) a z jejích hran vyrostou stěny. Pole hodnoty ({{ui:Vzdálenost}}) a popisek ukazují vzdálenost.
5. Klikněte pro dokončení, nebo napište vzdálenost a stiskněte {{key:Enter}}: `3m`, `10'`, `2700` u modelu v milimetrech.

   Teď máte uzavřené těleso. Vyberte je celé a seskupte je (viz [Skupiny a komponenty](topic:groups-components)). {{ui:Informace o prvku}} pak ukáže "Těleso: ano" a jeho objem.

Samotnou plochu lze pojmout oběma způsoby: zvedněte ji pro hmotnost nad zemí, nebo ji zatlačte dolů pro jámu nebo základ.

:::tip
Místo dvojího klikání stiskněte plochu, táhněte a pusťte. Na dotykové obrazovce je to přirozený způsob: stiskněte, táhněte, zvedněte.
:::

## Tažení do výšky jiného prvku

Během tahu najeďte na roh, střed hrany, hranu nebo vodítko jiné části modelu. Plocha se přichytí k té výšce a ukáže se značka bodu. Použijte to, abyste dva bloky udělali stejně vysoké, nebo abyste se zastavili u vodicí čáry, kterou jste umístili [měřicí páskou](topic:guides-measure).

Můžete také najet na plochu rovnoběžnou s tou, kterou tlačíte, například na vrch jiného bloku nebo na vrch krabice, na které stojí sloup. Popisek napíše "Na ploše" a plocha, kterou tlačíte, skončí v jedné rovině s ní. Například zatlačte vnitřní plochu trubky dolů, dokud nebude v rovině s krabicí pod trubkou.

Plocha pod úhlem k té, kterou tlačíte, výšku nenastaví. Vzdálenost sleduje ukazatel. Stejně tak plocha za tou, kterou tlačíte.

Když tlačená plocha znovu skončí v rovině s okolními plochami, její strany zmizí. Nezůstanou žádné strany s nulovou výškou a obrys, který jste nakreslili, zůstane na ploše, takže ji můžete později znovu tlačit. Aby se z ní stala zase jedna plocha, smažte hrany obrysu pomocí {{ui:Guma}}: dvě plochy se spojí.

## Udělejte krabici vyšší nebo nižší

Tlač/tah na vrch krabice. Protože strany už od něj vedou rovně nahoru, vrch se jen posune: krabice se zvýší nebo sníží a nevzniknou žádné nové hrany.

- Zatlačení vrchu až úplně dolů na spodek krabici odstraní. ModelCraft se zastaví na nulové výšce; krabici nikdy nevyvrátí naruby.
- Totéž platí pro každou plochu, jejíž sousední hrany běží podél jejího směru, například konec zdi.

## Přidejte výklenek nebo výstupek

1. Nakreslete obdélník na boku krabice (začněte na ploše; zůstane v rovině plochy).
2. Stiskněte {{key:P}} a nový obdélník vytáhněte **ven**. Přidá materiál: arkýř, komín, markýzu.
3. Nebo ho zatlačte **dovnitř**. Vyřízne prohlubeň: verandu, niku, ustoupený vchod.

Když se strany nového dílu zarovnají s již existujícími plochami, sloučí se do jedné plochy. Na rovné stěně tak nezůstanou zbloudilé čáry.

## Protlačení skrz

Zatlačení plochy do tělesa se zastaví u první plochy za ní. Když se k ní dostane, vyřízne otvor skrz. Takto se dělají okna a dveře ve zdi s tloušťkou. Viz [Vyříznutí otvoru ve zdi](topic:openings).

## Zadejte vzdálenost

Po kliknutí na plochu napište vzdálenost a stiskněte {{key:Enter}}.

- Zadaná vzdálenost jde tím směrem, kterým jste se pohybovali. Pokud jste se ještě nepohnuli, jde směrem dopředu od plochy (z tělesa ven, ze země nahoru).
- Napište záporné číslo, například `-500`, pro opačný směr.
- Pokud si to před kliknutím rozmyslíte, stiskněte {{key:Esc}}. Plocha se vrátí.

## Opakujte poslední vzdálenost

Po jednom tlač/tahu dvakrát klikněte na jinou plochu, zatímco je ještě vybrán {{ui:Tlač/tah}}. Posune se o stejnou vzdálenost. Takto nejrychleji dáte několika stěnám nebo několika podlažím stejnou tloušťku nebo výšku.

ModelCraft si vzdálenost pamatuje, dokud nepřepnete na jiný nástroj.

## Co je dobré vědět

- Tlač/tah pracuje s jednou plochou najednou. Pokud kliknete na něco, co není plocha, stavový řádek napíše "Tlač/tah pracuje s plochou. Klikněte na plochu."
- Pro tlač/tah plochy uvnitř skupiny nebo komponenty ji nejdřív otevřete (dvojklikem).
- Se zapnutým **Kolize** se tlač nebo tah, který narazí na jiné těleso, zastaví tam, kde se dotkne. Popisek řekne, čeho se dotkl (název objektu, nebo "volná geometrie v této skupině"), a zvýrazní plochy, které potkal. Kapsa, do které tlačíte vlastní těleso (například odsazená plocha zatlačená zpět dolů), je součástí tohoto tělesa a jeho stěnami se nikdy nezastaví.
- Dvě tělesa tlačená do sebe se navzájem neřežou ani nespojují: jejich plochy jen projdou skrz. Viz [Ještě není hotovo](topic:not-built-yet).
