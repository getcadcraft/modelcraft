---
title: Přechod od jiných modelářů
summary: Jak návyky z modelování tažením a posunem odpovídají ModelCraftu, klávesa po klávese, a rozdíly, na které lidé narazí.
keywords: přechod, migrace, známé, rozdíly, modelář tažením, skp, zkratky, návyky, porovnání, pole měření, strom objektů, informace o prvku
from: 74ffd4ac
---

Pokud jste modelovali v SketchUpu, ModelCraft vám bude připadat povědomý: stejná představa ploch a tažení a posunu, stejná písmena nástrojů, pole pro hodnoty, do kterého píšete bez klikání, odvozování s červenou, zelenou a modrou osou, skupiny, komponenty, strom objektů, informace o prvku a scény. Tato stránka vypisuje, co se přenáší přímo a, důležitější, co ne.

## Návyky, které se přenášejí

| Jste zvyklí na | V ModelCraftu |
|---|---|
| Stisknete Space pro Vybrat, L pro Úsečku, R pro Obdélník, C pro Kružnici | Totéž: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Stisknete P pro Tlač/tah, M pro Přesunout, Q pro Otočit, S pro Měřítko, E pro Gumu, T pro pásmo | Totéž: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Stisknete O pro otáčení pohledu, H pro posun, Z pro zoom, Shift+Z pro zoom na rozsah | Totéž: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Stisknete G pro vytvoření komponenty | Totéž: {{key:G}}. {{key:Shift+G}} vytvoří skupinu |
| Napíšete do pole měření, aniž na něj kliknete | Totéž, v poli hodnot dole. Stiskněte {{key:Enter}} |
| Napíšete `4m,3m` pro obdélník, `12s` pro strany | Totéž |
| Napíšete `3x` nebo `/3` po kopii přesunutím | Totéž; funguje i `*3` |
| Napíšete `[x,y,z]` nebo `<dx,dy,dz>` pro bod nebo posun | Totéž |
| Napíšete holé číslo do modelu v palcích a dostanete palce | Totéž |
| Prostřední tlačítko tažením pro otáčení pohledu, Shift a prostřední tažení pro posun, kolečko pro zoom u kurzoru | Totéž |
| Dvojklik s Tlač/tah pro opakování vzdálenosti | Totéž |
| Šipky pro zámek červené, zelené, modré a rovnoběžnosti | Totéž: {{key:Right}} červená, {{key:Left}} zelená, {{key:Up}} modrá, {{key:Down}} rovnoběžná |
| Držení Shiftu pro zámek odvození | Totéž |
| Ctrl (Option na Macu) pro kopírování při pohybu | {{key:Ctrl}}, {{key:Mod}} nebo {{key:Alt}}, na jakémkoli počítači |
| Shift pro přepnutí, Ctrl pro přidání, Shift+Ctrl pro odebrání z výběru | Totéž; na Macu použijte {{key:Mod}} tam, kde je psáno Ctrl |
| Okno zleva doprava, křížení zprava doleva | Totéž |
| Nástroj Kóta pro popisky délek | {{key:D}} a víc: zadejte do kóty novou délku a model se podle ní přizpůsobí. Viz [Kóta a změna velikosti](topic:dimensions) |
| Dvojklik na plochu pro plochu s hranami; trojklik pro všechny spojené | Totéž |
| Dvojklik na skupinu pro úpravy; Esc pro zavření | Totéž |
| Nakreslete čáru přes plochu, aby se rozdělila; smažte hranu mezi souhlasnými plochami, aby se spojily | Totéž |
| Protáhněte obdélník okna přes zeď, aby ji prořízl | Totéž |
| Zadní plochy v modrošedé; Obrátit plochy | Stejná barva; {{ui:Reverse face}} v {{ui:Entity info}} |
| Scény jako karty nad pohledem, Page Up a Page Down | Totéž, s {{ui:Play}} v panelu {{ui:Scenes}} |
| Stíny podle data, času, zeměpisné šířky a délky, se severem na zelené | Totéž, v panelu {{ui:Style}} |

## Rozdíly, na které lidé narazí

### Ukládání je stažení

Neexistuje žádné {{ui:Save}}, které by přepsalo soubor, který jste otevřeli, žádný dialog Uložit jako s názvem, žádné automatické ukládání a žádný záložní soubor. {{ui:Save}} ({{key:Mod+S}}) pokaždé stáhne nový soubor `.modelcraft`, obvykle do složky stažených souborů. Ukládejte často a soubory přejmenujte nebo přesuňte sami. Viz [Otevření, uložení, import a export](topic:files).

### Importuje soubory .skp, ale neukládá je

