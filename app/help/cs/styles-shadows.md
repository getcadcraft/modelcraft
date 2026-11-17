---
title: Styly a sluneční stíny
summary: Zobrazte model stínovaně, jako skryté čáry, drátově nebo průhledně a zkoumejte stíny, které vrhá, v libovolném datu, čase a místě.
keywords: prezentační pohled, čistý pohled, skrýt vodítka, skrýt osy, styl, stínovaný, skrytá čára, drátový, rentgen, hrany, stíny, slunce, studie slunce, solární, datum, čas, zeměpisná šířka, zeměpisná délka, časové pásmo, sever
from: 09c95329
---

Panel {{ui:Styl}} vpravo mění, jak se model vykresluje. Nic v něm model samotný nemění a nepatří do funkce zpět. Každá [scéna](topic:scenes) si pamatuje svůj vlastní styl a soubor si pamatuje styl, který jste měli při uložení.

## Plochy

Vyberte jeden v seznamu {{ui:Plochy}}:

| Styl | Vzhled |
|---|---|
| {{ui:Stínovaný}} | Plné plochy, jemně osvětlené. Plochy viděné zezadu jsou modrošedé. Zobrazují se importované barvy. |
| {{ui:Skrytá čára}} | Plochy v barvě pozadí s hranami v tmavé barvě: čistá čárová kresba bez skrytých čar. Bíle na {{ui:Papír}}, tmavě na {{ui:Model}}. |
| {{ui:Drátový}} | Jen hrany. Plochy se nekreslí, ale při kliknutí a přichycení se počítají: skrz ně nelze vybírat. |
| {{ui:Rentgen}} | Průhledné plochy, abyste viděli, co je za nimi nebo uvnitř. Stejně jako u drátového zobrazení se kliknutí a přichycení zastaví na nejbližší ploše. |

{{ui:Zobrazit hrany}} zapíná nebo vypíná hrany ve všech stylech kromě {{ui:Drátový}}. Když je vypnuto, {{ui:Skrytá čára}} téměř nic nezobrazí, protože její plochy odpovídají pozadí. Měkké hrany, například boky vytažené kružnice, se nikdy nekreslí.

## Zapnutí slunečních stínů

1. Zaškrtněte {{ui:Slunční stíny}}. Nastavení slunce pod ním se aktivuje a model vrhá stíny sám na sebe i na zem.
2. Nastavte místo:
   - {{ui:Zeměpisná šířka}}: sever je kladný, jih záporný (New York je přibližně 40.7, Sydney přibližně -33.9).
   - {{ui:Zeměpisná délka}}: východ je kladný, západ záporný (New York přibližně -74.0).
   - {{ui:Posun od UTC}}: posun místa od UTC v hodinách, například `-5` pro New York v zimě. ModelCraft nepoužívá letní čas; pro New York v létě použijte `-4`.
3. Nastavte {{ui:Datum}} (měsíc a den) a posuňte posuvník {{ui:Čas}}. Čas se posouvá po 15minutových krocích a zobrazuje se vedle posuvníku, například "3:00 pm".

Pod nastavením je řádek, který říká, kde je slunce, například "Slunce 52° nad obzorem, 250° od severu. Sever je zelená osa." V noci se zobrazí "V tuto dobu je slunce pod obzorem."

Nový model začíná se sluncem 21. června v 3:00 pm, na zeměpisné šířce 40, délce -105 a s posunem od UTC -7.

## Nasměrování modelu na sever

Sever v ModelCraft je vždy **zelená osa**. Chcete-li studovat skutečné místo, otočte model tak, aby jeho severní strana směřovala podél zelené: vyberte vše ({{key:Mod+A}}), stiskněte {{key:Q}}, klikněte na střed na zemi a otočte ho o úhel místa od severu (viz [Otočení a měřítko](topic:rotate-scale)).

## Studie slunce

1. Nastavte místo a datum.
2. Přidejte scénu ({{ui:Přidat scénu}} v {{ui:Scény}}).
3. Posuňte posuvník času a pak přidejte další scénu. Opakujte pro každou hodinu, kterou chcete.
4. Klikněte na {{ui:Přehrát}}, čímž je projdete. Viz [Uložení pohledů jako scény](topic:scenes).

## Co je dobré vědět

- Stíny mohou na velmi velkém modelu vypadat zubatě, protože jedna mapa stínů pokrývá celý model.
- Stíny se v {{ui:Drátový}} nekreslí.
- Poloha slunce se řídí výpočtem NOAA a je přesná na zlomky stupně, což stačí pro studie hmot. Atmosférická refrakce se zanedbává, takže velmi nízké úhly slunce poblíž východu a západu mohou být mírně nepřesné.

## Prezentační pohled

{{ui:Pohledy}} › {{ui:Prezentační pohled}} (nebo {{key:Shift+P}}) zobrazí jen model: osy, vodicí čáry a vodicí body, obrysy řezových rovin (řez zůstává), značky světel, rámeček otevřené skupiny, značky přichycení a tipy a zvýraznění výběru zmizí. Použijte to pro jasné prohlédnutí modelu nebo před snímkem obrazovky. Nástroje dál fungují a přichycují se; jen značky nevidíte. Stiskněte {{key:Shift+P}} znovu, čímž se vrátí. Kóty zůstávají, protože jsou součástí výkresu. Když upravujete uvnitř skupiny, zbytek modelu se již neztlumí: zobrazuje se tak, jak je, včetně textur.
