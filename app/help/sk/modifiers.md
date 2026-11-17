---
title: Modifikátory na sieti, skupine alebo komponente
summary: Mierka, zrkadlenie, pole, vyhladenie, skosenie, rezanie a ohýbanie siete bez jej zmeny; opakujte alebo meňte mierku skupiny alebo komponentu rovnakým zásobníkom a keď ste pripravení, urobte to trvalým.
keywords: modifikátor, modifikátory, zásobník, skupina, komponent, mierka, zapiecť, upraviť zdroj, nedeštruktívny, zrkadlo, pole, radiálne pole, subdivízia, povrch subdivízie, vyhladiť, skosiť, spevniť, hrúbka, boolean, rezať, posunúť, šum, zvar, redukcia, zjednodušiť, mriežka, klietka, deformácia krivkou, ohnúť, zmrštenie na povrch, použiť
from: dd5ec1cb
---

**Modifikátor** mení to, čo sieť zobrazuje, bez zmeny samotnej siete. Zrkadlite jednu polovicu súčiastky a modelujte len ju; zaoblite kváder povrchom subdivízie a ďalej upravujte kváder. Modifikátory sú v **zásobníku** a pôsobia postupne zhora nadol. Čo vidíte, exportujete, vytlačíte a vykreslíte, je sieť so všetkými zapnutými modifikátormi.

## Pridanie modifikátora

1. Vyberte sieť. V pracovnom priestore Model je jej sekcia **Modifikátory** v {{ui:Informácie o entite}}; v pracovnom priestore Sieť je v paneli vpravo.
2. Vyberte jeden z {{ui:Pridať modifikátor…}}. Pridá sa na spodok zásobníka.
3. Zmeňte jeho nastavenia pod názvom. Dĺžky majú rovnaké hodnoty ako pole Hodnota, takže `600mm`, `2'6"` a `(6m)/4` fungujú všetky.

Každá zmena je jeden krok späť: {{key:Mod+Z}} ju vráti.

## Tlačidlá na každom modifikátore

- Začiarkavacie políčko ho zapne alebo vypne.
- Tlačidlo obrazovky ho zobrazí alebo skryje v pohľade (zostane v zásobníku).
- Tlačidlo kamery ho zobrazí alebo skryje vo vykreslených obrázkoch a videách, takže modifikátor môže byť len pre vykreslenia (alebo len pre pohľad).
- Šípky ho posúvajú nahor alebo nadol v zásobníku. Poradie záleží: zrkadlo a potom subdivízia dá hladký šev, subdivízia a potom zrkadlo nie.
- {{ui:Použiť}} urobí tvar súčasťou siete: modifikátory nad ním a tento sa aplikujú na samotnú sieť a opustia zásobník. Je to jeden krok späť.
- Kríž ho odstráni.

## Modifikátory

| Modifikátor | Čo robí |
| --- | --- |
| Mierka | Mení mierku okolo začiatku objektu, násobkom pre červenú, zelenú a modrú. Aj na skupine alebo komponente. |
| Zrkadlo | Pridá zrkadlovú kópiu cez červenú, zelenú alebo modrú os prechádzajúcu začiatkom siete a spojí polovice tam, kde sa stretávajú. |
| Pole | Kopíruje v rade (krok jej vlastnej veľkosti krát čísla, ktoré zadáte, plus pevný krok), okolo osi alebo pozdĺž krivky v modeli. Skupina alebo komponent prevezme rad. |
| Povrch subdivízie | Vyhladí sieť Catmull-Clarkovou subdivíziou. Ostré hrany zostanú zrazené. Vykreslenia môžu použiť viac úrovní než pohľad. |
| Skosenie | Zaokrúhli každú hranu ostrejšiu než zadaný uhol. |
| Spevniť | Dá povrchu hrúbku a uzavrie okraj. |
| Boolean | Vyreže, spojí alebo ponechá prekryv s iným objektom v modeli. Obe musia byť uzavreté telesá. |
| Posunúť | Posunie povrch dnu alebo von hladkým šumom. Rovnaké semeno dá vždy rovnaké hrče. |
| Zvar | Spojí vrcholy bližšie než zadaná vzdialenosť. |
| Redukcia | Ponechá podiel trojuholníkov a odstráni tie, ktoré najmenej menia tvar. |
| Vyhladiť | Uvoľní vrcholy smerom k susedom. |
| Mriežka | Ohne sieť klietkou: pohnite bodmi klietky a sieť ich nasleduje. |
| Deformácia krivkou | Ohne sieť pozdĺž krivky v modeli, pozdĺž červenej, zelenej alebo modrej. |
| Zmrštenie na povrch | Presunie každý vrchol na najbližší bod iného objektu. |

## Na skupine alebo komponente

Skupina alebo komponent si môže tiež držať recept, takže tienidlo lampy môže byť **Mierka** a **Pole** jedného tienidla, a zmena jedného čísla zmení lampu.

