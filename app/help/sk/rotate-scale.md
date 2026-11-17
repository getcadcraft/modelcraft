---
title: Otáčanie a mierka
summary: Otáčajte veci okolo bodu kliknutím alebo zadaním stupňov a meňte ich veľkosť rovnomerne podľa faktora.
keywords: úchyty mierky, natiahnutie, nerovnomerne, po osiach, prevrátiť, zrkadlová kópia, prevrátiť pozdĺž, otočiť, otáčať, uhol, stupne, uhlomer, mierka, zmeniť veľkosť, zväčšiť, zmenšiť, faktor, rovnomerná mierka
from: 45cdcb49
---

## Otočenie

{{ui:Otočiť}} ({{key:Q}}) otáča výber okolo stredového bodu. Vyžaduje tri kliknutia: stred, začiatočný smer a koncový smer.

1. Vyberte to, čo chcete otočiť. Ak nič nie je vybrané, Otočiť vezme to, na čo najprv kliknete.
2. Stlačte {{key:Q}}. Za ukazovateľom sa pohybuje kruh, ktorý ukazuje rovinu, v ktorej budete otáčať.
3. Kliknite na stred otáčania.
   - Na zemi alebo v prázdnom priestore kruh leží vodorovne (modrý): otočenie je okolo zvislej osi, ako keď otáčate budovu na jej pozemku.
   - Na ploche kruh leží v rovine tejto plochy: otočenie je okolo vlastného smeru plochy. Kliknite na stenu, ak chcete niečo otočiť okolo vodorovnej osi.
4. Kliknite na bod, ktorý určí, kde uhol začína, napríklad pozdĺž hrany otáčanej veci.
5. Pohybujte ukazovateľom okolo stredu. Uhol sa zobrazí v hrote a vo poli hodnoty ({{ui:Uhol}}). Pri priblížení k jednej zo 15° sa zachytáva po krokoch 15°.
6. Kliknutím dokončite, alebo zadajte uhol v stupňoch a stlačte {{key:Enter}}: `90`, `45`, `-30`.

   Kladné uhly otáčajú proti smeru hodinových ručičiek, pozorované zo strany, ku ktorej kruh smeruje.

Stlačte {{key:Ctrl}} (alebo {{key:Alt}}) počas otáčania, ak chcete otočiť **kópiu** a nechať pôvodný objekt na mieste, ako pri Presunúť; hrot ukáže, či je kópia zapnutá, a opätovným stlačením ju vypnete. Hneď po otočenej kópii napíšte `3x` pre ďalšie kópie okolo rovnakého stredu.

Ako pri presune, aj otočenie časti súvisiacej geometrie skrúti plochy k nej pripojené. Najprv zoskupte veci, ak ich chcete otočiť celé.

:::note
Hrot hovorí, že klávesy so šípkami vyberajú os otáčania, ale v tejto verzii pred prvým kliknutím namiesto toho obiehajú zobrazenie. Ak chcete vybrať os, kliknite na stred na ploche, ktorá smeruje tam, kam chcete. Pozri [Ešte nie je hotové](topic:not-built-yet).
:::

## Mierka

{{ui:Mierka}} ({{key:S}}) mení veľkosť výberu. Najprv vyberte, čo chcete zmeniť, potom stlačte {{key:S}}: na rohoch, hranách a stredoch strán ohraničujúceho boxu sa objavia malé štvorčeky (úchyty).

### Natiahnutie alebo mierka úchytmi

- **Roh** rovnomerne mení mierku vo všetkých smeroch, okolo protiľahlého rohu.
- Úchyt v strede **strany** natiahne len v tomto smere, okolo protiľahlej strany: predĺži box bez toho, aby sa zvýšil.
- Úchyt v strede **hrany boxu** natiahne v dvoch smeroch, ktoré ním prechádzajú.
- Podržte {{key:Ctrl}}, keď kliknete na úchyt, ak chcete meniť mierku okolo stredu boxu.

