---
title: Řešení potíží
summary: Příznaky, příčiny a opravy od prázdného 3D pohledu po importy ve špatné velikosti, se zprávami, které ModelCraft zobrazuje.
keywords: problém, potíže, chyba, nefunguje, prázdný, webgl, grafika, pomalé, zpráva, import selhal, špatná velikost, nelze vybrat, dotyk, klávesy nefungují, ztracená práce
from: 6e7394be
---

## 3D pohled je prázdný

**Příznak:** střed obrazovky zůstává prázdný, nebo ukazuje jen barvu pozadí, a kliknutí na nástroje nic neudělá.

**Příčina:** ModelCraft kreslí pomocí WebGL 2, 3D grafiky prohlížeče. Chybí, když je prohlížeč starý, když je vypnuté hardwarové zrychlení, nebo když je ovladač grafiky blokován.

**Oprava:**

:::chromium
1. Otevřete nastavení prohlížeče a hledejte "hardwarová akcelerace".
2. Zapněte "Použít hardwarovou akceleraci, pokud je k dispozici" a znovu spusťte prohlížeč.
3. Pokud je už zapnuto, napište do adresního řádku `chrome://gpu` (v Edge `edge://gpu`) a v seznamu hledejte "WebGL2". Pokud je uvedeno jako zakázáno, aktualizujte ovladač grafiky.
:::

:::firefox
1. Otevřete **Nastavení**, pak **Obecné** a přejděte na "Výkon".
2. Odškrtněte "Použít doporučená nastavení výkonu", pak zaškrtněte "Použít hardwarovou akceleraci, pokud je k dispozici". Restartujte Firefox.
3. Pokud to stále nefunguje, napište do adresního řádku `about:support` a v sekci "Grafika" hledejte WebGL 2.
:::

:::safari
Aktualizujte macOS a Safari. Novější verze Safari mají WebGL 2 vždy zapnuté. Pokud jste měnili experimentální funkce v **Safari**, pak **Nastavení**, pak **Pokročilé** (nebo **Feature Flags**), obnovte je.
:::

Na pracovním počítači, ve vzdálené ploše nebo virtuálním stroji může být 3D grafika zablokována nastavením. Zkuste jiný počítač. Viz [Prohlížeče a počítače](common:browsers).

## Klávesy nefungují, nebo píšou do pole

**Příčina:** fokus klávesnice je v poli panelu: seznam {{ui:Plochy}} v {{ui:Styl}}, nastavení slunce, pole {{ui:Název}} v {{ui:Informace o prvku}}, nebo výběr jednotek. Písmena a šipky pak směřují do tohoto pole.

**Oprava:** klikněte do 3D pohledu a stiskněte klávesu znovu. Klávesy nefungují ani při otevřeném dialogu.

## Psaní čísla nic neudělá

- **Zatím žádný směr.** Napsaná délka jde tím směrem, kam ukazuje ukazatel od prvního kliknutí. Pohněte ukazatelem trochu ve směru, který chcete, a pak napište.
- **Špatný okamžik.** Většina nástrojů přijme napsanou hodnotu až po prvním kliknutí: nejprve klikněte na první roh, plochu nebo bod, od kterého se pohybuje. {{ui:Kružnice}} a {{ui:Mnohoúhelník}} přijmou počet stran před prvním kliknutím.
- **"Zadejte délku, například 3m, 10'6" nebo 4m,3m."** ModelCraft ji nedokázal přečíst. Zkontrolujte desetinnou čárku (`2,5`): použijte tečku.

## Tvar začne na špatném místě na dotykové obrazovce

**Příznak:** prstem je první obdélník v pořádku, ale další obdélník, kružnice nebo čára začne tam, kde skončil váš předchozí dotyk, místo tam, kde jste se dotkli.

**Příčina:** chyba v této verzi: na dotykové obrazovce si nástroj pamatuje poslední bod přichycení z předchozího gesta.

**Oprava:** před každým novým tvarem znovu klepněte na tlačítko nástroje na panelu nástrojů. Nástroj se tím spustí znovu a první bod dopadne tam, kde se dotknete.

## Úprava jedné skupiny změnila druhou

**Příznak:** zkopírovali jste skupinu pomocí {{ui:Přesunout}} a {{key:Ctrl}}, otevřeli jednu kopii a upravili ji, a druhá kopie se změnila také. {{ui:Strom}} zobrazuje obě se stejným názvem.

**Příčina:** v této verzi kopírování skupiny vytvoří druhé umístění stejné skupiny, stejně jako u komponenty. Tlačítko {{ui:Vytvořit samostatnou kopii}} ModelCraftu se nabízí jen u komponent.

