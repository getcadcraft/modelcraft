---
title: Rozřezání pro pryskyřičovou tiskárnu
summary: Rozřežte tiskovou plochu pro pryskyřičovou tiskárnu, vydlabejte a podepřete díl, prohlédněte si vrstvy, uložte soubor tiskárny a najděte expozici pomocí testu expozice.
keywords: pryskyřice, tisk pryskyřicí, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, dutý, větrací otvor, podpěry, podložka, raft, test expozice, žebřík expozice, kalibrace, vrstvy, doplněk
from: 83c394e1
---

Doplňky pro pryskyřici rozřežou to, co je na tiskové ploše, na obrazy vrstev pro obrazovku vaší tiskárny a uloží soubor, který tiskárna čte. Jsou zdarma, nic není zamčené a jsou vypnuté, dokud je nezapnete.

:::note
Žádný soubor zatím nebyl načten na skutečné tiskárně. Soubory byly čteny zpět jen vlastními čtečkami CadCraftu a podpěry jsou nové. Zkontrolujte vrstvy a první tisk spusťte ručně.
:::

## Co uděláte

Rozřežte díl pro pryskyřici, zkontrolujte vrstvy, uložte soubor a zkopírujte jej do tiskárny.

## Postup

1. Otevřete {{ui:Nastavení}} › {{ui:Doplňky}} a zapněte doplněk slicer pro pryskyřici a doplněk pro formát souboru vaší tiskárny (Elegoo GOO, SL1, Chitubox nebo Anycubic). Můžete také stisknout {{ui:Přidat tisk pryskyřicí}} na kartě fáze tisku.
2. Umístěte díl na tiskovou plochu, jak je popsáno v [Umístění věcí na tiskovou plochu](topic:print-stage), a pak vyberte **Pryskyřice** vedle **Tisk pomocí**.
3. V části **Nastavení tisku pryskyřicí** vyberte svou **Tiskárnu** a svou **Pryskyřici**. Karta ukazuje velikost obrazovky v pixelech. Jde o velikosti zveřejněné výrobcem, zkontrolujte tedy svou; můžete je upravit v části Vlastní.
4. Nastavte **Výšku vrstvy (mm)**, **Expozici (s)** a **Expozici dna (s)**. Čísla pro každou pryskyřici jsou jen výchozím bodem.
5. Zaškrtněte **Vydlabat, s větracím otvorem**, chcete-li dutý díl, a nastavte **Stěnu (mm)** a **Šířku otvoru (mm)**.
6. Zaškrtněte **Podpěry a podložku** a vyberte **Hustotu podpěr**: Lehká, Střední nebo Těžká.
7. Vyberte **Formát souboru**. Pokud karta říká, že žádný ještě není přidán, stiskněte tlačítko s nápisem Přidat a název formátu.
8. Stiskněte {{ui:Náhled vrstev}} a posouvejte posuvník **Vrstva**. Plovoucí kusy jsou označeny kruhem. Řádek pod ním uvádí počet vrstev, čas a pryskyřici v mL, gramech a nákladech.
9. Stiskněte {{ui:Uložit tiskový soubor}}, zkontrolujte souhrn a stiskněte {{ui:Uložit}}. Zkopírujte soubor do tiskárny.

## Najděte expozici

1. Zapněte doplněk testu expozice v {{ui:Nastavení}} › {{ui:Doplňky}}.
2. Stiskněte {{ui:Umístit zkušební díl na tiskovou plochu}}.
3. Stiskněte {{ui:Uložit žebřík expozic}}. Dostanete jeden soubor pro každou expozici, v zipu.
4. Vytiskněte každý soubor stejnou pryskyřicí a ponechte tu expozici, u které jsou nejostřejší tenké sloupky a průchozí otvory.

## Poznámky

- Rozřezávání běží na pozadí, takže stránka zůstává použitelná u velké desky.
- Kusy, které nejsou uzavřenými tělesy, se vynechají a karta to uvede.
- Pokud tiskárna soubor odmítne, karta formátu má možnosti pro to, co formát nechává otevřené. Změňte jednu, uložte znovu a dejte nám vědět, která zabrala.
- Verze Anycubic 517 a 518 se nezapisují.
