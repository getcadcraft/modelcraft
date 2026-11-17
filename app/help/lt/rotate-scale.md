---
title: Sukimas ir mastelio keitimas
summary: Sukite objektus apie tašką spustelėdami arba įvesdami laipsnius ir keiskite jų dydį tolygiai pagal koeficientą.
keywords: mastelio rankenėlės, tempimas, netolygus, pagal ašį, apversti, veidrodinis atspindys, veidrodinė kopija, apversti išilgai, sukti, pasukti, kampas, laipsniai, transporteris, mastelis, keisti dydį, didinti, mažinti, koeficientas, tolygus mastelis
from: 45cdcb49
---

## Sukti

{{ui:Rotate}} ({{key:Q}}) pasuka pasirinkimą apie centro tašką. Reikia trijų spustelėjimų: centro, pradinės krypties ir galutinės krypties.

1. Pasirinkite tai, ką norite pasukti. Jei nieko nepasirinkta, Sukti paima tai, ką pirmiausia spustelėsite.
2. Paspauskite {{key:Q}}. Žiedas seka žymiklį ir rodo plokštumą, kurioje sukisite.
3. Spustelėkite sukimosi centrą.
   - Ant žemės ar tuščioje erdvėje žiedas guli plokščias (mėlynas): sukimas vyksta apie vertikalią ašį, kaip pastato pasukimas jo vietoje.
   - Ant paviršiaus žiedas guli to paviršiaus plokštumoje: sukimas vyksta apie paviršiaus savąją kryptį. Spustelėkite ant sienos, kad sukiotumėte kažką apie horizontalią ašį.
4. Spustelėkite tašką, kuris nustato, kur prasideda kampas, pavyzdžiui, išilgai sukamo objekto krašto.
5. Judinkite žymiklį aplink centrą. Kampas rodomas patarime ir vertės laukelyje ({{ui:Angle}}). Priartėjus prie vieno iš jų, jis įsitraukia į 15° žingsnius.
6. Spustelėkite, kad baigtumėte, arba įveskite kampą laipsniais ir paspauskite {{key:Enter}}: `90`, `45`, `-30`.

   Teigiami kampai sukasi prieš laikrodžio rodyklę, žiūrint iš pusės, į kurią nukreiptas žiedas.

Sukdami paspauskite {{key:Ctrl}} (arba {{key:Alt}}), kad pasuktumėte **kopiją** ir originalą paliktumėte vietoje, kaip su Perkelti; patarime nurodoma, ar kopija įjungta, o pakartotinis klavišo paspaudimas ją išjungia. Iškart po pasuktos kopijos įveskite `3x`, kad gautumėte daugiau kopijų aplink tą patį centrą.

Kaip ir Perkelti, sukant dalį sujungtos geometrijos, prie jos prikabinti paviršiai susisuka. Pirmiausia sugrupuokite daiktus, kad pasuktumėte juos visus.

:::note
Patarime sakoma, kad rodyklių klavišai parenka sukimosi ašį, tačiau šioje versijoje prieš pirmąjį spustelėjimą jie vietoj to sukasi vaizdą. Norėdami pasirinkti ašį, spustelėkite centrą ant paviršiaus, kuris nukreiptas taip, kaip norite. Žr. [Dar neįdiegta](topic:not-built-yet).
:::

## Mastelis

{{ui:Scale}} ({{key:S}}) keičia pasirinkimo dydį. Pirmiausia pasirinkite, ką norite keisti, tada paspauskite {{key:S}}: ant kampų, kraštų ir šonų vidurio jo dėžutės atsiranda maži kvadratėliai (rankenėlės).

### Tempti ar keisti mastelį rankenėlėmis

- **Kampo** rankenėlė keičia mastelį tolygiai visomis kryptimis, apie priešingą kampą.
- Rankenėlė šono viduryje tempia tik ta kryptimi, apie priešingą šoną: padarykite dėžę ilgesnę, bet ne aukštesnę.
- Rankenėlė dėžutės krašto viduryje tempia dviem kryptimis per jį.
- Laikykite {{key:Ctrl}}, spustelėdami rankenėlę, kad keistumėte mastelį apie dėžutės vidurį.

