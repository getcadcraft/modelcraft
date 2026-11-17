---
title: Skupiny a komponenty
summary: Zabráňte tomu, aby sa objekty lepili k sebe, upravte jednu kópiu a zmeňte všetky, a používajte panely Strom a Komponenty.
keywords: skupina, komponent, vytvoriť skupinu, vytvoriť komponent, rozložiť, urobiť jedinečný, strom, inštancie, kópie, blok, vnorené, upraviť skupinu, umiestniť
from: 7cb925f3
---

Voľná geometria v ModelCraft sa lepí k sebe: čiary, ktoré sa dotýkajú, sa navzájom rozdeľujú a plochy, ktoré zdieľajú hranu, sa pohybujú spolu. Vďaka tomu funguje kreslenie na plochy, ale znamená to aj, že box nakreslený pri inom boxe sa s ním spojí. **Skupiny** a **komponenty** veci oddeľujú.

- **Skupina** obaľuje časť geometrie tak, aby sa správala ako jeden objekt. Nič mimo nej sa k nej nemôže prilepiť.
- **Komponent** je skupina, ktorú možno umiestniť mnohokrát. Každá kópia zdieľa rovnaký obsah: upravte jednu a zmenia sa všetky. Komponenty používajte pre všetko, čo sa opakuje: okná, stĺpy, stoly, stromy.

## Vytvorenie skupiny alebo komponentu

1. Vyberte geometriu. Trojitým kliknutím na plochu vyberiete celý súvislý objekt; ťahaním okna vyberiete všetko v rámci boxu.
2. Stlačte {{key:Shift+G}} pre skupinu alebo {{key:G}} pre komponent. Môžete tiež kliknúť na {{ui:Skupina}} alebo {{ui:Komponent}} na paneli nástrojov v skupine {{ui:Usporiadanie}}, alebo na {{ui:Vytvoriť skupinu (Shift+G)}} či {{ui:Vytvoriť komponent (G)}} v {{ui:Informácie o entite}}.

   Stavový riadok hovorí "Zoskupené ako Group#1." alebo "Vytvorený komponent Component#1.", nový objekt je vybratý a zobrazí sa v {{ui:Strom}}.

3. Ak ho chcete pomenovať, zadajte názov do poľa {{ui:Názov}} v {{ui:Informácie o entite}} a stlačte {{key:Enter}} alebo kliknite mimo poľa.

Výber plochy so sebou prinesie aj jej hrany. Ak nie je nič vybraté, stavový riadok hovorí: "Najprv vyberte geometriu (potiahnite okno alebo trojitým kliknutím vyberte všetko súvisiace)."

Skupiny môžete zoskupovať aj so skupinami: vyberte niekoľko skupín a stlačte {{key:Shift+G}}. {{ui:Strom}} zobrazí vnorenie.

:::note
Písmená klávesov zodpovedajú predvoleným hodnotám SketchUp: {{key:G}} vytvorí komponent, {{key:Shift+G}} skupinu.
:::

## Úprava vnútri skupiny alebo komponentu

1. Dvakrát kliknite na ňu (vo view alebo v {{ui:Strom}}), alebo ju vyberte a kliknite na {{ui:Úpravy}} v {{ui:Informácie o entite}}.

   Zvyšok modelu sa stlmí, osi sa presunú na vlastné osi skupiny a {{ui:Strom}} hovorí "Úprava: Model › Group#1". Stavový riadok hovorí "Upravuje sa Group#1. Esc alebo dvojité kliknutie mimo ju zatvorí."

2. Kreslite, tlačte/ťahajte, presúvajte a mažte ako obvykle. Všetko, čo urobíte, zostane vnútri skupiny.
3. Zatvorte ju: stlačte {{key:Esc}} (dvakrát, ak je niečo vybraté), dvakrát kliknite na prázdny priestor alebo kliknite na {{ui:Zavrieť skupinu}} v {{ui:Strom}}.

Kým je komponent otvorený, každá jeho kópia sa mení spolu s vami.

## Umiestnenie ďalších kópií komponentu

