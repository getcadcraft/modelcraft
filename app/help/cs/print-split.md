---
title: Rozdělení velkého modelu pro tisk
summary: Rozřežte model, který se nevejde na vaši tiskárnu, na díly, které se vejdou na podložku, s kolíky, klíny, rybinovými spoji, otvory pro spojovací kolíky nebo magnety a s číslem spoje na obou stranách. Stáhněte všechny díly a list sestavy v jednom zipu.
keywords: 3D tisk, rozdělení, šikmý řez, zkosený řez, úhlový řez, rozdělovač, řez, příliš velký, velikost podložky, tiskový prostor, díly, části, spojovací prvky, kolíky, klíny, rybinový spoj, spojovací kolík, magnet, vůle, tolerance, čísla dílů, sestava, rozložený pohled, zip, stl, 3mf, licence, licenční klíč, USB klíč, dongle
from: ee96ba77
---

Když je model větší než podložka vaší tiskárny, **Rozdělit pro tisk** jej rozřeže na díly, které se vejdou, přidá spojovací prvky, aby díly po sestavení lícovaly, a na obou stranách každého spoje vyryje stejné číslo. Otevřete {{ui:Export}} › {{ui:Zkontrolovat pro 3D tisk (STL nebo 3MF)…}}; v řádku **Nástroje pro tisk** v dialogu je {{ui:Rozdělit pro tisk}}. Otevře se jako karta nad zobrazením.

