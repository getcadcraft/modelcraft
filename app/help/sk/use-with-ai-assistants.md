---
title: Používanie ModelCraft s AI asistentom
summary: Nechajte svojho AI asistenta alebo skript pozrieť sa na model a vytvoriť jednoduché telesá: oprávnenia, pripojenie cez CadCraft Studio a záznam aktivity.
keywords: ai, asistent, agent, mcp, model context protocol, skript, automatizácia, modelovanie, kváder, valec, vykresliť, rad vykresľovania, oprávnenia, odpojiť, aktivita
from: 629cd0b7
---

## Čo sa naučíte

Ako nechať AI asistenta (alebo skript, ktorý ste napísali) pracovať s ModelCraft a ako určiť, čoho sa smie dotýkať.

ModelCraft **nemá vlastnú AI** a nikam nič neposiela. Asistenta prinášate vy: ľubovoľný program, ktorý hovorí protokolom Model Context Protocol (MCP). ModelCraft mu len poskytuje nástroje a vy si vyberáte, ktoré.

## Zapnutie

1. Otvorte {{ui:Nastavenia}} (ozubené koliesko na paneli aplikácie alebo {{key:Mod+,}}) a prejdite na kartu {{ui:ModelCraft}}.
2. V časti {{ui:Asistenti}} zaškrtnite **Povoliť AI asistentom a skriptom používať ModelCraft**. Kým to neurobíte, je to vypnuté.
3. Vyberte, čo smie robiť: **Čítať** je na začiatku zaškrtnuté; zaškrtnite **Upraviť**, **Uložiť** alebo **Exportovať** len vtedy, keď ich potrebujete.

Nástroje mimo oprávnení, ktoré ste zaškrtli, asistentovi nie sú ponúkané, a ak si o niektorý predsa vyžiada, ModelCraft ho odmietne a zapíše do záznamu aktivity. Vypnutie prepínača ukončí naraz všetky pripojenia; {{ui:Obnoviť nastavenia ModelCraft}} ho vypne tiež.

## Pripojenie asistenta

Asistenti sa pripájajú cez **CadCraft Studio** na vašom počítači: Studio spúšťa malý server, ktorý dosiahne iba tento počítač, a chráni ho tokenom, ktorý pri každom spustení vytvorí. V Studiu zvoľte {{ui:Pripojiť asistenta}}, skopírujte adresu a token do svojho asistenta (Studio ukáže presné nastavenia, ktoré treba vložiť). Token nikdy nezdieľajte.

:::note
Karta prehliadača nemôže otvoriť pripojenie pre asistenta: v aplikáciách v prehliadači prepínač nemá účinok, kým nepoužijete CadCraft Studio na svojom počítači.
:::

## Vy máte kontrolu

- **Každá zmena je jeden krok späť**, označený menom asistenta pre ňu (napríklad "Asistent: kváder"). {{key:Mod+Z}} vráti naraz celú poslednú zmenu asistenta.
- **Viete, kedy je jeden pripojený.** Tlačidlo na paneli aplikácie počas pripojenia uvádza meno asistenta; kliknutím si pozriete, čo smie, alebo ho môžete {{ui:Odpojiť}}.
- **Aktivita.** {{ui:Nastavenia}} › {{ui:ModelCraft}} › {{ui:Asistenti}} › {{ui:Aktivita}} zobrazuje každé volanie: kedy, ktorý nástroj, splnené alebo odmietnuté. {{ui:Uložiť záznam}} si uchová kópiu.

## Čo môže asistent žiadať

