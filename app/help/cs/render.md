---
title: Vykreslení obrázku modelu
summary: Vytvořte obrázek, který vypadá jako denní světlo: obloha, slunce podle místa a data modelu, měkké stíny, vzhled skla a kovu; pak jej uložte jako PNG.
keywords: vykreslení, předvolba, předvolby, předvolba scény, interiér, exteriér, pohled řezem, noc, jedním kliknutím, vykreslování, sledování paprsků, path tracing, ray tracing, globální osvětlení, odrazy, lom, vysoká kvalita, fotka, fotorealistické, realistické, obrázek, obraz, png, statický, obloha, slunce, denní světlo, stíny, měkké stíny, ambientní okluze, sklo, kov, lesklý, materiály, expozice, jas, zataženo, soumrak, studio, prezentace, mlha, opar, zákal, dým, mrak, objem, světelné paprsky, kaustiky, adaptivní vzorkování, šum
from: 517ba4d3
---

{{ui:Vykreslit obrázek…}} vytvoří obrázek pohledu, který vypadá spíše jako denní světlo než jako výkres: oblohu, slunce podle místa a data vašeho modelu, měkké stíny, světlo z celé oblohy, které ztmavuje rohy a mezery, a barvy, které mohou vypadat jako sklo, kov nebo lesklý lak. Model se nemění.

## Vykreslení pohledu