- Skopírujte ho pomocou {{ui:Presunúť}} a {{key:Ctrl}} (pozri [Presunutie a kopírovanie](topic:move-copy)). Každá kópia je ďalšie umiestnenie toho istého komponentu.
- Alebo kliknite na {{ui:Umiestniť}} vedľa neho v paneli {{ui:Komponenty}} a potom kliknite, kam má ísť. Jeho počiatok, najnižší roh boxu okolo toho, čo ste vybrali pri vytváraní, pristane tam, kam kliknete. Nástroj sa potom vráti na {{ui:Vybrať}}.

{{ui:Komponenty}} zobrazí, koľko kópií je umiestnených ("4×"), a {{ui:Strom}} zobrazí počet za názvom.

## Preusporiadanie v Strome

Potiahnite riadok v {{ui:Strom}}, aby ste zmenili, kam patrí. Nič sa nepohne vo view: skupina si zachová svoje miesto v modeli.

- **Do skupiny:** pustite ho na stred riadku skupiny (riadok dostane prerušovaný obrys). Pridá sa dovnútra ako posledný.
- **V inom poradí:** pustite ho na horný alebo dolný okraj riadku (zobrazí sa čiara). Vloží sa tesne pred alebo za tento riadok, do tej istej skupiny ako ten riadok, takže sa tým dá objekt zaradiť aj do skupiny na zvolenom mieste.
- **Na najvyššiu úroveň:** pustite ho na nadpis {{ui:Strom}}. Pridá sa ako posledný.

Každé pustenie je jeden krok: {{key:Mod+Z}} ho vráti späť. {{key:Esc}} počas ťahania nič nepustí. Skupina nemôže byť vnútri seba ani vnútri skupiny, ktorú obsahuje. Ťahanie je vypnuté, kým má {{ui:Hľadať podľa názvu}} text.

:::touch
Na riadku chvíľu podržte prst a potom ho potiahnite. Rýchly potiahnutie posúva zoznam.
:::

## Jedna kópia inaká

Vyberte kópiu a kliknite na {{ui:Urobiť jedinečný}} v {{ui:Informácie o entite}} (zobrazí sa, keď je komponent umiestnený viackrát). Táto kópia dostane vlastnú definíciu, pomenovanú ako pôvodná s novým číslom. Upravte ju bez zásahu do ostatných.

## Premena skupiny na komponent

Vyberte skupinu a kliknite na {{ui:Vytvoriť komponent}} v {{ui:Informácie o entite}}. Dostane nový názov, napríklad Component#2, aj keď ste skupinu pomenovali; názov zadajte znova do poľa {{ui:Názov}}.

## Rozloženie

Vyberte skupinu alebo komponent a kliknite na {{ui:Rozložiť}} (na paneli nástrojov alebo v {{ui:Informácie o entite}}). Jeho obsah sa stane voľnou geometriou na mieste, kde bol, a bude sa lepiť k veciam, ktorých sa dotýka. Skupiny v ňom zostanú skupinami.

## Teleso a objem

Keď vyberiete skupinu alebo komponent, {{ui:Informácie o entite}} zobrazí **Teleso: Áno**, ak sa jeho plochy uzavrú bez medzier (každá hrana je zdieľaná presne dvomi plochami) a nie sú v ňom vnorené žiadne skupiny. Potom zobrazí aj **objem**. Box, stena s oknom vyrezaným cez ňu a vytiahnutý valec sú telesá; box s vymazaným vrchom nie je.

## Keď odíde posledná kópia

Vymazanie poslednej kópie komponentu ho odstráni aj z panela {{ui:Komponenty}}. {{key:Mod+Z}} ho vráti späť.

## Dôležité informácie

- Kópie **skupiny** vytvorené pomocou {{ui:Presunúť}} zdieľajú v tomto zostavení svoj obsah, rovnako ako kópie komponentov: úprava jednej zmení ostatné. Ak chcete jednu urobiť nezávislou, kliknite na {{ui:Vytvoriť komponent}} a potom na {{ui:Urobiť jedinečný}}. Pozri [Riešenie problémov](topic:troubleshooting#editing-one-group-changed-another).
- Komponenty nevyrezávajú otvory do stien a nelepia sa k plochám a neexistuje knižnica hotových komponentov. Vytvárate si vlastné alebo ich importujete.
- Importované súbory prichádzajú ako skupina. Súbory Collada si zachovávajú vlastné skupiny a komponenty vnútri nej.
