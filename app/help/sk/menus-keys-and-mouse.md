---
title: Ponuky, klávesy a myš
summary: Vyberte štýl ponúk, ktorý zodpovedá modelovaču, ktorý už poznáte, priraďte ľubovoľnému príkazu vlastnú klávesu, presúvajte príkazy medzi ponukami a nastavte, čo robia koliesko a prostredné a pravé tlačidlo myši.
keywords: štýl ponúk, ponuky, lišta ponúk, panel nástrojov, klávesové skratky, klávesy, štýl klávesov, mapa klávesov, prispôsobiť, premapovať, znovu priradiť, myš, koliesko, obrátiť, smer zoomu, prostredné tlačidlo, pravé tlačidlo, otáčanie, posun, export, import, prepínanie, známy, tlač/ťah, modelovač
from: e56fce3d
---

Nástroje ModelCraft sú rovnaké bez ohľadu na to, ako sa k nim dostanete. **Štýl ponúk** určuje, kde sú na obrazovke, ako sa tam volajú a ktoré klávesy ich spúšťajú. Zvoľte ho v {{ui:Nastavenia}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Ponuky, klávesy a myš}}; zmena platí hneď a tento prehliadač si ju zapamätá.

## Štýly

| Štýl | Čo dostanete |
|---|---|
| {{ui:ModelCraft}} | Vlastný panel nástrojov ModelCraft (Súbor, Kreslenie, Zmeny, Usporiadanie, Úpravy, Kamera) a jednopísmenové klávesy: {{key:L}} úsečka, {{key:R}} obdĺžnik, {{key:P}} tlač/ťah, {{key:M}} presun, {{key:Q}} otočenie, {{key:S}} mierka, {{key:E}} guma, {{key:O}} otáčanie pohľadu. Východiskový štýl. |
| {{ui:Tlač/ťah}} | Lišta ponúk (Súbor, Úpravy, Zobrazenie, Kamera, Kreslenie, Nástroje, Okno) nad radom hlavných nástrojov, s rovnakými jednopísmenovými klávesami. |
| {{ui:Modelár}} | Hlavná lišta ponúk (Súbor, Úpravy, Zobrazenie, Vybrať, Pridať, Objekt, Sieť) a klávesy sieťových modelárov: {{key:W}} vybrať, {{key:G}} uchopiť, {{key:R}} otočiť a {{key:S}} mierka výberu naraz ({{key:X}}, {{key:Y}} alebo {{key:Z}} zamkne os počas pohybu), {{key:E}} tlač/ťah, {{key:B}} obdĺžnik, {{key:X}} zmazať, {{key:A}} vybrať všetko, {{key:Alt+A}} zrušiť výber, {{key:Shift+D}} duplikovať, {{key:Mod+G}} skupina, {{key:H}} skryť. Prostredné tlačidlo otáča pohľad; {{key:Shift}} a prostredné tlačidlo posúvajú, {{key:Mod}} a prostredné tlačidlo zväčšujú; pravé tlačidlo zruší to, čo nástroj robí. |
| {{ui:Začiatočník}} | Pás, na ktorého karte {{ui:Vytvorenie}} je niekoľko veľkých tlačidiel: tvary na vloženie, otvory, presun, otáčanie a veľkosť, zarovnanie, {{ui:Skupina}} (otvory vyrezané do tvarov) a kontrola na 3D tlač; každý ďalší nástroj je na karte {{ui:Ďalšie nástroje}}. Pravé tlačidlo otáča pohľad, prostredné posúva. Pozri [štýl Začiatočník](topic:beginner). |

Štýl klávesov, ktorý môžete poznať z {{ui:Kľúče}} v pravom dolnom rohu pohľadu a z {{ui:Úpravy}} › {{ui:Viac}}, je tá istá voľba: výber klávesov modelára tam zvolí štýl {{ui:Modelár}}, výber klávesov tlač/ťah ho opustí a prejde na štýl {{ui:ModelCraft}}. Ak ste zvolili klávesy modelára v staršej verzii, ModelCraft sa raz otvorí v štýle {{ui:Modelár}} sám od seba.

