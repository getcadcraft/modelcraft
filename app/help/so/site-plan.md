---
title: Moodel ku samee qorshe goob oo DWG ama DXF ah
summary: Soo geli qorshe goob CAD ama qorshe dabaq sida xariiqyo dhulka saaran, jawaab su'aasha cutubyada, oo u beddel dhinacyo iyo mass-yo.
keywords: qorshe goob, dwg, dxf, cad, soo dhoofi, sketch, sawir gacmeed, sawirka warqadda, sawir, warqad, midabka qalinka, dynamic blocks, visibility states, qoraal, hatch, spline, ellipse, 3d face, trace, qorshe dabaq, lot, property line, cutubyo, underlay, context
from: 3415dc96
---

ModelCraft wuxuu soo geli karaa xariiqyada sawir CAD 2D ah, qorshe goob ama qorshe dabaq, oo dhulka ku dhigi karaa si aad uga moodelayso dusha.

## Soo geli sawirka

1. Riix {{ui:Soo dhoofi}} kooxda {{ui:Fayl}} (ama ku rid faylka muuqaalka 3D).
2. Dooro fayl `.dwg` ama `.dxf`.

   DWG weyn wakhti ayuu qaadanayaa: saldhigga xaaladda wuxuu leeyahay "Akhrinaya plan.dwg…" ilaa uu soo gasho.

3. Haddii sawirku aanu sheegin cutubyadiisa, wada-hadal oo cinwaankiisu yahay "Cutubyada sawirka" ayaa waydiinaya: "Midkee ayaa unug sawir ah?" Dooro {{ui:Inji}}, {{ui:Fiit}}, {{ui:Millimitir}} ama {{ui:Mitir}}. Qorshayaasha goobaha Mareykanka badanaa waa fiit, qorshayaasha dhismaha inji, qorshayaasha metric millimitir.

   Sawirku wuxuu imanayaa kooxda geesaha dhulka, la doortay, muuqaalkuna wuxuu u weynaadaa. Saldhigga xaaladda wuxuu sheegaa geesaha imanay tirada, tusaale ahaan "Waa la soo dhoofiyay site.dwg: 1697 geesood dhulka, kooxda gudaheeda. Kala bax si aad si toos ah ugu sawirto."

## Waxa soo galaya

- Xariiqyada, polylines (oo ay ku jiraan qaansooyinkooda), goobooyinka iyo qaansooyinka, iyo blocks oo waxyaabahooda oo dhan, **model space** oo keliya. Egriyada waxay noqdaan qaybo toos ah oo gaagaaban.
- Xariiqyada, polylines, qaansooyinka, goobooyinka, ellipses iyo splines waxay dhulka ku degaan siman, sida geesood.
- **Hatches** waxay noqdaan dhinacyo dhulka ku yaal, jasiiradahooda oo ah godad, si aad si toos ah u riixi/jiidi karto aagga hatch-ka.
- **3D faces** iyo buuxinta jirdilka waxay noqdaan dhinacyo; 3D faces waxay ilaalinayaan dhererkooda.
- **Qoraalka** (qoraal hal-xariiq ah, qoraal multiline iyo qiyamka attribute-yada) waxa lagu sawiraa geesood qoraal fudud oo hal-xariiq ah, dhererka, xagasha iyo isu-dhigidda qoraalka. Font-ka ma aha sawirkii, sidaas darteed ereyadu way dheer ama gaaban yihiin. Xarfaha aan qaabkooda lahayn waxay noqdaan sanduuqyo yaryar oo la tiriyaa.
- **Dimensions** waxay u muuqdaan sida sawirku u muujinayo (xariiqyadooda, madaxyada fallaadhaha iyo qoraalkooda, sida geesood iyo dhinacyo).
- **Dynamic blocks** waxay u yimaadaan sida sawirku u muujinayo: block kasta oo la dhigay gudaha xaaladda muuqashada ee la keydiyay, iyo xariiqyada xaalada keliya. Saldhigga xaaladda wuxuu liistaa iyaga iyo xaaladaha la muujiyay iyo kuwa kale ee mid kastaa leeyahay, tusaale ahaan "Receptacle shown as Duplex ×38, GFI ×7 (states: Duplex, GFI)". ModelCraft ma beddelo xaaladaha.
- **Jirdilalka 3D, gobolada iyo jidhadhka** (xogta ACIS ee sawirka) waxay u yimaadaan kooxyo u gaar ah: jirdil xidhan sida jirdil, gobol ama jidh furan sida dhinacyo. Dhinacyada siman waa la soo geliyaa oo dhan; dhinacyada qaloocan (silinder, koone, sphere, torus, dusha spline fudud) sida saddex-geesood yar oo geesaha nacaan ah ku xidhan, sidaas darteed geesaha jirdilka keliya ayaa muuqda. Dhinac ku yaal nooc kale oo dusha ah waa la reebay oo la liistaa: "Weli lama sawirin (3D solids): …".
- Lama soo geli: dhibcaha, miisaska, multileaders, sawirrada iyo nooc kale oo shay ah. Saldhigga xaaladda wuxuu liistaa iyaga nooc ahaan, sida "Lama soo geli: 12 POINT." Wax kasta oo ku yaal layout-ka (paper space) sidaas oo kale ayaa la reebaa, iyadoo aan la liisan.
- Layers-ka lama ilaaliyo: xariiqyada oo dhan waxay u yimaadaan siman.

