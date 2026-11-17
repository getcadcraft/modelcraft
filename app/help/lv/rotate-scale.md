---
title: Pagriezt un mērogot
summary: Pagrieziet lietas ap punktu, noklikšķinot vai ierakstot grādus, un mainiet to izmēru vienmērīgi pēc koeficienta.
keywords: mērogošanas rokturi, stiepšana, nevienmērīgi, pa asīm, apgriezt, spoguļot, spoguļkopija, apgriezt pa, pagriezt, pagrieziens, leņķis, grādi, leņķmērs, mērogot, mainīt izmēru, palielināt, samazināt, koeficients, vienmērīga mērogošana
from: 45cdcb49
---

## Pagriezt

{{ui:Pagriezt}} ({{key:Q}}) pagriež atlasi ap centra punktu. Tam nepieciešami trīs klikšķi: centrs, sākuma virziens un beigu virziens.

1. Atlasiet to, ko vēlaties pagriezt. Ja nekas nav atlasīts, Pagriezt paņem to, uz ko noklikšķināt pirmo.
2. Nospiediet {{key:Q}}. Gredzens seko rādītājam un rāda plakni, kurā pagriezīsiet.
3. Noklikšķiniet uz pagriešanas centra.
   - Uz zemes vai tukšā telpā gredzens guļ plakani (zils): pagrieziens notiek ap vertikālu asi, kā ēkas pagriešana uz tās zemesgabala.
   - Uz virsmas gredzens atrodas šīs virsmas plaknē: pagrieziens notiek ap pašas virsmas virzienu. Noklikšķiniet uz sienas, lai pagrieztu kaut ko ap horizontālu asi.
4. Noklikšķiniet punktu, kas nosaka, kur leņķis sākas, piemēram, pa pagriežamās lietas šķautni.
5. Pārvietojiet rādītāju ap centru. Leņķis rādās padomā un vērtību lodziņā ({{ui:Leņķis}}). Tuvojoties vienam no soļiem, tas pieķeras 15° soļiem.
6. Noklikšķiniet, lai pabeigtu, vai ierakstiet leņķi grādos un nospiediet {{key:Enter}}: `90`, `45`, `-30`.

   Pozitīvi leņķi pagriež pretēji pulksteņrādītāja virzienam, skatoties no puses, uz kuru vērsts gredzens.

Nospiediet {{key:Ctrl}} (vai {{key:Alt}}) pagriešanas laikā, lai pagrieztu **kopiju** un atstātu oriģinālu vietā, tāpat kā ar Pārvietot; padomā ir teikts, vai kopēšana ir ieslēgta, un, nospiežot taustiņu vēlreiz, tā tiek izslēgta. Ierakstiet `3x` tieši pēc pagrieztas kopijas, lai iegūtu vairāk kopiju ap to pašu centru.

Tāpat kā Pārvietot, pagriežot daļu no savienotas ģeometrijas, tiek pagriezītas arī virsmas, kas tai ir pievienotas. Vispirms grupējiet lietas, lai pagrieztu tās kā veselumu.

:::note
Padomā ir teikts, ka bultiņu taustiņi izvēlas rotācijas asi, bet šajā versijā tie pirms pirmā klikšķa griež skatu. Lai izvēlētos asi, noklikšķiniet centru uz virsmas, kas vērsta vajadzīgajā virzienā. Skatiet [Vēl nav pieejams](topic:not-built-yet).
:::

## Mērogot

{{ui:Mērogot}} ({{key:S}}) maina atlases izmēru. Vispirms atlasiet to, kura izmēru vēlaties mainīt, tad nospiediet {{key:S}}: uz stūriem, malām un sānu vidusdaļām parādās mazi kvadrātiņi (rokturi) uz tās kastes.

### Stiepšana vai mērogošana ar rokturiem

- **Stūra** rokturis mērogo vienmērīgi visos virzienos, ap pretējo stūri.
- Roktura vidusdaļā uz **malas** stiepj tikai pa šo virzienu, ap pretējo malu: padariet kasti garāku, nepadarot to augstāku.
- Roktura vidusdaļā uz **kastes šķautnes** stiepj divos virzienos pāri tai.
- Turiet {{key:Ctrl}}, noklikšķinot uz roktura, lai mērogotu ap kastes vidu.

