---
title: Rozřezání pro pryskyřicovou tiskárnu
summary: Rozřežte tiskovou podložku pro tiskárnu pryskyřice na vrstvy, udělejte díl dutý a podepřete ho, prohlédněte vrstvy, uložte soubor tiskárny a najděte expozici zkušebním testem expozice.
keywords: pryskyřice, navrhnout náklon, přísavka, síla odtržení, výztuhy, tisk pryskyřicí, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, dutý, odvětrávací otvor, raft, podpěry, test expozice, žebřík expozic, kalibrace, vrstvy, doplněk
from: 8cc12858
---

Doplňky pro pryskyřici rozřežou to, co je na tiskové podložce, na obrázky vrstev pro displej vaší tiskárny a uloží soubor, který tiskárna čte. Jsou zdarma, bez uzamčených funkcí a vypnuté, dokud je nezapnete.

:::note
Soubor zatím nebyl načten na skutečné tiskárně. Soubory byly načteny pouze vlastními čtečkami CadCraft a podpěry jsou nové. Zkontrolujte vrstvy a první tisk spusťte ručně.
:::

## Co uděláte

Rozřežte díl pro pryskyřici, zkontrolujte vrstvy, uložte soubor a zkopírujte ho do tiskárny.

## Kroky

1. Otevřete {{ui:Nastavení}} › {{ui:Doplňky}} a zapněte doplněk slicer pro pryskyřici a doplněk pro formát souboru vaší tiskárny (Elegoo GOO, SL1, Chitubox nebo Anycubic). Můžete také stisknout {{ui:Přidat tisk pryskyřicí}} na kartě Fáze tisku.
2. Umístěte díl na podložku podle [Umístění věcí na tiskovou podložku](topic:print-stage) a poté vyberte {{ui:Pryskyřice}} vedle **Tisk s**.
3. V části **Nastavení tisku pryskyřicí** vyberte svou **Tiskárnu** a svou **Pryskyřici**. Karta ukazuje velikost displeje v pixelech. Jsou to údaje výrobce, zkontrolujte si ten svůj; upravit je můžete v části {{ui:Vlastní}}.
4. Nastavte **Výšku vrstvy (mm)**, **Expozici (s)** a **Expozici spodní vrstvy (s)**. Čísla pro každou pryskyřici jsou jen výchozí bod.
5. Zaškrtněte **Vydlabat, s odvětrávacím otvorem**, pokud chcete dutý díl, a nastavte **Tloušťku stěny (mm)** a **Šířku otvoru (mm)**.
6. Zaškrtněte **Podpěry a raft** a vyberte **Hustotu podpěr**: Lehká, Střední nebo Silná.
7. Vyberte **Formát souboru**. Pokud karta říká, že zatím žádný přidán není, stiskněte tlačítko s nápisem Přidat a názvem formátu.
8. Stiskněte {{ui:Náhled vrstev}} a posuňte posuvník **Vrstva**. Plovoucí kusy jsou označeny kroužkem. Řádek pod ním uvádí počet vrstev, čas a pryskyřici v mL, gramech a ceně.
9. Stiskněte {{ui:Uložit soubor pro tisk}}, zkontrolujte souhrn a stiskněte {{ui:Uložit}}. Zkopírujte soubor do tiskárny.

## Náklon, přísavky, výztuhy a hodnota odtržení

Tyto čtyři údaje jsou odhady z tvaru dílu. Ani jeden nebyl vyzkoušen na skutečné tiskárně, takže každý berte jako nápovědu a podívejte se na vrstvy.

1. Stiskněte {{ui:Navrhnout náklon}} pod **Náklon (stupně)**. CadCraft zkouší náklony od 0 do 60 stupňů a vybere ten s nejmenší největší vrstvou, nejmenším převislým povrchem a bez přísavky. Nastaví **Náklon (stupně)** a řekne, co zjistil. Váhy hodnocení jsou naše, ne výrobce tiskáren.
2. Po {{ui:Náhled vrstev}} varování označí dutiny, které se otevírají jen směrem k fólii. Taková dutina může při odtržení vrstvy držet přísavku. Nakloňte díl nebo přidejte otvor. Kapsy užší než velikost buňky uvedená ve varování se nezobrazí.
3. Když je zapnuto **Podpěry a raft**, zaškrtněte **Vyztužit vysoké podpěry**, aby se mezi vysoké tenké sloupky přidaly křížové výztuhy.
4. Řádek pod náhledem uvádí největší vrstvu v cm2. Sílu ukáže jen tehdy, když v části **Spodní vrstvy, zdvih a rychlosti** zadáte **Změřené napětí při odtržení**. Bez vlastní změřené hodnoty ukáže jen plochu.

## Najděte svou expozici

1. Zapněte doplněk testu expozice v {{ui:Nastavení}} › {{ui:Doplňky}}.
2. Stiskněte {{ui:Umístit zkušební díl na podložku}}.
3. Stiskněte {{ui:Uložit žebřík expozic}}. Dostanete jeden soubor pro každou expozici, v archivu zip.
4. Vytiskněte každý soubor stejnou pryskyřicí a zvolte expozici s nejostřejšími tenkými sloupky a otevřenými otvory.

## Poznámky

- Rozřezávání běží na pozadí, takže stránka zůstane použitelná i u velké podložky.
- Kusy, které nejsou uzavřenými tělesy, se vynechají a karta to uvede.
- Pokud tiskárna soubor odmítne, karta formátu nabízí možnosti pro to, co formát nechává otevřené. Změňte jednu, uložte znovu a dejte nám vědět, která zabrala.
- Verze Anycubic 517 a 518 se nezapisují.