Kliknite na úchyt, pohnite ukazovateľom a znova kliknite; alebo kliknite na úchyt, zadajte faktor (`2` zdvojnásobí, `0.5` zníži na polovicu) a stlačte {{key:Enter}}. Ak chcete každému smeru vlastný faktor, zadajte tri, pre červenú, zelenú a modrú: `2,1,0.5`. Vnútri otvorenej skupiny sú smery vlastné skupine.

### Mierka okolo ľubovoľného bodu

Kliknite kdekoľvek inde ako na úchyt, ak chcete meniť mierku rovnomerne okolo vlastného bodu. Vyžaduje to tri kliknutia:

1. Vyberte, čo chcete zmeniť. Ak nič nie je vybrané, Mierka vezme to, na čo najprv kliknete.
2. Stlačte {{key:S}}.
3. Kliknite na bod, ktorý zostane na mieste (nie na úchyte), napríklad dolný roh.
4. Kliknite na referenčný bod. Jeho vzdialenosť od prvého bodu sa počíta ako 1×.
5. Pohybujte ukazovateľom k prvému bodu alebo od neho. Faktor sa zobrazí v hrote a vo poli hodnoty ({{ui:Mierka}}).
6. Kliknutím dokončite, alebo zadajte faktor a stlačte {{key:Enter}}: `2` zdvojnásobí veľkosť, `0.5` ju zníži na polovicu.

### Presná veľkosť

Ak chcete, aby mala vec presnú dĺžku, vypočítajte faktor: nová dĺžka delená aktuálnou dĺžkou. V režime troch kliknutí pole hodnoty počíta, takže zadajte `4.2/3.6`, aby stena dlhá 3.6 m mala 4.2 m. Pole hodnoty úchytu prijíma len čísla: faktor najprv vypočítajte (4.2 delené 3.6 je asi 1.1667). Najprv vyberte hranu, aby ste si jej aktuálnu dĺžku prečítali v {{ui:Informácie o entite}}.

### Oprava importu v chybnej veľkosti

Súbory OBJ nemajú jednotku, takže model nakreslený v milimetroch príde 1000-krát väčší. Vyberte importovanú skupinu, stlačte {{key:S}}, kliknite na roh úchytu, zadajte `0.001` a stlačte {{key:Enter}}. Pre model nakreslený v palcoch zadajte `0.0254`.

## Čo treba vedieť

- Mierka okolo bodu tromi kliknutiami je rovnomerná. Ak chcete natiahnuť len v jednom smere, použite úchyt strany alebo hrany (pozri vyššie).
- Zmena mierky skupiny alebo komponentu mení kópiu, ktorú ste zmenili; ostatné kópie komponentu si zachovajú svoju veľkosť.
- Stlačte {{key:Esc}} pred posledným kliknutím, ak chcete zrušiť.

## Prevrátenie

{{ui:Úpravy}} › {{ui:Viac}} › {{ui:Prevrátiť pozdĺž červenej}}, {{ui:Prevrátiť pozdĺž zelenej}} alebo {{ui:Prevrátiť pozdĺž modrej}} zrkadlí výber na mieste, cez stred jeho boxu: schodisko s ľavým nábehom sa stane pravým. Plochy zostávajú obrátené von a skupina alebo komponent sa zrkadlí ako celok (jej vnútro sa nepreprepisuje).

{{ui:Prevrátená kópia pozdĺž červenej}} (a zelenej, modrej) nechá pôvodný objekt na mieste a položí zrkadlovú kópiu vedľa neho, cez vzdialenú stranu boxu výberu: druhé dvere páru, druhé krídlo budovy. Voľná geometria, ktorá sa tam dotýka, sa spojí s pôvodným objektom, ako sa dotýkajúca geometria vždy spája; najprv urobte pôvodný objekt skupinou, aby zostali oddelené.

Vnútri otvorenej skupiny sú červená, zelená a modrá osi tejto skupiny.