:::tip
Klávesa patriaca ku klávesom tlač/ťah, ktorú váš štýl priradí inému príkazu, nerobí nič, a stavový riadok ukáže, kam sa jeho príkaz presunul ("V štýle Modelár je Tlač/ťah na E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} a šípky si vždy zachovajú svoj význam, čísla vždy idú do poľa hodnoty a kým nástroj niečo premiestňuje, vyhrávajú jeho vlastné klávesy.
:::

## Vlastné nastavenie

1. Zvoľte štýl, ktorý sa najviac podobá tomu, čo chcete, a potom kliknite na {{ui:Prispôsobiť…}}.
2. Na {{ui:Klávesy a ponuky}} nájdite príkaz (pomôže vyhľadávacie pole). Kliknite na {{ui:Pridať kláves}} a stlačte kláves. Kliknutím na kláves ho odstránite.
3. Pri lište ponúk {{ui:Kde sa nachádza}} presunie príkaz do inej ponuky alebo do {{ui:Iba klávesy}}.
4. Na {{ui:Myš}} nastavte koliesko a to, čo tlačidlá robia v 3D pohľade.
5. Dajte mu názov a kliknite na {{ui:Uložiť}}.

Uložením vstavaného štýlu vznikne vaša vlastná kópia ("My Modeler"); vstavaný sa nikdy nemení. Vaša kópia číta klávesy tak, ako štýl, z ktorého začala: kópia z {{ui:Modelár}} udrží klávesy uchopiť, otočiť a mierku funkčné naraz.

## Myš

- **Koliesko myši**: {{ui:Posun nahor priblíži}} (východiskový) alebo {{ui:Posun nahor oddiali}}, a ako rýchlo. Štipnutie na touchpade vždy zväčšuje tak, ako sa pohybujú prsty.
- **Ťahanie v 3D pohľade**: {{ui:Vlastné pre každý pohľad}} ponecháva tlačidlá ModelCraft (prostredné otáča pohľad, pravé alebo {{key:Shift}} a prostredné posúva). Alebo nastavte prostredné a pravé tlačidlo na otáčanie, posun, zväčšenie alebo nič; {{key:Shift}} s tlačidlom prehodí otáčanie a posun. Ľavé tlačidlo vždy patrí nástroju, ktorý sa používa.
- **Touchpady**: {{ui:Nastavenia}} › {{ui:ModelCraft}} › {{ui:Posúvanie}} stále rozhoduje, či dva prsty otáčajú (touchpad) alebo zväčšujú (myš). Pozri [Otáčanie, posun a zväčšenie](topic:orbit-pan-zoom).

## Prenos štýlu

{{ui:Exportovať}} uloží používaný štýl ako malý súbor `.ccinput.json`; {{ui:Importovať…}} ho pridá, z iného počítača alebo od kolegu. Importovaný súbor môže ukazovať len na vlastné príkazy ModelCraft: čokoľvek iné sa vynechá a spočíta na stavovom riadku. {{ui:Zmazať tento štýl}} odstráni jeden z vašich vlastných.

:::note
Tieto nastavenia zostávajú v tomto prehliadači. {{ui:Použiť tento štýl v každej aplikácii}} pod kartami štýlov zabezpečí, že sa každá aplikácia otvorí v zodpovedajúcom štýle: {{ui:Tlač/ťah}} sa spája so štýlmi lišty ponúk ostatných aplikácií. {{ui:Modelár}} nemá v ostatných aplikáciách náprotivok, takže zostáva voľbou ModelCraft.
:::

Súvisiace: [Klávesy a myš – akcie](topic:keyboard) · [Nastavenia ModelCraft](topic:settings) · [Prechod z iných modelovačov](topic:coming-from)
