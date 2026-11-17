---
title: Animace libovolné vlastnosti, tvarování křivkami a míchání klipů
summary: Pracovní prostor Animace klíčuje polohu, natočení a velikost objektu, jas, rozptyl a barvu lampy, objektiv kamery a tvarové klíče sítě; kostry ohýbají síť pomocí kostí a namalovaných vah; IK a vazby nechají kosti a objekty dosáhnout, dívat se na cíl, kopírovat, zůstat v mezích, viset nebo sledovat jiné; tuhá tělesa padají, skládají se a srážejí a zapékají se do klíčů; ovladače nastaví hodnotu podle jiných; zobrazení Křivky na časové ose tvaruje každou změnu úchyty Bézier a cykly a zobrazení Klipy ukládá animace jako akce, které znovu umístíte a mícháte.
keywords: fyzika, tuhé těleso, tuhá tělesa, simulace, simulovat, pustit, padat, gravitace, srážka, kolize, skládat, odraz, tření, zapéct, zapečený, ik, inverzní kinematika, vazba, vazby, dívat se na, sledovat cíl, mířit, kopírovat transformace, kopírovat polohu, kopírovat natočení, omezit natočení, omezení, potomek, rodič, sledovat dráhu, dráha, pól, fabrik, řetěz, kostra, kostry, rig, rigging, kosti, kost, skelet, kůže, skinning, váhy, malování vah, skupiny vrcholů, automatické váhy, pózování, režim pózy, duální kvaternion, lineární míchání, tvarové klíče, tvarový klíč, morf, morfy, cílové tvary, míchání tvarů, obličej, výraz, ovladač, ovladače, výrazy, pracovní prostor animace, animace, animovat, klíčový snímek, klíč, klíče, vlastnost, vlastnosti, transformace, poloha, natočení, velikost, lampa, světlo, jas, barva, objektiv, zorné pole, fov, editor grafů, křivky, křivka, bezier, úchyty, tečna, interpolace, cyklus, cykly, opakovat, smyčka, tam a zpět, posun, dope sheet, výběr klíčů, rámeček, kopírovat klíče, vložit klíče, roztáhnout klíče, měnit měřítko klíčů, klipy, akce, nla, míchání, prolnutí, vliv, uložit do zásoby
from: 16d8e12f
---

[Časová osa](topic:animation) posouvá kameru a celé skupiny a komponenty. Pracovní prostor **Animace** klíčuje víc a časová osa dostane další dvě zobrazení, kterými můžete tvarovat a znovu používat to, co jste naklíčovali.

## Otevření

Vyberte {{ui:Animate}} v seznamu pracovních prostorů na panelu nástrojů. Pod pohledem se otevře časová osa, panel nástrojů ukáže skupiny Animace ({{ui:Keys}}, {{ui:Play}}, {{ui:Timeline}}) a panel vpravo vypíše, co můžete naklíčovat v místě přehrávací hlavy.

## Klíčování vlastnosti

Panel vypisuje v místě přehrávací hlavy:

- **Vybraný objekt**: jeho {{ui:Place}}, {{ui:Turn (°)}} a {{ui:Size}}, po třech číslech. Zadejte číslo a stiskněte {{key:Enter}}: naklíčuje se v přehrávací hlavě a objekt se tam přesune. Kosočtverec vedle řádku naklíčuje hodnotu tak, jak je právě teď; vyplněný kosočtverec znamená, že v přehrávací hlavě už klíč je.
- **Lampy**: {{ui:Brightness (lm)}}, {{ui:Spread (°)}} (bodové lampy) a {{ui:Colour}} každé lampy.
- **Kamera**: {{ui:Lens angle (°)}}, pro přiblížení při pohybu kamery.

{{ui:Key transform}} (nebo {{key:I}}) naklíčuje polohu, natočení a velikost všech vybraných skupin nebo komponent najednou; {{ui:Key camera}} (nebo {{key:K}}) naklíčuje kameru. Když je zapnuto {{ui:Auto key}}, skupina, jejíž poloha, natočení a velikost jsou takto naklíčovány, dostane nový klíč pokaždé, když ji přesunete.

