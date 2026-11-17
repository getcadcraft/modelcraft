---
title: Řezné roviny: rozříznutí modelu
summary: Umístěte řeznou rovinu, abyste viděli dovnitř modelu, posouvejte ji, obraťte ji nebo řez vypněte.
keywords: řez, řezná rovina, řezný pohled, ořez, uvnitř, půdorys, plátek, příčný řez, vyřezaný pohled
from: 28c3a645
---

Řezná rovina rozřízne model, takže můžete vidět a pracovat uvnitř něj: půdorys domu nebo vnitřek skříně. Model se nemění; řez je jen pohled.

## Umístění

1. Klikněte na {{ui:Řez}} ve skupině {{ui:Kamera}}.
2. Klikněte na plochu. Rovina se umístí na tuto plochu se čtyřmi šipkami, které směřují k vám.

   Klikněte mimo jakoukoli plochu a vznikne čtvercová rovina kolmá na směr, kterým se nejvíc díváte. Stiskněte nejdřív šipku, chcete-li ji postavit kolmo k červené ({{key:Right}}), zelené ({{key:Left}}) nebo modré ({{key:Up}}).

Strana, na kterou šipky ukazují, je **odříznuta**. Rovina umístěná na ploše zatím nic neřeže: posuňte ji do modelu.

## Posun, obrácení, vypnutí

Klikněte na obrys roviny, abyste ji vybrali. V {{ui:Informace o prvku}}:

- {{ui:Podél svých šipek}} říká, kde rovina sedí. Zadejte novou vzdálenost a stiskněte {{key:Enter}}, chcete-li ji posunout modelem; zadání `-1m` u roviny umístěné na přední ploše ji posune 1 m do modelu.
- {{ui:Obrátit}} otočí šipky, takže se odřízne druhá strana.
- {{ui:Aktivní (řeže model)}}: řeže vždy jedna rovina. Zaškrtněte políčko jiné roviny nebo umístěte novou a ta bude řezat místo ní.
- Přejmenujte ji v {{ui:Název}}; smažte ji klávesou {{key:Delete}} nebo {{ui:Guma}}.

Kde rovina prochází uzavřeným tělesem, je řez vyplněn tmavou barvou. Geometrie, která není uzavřená (jedna plocha, otevřená krabice), se řeže, ale nevyplňuje se.

## Zobrazení a skrytí

V {{ui:Pohledy}}:

- {{ui:Zobrazit roviny řezu}} skryje obrysy a šipky rovin (řez zůstává).
- {{ui:Zobrazit řezy}} vypne řez a zobrazí celý model, aniž by roviny smazal.

[Zobrazení pro prezentaci](topic:styles-shadows#presentation-view) skryje i obrysy.

## Věci k vědomí

- Co je odříznuto, nelze na to kliknout ani se k tomu přichytit, takže můžete kreslit na to, co řez ukazuje.
- Řezné roviny, která je aktivní, a obě přepínače se ukládají do souboru ModelCraftu. Každá změna je jeden krok zpět.
- Exporty vždy obsahují celý model: řez je pohled, ne úprava.
