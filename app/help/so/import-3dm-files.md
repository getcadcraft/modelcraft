---
title: Soo dhoofi moodel .3dm ah
summary: Soo dhoofi fayl .3dm oo leh shabakadaha, dusheyaasha, curves, blocks, layers iyo midabada; meesha saddexagalladu ka yimaadaan iyo waxa la reebay.
keywords: 3dm, soo dhoofi, nurbs, polysurface, brep, dusheyaal, shabakad, soo saarid, curves, blocks, layers, calaamado, midabo, cabbirro, beddelid, u guur
from: 3cf29879
---

ModelCraft wuxuu akhriyaa faylalka `.3dm` isagoo isticmaalaya akhristihiisa, bogga gudihiisa. Waxba lama soo raro, waxayna shaqeysaa marwalba oo ModelCraft khad la'aan shaqeyso. Faylalka lagu kaydiyay nidaamyada nooca 5, 6, 7 iyo 8 waa la tijaabiyay; kuwa hore (nooca 2 ilaa 4) waa inay furmaan, laakiin wali lama tijaabin.

## Soo geli faylka

1. Guji {{ui:Import}} kooxda {{ui:File}} (ama ku tuur faylka `.3dm` aragtida 3D).
2. Dooro faylka.

   Joogta xaaladda wuxuu leeyahay "Akhrinta chair.3dm…" intuu akhrinayo, kadibna waxa soo galay, tusaale ahaan "Soo dhoofiyay chair.3dm: 14 shabakadood (8330 wajiyo), 8 curves, 5 meel-dhigid oo block ah, 3 layers oo ah calaamado. Dusheyaal: 7 wajiyo oo ka yimid shabakadaha faylka lagu kaydiyay, 29 oo ay CadCraft samaysay."

Moodelka oo dhan wuxuu u yimaadaa hal kooxa oo magac u ah faylka, la doortay, aragtidana waa u soo dhowaataa. {{key:Mod+Z}} hal mar ayaa dhammaantood ka saaraa, calaamadaha oo dhan ku jira.

## Saddexagallada ka yimaadaan

ModelCraft wuxuu moodelkiisa ka dhigaa wajiyo iyo shabakado, sidaas darteed dusheyaal kasta oo faylka ku jira wuxuu u yimaadaa [shabakad](topic:meshes) oo ka kooban saddexagallo yaryar oo fidsan. Wajiga kasta oo polysurface ah (iyo extrusion kasta) ModelCraft wuxuu qaadaa, taxanahan:

1. **Shabakadda bixinta ee faylka lagu kaydiyay.** Barnaamijyada badankood waxay kaydiyaan shabakadda ay shaashadda ku muujiyeen dusha kasta; markii ay jirto, ModelCraft wuxuu isticmaalaa sidii ay tahay.
2. **Tessellation-kiisa**, marka faylku shabakad kaydsan lahayn: diyaaradaha, dusheyaasha NURBS, dusheyaasha wareegga (kubbadaha, koonaha, torus-ka, qaababka kharaadka), curves la soo saaray iyo extrusion-ka (oo leh godadkooda iyo dhammaadkooda), oo lagu jaray geeskooda. Wajiyada polysurface hal mid ahi waxay wadaagaan barooyinka geeskooda, sidaas darteed polysurface xidhan wuxuu u yimaadaa shabakad xidhan. Meelaha qalloocan waa la kala jaraa ilaa saddexagalladu ku dhacaan qiyaastii 0.15 % cabbirka shayga dhabta ah.
3. **Waxba**, wajiga dusheyaal nooc ModelCraft weli aan akhrin. Joogta xaaladda ayaa sheegaysa inta wajiyo iyo nooca.

Qaybta "Surfaces:" ee joogta xaaladda waxay sheegaysaa inta wajiyo ka yimid shabakadaha kaydsan iyo inta ModelCraft samaysay. Geesaha gudaha hal wajiga faylka way jilicsan yihiin, geesaha ka dhexeeya labo wajiyood way adkaan, sidaas darteed wajiga qalloocan wuu si siman u iftiimaa.

:::tip
Qaababka ugu saxda ah, kaydi faylka shabakadaha bixinta barnaamijka uu sameeyay (taasi badanaa waa default; ikhtiyaarka "save small" ayaa ka saaraa).
:::

## Waxa soo galaya

- **Shabakadaha** oo leh midabka geesaha iyo isku xidhka tekstuurka.
- **Polysurfaces, dusheyaal iyo extrusion**, sida kor ku qoran.
- **Curves** (xariiqyo, polilines, qaansooyin, goobo, curves NURBS iyo kuwa laga xidhay) sida [geesaha](topic:curves), kooxda geesaha mid layer kasta.
- **Blocks** waxay noqdaan [qaybo](topic:groups-components): meel kasta oo block la dhigo waa dhigitaan ka mid ah hal qayb, sidaas darteed wax ka beddelka nuqul kasta wuu beddelaa dhammaantood. Blocks ku jira blocks waa la hayaa.
- **Layers** waxay noqdaan [calaamado](topic:tags) magaca layer-ka oo buuxa ("Furniture::Chairs"), qarsoon marka layer-ku damay. Dhigitaan kasta wuxuu qaadaa calaamada layer-kiisa.
- **Midabada.** Midabka shay kasta wuxuu ka yimaadaa meesha faylku sheegayo: midabkiisa, layer-kiisa, ama midabka aasaasiga ah ee agabkiisa. Wuxuu noqdaa rinjiga wajiyadiisa.
- **Walxaha qarsoon waxay yimaadaan qarsoon**; {{ui:Unhide all}} ayaa muujiya.
- **Halbeegyada:** faylku wuxuu sheegaa halbeegiisa; moodelku wuxuu yimaadaa cabbirkiisa dhabta ah.

## Waxa la reebay (iyo la sheegay)

Qaybta "Notes:" ee joogta xaaladda waxay magacaabaa wax kasta oo aan yimid, iyo tirada:

- barooyin iyo daruuro barooyin, qoraal, dhibco qoraal, cabbirro, xariiqyada tilmaamaha, xarriijin (hatches), ivaloyinka iftiinka, diyaaradaha jarista iyo faahfaahinta qaabaynta;
- walxaha SubD: u beddel shabakado ama polysurfaces barnaamijka uu faylka sameeyay marka hore;
- wajiyada dusheyaasha la kala saaray (offset) iyo noocyada dusheyaasha kale ee ModelCraft weli aan akhrin, marka faylku shabakad uma kaydin;
- blocks laga xidhay faylal kale (waxaa la akhriyaa kaliya faylka aad soo dhoofinayso);
- extrusions oo leh dhammaadyo jiiran waxay yimaadaan dhammaadyo laba jibbaaran.

Tekstuurada agabka, dejinta rendarka, aragtiyada magacaysan, kooxaha iyo qoraalka isticmaalaha lama akhrin; agab kasta wuxuu bixiyaa midabkiisa aasaasiga ah oo keliya.

## Xaddidaadyada

Faylal ilaa 300 MB. Fayl dhaawacan ayaa sheegta waxa khaldan, wax ku darna ma jiro; shay aan la akhriyi karin waa la reebaa oo la tiriyaa, kuwa kale way soo galaan.