Noklikšķiniet uz roktura, pārvietojiet rādītāju un vēlreiz noklikšķiniet; vai noklikšķiniet uz roktura un ierakstiet koeficientu (`2` dubulto, `0.5` samazina uz pusi) un nospiediet {{key:Enter}}. Lai katram virzienam piešķirtu savu koeficientu, ierakstiet trīs: sarkanajam, zaļajam un zilajam: `2,1,0.5`. Atvērtā grupā virzieni ir pašas grupas virzieni.

### Mērogot ap jebkuru punktu

Noklikšķiniet jebkur, izņemot uz roktura, lai vienmērīgi mērogotu ap savu punktu. Tam nepieciešami trīs klikšķi:

1. Atlasiet to, kura izmēru vēlaties mainīt. Ja nekas nav atlasīts, Mērogot paņem to, uz ko noklikšķināt pirmo.
2. Nospiediet {{key:S}}.
3. Noklikšķiniet uz punkta, kas paliek vietā (ne uz roktura), piemēram, apakšējā stūra.
4. Noklikšķiniet uz atskaites punkta. Tā attālums no pirmā punkta tiek uzskatīts par 1×.
5. Pārvietojiet rādītāju uz pirmo punktu vai prom no tā. Koeficients rādās padomā un vērtību lodziņā ({{ui:Mērogot}}).
6. Noklikšķiniet, lai pabeigtu, vai ierakstiet koeficientu un nospiediet {{key:Enter}}: `2` izmēru dubulto, `0.5` samazina uz pusi.

### Precīzs izmērs

Lai kaut kas būtu precīzs garums, aprēķiniet koeficientu: jaunais garums dalīts ar esošo garumu. Trīs klikšķu režīmā vērtību lodziņš veic aritmētiku, tāpēc ierakstiet `4.2/3.6`, lai 3.6 m garu sienu padarītu 4.2 m garu. Roktura vērtību lodziņš pieņem tikai vienkāršus skaitļus: vispirms aprēķiniet koeficientu (4.2 dalīts ar 3.6 ir aptuveni 1.1667). Vispirms atlasiet malu, lai {{ui:Objekta informācija}} nolasītu tās esošo garumu.

### Labot importu ar nepareizu izmēru

OBJ failiem nav vienības, tāpēc modelis, kas zīmēts milimetros, ienāk 1000 reizes par lielu. Atlasiet importēto grupu, nospiediet {{key:S}}, noklikšķiniet uz stūra roktura un ierakstiet `0.001`, pēc tam nospiediet {{key:Enter}}. Modelim, kas zīmēts collās, ierakstiet `0.0254`.

## Lietas, kas jāzina

- Mērogošana ap punktu ar trim klikšķiem ir vienmērīga. Lai stieptu tikai vienā virzienā, izmantojiet malas vai šķautnes rokturi (skatiet iepriekš).
- Grupas vai komponenta mērogošana maina kopiju, kuru mērogojāt; citas komponenta kopijas paturēs savu izmēru.
- Pirms pēdējā klikšķa nospiediet {{key:Esc}}, lai atceltu.

## Apgriezt

{{ui:Rediģēšana}} › {{ui:Vairāk}} › {{ui:Apgriezt pa sarkano}}, {{ui:Apgriezt pa zaļo}} vai {{ui:Apgriezt pa zilo}} spoguļo atlasi vietā, caur tās kastes vidu: kāpnes ar kreiso roku kļūst par kāpnēm ar labo roku. Virsmas paliek vērstas uz āru, un grupa vai komponents tiek spoguļots kā vesels (tā iekšpuse netiek pārrakstīta).

{{ui:Apgriezta kopija pa sarkano}} (un zaļo, zilo) atstāj oriģinālu vietā un novieto spoguļkopiju līdzās, pāri atlases kastes tālākajai pusei: pāra otras durvis, ēkas otrs spārns. Brīva ģeometrija, kas tur pieskaras, pievienojas oriģinālam, kā vienmēr dara pieskarošās ģeometrijas; vispirms padariet oriģinālu par grupu, lai tos turētu atsevišķi.

Atvērtā grupā sarkanā, zaļā un zilā ir grupas paša asis.
