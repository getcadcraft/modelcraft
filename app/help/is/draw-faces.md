---
title: Teikna fleti með línum, rétthyrningum, hringjum og bogum
summary: Búðu til slétta fleti á jörðinni eða á öðrum fleti, skiptu þeim með línum, og teiknaðu hringi og marghyrninga með þeim fjölda hliða sem þú vilt.
keywords: teikna, lína, rétthyrningur, hringur, marghyrningur, jafnfjarlægð, innskot, rammi, kantur, bogi, ferill, spline, slétt, kapall, slóð, bunga, radíus, flötur, grunnmynd, fótspor, skipta, hliðar, hlutar, útlína, blýantur
from: b6d7b7dd
---

Allt í ModelCraft byrjar sem flatur **flötur**: yfirborð lokað af jöðrum. Þú getur teiknað flöt beint með {{ui:Rectangle}}, {{ui:Circle}} eða {{ui:Polygon}}, eða dregið útlínu einn jaðar í einu með {{ui:Line}}. Fletir eru það sem [Ýta/toga](topic:push-pull) breytir í rúmtök.

## Teikna rétthyrning

1. Ýttu á {{key:R}}.
2. Smelltu á fyrsta hornið: á jörðinni, eða á hvaða fleti líkansins sem er.
3. Færðu bendilinn. Rétthyrningurinn helst á jörðinni (eða á þeim fleti sem þú byrjaðir á), og gildareiturinn ({{ui:Dimensions}}) sýnir breidd hans og dýpt. Ábendingin segir „Ferningur“ þegar hliðarnar eru jafnar.

   Til að teikna á annað plan skaltu benda á það: flötur sem liggur í gegnum fyrsta hornið setur rétthyrninginn á þann flöt, og festing við punkt utan planisins (endapunkt, jaðar eða bláa ásinn) reisir rétthyrninginn upp í gegnum bæði hornin. Smelltu aftur á punkt á fyrsta planinu og hann leggst niður aftur. Til að halda einu plani skaltu ýta á örvatakka: {{key:Up}} heldur rétthyrningnum láréttum (bláa planinu), {{key:Right}} á rauða planið, {{key:Left}} á græna planið. Ýttu aftur á sama takka til að losa.
4. Smelltu á gagnstætt hornið, eða skrifaðu stærðirnar tvær aðskildar með kommu og ýttu á {{key:Enter}}: `4m,3m`, `4000,3000` í líkani í millimetrum, eða `12',10'6"` í fetum og tommum.

   Flötur birtist með fjórum jöðrum utan um sig.

Skrifaðar stærðir fara í þá átt sem þú varst að benda: ef bendillinn er vinstra megin við fyrsta hornið þegar þú skrifar, stækkar rétthyrningurinn til vinstri.

:::warning
Kommuna aðskilur stærðirnar tvær, svo hún getur ekki verið aukastafsmerki. Skrifaðu `2.5m,3m`, aldrei `2,5m`.
:::

## Teikna hring eða marghyrning

1. Ýttu á {{key:C}} fyrir hring eða {{key:N}} fyrir marghyrning.
2. Til að breyta fjölda hliða skaltu skrifa hann áður en þú smellir: `12s` (eða bara `12`) og {{key:Enter}}. Hringur byrjar með 24 hliðum og marghyrningur með 6. Ábendingin sýnir núverandi fjölda, og ModelCraft heldur honum fyrir næsta hring þar til þú breytir honum eða skiptir um verkfæri.
3. Smelltu á miðjuna, á jörðinni eða á fleti. Til að miðja hann á fleti skaltu benda á miðju flatarins („Miðja flatar“) eða á miðju eins af jöðrunum („Miðpunktur“) með bendilinn rétt innan í flötinn: hringurinn er teiknaður á fletinum, jafnvel á mjóa enda langs kassa.
4. Smelltu til að setja radíus, eða skrifaðu hann ({{ui:Radius}} í gildareitnum) og ýttu á {{key:Enter}}.

Hringur er marghyrningur með mörgum hliðum. Þegar þú togar hring upp með Ýta/toga eru hliðar hans mýktar svo sívalningurinn líti út sem einn slétt yfirborð.

