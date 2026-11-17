---
title: Zīmēt virsmas ar līnijām, taisnstūriem, riņķiem un lokiem
summary: Veidojiet plakanas virsmas uz zemes vai uz citām virsmām, dališ tās ar līnijām un zīmējiet riņķus un daudzstūrus ar vajadzīgo malu skaitu.
keywords: zīmēt, līnija, taisnstūris, riņķis, daudzstūris, nobīde, iekšējā nobīde, rāmis, apmale, loks, līkne, spline, gluds, kabelis, ceļš, izliekums, rādiuss, līkne, virsma, stāvplāns, pamats, sadalīt, malas, segmenti, kontūra, zīmulis
from: b6d7b7dd
---

Viss ModelCraft sākas kā plakana **virsma**: slēgta ar malām. Virsmu var zīmēt tieši ar {{ui:Taisnstūris}}, {{ui:Riņķis}} vai {{ui:Daudzstūris}}, vai veidot pa vienai malai ar {{ui:Līnija}}. Virsmas ir tas, ko [Stumt/vilkt](topic:push-pull) pārvērš cietos ķermeņos.

## Taisnstūra zīmēšana

1. Nospiediet {{key:R}}.
2. Noklikšķiniet pirmo stūri: uz zemes vai uz jebkuras modeļa virsmas.
3. Virziet rādītāju. Taisnstūris paliek uz zemes (vai uz virsmas, no kuras sākāt), un vērtību lodziņš ({{ui:Izmēri}}) parāda tā platumu un dziļumu. Padoms rāda "Kvadrāts", kad malas ir vienādas.

   Lai zīmētu uz citas plaknes, norādiet uz to: virsma, kas iet cauri pirmajam stūrim, novieto taisnstūri uz šīs virsmas, bet piesaiste punktam ārpus plaknes (galapunktam, malai vai zilajai asij) uzstāda taisnstūri stāvus cauri abiem stūriem. Piesaistoties atpakaļ punktam uz pirmās plaknes, tas atkal noguļas. Lai paturētu vienu plakni, nospiediet bultiņtaustiņu: {{key:Up}} tur taisnstūri horizontāli (zilajā plaknē), {{key:Right}} — sarkanajā plaknē, {{key:Left}} — zaļajā plaknē. Lai atbloķētu, nospiediet to pašu taustiņu vēlreiz.
4. Noklikšķiniet pretējo stūri vai ierakstiet abus izmērus, atdalītus ar komatu, un nospiediet {{key:Enter}}: `4m,3m`, `4000,3000` milimetru modelī vai `12',10'6"` pēdās un collās.

   Parādās virsma ar četrām malām ap to.

Ierakstītie izmēri iet tajā virzienā, kurā rādījāt: ja rādītājs ir pa kreisi no pirmā stūra, kad ierakstāt, taisnstūris aug pa kreisi.

:::warning
Komats atdala abus izmērus, tāpēc tas nevar būt decimālzīme. Ierakstiet `2.5m,3m`, nekad `2,5m`.
:::

## Riņķa vai daudzstūra zīmēšana

1. Nospiediet {{key:C}} riņķim vai {{key:N}} daudzstūrim.
2. Lai mainītu malu skaitu, ierakstiet to pirms klikšķināšanas: `12s` (vai tikai `12`) un {{key:Enter}}. Riņķis sākas ar 24 malām, daudzstūris — ar 6. Padoms rāda pašreizējo skaitu, un ModelCraft to saglabā nākamajam riņķim, līdz to mainīsiet vai pārslēgsiet rīku.
3. Noklikšķiniet centru, uz zemes vai uz virsmas. Lai centrētu uz virsmas, norādiet uz virsmas vidu ("Virsmas centrs") vai uz vienas tās malas vidu ("Viduspunkts"), kamēr rādītājs ir tieši virsmas iekšpusē: riņķis tiek zīmēts uz šīs virsmas, pat uz garas kastes šaurā gala.
4. Noklikšķiniet, lai iestatītu rādiusu, vai ierakstiet to ({{ui:Rādiuss}} vērtību lodziņā) un nospiediet {{key:Enter}}.

Riņķis ir daudzstūris ar daudzām malām. Kad riņķi izvelkat ar Stumt/vilkt, tā malas tiek mīkstinātas, tāpēc cilindrs izskatās kā viena gluda virsma.

## Loka zīmēšana

