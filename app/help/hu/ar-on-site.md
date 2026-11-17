---
title: A modell megtekintése a helyszínen Android-telefonnal (AR)
summary: Tartsa fel az Android-telefont Chrome böngészővel, és lássa a modellt valós méretben a kamera képe fölött. Két pontra igazítja az épülethez, amelyeknél Ön áll, röntgenlencsével és gyors újraellenőrzéssel a következő látogatáskor. Nézésre való, kitűzésre nem.
keywords: ar, kiterjesztett valóság, telefon, android, chrome, webxr, helyszín, kamera, valós méret, röntgen, igazítás, illesztés, újraellenőrzés, arcore
from: 0f43b50b
---

A {{ui:View on site (AR, phone)}} a {{ui:Views}} menüben a modellt valós méretében mutatja a telefon kamerája fölött. **Android-telefonon, Chrome böngészővel** működik, biztonságos (https) oldalon, ha a telefon támogatja az AR-t. iPhone-on vagy iPad-en, számítógépen, vagy olyan Android-alkalmazásban, amely csak weboldalt jelenít meg, a funkció közli, miért nem indítható; ilyenkor használja a 3D nézetet, vagy nyissa meg ezt az oldalt a telefonon Chrome böngészőben.

**A telefon nézésre való.** Ne mérjen, ne tűzzön ki és ne vágjon semmit abból, amit a képernyő mutat: a telefon séta közben elsodródik, a célzási hiba pedig nő a két ponttól való távolsággal, amelyekre igazított (néhány centiméter a közelükben, többet távolabb). Semmi itt nem geodéziai pontosságú.

## A modell igazítása

1. Nyissa meg a modellt a telefonon, és válassza a {{ui:View on site (AR, phone)}} lehetőséget. Engedélyezze a kamerát.
2. Az alsó panel megnevezi az első pontot (a modell egyik talaji sarka). Álljon oda a helyszínen, irányítsa a zöld gyűrűt a talajra, és koppintson a {{ui:Place point}} gombra.
3. Menjen a második pontig, legalább fél méterre (minél távolabb, annál jobb az illeszkedés), és ugyanígy járjon el.
4. A modell valós méretben jelenik meg, a két helyhez illeszkedve elforgatva és eltolva. A panel megmutatja, mennyire egyezik a két pont.

A {{ui:Start over}} törli a pontokat. Az igazítás a modellfájlban marad meg, így a következő alkalommal, amikor a helyszínen nyitja meg a modellt, már igazítva indul.

## Röntgenlencse

A {{ui:X-ray lens}} a teljes modellt egy dobozban mutatja a telefon előtt (körülbelül másfél méter széles és három méter mély), a doboz máshol pedig csak halvány szellemképként; így megnézheti, mi van a fal mögött, anélkül hogy a valódi falat elveszítené.

## A következő látogatás

Álljon az első pontra, koppintson a {{ui:Re-check}} gombra, majd a {{ui:Place point}} gombra. Ha 5 centiméternél kevesebbel tér el, az igazítás megmarad. Fél méterig az eltérés szerint eltolja a modellt. Ennél többnél a panel arra kéri, hogy ismét mutasson rá a két helyre.

## Kilépés

A {{ui:Leave AR}} befejezi a munkamenetet. A kamerakép a böngészőben marad: semmi sem töltődik fel.