## Teikna boga

1. Ýttu á {{key:A}} ({{ui:Arc}}).
2. Smelltu þar sem bogi byrjar, og síðan þar sem hann endar (eða skrifaðu lengdina á milli þeirra).
3. Færðu bendilinn til að bunga bogann út, og smelltu. Ábendingin segir „Hálfur hringur“ þegar bungan er helmingur fjarlægðar milli endanna. Eða skrifaðu hversu langt miðjan stendur út: `2` og {{key:Enter}}.

Til að teikna boga umhverfis punkt í staðinn skaltu nota {{ui:Arc center}}: smelltu á miðjuna, síðan þar sem bogi byrjar (eða skrifaðu radíusinn), og síðan þar sem hann endar (eða skrifaðu hornið í gráðum, eins og `90`). Hann festist við 15° skref.

Bogi sem byrjar á fleti er teiknaður á þeim fleti; annars liggur hann á jörðinni, eða stendur upprétt þegar endar hans tveir eru í mismunandi hæð. Bogi hefur 12 hluta; skrifaðu `24s` meðan þú teiknar til að fá fleiri. Bogar loka flötum eins og línur gera: bogi yfir horn rétthyrnings skiptir honum.

## Teikna slétt feril

{{ui:Curve}} teiknar slétta línu sem fer í gegnum hvern punkt sem þú smellir á: kapal, slóð handriðs, garðkant. Hún getur farið frá jörðinni: punktar festast við horn, jaðra og fleti hvar sem er, og örvatakkarnir læsa rauðum, grænum eða bláum eins og með {{ui:Line}}.

1. Smelltu á {{ui:Curve}} í hópnum {{ui:Draw}}.
2. Smelltu á punktana sem ferillinn fer í gegnum. Skrifaðu `<0,0,1>` og {{key:Enter}} fyrir punkt 1 ofan við þann síðasta, `[x,y,z]` fyrir nákvæman stað, eða lengd fyrir punkt svo langt í átt að bendlinum.
3. Ýttu á {{key:Enter}} eða tvísmelltu til að ljúka. Smelltu aftur á fyrsta punktinn til að loka ferlinum. {{key:Backspace}} tekur síðasta punktinn til baka.

Ferill veljast sem einn hluti. Til að breyta honum skaltu velja hann og smella á {{ui:Edit points}} í {{ui:Entity info}}: punktar hans birtast sem ferningar. Smelltu á einn, og smelltu síðan þar sem hann á að fara (eða skrifaðu `<dx,dy,dz>`). {{key:Esc}} setur punktinn aftur þangað sem hann var og lýkur breytingu. Lokaður, flatur ferill býr til flöt; ferill sem markar útlínu flatar er ekki lengur hægt að breyta.

## Jafnfjarlægð: rammi inni eða úti á fleti

{{ui:Offset}} afritar útlínu flatar í ákveðna fjarlægð innan í honum (eða utan), fyrir ramma, kant, gluggakistu eða gler í skjá.

1. Ýttu á {{key:F}} og smelltu á flötinn, eða veldu flötinn fyrst og ýttu síðan á {{key:F}}.
2. Færðu bendilinn inn í flötinn fyrir innri útlínu, eða út úr honum fyrir ytri. Nýja útlínan fylgir, og ábendingin segir hversu langt.
3. Smelltu, eða skrifaðu fjarlægðina og ýttu á {{key:Enter}}.

Flöturinn skiptist í tvennt: innri flöturinn og rammi utan um hann (eða nýr hringur utan á). Ýta/toga hvorum sem er strax: fyrir skjá, teiknaðu kassann, ýttu honum í þykktina, færðu framflötinn 30 mm inn á við og ýttu innri flötinum aðeins inn fyrir glerið. Göt í fletinum eru líka færð, og bogi eða hringur er áfram einn ferill (minni eða stærri).

- **Tvísmelltu** á flöt með {{ui:Offset}} til að færa hann aftur um síðustu fjarlægð.
- **Jaðrar:** veldu keðju tengdra jaðra í einu plani (til dæmis tvær línur í L-formi), ýttu á {{key:F}}, færðu þig á þá hlið sem þú vilt og skrifaðu fjarlægðina: samsíða afrit er teiknað, með skáskorin horn.
- Þegar fjarlægðin er meiri en flöturinn leyfir, segir ModelCraft það og teiknar ekkert.

