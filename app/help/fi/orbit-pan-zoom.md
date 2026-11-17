---
title: Kiertäminen, panorointi ja zoomaus
summary: Liiku mallin ympärillä hiirellä, kosketuslevyllä, kosketusnäytöllä tai näppäimistöllä ja siirry vakionäkymiin.
keywords: kierrä, panoroi, zoomaa, pitkä painallus, kolme sormea, kaksi sormea, napautus, navigoi, kamera, näkymä, kierrä näkymää, kosketuslevy, kosketus, nipistys, keskipainike, zoomaa laajuuteen, perspektiivi, rinnakkainen, päänäkymä, iso
from: 10d4d33a
---

Voit siirtää kameraa milloin tahansa, jopa kesken viivan piirtämisen tai pinnan työntämisen: työkalu odottaa siinä, missä se oli.

## Kolmipainikkeisella hiirellä

| Tavoite | Tee näin |
|---|---|
| Kierrä | Vedä keskipainikkeella (paina rullaa) |
| Panoroi | Vedä oikealla painikkeella, tai pidä {{key:Shift}} alhaalla ja vedä keskipainikkeella. Painamalla tai vapauttamalla {{key:Shift}} vedon aikana vaihdat kiertämisen ja panoroinnin välillä |
| Zoomaa | Käännä rullaa. Se zoomaa kohti pintaa osoittimen alla tai kohti pistettä sen alla näkymän keskikohdan syvyydellä |
| Näe koko malli | {{key:Shift+Z}} tai {{ui:Extents}} |

Kierto kääntää näkymää mallin sen osan ympäri, joka on osoittimen alla, joten tuo piste pysyy paikallaan, kun kaikki kääntyy sen ympärillä. Tyhjän tilan päällä se kiertää näkymän keskikohdan ympäri. Panorointi pitää kohdan, jonka tartuit, osoittimen alla.

Jos haluat aina kiertää näkymän keskikohdan ympäri tai muuttaa kiertämisen ja panoroinnin nopeutta, avaa {{ui:Settings}} ({{key:Mod+,}}), {{ui:ModelCraft}}-välilehti, **Kierto ja panorointi**. Nopeudet koskevat hiirtä, kosketuslevyä, kosketusta ja nuolinäppäimiä.

Oikea napsautus ilman vetoa ei tee mitään; ModelCraftissa ei ole oikean napsautuksen valikkoa.

## Ilman keskipainiketta

Käytä työkalurivin kameratyökaluja tai näppäimistöä:

1. Paina {{key:O}} (tai napsauta {{ui:Orbit}}) ja vedä vasemmalla painikkeella kiertääksesi. Pidä {{key:Shift}} alhaalla vedon aikana panoroidaksesi.
2. Paina {{key:H}} (tai napsauta {{ui:Pan}}) ja vedä panoroidaksesi.
3. Paina {{key:Z}} (tai napsauta {{ui:Zoom}}) ja vedä ylös zoomataksesi sisään, alas zoomataksesi ulos.
4. Paina {{key:Space}} palataksesi työkaluun {{ui:Select}}, tai paina sen työkalun näppäintä, jonka haluat seuraavaksi.

Kameratyökalut korvaavat käytössä olevan työkalun. Jos haluat katsella ympärillesi kesken toimenpiteen menettämättä sitä, käytä näppäimistöä:

- Nuolinäppäimet kiertävät.
- {{key:Shift}} nuolinäppäinten kanssa panoroi.

