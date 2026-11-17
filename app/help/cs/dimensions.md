---
title: Kótování a změna velikosti nakresleného
summary: Umísťujte kóty mezi rohy, na oblouky a kružnice nebo mezi dvě hrany; zadejte novou délku a změníte velikost modelu. Délku hrany nebo šířku, hloubku a výšku skupiny přepište v Informacích o prvku.
keywords: kóta, kóty, změna velikosti, změnit velikost, upravit velikost, délka, šířka, hloubka, výška, natažení, řídicí kóta, anotace, měření, dodatečně, poloměr, průměr, úhel, úhlová, oblouk, kružnice, R, Ø
from: a1f815ec
---

Velikosti v ModelCraftu nejsou po nakreslení pevné. Kóta ukazuje délku na modelu a když do ní napíšete novou délku, model se podle ní přizpůsobí. Délku hrany nebo šířku, hloubku a výšku skupiny můžete přepsat také v {{ui:Entity info}}.

## Umístění kóty

1. Stiskněte {{key:D}}, nebo klikněte na {{ui:Dimension}} na panelu nástrojů.
2. Klikněte na roh, od kterého měříte. Přichytává se k rohům, středům a hranám, jako při kreslení.
3. Klikněte na druhý roh.

   Nebo klikněte jednou na **hranu** (nápověda říká „Na hraně“) a okótujete celou hranu jedním kliknutím.
4. Přesuňte kurzor tam, kam má kótovací čára patřit, a klikněte. Můžete také napsat odsazení, například `0.5m`, a stisknout {{key:Enter}}.

   Kótovací čára zůstane vodorovná u vodorovné hrany, pokud se na ni nedíváte z boku. U svislé hrany zůstane ve svislé rovině, která je k vám nejvíc obrácena.

Stavový řádek píše „Kóta 4 m.“ Kóty ukazují svou délku v jednotce modelu a aktualizují se, když změníte jednotku ve výběru jednotek.

## Poloměr, průměr a úhel

Stejný nástroj {{ui:Dimension}} kótuje i zaoblení a úhly:

- **Oblouk:** klikněte na oblouk. Nápověda říká {{ui:Radius}}. Přesuňte kurzor tam, kam má text patřit, a klikněte: kóta ukáže **R 1.5 m**.
- **Kružnice:** klikněte na kružnici. Dostanete **průměr** (**Ø 3 m**) s čárou přes kružnici procházející jejím středem. Mnohoúhelníky fungují stejně, s rohy na kružnici.
- **Úhel mezi dvěma hranami:** klikněte na jednu hranu, pak na druhou hranu, která se s ní stýká v rohu (když jste nad ní, nápověda říká {{ui:Angle between the edges}}). Pak přesuňte kurzor do úhlu, který chcete, a klikněte. Uvnitř rohu dostanete úhel mezi hranami; přesunete-li na jednu stranu, dostanete vedlejší úhel (například 150° místo 30°). Jak daleko od rohu kliknete, určuje, kam oblouk půjde; nebo zadejte tuto vzdálenost.

Chcete-li poloměr přepnout na průměr nebo zpět, vyberte kótu a zvolte v {{ui:Show as}} v {{ui:Entity info}}.

**Změna velikosti těmito kótami:** napište nový poloměr nebo průměr hned po umístění, nebo ji vyberte později a napište. Oblouk nebo kružnice si zachová střed a změní velikost; plocha, kterou ohraničují (kotouč, konec drážky), se změní s ní. Dvě věci jen měří:

- **Kóta úhlu** nikdy model nemění. Chcete-li úhel změnit, otočte hrany pomocí {{ui:Rotate}}.
- **Kružnice na konci válce** (kružnice, kterou jste vytáhli pomocí {{ui:Push/pull}}) se z kóty změnit nedá, protože by se musely změnit i její stěny. Místo toho válec škálujte kolem jeho osy.

## Změna velikosti modelu kótou

Hned po umístění kóty napište novou délku a stiskněte {{key:Enter}}: `6m`, `12'`, `3500` u modelu v milimetrech. Model se změní na tuto velikost.

Kdykoli později:

1. S {{ui:Select}} klikněte na text nebo čáru kóty. {{ui:Entity info}} napíše **Kóta** a ukáže její {{ui:Length}}.
2. Napište novou délku a stiskněte {{key:Enter}}. Můžete psát přímo do pole hodnoty, nebo do pole {{ui:Length}} v {{ui:Entity info}}.