## Bogar, hringir og marghyrningar eru ferlar

Smelltu á hvaða hluta boga, hrings eða marghyrnings sem er og allur ferillinn er valinn. {{ui:Entity info}} sýnir þá radíus hans, hluta hans, horn (bogar) og lengd. Skrifaðu nýjan radíus þar til að breyta stærðinni út frá miðju hans; fletir sem eru teiknaðir í sama plani fylgja. Þegar flötur ferils hefur verið ýttur eða togaður helst radíusinn eins og hann er.

## Teikna með línum

1. Ýttu á {{key:L}}.
2. Smelltu þar sem línan byrjar.
3. Smelltu þar sem hún endar, eða skrifaðu lengd og ýttu á {{key:Enter}}. Skrifuð lengd fer í þá átt sem bendillinn sýnir.
4. Haltu áfram að smella. Hver smellur byrjar næstu línu frá enda þeirrar síðustu.
5. Lokaðu útlínunni með því að smella aftur á fyrsta punktinn. Þegar línurnar loka flatri lykkju fyllist hún með fleti og verkfærið hættir að tengja. Ýttu á {{key:Esc}} til að hætta hvenær sem er.

Línur fylgja rauðu, grænu og bláu stefnunum þegar þú kemst nálægt þeim; línan verður í þeim lit og ábendingin segir „Á rauðum ás“. Sjá [Ályktun og festing](topic:inference) um hvernig á að læsa stefnu og festa við punkta.

### Hvert línan fer þegar hún snertir ekkert

- Lína sem byrjar á fleti helst í plani þess flatar.
- Lína sem byrjar á jörðinni, eða í tómu rými, helst í sömu hæð og upphafspunktur hennar. Ef þú horfir á líkanið á jaðar, fer hún þess í stað í lóðrétt planið sem snýr að þér.
- Til að teikna línu á nákvæman stað skaltu skrifa punkt: `[x,y,z]` fyrir punkt í líkaninu, eða `<dx,dy,dz>` fyrir frávik frá upphafinu. Sjá [Skrifaðu nákvæmar stærðir](topic:value-box).

## Skipta fleti

Teiknaðu línu þvert yfir flöt, frá einum jaðri til annars (eða frá jaðri til jaðars í gegnum aðrar línur). Flöturinn skiptist í tvo fleti. Hvor heldur sinni hlið og lit. Það sama gildir um rétthyrning eða hring sem er teiknaður á fleti: formið verður sinn eigin flötur innan þess stærra, sem hefur nú gat.

Svona skipuleggur þú rými á gólfplötu, glugga á vegg eða þrep á stiga: teiknaðu útlínuna á fletinum, og ýttu síðan eða togaðu nýja flötinn.

## Fletir snúa öfugt

Sérhver flötur hefur framhlið og bakhlið. Bakhliðin sýnist blágrá. Fletir sem eru teiknaðir á jörðinni snúa upp; fletir sem eru teiknaðir á öðrum fleti snúa eins og hann.

Ef flötur sýnir bakhliðina þar sem þú býst við framhliðinni, veldu hann og smelltu á {{ui:Reverse face}} í {{ui:Entity info}}.

## Það sem þú sérð meðan þú teiknar

- Litmerki þar sem bendillinn festist, og heiti þess í ábendingunni neðst til vinstri.
- Forskoðun línunnar eða formsins.
- Lifandi stærðin í gildareitnum. Þú getur skrifað yfir hana hvenær sem er.

## Ef formið er ekki þar sem þú bjóst við

- Á snertiskjá, sjá [Bilanaleit](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Ef lína festist við eitthvað langt að baki, snúðu sýninni aðeins: punktar sem eru faldir á bak við flöt festast aldrei, en punktar á jaðri hans gera það.
- Ýttu á {{key:Mod+Z}} til að afturkalla síðasta formið; ein afturköllun fjarlægir eina línu eða eitt form.