1. Nospiediet {{key:A}} ({{ui:Loks}}).
2. Noklikšķiniet, kur loks sākas, tad, kur tas beidzas (vai ierakstiet garumu starp tiem).
3. Virziet rādītāju, lai izliektu loku, un noklikšķiniet. Padoms rāda "Pusriņķis", kad izliekums ir puse no attāluma starp galiem. Vai ierakstiet, cik tālu no galiem atrodas loka vidus: `2` un {{key:Enter}}.

Lai zīmētu loku ap punktu, izmantojiet {{ui:Loks no centra}}: noklikšķiniet centru, tad, kur loks sākas (vai ierakstiet rādiusu), tad, kur tas beidzas (vai ierakstiet leņķi grādos, piemēram, `90`). Tas piesaistās 15° soļiem.

Loks, kas sākts uz virsmas, tiek zīmēts uz šīs virsmas; citādi tas atrodas uz zemes vai stāv vertikāli, ja tā abi gali ir dažādos augstumos. Loks sastāv no 12 segmentiem; zīmēšanas laikā ierakstiet `24s`, lai iegūtu vairāk. Loki noslēdz virsmas tāpat kā līnijas: loks pār taisnstūra stūri to sadala.

## Gludas līknes zīmēšana

{{ui:Līkne}} zīmē gludu līniju, kas iet caur katru noklikšķināto punktu: kabeli, margu ceļu, dārza malu. Tā var pacelties no zemes: punkti piesaistās stūriem, malām un virsmām jebkur, un bultiņtaustiņi bloķē sarkano, zaļo vai zilo virzienu, kā ar {{ui:Līnija}}.

1. Noklikšķiniet {{ui:Līkne}} grupā {{ui:Zīmēšana}}.
2. Noklikšķiniet punktus, caur kuriem iet līkne. Ierakstiet `<0,0,1>` un {{key:Enter}} punktam, kas ir 1 virs pēdējā, `[x,y,z]` precīzai vietai, vai garumu punktam, kas tik tālu ir uz rādītāja pusi.
3. Nospiediet {{key:Enter}} vai veiciet dubultklikšķi, lai pabeigtu. Noklikšķiniet pirmo punktu vēlreiz, lai aizvērtu līkni. {{key:Backspace}} atņem pēdējo punktu.

Līkne atlasās kā viena daļa. Lai to mainītu, atlasiet to un noklikšķiniet {{ui:Rediģēt punktus}} sadaļā {{ui:Objekta informācija}}: tās punkti parādās kā kvadrāti. Noklikšķiniet vienu, tad noklikšķiniet, kur tam jābūt (vai ierakstiet `<dx,dy,dz>`). {{key:Esc}} atjauno punktu sākotnējā vietā un beidz rediģēšanu. Slēgta plakana līkne veido virsmu; līkne, kas iezīmē virsmu, vairs nav rediģējama.

## Nobīde: apmale virsmas iekšpusē vai ārpusē

{{ui:Nobīde}} nokopē virsmas kontūru noteiktā attālumā tās iekšpusē (vai ārpusē), rāmim, apmalei, palodzei vai ekrāna stiklam.

1. Nospiediet {{key:F}} un noklikšķiniet virsmu, vai vispirms atlasiet virsmu un tad nospiediet {{key:F}}.
2. Virziet rādītāju virsmas iekšpusē iekšējai kontūrai vai ārpusē ārējai. Jaunā kontūra seko, un padoms parāda, cik tālu.
3. Noklikšķiniet, vai ierakstiet attālumu un nospiediet {{key:Enter}}.

Virsma sadalās divās: iekšējā virsma un rāmis ap to (vai jauns gredzens ārpusē). Uzreiz var stumt vai vilkt jebkuru no tām: logam uzzīmējiet kasti, izstiepiet to līdz tās biezumam, nobīdiet priekšējo virsmu 30 mm iekšup un iestumiet iekšējo virsmu nedaudz stikla vietai. Caurumi virsmā arī tiek nobīdīti, un loks vai riņķis paliek viena (mazāka vai lielāka) līkne.

- **Dubultklikšķis** virsmai ar {{ui:Nobīde}} nobīda to vēlreiz par pēdējo attālumu.
- **Malas:** atlasiet savienotu malu ķēdi vienā plaknē (piemēram, divas L formas līnijas), nospiediet {{key:F}}, pārvietojieties uz vēlamo pusi un ierakstiet attālumu: tiek zīmēta paralēla kopija ar sastiķētiem stūriem.
- Ja attālums ir lielāks, nekā virsma pieļauj, ModelCraft to paziņo un nezīmē neko.

