---
title: Skupiny a komponenty
summary: Udržujte objekty odděleně, upravte jednu kopii a změňte tak všechny, a používejte panely Strom a Komponenty.
keywords: skupina, komponenta, vytvořit skupinu, vytvořit komponentu, rozložit, vytvořit samostatnou kopii, strom, instance, kopie, blok, vnořené, upravit skupinu, umístit
from: 7cb925f3
---

Volná geometrie v ModelCraftu se lepí k sobě: čáry, které se dotýkají, se navzájem dělí a plochy sdílející hranu se pohybují společně. Právě to umožňuje kreslit na plochy, ale znamená to také, že kvádr nakreslený na jiný kvádr se s ním spojí. **Skupiny** a **komponenty** tomu brání.

- **Skupina** obalí část geometrie, takže se chová jako jeden objekt. Nic vně ní se k ní nepřichytí.
- **Komponenta** je skupina, kterou lze umístit vícekrát. Každá kopie sdílí stejný obsah: upravíte-li jednu, změní se všechny. Komponenty používejte pro všechno, co se opakuje: okna, sloupy, stoly, stromy.

## Vytvoření skupiny nebo komponenty

1. Vyberte geometrii. Trojklik na plochu vybere celý propojený objekt; přetažení okna vybere vše uvnitř obdélníku.
2. Stiskněte {{key:Shift+G}} pro skupinu, nebo {{key:G}} pro komponentu. Můžete také kliknout na {{ui:Skupina}} nebo {{ui:Komponenta}} ve skupině {{ui:Uspořádat}} na panelu nástrojů, případně na {{ui:Vytvořit skupinu (Shift+G)}} nebo {{ui:Vytvořit komponentu (G)}} v {{ui:Informace o prvku}}.

   Stavový řádek hlásí "Seskupeno jako Group#1." nebo "Vytvořena komponenta Component#1.", nový objekt je vybrán a objeví se ve {{ui:Strom}}.

3. Chcete-li jej pojmenovat, napište název do pole {{ui:Název}} v {{ui:Informace o prvku}} a stiskněte {{key:Enter}}, nebo klikněte jinam.

Výběr plochy přinese s sebou i její hrany. Není-li nic vybráno, stavový řádek hlásí: "Nejprve vyberte geometrii (přetáhněte okno nebo trojklikem vyberte vše propojené)."

Skupiny lze seskupovat také do dalších skupin: vyberte několik skupin a stiskněte {{key:Shift+G}}. Panel {{ui:Strom}} ukáže vnoření.

:::note
Klávesy odpovídají výchozímu nastavení SketchUpu: {{key:G}} vytvoří komponentu, {{key:Shift+G}} skupinu.
:::

## Úprava uvnitř skupiny nebo komponenty

1. Dvakrát na ni klikněte (v pohledu nebo ve {{ui:Strom}}), nebo ji vyberte a klikněte na {{ui:Úpravy}} v {{ui:Informace o prvku}}.

   Zbytek modelu zešedne, osy se přesunou na vlastní osy skupiny a {{ui:Strom}} ukáže "Úpravy: Model › Group#1". Stavový řádek hlásí "Upravujete Group#1. Esc nebo dvojklik mimo ni ji zavře."

2. Kreslete, tlačte a tahejte, přesouvejte a mažte jako obvykle. Vše zůstává uvnitř skupiny.
3. Zavřete ji: stiskněte {{key:Esc}} (dvakrát, je-li něco vybráno), dvakrát klikněte do prázdného prostoru, nebo klikněte na {{ui:Zavřít skupinu}} ve {{ui:Strom}}.

Zatímco je komponenta otevřená, mění se každá její kopie, jak pracujete.

## Umístění dalších kopií komponenty

- Zkopírujte ji pomocí {{ui:Přesunout}} a {{key:Ctrl}} (viz [Přesun a kopírování](topic:move-copy)). Každá kopie je dalším umístěním téže komponenty.
- Nebo klikněte na {{ui:Umístit}} vedle ní v panelu {{ui:Komponenty}} a potom klikněte, kam ji chcete umístit. Její počátek, tedy nejnižší roh kvádru kolem výběru v okamžiku vytvoření, přistane tam, kam kliknete. Nástroj se pak vrátí na {{ui:Vybrat}}.

