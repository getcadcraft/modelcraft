---
title: Risanje ploskev s črtami, pravokotniki, krožnicami in loki
summary: Ustvarite ravne ploskve na tleh ali na drugih ploskvah, jih razdelite s črtami ter narišite krožnice in mnogokotnike s številom stranic, ki ga želite.
keywords: risanje, črta, pravokotnik, krožnica, mnogokotnik, odmik, okvir, obroba, lok, krivulja, zlepek, gladko, kabel, pot, izboklina, polmer, ploskev, tloris, odtis, razdeli, stranice, odseki, obris, svinčnik
from: b6d7b7dd
---

Vse v ModelCraft se začne kot ravna **ploskev**: površina, zaprta z robovi. Ploskev lahko narišete neposredno z {{ui:Rectangle}}, {{ui:Circle}} ali {{ui:Polygon}}, ali pa obrišete en rob naenkrat z {{ui:Line}}. Ploskve so tisto, kar [Potisni/povleci](topic:push-pull) spremeni v telesa.

## Narišite pravokotnik

1. Pritisnite {{key:R}}.
2. Kliknite prvo oglišče: na tleh ali na kateri koli ploskvi modela.
3. Premaknite kazalec. Pravokotnik ostane na tleh (ali na ploskvi, na kateri ste začeli), polje za vrednosti ({{ui:Dimensions}}) pa prikazuje njegovo širino in globino. Nasvet pravi „Kvadrat“, kadar so stranice enake.

   Za risanje na drugi ravnini kažite na njo: ploskev, ki poteka skozi prvo oglišče, postavi pravokotnik na to ploskev. Pritrditev na točko zunaj ravnine (krajišče, rob ali modra os) postavi pravokotnik pokonci skozi obe oglišči. Če se pritrdite nazaj na točko na prvi ravnini, spet leži. Za ohranitev ene ravnine pritisnite puščično tipko: {{key:Up}} drži pravokotnik vodoravno (modra ravnina), {{key:Right}} na rdeči ravnini, {{key:Left}} na zeleni ravnini. Ponovno pritisnite isto tipko za odklep.
4. Kliknite nasprotno oglišče ali vnesite obe velikosti, ločeni z vejico, in pritisnite {{key:Enter}}: `4m,3m`, `4000,3000` v modelu v milimetrih ali `12',10'6"` v čevljih in palcih.

   Pojavi se ploskev s štirimi robovi okoli nje.

Vnesene velikosti gredo v smeri, v katero ste kazali: če je kazalec ob vnosu levo od prvega oglišča, se pravokotnik razširi levo.

:::warning
Vejica ločuje obe velikosti, zato ne more biti decimalno ločilo. Vnesite `2.5m,3m`, nikoli `2,5m`.
:::

## Narišite krožnico ali mnogokotnik

1. Pritisnite {{key:C}} za krožnico ali {{key:N}} za mnogokotnik.
2. Če želite spremeniti število stranic, ga vnesite pred klikom: `12s` (ali samo `12`) in {{key:Enter}}. Krožnica začne s 24 stranicami, mnogokotnik s šestimi. Nasvet prikaže trenutno število; ModelCraft ga ohrani za naslednjo krožnico, dokler ga ne spremenite ali preklopite orodja.
3. Kliknite središče na tleh ali na ploskvi. Za središče na ploskvi kažite na sredino ploskve („Središče ploskve“) ali na sredino enega od njenih robov („Razpolovišče“), s kazalcem tik znotraj te ploskve: krožnica se nariše na tej ploskvi, tudi na ozkem koncu dolge škatle.
4. Kliknite za nastavitev polmera ali ga vnesite ({{ui:Radius}} v polju z vrednostjo) in pritisnite {{key:Enter}}.

Krožnica je mnogokotnik z veliko stranicami. Ko krožnico potisnete ali povlečete navzgor, so njene stranice zglajene, zato valj deluje kot ena gladka površina.

