---
title: Skjár ModelCraft
summary: Ferð um tækjastikuna, spjöldin hvoru megin, þrívíddarsýnina og stöðustikuna, eftir nöfnum þeirra á skjánum.
keywords: skjár, útlit, tækjastika, spjöld, yfirlit, upplýsingar um eind, stíll, senur, stöðustika, gildisreitur, mælieiningar, viðmót, ferð
from: 4a9a4516
---

Ofan frá og niður: forritastikan, tækjastikan, dálkarnir þrír (vinstri spjöld, þrívíddarsýn, hægri spjöld) og stöðustikan.

## Forritastikan

Mjói borðinn efst tilheyrir öllum CadCraft-forritunum. Hann hefur heiti forritsins og útgáfu, {{ui:Um ModelCraft}}, hnappinn fyrir skjástillingu og rofann {{ui:Pappír}} / {{ui:Líkan}}.

- {{ui:Pappír}} er ljósa þemað og {{ui:Líkan}} það dökka. Þrívíddarsýnin breytir litum sínum til samræmis; líkanið þitt breytist ekki.
- Hnappurinn fyrir skjástillingu (hann sýnir {{ui:Allur skjárinn}} í byrjun) og {{key:Ctrl+Shift+F}} skipta á milli þriggja stillinga: venjuleg, allur skjárinn, og allur skjárinn með stikunum faldar. Þegar stikurnar eru faldar, færðu bendilinn að efri brún skjásins (eða pikkaðu á hana) til að fá þær aftur. {{key:Esc}} hættir öllum skjánum.

:::note
{{key:Ctrl+Shift+F}} notar Control-takkann á hverri tölvu, líka á Mac. Á iPhone, þar sem vafrar hafa ekki allan skjáinn, felur og sýnir hnappurinn aðeins stikurnar.
:::

## Tækjastikan

Tækjastikunni er skipt í merkta flokka. Færðu bendilinn yfir hnapp til að sjá heiti hans og takka.

