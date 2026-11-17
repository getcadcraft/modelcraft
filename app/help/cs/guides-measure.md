---
title: Měření a umísťování vodítek
summary: Čtěte délky a plochy, měřte mezi dvěma body pásmem a rozmísťujte vodicí čáry a body, podle kterých lze kreslit.
keywords: měření, pásmo, úhloměr, úhel, vodítko pod úhlem, vodítko, vodicí čára, konstrukční čára, vzdálenost, kóta, délka, plocha, odsazení, rozvržení, vodicí bod
from: de6d04d9
---

## Čtení velikostí bez měření

Vyberte něco a podívejte se do {{ui:Informace o prvku}}:

- Hrana ukáže svou **délku**.
- Plocha ukáže svou **plochu** a počet otvorů.
- Několik ploch ukáže svou **celkovou plochu**.
- Skupina nebo komponenta ukáže svou **velikost** (šířku × hloubku × výšku kvádru kolem ní) a, je-li uzavřeným pevným tělesem, svůj **objem**.
- Není-li nic vybráno, {{ui:Informace o prvku}} ukáže velikost celého modelu.

Délky a plochy používají jednotku z výběru vpravo dole. Model v milimetrech ukazuje plochy od 0.01 m² výše v metrech čtverečních (místnost 4 × 3 m se zobrazí jako "12 m²").

Při kreslení ukazuje políčko hodnoty živou délku, velikost, poloměr nebo vzdálenost, takže málokdy budete muset měřit dodatečně.

Chcete-li změnit velikost po nakreslení, vyberte hranu nebo skupinu a přepište její délku nebo velikost v {{ui:Informace o prvku}}. Nebo umístěte [kótu](topic:dimensions) a zadejte do ní novou délku.

## Měření mezi dvěma body

1. Stiskněte {{key:T}} pro měření {{ui:Pásmo}}.
2. Klikněte na bod: roh, střed úsečky, bod na ploše nebo na zemi. (Klik na hranu dělá něco jiného; viz níže.)
3. Přesuňte se na druhý bod. Hrot kurzoru a políčko hodnoty ({{ui:Délka}}) ukážou vzdálenost. Přichytí se k bodům a ke červenému, zelenému a modrému směru.
4. Klikněte. Stavový řádek hlásí "Změřeno: 4' 6"." a na druhém bodě zůstane **vodicí bod**.

Chcete-li místo toho zanechat vodicí bod v přesné vzdálenosti, zadejte ji po prvním kliknutí a stiskněte {{key:Enter}}: půjde ve směru, kterým ukazujete.

## Vodicí čára

Vodicí čára je nekonečná čárkovaná přímka rovnoběžná s hranou v zvolené vzdálenosti. Vodítka používejte k vytyčení odsazení, výšky podlaží nebo místa, kde začíná okno.

1. Stiskněte {{key:T}}.
2. Klikněte na **hranu** (ne na její konec). Hrot říká "Na hraně".
3. Odsuňte se od hrany na stranu, kam má vodítko jít. Pojede za vámi čárkovaná čára rovnoběžná s hranou a políčko hodnoty ({{ui:Odsazení}}) ukáže vzdálenost.
4. Klikněte, nebo zadejte odsazení a stiskněte {{key:Enter}}: `1.5m`, `5'`.

   Stavový řádek hlásí "Vodicí čára 1.5 m od hrany."

Začnete-li na existující vodicí čáře, vytvoříte další vodítko rovnoběžně s ní, takže můžete mřížku postupně odsazovat od jednoho vodítka.

Zadáte-li odsazení, aniž byste se předtím odsunuli od hrany, ModelCraft nepozná, kterou stranu myslíte: "Nejprve se odsuňte od hrany, aby bylo vidět, která strana."

## Vodítko pod úhlem: Úhloměr

1. Klikněte na {{ui:Úhloměr}} ve skupině {{ui:Upravit}}.
2. Klikněte na střed: bod, kterým vodítko prochází. Na ploše leží úhloměr na této ploše; jinde leží vodorovně. Po tomto kliknutí {{key:Right}}, {{key:Left}} nebo {{key:Up}} jej postaví kolmo k červené, zelené nebo modré ose (opakovaným stiskem zrušíte).
3. Klikněte na bod, který nastaví 0°, například podél hrany.
4. Přesuňte se na požadovaný úhel a klikněte: přichytí se v krocích po 15°. Nebo zadejte úhel ve stupních, například `22.5`, a stiskněte {{key:Enter}}; vodítko půjde na stranu, na které je kurzor.

Vodicí čára prochází středem pod daným úhlem. Podél ní kreslete nástrojem {{ui:Úsečka}} pro sklon střechy, sražení nebo šikmou stěnu.

## Kreslení podle vodítek

Kreslicí nástroje se přichytí k vodicím čarám ("Na vodítku") a vodicím bodům ("Vodicí bod") a také tam, kde vodicí čára protíná směr osy. Začněte obdélník na místě, kde se kříží dvě vodítka, a umístíte jej přesně.

## Odstranění vodítek

- Jedno vodítko: klikněte na něj nástrojem {{ui:Vybrat}} a stiskněte {{key:Delete}}, nebo na něj klikněte {{ui:Guma}}.
- Všechna vodítka: nic nevybírejte a klikněte na {{ui:Smazat všechna vodítka}} v {{ui:Informace o prvku}}.

Vodítka se ukládají do souboru `.modelcraft`. Do jiných formátů se neexportují.
