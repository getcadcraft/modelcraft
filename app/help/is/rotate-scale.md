---
title: Snúa og breyta mælikvarða
summary: Snúðu hlutum um punkt með smelli eða með því að slá inn gráður, og breyttu stærð þeirra jafnt eftir stuðli.
keywords: mælikvarði, mælikvarðshandföng, teygja, ójafnt, eftir ás, spegla, speglað afrit, spegla eftir, snúa, beygja, horn, gráður, gráðubogi, breyta stærð, stækka, minnka, stuðull, jafn mælikvarði
from: 45cdcb49
---

## Snúa

{{ui:Snúa}} ({{key:Q}}) snýr valinu um miðpunkt. Það tekur þrjá smelli: miðjuna, upphafsstefnu og endastefnu.

1. Veldu það sem þú vilt snúa. Ef ekkert er valið tekur Snúa það sem þú smellir á fyrst.
2. Ýttu á {{key:Q}}. Hringur fylgir bendlinum og sýnir flötinn sem þú snýrð í.
3. Smelltu á snúningsmiðjuna.
   - Á jörðinni eða í tómu rými liggur hringurinn flatur (blár): snúningurinn er um lóðréttan ás, eins og þegar byggingu er snúið á lóð sinni.
   - Á fleti liggur hringurinn í plani þess flatar: snúningurinn er um eigin stefnu flatarins. Smelltu á vegg til að snúa einhverju um láréttan ás.
4. Smelltu á punkt sem ákvarðar hvar hornið byrjar, til dæmis eftir brún þess sem þú snýrð.
5. Færðu bendilinn um miðjuna. Hornið sést í oddinum og í gildisreitnum ({{ui:Horn}}). Það smellur í þrep upp á 15° þegar þú kemst nálægt einu.
6. Smelltu til að ljúka, eða sláðu inn hornið í gráðum og ýttu á {{key:Enter}}: `90`, `45`, `-30`.

   Jákvæð horn snúast rangsælis, séð frá þeirri hlið sem hringurinn snýr að.

Ýttu á {{key:Ctrl}} (eða {{key:Alt}}) meðan þú snýrð til að snúa **afriti** og láta frumritið vera þar sem það er, eins og með Færa; oddurinn segir hvort afritun sé kveikt, og ef þú ýtir aftur á takkann slekkur hann á henni. Sláðu inn `3x` strax á eftir snúnu afriti fyrir fleiri afrit í kringum sama miðpunkt.

Eins og með Færa: þegar hluta tengdrar rúmfræði er snúið, snúast fletirnir sem eru festir við hana. Hópaðu hluti fyrst til að snúa þeim heilum.

:::note
Oddurinn segir að örvatakkar velji snúningsásinn, en í þessari útgáfu snúa þeir sjónarhorninu í staðinn áður en fyrsti smellur er gerður. Til að velja ásinn, smelltu á miðjuna á fleti sem snýr í þá átt sem þú vilt. Sjá [Ekki smíðað enn](topic:not-built-yet).
:::

## Mælikvarði

{{ui:Mælikvarði}} ({{key:S}}) breytir stærð valsins. Veldu það sem þú vilt breyta fyrst og ýttu síðan á {{key:S}}: litlir ferningar (handföng) birtast á hornum, brúnum og miðjum hliða kassans þess.

### Teygja eða breyta mælikvarða með handföngunum

- **Horn-handfang** breytir stærð jafnt í allar áttir, um gagnstæða hornið.
- Handfangið á miðri **hlið** teygir eftir þeirri stefnu einni, um gagnstæðu hliðina. Gerðu kassa lengri án þess að gera hann hærri.
- Handfangið á miðri **kassabrún** teygir í báðar áttirnar þvert á hana.
- Haltu {{key:Ctrl}} þegar þú smellir á handfang til að breyta mælikvarða um miðju kassans í staðinn.