Haddii sawirku ka fog yahay asalkiisa (tusaale ahaan koordinates state plane), wuu soo galaa, laakiin wuu ku dhici karaa meel fog asalka ModelCraft. Sawirrada ka fog 10,000 km asalkooda waa la diidaa: mari sawirka dhinaca 0,0 barnaamijka CAD ka hor.

## Ku rid qorshaha dusha

Xariiqyada la soo dhoofiyay ma isku xidhaan dhinacyo si fiican naftooda. Laba habood oo shaqo ah:

**Qorshaha u hay sida underlay (waa lagu talinayaa)**

1. Qorshaha u hay kooxdiisa gaarka ah.
2. Dhismahaaga ku sawir kore ee qorshaha adigoo isticmaalaya {{ui:Afar-geesle}} iyo {{ui:Xarriiq}}, adoo ku xidhaya geesaha qorshaha ("Endpoint") iyo geesaha ("On edge").
3. Riix/jiid dhinacyadaada sare. Qorshuhu wuxuu ka hadhaa hoose aan la taabanin, waxaadna tirtiri kartaa kooxda oo dhan hal riix.

Ku xidhidhku wuu ka shaqeeyaa kooxyada dhexdooda: waxaad ku xidhi kartaa geesaha qorshaha adigoo aan furin.

**Ku sawir xariiqyada qorshaha laftiisa**

1. Dooro kooxda qorshaha oo guji {{ui:Kala bax}}. Xariiqyadiisu waxay noqdaan geesood kala go'an.
2. Meesha qaab xidhan oo dhinac u ah, xariiq ku sawir mid ka mid ah geesaheeda adoo isticmaalaya {{ui:Xarriiq}}, geeska ilaa geeska. Marka qaabku xidhan yahay oo siman yahay, dhinacu badanaa wuu buuxmaa. Haddii aanu buuxmin, raadi meel ku wada jira ama xadhig ku dhex jira qaabka oo ku sawir dusheeda.
3. Riix/jiid.

Tan waxay ugu fiican tahay qorshe nadiif ah. Sahan mashquul ah, sawir-sare waa ka dhakhso badan.

## Dhibaatooyin

- "Tani waa binary DXF. Ku kaydi ASCII DXF oo mar kale isku day." Mar kale ku kaydi DXF-ka barnaamijka CAD sida ASCII (qoraal).
- "…ma lahan xariiqyo, qaansoo ama goobo model space-ka ku jira oo la soo geliyo." Sawirku waxaa laga yaabaa inuu dhan yahay layouts, ama qoraal iyo hatches oo keliya.
- "Sawirkan lama akhrin karo (…). Waxaa laga yaabaa inuu burbursan yahay, ama lagu kaydiyay nooca DWG ee aan akhriyaha la socon…" Xidhkaha waxa uu sababta sheegayaa, tusaale ahaan "DWG version AC1009 is not supported". Ku kaydi DXF, ama DWG AutoCAD 2000 ilaa 2018, barnaamijka CAD.
- Qorshuhu cabbir khaldan ayuu leeyahay: unugga khaldan ayaad doorteen. Dib u qaad ({{key:Mod+Z}}) oo mar kale soo geli, ama [miisaan](topic:rotate-scale) kooxda isagoo isticmaalaya factor-ka saxda ah (12 u dhexeeya feet iyo inch, 25.4 u dhexeeya inch iyo millimitir).

Si aad xariiqyada heerka ugu beddesho dhulka aad sawiri karto, eeg [Dhulka](topic:terrain).

## Sawir gacan-qoran oo ka yimid sawir

**File › Soo geli sawir gacan-qoran…** wuxuu qaadaa sawir gacan-qoran oo ku yaal warqad (JPEG, PNG ama TIFF, si toos ah telefoon ka timaad waa fiican) wuxuuna sameeyaa noocii geesaha dhulka ee isku mid ahaa. Sheeg warqadda ay tahay (ama u oggolow inuu helo xaashida, oo loo qaato A4) iyo miisaanka gacan-qorka, tusaale ahaan 1 : 100. Geesta warqadda waa la helaa, sawirkana waa la toosiyaa, indha-indhaha waa la raacaa xariiqyo iyo qaansooyin, midkiiba midabka qalinka (madow, casaan, buluug, cagaar) wuxuu noqdaa kooxda u gaarka ah oo calaamad leh (**Sketch black**, **Sketch red**, …), dhammaantoodna waxay ku jiraan hal kooxda loo magacaabay sawirka. Waa hal tallaabo oo dib-u-qaad ah, wax kasta waxay ku dhacaan kombiyuutarkan: wax meel kale looma diro.

Haddii geesta warqadda aan la heli karin, sawirka oo dhan ayaa loo qaadaa xaashi, saddex-xarriiqeedka waxaa sheegta: cabbir wax aad yaqaan oo kooxda miisaan haddii ay khaldan tahay. Xariiqyada u raac dhinacyo sida kor.