**Oprava:** vyberte kopii, kterou chcete změnit, klikněte na {{ui:Vytvořit komponentu}} v {{ui:Informace o prvku}}, pak na {{ui:Vytvořit samostatnou kopii}}. Ta kopie teď má vlastní obsah. Nebo ji {{ui:Rozložit}}.

## Tlač/tah nedělá to, co jsem čekal

- **"Tlač/tah pracuje s plochou. Klikněte na plochu."** Klikli jste na hranu nebo prázdné místo. Najeďte, dokud se plocha nezvýrazní, a pak klikněte.
- **Plocha je uvnitř skupiny.** Nejprve skupinu otevřete dvojklikem.
- **Okno neprořízlo zeď.** Obdélník musí být nakreslen na ploše zdi, ne před ní, a zeď musí mít zadní plochu. Viz [Vyříznutí otvoru ve zdi](topic:openings#if-it-did-not-cut-through).
- **Dva kvádry se překrývají bez sloučení.** Tělesa vtlačená do sebe se v této verzi navzájem neřežou ani nespojují.

## Čára nebo tvar nevytvořily plochu

Plocha se vyplní jen tehdy, když hrany uzavřou rovnou smyčku. Zkontrolujte, zda se poslední bod přichytil k prvnímu ("Koncový bod") a zda všechny hrany leží v jedné rovině. Smyčka mírně mimo rovinu zůstane jako čáry. Nakreslete jednu její hranu znovu a přichyťte ji k rohům.

## Nelze vybrat nebo smazat plochu

- S {{ui:Vybrat}} vezme klik poblíž hrany hranu. Klikněte blíž ke středu plochy.
- {{ui:Guma}} plochy nevybírá. Vyberte plochu a stiskněte {{key:Delete}}, nebo smažte jednu z jejích hran.
- Pokud patří do skupiny nebo komponenty, klik vybere celou věc. Dvojklikem ji otevřete.

## "Nejprve něco vyberte k přesunutí, nebo na to klikněte."

{{ui:Přesunout}}, {{ui:Otočit}} a {{ui:Měřítko}} potřebují něco, s čím pracovat: nejprve to vyberte, nebo spusťte nástroj kliknutím na samotnou věc (ne na prázdné místo nebo vodítko).

## "Nejprve vyberte geometrii (přetáhněte okno, nebo třikrát klikněte pro výběr všeho propojeného)."

{{key:G}} a {{key:Shift+G}} potřebují výběr. Vodítka nelze seskupit.

## Šipky obíhají místo uzamčení

Zámky fungují jen po prvním kliknutí kreslicího nebo úpravového nástroje. {{ui:Tlač/tah}} zámky nemá a v {{ui:Otočit}} nemění natočení. Jinak šipky obíhají pohled.

## Esc na celou obrazovku

Na celé obrazovce může prohlížeč použít první {{key:Esc}} k opuštění celé obrazovky. Stiskněte {{key:Esc}} znovu pro zrušení nástroje.

## Žádné prostřední tlačítko

Stiskněte {{key:O}} pro {{ui:Obíhat}} a táhněte, nebo použijte šipky. Viz [Obíhání, posun a zoom](topic:orbit-pan-zoom#without-a-middle-button).

## Importy

| Zpráva | Co dělat |
|---|---|
| "ModelCraft importuje SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG a DXF. … není žádný z těchto." | Exportujte model z jiného programu v jednom z těchto formátů |
| "Tento soubor má více než 300 MB." | Zjednodušte nebo rozdělte model v jiném programu |
| "…příliš velký na modelování zde (více než 2 miliony vrcholů)." | Totéž |
| "Tento soubor .gltf potřebuje "…"…" | Přetáhněte `.gltf` spolu s jeho soubory `.bin` a textur, nebo otevřete verzi `.glb` |
| "Tento soubor glTF potřebuje rozšíření …, které ModelCraft zatím nečte." | Exportujte znovu z jiného programu bez tohoto rozšíření (např. textury KTX2) |
| OBJ se naimportuje bez barev nebo textur | Přetáhněte `.obj` spolu s jeho `.mtl` a obrázky |
| "Tento soubor Alembic používá starou strukturu HDF5…" | Uložte jej znovu z jiného programu jako soubor Ogawa Alembic |
| FBX se naimportuje bez textur | Přetáhněte `.fbx` spolu s jeho obrázky textur, nebo při exportu vložte média |
| "Tento soubor FBX je verze …, kterou ModelCraft nečte" | Exportujte znovu jako FBX 2011 nebo novější |
| STL nebo PLY se naimportuje 1,000krát příliš velký nebo příliš malý | STL se čte jako milimetry a PLY jako metry: změňte jeho měřítko (viz [Otočení a měřítko](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Toto není soubor Collada (.dae)…" nebo "…není správně utvořené XML…" | Soubor je poškozený nebo není Collada. Exportujte jej znovu |
| "Tento soubor Collada nemá geometrii, kterou ModelCraft umí importovat." | Obsahuje jen kamery, světla nebo odkazy na jiné soubory |
| "Toto je binární DXF. Uložte jej jako ASCII DXF a zkuste to znovu." | Uložte jej znovu z CAD programu jako ASCII |
| "Toto není výkres DWG…" | Soubor není DWG, nebo je poškozený |
| "Tento výkres nelze přečíst (…). Může být poškozený, nebo uložený ve verzi DWG, kterou čtečka nezvládá…" | Závorky uvádějí důvod. Uložte jej z CAD programu jako DXF, nebo jako DWG z AutoCADu 2000 až 2018 |
| "Tento výkres sahá víc než 10,000 km od svého počátku…" | Přesuňte výkres blízko 0,0 v CAD programu |

### Import má špatnou velikost nebo leží na boku

- **OBJ:** OBJ nemá jednotku; ModelCraft čte metry. Model v milimetrech se naimportuje 1000krát příliš velký: [změňte jeho měřítko](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) o `0.001`; model v palcích o `0.0254`.
- **OBJ na boku:** ModelCraft očekává soubory OBJ s osou Y nahoru. Soubor zapsaný s osou Z nahoru se naimportuje vleže. Otočte jej o 90° kolem červené osy: klikněte na střed {{ui:Otočit}} na plochu, která směřuje podél červené, nebo soubor otevřete v jeho programu a exportujte s osou Y nahoru.
- **DWG nebo DXF:** v dialogu "Jednotky výkresu" jste zvolili špatnou jednotku. Vraťte to zpět a importujte znovu.

## Otevírání souborů

| Zpráva | Co dělat |
|---|---|
| "Tento soubor není model ModelCraftu (není to JSON)." | Pro jiné formáty použijte {{ui:Import}} |
| "Toto není soubor ModelCraftu, který můžeme otevřít: …" | Soubor je poškozený nebo byl změněn ručně |
| "Tento model uložil novější ModelCraft…" | Otevřete jej v novější verzi |
| "Tento soubor má více než 200 MB." | Model je zde příliš velký na otevření |

## Ztratil jsem práci

ModelCraft sám od sebe neukládá do souboru. Když zavřete nebo znovu načtete kartu s neuloženými změnami, prohlížeč se nejprve zeptá ("Leave site?" nebo "Reload site?"); zvolte zůstat a uložit. Nový a Otevřít se také ptají ("Unsaved changes"). Pokud prohlížeč nebo počítač spadl, znovu otevřete ModelCraft ve stejném prohlížeči: nabídne vám zpět neuloženou práci ("Recover your work?"; viz [Obnovení práce](common:recover)). Ukládejte často pomocí {{key:Mod+S}}.

## Složka stažených souborů se plní kopiemi

Každé uložení je nové stažení, pojmenované `Untitled (1).modelcraft`, `Untitled (2).modelcraft` a tak dále. Smažte staré, nebo nastavte prohlížeč, aby se ptal, kam uložit každý soubor, a starý soubor přepište sami. Viz [Otevření, uložení, import a export](topic:files#save-a-model).

## Je to pomalé

- Každý krok funkce zpět uchovává kopii modelu (a [síť](topic:meshes) uchovává jen to, co se změnilo), takže u velmi velkého importu geometrie tlač/tah trvá každá úprava déle. Rozložte nebo smažte, co nepotřebujete, uložte a znovu otevřete: opětovné otevření také vymaže historii funkce zpět.
- Sluneční stíny stojí nejvíc. Při modelování odškrtněte {{ui:Slunční stíny}}.

## Žádné stíny

{{ui:Slunční stíny}} jsou vypnuté, slunce je v čase, který jste zvolili, pod obzorem ("V tuto dobu je slunce pod obzorem."), nebo je styl {{ui:Drátový}}, který stíny nekreslí.

## "Tento prohlížeč nepovolil celou obrazovku."

Některé prohlížeče a vložené zobrazení celou obrazovku odmítnou. Použijte místo toho vlastní celou obrazovku prohlížeče ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft se bez připojení neotevře

ModelCraft se otevře offline, jen pokud byl uložen pro práci offline v tomto prohlížeči: tlačítko v horní liště musí ukazovat {{ui:Připraveno offline}}. Otevřete jej online a klikněte na {{ui:Uložit pro offline}}. Pokud tlačítko ukazuje {{ui:Nepodařilo se uložit}}, klikněte na něj znovu při lepším připojení; {{ui:Offline není dostupné}} znamená, že toto okno (soukromé okno nebo spravovaný počítač) nemůže kopii uchovat. Viz [Práce offline](common:offline).
