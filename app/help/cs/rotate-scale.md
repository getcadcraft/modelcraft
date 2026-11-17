---
title: Otáčení a měřítko
summary: Otáčejte věci kolem bodu kliknutím nebo zadáním stupňů a měňte jejich velikost rovnoměrně podle činitele.
keywords: úchyty měřítka, natáhnout, neuniformní, po osách, převrátit, zrcadlit, zrcadlená kopie, převrátit podle, otočit, točit, úhel, stupně, úhloměr, měřítko, změnit velikost, zvětšit, zmenšit, činitel, rovnoměrné měřítko
from: 45cdcb49
---

## Otočit

{{ui:Otočit}} ({{key:Q}}) otáčí výběr kolem středového bodu. Vyžaduje tři kliknutí: střed, počáteční směr a koncový směr.

1. Vyberte, co chcete otočit. Pokud nic není vybráno, Otočit vezme to, na co kliknete jako první.
2. Stiskněte {{key:Q}}. Za ukazovátkem se pohybuje kruh, který ukazuje rovinu, ve které budete otáčet.
3. Klikněte na střed otáčení.
   - Na zemi nebo v prázdném prostoru leží kruh naplocho (modře): otáčení je kolem svislé osy, jako když se budova otáčí na svém pozemku.
   - Na ploše leží kruh v rovině té plochy: otáčení je kolem vlastního směru plochy. Klikněte na stěnu, chcete-li otočit něco kolem vodorovné osy.
4. Klikněte na bod, který nastaví začátek úhlu, například podél hrany věci, kterou otáčíte.
5. Pohybujte ukazovátkem kolem středu. Úhel se ukazuje v tipu a v poli hodnoty ({{ui:Úhel}}). Při přiblížení se zachytává po krocích 15°.
6. Klikněte pro dokončení, nebo zadejte úhel ve stupních a stiskněte {{key:Enter}}: `90`, `45`, `-30`.

   Kladné úhly se otáčejí proti směru hodinových ručiček, při pohledu ze strany, kam kruh směřuje.

Stiskněte {{key:Ctrl}} (nebo {{key:Alt}}) během otáčení, chcete-li otočit **kopii** a původní nechat na místě, jako u Přesunout; tip ukazuje, zda je kopírování zapnuto, a opětovným stisknutím klávesy se vypne. Zadejte `3x` ihned po otočené kopii pro více kopií kolem téhož středu.

Stejně jako u Přesunout, otočení části propojené geometrie zkroutí plochy, které jsou k ní připojené. Nejdřív věci seskupte, aby se otočily celé.

:::note
Tip říká, že klávesy šipek vybírají osu otáčení, ale v této verzi místo toho před prvním kliknutím otáčejí pohled. Chcete-li zvolit osu, klikněte na střed na plochu, která směřuje tím směrem, jakým chcete. Viz [Ještě není hotovo](topic:not-built-yet).
:::

## Měřítko

{{ui:Měřítko}} ({{key:S}}) mění velikost výběru. Nejdřív vyberte, co chcete změnit, pak stiskněte {{key:S}}: na rozích, hranách a uprostřed stran krabice se objeví malé čtverečky (úchyty).

### Natažení nebo měřítko pomocí úchytů

- Úchyt na **rohu** měří rovnoměrně všemi směry kolem protilehlého rohu.
- Úchyt uprostřed **strany** natahuje jen v tom směru, kolem protilehlé strany. Prodlouží krabici, aniž by se zvýšila.
- Úchyt uprostřed **hrany krabice** natahuje ve dvou směrech napříč ní.
- Podržte {{key:Ctrl}} při kliknutí na úchyt, chcete-li měnit měřítko kolem středu krabice.

Klikněte na úchyt, pohybujte ukazovátkem a znovu klikněte; nebo klikněte na úchyt, zadejte činitel (`2` zdvojnásobí, `0.5` způlí) a stiskněte {{key:Enter}}. Chcete-li každému směru dát vlastní činitel, zadejte tři: pro červenou, zelenou a modrou: `2,1,0.5`. Uvnitř otevřené skupiny jsou směry vlastní osy skupiny.

### Měřítko kolem libovolného bodu

Klikněte kamkoli mimo úchyt pro rovnoměrné měřítko kolem vlastního bodu. Vyžaduje to tři kliknutí:

1. Vyberte, co chcete změnit. Pokud nic není vybráno, Měřítko vezme to, na co kliknete jako první.
2. Stiskněte {{key:S}}.
3. Klikněte na bod, který zůstane na místě (ne na úchytu), například dolní roh.
4. Klikněte na referenční bod. Jeho vzdálenost od prvního bodu se počítá jako 1×.
5. Pohybujte ukazovátkem směrem k prvnímu bodu nebo od něj. Činitel se ukazuje v tipu a v poli hodnoty ({{ui:Měřítko}}).
6. Klikněte pro dokončení, nebo zadejte činitel a stiskněte {{key:Enter}}: `2` zdvojnásobí velikost, `0.5` ji způlí.

### Měřítko na přesnou velikost

Chcete-li, aby něco mělo přesnou délku, spočítejte činitel: nová délka dělená současnou délkou. V režimu tří kliknutí pole hodnoty počítá, takže zadejte `4.2/3.6`, aby stěna 3.6 m měla délku 4.2 m. Pole hodnoty úchytu přijímá jen prosté číslo, takže činitel spočítejte předem (4.2 dělené 3.6 je asi 1.1667). Nejdřív vyberte hranu, aby se její současná délka přečetla v {{ui:Informace o prvku}}.

### Oprava importu se špatnou velikostí

Soubory OBJ nemají jednotku, takže model nakreslený v milimetrech přijde 1000krát příliš velký. Vyberte importovanou skupinu, stiskněte {{key:S}}, klikněte na rohový úchyt, zadejte `0.001` a stiskněte {{key:Enter}}. Pro model nakreslený v palcích zadejte `0.0254`.

## Co je dobré vědět

- Měnit měřítko kolem bodu třemi kliknutími je rovnoměrné. Chcete-li natáhnout jen v jednom směru, použijte úchyt strany nebo hrany (viz výše).
- Změna měřítka skupiny nebo komponenty změní kopii, kterou jste změnili; ostatní kopie komponenty si ponechají svou velikost.
- Stiskněte {{key:Esc}} před posledním kliknutím pro zrušení.

## Převrácení

{{ui:Úpravy}} › {{ui:Další}} › {{ui:Převrátit podle červené}}, {{ui:Převrátit podle zelené}} nebo {{ui:Převrátit podle modré}} zrcadlí výběr na místě, přes střed jeho krabice: levé schodiště se stane pravým. Plochy zůstávají obrácené ven a skupina nebo komponenta se zrcadlí jako celek (její vnitřek se nepřepisuje).

{{ui:Převrácená kopie podle červené}} (a zelené, modré) ponechá původní na místě a vloží zrcadlenou kopii vedle něj, přes vzdálenou stranu krabice výběru: druhé dveře páru, druhé křídlo budovy. Volná geometrie, která se tam dotýká, se připojí k původnímu, jak se dotýkající geometrie vždy připojuje; nejdřív udělejte původní skupinu, abyste je udrželi odděleně.

Uvnitř otevřené skupiny jsou červená, zelená a modrá vlastními osami skupiny.
