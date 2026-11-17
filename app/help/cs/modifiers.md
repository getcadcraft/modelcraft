---
title: Modifikátory na síti, skupině nebo komponentě
summary: Měňte měřítko, zrcadlete, vytvářejte pole, vyhlazujte, srážejte, řežte a ohýbejte síť bez změny jejího originálu; skupinu nebo komponentu opakujte nebo měňte měřítko se stejným zásobníkem a učiňte změnu trvalou, až budete připraveni.
keywords: modifikátor, modifikátory, zásobník, skupina, komponenta, měřítko, zapéct, upravit zdroj, nedestruktivní, zrcadlit, pole, radiální pole, subdivision, subdivision surface, vyhladit, srazit, zesílit, tloušťka, boolean, řez, posun, šum, svařit, decimate, zjednodušit, mřížka, klec, deformace křivkou, ohnout, shrinkwrap, použít
from: dd5ec1cb
---

**Modifikátor** mění to, co síť zobrazuje, aniž by změnil samotnou síť. Zrcadlete jednu polovinu dílu a modelujte jen ji; zaoblte krychli povrchem subdivision a dál upravujte krychli. Modifikátory sedí v **zásobníku** a fungují postupně, shora dolů. To, co vidíte, exportujete, tisknete a vykreslujete, je síť se všemi zapnutými modifikátory.

## Přidání modifikátoru

1. Vyberte síť. V pracovním prostoru Model je její sekce **Modifikátory** v {{ui:Informace o prvku}}; v pracovním prostoru Síť je v panelu vpravo.
2. Vyberte jeden z {{ui:Přidat modifikátor…}}. Přidá se na konec zásobníku.
3. Změňte jeho nastavení pod názvem. Délky přijímají stejné hodnoty jako pole hodnoty, takže fungují `600mm`, `2'6"` i `(6m)/4`.

Každá změna je jeden krok zpět: {{key:Mod+Z}} ji vrátí.

## Tlačítka každého modifikátoru

- Zaškrtávací políčko jej zapíná nebo vypíná.
- Tlačítko obrazovky jej zobrazí nebo skryje v pohledu (zůstává v zásobníku).
- Tlačítko kamery jej zobrazí nebo skryje ve vykreslených obrázcích a videích, takže modifikátor může být jen pro vykreslení (nebo jen pro pohled).
- Šipky jej posouvají nahoru nebo dolů v zásobníku. Pořadí záleží: nejprve zrcadlit a potom subdivision dá hladký švu, nejprve subdivision a potom zrcadlit ne.
- {{ui:Použít}} zapíše tvar do sítě: modifikátory nad ním a tento se provedou na samotné síti a ze zásobníku odejdou. Je to jeden krok zpět.
- Křížek jej odstraní.

## Modifikátory

| Modifikátor | Co dělá |
| --- | --- |
| Měřítko | Mění měřítko od počátku objektu, činitel pro červenou, zelenou a modrou. Také na skupině nebo komponentě. |
| Zrcadlit | Přidá zrcadlenou kopii přes červenou, zelenou nebo modrou osu procházející počátkem sítě a spojí poloviny v místě styku. |
| Pole | Kopíruje v řadě (krok vlastní velikosti násobený zadanými čísly, plus pevný krok), kolem osy, nebo podél křivky v modelu. Skupina nebo komponenta se kopíruje po řadě. |
| Povrch subdivision | Vyhlazuje síť dělením Catmull-Clark. Ostré hrany zůstanou zalomené. Vykreslení může použít více úrovní než pohled. |
| Srazit | Zaoblí každou hranu ostřejší než zadaný úhel. |
| Zesílit | Dá ploše tloušťku a uzavře okraj. |
| Boolean | Odřízne, spojí nebo ponechá průnik s jiným objektem v modelu. Oba musí být uzavřená tělesa. |
| Posun | Posouvá povrch dovnitř nebo ven hladkým šumem. Stejné semínko vždy dá stejné hrbolky. |
| Svařit | Spojí vrcholy blíž než zadaná vzdálenost. |
| Zjednodušit | Ponechá podíl trojúhelníků a odstraní ty, které tvar mění nejméně. |
| Vyhladit | Uvolní vrcholy směrem k sousedům. |
| Mřížka | Ohýbá síť klecí: pohnete-li body klece, síť je následuje. |
| Deformace křivkou | Ohýbá síť podél křivky v modelu, podél červené, zelené nebo modré osy. |
| Shrinkwrap | Přesune každý vrchol na nejbližší bod jiného objektu. |

## Na skupině nebo komponentě

Také skupina nebo komponenta si může uchovat postup, takže stínidlo lampy může být **Měřítko** a **Pole** jednoho stínidla a změna jednoho čísla změní lampu.

