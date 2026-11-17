---
title: Živý pohled
summary: Okno vedle modelu, které zobrazuje model v reálném čase se sluncem a stíny a sleduje každou vaši změnu; procházejte jím a nastavte denní dobu a měsíc.
keywords: sdílet, panorama, 360, prohlídka, virtuální prohlídka, samostatný prohlížeč, offline prohlížeč, poslat klientovi, video, video procházky, rozptyl, rozptylování, tráva, louka, les, skály, rostliny, stromy, dav, malování rostlin, živý pohled, reálný čas, vykreslení v reálném čase, procházka, projít, pohled první osoby, prezentace, klient, druhá obrazovka, druhé okno, monitor, denní doba, slunce, roční období, měsíc, stíny, ambient occlusion, odrazy, odražené světlo, globální osvětlení, webgpu, webgl
from: fca3b0d6
---

{{ui:Export}} › {{ui:Živý pohled}} otevře panel nad aplikací, který zobrazuje model v reálném čase: oblohu a slunce podle místa a data vašeho modelu, sluneční stíny, vzhled a materiály, které jste plochám dali, lampy a světlo odražené od stěn a podlah. Sleduje, co děláte: otočíte pohled a otočí se i on, změníte model a o chvíli později se změna zobrazí. Nic se nenahrává.

## Otevření

1. Zvolte {{ui:Export}} › {{ui:Živý pohled}}. Panel se otevře v pravém dolním rohu.
2. Přetažením záhlaví panel přesunete, tažením rohu jej zvětšíte.
3. {{ui:Nové okno}} jej přesune do vlastního okna, pro druhou obrazovku. {{ui:Export}} › {{ui:Živý pohled v novém okně}} jej tam otevře hned. Pokud prohlížeč blokuje vyskakovací okna, otevře se jako panel.
4. {{ui:Zavřít}} jej zavře.

## Ovládací prvky

| Ovládání | Co to dělá |
|---|---|
| {{ui:Sledovat pohled}} | Zapnuto: živý pohled se dívá tam, kam se dívá pohled ModelCraftu. Procházení jej vypne |
| {{ui:Procházka}} | Procházka modelem (níže) |
| {{ui:Gravitace}} | Při procházce: stojíte na podlahách a vystupujete po schodech. Vypnuto: létáte |
| {{ui:Čas}} | Hodina dne, od 05:00 do 21:00. Slunce se při tažení posouvá |
| {{ui:Měsíc}} | Měsíc (21. den v měsíci), abyste viděli slunce v zimě i v létě |
| {{ui:Kvalita}} | {{ui:Podle tohoto počítače}} (co dostane [váš počítač](topic:your-machine)), nebo {{ui:Nízká}}, {{ui:Střední}} nebo {{ui:Vysoká}} |

Řádek dole říká, čím se pohled kreslí (WebGPU nebo WebGL 2), kvalitu a odražené světlo.

## Procházka modelem

1. Otočte hlavní pohled tam, kde chcete stát, a zvolte {{ui:Procházka}}. Stojíte na podlaze pod očním bodem pohledu, s výškou 1.6 m.
2. Klikněte do živého pohledu a potom použijte {{key:W}} {{key:A}} {{key:S}} {{key:D}} nebo šipky. Chcete-li běžet, držte {{key:Shift}}. Tažením se rozhlížíte.
3. Schody do výšky 40 cm vystoupáte; cokoli vyššího je stěna. Stěny vás zastaví a po nich se posouváte.
4. Pokud je {{ui:Gravitace}} vypnutá, létáte: {{key:E}} stoupáte nahoru, {{key:Q}} dolů.
5. {{key:Esc}} ukončí procházku.

## Rozptyl rostlin, skal a lidí

{{ui:Rozptyl}} na liště živého pohledu otevře panel rozptylu vedle obrázku. Sada rozptylu rozmisťuje položky z knihovny okolních prvků (stromy, keře, tráva, květiny, skály, lidé, auta) na část modelu. Položky se kreslí jen v živém pohledu: nejsou geometrií modelu a hlavní pohled je nezobrazuje.

1. **Vyplnění ploch:** v ModelCraftu vyberte plochy (nebo skupinu, například terén) a zvolte {{ui:Vyplnit výběr}}. Sada je pokryje.
2. **Malování:** zvolte {{ui:Malovat}} a přetáhněte přes živý pohled. Při vybraných plochách se barva nanese jen na ně; při žádném výběru na cokoli pod štětcem, včetně země. {{ui:Velikost štětce}} nastaví štětec; {{ui:Guma}} odstraní nanesená místa.
3. Zaškrtněte, co rozmístit. Číslo vedle každé položky je její váha: 3 a 1 znamená tři z první na každou jednu z druhé.

| Ovládání | Co to dělá |
|---|---|
| {{ui:Na m²}} | Kolik položek na každý čtvereční metr |
| {{ui:Odstup (m)}} | Žádné položky blíž k jiným objektům než toto, a žádné pod střechou nebo stolem. 0 to vypne |
| {{ui:Natočení (°)}} | Jak moc se každá položka náhodně natočí kolem svislé osy |
| {{ui:Nejstrmější (°)}} | Žádné položky tam, kde je povrch strmější |
| {{ui:Velikost}} | Nejmenší a největší velikost jako násobek vlastní velikosti položky |
| {{ui:Výška od, do (m)}} | Jen mezi těmito výškami (prázdné = libovolná) |
| {{ui:Naklánět podle povrchu}} | 0 nechá položky svisle; 1 je postaví kolmo ke svahu |
| {{ui:Semínko}}, {{ui:Zamíchat}} | Stejné semínko vždy dá stejný rozptyl; Zamíchat vybere jiné |

