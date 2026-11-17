---
title: Wax-beddeliyayaasha mesh-ka, kooxda ama komponentka
summary: Miisaan, muraayad, safka, siib, jaranjaro, goy iyo qallooc mesh-ka adigoo aan beddelin; ku celi ama miisaan kooxda ama komponentka isla kaydka, oo ka dhig mid joogto ah markaad diyaar tahay.
keywords: wax-beddeliye, wax-beddeliyayaal, kayd, kooxda, komponentka, miisaan, bake, tafatir isha, aan dib loo beddelin, muraayad, safka, dusha kala qaybinta, siib, jaranjaro, adeegso jirid, boolean, goy, ku riix, isku xidh, yaree, lattice, qafas, qallooc curve, qallooc, ku qabo, codso
from: dd5ec1cb
---

**Wax-beddeliye** wuxuu beddelaa wixii mesh-ku muujiyo, isagoo aan mesh-ka laftiisa beddelin. Muraayad mid qaybta mid ah oo kaliya moodeel, ama geesood dhismee oo sid aad u tafatirto. Wax-beddeliyayaasha waxay ku jiraan **kayd**, wayna shaqeeyaan tallaabo tallaabo, sare ilaa hoose. Wixii aad aragto, dhoofiso, daabacdo iyo rendarto waa mesh leh wax-beddeliyayaasha oo dhammaan shidan.

## Ku dar wax-beddeliye

1. Dooro mesh. Goobta Model qaybta **Wax-beddeliyayaasha** waxay ku jirtaa {{ui:Macluumaadka}}; goobta Mesh waxay ku jirtaa panelka midig.
2. Dooro mid ka {{ui:Ku dar wax-beddeliye…}}. Wuxuu u gudbaa hoosta kaydka.
3. Beddel dejintiisa hoosta magaciisa. Dherer waxay qaataan qiimaha isla sida sanduuqa qiimaha, sidaas darteed `600mm`, `2'6"` iyo `(6m)/4` oo dhammaantood waa shaqeeyaan.

Isbeddel kasta waa hal tallaabo ka noqo: {{key:Mod+Z}} ayaa ka noqonaysa.

## Badhamada wax-beddeliye kasta

- Sanduuqa calaamadda ayaa shidaya ama demiya.
- Badhanka shaashadda wuxuu muujiyaa ama qariyaa muuqaalka (wuxuu weli ku jiraa kaydka).
- Badhanka kamaradda wuxuu muujiyaa ama qariyaa sawirada la rendaray iyo fiidiyowyada, sidaas darteed wax-beddeliye wuxuu u noqon karaa kuwa rendarka oo keliya (ama muuqaalka oo keliya).
- Fallaadhaha ayaa u dhaqaajiya kaydka sare ama hoos. Kala horreysku waa muhiim: muraayad ka dibna dusha kala qaybin waxay siinaysaa xidh siman; dusha kala qaybin ka dibna muraayad ma siinayso.
- {{ui:Codso}} wuxuu qaabka ka dhigaa qayb mesh-ka ah: wax-beddeliyayaasha ka sarreeya iyo kan ku jira waxay ku dhacaan mesh-ka laftiisa oo ka baxaan kaydka. Waa hal tallaabo ka noqo.
- Calaamada xaashku waa ka saaraysa.

## Wax-beddeliyayaasha