1. Vyberte skupinu nebo komponentu. V {{ui:Informace o prvku}} její sekce **Modifikátory** vypisuje zásobník (zpočátku prázdný).
2. Vyberte {{ui:Měřítko}} nebo {{ui:Pole}} z {{ui:Přidat modifikátor…}}. Skupina se stane komponentou, která je **originálem, umístěným zásobníkem**. Originál se zachová: upravte jej a každá kopie se okamžitě přizpůsobí.
3. Měřítko přijímá činitel pro červenou, zelenou a modrou (`1, 1, 2` zdvojnásobí výšku). Pole přijímá počet kopií, krok jako podíl dosavadní velikosti výsledku a dodatečný krok v délkách.

Zásobník běží shora dolů na vlastních osách originálu kolem jeho počátku, takže pořadí záleží: pole tří kopií po 3 m a potom Měřítko 2 na červenou dá kopie po 6 m; nejprve Měřítko a potom Pole je nechá po 3 m. Zaškrtávací políčko, šipky a křížek fungují jako u sítě; tlačítka pohledu a kamery a {{ui:Použít}} u jednoho modifikátoru nefungují, protože zásobník na skupině je jedna věc.

- {{ui:Upravit zdroj}} otevře originál na místě. Změny se ukážou v každé kopii; zavřením se vrátíte, kde jste byli.
- {{ui:Zapéct modifikátory}} udělá z výsledku prosté hrany a plochy a zásobník odstraní, v jednom kroku zpět. Kopie, které se překrývají, zůstanou jako samostatná geometrie: zapéct není sjednocení.
- Kopie komponenty sdílejí postup; {{ui:Vytvořit samostatnou kopii}} jej oddělí (originál zůstane sdílený).
- Zásobník se ukládá do souboru, přenáší se kopírováním, vložením a zpět a Vyčistit nepoužité originál zachová. Program, který modifikátory nezná, kopie stále zobrazí.
- Dokud se nezapeče, do výsledku nelze vstoupit, rozložit jej, změnit velikost ani natáhnout: při další změně by se znovu sestavil. Každá akce to říká.
- Limity jsou 32 modifikátorů a 1,000 kopií. Komponenta určená k natažení (Stretch) a zásobník zatím nemohou sdílet definici.

## Povrch subdivision

Subdivision vyhladí síť metodou Catmull-Clark: každá plocha se stane čtyřúhelníkovými plochami a každá úroveň udělá čtyřikrát tolik. Krychle se dvěma nebo třemi úrovněmi už vypadá jako zaoblený tvar a krychli dál upravujete.

- **Úrovně v pohledu** nastavují, jak hladký je.
- **Úrovně ve vykreslení** nastavují, jak hladké jsou vykreslené obrázky a videa; vykreslení mohou použít více úrovní než pohled.
- **Vykreslení na skutečně hladkém povrchu** umístí body vykreslené sítě na limitní povrch, k němuž úrovně směřují, takže i dvě úrovně se vykreslí stejně hladce jako mnoho.
- **Rýhy** udrží hrany ostré: v pracovním prostoru Síť vyberte hrany a použijte {{ui:Rýha}} (1 zůstane ostré, 0.5 mírně zaoblí, 0 je hladké). Viz [Úprava sítě](topic:mesh-edit).
- **Snížení úrovně pohledu u velké sítě:** když by požadované úrovně daly více ploch, než pohled na tomto počítači zvládne, pohled ukáže nižší úroveň a řekne, kterou. {{ui:Použít}} vždy použije všechny úrovně. Kolik ploch, o tom rozhoduje třída vašeho počítače v {{ui:Nastavení}} › Vykreslování › Váš počítač.
- Otevřené okraje si zachovají rohy a zůstanou na přímce svých hran.

## Ohýbání mřížkovou klecí

1. Přidejte modifikátor {{ui:Mřížka}} a stiskněte {{ui:Přidat mřížkovou klec kolem sítě}}. Kolem sítě se objeví klec 3 × 3 × 3 bodů, nakreslená jako drátová.
2. Otevřete klec v pracovním prostoru Síť (dvojklikem na ni) a posuňte její body. Síť je plynule následuje.

:::tip
Klec je síť jako každá jiná: až budete hotovi, skryjte ji pomocí její značky.
:::

## Velké sítě

Malé zásobníky se spočítají hned. Velký se počítá na pozadí na každém jádře počítače: pohled dál ukazuje poslední výsledek, dokud není nový hotový. Boolean poprvé načte modeler těles; pohled to na chvíli oznámí.

## Co modifikátory zatím neumí

- Váhy na vrchol (útlum namalovaný na síti) pro Posun, Vyhladit a Shrinkwrap.
- Modifikátory jiné než Měřítko a lineární Pole na geometrii tlač/tah (skupiny a komponenty): nejprve ji převeďte na síť ({{ui:Převést na síť}}). Zrcadlení, kruhové nebo křivkové Pole, Ohnout a Zúžit na skupinách přijdou později.