Pracuje nad tím, co se tiskne: nad výběrem, nebo nad vším viditelným, když nic vybráno není. To, co se tiskne, musí být uzavřené těleso. Pokud kontrola najde otvory, použijte nejdřív [Opravu](topic:print-tools#repair).

Běží v ModelCraftu, ve vašem počítači: žádný licenční server, žádný USB klíč, nic se nenahrává.

## Jak řezat

- **Vejít se na podložku, nejmenší počet dílů**: zadejte šířku, hloubku a výšku podložky (výchozí hodnoty se berou z {{ui:Nastavení}} › ModelCraft › 3D tiskárna). Karta ukáže, kolik dílů to bude a jak velký je každý. Model rozřeže na stejné díly, a to co nejméně. Díl může v souborech ležet na boku, pokud se tak vejde. Spojovací prvky, které z dílu vystupují, se počítají do jeho velikosti.
- **Na místech, která zadáte**: vyberte osu, napříč kterou se bude řezat, a napište místa v milimetrech od nízkého konce modelu, oddělená čárkami (`100, 200` udělá tři díly).
  **Šikmo** otočí řezy až o 60° kolem jedné ze dvou dalších os (například řez napříč osou Z šikmo kolem X). Každý šikmý řez prochází středovou čarou modelu v daném místě, dá dílům větší plochu k lepení a na šikmém povrchu lépe skryje spoj. Spojovací prvky stojí kolmo k řezu.

Při otevřené kartě jsou kolem modelu čárkovaně nakresleny roviny řezů.

## Spojovací prvky

Každé místo, kde se dva díly dotýkají, dostane spojovací prvky. Ty se umístí tam, kde je nejvíc místa: alespoň **nejtenčí stěna** plus **vůle** plus jejich vlastní velikost od vnějšku a dost daleko od každého dalšího řezu, aby se dva otvory nikdy nesetkaly. Na dlouhé ploše se dva prvky rozmístí podél ní, aby se díly nemohly otáčet.

- **Kulaté kolíky**: kolík na jednom dílu (na konci zkosený), otvor na druhém.
- **Hranaté klíny**: totéž, jen hranaté, aby šel díl nasadit jen jedním způsobem.
- **Rybinové spoje**: jazýček, který se zasune do drážky z boku. Pokud by jeden konec drážky narazil na jiný řez, rybinový spoj se zastaví těsně před ním a zasune se z otevřeného konce. Rybinové spoje se hodí pro řezy v jednom směru (řada plátků). V mřížce použijte kolíky nebo spojovací kolíky.
- **Otvory pro spojovací kolíky**: otvor na každé straně. Kolíky se vytisknou také (v zipu).
- **Kapsy pro magnety**: kapsa na každé straně pro kulatý magnet o průměru a tloušťce, které zadáte. Před zalepením zkontrolujte póly.
- **Žádný (lepení)**.

**Vůle** je mezera na každé straně mezi kolíkem a jeho otvorem (zpočátku 0.2 mm). Odpovídá zadanému číslu: kulaté otvory se dělají o něco větší, aby si jejich rovné strany, a ne rohy, tuto mezeru zachovaly. Zvyšte ji, pokud díly vaší tiskárny vyjdou těsné.

Pokud pro spojovací prvek ve spoji není místo (tenká stěna, malá dotyková plocha), karta to řekne. Tento spoj slepte.

## Čísla dílů

Když je zapnuto **Vyrýt čísla spojů na obou stranách**, dostane každý spoj číslo svých dvou dílů, například `3-4`. Číslo se vyryje 0.6 mm hluboko na obou stranách, čitelné správným směrem. Čísla začínají na výšce 5 mm a zmenšují se, aby se vešla, až na 2.5 mm. Spoj, pro jehož číslo není místo, se uvede v seznamu. Díly se číslují od spodní vrstvy nahoru.

## Náhled, stažení, rozdělení modelu

1. {{ui:Náhled}} rozřeže model a řekne, kolik je dílů, spojů a spojovacích prvků. Také řekne, zda každý díl projde kontrolou pro 3D tisk a vejde se na podložku, a vypíše velikost každého dílu. Kroužek ve zobrazení označuje každý spojovací prvek a číslo.
2. {{ui:Stáhnout díly (.zip)}} uloží jeden zip: soubor pro každý díl (STL nebo 3MF, podle toho, co vyberete pod **Soubory**), každý stojící na podložce; spojovací kolíky; a **list sestavy**, tedy obrázek dílů rozložených od sebe s jejich čísly (`assembly.svg` a `assembly.png`) a seznam dílů a spojů (`assembly.txt`).
3. {{ui:Rozdělit model}} vloží díly do modelu místo vybraných skupin nebo komponent a pojmenuje je tak, jak jsou na listu sestavy. Udělá to jedním krokem: {{ui:Zpět}} vrátí původní model. Vyžaduje vybrané skupiny nebo komponenty, které se mají rozdělit. Stažení funguje nad vším, co se tiskne.

## Spojovací prvky přesunete sami

Po náhledu vám **Spojovací prvky ručně** umožní opravit, kam spojovací prvky patří:

- {{ui:Přesunout jednu}}: klikněte na červený kroužek ve zobrazení (zezelená), pak klikněte, kam má patřit na řezu.
- {{ui:Přidat jednu}}: klikněte ve zobrazení na místo, kam má spojovací prvek jít. Umístí se na rovinu řezu, kterou váš klik zasáhne, mezi dva díly tam.
- {{ui:Odebrat jednu}}: klikněte na červený kroužek, abyste ten spojovací prvek odstranili.

Každá změna se zkontroluje znovu stejně jako automatické: místo příliš blízko obrysu, jiný řez nebo jiný spojovací prvek se neudělá a karta to řekne. {{ui:Opět automaticky}} zapomene vaše místa. Zůstanou zachována, dokud model, výběr a řezy zůstávají stejné.

Náhled zůstane, dokud se nezmění model, výběr nebo nastavení. Potom karta požádá, abyste náhled provedli znovu.

:::note
Každý díl se před stažením zkontroluje tak, jak by ho zkontrolovala kontrola pro 3D tisk. Váš slicer ale stále rozhoduje o tom, jak se každý díl tiskne. Podívejte se na každý tam a nejdřív vytiskněte jeden spoj, abyste viděli, jak vaše tiskárna zvládá vůli.
:::