1. Vyberte skupinu alebo komponent. V {{ui:Informácie o entite}} jeho sekcia **Modifikátory** zobrazí zásobník (spočiatku prázdny).
2. Vyberte {{ui:Mierka}} alebo {{ui:Pole}} z {{ui:Pridať modifikátor…}}. Skupina sa stane komponentom, ktorý je **pôvodným objektom, umiestneným zásobníkom**. Pôvodný objekt zostane: upravte ho a každá kópia ho nasleduje hneď.
3. Mierka zoberie násobok pre červenú, zelenú a modrú (`1, 1, 2` zdvojnásobí výšku). Pole zoberie počet kópií, krok ako podiel doterajšej veľkosti výsledku a prídavný krok v dĺžkach.

Zásobník beží zhora nadol na vlastných osiach pôvodného objektu okolo jeho začiatku, takže poradie záleží: pole troch kópií vzdialených 3 m, potom mierka 2 na červenej, dá kópie 6 m od seba; najprv mierka a potom pole ich nechá 3 m od seba. Začiarkavacie políčko, šípky a kríž fungujú ako na sieti; tlačidlá pohľadu a kamery a {{ui:Použiť}} na jednom modifikátore nie, pretože zásobník na skupine je jedna vec.

- {{ui:Upraviť zdroj}} otvorí pôvodný objekt na mieste. Zmeny sa ukážu v každej kópii; zatvorenie vás vráti tam, kde ste boli.
- {{ui:Vypočítať modifikátory}} urobí výsledok obyčajnými hranami a plochami a odstráni zásobník, v jednom kroku späť. Kópie, ktoré sa prekrývajú, zostanú ako samostatná geometria: Vypočítať nie je zjednotenie.
- Kópie komponentu zdieľajú recept; {{ui:Urobiť jedinečný}} ho oddelí (pôvodný zostane zdieľaný).
- Zásobník sa uloží do súboru, prenáša sa kopírovaním a vložením a krokom späť, a Vyčistiť nepoužité ponechá pôvodný objekt. Program, ktorý modifikátory nepozná, stále zobrazí kópie.
- Až do Vypočítať sa výsledok nedá vstúpiť, rozložiť, zmeniť veľkosť ani natiahnuť: pri ďalšej zmene by sa obnovil. Každý z týchto úkonov to hlási.
- Limity sú 32 modifikátorov a 1 000 kópií. Komponent navrhnutý na natiahnutie a zásobník zatiaľ nemôžu zdieľať definíciu.

## Povrch subdivízie

Subdivízia vyhladí sieť Catmull-Clarkom: každá plocha sa zmení na štvoruholníkové plochy a každá úroveň ich má štyrikrát toľko. Kváder s dvoma alebo tromi úrovňami už pôsobí ako zaoblený tvar, a ďalej upravujete kváder.

- **Úrovne v pohľade** určujú, aké hladké je.
- **Úrovne vo vykresleniach** určujú, aké hladké sú vykreslené obrázky a videá; vykreslenia môžu použiť viac úrovní než pohľad.
- **Vykreslenia na skutočne hladkom povrchu** dajú body vykreslenej siete na limitný povrch, ku ktorému úrovne smerujú, takže aj dve úrovne sa vykreslia tak hladko ako mnohé.
- **Ryhy** držia hrany ostré: v pracovnom priestore Sieť vyberte hrany a použite {{ui:Ryha}} (1 zostáva ostrá, 0.5 mierne zaoblí, 0 je hladká). Pozri [Úprava siete](topic:mesh-edit).
- **Znížte úroveň pohľadu pri veľkej sieti:** keď by požadované úrovne dali viac plôch, než zvláda pohľad tohto počítača, pohľad zobrazí nižšiu úroveň a povie, ktorú. {{ui:Použiť}} vždy použije všetky úrovne. Koľko plôch, určuje trieda vášho počítača v {{ui:Nastavenia}} › Vykresľovanie › Váš počítač.
- Otvorené okraje si zachovajú rohy a zostanú na priamke svojich hrán.

## Ohnutie mriežkovou klietkou

1. Pridajte modifikátor {{ui:Mriežka}} a stlačte {{ui:Pridať mriežkovú klietku okolo siete}}. Okolo siete sa zjaví klietka 3 × 3 × 3 bodov, kreslená drôtmi.
2. Otvorte klietku v pracovnom priestore Sieť (dvojklikom) a pohnite jej bodmi. Sieť ich plynulo nasleduje.

:::tip
Klietka je sieť ako každá iná: skryte ju jej značkou, keď skončíte.
:::

## Veľké siete

Malé zásobníky sa spočítajú hneď. Veľký sa počíta na pozadí na každom jadre vášho počítača: pohľad ukazuje posledný výsledok, kým nebude hotový nový. Booleany načítajú modelár telies pri prvom použití; pohľad to na chvíľu oznámi.

## Čo modifikátory ešte nerobia

- Váhy na vrchol (poklesová maľba na sieti) pre Posunúť, Vyhladiť a Zmrštenie na povrch.
- Modifikátory okrem Mierky a lineárneho Poľa na geometrii tlač/ťah (skupiny a komponenty): najprv ju premeňte na sieť ({{ui:Previesť na sieť}}). Zrkadlo, okrúhle alebo krivkové Pole, Ohnutie a Zúženie na skupinách prídu neskôr.
