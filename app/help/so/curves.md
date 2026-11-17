---
title: Shayada khadka qalloocan
summary: Samee khadad Bézier, NURBS iyo khadad jajab toosan, ku sii dhumuc, ballac ama taper, buuxi kuwa fiiqan, qoraal u dhig khadad qalloocan, oo u beddel mesh.
keywords: khad, khadad, bezier, nurbs, spline, splines, jid, tuubo, pipe, kable, xadhig, bevel, extrude, taper, tilt, radius, buuxi, profile, qoraal, xarfo, calaamad, khad u beddel mesh
from: 602bf077
---

**Shayga khadka qalloocan** waa khad wax qaabeeya: tuubo ku socota (bevel), suux (extrude), kafiin dhumuc yar (taper), ama — marka uu fiiqan yahay oo xidhan yahay — dhalaal buuxa ama xarfo. Qaabku wuu raacaa khadka: qodob dhaqaajiso tuubadu way la dhaqaaqaysaa. Marka qaabku sax yahay, u beddel mesh.

## Samee khad

Dooro {{ui:Curve}} liiska Workspace-ka oo riix {{ui:Add}}:

| Nooc | Waa maxay |
| --- | --- |
| Khadka Bézier, goobada Bézier | Waxay mari barahooda; qodob kasta wuxuu leeyahay laba gacmo oo dhigaya jihada khadka |
| Khadka NURBS, goobada NURBS, Path | Siilan, waxay u rogtaa barahooda (waxay bilaabmaa oo dhamaataa barahooda dhamaadka); qodob kasta wuxuu leeyahay miisaan |
| Text | Qoraalkaaga oo ah xarfo fiiqan oo buuxa |

Khad cusub wuxuu helaa tuubo khafiif ah si loo arko oo loo dooran karo; u deji bevel depth 0 si aad u hesho khad fudud.

Waxaad sidoo kale ka bilaabi kartaa wax la sawiray: dooro qaansada, goobada, poligon-ka ama khadka la sawiray Model workspace-ka oo riix {{ui:Make a curve object}} gudaha Entity info. Khadadka la sawiray way sii jiraan.

## Tafatir barahooda

Labo-guji shay khadka qalloocan (ama dooro oo dooro {{ui:Curve}}) si aad u tafatirto.

- Guji qodob ama gacan (Shift wuu ku daraa ama ka saaraa); jiid si aad u guurisid. Jiid meel bannaan si aad sanduuq ugu doorato.
- {{ui:Extend}} ({{key:E}}, ama {{key:Ctrl}}+guji) wuxuu ku daraa qodob dhamaadka la doortay ka dib, meesha mouse-ku joogo.
- {{ui:Subdivide}} ({{key:W}}) wuxuu dhig u geliyaa labada deriska ah ee la doortay inta u dhaxaysa; Bézier wuxuu ilaaliyaa qaabkiisa.
- {{ui:Move}}, {{ui:Turn}}, {{ui:Scale}} waxay guuriyaan qodobada la doortay iyada oo mouse-ka lagu raacayo (furayaasha modeler {{key:G}} {{key:R}} {{key:S}}, furayaasha push/pull {{key:M}} {{key:Q}} {{key:S}}); guji si aad u hayso, {{key:Esc}} si aad u joojiso.
- {{ui:Close}} ({{key:C}}) wuxuu xiraa spline furan ama furaa mid xidhan; {{ui:Reverse}} ({{key:Shift+R}}) wuxuu u socodsiiyaa jihada kale.
- Gacmaha Bézier: {{ui:Smooth}} ({{key:V}}) wuxuu dhigaa si khad siilan loo helo, {{ui:Corner}} ({{key:Shift+V}}) wuxuu u jeediyaa deriska, {{ui:Free}} ({{key:Alt+V}}) wuxuu ku daayaa meeshii aad dhigtay. Jiidista gacan wuxuu ka dhigaa mid xor ah.
- {{ui:Bézier}}, {{ui:NURBS}} iyo {{ui:Poly}} waxay beddelaan nooca spline-yada la doortay, iyagoo ilaalinaya barahooda.

Beddel kasta waa hal tallaabo oo undo ah.

## Qaabka

Dejinta waxay ku jirtaa panel-ka (iyo Entity info Model workspace-ka):

- **Shape:** khadadka 3D way u socdaan meel walba; khad fiiqan wuxuu ku sii jiraa diyaaraddiisa wuuna buuxi karaa.
- **Fill closed splines** (fiiqan): khadadka dibadda ayaa noqda dhalaal; khad gudaha khad kale waa godka, sidaas darteed xarfuhu godadkooda way ilaaliyaan.
- **Extrude:** half the band's width (khadadka furan ama 3D), ama half the plate's thickness (buuxa): badhka ballaca, ama badhka dhumucda dhalaalka.
- **Bevel depth** iyo **roundness:** tuubo wareegsan oo ku socota khadka (extrude ku jiraa: suux wareegsan); shaqada buuxa, geesta wareegsan.
- **Close the ends:** koofiyado tuubo furan.
- **Taper along it:** wuxuu siman yahay ku dhex socda spline kasta, tusaale `1, 0.2` kafiin, `0, 1, 0` dhoobo.
- **Smoothness** iyo, NURBS, **order**: sida ay u fiican tahay sawirkeeda, iyo sida ay siila tahay (2 toosan … 6 ugu siilan).
- Haddii qodobo la doortay: **radius** (dhumucda tuubada halkaas, ku dhufan bevel-ka), **tilt** (wareejinta suux ee khadka ku wareegta) iyo, NURBS, **weight**.

Modifiers way shaqeeyaan korka shay khad qalloocan sida mesh-ka: Array oo khadka dhex socda, Mirror, Subdivision surface. Eeg [Modifiers mesh-ka](topic:modifiers).

## U beddel mesh

{{ui:To mesh}} (Curve workspace-ka ama Entity info, {{ui:Curve to mesh}}) wuxuu shayga khadka qalloocan u beddelaa mesh uu hadda muujinayo; modifiers-kiisa way sii jiraan korka. Kadibna tafatir Mesh workspace-ka. Undo wuxuu dib u celiyaa.

Eeg sidoo kale [Meshes](topic:meshes) iyo [Tafatir mesh](topic:mesh-edit).
