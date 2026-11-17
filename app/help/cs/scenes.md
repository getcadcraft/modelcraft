---
title: Uložení pohledů jako scén
summary: Uložte kameru a styl jako scénu, aktualizujte ji a přejmenujte a procházejte scény krok za krokem nebo je přehrávejte při prezentaci návrhu.
keywords: scéna, pohled, uložený pohled, kamera, prezentace, animace, přehrát, prezentace snímků, page up, page down, karty, procházka
from: 38680d6e
---

**Scéna** si zapamatuje pozici kamery, styl a to, co je skryté: odkud se díváte, perspektivu nebo rovnoběžné promítání, styl ploch, hrany, nastavení slunce, skryté skupiny, vypnuté značky a řez. Scény se ukládají do souboru `.modelcraft`.

## Přidání scény

1. Nastavte pohled: otočte, přiblížte, vyberte styl, nastavte slunce.
2. V panelu {{ui:Scény}} vpravo klikněte na {{ui:Přidat scénu}}.

   Scéna se objeví v seznamu, pojmenovaná "Scéna 1", "Scéna 2" a tak dále, a jako karta nad 3D pohledem. Stavový řádek říká: "Scéna 1 uložena: tato kamera, styl a skryté prvky."

## Přechod na scénu

- Klikněte na její kartu nad 3D pohledem, nebo na její název v seznamu {{ui:Scény}}.
- Nebo stiskněte {{key:PageDown}} pro další scénu a {{key:PageUp}} pro předchozí. {{ui:Další}} a {{ui:Předchozí}} pod seznamem dělají totéž.

Kamera na scénu přejede za něco málo přes půl sekundy. Pokud je počítač nastaven na omezení pohybu, přeskočí tam okamžitě.

## Změna, přejmenování nebo smazání scény

Každá scéna v seznamu má za názvem tři malá tlačítka:

- **Aktualizovat** (kruhové šipky): uloží aktuální kameru, styl a skryté prvky do dané scény. "Scéna 2 aktualizována."
- **Přejmenovat** (tužka): otevře dialog "Přejmenovat scénu". Zadejte nový název a klikněte na {{ui:Uložit}}.
- **Smazat** (koš): odstraní scénu. "Scéna 2 smazána. Ctrl+Z ji obnoví."

Přidání, aktualizace, přejmenování a smazání scén jsou kroky zpět, stejně jako změny modelu.

## Uzamčení kamery scény

Když opakovaně vykreslujete stejný pohled, jak se návrh mění, zamkněte kameru té scény, aby se pohled nikdy nepohnul omylem.

1. V seznamu {{ui:Scény}} klikněte na tlačítko **zámek** (otevřený visací zámek) za názvem scény. Zavře se a karta scény nad 3D pohledem ukáže malý zámek. Stavový řádek říká: "Scéna 2: kamera uzamčena."
2. Přejděte na scénu, kdykoli chcete vykreslit: kamera se vrátí přesně na uložený pohled, takže obrázky z něj navazují na dřívější.

Když je kamera uzamčena, **Aktualizovat** stále uloží styl a skryté prvky do scény, ale kamera zůstane tam, kde byla, i když jste se pohledem otočili jinam. Klikněte znovu na zámek pro odemčení; Aktualizovat pak opět uloží aktuální pohled. Zamykání a odemykání jsou kroky zpět a zámek se ukládá do souboru `.modelcraft`.

## Prezentace

1. Přidejte dvě nebo více scén.
2. Klikněte na {{ui:Přehrát}} pod seznamem. ModelCraft přejde na další scénu každých několik sekund a po poslední se vrátí na první.
3. Klikněte na {{ui:Zastavit}} (stejné tlačítko) nebo stiskněte {{key:Esc}} pro zastavení.

Pro studii slunce přidejte jednu scénu za každou hodinu, měňte jen {{ui:Čas}} a pak je přehrajte. Viz [Styly a stíny slunce](topic:styles-shadows#a-sun-study).

Chcete-li prezentovat bez lišt, stiskněte {{key:Ctrl+Shift+F}} dvakrát: nejprve celá obrazovka, pak celá obrazovka se skrytými lištami. Karty scén zůstanou nad pohledem.

## Co scéna zobrazuje

Scéna si pamatuje, co bylo skryto, když jste ji uložili: skupiny a komponenty, které jste [skryli](topic:hide-isolate), [značky](topic:tags), které jste vypnuli, a která [řezná rovina](topic:sections) řeže. Přechod na scénu je znovu skryje a zobrazí. Jedna scéna tak může ukazovat celý dům, další dům bez značky střechy a další řez domem.

Skryté volné plochy a hrany nejsou součástí scén. Přechod na scénu nevytvoří krok zpět. Scény uložené starším sestavením ModelCraftu ponechají, co je skryto, tak jak je; klikněte na Aktualizovat, abyste to do nich uložili.

## Export animace

{{ui:Exportovat animaci}} pod seznamem přehraje scény od první po poslední, plynule přesouvá kameru mezi nimi a uloží film jako video **WebM** (dva sekundy přesunu a krátká pauza na scénu). Zaznamenává pohled tak, jak jej vidíte, ve velikosti na obrazovce, v [zobrazení pro prezentaci](topic:styles-shadows#presentation-view) (bez os, vodítek a výběru). Stiskněte {{key:Esc}} nebo klikněte znovu na tlačítko, chcete-li zastavit bez uložení. WebM se přehraje v prohlížečích a ve VLC; střihové programy jej umějí převést.

Pro vykreslenou procházku (oblohu, slunce, stíny, materiály) ve velikosti, kterou zvolíte, použijte {{ui:Vykreslit video…}}: bez klíčů animace vezme scény v pořadí jako dráhu kamery. Viz [Animace kamery a objektů](topic:animation).

## Věci k vědomí

- Změna stylu nebo pohyb kamery po přechodu na scénu scénu nezmění, dokud neklikněte na Aktualizovat.
- Scény se nevyváží do formátů Collada, OBJ, glTF, STL ani IFC.