1. Nastavte pohled tak, jak jej chcete na obrázku: otočte, přiblížte, vyberte [scénu](topic:scenes), skryjte, co se nemá zobrazit. Obrázek používá vlastní kameru pohledu.
2. Klikněte na {{ui:Export}} ve skupině {{ui:Soubor}}, pak na {{ui:Vykreslit obrázek…}}.
3. Vyberte {{ui:Scéna}}, pokud není stisknutá ta, kterou chcete (viz [Předvolby scén](topic:render#scene-presets-a-good-picture-in-one-click)), zvolte {{ui:Velikost}} a klikněte na {{ui:Vykreslit}}.

   Obrázek se během vykreslování doplňuje a s každým průchodem je hladší. {{ui:Zastavit}} (nebo {{key:Esc}}) vykreslování ukončí a ponechá obrázek v dosavadním stavu.

4. Klikněte na {{ui:Uložit}}, čímž jej stáhnete (PNG, pokud {{ui:Uložit jako}} neříká jinak).

:::tip
Začněte s {{ui:Náčrt}} ve {{ui:Velikost pohledu}}, abyste zkontrolovali kameru a vzhled, a pro finální obrázek vykreslete {{ui:Dobrá}} nebo {{ui:Nejlepší}} ve větší velikosti.
:::

## Předvolby scén: dobrý obrázek jedním kliknutím

Nahoře v dialogu jsou čtyři tlačítka {{ui:Scéna}}. Každé z nich nastaví oblohu, jas, zemi, hrany, kvalitu a slunce jedním kliknutím, takže před prvním obrázkem není třeba se nic učit. Klikněte na jedno z nich a pak na {{ui:Vykreslit}}.

| Scéna | Co nastaví | K čemu slouží |
|---|---|---|
| {{ui:Exteriér}} | Jasná obloha, vlastní slunce modelu, zapnutá země | Budova zvenku |
| {{ui:Interiér}} | Zatažená obloha (rovnoměrné světlo, bez ostrých slunečních skvrn), o půl stupně expozice světlejší | Pohled zevnitř místnosti |
| {{ui:Pohled řezem}} | Bílé studio, bez země, hrany v rychlém vykreslení | Model rozříznutý řezem |
| {{ui:Noc}} | Slunce pod obzorem (půlnoc v zimě pro polokouli, na které leží lokalita), o jeden stupeň expozice světlejší | Lampy osvětlující model. Bez lamp je obrázek tmavý |

- {{ui:Vybrat pro tento pohled}} vybere za vás: {{ui:Pohled řezem}}, když je zapnutý řez, {{ui:Interiér}}, když je kamera uvnitř modelu, jinak {{ui:Exteriér}}. Když dialog poprvé otevřete, začne sám touto volbou.
- Každé nastavení pod tím zůstává a lze jej změnit. Jakmile změníte některé nastavení, které scéna určuje, žádné tlačítko scény nezůstane stisknuté a řádek pod tlačítky uvede, že nastavení jsou vaše vlastní. Klikněte na scénu znovu a její hodnoty se obnoví.
- Scéna nemění motor, režim, velikost, materiály, kameru ani lampy.

:::note
Scény dávají v ModelCraftu i BimCraftu stejné hodnoty. Výsledný vzhled obrázku závisí na vašem modelu a na grafické kartě.
:::

## Nastavení

| Nastavení | Co dělá |
|---|---|
| {{ui:Velikost}} | Velikost pohledu, dvojnásobek velikosti pohledu, Full HD, 4K nebo čtverec. Pevné velikosti zachovají kameru pohledu a zobrazí více nebo méně po stranách |
| {{ui:Režim}} | {{ui:Rychlý}}, nebo {{ui:Vysoká kvalita (sledování paprsků)}} (níže) s jejím {{ui:Časový limit}} |
| {{ui:Kvalita}} | Kolik průchodů (nebo ve vysoké kvalitě vzorků) se zprůměruje: {{ui:Náčrt}} 16, {{ui:Dobrá}} 64, {{ui:Nejlepší}} 256. Více průchodů dává hladší stíny a hrany, ale trvá to déle |
| {{ui:Obloha}} | {{ui:Jasná obloha}}, {{ui:Zataženo}} (měkké světlo, slabé stíny), {{ui:Soumrak}} (nízké, teplé světlo) nebo {{ui:Bílé studio}} (prosté bílé pozadí) |
| {{ui:Slunce}} | Slunce se řídí datem, časem a místem v {{ui:Styl}} › slunce. Zaškrtněte {{ui:Pro tento obrázek použít jiné datum a čas}}, chcete-li zkusit jiný čas bez změny stylu modelu |
| {{ui:Jas}} | Světlejší nebo tmavší po krocích (stupních expozice) |
| {{ui:Země pod modelem}} | Země, která přijímá stíny a plynule přechází do horizontu. Pro model, který se vznáší, ji vypněte |
| {{ui:Kreslit hrany}} | Nakreslí hrany modelu tenkými čarami přes obrázek, pro kreslený vzhled |

Když je slunce v zvoleném čase pod obzorem, je noc: obloha ztmavne a [lampy](topic:lights) modelu jej osvětlí. Dialog to uvádí.

Nastavení se ukládají do souboru `.modelcraft`, takže další obrázek stejného modelu začne tam, kde jste skončili.

## Vytvoření barev, které vypadají jako sklo nebo kov

V {{ui:Materiály}} má každá barva na obrazovce vzhled: {{ui:Matný}}, {{ui:Saténový}}, {{ui:Lesklý}}, {{ui:Kov}}, {{ui:Leštěný kov}}, {{ui:Sklo}} nebo {{ui:Matné sklo}}. {{ui:Nenamalované plochy}} jsou plochy bez vlastní barvy.

Chcete-li, aby okna byla ze skla, [namalujte](topic:paint) okenní tabule jednou barvou a pak tuto barvu nastavte na {{ui:Sklo}}. Sklo propouští oblohu a to, co je za ním, zabarvené svou barvou, a odráží oblohu.

:::note
V režimu {{ui:Rychlý}} sklo a kov odrážejí oblohu, ne zbytek modelu, a světlo se sklem neláme. Režim {{ui:Vysoká kvalita (sledování paprsků)}} níže obojí dělá.
:::

## Vysoká kvalita

Zvolte {{ui:Režim}} › {{ui:Vysoká kvalita (sledování paprsků)}} pro obrázek, který sleduje světlo tak, jak je vidí kamera:

- světlo se odráží mezi plochami, takže místnost osvětlená oknem nebo lampou je osvětlena ze všech stran a barvy přecházejí na sousední plochy;
- sklo je skutečné sklo: světlo jím prochází a láme se a sklo odráží model;
- kov a leštěné plochy odrážejí zbytek modelu;
- světelné panely svítí jako panely, s měkkými stíny.

Je to mnohem pomalejší než {{ui:Rychlý}}: každý průchod znovu sleduje světlo pro každý pixel. Obrázek zpočátku zrní a s přibývajícími vzorky se vyčistí, proto začněte malou velikostí ({{ui:Velikost pohledu}}, {{ui:Náčrt}}) a zvolte {{ui:Časový limit}}: až vyprší, obrázek v dosavadním stavu se zachová. {{ui:Zastavit}} jej také zachová. První průchod čeká, dokud prohlížeč nepřipraví sledování paprsků.

Pokud prohlížeč má WebGPU, je sledování paprsků vlastní částí CadCraftu a běží na grafické kartě; řádek pod obrázkem uvádí {{ui:Sledování paprsků na grafické kartě (WebGPU)}}. Po {{ui:Zastavit}} nebo vypršení časového limitu {{ui:Pokračovat}} pokračuje se stejným obrázkem, dokud nemá všechny vzorky; změna nastavení nebo nové stisknutí {{ui:Vykreslit}} začne znovu od začátku. Bez WebGPU se obrázek sleduje pomocí WebGL (řádek to uvádí) a {{ui:Pokračovat}} se nenabízí.

:::linux
Firefox a většina nastavení Chrome na Linuxu zatím nemá WebGPU, takže tam vysoká kvalita používá WebGL.
:::

V tomto režimu se hrany nekreslí, texturu z knihovny ukazují barvu a drsnost, ale ne svůj reliéf (materiál vytvořený v [uzlech](topic:shading#in-high-quality-pictures) ukáže svou normálu a reliéf), a řez se provede na modelu, než obrázek začne.

{{ui:Odšumit (odstraní zrno zbylé po vzorcích)}} je ve výchozím stavu zapnuto: když je obrázek hotov nebo zastaven, zbylé zrno odstraní neuronová síť navržená pro tento účel (publikovaná síť Intel Open Image Denoise, spuštěná na vašem počítači: na grafické kartě, jinak na procesoru). Obrázek s malým počtem vzorků vyjde čistý; {{ui:Zobrazit}} › {{ui:Obraz před odšuměním}} ukáže obrázek tak, jak byl vykreslen.

## Vykreslení v pohledu

Pracovní prostor {{ui:Vykreslit}} spouští sledování paprsků přímo v pohledu: když pohled otočíte, upravíte model nebo změníte světlo, začne znovu hned. {{ui:Oblast}}: přetáhněte obdélník a vykreslí se jen on; {{ui:Celý pohled}} se vrátí zpět. {{ui:Zaostřit}}: klikněte na to, co má být ostré, a hloubka ostrosti zaostří tam. {{ui:Detail}} určuje, kolik pixelů pohledu se vykreslí (méně je rychlejší). {{ui:Pozastavit}} zastaví a pokračuje. Vyžaduje WebGPU: bez něj pracovní prostor to uvede a {{ui:Export}} › {{ui:Vykreslit obrázek…}} stále funguje.

## Oblohy a profily světel na grafické kartě

S WebGPU má vysoká kvalita dvě další oblohy:

- {{ui:Fyzikální obloha}} vypočítá denní světlo z výšky slunce: sytě modrá nad hlavou, světlý pás u horizontu a slunce, které je při nízkém postavení teplejší a slabší. {{ui:Zákal}} jde od velmi jasného dne (2) po zamlžený (10).
- {{ui:Obrázek oblohy (HDRI)}} osvětlí model panoramatickým obrázkem skutečného místa. {{ui:Vyberte obrázek…}} přijme soubor `.hdr` nebo `.exr` v ekvirektangulárním formátu; {{ui:Otočit}} jej otočí kolem modelu a {{ui:Jas obrázku}} jej zesvětlí nebo ztmaví. Obrázek nese vlastní slunce, takže slunce modelu se nepřidává. Zůstává zachován jen dokud je stránka otevřená: po znovuotevření jej vyberte znovu.

Každá lampa v seznamu {{ui:Lampy}} může dostat profil světla výrobce: {{ui:Profil IES…}} načte soubor IES (LM-63) a lampa pak vrhá světlo tak, jak to dělá dané svítidlo (úzké bodové světlo, nástěnný osvětlovač). Každá lampa se stejným názvem jej použije a lampa si zachová vlastní jas. Kliknutím na název profilu jeho použití zrušíte.

Okna z čistého skla pomáhají světlu oblohy najít cestu do místnosti, takže vnitřní obrázky pod oblohou se vyčistí dříve.

{{ui:Rychlý}} režim a WebGL sledování paprsků zobrazují {{ui:Fyzikální obloha}} a {{ui:Obrázek oblohy (HDRI)}} jako jasnou oblohu a profily světel ignorují.

## Kamera

{{ui:Kamera}} nastaví obrázek jako fotografii:

- {{ui:Expozice}}: ponechte {{ui:Posuvník jasu}}, nebo zvolte {{ui:Nastavení kamery}} a nastavte {{ui:Clona (f-stop)}}, {{ui:Doba závěrky}} a {{ui:ISO}} jako na fotoaparátu; EV vedle nich je obvyklá hodnota expozice. f/16 při 1/100 s a ISO 100 odpovídá slunnému dni; tmavší scéna chce širší clonu, pomalejší závěrku nebo vyšší ISO. Funguje to ve všech režimech.
- {{ui:Hloubka ostrosti}} rozmaže, co je blíže nebo dál než {{ui:Vzdálenost zaostření (m)}}, jak by to udělal objektiv s touto clonou (nechte prázdné, chcete-li zaostřit na to, co je uprostřed pohledu); {{ui:Tvar clony}} dá rozostřeným světlům kulatý nebo lamelový tvar.
- {{ui:Dvoubodová perspektiva (svislé čáry zůstanou svislé)}} srovná kameru a posune obrázek, jako to dělá architektonický objektiv tilt-shift, takže se stěny nekloní, když se díváte nahoru nebo dolů na budovu.
- {{ui:Vyvážení bílé}} určuje, která barva světla se zobrazí jako bílá: nižší (například 3000 K) pro teplé světlo lamp, vyšší pro stín a zatažené dny.
- {{ui:Promítání}}: {{ui:Panorama 360°}} vytvoří obrázek 2:1 všeho kolem kamery pro prohlížeče panoramat; {{ui:Stereo panorama 360°}} složí panorama pro levé a pravé oko pro headsety; {{ui:Kubická mapa (6 stěn)}} vytvoří šest čtvercových pohledů v mřížce 3 × 2. Šířka se převezme z {{ui:Velikost}}.

Promítání, hloubka ostrosti, dvoubodová perspektiva a vyvážení bílé potřebují sledování paprsků na grafické kartě (WebGPU), takže se zobrazují jen ve {{ui:Vysoká kvalita}}.

## Dokončení obrázku

{{ui:Obraz}} upraví obrázek ve vysoké kvalitě jako fotografii a každé ovládání změní hotový obrázek okamžitě, bez nového vykreslení:

- {{ui:Vzhled (převod pohledu)}}: {{ui:ACES filmový}} (obrázek jako dříve), {{ui:AgX}} (měkčí, zachová barvu ve velmi jasném světle), {{ui:Filmový}} (jemná filmová křivka) nebo {{ui:Standardní}} (prostý, jasné světlo se ořízne na bílou).
- {{ui:Kontrast}} a {{ui:Komprese světel}} (vrátí detail ve velmi jasných částech).
- {{ui:Záře}} (měkký lesk kolem jasných světel), {{ui:Oslnění}} se svými {{ui:Paprsky oslnění}} (hvězdicové paprsky z nejjasnějších bodů) a {{ui:Vinětace}} (tmavší rohy).
- {{ui:Barevná tabulka (.cube)…}} použije barevnou úpravu ze souboru `.cube` se svou {{ui:Síla barevné tabulky}}; stejně jako obrázek oblohy zůstává zachována jen dokud je stránka otevřená.

## Uložení obrázku

{{ui:Uložit jako}} vedle {{ui:Uložit}} vybere soubor: {{ui:PNG}}, {{ui:JPEG}} nebo {{ui:WebP}} pro sdílení (JPEG a WebP jen tam, kde je prohlížeč umí zapsat), a po vysokokvalitním vykreslení na grafické kartě také:

- {{ui:PNG, 16 bitů}}: upravený obrázek s jemnějšími přechody odstínů, pro tisk nebo další úpravy.
- {{ui:EXR, všechny vrstvy (32bitová plovoucí desetinná čárka)}}: obrázek tak, jak byl vykreslen (lineární světlo, bez úpravy), s každým prvkem vykreslení a skupinou světel jako vlastní vrstvou, pro kompoziční programy.
- {{ui:Soubor vykreslení (.ccrender, pro pozdější úpravu)}}: vše, co dialog potřebuje, aby obrázek znovu smísil a upravil. {{ui:Otevřít soubor vykreslení…}} jej vrátí i s jeho směsí a úpravou, bez nového vykreslení.

## Smíchání světel po vykreslení

Před stisknutím {{ui:Vykreslit}} zapněte {{ui:Míchání světel (po vykreslení změňte barvu a jas každého světla)}}. Když je obrázek hotový (nebo zastavený), {{ui:Smíchat obraz}} vypíše jeho světla do skupin: oblohu, slunce a lampy podle názvu (každá lampa se stejným názvem je jedna skupina). Vypněte skupinu, dejte jí barvu nebo ji zesvětlete či ztmavte a obrázek se změní okamžitě, bez nového vykreslení. {{ui:Uložit směs}} uchová směs pod názvem, který později vyberete; {{ui:Jak vykresleno}} se vrátí k obrázku tak, jak byl vytvořen. {{ui:Uložit}} uloží smíchaný obrázek.

{{ui:Prvky vykreslení (albedo, normály, hloubka, difuze, odraz, průchod, vyzařování, ID)}} uchová i části obrázku. {{ui:Zobrazit}} přepne pohled na jednu z nich: barvy povrchů (albedo), normály, hloubku, difuzní, odražené a propuštěné světlo (každé přímé i nepřímé), to, co září, a oblohu, a barvu na objekt nebo materiál pro tvorbu masek.

Obě možnosti udržují další vrstvy na grafické kartě. Při velkých velikostech na grafické kartě nemusí být dost místa; dialog to řekne a menší velikost pomůže.

## Fronta vykreslování

Po nastavení vysoké kvality {{ui:Přidat tento obrázek do fronty}} v {{ui:Fronta vykreslování}} uchová obrázek tak, jak je nyní nastaven; {{ui:Přidat tuto animaci do fronty}} v dialogu videa udělá totéž pro celou animaci, vykreslenou snímek po snímku. {{ui:Spustit frontu}} je vykreslí jeden po druhém na tomto počítači a {{ui:Uložit}} vedle každého hotového jej stáhne. Zavření stránky frontu nezruší: otevřete stejný model a pokračuje tam, kde skončila. Fronta vyžaduje WebGPU.

## Mlha, kouř, šum a kaustiky

Tyto nastavení jsou v {{ui:Mlha, kouř a šum}} a fungují ve {{ui:Vysoká kvalita}} na grafické kartě; ostatní enginy je nemají.

- {{ui:Mlha a opar}} naplní vzduch až do dané výšky mlhou, kterou osvětlují slunce, obloha a lampy. {{ui:Jak daleko je vidět, v metrech}} určuje, jak hustá je (asi 100 m je lehký opar, 20 m hustá mlha), {{ui:Výška mlhy nad zemí, v metrech}} je, kde končí, a {{ui:Světelné paprsky}} říká, jak moc mlha zesvětlí směrem ke světlu. Sluneční světlo opouští mlhu na jejím vrcholu, takže tam, kde slunce prochází oknem nebo mezi budovami, uvidíte světelné paprsky.
- {{ui:Kouř nebo mrak}} přidá jeden objem kouře nebo mraku osvětlený jako mlha. {{ui:Druh}} je {{ui:Mrak}}, {{ui:Kouřový sloup}} nebo {{ui:Ze souboru objemu (.ccvol)}}, vlastní mřížkový formát CadCraftu. {{ui:Detail}} a {{ui:Variace}} mění vytvořený mrak nebo sloup; {{ui:Velikost jeho nejdelší strany v metrech (0 = velikost modelu)}}, {{ui:Posun X (m)}}, {{ui:Posun Y (m)}}, {{ui:Posun Z (m)}} a {{ui:Otočit}} jej umisťují (začíná uprostřed modelu), {{ui:Tloušťka}} jej zhustí, {{ui:Záře vpřed}} jej zesvětlí směrem ke světlu a {{ui:Barva}} jej obarví. Soubor objemu se zachová jen dokud je stránka otevřená, stejně jako obrázek oblohy.
- {{ui:Zastavit dřív tam, kde je obraz čistý (adaptivní vzorkování)}} nedá dalším vzorkům pixely, které se ustálily, takže zbytek obrázku se dokončí dříve. {{ui:Přijatelný šum}} je, kolik zrna zbyde, když pixel přestane. Řádek pod obrázkem uvádí, kolik vzorků dostal pixel v průměru.
- {{ui:Kaustiky (světlo lomené sklem nebo odražené zrcadly)}} sleduje světlo z lamp a slunce, takže jasná skvrna pod skleněnou koulí nebo odraz zrcadla na zdi vyjdou čisté, ne zrnité. Je vypnuto, když jsou zapnuty mlha, kouř, míchání světel po vykreslení nebo prvky vykreslení, a je určeno pro obrázky, ne pro panoramata 360°, animace nebo pracovní prostor Vykreslit.

## Jak dlouho to trvá

Obrázek vzniká na vašem počítači, na jeho grafické kartě; nic se nenahrává. Doba závisí na kartě. Čas roste s počtem průchodů a pixelů: {{ui:Nejlepší}} má šestnáctinásobek průchodů oproti {{ui:Náčrt}} a obrázek 4K má asi čtyřikrát více pixelů než Full HD. Počítač bez grafické karty také vykresluje, jen pomaleji.

:::note
Pokud dialog říká, že prohlížeč nemůže vykreslovat obrázky, prohlížeč nemá WebGL 2. Aktualizujte jej nebo zapněte hardwarovou akceleraci v jeho nastavení.
:::