## Loki, riņķi un daudzstūri ir līknes

Noklikšķiniet jebkuru loka, riņķa vai daudzstūra segmentu, un visa līkne tiek atlasīta. {{ui:Objekta informācija}} tad parāda tās rādiusu, segmentus, leņķi (lokiem) un garumu. Ierakstiet tur jaunu rādiusu, lai to pārmērītu ap tā centru; virsmas, kas zīmētas tās plaknē, seko. Kad līknes virsma ir izstumta vai izvilkta, tās rādiuss paliek tāds, kāds ir.

## Zīmēšana ar līnijām

1. Nospiediet {{key:L}}.
2. Noklikšķiniet, kur līnija sākas.
3. Noklikšķiniet, kur tā beidzas, vai ierakstiet garumu un nospiediet {{key:Enter}}. Ierakstītais garums iet rādītāja norādītajā virzienā.
4. Turpiniet klikšķināt. Katrs klikšķis sāk nākamo līniju no iepriekšējās beigām.
5. Aizveriet kontūru, noklikšķinot pirmo punktu vēlreiz. Kad līnijas noslēdz plakanu cilpu, tā piepildās ar virsmu, un rīks pārtrauc ķēdēšanu. Jebkurā brīdī nospiediet {{key:Esc}}, lai apturētu.

Līnijas seko sarkanajam, zaļajam un zilajam virzienam, kad tiem tuvojaties; līnija iekrāsojas šajā krāsā, un padoms saka "Uz sarkanās ass". Skatiet [Virziena noteikšana un piesaiste](topic:inference), lai uzzinātu, kā bloķēt virzienu un piesaistīties punktiem.

### Kur iet līnija, ja tā neko nesaskaras

- Līnija, kas sākas uz virsmas, paliek šīs virsmas plaknē.
- Līnija, kas sākas uz zemes vai tukšā telpā, paliek horizontāli līdzena ar sākuma punktu. Ja modeli skatāt malas virzienā, tā iet vertikālajā plaknē, kas vērsta pret jums.
- Lai zīmētu līniju uz precīzu vietu, ierakstiet punktu: `[x,y,z]` punktam modelī vai `<dx,dy,dz>` nobīdei no sākuma. Skatiet [Ievadiet precīzus izmērus](topic:value-box).

## Virsmas sadalīšana

Zīmējiet līniju pāri virsmai, no vienas malas līdz otrai (vai no malas līdz malai caur citām līnijām). Virsma sadalās divās virsmās. Katra saglabā savu pusi un krāsu. Tas pats notiek ar taisnstūri vai riņķi, kas zīmēts uz virsmas: forma kļūst par savu virsmu lielākās iekšpusē, kurai tagad ir caurums.

Tā var izkārtot telpas uz pārseguma, logu uz sienas vai pakāpienu uz kāpnēm: uzzīmējiet kontūru uz virsmas un tad stumiet vai velciet jauno virsmu.

## Virsmas, kas vērstas nepareizi

Katrai virsmai ir priekšpuse un aizmugure. Aizmugure ir zilpelēka. Virsmas, zīmētas uz zemes, vērstas uz augšu; virsmas, zīmētas uz citas virsmas, vērstas tāpat kā tā.

Ja virsma rāda aizmuguri tur, kur gaidāt priekšpusi, atlasiet to un noklikšķiniet {{ui:Apgriezt virsmu}} sadaļā {{ui:Objekta informācija}}.

## Ko redzat zīmēšanas laikā

- Krāsains marķieris, kur rādītājs piesaistās, un tā nosaukums padoma joslā apakšā pa kreisi.
- Līnijas vai formas priekšskatījums.
- Tiešraides izmērs vērtību lodziņā. To var pārrakstīt jebkurā brīdī.

## Ja forma nav tur, kur gaidījāt

- Skārienekrānā skatiet [Problēmu novēršana](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Ja līnija piesaistījās kaut kam tālu aiz muguras, nedaudz pagrieziet skatu: punkti, kas paslēpti aiz virsmas, nekad nepiesaistās, bet punkti uz tās malas — jā.
- Nospiediet {{key:Mod+Z}}, lai atsauktu pēdējo formu; viens atsaukums noņem vienu līniju vai vienu formu.
