---
title: Uloženie pohľadov ako scén
summary: Uložte kameru a štýl ako scénu, aktualizujte ju a premenujte a prechádzajte alebo prehrávajte scény pri prezentácii návrhu.
keywords: scéna, pohľad, uložený pohľad, kamera, prezentácia, animácia, prehrať, prezentácia snímok, page up, page down, karty, prechádzka
from: 38680d6e
---

**Scéna** si zapamätá pozíciu kamery, štýl a to, čo je skryté: odkiaľ sa pozeráte, perspektívu alebo rovnobežné premietanie, štýl plôch, hrany, nastavenia slnka, skryté skupiny, vypnuté [značky](topic:tags) a rez. Scény sa ukladajú do súboru `.modelcraft`.

## Pridanie scény

1. Nastavte pohľad: otáčajte, priblížte, vyberte štýl, nastavte slnko.
2. V paneli {{ui:Scenes}} vpravo kliknite na {{ui:Add scene}}.

   Scéna sa objaví v zozname ako „Scéna 1“, „Scéna 2“ a tak ďalej, a ako karta nad hornou časťou 3D pohľadu. Stavový riadok hovorí: "Scéna 1 bola uložená: táto kamera, štýl a to, čo je skryté."

## Prechod na scénu

- Kliknite na jej kartu nad 3D pohľadom alebo na jej názov v zozname {{ui:Scenes}}.
- Alebo stlačte {{key:PageDown}} pre ďalšiu scénu a {{key:PageUp}} pre predchádzajúcu. {{ui:Next}} a {{ui:Previous}} pod zoznamom robia to isté.

Kamera sa k scéne presunie plynulo za o niečo viac ako pol sekundy. Ak je váš počítač nastavený na zníženie pohybu, skočí tam okamžite.

## Zmena, premenovanie alebo zmazanie scény

Každá scéna v zozname má za názvom tri malé tlačidlá:

- **Aktualizovať** (kruhové šípky): uloží aktuálnu kameru, štýl a to, čo je skryté, do tejto scény. "Scéna 2 bola aktualizovaná."
- **Premenovať** (ceruzka): otvorí dialóg "Premenovať scénu". Zadajte nový názov a kliknite na {{ui:Save}}.
- **Zmazať** (kôš): odstráni scénu. "Scéna 2 bola zmazaná. Ctrl+Z ju vráti späť."

Pridanie, aktualizácia, premenovanie a zmazanie scén sú kroky, ktoré sa dajú vrátiť späť, rovnako ako zmeny modelu.

## Uzamknutie kamery scény

Keď stále vykresľujete ten istý pohľad, ako sa návrh mení, uzamknite kameru tej scény, aby sa pohľad nikdy nepohol omylom.

1. V zozname {{ui:Scenes}} kliknite na tlačidlo **zámok** (otvorený visiaci zámok) za názvom scény. Zavrie sa a karta scény nad 3D pohľadom ukáže malý zámok. Stavový riadok hovorí: "Scéna 2: kamera uzamknutá."
2. Prejdite na scénu, kedykoľvek chcete vykresliť: kamera sa vráti presne na uložený pohľad, takže obrázky z neho sa zhodujú s predchádzajúcimi.

Kým je kamera uzamknutá, **Aktualizovať** stále uloží štýl a skryté prvky do scény, ale kamera zostane, kde bola, aj keď ste sa medzitým pohli inde. Kliknutím na zámok ho odomknete; Aktualizovať potom uloží aktuálny pohľad znova. Uzamknutie a odomknutie sú kroky, ktoré sa dajú vrátiť späť, a zámok sa ukladá do súboru `.modelcraft`.

## Prezentácia

1. Pridajte dve alebo viac scén.
2. Kliknite na {{ui:Play}} pod zoznamom. ModelCraft prejde na ďalšiu scénu každých niekoľko sekúnd a po poslednej sa vráti na prvú.
3. Kliknite na {{ui:Stop}} (to isté tlačidlo) alebo stlačte {{key:Esc}}, aby ste zastavili.

Pre štúdiu slnka pridajte jednu scénu za hodinu, pri ktorej sa mení iba {{ui:Time}}, a potom ich prehrajte. Pozri [Štýly a slnečné tiene](topic:styles-shadows#a-sun-study).

Ak chcete prezentovať bez lišt, stlačte {{key:Ctrl+Shift+F}} dvakrát: najprv celá obrazovka, potom celá obrazovka so skrytými lištami. Karty scén zostanú nad pohľadom.

## Čo scéna zobrazuje

Scéna si zapamätá, čo bolo skryté, keď ste ju uložili: skupiny a komponenty, ktoré ste [skryli](topic:hide-isolate), [značky](topic:tags), ktoré ste vypli, a to, ktoré [rezné roviny](topic:sections) rezú. Prechod na scénu ich znovu skryje alebo zobrazí. Takže jedna scéna môže ukazovať celý dom, ďalšia dom s vypnutou značkou strechy a ďalšia rez domom.

Skryté voľné plochy a hrany nie sú súčasťou scén. Prechod na scénu nevytvorí krok späť. Scény uložené predchádzajúcou verziou ModelCraft ponechajú skryté prvky tak, ako sú; kliknite na Aktualizovať, aby sa to do nich uložilo.

## Export animácie

{{ui:Export animation}} pod zoznamom prehráva scény od prvej po poslednú, plynulo presúva kameru medzi nimi a uloží film ako video **WebM** (dve sekundy pohybu a krátka pauza pri každej scéne). Zaznamenáva pohľad tak, ako ho vidíte, vo svojej veľkosti na obrazovke, v [pohľade prezentácie](topic:styles-shadows#presentation-view) (bez osí, vodiacich čiar ani výberu). Stlačte {{key:Esc}} alebo kliknite na tlačidlo znova, aby ste zastavili bez uloženia. WebM sa prehráva v prehliadačoch a vo VLC; editory videa ho dokážu previesť.

Pre vykreslenú prechádzku (obloha, slnko, tiene, materiály) vo veľkosti, ktorú zvolíte, použite namiesto toho {{ui:Render video…}}: bez kľúčov animácie vezme scény v poradí ako dráhu kamery. Pozri [Animácia kamery a objektov](topic:animation).

## Čo treba vedieť

- Zmena štýlu alebo pohyb kamery po prechode na scénu nezmení scénu, kým nekliknete na Aktualizovať.
- Scény sa neexportujú do formátov Collada, OBJ, glTF, STL ani IFC.
