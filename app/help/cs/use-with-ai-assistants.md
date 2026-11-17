---
title: Používání ModelCraftu s AI asistentem
summary: Nechte vlastního AI asistenta nebo skript prohlédnout model a vytvářet jednoduchá tělesa: oprávnění, připojení přes CadCraft Studio a záznam aktivity.
keywords: ai, asistent, agent, mcp, model context protocol, skript, automatizace, modelování, krabice, válec, vykreslit, fronta vykreslování, oprávnění, odpojit, aktivita
from: 629cd0b7
---

## Co se naučíte

Jak nechat AI asistenta (nebo skript, který jste napsali) pracovat s ModelCraftem a jak rozhodnout, čeho se smí dotýkat.

ModelCraft **nemá vlastní AI** a nic nikam neodesílá. Asistenta přinášíte vy: libovolný program, který umí Model Context Protocol (MCP). ModelCraft mu jen poskytuje nástroje a vy vybíráte, které.

## Zapnutí

1. Otevřete {{ui:Nastavení}} (ozubené kolo v horní liště nebo {{key:Mod+,}}) a přejděte na kartu {{ui:ModelCraft}}.
2. V části {{ui:Asistenti}} zaškrtněte **Povolit AI asistentům a skriptům používat ModelCraft**. Dokud to neuděláte, je vypnuto.
3. Vyberte, co smí dělat: **Čtení** je na začátku zaškrtnuté; **Úpravy**, **Uložení** nebo **Export** zaškrtněte, jen když je potřebujete.

Nástroje mimo zaškrtnutá oprávnění asistentovi nabídnuty nejsou. Pokud o některý přesto požádá, ModelCraft ho odmítne a zapíše to do záznamu aktivity. Vypnutím přepínače se okamžitě ukončí všechna připojení; {{ui:Obnovit nastavení ModelCraftu}} jej vypne také.

## Připojení asistenta

Asistenti se připojují přes **CadCraft Studio** na vašem počítači: Studio spouští malý server, ke kterému má přístup jen tento počítač, a chrání ho tokenem, který při každém spuštění vytvoří. Ve Studiu zvolte {{ui:Připojit asistenta}} a adresu i token zkopírujte do svého asistenta (Studio ukazuje přesná nastavení k vložení). Token nikdy nesdílejte.

:::note
Karta prohlížeče nemůže pro asistenta otevřít připojení: v prohlížečových aplikacích přepínač nemá žádný účinek, dokud nepoužijete CadCraft Studio na svém počítači.
:::

## Vy máte kontrolu

- **Každá změna je jeden krok zpět**, označený názvem, který pro ni asistent používá (například "Asistent: krabice"). {{key:Mod+Z}} vrátí celou poslední změnu asistenta.
- **Víte, kdy je připojen.** Tlačítko v horní liště pojmenuje asistenta, dokud je připojen; kliknutím zobrazíte, co smí dělat, nebo ho můžete **odpojit**.
- **Aktivita.** {{ui:Nastavení}} › {{ui:ModelCraft}} › {{ui:Asistenti}} › {{ui:Aktivita}} vypisuje každé volání: kdy, který nástroj, a zda proběhlo, nebo bylo odmítnuto. {{ui:Uložit záznam}} si ponechá kopii.

## Co může asistent požadovat

| Nástroj | Oprávnění | Co dělá |
|---|---|---|
| `app_info`, `model_describe` | Čtení | Jednotka modelu, velikost a každá skupina a komponenta s umístěním, zda je uzavřeným tělesem, a jeho objem |
| `view_screenshot` | Čtení | Obrázek 3D pohledu tak, jak je zobrazen |
| `box_add`, `cylinder_add` | Úpravy | Krabice nebo válec jako nová skupina na místě a v rozměru, které zadáte vy nebo asistent ("3m", "10'" nebo číslo v jednotce modelu) |
| `instance_move`, `instances_erase` | Úpravy | Přesouvá nebo maže skupiny a komponenty |
| `faces_list`, `materials_list` | Čtení | Plochy skupiny nebo volné geometrie (směr, plocha a střed každé z nich); materiály a barvy, kterými lze malovat |
| `push_pull` | Úpravy | Tlačí nebo táhne plochu, stejně jako {{ui:Tlač/tah}} |
| `paint` | Úpravy | Maluje plochy nebo celou skupinu barvou nebo materiálem |
| `group_make` | Úpravy | Vytvoří skupinu nebo komponentu z volných ploch a skupin |
| `scene_add`, `scene_show` | Úpravy | Uloží pohled jako scénu; přejde na uloženou scénu |
| `mesh_add` | Úpravy | Objekt sítě, od kterého lze začít (krychle, koule, válec …), tak jak jej přidává pracovní prostor pro sítě |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Čtení / Úpravy | Zásobník modifikátorů sítě: zrcadlení, pole, rozdělení povrchu, zkosení a další; nic se tím natrvalo neaplikuje |
| `usd_export` | Export | Model jako OpenUSD (.usda, .usdc nebo .usdz), tak jak jej zapisuje uložení modelu jako USD ([USD](topic:usd)); do složky, kterou jste ve Studiu povolili, jinak se soubor stáhne |
| `render_still` | Export | Vykreslený obrázek pohledu nebo uložené scény, stejný jako ten, který vytvoří tlačítko {{ui:Vykreslit}} v dialogu Vykreslit, s vašimi nastaveními vykreslování, pokud nežádá jiná (předvolba scény: exteriér, interiér, řez, noc nebo automaticky; rychle nebo ve vysoké kvalitě, velikost, vzorky, obloha); PNG, které si může prohlédnout, nebo PNG, EXR či soubor vykreslení do složky, kterou jste ve Studiu povolili ([Vykreslit obrázek](topic:render)) |
| `render_queue` | Export | Přidá obrázky ve vysoké kvalitě do fronty dialogu Vykreslit (pohled nebo uložené scény) a frontu spustí; hotové obrázky půjdou do složky, kterou jste povolili, nebo zůstanou pro vás ve frontě {{ui:Fronta vykreslování}} v dialogu Vykreslit. Vyžaduje WebGPU |
| `link_push` | Úpravy | Aktualizuje model propojený z jiného programu (viz [Udržení modelu .3dm živě](topic:live-3dm-link)) |
| `link_status` | Čtení | Sděluje, zda je propojený model stále k dispozici a kdy byl naposledy aktualizován |
| `undo` | Úpravy | Vrací zpět vlastní kroky |

Tělesa, která asistent vytvoří, se vloží jako skupiny, takže se nikdy nesloučí s tím, co jste nakreslili. Žádný nástroj model neukládá: ukládání zůstává na vás a export nebo vykreslení vyžaduje zaškrtnuté **Export**. Vykreslení model nemění; vykreslení uložené scény přesune pohled na ni, stejně jako {{ui:Scény}}.

## Když něco nefunguje

- **Asistent nevidí žádné nástroje ModelCraftu:** zkontrolujte, zda je přepínač v tomto okně zapnutý a zda je okno otevřené ve Studiu.
- **"vyžaduje oprávnění k úpravám":** zaškrtněte **Úpravy** v části {{ui:Asistenti}} a poté požádejte znovu.
- **Chyby "401" nebo "token":** token se změnil (Studio se restartovalo nebo jste zvolili {{ui:Nový token}}). Zkopírujte nový token do nastavení asistenta.

## Viz také

- [Recepty pro AI asistenty](common:assistants-recipes): propracované příklady, každý s nástroji, které volá.