### Co se pohne

Druhý roh, na který jste klikli, se pohne a s ním vše za ním:

- **Oba rohy na jednom kusu** (šířka krabice, výška stěny): strana u pohybujícího se rohu se vysune nebo zasune a plochy na ni navázané se natáhnou. Krabice zůstane uzavřeným tělesem a vše, co sedí celé na té straně, například komponenta okna, se s ní pohne.
- **Rohy na dvou oddělených kusech** (mezera mezi dvěma krabicemi): kus s pohybujícím se rohem se pohne celý a mezera se změní.
- **Pohybující se roh uvnitř skupiny nebo komponenty**, ve které není druhý roh: pohne se celá skupina.
- **Oba rohy uvnitř stejné skupiny nebo komponenty**: natáhne se uvnitř. Komponenta se změní všude, kde je umístěna, jako vždy při její úpravě.

Chcete-li změnit, který konec se pohybuje, vyberte kótu a zvolte v {{ui:Moves}} v {{ui:Entity info}}:

| Volba | Co se stane |
|---|---|
| {{ui:Second end}} (výchozí) | Pohne se konec, na který jste klikli jako druhý |
| {{ui:First end}} | Pohne se konec, na který jste klikli jako první |
| {{ui:Both ends (centered)}} | Každý konec se pohne o polovinu změny, takže střed zůstane na místě |

### Když je změna velikosti odmítnuta

ModelCraft nic nezmění a ve stavovém řádku napíše proč:

- „plocha by se ohnula ze své roviny“: kóta vede šikmo přes tvar. Kótujte podél hrany, nebo podél červené, zelené či modré osy.
- „plocha by se zmenšila na nulu nebo se obrátila naruby“: nová délka je pro tvar příliš krátká.
- „konec, který se pohybuje, není na rohu modelu“: ten konec byl umístěn do prázdného prostoru nebo na střed hrany. Zvolte druhý konec v {{ui:Moves}}, nebo umístěte kótu na dva rohy.
- „délka musí být větší než nula“.

Každá změna velikosti je jeden krok: {{key:Mod+Z}} ji vrátí zpět.

## Přepsání velikosti v Entity info

Kótu nepotřebujete vždy:

- **Hrana:** vyberte ji. Její {{ui:Length}} v {{ui:Entity info}} je pole, do kterého můžete psát. Psaní délky do pole hodnoty funguje také. Pohne se konec dál podél červené, pak zelené, pak modré, a to, co je na něj připojeno, se natáhne. Například přepsání přední dolní hrany krabice ji rozšíří doprava.
- **Skupina nebo komponenta:** vyberte ji. {{ui:Width (red)}}, {{ui:Depth (green)}} a {{ui:Height (blue)}} jsou pole. Pohne se její vzdálenější strana (pravá, zadní, horní). Jsou to vlastní osy skupiny, před jakýmkoli natočením, které jste jí dali.

Stiskněte {{key:Enter}} pro použití, nebo {{key:Esc}} pro vrácení staré hodnoty.

## Kóty sledují model

Kóta je připojena ke dvěma rohům, na které byla umístěna (úhel: k jeho rohu a ke vzdáleným koncům jeho dvou hran; poloměr nebo průměr: k jeho oblouku nebo kružnici). Přesunete-li, přetáhnete-li nebo změníte velikost geometrie, kóta ji následuje a ukáže novou délku. Zůstane připojena, i když geometrii převedete na skupinu nebo komponentu.

Pokud byl konec umístěn jinam než na roh (na plochu nebo do prázdna), nebo je jeho roh vymazán, tento konec zůstane, kde byl. Kóta stále měří, ale může měnit velikost jen od svého druhého konce.

## Odstranění kót

- Jedna kóta: vyberte ji a stiskněte {{key:Delete}}, nebo na ni klikněte {{ui:Eraser}}.
- Všechny kóty: když nic není vybráno, klikněte na {{ui:Delete all dimensions}} v {{ui:Entity info}}.

Kóty se ukládají do souboru `.modelcraft`. Nexportují se do jiných formátů, které nesou jen 3D model. Soubor s kótami se stále otevře ve starší verzi ModelCraftu, ale bez nich.