## Narišite lok

1. Pritisnite {{key:A}} ({{ui:Arc}}).
2. Kliknite, kjer se lok začne, nato, kjer konča (ali vnesite dolžino med njima).
3. Premaknite kazalec, da lok izbočite, in kliknite. Nasvet pravi „Polkrog“, ko je izboklina enaka polovici razdalje med krajiščema. Ali vnesite, kako daleč stoji sredina: `2` in {{key:Enter}}.

Za lok okoli točke uporabite {{ui:Arc center}}: kliknite središče, nato, kjer se lok začne (ali vnesite polmer), nato, kjer konča (ali vnesite kot v stopinjah, na primer `90`). Pritrjuje se na korake po 15°.

Lok, začet na ploskvi, se nariše na tej ploskvi; sicer leži na tleh ali stoji pokonci, če sta njegova krajišča na različnih višinah. Lok ima 12 odsekov; za več vnesite med risanjem `24s`. Loki zaprejo ploskve enako kot črte: lok čez oglišče pravokotnika ga razdeli.

## Narišite gladko krivuljo

{{ui:Curve}} nariše gladko črto, ki gre skozi vsako točko, na katero kliknete: kabel, pot ročaja, rob vrtne gredice. Lahko se dvigne z tal: točke se pritrdijo na oglišča, robove in ploskve kjerkoli, puščične tipke pa zaklenejo rdečo, zeleno ali modro os, kot pri {{ui:Line}}.

1. Kliknite {{ui:Curve}} v skupini {{ui:Draw}}.
2. Kliknite točke, skozi katere gre krivulja. Vnesite `<0,0,1>` in {{key:Enter}} za točko 1 nad zadnjo, `[x,y,z]` za natančno mesto ali dolžino za točko toliko naprej proti kazalcu.
3. Pritisnite {{key:Enter}} ali dvokliknite za konec. Ponovno kliknite prvo točko, da krivuljo sklenete. {{key:Backspace}} odvzame zadnjo točko.

Krivulja se izbere kot en kos. Za spremembo jo izberite in kliknite {{ui:Edit points}} v {{ui:Entity info}}: njene točke so prikazane kot kvadratki. Kliknite eno, nato kliknite, kam naj gre (ali vnesite `<dx,dy,dz>`). {{key:Esc}} vrne točko nazaj in konča urejanje. Zaprta ravna krivulja ustvari ploskev; krivulja, ki oriše ploskev, ni več urejljiva.

## Odmik: obroba znotraj ali zunaj ploskve

{{ui:Offset}} skopira obris ploskve na določeno razdaljo navznotraj (ali navzven), za okvir, obrobo, polico ali steklo zaslona.

1. Pritisnite {{key:F}} in kliknite ploskev ali najprej izberite ploskev in nato pritisnite {{key:F}}.
2. Premaknite kazalec v ploskev za notranji obris ali iz nje za zunanjega. Novi obris sledi, nasvet pa pove, za koliko.
3. Kliknite ali vnesite razdaljo in pritisnite {{key:Enter}}.

Ploskev se razdeli na dve: notranjo ploskev in okvir okoli nje (ali nov obroč zunaj). Takoj potisnite ali povlecite katero koli od njiju: za zaslon narišite škatlo, jo potisnite na njeno debelino, odmaknite sprednjo ploskev 30 mm navznoter in notranjo ploskev malo potisnite za steklo. Luknje v ploskvi se prav tako odmaknejo, lok ali krožnica pa ostaneta ena (manjša ali večja) krivulja.

- **Dvokliknite** ploskev z {{ui:Offset}}, da jo odmaknete za zadnjo razdaljo še enkrat.
- **Robovi:** izberite verigo povezanih robov v eni ravnini (na primer dve črti črke L), pritisnite {{key:F}}, premaknite se na želeno stran in vnesite razdaljo: nariše se vzporedna kopija s poševno rezanimi koti.
- Ko je razdalja večja, kot jo ploskev dopušča, ModelCraft to sporoči in ne nariše ničesar.