Smelltu á handfang, færðu bendilinn og smelltu aftur; eða smelltu á handfangið og sláðu inn stuðul (`2` tvöfaldar, `0.5` helmingar) og ýttu á {{key:Enter}}. Til að gefa hverri átt sinn stuðul, sláðu inn þrjá: fyrir rautt, grænt og blátt: `2,1,0.5`. Inni í opnum hópi eru áttirnar eigin áttir hópsins.

### Breyta mælikvarða um hvaða punkt sem er

Smelltu hvar sem er annars staðar en á handfangi til að breyta stærð jafnt um punkt að eigin vali. Það tekur þrjá smelli:

1. Veldu það sem þú vilt breyta stærð á. Ef ekkert er valið tekur Mælikvarði það sem þú smellir á fyrst.
2. Ýttu á {{key:S}}.
3. Smelltu á punktinn sem stendur kyrr (ekki á handfangi), til dæmis neðra horn.
4. Smelltu á viðmiðunarpunkt. Fjarlægð hans frá fyrsta punkti telst vera 1×.
5. Færðu bendilinn í átt að eða frá fyrsta punkti. Stuðullinn sést í oddinum og í gildisreitnum ({{ui:Mælikvarði}}).
6. Smelltu til að ljúka, eða sláðu inn stuðul og ýttu á {{key:Enter}}: `2` tvöfaldar stærðina, `0.5` helmingar hana.

### Breyta í nákvæma stærð

Til að gera eitthvað að nákvæmri lengd, reiknaðu stuðulinn: ný lengd deilt með núverandi lengd. Í þriggja smella ham reiknar gildisreiturinn, þannig að þú getur slegið inn `4.2/3.6` til að gera 3.6 m vegg 4.2 m langan. Gildisreitur handfangs tekur aðeins venjulegar tölur: reiknaðu stuðulinn fyrst (4.2 deilt með 3.6 er um 1.1667). Veldu brúnina fyrst til að lesa núverandi lengd hennar í {{ui:Upplýsingar um eind}}.

### Laga innflutning sem kom í röngum stærð

OBJ-skrár bera enga einingu, þannig að líkan teiknað í millimetrum kemur 1000 sinnum of stórt. Veldu innflutta hópinn, ýttu á {{key:S}}, smelltu á horn-handfang, sláðu inn `0.001` og ýttu á {{key:Enter}}. Fyrir líkan teiknað í tommum, sláðu inn `0.0254`.

## Atriði sem gott er að vita

- Að breyta mælikvarða um punkt með þremur smellum er jafnt. Til að teygja í eina átt eingöngu, notaðu hlið- eða brúnarhandfang (sjá að ofan).
- Að breyta mælikvarða á hópi eða íhlut breytir afritinu sem þú breyttir; önnur afrit íhlutsins halda stærð sinni.
- Ýttu á {{key:Esc}} fyrir síðasta smell til að hætta við.

## Spegla

{{ui:Breyta}} › {{ui:Meira}} › {{ui:Spegla eftir rauðu}}, {{ui:Spegla eftir grænu}} eða {{ui:Spegla eftir bláu}} speglar valinu á sínum stað, í gegnum miðju kassans þess: vinstri stigi verður hægri stigi. Fletir halda að snúa út, og hópur eða íhlutur er speglaður í heild sinni (innviðir þeirra eru ekki skrifaðir aftur).

{{ui:Speglað afrit eftir rauðu}} (og grænu, bláu) skilur frumritið eftir á sínum stað og setur speglað afrit við hlið þess, þvert yfir fjarlægu hlið kassa valsins: hina hurðina í pari, hinn vænginn á byggingu. Laus rúmfræði sem snertir þar tengist frumritinu, eins og snertandi rúmfræði gerir alltaf; gerðu frumritið fyrst að hópi til að halda þeim aðskildum.

Inni í opnum hópi eru rauður, grænn og blár eigin ásar hópsins.
