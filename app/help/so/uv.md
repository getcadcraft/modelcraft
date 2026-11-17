---
title: Habee UV-yada mesh-ka
summary: Calaamadi xagallada, unwrap, mudee oo rar UV-yada mesh-ka goobta UV, oo hubi adoo isticmaalaya shaxan iyo midabyada ballaadhinta.
keywords: uv, uvs, unwrap, unwrapping, xagal, xagallo, tekstuur, texture coordinates, atlas, rar, packing, island, islands, shaxan, ballaadhin, qalooca, box projection, cylinder projection, sphere projection, conformal, angle based, lscm, abf
from: 00028f20
---

Tekstuur waa sawir siman; mesh-ku ma siman. **UV**-yadiisu waxay sheegaan halka geeska kasta oo dhinac kasta uu ku yaal sawirka. Goobta UV-ga ayaa samaysa: waxaad mesh-ka ka gooysaa **xagallo** (seams), waxaad qaybaha ku fidisaa (**unwrap**), oo waxaad ku dhex geliysaa lammaanaha (**rar**).

## Fur

Dooro mesh oo dooro {{ui:UV}} liiska {{ui:Goobta shaqada}}. Kooxda ama komponentka waxay marka hore noqonaysaa mesh, sida goobta Mesh. Aragta 3D waxay u guurtaa nus bidix; **tafatiraha UV** midig wuxuu muujinayaa dhinacyada mesh-ka oo lagu habeeyay lammaanaha tekstuurka. Doorashadu waxay u shaqaysaa sida goobta Mesh, wixii aad doorato hal aragta ayaa lagu doortaa kan kale.

## Calaamadi xagallada

Xagallada waa meelaha mesh-ka laga gooyn karo; waxay u muuqdaan casaan labada aragoodba.

- Dooro geesaha ({{ui:Geesta}}, ama {{key:2}}) oo riix {{ui:Calaamadi xagal}} ({{key:Ctrl+E}}). {{ui:Ka saar xagal}} ({{key:Ctrl+Shift+E}}) ayaa ka saaraa.
- {{ui:Xagallo geeska adag}} wuxuu calaamadiyaa geesaha adag oo dhan iyo geesaha dhinacyadu ka kulmaan in ka badan 60°: boks wuxuu u kala go'aa lix dhinac.
- {{ui:Xagallada UV-yada}} wuxuu calaamadiyaa xagallada meesha UV-yadu horeyba u jabaan, tusaale ka dib mudayn.

Qayb xidhan ayaa u baahan xagallo si ay u fidaan: kubbadda waxay u baahan tahay ugu yaraan hal goyn, tuubada goyn dhererkeeda.

## Unwrap

Dooro dhinacyada la habeeyo (ama midna, mesh-ka oo dhan) oo riix {{ui:Unwrap}} ({{key:U}}). Qayb kasta oo u dhexeysa xagallada waa la fidiyaa, xagalkeeda ilaalinaya sida ugu sax ee ay suurtogal tahay (fidinta xagal ku salaysan), kadibna qaybaha waa la rari dhinaca lammaanaha. {{ui:Conformal}} wuxuu unwrap-ka ku sameeyaa khariidado conformal ee least-squares: way degdegtaa, wuxuuna yar ka kala fog yahay qaybaha aad u foorarsan. Qaab ka samayn karta xaashi fidsan, sida dhinaca silindar oo mar la gooyay, wuxuu unwrap-ka u sameeyaa iyada oo aan wax ballaadhin lahayn.

## Mudee

Qaababka fudud, mudayn badanaa way ku filan tahay:

| Mudayn | Waxa uu sameeyo |
| --- | --- |
| {{ui:Boks}} | Dhinac kasta ilaa dhinaca boksa uu ku wajahan yahay ugu badan |
| {{ui:Silindar}} | Wareeg tiirka buluugga ah: ballaca waa xagalka wareegga, kor waa dherer |
| {{ui:Kubbad}} | Ka xarunta: ballaca waa xagalka wareegga, kor waa digriiga latitude-ka |
| {{ui:Muuqaalka}} | Sida dhinacyada loo arko aragta 3D hadda |

Dhinaca ku taal xidhiidhka silindarka ama kubbadda waxa lagu hayaa hal qayb, sidaas darteed UV-yadiisu way ka sii bixi karaan xagga midig ee lammaanaha wax yar; tekstuurradu halkaas way ku celcelinayaan.

## Dhig

- {{ui:Rar}} wuxuu geliyaa qaybaha (islands) lammaanaha hal cabbir texel ah, mid kastaa waa la leexiyay si uu u qaato meel yar. Panelku wuxuu dejiyaa booska ka harsan ee u dhexeeya.
- {{ui:Rog 90°}} iyo {{ui:Muraayadee}} wuxuu leexiyaa ama muraayadeeyaa UV-yada dhinacyada la doortay.
- Tafatiraha UV-ga, riix dhinac la doortay si aad u dhaqaajiso UV-yada doorashada, ama dhanka tafatiraha taabo {{key:R}} ama {{key:S}} ka dibna dhaqaaq si aad u leexiso ama u cabbirto (gujin wuu hayaa, {{key:Esc}} ayaa joojiya). {{key:G}} wuu dhaqaajiyaa adoon jiidin. Riix laba jeer dhinac (ama {{key:L}}) si aad u doorato qaybta oo dhan. Mouse-ka wheel-ka ayaa weynaynaya; jiid badhanka dhexe ama midig si aad u guurto {{ui:Muuqaalka guuri}}; {{key:F}} ayaa dib u habeeya lammaanaha.

Isbeddel kasta waa hal tallaabo oo ka noqo.

## Hubi

- {{ui:Shaxan}} wuxuu muujinayaa shaxan calaamadaysan mesh-ka UV-yadiisa: shaxanno siman oo labajibbaaran waxay tilmaamaan in tekstuurku siman yahay; calaamadaha waxay muujinayaan jihada ay socoto.
- {{ui:Ballaadhi}} wuxuu midabeeyaa dhinac kasta sida UV-yadu u ballaadhiso: buluug waa midna, marka uu cagaar ka soo baxo, ilaa casaan badan. Panelku wuxuu doortaa inuu cabbiro **xagal foorarsan** ama **cabbir isbeddelay**, wuxuuna muujiyaa celceliska.

Eeg sidoo kale [Tafatir mesh](topic:mesh-edit), [Mesh-yada](topic:meshes) iyo [Beddelayaasha mesh-ka](topic:modifiers).