| Nástroj | Oprávnenie | Čo robí |
|---|---|---|
| `app_info`, `model_describe` | Čítať | Jednotka modelu, veľkosť a každá skupina a komponent s tým, kde sa nachádza, či je to uzavreté teleso a jeho objem |
| `view_screenshot` | Čítať | Obrázok 3D pohľadu tak, ako sa zobrazuje |
| `box_add`, `cylinder_add` | Upraviť | Kváder alebo valec ako novú skupinu, na mieste a s veľkosťou, ktorú zadáte vy alebo asistent ("3m", "10'" alebo číslo v jednotke modelu) |
| `instance_move`, `instances_erase` | Upraviť | Presúva alebo maže skupiny a komponenty |
| `faces_list`, `materials_list` | Čítať | Plochy skupiny alebo voľnej geometrie (smer, plocha a stred každej); materiály a farby, ktorými môže maľovať |
| `push_pull` | Upraviť | Vytlačí alebo potiahne plochu, ako to robí {{ui:Tlač/ťah}} |
| `paint` | Upraviť | Maľuje plochy alebo celú skupinu farbou alebo materiálom |
| `group_make` | Upraviť | Vytvorí skupinu alebo komponent z voľných plôch a skupín |
| `scene_add`, `scene_show` | Upraviť | Uloží pohľad ako scénu; prejde na uloženú scénu |
| `mesh_add` | Upraviť | Objekt siete, z ktorého sa dá začať (kocka, guľa, valec …), tak ako ho pridáva pracovný priestor {{ui:Sieť}} |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Čítať / Upraviť | Zásobník modifikátorov siete: zrkadlenie, pole, delenie povrchu, zrazenie hrán a ďalšie; nič sa natrvalo neuplatní |
| `usd_export` | Exportovať | Model ako OpenUSD (.usda, .usdc alebo .usdz), tak ako ho zapíše uloženie modelu ako USD ([USD](topic:usd)); do priečinka, ktorý ste povolili v Studiu, inak ako stiahnutie |
| `render_still` | Exportovať | Vykreslený obrázok pohľadu alebo uloženej scény, tak ako ho vytvorí tlačidlo {{ui:Vykresliť}} v dialógovom okne {{ui:Vykresliť}}, s vašimi nastaveniami vykresľovania, pokiaľ nežiada iné (predvoľba scény: exteriér, interiér, rez, noc alebo automaticky; rýchle alebo vysoká kvalita, veľkosť, vzorky, obloha); PNG, ktoré môže pozrieť, alebo PNG, EXR či súbor vykreslenia v priečinku, ktorý ste povolili v Studiu ([Vykreslenie obrázka](topic:render)) |
| `render_queue` | Exportovať | Pridá obrázky vo vysokej kvalite do radu dialógového okna {{ui:Vykresliť}} (pohľad alebo uložené scény) a rad spustí; hotové obrázky idú do priečinka, ktorý ste povolili, alebo zostanú v {{ui:Rad vykresľovania}} v dialógovom okne {{ui:Vykresliť}}. Vyžaduje WebGPU |
| `link_push` | Upraviť | Aktualizuje model prepojený z iného programu (pozri [Udržanie modelu .3dm živým](topic:live-3dm-link)) |
| `link_status` | Čítať | Povie, či je prepojený model stále tu a kedy sa naposledy aktualizoval |
| `undo` | Upraviť | Vráti späť jeho vlastné kroky |

Telesá, ktoré asistent vytvorí, prichádzajú ako skupiny, takže sa nikdy nezlúčia s tým, čo ste nakreslili. Nástroj na uloženie modelu neexistuje: ukladanie zostáva na vás a exportovanie alebo vykresľovanie vyžaduje zaškrtnutú možnosť **Exportovať**. Vykreslenie model nemení; vykreslenie uloženej scény presunie pohľad na ňu, tak ako to robí {{ui:Scény}}.

## Ak niečo nefunguje

- **Asistent nevidí nástroje ModelCraft:** skontrolujte, či je prepínač zapnutý v tomto okne a či je okno otvorené v Studiu.
- **"vyžaduje oprávnenie na úpravu":** zaškrtnite **Upraviť** v časti {{ui:Asistenti}}, potom to skúste znova.
- **Chyby "401" alebo "token":** token sa zmenil (Studio sa reštartovalo alebo ste vytvorili {{ui:Nový token}}). Skopírujte nový token do nastavení asistenta.

## Pozri aj

- [Recepty pre AI asistentov](common:assistants-recipes): prepracované príklady, každý s nástrojmi, ktoré volá.
