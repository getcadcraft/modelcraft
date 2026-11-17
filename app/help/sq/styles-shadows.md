---
title: Stilet dhe hijet e diellit
summary: Shfaq modelin me hije, si vija të fshehura, si tel-kornizë ose transparent, dhe studio hijet që hedh në çdo datë, orë dhe vend.
keywords: pamje prezantimi, pamje e pastër, fshih udhëzuesit, fshih boshtet, stil, me hije, vijë e fshehur, tel-kornizë, rreze x, skajet, hijet, dielli, studim i diellit, diellor, data, ora, gjerësia gjeografike, gjatësia gjeografike, zona kohore, veri
from: 09c95329
---

Paneli {{ui:Stili}} në të djathtë ndryshon mënyrën se si vizatohet modeli. Asgjë në të nuk e ndryshon vetë modelin, dhe nuk është pjesë e {{ui:Zhbëj}}. Çdo [skenë](topic:scenes) mban stilin e vet, dhe skedari mban stilin që kishe kur e ruajte.

## Sipërfaqet

Zgjidh një nga lista {{ui:Sipërfaqet}}:

| Stili | Duket si |
|---|---|
| {{ui:Me hije}} | Sipërfaqe të ngurta, të ndriçuara butësisht. Sipërfaqet e parë nga prapa janë gri-blu. Ngjyrat e importuara shfaqen. |
| {{ui:Vijë e fshehur}} | Sipërfaqe me ngjyrën e sfondit dhe skaje me bojë: një vizatim i pastër me vija, pa vijat e fshehura. Të bardha mbi {{ui:Letra}}, të errëta mbi {{ui:Model}}. |
| {{ui:Tel-kornizë}} | Vetëm skajet. Sipërfaqet nuk vizatohen, por ende llogariten kur klikon dhe kap: nuk mund të zgjedhësh përmes tyre. |
| {{ui:Rreze X}} | Sipërfaqe transparente, për të parë çfarë ka pas ose brenda. Si te tel-kornizë, klikimet dhe kapjet ndalen te sipërfaqja më e afërt. |

{{ui:Shfaq skajet}} i ndez ose i fik skajet në çdo stil përveç {{ui:Tel-kornizë}}. Kur është e fikur, {{ui:Vijë e fshehur}} shfaq pothuajse asgjë, sepse sipërfaqet e tij përputhen me sfondin. Skajet e butë, si anët e një rrethi të tërhequr, nuk vizatohen kurrë.

## Ndiz hijet e diellit

1. Vër shenjën te {{ui:Hijet e diellit}}. Cilësimet e diellit poshtë tij bëhen aktive, dhe modeli hedh hije mbi vetveten dhe mbi tokë.
2. Cakto vendin:
   - {{ui:Gjerësia gjeografike}}: veriu është pozitiv, jugu negativ (Nju Jork është rreth 40.7, Sidnei rreth -33.9).
   - {{ui:Gjatësia gjeografike}}: lindja është pozitive, perëndimi negative (Nju Jork rreth -74.0).
   - {{ui:Zhvendosja UTC}}: zhvendosja e vendit nga UTC, në orë, si `-5` për Nju Jork në dimër. ModelCraft nuk aplikon kohën verore; përdor `-4` për Nju Jork në verë.
3. Cakto {{ui:Data}} (muaji dhe dita) dhe tërhiq rrëshqitësin {{ui:Ora}}. Ora lëviz me hapa prej 15 minutash dhe shfaqet pranë rrëshqitësit, si "3:00 pm".

Një rresht nën cilësimet thotë ku është dielli, si "Dielli 52° lart, 250° nga veriu. Veriu është boshti i gjelbër." Natën thotë "Dielli është poshtë në këtë orë."

Një model i ri fillon me diellin më 21 qershor në 3:00 pm, me gjerësi 40, gjatësi -105 dhe zhvendosje UTC -7.

## Drejto modelin nga veriu

Veriu i ModelCraft është gjithmonë **boshti i gjelbër**. Për të studiuar një vend real, ktheje modelin që ana e tij veriore të shikojë përgjatë të gjelbrës: përzgjidh gjithçka ({{key:Mod+A}}), shtyp {{key:Q}}, kliko një qendër në tokë dhe rrotulloje me këndin e vendit nga veriu (shih [Rrotullo dhe shkallëzo](topic:rotate-scale)).

## Një studim i diellit

1. Cakto vendin dhe datën.
2. Shto një skenë ({{ui:Shto skenë}} te {{ui:Skenat}}).
3. Lëviz rrëshqitësin e orës, pastaj shto një skenë tjetër. Përsërite për çdo orë që dëshiron.
4. Kliko {{ui:Luaj}} për t'i kaluar një nga një. Shih [Ruaj pamjet si skena](topic:scenes).

## Gjëra që duhet ditur

- Hijet mund të duken të thyera në një model shumë të madh, sepse një hartë e vetme hijesh mbulon gjithë modelin.
- Hijet nuk vizatohen në {{ui:Tel-kornizë}}.
- Pozicioni i diellit ndjek llogaritjen NOAA të diellit dhe është i saktë deri në një pjesë të gradës, që mjafton për studime masash. Thyerja atmosferike injorohet, kështu që këndet shumë të ulëta të diellit afër agimit dhe perëndimit mund të devijojnë pak.

## Pamja e prezantimit

{{ui:Pamjet}} › {{ui:Pamje prezantimi}} (ose {{key:Shift+P}}) shfaq vetëm modelin: boshtet, vijat dhe pikat udhëzuese, konturet e planeve të prerjes (prerja mbetet), shenjat e dritave, kutia e një grupi të hapur, shenjat dhe këshillat e kapjes, dhe theksimi i përzgjedhjes zhduken. Përdore për ta parë qartë modelin, ose para një pamjeje ekrani. Veglat punojnë ende dhe kapin; thjesht nuk i sheh shenjat. Shtyp {{key:Shift+P}} përsëri për t'i kthyer. Përmasat mbeten, sepse janë pjesë e vizatimit. Ndërsa redakton brenda një grupi, pjesa tjetër e modelit nuk zbehet më: shfaqet siç është, përfshi teksturat.