{{ui:Komponenty}} ukazuje počet umístěných kopií ("4×") a {{ui:Strom}} ukazuje počet za názvem.

## Přeskupení ve Stromu

Přetáhněte řádek ve {{ui:Strom}}, abyste změnili jeho zařazení. Ve výhledu se nic nepřesune: skupina si zachová své místo v modelu.

- **Do skupiny:** pusťte jej na střed řádku skupiny (řádek dostane přerušovaný rámeček). Přidá se dovnitř, na konec.
- **V jiném pořadí:** pusťte jej na horní nebo dolní okraj řádku (ukáže se čára). Zařadí se těsně před nebo za tento řádek, dovnitř stejné skupiny jako ten řádek, takže tím lze také vložit objekt do skupiny na zvolené místo.
- **Ven na nejvyšší úroveň:** pusťte jej na nadpis {{ui:Strom}}. Přidá se na konec.

Každé přetažení je jeden krok: {{key:Mod+Z}} jej vrátí zpět. {{key:Esc}} během tažení nic nepustí. Skupina nemůže být vložena sama do sebe ani do skupiny, kterou obsahuje. Tažení je vypnuto, dokud má {{ui:Najít podle názvu}} nějaký text.

:::touch
Na řádek chvíli podržte prst a potom ho přetáhněte. Rychlé přejetí posune seznam.
:::

## Jiná kopie

Vyberte kopii a klikněte na {{ui:Vytvořit samostatnou kopii}} v {{ui:Informace o prvku}} (zobrazeno, je-li komponenta umístěna vícekrát). Tato kopie dostane vlastní definici pojmenovanou jako původní s novým číslem. Upravte ji bez zásahu do ostatních.

## Převod skupiny na komponentu

Vyberte skupinu a klikněte na {{ui:Vytvořit komponentu}} v {{ui:Informace o prvku}}. Dostane nový název, například Component#2, i když jste skupinu pojmenovali; název znovu napište do pole {{ui:Název}}.

## Rozložení

Vyberte skupinu nebo komponentu a klikněte na {{ui:Rozložit}} (na panelu nástrojů nebo v {{ui:Informace o prvku}}). Její obsah se stane volnou geometrií na svém místě a přichytí se k tomu, čeho se dotýká. Skupiny uvnitř ní zůstanou skupinami.

## Pevné těleso a objem

Při výběru skupiny nebo komponenty ukáže {{ui:Informace o prvku}} **Pevné těleso: Ano**, jsou-li její plochy uzavřené bez mezer (každá hrana je sdílena přesně dvěma plochami) a nejsou-li v ní vnořeny žádné skupiny. Pak ukáže také **objem**. Kvádr, stěna s oknem vyříznutým skrz ni a vytažený válec jsou pevná tělesa; kvádr s odstraněným horním víkem není.

## Když zmizí poslední kopie

Smazání poslední kopie komponenty ji odstraní také z panelu {{ui:Komponenty}}. {{key:Mod+Z}} ji vrátí zpět.

## Co je dobré vědět

- Kopie **skupiny** vytvořené pomocí {{ui:Přesunout}} v této verzi sdílejí svůj obsah, stejně jako kopie komponent: úprava jedné změní ostatní. Chcete-li jednu osamostatnit, klikněte na {{ui:Vytvořit komponentu}} a potom na {{ui:Vytvořit samostatnou kopii}}. Viz [Řešení potíží](topic:troubleshooting#editing-one-group-changed-another).
- Komponenty nevytvářejí otvory ve stěnách a nepřilepují se k plochám a neexistuje knihovna hotových komponent. Vytvoříte si vlastní, nebo je naimportujete.
- Importované soubory přijdou jako skupina. Soubory Collada si uvnitř ponechají vlastní skupiny a komponenty.