Natočení jsou tři úhly: kolem X, pak Y, pak Z. Natočení naklíčované přes 180° pokračuje stejným směrem (190° zůstává 190°, ne −170°), takže se kolo může roztočit několikrát.

:::tip
Skupina naklíčovaná pomocí {{ui:Key selected}} na časové ose má klíče celého umístění. Tlačítko křivky na jejím řádku je přemění na křivky polohy, natočení a velikosti (stejné umístění v každém klíči), abyste je mohli tvarovat v {{ui:Curves}}.
:::

## Tvarové klíče (morfy)

**Tvarový klíč** je další tvar stejné [sítě](topic:meshes): úsměv na obličeji, vyboulení dveří, ohnutý list. Jeho posuvník mísí od sítě v jejím současném stavu (0) k tomuto tvaru (1); několik klíčů se sčítá.

1. Vyberte síť v pracovním prostoru Animace: panel ukáže její {{ui:Shape keys}}.
2. Klikněte na {{ui:Add shape key}}. ModelCraft přejde do [pracovního prostoru Síť](topic:mesh-edit) s novým klíčem v úpravě: posouvejte body, vytahujte, tvarujte. Změňte síť v požadovaný tvar.
3. Vraťte se do {{ui:Animate}} a klikněte na {{ui:Done}}. Síť se vrátí do původního stavu a klíč si ponechá vaši změnu.

Pak přetáhněte posuvník klíče (nebo zadejte hodnotu), aby se přimíchal. Kosočtverec naklíčuje hodnotu v přehrávací hlavě, takže klíč může v čase narůstat a mizet; jakmile má dráhu, nová hodnota se v přehrávací hlavě naklíčuje. Tužka upraví tvar klíče znovu (síť jej ukazuje plně, dokud neklepnete na {{ui:Done}}; {{ui:Cancel}} nechá klíč tak, jak byl), oko klíč vypne a koš jej odstraní.

Bod, který přidáte při úpravě klíče, patří síti samotné: zůstává tam, kde jste ho vytvořili, ve všech tvarech.

:::note
Tvarové klíče posouvají síť dřív než její [modifikátory](topic:modifiers): modifikátor Subdivision vyhladí smíchaný tvar. Vykreslené obrázky a videa ukazují klíče v každém snímku.
:::

## Kostry: kosti, které ohýbají síť

**Kostra** je soustava kostí uvnitř [sítě](topic:meshes). Natočte kosti a síť je bude následovat, každý bod tolik, kolik řeknou jeho **váhy**.

1. Vyberte síť v pracovním prostoru Animace a klikněte na {{ui:Add an armature}} v panelu (nebo na {{ui:Add bone}} ve skupině {{ui:Rig}}): první kost vede od paty sítě doprostřed.
2. Když je kost vybrána, {{ui:Add a child bone}} přidá další od jejího hrotu. U kterékoli kosti nastavte v panelu {{ui:Head}}, {{ui:Tip}}, {{ui:Roll (°)}} a to, na čem {{ui:Hangs from}} visí; kost, která visí na jiné, se s ní pohybuje. Zrušte zaškrtnutí u {{ui:Moves the mesh}} u kosti, která jen řídí ostatní.
3. Klikněte na {{ui:Automatic weights}}: každá kost uchopí body nejblíž sobě a uchopení se plynule rozprostře po síti, takže body mezi dvěma kostmi jsou sdílené. {{ui:Nearest bones only}} je rychlejší a tvrdší rozdělení.

**Pózujte** kosti pomocí {{ui:Pose}} ({{key:P}}): kliknutím kost vyberete, tažením ji natočíte kolem osy pohledu, tažením se {{key:Shift}} ji posunete. Nebo zadejte její {{ui:Place}}, {{ui:Turn (°)}} a {{ui:Size}} pod {{ui:Pose}}; natočení je v osách samotné kosti, počítané od jejího klidového stavu. Kosočtverce a {{ui:Key the whole pose}} naklíčují pózu v přehrávací hlavě; jakmile má kost klíče, její pózování je tam naklíčuje. {{ui:Reset this bone}} a {{ui:Reset the pose}} vrátí kosti do klidu.

