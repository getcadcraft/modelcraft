---
title: Začíname s ModelCraft
summary: Na čo ModelCraft slúži, ako ho otvoriť a Váš prvý kváder od obdĺžnika po uložený model.
keywords: začíname, prvý model, začať, návod, úvod, kváder, hmotová štúdia, 3d, tlač/ťah, rýchly štart, sprevádzaný, sprievodca, začiatočník, nováčik v 3d
from: d47ad719
---

ModelCraft je 3D modelár pre skorý návrh: hmotové štúdie, rozloženie miestností, rýchle tvary budov a tiene, ktoré vrhajú. Kreslíte ploché tvary, vytláčate ich do telies a pokračujete v práci kreslením na ich plochách. Beží vo Vašom webovom prehliadači a Vaše modely zostávajú vo Vašom počítači.

Ak ste používali SketchUp, väčšina toho, čo viete, sa prenáša: rovnaké písmená nástrojov, tlač/ťah, pole hodnôt pre presné veľkosti, skupiny a komponenty. [Ak prichádzate z iných modelárov](topic:coming-from) uvádza, čo je iné.

## Otvorenie ModelCraft

1. Otvorte ModelCraft v aktuálnej verzii Chrome, Edge, Firefox alebo Safari. Pozrite [Prehliadače a počítače](common:browsers).
2. Počkajte, kým sa objaví 3D pohľad: svetlá (alebo tmavá) plocha v strede s kartou s názvom „Začnite modelovať“.

Obrazovka má hore panel nástrojov, vľavo {{ui:Strom}} a {{ui:Komponenty}}, v strede 3D pohľad, vpravo {{ui:Informácie o entite}}, {{ui:Štýl}} a {{ui:Scény}} a dole stavový riadok s poľom hodnôt a jednotkami. [Obrazovka ModelCraft](topic:workspace) vysvetľuje každú časť.