{{ui:Import}} čte soubory SketchUpu vlastní čtečkou ModelCraftu přímo na stránce: skupiny, komponenty, barvy, textury na plochách, značky a měkké hrany se přenesou. Viz [Formáty souborů podrobně](topic:formats#skp-files). ModelCraft nemůže uložit `.skp`: chcete-li se vrátit, exportujte z ModelCraftu formát Collada a importujte ho do SketchUpu.

### Žádná nabídka pravého tlačítka

Pravé tažení posouvá pohled; pravé kliknutí nedělá nic. Příkazy, které byste hledali v kontextové nabídce, jsou v {{ui:Entity info}} ({{ui:Reverse face}}, {{ui:Edit}}, {{ui:Explode}}, {{ui:Make unique}}, {{ui:Make component}}) a ve skupině {{ui:Organize}} na panelu nástrojů.

### Jednotky jsou ve stavovém řádku

Není tu žádná Informace o modelu ani výběr šablony. Volba jednotek je vpravo dole. Nový model začíná ve stopách a palcích v USA a jinde v milimetrech, podle nastavení jazyka vašeho prohlížeče. Desetinná místa se vždy píšou tečkou: `2.5m`, nikdy `2,5m`, protože čárka vždy odděluje hodnoty.

### Barva má vlastní materiály

{{ui:Paint}} ({{key:B}}) maluje plnými barvami a materiály v sekci {{ui:Materials}}: cihla, obklad, krytina, dřevo, kámen a další, které kreslí ModelCraft. Vlastní obrázek jako materiál zatím nahrát nelze; textury, které přicházejí s importovanými soubory, se zachovají. Viz [Malování barvami a materiály](topic:paint).

### Měřítko je rovnoměrné, bez úchytů

Měřítko nezobrazuje rámeček s úchyty. Klikněte na bod, který zůstane na místě (referenční bod), pak na novou velikost nebo zadaný koeficient. Vždy se škáluje rovnoměrně do všech směrů. Chcete-li natáhnout jedním směrem, použijte tažení/posun nebo přesun plochy, nebo v {{ui:Entity info}} přepište šířku, hloubku nebo výšku skupiny, případně [změňte velikost kótou](topic:dimensions).

### Otáčení si rovinu volí podle místa kliknutí

Není tu úhloměr, který by se přichytával k plochám, když šipkami vybíráte rovinu. Klikněte na střed na ploše, abyste se otáčeli v rovině té plochy, nebo na zemi, abyste se otáčeli kolem svislé osy. Šipkové klávesy před prvním kliknutím otáčejí pohled.

### Odvozování z bodů, nad kterými přejedete

ModelCraft se přichytává ke směrům os od **vašeho počátečního bodu** a k bodům, hranám a plochám pod kurzorem. Nesleduje směr z bodu, nad kterým jste jen přejeli (tečkované odvození „z bodu“). Chcete-li se zarovnat se vzdáleným rohem, zamkněte osu šipkou a přejeďte přes ten roh: uzamčený bod se k němu posune. Nebo umístěte [vodítko](topic:guides-measure).

### Rovnoběžka používá hranu, přes kterou jste přejeli před začátkem

Odvození rovnoběžnosti a kolmosti používá poslední hranu, přes kterou kurzor přešel **před prvním kliknutím**, ne hrany, nad kterými přejíždíte při kreslení. Viz [Odvozování a přichytávání](topic:inference#parallel-and-perpendicular).

### Kopie skupin jsou propojené

Kopírování skupiny pomocí {{ui:Move}} vytvoří druhé umístění stejné skupiny, takže úprava jedné změní obě, stejně jako u komponent. SketchUp skupiny dělá nezávislé. Viz [Řešení potíží](topic:troubleshooting#editing-one-group-changed-another).

### Mezerník neposouvá

{{key:Space}} vybírá {{ui:Select}}, jako v SketchUpu. V některých jiných webových aplikacích podržení mezerníku posouvá; tady ne. Místo toho posouvá pravé tažení.

### Dvouprstové posouvání přibližuje

Na touchpadu nastavte {{ui:Settings}} › {{ui:ModelCraft}} › Posouvání na touchpad: dva prsty otáčejí pohled, {{key:Shift}} a dva prsty posouvají, stažení prstů přibližuje. Viz [Otáčení, posun a zoom](topic:orbit-pan-zoom#on-a-trackpad).

Pokud vaše ruce znají klávesy Blenderu, nikoli SketchUpu, zvolte styl nabídky {{ui:Modeler}}: {{key:G}}, {{key:R}} a {{key:S}} působí na výběr najednou, {{key:E}} vytlačuje (tažení/posun), {{key:Shift+D}} duplikuje a lišta nabídek v záhlaví (File, Edit, View, Select, Add, Object, Mesh) nahrazuje panel nástrojů. Přicházíte-li ze SketchUpu, styl {{ui:Push-pull}} dává nabídku podobnou té jeho, nad stejnými písmeny nástrojů. Viz [Nabídky, klávesy a myš](topic:menus-keys-and-mouse).

### Tělesa zatlačená do sebe se neřežou

Tažení/posun řeže plochu za ní ve stejném objektu, ale dvě oddělená tělesa zatlačená do sebe se neprotnou. Není tu Protnout plochy ani {{ui:Nástroje těles}}.

### Co chybí

Volná kresba, Oříznout, Rozdělit a Vnější skořepina, vlastní obrázkové materiály, rozšíření a nástroj pro rozvržení listů nejsou v této verzi. [Ještě není hotovo](topic:not-built-yet) vypisuje, co dělat místo toho.

## Zkratky, které si prohlížeč nechává

ModelCraft běží v prohlížeči, takže některé zkratky patří prohlížeči, ne aplikaci. {{key:Mod+N}} otevře okno prohlížeče (použijte {{ui:New}}) a {{key:Mod+W}} zavře kartu. Pokud máte neuložené změny, prohlížeč se před zavřením zeptá. Viz [Klávesy, myši a touchpady](common:keys#shortcuts-the-browser-keeps).