**Malování vah** ({{key:W}}) pro vybranou kost: síť se ukáže v klidu, každá plocha je obarvená podle toho, kolik ji tato kost drží (červená všechno, modrá nic). Malujte pro přidání držení ({{key:Mod}} je odebírá, {{key:Shift}} vyhlazuje); {{ui:Size (px)}} a {{ui:Strength}} nastavují štětec. Při zapnutém {{ui:Keep each point's weights adding up to 1}} dání větší váhy jedné kosti stejný díl ubere ostatním. Každý tah je jeden krok zpět v modelu.

{{ui:Skin}} určuje, jak se bod mezi kostmi pohybuje: {{ui:Linear (fast)}} mísí pohyby kostí a mírně stlačí ohnutý kloub; {{ui:Dual quaternion (keeps volume at joints)}} místo toho otáčí bod kolem kloubu, takže loket nebo koleno si zachová tloušťku (velikost {{ui:Size}} kosti pak kůži neroztahuje).

:::note
Nejdřív přicházejí tvarové klíče, pak kostra, pak [modifikátory](topic:modifiers). Pohled, obrázky i videa ukazují pózovanou síť; váhy sítě se ukládají spolu se sítí, kosti a jejich póza s animací.
:::

## IK a vazby

**Vazba** pohybuje kost nebo objekt podle pravidla, až po jeho klíčích. Vyberte objekt (nebo v kostře kost) a přidejte vazbu pod {{ui:Vazby …}}. Několik vazeb běží v uvedeném pořadí (šipky je mění) a každá má {{ui:How much}} (0 až 1, naklíčuje se svým kosočtverečkem jako každá vlastnost) a vypínač.

| Vazba | Pro | Co dělá |
|---|---|---|
| {{ui:Reach (IK)}} | Kosti | Kost a kosti, na kterých visí ({{ui:Bones in the chain}}), se ohnou tak, aby se jejich hrot dotkl cíle. Se dvěma kostmi a {{ui:Pole (the bend points to it)}} loket nebo koleno míří k pólu; delší řetězy se ohýbají plynule. Mimo dosah řetěz míří přímo na cíl. |
| {{ui:Look at}} | Obojí | Otočí se tak, aby {{ui:Axis that points}} mířila na cíl a {{ui:Axis kept up}} zůstala co nejblíž nahoru. |
| {{ui:Copy transforms}} | Obojí | Převezme polohu, natočení nebo velikost cíle, ty, které jsou zaškrtnuté. |
| {{ui:Limits}} | Obojí | Udržuje vlastní polohu, natočení (ve stupních) nebo velikost mezi {{ui:min}} a {{ui:max}} pro každou osu; dvojici nechte prázdnou, pokud má být osa volná. |
| {{ui:Child of}} | Obojí | Pohybuje se s cílem, jako by na něm visela, od místa, kde byly obě, když jste cíl vybrali. |
| {{ui:Follow path}} | Objekty | Sedí na [křivkovém objektu](topic:curves) v {{ui:Along the curve}} (0 je jeho začátek, 1 konec; naklíčujte jej, aby cestoval) a s {{ui:Turn along the curve}} se podle křivky natáčí. |

Cílem je jiný objekt v otevřené skupině, kost stejné kostry, nebo {{ui:A point}}, který zadáte (bod objektu je v souřadnicích modelu, bod kosti v souřadnicích její sítě). U IK nohy umístěte cíl tam, kde má být chodidlo, a naklíčujte cíl, nebo naklíčujte {{ui:How much}}, abyste předali nohu mezi klíči a IK.

:::tip
Objekt, který se dívá na objekt sledující dráhu, ho vidí na dráze: ModelCraft nejdřív spočítá cíle, bez ohledu na pořadí objektů.
:::

## Fyzika: pád, skládání a srážky

Nechte objekty padat a narážet do sebe, pak výsledek uchovejte jako klíče.

1. Vyberte skupinu, komponentu nebo síť a nastavte jejich {{ui:Rigid body}} pod {{ui:Physics}}: {{ui:Falls and collides}} (pohybuje se) nebo {{ui:Stays put, gets in the way}} (stůl, zeď, rampa). Padajícímu tělesu dejte {{ui:Shape}}, tedy {{ui:Box (its bounds)}} nebo {{ui:Ball (round its bounds)}}, a dále jeho {{ui:Mass (kg)}}, {{ui:Friction}} a {{ui:Bounce}} (0 dopadne s tupým úderem, 1 se odrazí zpět stejně vysoko).
2. Pod {{ui:The whole model}} nastavte {{ui:From (s)}} a {{ui:To (s)}}, {{ui:Gravity (m/s², down)}} a zda je {{ui:A ground to land on}} (a jeho výška).
3. Klikněte na {{ui:Bake physics}} (v panelu nebo ve skupině {{ui:Physics}}). Každý padající objekt dostane klíč polohy, natočení a velikosti v každém snímku mezi oběma časy; přehrajte jej jako jakoukoli animaci.

Nové zapečení nahradí tyto klíče; {{ui:Remove baked keys}} je odstraní. Objekty začínají v klidu, tam, kde je jejich klíče, křivky a vazby postaví v čase {{ui:From (s)}} (klíčovaný pohyb před tím nepokračuje do pádu). Více {{ui:Steps a frame}} udrží vysoké hromady stabilnější; stavový řádek řekne, když se na konci ještě něco hýbe.

:::note
Tvary jsou kvádry a koule kolem ohraničení každého objektu; kvádr se dotýká rohy, středy hran i středy ploch, takže se kvádry skládají a převrhávají, jak byste čekali. Látka, tekutiny, klouby mezi objekty a přesné tvary nejsou hotové.
:::

## Ovladače

**Ovladač** nastavuje tvarový klíč z jiných věcí místo ruční práce: otevřete ovladač klíče (tlačítko kalkulačky), napište **výraz** a u každého jména v něm uveďte, co čte ({{ui:Reads}}): čas v sekundách, snímek, polohu, natočení nebo velikost umístění podél X, Y nebo Z, jas lampy, nebo jiný tvarový klíč. Například pokud `v` čte natočení dveří kolem Z, `clamp(v / 90, 0, 1)` otevírá tvar tak, jak se dveře otevírají.

Výrazy používají čísla, jména, `+ - * / % ^` a závorky a funkce `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` s `pi` a `e`. Chyba je označena a nic se nezmění. Posuvník řízeného klíče ukazuje hodnotu ovladače; ovladač má přednost před dráhou klíče, dokud ho neodstraníte.

## Výběr a změna klíčů (zobrazení Klíče)

{{ui:Keys}} ukazuje řádek pro každou dráhu: kameru, každou pohybující se skupinu a každou vlastnost („Lampa 2 · Jas (lm)“; klíče vlastností jsou kulaté).

- Klikněte na klíč, abyste ho vybrali; {{key:Shift}}-klik nebo {{key:Mod}}-klik přidá klíče do výběru nebo je z něj odebere. {{key:Shift}}-tažení přes řádky nakreslí rámeček, který přidá každý klíč v něm.
- Přetažením vybraného klíče přesunete všechny; {{key:Left}} / {{key:Right}} je posunou o snímek ({{key:Shift}}: deset).
- {{key:Mod+C}} zkopíruje vybrané klíče, {{key:Mod+V}} je vloží od přehrávací hlavy na stejné dráhy (vložit je může i jiná karta ModelCraftu).
- {{ui:Stretch}} roztáhne vybrané klíče od přehrávací hlavy o číslo vedle něj (2 = dvakrát dál od sebe; 0.5 je stáhne k sobě).
- Seznam zrychlení určuje, jak se každý vybraný klíč dál pohybuje.

## Tvarování křivek (zobrazení Křivky)

{{ui:Curves}} je graf každého čísla v čase: čas vodorovně, hodnota svisle. Zaškrtněte křivky, které chcete zobrazit, v seznamu vlevo (X, Y a Z jsou červená, zelená a modrá).

- Klikněte na klíč (čtvereček), abyste ho vybrali, {{key:Shift}}-klik pro další, nebo přetáhněte rámeček. Přetažením vybraného klíče změníte jeho čas a hodnotu; při několika vybraných přetažení posouvá všechny v čase.
- Vybraný klíč ukazuje své dva **úchyty**. Přetažením jednoho tvarujete křivku na dané straně. {{ui:Handles}} říká, jak se chovají: {{ui:Automatic}} (hladká křivka procházející okolními klíči), {{ui:Pointing at the next key}}, {{ui:Aligned}} (oba zůstávají v přímce, takže křivka nemá roh), nebo {{ui:Free}}.
- {{ui:From the chosen keys}} nastavuje, jak se každý vybraný klíč přesouvá k dalšímu: {{ui:Curve (handles)}}, {{ui:Smooth}}, {{ui:Steady}}, {{ui:Slow in and out}} nebo {{ui:Hold}}.
- {{ui:Before}} a {{ui:After}} nastavují, co křivka dělá mimo své klíče: {{ui:Hold}} (zůstane na první nebo poslední hodnotě), {{ui:Repeat}}, {{ui:Back and forth}} nebo {{ui:Repeat and carry on}} (každé opakování začíná tam, kde skončilo předchozí: kolo se stále kutálí, chodec stále kráčí).
- Kolečko přibližuje ({{key:Mod}}: jen hodnoty, {{key:Shift}}: jen čas); tažení prostředním tlačítkem nebo s {{key:Alt}} posouvá pohled; {{ui:Show all}} nebo {{key:Home}} přizpůsobí všechny zobrazené křivky. Kliknutím do prázdna přesunete přehrávací hlavu tam. {{key:Delete}} smaže vybrané klíče.

Úchyty se v čase nesmějí křížit, takže křivka nikdy nejede zpátky.

## Znovu používání animací (zobrazení Klipy)

**Klip** přehrává uloženou animaci (**akci**) na časové ose. Klipy se míchají v pořadí, nižší řádky přes vyšší; vlastní dráhy časové osy jsou nad každým klipem.

1. Naklíčujte skupiny a lampy obvyklým způsobem, pak klikněte na {{ui:Make a clip}} v {{ui:Clips}} a akci pojmenujte. Dráhy se stanou akcí a klip ji přehraje tam, kde byly (kamera zůstane na časové ose).
2. Chcete-li ji použít znovu, vyberte akci a klikněte na {{ui:Add clip}}: nový klip začne v přehrávací hlavě.
3. Přetažením klipu po jeho řádku ho přesunete; kliknutím nastavíte {{ui:Start (s)}}, {{ui:Speed}} (2 = dvakrát rychleji), {{ui:Repeats}}, {{ui:How much}} (0 až 1), {{ui:Mix}} ({{ui:Replace}}, nebo {{ui:Add on top}} nad klipy před ním), {{ui:Outside the clip}} (nic, podržet jeho konec, nebo podržet oba konce) a {{ui:Mute}}. Šipky mění pořadí; koš jej odstraní (akce, kterou už žádný klip nepoužívá, zmizí s ním).

Klip s menším než plným {{ui:How much}} se mísí s tím, co je pod ním: s klipem před ním, nebo s lampou či umístěním bez animace.

## Co se přehrává kde

| Co | V zobrazení | Ve vykresleném videu |
|---|---|---|
| Klíče kamery, úhel objektivu s klíči kamery | Ano | Ano |
| Poloha, natočení a velikost (klíče, křivky, klipy) | Ano | Ano |
| Jas, rozptyl a barva lampy | Ano | Zatím ne: video používá lampy tak, jak jsou na začátku (viz [Ještě není hotovo](topic:not-built-yet)) |
| Úhel objektivu bez klíčů kamery | Ano | Zatím ne: naklíčujte i kameru |
| Tvarové klíče a ovladače | Ano | Ano |
| Kostry (pózované sítě) | Ano | Ano |
| IK a vazby | Ano | Ano |
| Zapečená fyzika (klíče) | Ano | Ano |

Vše se ukládá do souboru `.modelcraft` spolu se zbytkem animace a {{ui:Undo}} a {{ui:Redo}} na časové ose vrátí zpět a znovu libovolnou z těchto změn.