| Wax-beddeliye | Waxa uu sameeyo |
| --- | --- |
| Miisaan | Miisaan ku dhaqan dhexda walaxda, factor ku dhaca cas, cagaar iyo buluug. Kooxda ama komponentka sidoo kale |
| Muraayad | Nuqul muraayad ah oo ku dhaca cas, cagaar ama buluug mesh-ka dhexdiisa, wuxuuna isku xidhaa qaybaha halka ay kulmaan |
| Safka | Nuqulada siman (dherer yar oo ah cabbirkiisa iyo tirooyinka aad siiso, oo dheeraad ah), wareeg tiir, ama dhigan qaab curve ah moodeelka. Kooxda ama komponentka safka ayay raacaan |
| Dusha kala qaybinta | Mesh-ka wuu siibayaa Catmull-Clark subdivision. Xarriiqyada adag adag ayay sii joogaan. Rendarka wuxuu isticmaali karaa heerar ka badan muuqaalka |
| Jaranjaro | Wixii xarriiq ka adag xaddiga xagal aad siiso wuu wareegsanayaa |
| Adeegso jirid | Dusha wuxuu siinayaa dhumuc, wuxuuna xidhaa geeskiisa |
| Boolean | Waxa ka gooya, isku xidha, ama ka hayo isku-kalifidda walax kale oo moodeelka ku jirta. Labadaba waa inay noqdaan solid xidhan |
| Ku riix | Dusha u riixa gudaha ama dibadda iyada oo la adeegsanayo noise siman. Isla seed-ka wuxuu had iyo jeer siinayaa isla buuq-buuqa |
| Isku xidh | Isku xidha dhibcaha ka dhow masaafo la siiyay |
| Yaree | Wuxuu hayaa qayb saddex-geesoodyada, isagoo ka saaraya kuwa ugu yar ee beddelaya qaabka |
| Siib | Dhibcaha u fidiya deriskooda |
| Lattice | Mesh-ka qaloocinaya qafas: dhaqaaji dhibcaha qafaska, mesh-ku wuu raacayaa |
| Qallooc curve | Mesh-ka ku qallooca curve moodeelka, oo ku dhaqan cas, cagaar ama buluug |
| Ku qabo | Dhibcaha kasta u dhaqaajiya dhibcaha ugu dhow walax kale |

## Kooxda ama komponentka

Kooxda ama komponentka ayaa sidoo kale hayn kara cunto, sidaas darteed hoodhka mindi wuxuu noqon karaa **Miisaan** iyo **Safka** oo hal mindi ah, isla markaana lambarka beddelo wuxuu beddelaa laambadda.

1. Dooro kooxda ama komponentka. Gudaha {{ui:Macluumaadka}} qaybta **Wax-beddeliyayaasha** waxay liistaa kaydka (madhan markii hore).
2. Dooro {{ui:Miisaan}} ama {{ui:Safka}} oo ka mid ah {{ui:Ku dar wax-beddeliye…}}. Kooxdu waxay noqonaysaa komponent ah oo ah **asalka, oo kaydka u dhigay**. Asalka waa la hayaa: wixii aad ku beddesho nuqul kasta ayaa isla markiiba raacaya.
3. Miisaan waxa lagu qaadaa factor cas, cagaar iyo buluug (`1, 1, 2` waxay laba jeer ka dhigaysaa dhererka). Safka waxa lagu qaadaa tirada nuqulada, tallaabo ah qayb natiijada hadda, iyo tallaabo dheeraad ah dherer ahaan.

Kaydku wuxuu ka shaqeeyaa kor ilaa hoos dhuruhu asalkiisa, xagalkiisa, si ay dalabku muhiim u yahay: safka saddex nuqul oo 3 m u kala dhexeeya, kadibna Miisaan 2 cas ahaan, wuxuu nuqullada u dhigaa 6 m u kala dhexeeya; Miisaan marka hore, kadibna safka, wuxuu hayaa 3 m. Sanduuqa calaamadda, fallaadhaha iyo dhadhaaqa waxay u shaqeeyaan sida mesh-ka; badhamada shaashadda iyo kamaradda, iyo Codso wax-beddeliye keli ah ma shaqeeyaan, maxaa yeelay kaydku waa hal shay.

- {{ui:Tafatir isha}} wuxuu furaa asalka meesha uu ku yaallo. Isbeddelka waxa lagu arkaa nuqul kasta; xirida waxay kuu celinaysaa meeshii aad ka timid.
- {{ui:Ku dhig wax-beddelayaasha}} wuxuu ka dhigaa natiijada xarriiqyo iyo wejiyo caadi ah, wuxuuna ka saaraa kaydka hal tallaabo ka noqo. Nuqullada isku dhex mara ayaa weli u sii jiraan joomatari kala gaar ah; ma aha isku-kalifid.
- Nuqullada komponentka waxay wadaagaan cuntada; {{ui:Ka dhig gaar ah}} ayaa kala saara (asalka ayaa weli la wadaago).
- Kaydka waxa lagu kaydiyaa faylka, waxaa lagu qaadaa koobiyeynta iyo dhaqidda iyo ka noqoshada, Purge unused ayaa hayna asalka. Barnaamij aan wax-beddeliyayaasha garanayn wuxuu weli muujinayaa nuqullada.
- Ilaa Ku dhig, natiijada laguma geli karo, laguma burburin karo, looma beddeli karo cabbir ama luqsad: waa dib loo dhisi doonaa isbeddel kasta marka xiga. Mid kasta wuu sheegaa.
- Xadka waa 32 wax-beddeliye iyo 1,000 nuqul. Komponent loo sameeyay in la kala fidiyo (Stretch) iyo kaydku ma wadaagi karaan qeexid hadda.