:::note
ModelCraft potrebuje WebGL, funkciu 3D kreslenia Vášho prehliadača. Ak stred obrazovky zostáva prázdny a nástroje nič nerobia, pozrite [Riešenie problémov](topic:troubleshooting#the-3d-view-is-blank).
:::

## Najprv skontrolujte jednotky

Pozrite sa do pravého dolného rohu. Výber jednotiek ukazuje, v čom sa merajú dĺžky.

- Nový model začína v **stopách a palcoch**, keď je Váš prehliadač nastavený na Spojené štáty (aj Libériu a Mjanmarsko), a v **milimetroch** všade inde.
- Zmeníte to výberom inej jednotky: {{ui:ft a in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} alebo {{ui:mm}}. Samotný model nemení veľkosť; mení sa len spôsob zobrazenia dĺžok a čítania holých čísel.

Číslo, ktoré napíšete bez jednotky, používa jednotku modelu. V modeli so stopami a palcami je holé číslo v **palcoch**, takže `120` znamená 10 stôp.

## Nechajte ModelCraft previesť Vás prvým modelom

Ste v 3D nováčik? Na karte {{ui:Začnite modelovať}} kliknite na {{ui:Sprevádzaný prvý model}} (nájdete ho aj v {{ui:Pohľady}}). Malá karta Vás prevedie štyrmi krokmi, od plochého obdĺžnika po model pripravený pre 3D tlačiareň:

1. Nakreslite obdĺžnik na zem.
2. Vytiahnite ho nahor na kváder.
3. Urobte z kvádra jeden objekt (skupinu).
4. Skontrolujte ho pre 3D tlač a stiahnite súbor 3MF alebo STL.

Karta sleduje model, nie tlačidlá: pokračuje, keď je krok hotový, nech ste ho urobili akokoľvek, a pri vrátení späť sa vráti o krok. {{ui:Vybrať nástroj}} vyberie nástroj za Vás. Kedykoľvek ju zavriete tlačidlom {{ui:×}}.

## Nakreslite svoj prvý kváder

1. Stlačte {{key:R}} pre nástroj {{ui:Obdĺžnik}}, alebo kliknite na {{ui:Obdĺžnik}} v skupine {{ui:Kreslenie}} na paneli nástrojov.
2. Raz kliknite na zem blízko stredu pohľadu. To je prvý roh.
3. Pohnite ukazovateľom preč. Obdĺžnik ho nasleduje a pole hodnôt dole (označené {{ui:Rozmery}}) ukazuje jeho veľkosť.
4. Napíšte veľkosť a stlačte {{key:Enter}}: napríklad `4m,3m`, alebo `16',12'` v stopách a palcoch. Nemusíte najprv klikať do poľa hodnôt; napísané číslo sa tam odošle samo.

   Dostanete plochý obdĺžnik na zemi. Je to **plocha**: povrch s hranami okolo.

5. Stlačte {{key:P}} pre {{ui:Tlač/ťah}}.
6. Kliknite na obdĺžnik, pohnite ukazovateľom nahor a kliknite znova. Alebo kliknite na obdĺžnik, napíšte výšku, napríklad `3m` alebo `10'`, a stlačte {{key:Enter}}.

   Obdĺžnik sa stane kvádrom s vrchom, spodkom a štyrmi stranami.

7. Stlačením {{key:Space}} sa vrátite k nástroju {{ui:Vybrať}}, potom kliknite na vrch kvádra. {{ui:Informácie o entite}} vpravo ukazuje jeho plochu.

:::tip
Namiesto dvoch kliknutí môžete aj ťahať: stlačte na prvom rohu, ťahajte a pustite na druhom. Obe možnosti fungujú pri každom kresliacom nástroji.
:::

## Obzrite sa

- **Otáčanie:** ťahajte stredným tlačidlom myši (kolieskom), alebo stlačte {{key:O}} a ťahajte ľavým tlačidlom.
- **Posun:** ťahajte pravým tlačidlom, alebo stredným tlačidlom pri podržanom {{key:Shift}}.
- **Zväčšenie:** otáčajte kolieskom. Priblíži smerom k miestu pod ukazovateľom.
- **Vidieť všetko:** stlačte {{key:Shift+Z}} alebo kliknite na {{ui:Rozsah}}.

Na touchpade alebo dotykovej obrazovke sú gestá iné. Pozrite [Otáčanie, posun a zväčšenie](topic:orbit-pan-zoom).

## Späť

Stlačením {{key:Mod+Z}} vrátite krok späť a {{key:Mod+Y}} ho zopakujete, alebo použite {{ui:Späť}} a {{ui:Znova}} na paneli nástrojov. ModelCraft si pamätá posledných 200 krokov, kým je model otvorený. História sa do súboru neukladá.

## Uloženie modelu

1. Kliknite na {{ui:Uložiť}} v skupine {{ui:Súbor}} alebo stlačte {{key:Mod+S}}.
2. Prehliadač stiahne súbor pomenovaný podľa Vášho modelu, napríklad `Untitled.modelcraft`. Stavový riadok hlási, kam išiel: „Súbor Untitled.modelcraft bol uložený do vašich stiahnutých súborov.“

**Uloženie je stiahnutie.** Každé uloženie vytvorí novú kópiu v priečinku so stiahnutými súbormi; neprepíše súbor, ktorý ste otvorili. Ak chcete mať projektový priečinok uprataný, súbor tam presuňte alebo premenujte sami. [Otvorenie, uloženie, import a export](topic:files) vysvetľuje prečo a čo ďalšie môžete urobiť.

:::warning
ModelCraft sám neukladá. Ak zavriete kartu s neuloženými zmenami, prehliadač sa najprv opýta („Opustiť stránku?“). Vyberte, že zostanete, a uložte.
:::

## Pomoc

Stlačením {{key:F1}} alebo kliknutím na {{ui:Pomocník}} v paneli aplikácie otvoríte tohto pomocníka vedľa modelu. Funguje bez pripojenia. Opätovným stlačením {{key:F1}} alebo {{key:Esc}} v pomocníkovi ho zavriete. Pozrite [Používanie tohto pomocníka](common:help).

## Kam ďalej

- [Kreslenie plôch úsečkami, obdĺžnikmi a kružnicami](topic:draw-faces)
- [Vytláčanie plôch do telies](topic:push-pull)
- [Zadávanie presných veľkostí v poli hodnôt](topic:value-box)
- [Každý kláves a akcia myši](topic:keyboard)