Sady se ukládají do souboru .modelcraft a při změně se řídí plochami, které pokrývají. Kolik položek živý pohled nejvýše nakreslí, určuje úroveň [vašeho počítače](topic:your-machine): 20 000 pro {{ui:Jen procesor}}, 100 000 pro {{ui:Grafická karta, základní}}, milion pro {{ui:Grafická karta, vysoká}}. Panel ukazuje, kolik položek je umístěno z kolika, které hustota požaduje: méně se jich umístí, když se dosáhne rozpočtu, nebo tam, kde je objekty vyloučí. Položky blízko kamery se kreslí jako ony samy; vzdálené jako jednoduché tvary v jejich barvách.

:::note
Rozptýlené položky jsou v živém pohledu (a v jeho procházce, panoramatech a samostatném prohlížeči). Vykreslení obrázku je zatím nekreslí.
:::

## Sdílení: panoramata, prohlídky, prohlížeč, video

{{ui:Sdílet}} na liště živého pohledu vytváří soubory z živého pohledu. Vše se vytváří na tomto počítači; nic se nenahrává.

| Volba | Co dostanete |
|---|---|
| {{ui:360° panorama}} | Obrázek 360° z místa, kde pohled stojí (nebo kde procházíte), jako ekvirektangulární PNG, které otevřou prohlížeče panoramat a většina fotografických webů |
| {{ui:Přidat toto místo do prohlídky}}, potom {{ui:Uložit prohlídku}} | Jedna webová stránka s panoramatem u každého místa a šipkami k místům, která každé vidí (stěna mezi nimi šipku skryje) |
| {{ui:Uložit prohlížeč}} | Jedna webová stránka s modelem v tomto vzhledu v reálném čase: otáčení, procházení a skok na uložené scény. Otevře se offline v prohlížeči s WebGPU nebo WebGL 2, ze složky, z USB disku nebo z e-mailu, bez instalace a bez účtu, a nenačítá nic z internetu |
| {{ui:Video trasy}} | Cesta kamery z časové osy (nebo uložené scény v pořadí) jako video v tomto vzhledu v reálném čase, ve velikosti živého pohledu: WebM nebo MP4, pokud je prohlížeč umí vytvořit, jinak očíslované obrázky v ZIPu |

Velikost panoramatu se řídí kvalitou: šířka 1024, 2048 nebo 4096 pixelů při Nízké, Střední a Vysoké kvalitě. Soubor prohlížeče má zhruba 5 MB plus model.

:::note
Prohlídka a prohlížeč jsou určeny k prezentaci, ne k úpravám: při uložení si zachovají model v podobě, v jaké byl.
:::

## Kvalita

| | Nízká | Střední | Vysoká |
|---|---|---|---|
| Sluneční stíny | jedna mapa stínů | tři kaskády | čtyři kaskády |
| Ambient occlusion (kontaktní stíny) | | ✓ | ✓, jemněji |
| Odrazy v kovu | | | ✓ |
| Záře (bloom) (když ji nastaví Vykreslit obrázek) | | ✓ | ✓ |
| Vyhlazení hran | FXAA | přes několik snímků (TAA) | přes několik snímků (TAA) |
| Odražené světlo | hrubé | jemnější | nejjemnější |

{{ui:Podle tohoto počítače}} zvolí Nízkou u počítače bez použitelné grafické karty, Střední s integrovaným grafickým čipem a Vysokou s oddělenou grafickou kartou. Nízká je určena pro notebook s 8 GB a bez grafické karty.

## Odražené světlo

Světlo, které se od osluněné stěny odráží na podlahu, a tmavší vnitřek místnosti počítá stejný sledovač paprsků, který vytváří [vykreslené obrázky](topic:render): v bodech modelu vykresluje malé panorama na pozadí na každém jádře procesoru. Zatímco pracuje, dolní řádek ukazuje {{ui:Odražené světlo: 40 %}}; až je hotovo, pohled je převezme. Po změně začne znovu.

:::note
Jde o přiblížení pro živý pohled, ne o vykreslený obrázek: drobné detaily mezi body dostávají odražené světlo nejbližších bodů. Pro hotový obrázek použijte [Vykreslit obrázek](topic:render).
:::

## Jas a barvy

Živý pohled používá stejný jas, vyvážení bílé, kontrast a převod pohledu (ACES, AgX, filmic nebo standardní) jako [Vykreslit obrázek](topic:render): nastavte je tam a živý pohled je převezme.

:::note
Prohlížeče se liší. Tam, kde prohlížeč má WebGPU (Chrome a Edge na Windows, macOS a ChromeOS, Safari 26), živý pohled jej používá; jinde (většina prohlížečů na Linuxu, starší systémy Apple) používá WebGL 2 a vypadá stejně.
:::
