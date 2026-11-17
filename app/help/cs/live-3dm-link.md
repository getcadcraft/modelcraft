---
title: Živé propojení modelu .3dm
summary: Měňte model v programu, ve kterém vznikl, a sledujte změnu zde, z Rhina 8 nebo z definice Grasshopper, bez opakovaného ukládání a importu.
keywords: rhino, grasshopper, živé propojení, živé připojení, 3dm, nurbs, parametrický, propojení, synchronizace, skript, referenční model, odeslání
from: 331b0a7e
---

Modelujte tam, kde modelujete, a výsledek použijte zde: k vykreslení, osvětlení nebo k sestavení scény kolem něj. Každá změna v druhém programu aktualizuje jednu skupinu v ModelCraftu.

:::note
Propojení potřebuje **CadCraft Studio** na stejném počítači. Karta prohlížeče nemůže spojení převzít. Nic nejde přes internet: skript komunikuje se Studiem na adrese tohoto počítače, pomocí tokenu.
:::

:::warning
Toto propojení bylo otestováno se zápisem souborů skriptu a s náhradou za druhý program, zatím ne přímo uvnitř Rhina nebo Grasshopperu. Pokud tam něco selže, napište nám, co hlásilo.
:::

## Nastavení

1. Ve Studiu otevřete ModelCraft. V {{ui:Nastavení}} › {{ui:ModelCraft}} › {{ui:Asistenti}} zaškrtněte **Povolit AI asistentům a skriptům použití ModelCraftu**, potom klikněte na **Upravit**.
2. Ve Studiu zvolte {{ui:Připojit asistenta}}. Zobrazí se adresa a token, které vložíte níže.
3. Stáhněte skript: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Z Rhina

1. Spusťte `cadcraft_link.py` v editoru skriptů Rhina (Python 3 v Rhinu 8).
2. Poprvé vložte adresu a token. Uloží se do souboru `.cadcraft-link.json` ve vaší domovské složce, nikdy do modelu. Studio vytváří nový token při každém spuštění, takže se skript pak zeptá znovu.

Celý model se přenese jako jedna skupina pojmenovaná podle dokumentu, například "chair (linked)". Potom se každá změna přenese, když na chvíli počkáte, a odešlou se jen změněné objekty. Chcete-li zastavit, spusťte skript znovu.

## Z Grasshopperu

Nejprve skript jednou spusťte v Rhinu, aby se adresa a token uložily.

1. Přidejte komponentu Script (Python 3) a vložte do ní celý obsah `cadcraft_link.py`.
2. Nastavte jí tyto vstupy: `G` (geometrie, s přístupem přes seznam), `N` (název, volitelný), `On` (logický přepínač) a `Target` (volitelný: `model` nebo `part`, pokud jsou otevřené obě aplikace).
3. Nastavte `On` na true.

Každý výpočet odešle `G` a nahradí to, co komponenta odeslala naposledy, takže tažení posuvníku aktualizuje zde skupinu. Její výstup `a` říká, co se stalo. Každá komponenta má vlastní skupinu.

## Co můžete se skupinou dělat

- **Přesouvejte ji, označujte a stavte kolem ní.** Umístění skupiny a její značky zůstává při každé aktualizaci, stejně tak vše vedle ní.
- **Uvnitř ji neupravujte.** Každá aktualizace nahradí obsah skupiny. Tyto objekty patří druhému programu.
- **Zpět.** Aktualizace, které následují do dvou sekund jedna za druhou, sdílejí jeden krok zpět, takže {{key:Mod+Z}} vrátí celé tažení. Další aktualizace model znovu sladí.
- **Uložení.** Uložený soubor si propojení zachová. Po novém otevření spusťte skript znovu a aktualizuje se stejná skupina.

## Co se přenese

Sítě, polyplochy, plochy a vytažená tělesa jako síť, kterou vidíte na obrazovce; SubD jako jejich síť; křivky jako hrany; bloky jako samostatné objekty na místě, kde stojí (ne jako komponenty); vrstvy jako značky, barvy a jednotky. Jak se tam zobrazí, najdete v [Import modelu .3dm](topic:import-3dm-files).

Vynechá se, s počtem uvedeným v druhém programu: body, text, kóty, světla a podobné prvky.

**Jen jedním směrem.** Změny zde se do druhého programu nevracejí.

## Když něco selže

- **"Žádné okno ModelCraft nebo PartCraft to nepovoluje":** proveďte krok 1 nastavení.
- **"Studio odmítlo token":** Studio bylo restartováno. Zkopírujte nový token a spusťte skript znovu. U Grasshopperu jej nejprve spusťte v Rhinu.
- **"Nelze se připojit ke CadCraft Studio":** Studio neběží, nebo se adresa změnila.