Kun piirtotyökalu on kesken toimenpidettä (ensimmäisen napsautuksen jälkeen), nuolinäppäimet lukitsevat suuntia kiertämisen sijaan. Katso [Päättely ja tartunta](topic:inference#lock-a-direction).

## Kosketuslevyllä

Helpoin tapa: avaa {{ui:Settings}} ({{key:Mod+,}}), {{ui:ModelCraft}}-välilehti ja aseta Vieritys-kohdassa **Kosketuslevy** (tai jätä se tilaan ”Tunnista automaattisesti”). Sitten kierrät pyyhkäisemällä kahdella sormella, panoroit pitämällä {{key:Shift}} alhaalla ja pyyhkäisemällä, ja zoomaat nipistämällä — ilman kameranäppäimiä. Katso [ModelCraftin asetukset](topic:settings#scrolling-mouse-wheel-or-trackpad).

Kun Vieritys on asetettu **Hiiren rulla**-tilaan:

:::mac
- **Zoomaus:** vieritä kahdella sormella tai nipistä. Molemmat zoomaavat kohti osoitinta.
- **Panorointi:** paina kahdella sormella (toissijainen napsautus) ja pidä sormet alhaalla vetäessäsi. Ota käyttöön ”Toissijainen napsautus” kohdassa **Järjestelmäasetukset**, sitten **Kosketuslevy**, jos kahden sormen napsautus ei tee mitään.
- **Kiertäminen:** paina {{key:O}} ja vedä yhdellä sormella, tai käytä nuolinäppäimiä.
- Kun pidät {{key:Ctrl}}-näppäintä alhaalla napsauttaessasi, se ei välttämättä ole ModelCraftissa oikea napsautus selaimesta riippuen: se voi toimia napsautuksena, jossa {{key:Ctrl}} on pohjassa. Käytä panorointiin kahden sormen painallusta.
:::

:::windows linux
- **Zoomaus:** vieritä kahdella sormella. Nipistys zoomaa myös siellä, missä kosketuslevyn ajuri lähettää sen vierityksenä {{key:Ctrl}}-näppäimen kanssa.
- **Panorointi:** vedä oikealla painikkeella (monilla kosketuslevyillä paina oikeaa alakulmaa ja vedä), tai paina {{key:H}} ja vedä.
- **Kiertäminen:** paina {{key:O}} ja vedä, tai käytä nuolinäppäimiä.
:::

Hiiren rullalla kahden sormen vieritys zoomaa; se ei panoroi. Tämä on päinvastoin kuin monilla verkkosivuilla, ja näin hiiren rulla toimii useimmissa 3D-mallinnusohjelmissa.

:::tip
{{key:Space}} valitsee työkalun {{ui:Select}} ModelCraftissa. {{key:Space}}-näppäimen pitäminen alhaalla ja vetäminen ei panoroi, kuten joissakin muissa sovelluksissa.
:::

## Kosketusnäytöllä

:::touch
- **Yksi sormi** käyttää nykyistä työkalua: **napauta** napsauttaaksesi, **paina ja vedä** piirtääksesi tai siirtääksesi.
- Kun piirtotyökalun sormi on alhaalla, sen yläpuolella näkyy **suurennuslasi**, joka näyttää, mitä sormen alla on, jotta näet päätepisteen, keskikohdan tai reunan, johon se tarttuu ennen nostoa.
- **Pidä paikallaan** puoli sekuntia lopettaaksesi, mitä työkalu tekee, kuten {{key:Enter}} tekee: käyrän tai viivaketjun. Kun mitään ei ole käynnissä, paikallaan pitäminen ja sen jälkeen saman sormen vetäminen **kiertää**, kunnes nostat sormen.
- **Kaksi sormea** vedettyinä yhdessä **panoroivat**; **nipistä** zoomataksesi. Molemmat toimivat yhdellä eleellä.
- **Kolme sormea** vedettyinä yhdessä **kiertävät**.
- Vaihtaaksesi ne (kaksi sormea kiertää, kolme panoroi) avaa {{ui:Settings}}, {{ui:ModelCraft}}-välilehti, Kosketusnäyttö.
- Toisen sormen laskeminen alas **peruuttaa** sen, minkä ensimmäinen sormi aloitti (puolittain piirretty suorakulmio, kesken oleva työntö tai veto). Nosta sormet ja aloita uudelleen.
- Näkymän alareunassa oleva pieni palkki sisältää **Valmis** ({{key:Enter}}), **Peruuta** ({{key:Esc}}) ja **Kumoa**, kun näppäimistöä ei ole.
- Tartunta ja valinta ulottuvat hiirtä kauemmas, ja painikkeet ovat isompia, jotta sormi osuu niihin.
:::

:::mouse
Kosketusnäytöllä yksi sormi käyttää nykyistä työkalua (napauta napsauttaaksesi, pidä paikallaan lopettaaksesi tai pidä paikallaan ja vedä kiertääksesi), kaksi sormea panoroi ja nipistää zoomataksesi, kolme sormea kiertää, ja pieni palkki tarjoaa Valmis, Peruuta ja Kumoa.
:::

## Vakionäkymät

1. Napsauta {{ui:Views}} työkalurivin oikeassa päässä.
2. Valitse {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Right}}, {{ui:Back}}, {{ui:Left}} tai {{ui:Bottom}}.

Näkymä kääntyy siihen suuntaan ja sovittaa koko mallin näkyviin. {{ui:Front}} katsoo pohjoiseen, vihreää akselia pitkin; {{ui:Top}} katsoo suoraan alas, pohjoinen ylhäällä.

Näkymäkuutio näytön oikeassa yläkulmassa tekee saman yhdellä napsautuksella, ja lisäksi reunat ja kulmat, kompassirenkaan mallin kääntämiseen ja kotipainikkeen. Katso [Näkymäkuutio](topic:view-cube).

## Perspektiivi ja rinnakkaisprojektio

Valitse {{ui:Views}}, sitten {{ui:Perspective}}. Rasti tarkoittaa, että perspektiivi on päällä. Kun se on pois, näkymä on rinnakkaisprojektio (ortografinen): mallin rinnakkaiset viivat pysyvät rinnakkaisina ruudulla, mikä on sitä, mitä haluat julkisivuille näkymistä {{ui:Front}} tai {{ui:Right}}. Tilarivi sanoo ”Perspective.” tai ”Parallel projection.” sen mukaan, mikä on päällä.

Jokainen kohtaus muistaa, oliko se perspektiivissä. Katso [Tallenna näkymät kohtauksina](topic:scenes).