Spustelėkite rankenėlę, judinkite žymiklį ir spustelėkite dar kartą; arba spustelėkite rankenėlę, įveskite koeficientą (`2` padvigubina, `0.5` perpus sumažina) ir paspauskite {{key:Enter}}. Norėdami kiekvienai krypčiai nustatyti atskirą koeficientą, įveskite tris – raudonai, žaliai ir mėlynai: `2,1,0.5`. Atidarytoje grupėje kryptys yra pačios grupės.

### Mastelio keitimas apie bet kurį tašką

Spustelėkite bet kur, išskyrus rankenėlę, kad tolygiai keistumėte mastelį apie savo pasirinktą tašką. Reikia trijų spustelėjimų:

1. Pasirinkite, ką norite keisti. Jei nieko nepasirinkta, Mastelis paima tai, ką pirmiausia spustelėsite.
2. Paspauskite {{key:S}}.
3. Spustelėkite tašką, kuris lieka vietoje (ne ant rankenėlės), pavyzdžiui, apatinį kampą.
4. Spustelėkite atskaitos tašką. Jo atstumas nuo pirmojo taško laikomas 1×.
5. Judinkite žymiklį link pirmojo taško arba nuo jo. Koeficientas rodomas patarime ir vertės laukelyje ({{ui:Scale}}).
6. Spustelėkite, kad baigtumėte, arba įveskite koeficientą ir paspauskite {{key:Enter}}: `2` padvigubina dydį, `0.5` perpus sumažina.

### Nustatyti tikslų dydį

Norėdami, kad kažkas turėtų tikslų ilgį, apskaičiuokite koeficientą: naujas ilgis padalytas iš dabartinio ilgio. Trijų spustelėjimų režime vertės laukelis atlieka aritmetiką, todėl įveskite `4.2/3.6`, kad 3.6 m sienos ilgis taptų 4.2 m. Rankenėlės vertės laukelis priima tik paprastus skaičius: pirmiausia apskaičiuokite koeficientą (4.2 padalinti iš 3.6 yra maždaug 1.1667). Pirmiausia pasirinkite kraštą, kad perskaitytumėte jo dabartinį ilgį {{ui:Entity info}} skyriuje.

### Ištaisyti importą, kuris atkeliavo netinkamo dydžio

OBJ failai neturi vieneto, todėl modelis, nubraižytas milimetrais, atkeliauja 1000 kartų per didelis. Pasirinkite importuotą grupę, paspauskite {{key:S}}, spustelėkite kampo rankenėlę, įveskite `0.001` ir paspauskite {{key:Enter}}. Modeliui, nubraižytam coliais, įveskite `0.0254`.

## Svarbu žinoti

- Mastelio keitimas apie tašką trimis spustelėjimais yra tolygus. Norėdami tempti tik viena kryptimi, naudokite šono ar krašto rankenėlę (žr. aukščiau).
- Grupės ar komponento mastelio keitimas pakeičia kopiją, kurią keitėte; kitos komponento kopijos išlaiko savo dydį.
- Prieš paskutinį spustelėjimą paspauskite {{key:Esc}}, kad atšauktumėte.

## Apversti

{{ui:Edit}} › {{ui:More}} › {{ui:Flip along red}}, {{ui:Flip along green}} arba {{ui:Flip along blue}} veidrodiškai atvaizduoja pasirinkimą vietoje, per jo dėžutės vidurį: kairės pusės laiptai tampa dešinės pusės laiptais. Paviršiai išlieka nukreipti į išorę, o grupė ar komponentas veidrodiškai atvaizduojami kaip visuma (jų vidus nerašomas iš naujo).

{{ui:Flipped copy along red}} (ir žalia, mėlyna) palieka originalą vietoje ir šalia jo deda veidrodinę kopiją, per tolimąją pasirinkimo dėžutės pusę: kitos poros durys, kitas pastato sparnas. Prie tos vietos prisilietusi laisvoji geometrija prisijungia prie originalo, kaip visada daroma su besiliečiančia geometrija; kad juos atskirtumėte, pirmiausia padarykite originalą grupe.

Atidarytoje grupėje raudona, žalia ir mėlyna yra pačios grupės ašys.