## Dusha kala qaybinta

Subdivision wuxuu siibaa mesh-ka Catmull-Clark: wejiga kasta wuxuu noqdaa wejiyo afar-geesood ah, heer kasta wuxuu sameeyaa afar jeer wejiyo badan. Sanduuq leh laba ama saddex heer ayaa horey u muuqda sida qaab wareegsan, adna waad sii tafatiri kartaa sanduuqa.

- **Heerarka muuqaalka** wuxuu go'aamiyaa sida siibka u badan yahay.
- **Heerarka sawirada** wuxuu go'aamiyaa sida sawirada la rendaray iyo fiidiyowyadu siib u yihiin; rendarku wuxuu isticmaali karaa heerar ka badan muuqaalka.
- **Rendarrada dusha siibka dhab ah** wuxuu dhibcaha mesh-ka la rendarayo ku dhigaa dusha xadka heerarku u dhowaanayaan, sidaas darteed xitaa laba heer ayaa sida badan u rendara.
- **Crease-yada** waxay xarriiqyada adag ka dhigaan: goobta Mesh dooro xarriiqyada oo isticmaal {{ui:Crease}} (1 wuu adkaadaa, 0.5 wuu wareegaa yar, 0 waa siib). Eeg [Tafatir mesh](topic:mesh-edit).
- **Dami heerka muuqaalka mesh weyn:** marka heerarka aad codsanayso ay wejiyo badan siinayaan intii kombiyuutarkan muuqaalka uu si wanaagsan u maamuli karo, muuqaalku wuxuu muujinayaa heer hoose wuuna sheegayaa. {{ui:Codso}} had iyo jeer wuxuu isticmaalaa heerarka oo dhan. Inta wejiyo ayaa lagu dejiyaa heerka kombiyuutarkaaga oo ku yaal {{ui:Dejinta}} › Rendering › Kombiyuutarkaaga.
- Xuduudaha furan waxay hayaan geesahooda oo waxay ku sii joogaan khadka xarriiqyadooda.

## Qallooc qafas lattice

1. Ku dar wax-beddeliye {{ui:Lattice}} oo riix {{ui:Ku dar qafas lattice shabakadda ku wareegsan}}. Qafas ah 3 × 3 × 3 dhibcood ayaa soo baxa mesh-ka ku wareegsan, oo wadno ahaan loo muujiyo.
2. Qafaska goobta Mesh ku fur (laba jeer guji), kadibna dhaqaaji dhibcaha. Mesh-ku wuu si nacasi ah u raacayaa.

:::tip
Qafasku waa mesh sida mid kale: markaad dhammaysato, qari isagoo adeegsanaya calaamadiisa.
:::

## Mesh-yada weyn

Kaydka yar ayaa mar dhow la shaqeeyaa. Mid weyn ayaa background-ka lagu shaqeeyaa dhammaan core-yada kombiyuutarkaaga: muuqaalku wuxuu weli muujinayaa natiijadii ugu dambaysay ilaa cusbo ay diyaar tahay. Booleans waxay soo rarayaan solid modeler-ka markii ugu horreysay; muuqaalku wuxuu sheegaa tan wakhti kooban.

## Waxa wax-beddeliyayaasha weli aan samaynin

- Dhibcood kasta miisaan (falloff lagu rinjiyay mesh-ka) Ku riix, Siib iyo Ku qabo.
- Wax-beddeliyayaal aan ahayn Miisaan iyo Safka toosan ee joomatariga riix-jiid (kooxaha iyo komponentada): mesh u beddel marka hore ({{ui:U beddel mesh}}). Muraayad, Safka wareegsan ama curve, Qallooc iyo Taper kooxaha ayaa iman doona.
