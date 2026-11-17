---
title: Import modelu SKP
summary: Naimportujte soubor .skp se skupinami, komponentami, barvami, texturami, štítky a měkkými hranami, zjistěte, co přišlo a co ne, a pokračujte v modelování.
keywords: skp, import, otevřít skp, komponenty, skupiny, štítky, vrstvy, materiály, barvy, textury, skryté, měkké hrany, 3d warehouse, migrace, přechod
from: 325d3c81
---

ModelCraft čte soubory SketchUpu (`.skp`) vlastní čtečkou přímo na stránce. Nic se nenahrává a funguje offline, kdykoli funguje ModelCraft. Soubory od SketchUpu 3 až po verzi 2026 byly otestovány.

## Import souboru

1. Klikněte na {{ui:Import}} ve skupině {{ui:Soubor}} (nebo přetáhněte soubor `.skp` do 3D pohledu).
2. Vyberte soubor.

   Stavový řádek hlásí "Čtení souboru house.skp…", dokud čte, a potom, co přišlo, například "Importován soubor house.skp (SketchUp 25.0.575): 1240 ploch, 6 komponent, ve skupině."

Celý model přijde jako jedna skupina pojmenovaná podle souboru, je vybrána a pohled se na ni přiblíží. Jedno {{key:Mod+Z}} ji všechnu zase odstraní, včetně štítků.

:::tip
Rozložte importní skupinu ({{ui:Informace o prvku}} › {{ui:Rozložit}}), chcete-li, aby její obsah ležel volně v modelu, a ne v jedné skupině.
:::

## Co přijde

- **Plochy** s jejich otvory a **hrany**, které nejsou součástí plochy.
- **Skupiny** přijdou jako skupiny a **komponenty** jako komponenty: každá kopie komponenty je umístěním jedné definice, takže úprava jedné kopie změní všechny, jako v SketchUpu. Přijdou i názvy.
- **Barvy.** Vlastní materiál plochy jí dá barvu. Materiál nanesený na skupinu nebo komponentu se stane barvou tohoto umístění, takže plochy uvnitř, které nemají vlastní barvu, ji převezmou, jako v SketchUpu. Komponenta obarvená červeně na jednom místě a modře na jiném zůstane jednou komponentou.
- **Textury.** Plocha s texturovaným materiálem přijde s texturou, položenou na plochu tak, jak je v souboru, a styl {{ui:Stínovaný}} ji ukáže. Obrázek se při uložení uchová v souboru ModelCraftu a ukáže jej také [vykreslený obrázek](topic:render). Texturovaný materiál nanesený na celou skupinu nebo komponentu dá dané kopii pouze barvu materiálu.
- **Štítky.** Skupina nebo komponenta na štítku SketchUpu dostane štítek ModelCraftu se stejným názvem, uvedený v {{ui:Štítky}}, zobrazený nebo skrytý tak, jak byl v SketchUpu. Pokud už váš model má štítek se stejným názvem, použije se ten.
- **Skryté věci přijdou skryté:** plochy, hrany, skupiny a komponenty a plochy a hrany na skrytém štítku. Vidíte, co ukazoval SketchUp, a nic se neztratí: {{ui:Úpravy}} › {{ui:Další}} › {{ui:Zobrazit vše}} je ukáže. Viz [Skrytí, izolace a zobrazení](topic:hide-isolate).
- **Měkké a hladké hrany** zůstanou měkké, takže zakřivené plochy vypadají stále hladce.
- **Velikosti** jsou správné v jakékoli jednotce: soubory SketchUpu jsou uvnitř v palcích a ModelCraft je převádí.

## Co nepřijde

Stavový řádek říká, co bylo vynecháno, s počty.

- **Některé textury** si ponechají jen barvu svého materiálu: textura chybějící v souboru, obrázek ve formátu, který prohlížeče nezobrazí (například soubor Photoshopu), nebo textura bez velikosti. Plochy s promítnutou texturou přijdou s texturou umístěnou přibližně.
- **Štítky na volných plochách a hranách.** ModelCraft označuje štítky pouze skupiny a komponenty, takže plocha nebo hrana s vlastním štítkem přijde bez štítku a stavový řádek je spočítá. Učiňte takové plochy skupinou ({{key:Shift+G}}) a dejte skupině štítek.
- **Obrázky** umístěné v modelu, text, kóty, vodítka, řezné roviny, scény a styly.

## Problémy

- "Toto není soubor SketchUpu." nebo "Tento soubor SketchUpu je poškozen: …": soubor je useknutý nebo je to něco jiného s příponou `.skp`. Uložte jej znovu z SketchUpu, nebo si vyžádejte novou kopii.
- Soubor z verze SketchUpu novější, než ModelCraft zná, je odmítnut a je uvedena zjištěná verze.
- Model, který je celý tvořen obrázky, textem nebo kótami, hlásí, že nemá co zobrazit.

## Převod modelu zpět

ModelCraft neumí ukládat soubory `.skp`. Exportujte formát Collada ({{ui:Export}} › `.dae`) a naimportujte jej v SketchUpu: skupiny, komponenty a barvy přejdou; textury přejdou jako barva svého materiálu. Viz [Export modelu](topic:export-model).