Vinstra megin er listinn {{ui:Vinnusvæði}} sem skiptir um hvað tækjastikan og hægri spjaldið eru fyrir: {{ui:Líkan}} (ýta/toga mótun, skoðunin hér að neðan), {{ui:Möskvi}} ([breyta möskva](topic:mesh-edit)), {{ui:Ferill}} ([ferlahlutir](topic:curves)), {{ui:UV}} ([leggja út UV](topic:uv)), {{ui:Móta}} ([móta](topic:sculpt)), {{ui:Skyggnun}} ([efni búin til með hnútum](topic:shading)), {{ui:Hreyfa}} ([hreyfa](topic:animate)) og {{ui:Myndgera}} ([myndgera í sýninni](topic:render#render-in-the-view)).

| Flokkur | Hnappar |
|---|---|
| {{ui:Skrá}} | {{ui:Nýtt}}, {{ui:Opna}}, {{ui:Vista}}, {{ui:Flytja inn}}, {{ui:Flytja út}} (valmynd sniða) |
| {{ui:Teikna}} | {{ui:Lína}} ({{key:L}}), {{ui:Rétthyrningur}} ({{key:R}}), {{ui:Hringur}} ({{key:C}}), {{ui:Marghyrningur}} ({{key:N}}) |
| Breyting | {{ui:Velja}} ({{key:Space}}), {{ui:Ýta/toga}} ({{key:P}}), {{ui:Færa}} ({{key:M}}), {{ui:Snúa}} ({{key:Q}}), {{ui:Mælikvarði}} ({{key:S}}), {{ui:Strokleður}} ({{key:E}}), {{ui:Málband}} ({{key:T}}) |
| {{ui:Skipuleggja}} | {{ui:Eining}} ({{key:G}}), {{ui:Hópur}} ({{key:Shift+G}}), {{ui:Sundurliða}} |
| {{ui:Breyta}} | {{ui:Afturkalla}} ({{key:Mod+Z}}), {{ui:Endurgera}} ({{key:Mod+Y}}), {{ui:Afrita}} ({{key:Mod+C}}), {{ui:Líma}} ({{key:Mod+V}}), {{ui:Meira}} (valmynd: klippa, afrita, líma, líma á sama stað {{key:Mod+Shift+V}}, tvöfalda {{key:Mod+D}}, eyða, velja allt, velja ekkert, og takkastíllinn) |
| Myndavél | {{ui:Snúast}} ({{key:O}}), {{ui:Hliðra}} ({{key:H}}), {{ui:Aðdráttur}} ({{key:Z}}), {{ui:Öll sýn}} ({{key:Shift+Z}}), {{ui:Sýnir}} (valmynd) |

Takkarnir sem sýndir eru eru þeir fyrir ýta/toga; ef Mótunarstíllinn er valinn í [stillingum ModelCraft](topic:settings), sýna vísbendingarnar þá takka í staðinn. Verkfærið sem þú notar er sýnt niðurtakað. Á mjóum skjá skrunar tækjastikan til hliðar.

Valmyndin {{ui:Sýnir}} hefur {{ui:Ísó}}, {{ui:Ofanfrá}}, {{ui:Framan}}, {{ui:Hægri}}, {{ui:Aftan}}, {{ui:Vinstri}} og {{ui:Neðanfrá}}, hver löguð að líkaninu, og {{ui:Sjónarhorn}}, sem skiptir á milli sjónarhorns og samsíðuvörpunar.

## Þrívíddarsýnin

Miðja skjásins. Rauðu, grænu og bláu línurnar eru ásarnir: rauð og græn liggja á jörðinni, blá vísar upp, og **norðrið er græni ásinn**. Þar sem þær mætast er upphafspunkturinn.

- Í byrjun sýnir spjald sem heitir „Byrjaðu að móta“ fyrstu takkana. Það hverfur þegar þú velur teikniverkfæri eða smellir í sýnina.
- Meðan verkfæri vinnur sýnir sýnin **ályktunarmerki**: litlar litaðar myndir þar sem bendillinn smellir (grænn hringur á endapunkti, blágrænn á miðpunkti, rauður ferningur á brún, blár tígull á fleti). Sjá [Ályktun og smellifestingu](topic:inference).
- Valdir hlutir verða bláir. Flötur sem sést aftan frá er blágrár.
- Þegar þú opnar hóp til breytinga dofnar allt utan hans, og ásarnir færast yfir á eigin ása hópsins.
- Þegar líkan er með senur birtist röð af senuflipum efst í sýninni.
- Dragðu skrá hvar sem er á sýnina til að opna hana eða flytja inn.

## Vinstri spjöldin

**{{ui:Yfirlit}}** sýnir hópana og einingarnar í líkaninu, hreiðraðar eins og þær eru hreiðraðar í líkaninu. Eining sem er notuð oftar en einu sinni sýnir hversu oft, til dæmis „Gluggi (4)“.

- Smelltu á heiti til að velja það. Tvísmelltu til að opna það til breytinga.
- **Leita eftir heiti** (sýnt þegar tveir hópar eða fleiri eru til) heldur aðeins þeim línum sem heitið passar við, ásamt hópunum sem þær eru í. {{key:Esc}} hreinsar það.
- **Augað** aftast í línu felur eða sýnir þann hóp eða einingu (eins og {{ui:Breyta}} › {{ui:Meira}} › {{ui:Fela}} gerir). Merkistákn þýðir að hann er falinn af [merki sínu](topic:tags).
- **Endurnefna á staðnum:** smelltu á línu, ýttu síðan á {{key:F2}}, skrifaðu, og ýttu á {{key:Enter}} ({{key:Esc}} heldur gamla heitinu).
- **Dragðu línu** á miðja línu annars hóps til að færa hana inn í þann hóp, á efri eða neðri brún línu til að setja hana rétt fyrir framan eða aftan þá línu, eða á fyrirsögnina {{ui:Yfirlit}} til að færa hana á efsta stig. Hún er áfram þar sem hún er í líkaninu, og heldur lit sínum, merki og heiti. Hópur getur ekki farið inn í sjálfan sig. Hver færsla er eitt afturköllunarskref. Sjá [Raða upp í Yfirliti](topic:groups-components#rearrange-in-the-outliner).
- Meðan þú breytir innan hóps stendur á línu „Breyting: Líkan › …“, og hnappur {{ui:Loka hópi}} birtist. Hann lokar öllum opnum stigum í einu.

**{{ui:Einingar}}** sýnir allar skilgreiningar eininga með því hversu mörg eintök eru sett („3×“) og hnapp {{ui:Staðsetja}} sem bætir við öðru eintaki þar sem þú smellir.

## Hægri spjöldin

**{{ui:Upplýsingar um eind}}** lýsir því sem er valið. Fyrirsögnin breytist til að segja hvað það er:

| Fyrirsögn | Sýnir | Hnappar |
|---|---|---|
| {{ui:Líkan}} (ekkert valið) | Fletir, brúnir, hópar, einingar og hversu margar eru settar, leiðbeiningarlínur, heildarstærð | {{ui:Eyða öllum leiðbeiningarlínum}} (þegar leiðbeiningarlínur eru til staðar) |
| Flötur | Flatarmál, fjöldi gata | {{ui:Snúa fleti við}} |
| Brún | Lengd | ekkert |
| Hópur eða eining | Heiti (skrifaðu til að endurnefna), hversu oft það er sett, hvort það er lokaður fasti hlutur, rúmmál þess, stærð þess | {{ui:Breyta}}, {{ui:Sundurliða}}, {{ui:Gera einstaka}} (eining sett oftar en einu sinni), {{ui:Búa til einingu}} (hópur) |
| Leiðbeiningarpunktur eða leiðbeiningarlína | ekkert | {{ui:Eyða}} |
| Nokkrir hlutir | Hversu margir fletir, brúnir, hópar og leiðbeiningar, heildarflatarmál flatanna | {{ui:Búa til einingu (G)}}, {{ui:Búa til hóp (Shift+G)}} |

**{{ui:Stíll}}** stillir hvernig líkanið er teiknað: {{ui:Fletir}} ({{ui:Skyggt}}, {{ui:Falin lína}}, {{ui:Vírlíkan}}, {{ui:Röntgen}}), {{ui:Sýna brúnir}}, og {{ui:Sólarskuggar}} með dagsetningu, tíma og staðsetningu sólarinnar. Sjá [Stíla og sólarskugga](topic:styles-shadows).

**{{ui:Senur}}** vistar sýnir: {{ui:Bæta við senu}}, listann yfir senur, og {{ui:Fyrri}}, {{ui:Spila}} og {{ui:Næsta}}. Sjá [Vista sýnir sem senur](topic:scenes).

## Stöðustikan

Neðst, frá vinstri til hægri:

1. **Vísbendingin**: hvað verkfærið vill næst, eða hvað bendillinn smellir á („Endapunktur“, „Á rauðum ás“).
2. **Skilaboð**: hvað var að gerast („Afturkallaði ýta/toga.“, „Flutti inn site.dxf: 1697 brúnir á jörðinni, í hópi.“) eða hvers vegna eitthvað virkaði ekki.
3. **Gildisreiturinn**: merkið breytist eftir verkfæri ({{ui:Lengd}}, {{ui:Málsetningar}}, {{ui:Radíus}}, {{ui:Hliðar}}, {{ui:Fjarlægð}}, {{ui:Horn}}, {{ui:Mælikvarði}}, {{ui:Jafnfjarlægð}}). Hann sýnir lifandi stærðina meðan þú vinnur, og tekur við því sem þú skrifar. Sjá [Skrifaðu nákvæmar stærðir í gildisreitinn](topic:value-box).
4. **Lyklastíllinn**: {{ui:Lyklar: Ýta/toga}} eða {{ui:Lyklar: Mótun}} skiptir flýtilyklum og músarhnöppum í einu (eins og í [stillingum ModelCraft](topic:settings)).
5. **{{ui:Smellifesta}} og {{ui:Árekstur}}**: smellifesting á punkta, brúnir og ása, og fastir hlutir stöðvast þar sem þeir snertast. Yfirstrikað = slökkt. Smelltu til að skipta. Sjá [stillingar ModelCraft](topic:settings).
6. **Mælieiningavalið**: mælieiningarnar sem lengdir eru sýndar í. Sjá [Byrjaðu](topic:getting-started#check-the-units-first).

## Á mjóum skjá

Undir um 760 dílum á breidd (sími, eða mjór gluggi) heldur þrívíddarsýnin skjánum. Tækjastikan er ein röð sem skrunar til hliðar, og spjöldin opnast sem blöð frá stikunni neðst á skjánum.
