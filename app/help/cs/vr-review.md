---
title: Prohlídka modelu ve VR brýlích
summary: Procházejte model v plné velikosti ve VR brýlích: skákejte, otáčejte se, měřte, řezejte jej, umisťujte problémy s obrázkem, zobrazte jej jako model na stole a potkejte ostatní z živé relace.
keywords: vr, virtuální realita, brýle, webxr, xr, pohlcující, quest, oculus, vive, index, pico, procházka, průchod, teleport, revize návrhu, revize, měření, řez, řezání, problém, problémy, bcf, model na stole, měřítkový model, přítomnost, avatary, živě, společně
from: fa2f591a
---

{{ui:Prohlédnout ve VR}} vás s VR brýlemi postaví dovnitř modelu, v plné velikosti. Stanete tam, kde je kamera pohledu, na podlaze pod ní, a díváte se stejným směrem. Nic se nenahrává: brýle zobrazují to, co prohlížeč kreslí na tomto počítači (nebo v prohlížeči samotných brýlí).

## Co potřebujete

- VR brýle, které prohlížeč umí ovládat (WebXR): vlastní prohlížeč samostatných brýlí, nebo Chrome či Edge v počítači s připojenými brýlemi.
- ModelCraft otevřený na zabezpečené stránce (https), jako je na tomto webu.

Když brýle nejsou, je {{ui:Prohlédnout ve VR}} šedé a řekne proč.

## Spuštění

1. Nastavte pohled, odkud chcete začít: v místnosti, nebo venku s výhledem na budovu.
2. Klikněte na {{ui:Pohledy}} ve skupině {{ui:Kamera}}, potom na {{ui:Prohlédnout ve VR}}.
3. Nasaďte brýle.

Nabídka je na hřbetu vaší levé ruky. Ukažte na ni pravým ovladačem a stiskněte spoušť, abyste vybrali tlačítko. (Pokud máte jen jednu ruku, nabídka se vznáší před místem, kde jste začali.)

## Jak to vypadá

Brýle zobrazují model ve vzhledu [živého pohledu](topic:live-view): vzhled a materiály, které jste plochám dali, oblohu a slunce podle místa a data vašeho modelu se stínem, lampy, rozptýlené rostliny a kameny a světlo odražené od stěn a podlah (počítané na tomto počítači, zatímco se rozhlížíte, a sledující vás při pohybu). Jas a převod pohledu (ACES nebo AgX) jsou stejné jako u [Vykreslit obrázek](topic:render). Kolik se vykreslí, závisí na tom, co má prohlížeč v brýlích, stejně jako na počítači; ambientní okluze, odrazy a záře zůstávají na počítači.

## Pohyb

- **Skok:** v {{ui:Přesunout}} ukažte na podlahu a stiskněte spoušť; přistanete tam. Nebo zatlačte páčku dopředu, abyste zamířili, a pusťte ji, abyste skočili. Přistát můžete jen na podlahách a zemi (plochy směřující nahoru), nikdy na stěně.
- **Otočení:** zatlačte páčku doleva nebo doprava: pokaždé se otočíte o 30°.
- **Chůze:** ve vaší herní ploše prostě jděte.

## Měření

Vyberte {{ui:Měřit}}, potom stiskněte spoušť na dvou bodech. Mezi nimi se zobrazí vzdálenost v jednotkách modelu. Bod blízko rohu se přichytí k rohu.

## Rozříznutí

Vyberte {{ui:Řez}} a stiskněte spoušť na ploše:

- na stěně (nebo čemkoli, co není podlaha): vše mezi vámi a touto plochou se odřízne, takže vidíte dovnitř. Nejlépe to funguje zvenku nebo napříč místností;
- na podlaze, shora: půdorysný řez 1.2 m nad touto podlahou, takže stěny ukážou svou spodní část.

{{ui:Vymazat}} odstraní řez i měření. Pokud při spuštění řezová rovina protíná model v pohledu, brýle začnou s ní.

## Umístění problému

Vyberte {{ui:Problém}} a stiskněte spoušť tam, kde je problém. Očíslovaný špendlík jej označí a ModelCraft uchová problém spolu s obrázkem toho, co jste viděli, a kde jste stáli. Když opustíte VR, problémy jsou v seznamu {{ui:Problémy}} vpravo:

- tlačítko oka zobrazí problém z místa, kde byl umístěn;
- {{ui:Uložit jako BCF}} stáhne všechny jako soubor BCF, který otevřou programy pro revizi BIM (včetně kamery a obrázku);
- ukládají se také do souboru `.modelcraft`.

Komentář k problému přidejte, až opustíte VR, v programu pro BCF: psaní v brýlích ještě není hotovo.

## Zobrazení jako model na stole

{{ui:Stolní model}} zmenší model tak, aby se vešel na stůl před vámi; obejděte ho nebo ho otočte páčkou. {{ui:Skutečná velikost}} vás vrátí tam, kde jste byli.

## S ostatními, živě

V [živé relaci](topic:work-live) vidí každý ve VR ostatní jako hlavu a dvě ruce ve vlastní barvě, se jménem, a tečku tam, kam každý ukazuje. Úpravy, které kdokoli provede, se k vašim brýlím dostanou během okamžiku. Lidé u stolu zatím v brýlích zobrazeni nejsou.

## Odchod

Vyberte {{ui:Opustit VR}} (nebo sundejte brýle a relaci ukončete tam). Pohled na obrazovce se přesune tam, kde byla vaše hlava.

:::note
Testováno jen s emulátorem VR brýlí, zatím ne se skutečnými brýlemi. Velký model může v brýlích způsobit trhání obrazu: nejprve skryjte, co nepotřebujete ([skrytí a izolace](topic:hide-isolate)).
:::