## Loki, krožnice in mnogokotniki so krivulje

Kliknite katerikoli odsek loka, krožnice ali mnogokotnika in izbrana je cela krivulja. {{ui:Entity info}} nato prikaže njen polmer, njene odseke, kot (pri lokih) in dolžino. Vnesite tam nov polmer, da jo spremenite na njenem središču; ploskve, narisane v njeni ravnini, sledijo. Ko je ploskev krivulje potisnjena ali povlečena, njen polmer ostane takšen, kot je.

## Risanje s črtami

1. Pritisnite {{key:L}}.
2. Kliknite, kjer se črta začne.
3. Kliknite, kjer konča, ali vnesite dolžino in pritisnite {{key:Enter}}. Vnesena dolžina gre v smeri, ki jo kaže kazalec.
4. Nadaljujte s klikanjem. Vsak klik začne naslednjo črto na koncu zadnje.
5. Obris sklenete s ponovnim klikom na prvo točko. Ko črte sklenejo ravno zanko, se zapolni s ploskvijo in orodje preneha povezovati. {{key:Esc}} ustavi kadarkoli.

Črte se ob bližanju usmerijo po rdeči, zeleni in modri osi; črta se obarva s to barvo, nasvet pa pravi „Na rdeči osi“. Glejte [Sklepanje in lovljenje](topic:inference) za zaklepanje smeri in lovljenje na točke.

### Kam gre črta, če se ničesar ne dotika

- Črta, ki se začne na ploskvi, ostane v ravnini te ploskve.
- Črta, ki se začne na tleh ali v praznem prostoru, ostane vodoravna s svojo začetno točko. Če pogledate model s strani, gre namesto tega v navpično ravnino, ki je obrnjena proti vam.
- Za risanje črte na natančno mesto vnesite točko: `[x,y,z]` za točko v modelu ali `<dx,dy,dz>` za odmik od začetka. Glejte [Vnos natančnih velikosti](topic:value-box).

## Razdelitev ploskve

Narišite črto čez ploskev, od enega roba do drugega (ali od roba do roba prek drugih črt). Ploskev se razdeli na dve ploskvi. Vsaka ohrani svojo stran in barvo. Enako velja za pravokotnik ali krožnico, narisano na ploskvi: oblika postane lastna ploskev znotraj večje, ki ima zdaj luknjo.

Tako razporejate sobe na talni plošči, okno na steni ali stopnico na stopnišču: narišite obris na ploskvi, nato potisnite ali povlecite novo ploskev.

## Ploskve, obrnjene v napačno smer

Vsaka ploskev ima spredaj in zadaj. Zadnja stran je modrikasto siva. Ploskve, narisane na tleh, so obrnjene navzgor; ploskve, narisane na drugi ploskvi, so obrnjene enako kot ta.

Če ploskev kaže zadnjo stran tam, kjer pričakujete sprednjo, jo izberite in kliknite {{ui:Reverse face}} v {{ui:Entity info}}.

## Kaj vidite med risanjem

- Barvna oznaka tam, kjer se kazalec pritrdi, in njeno ime v nasvetu spodaj levo.
- Predogled črte ali oblike.
- Sprotna velikost v polju z vrednostjo. Kadarkoli lahko prepišete vrednost.

## Če oblika ni tam, kjer ste pričakovali

- Na zaslonu na dotik glejte [Odpravljanje težav](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Če se je črta pritrdila na nekaj daleč zadaj, malo zavrtite pogled: točke, skrite za ploskvijo, se nikoli ne pritrdijo, točke na njenem robu pa da.
- Pritisnite {{key:Mod+Z}}, da razveljavite zadnjo obliko; en korak razveljavitve odstrani eno črto ali eno obliko.
