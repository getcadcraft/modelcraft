---
title: Xallinta dhibaatooyinka
summary: Calaamadaha, sababaha iyo xalalka, laga bilaabo aragga 3D ee madhan ilaa soo dhoofinta oo cabbirkeedu khaldan yahay, oo leh farriimaha ModelCraft tusa.
keywords: dhibaato, khalad, ma shaqeynayo, madhan, webgl, awood, gaabis, fariin, soo dhoofinta fashilmay, cabbir khaldan, ma dooran karo, taabasho, furayaasha ma shaqeynayaan, shaqo lumay
from: 6e7394be
---

## Aragga 3D waa madhan

**Calaamad:** dhexda shaashadu way madhan tahay, ama waxay muujinaysaa midabka duruufta oo keliya, riixitaanka qalabyada wax ma sameeyo.

**Sababta:** ModelCraft wuxuu sawiraa WebGL 2, farsamada sawirka 3D ee browserka. Waa ka maqan tahay marka browserku duug yahay, marka xawaaraynta hardware-ka la damiyay, ama marka darawalka sawirka la xannibay.

**Xalka:**

:::chromium
1. Fur dejinta browserka oo raadi "graphics acceleration".
2. Shid "Use graphics acceleration when available" oo dib u bilow browserka.
3. Haddii ay horay u shaqeynayso, qor `chrome://gpu` bar-ka ciwaanka (`edge://gpu` Edge-ka) oo raadi "WebGL2" liiska. Haddii ay tahay "disabled", cusbooneysii darawalka sawirka.
:::

:::firefox
1. Fur **Settings**, kadibna **General**, oo hoos u jiid ilaa "Performance".
2. Ka saar "Use recommended performance settings", kadibna calaamadi "Use hardware acceleration when available". Dib u bilow Firefox.
3. Haddii weli fashilanto, qor `about:support` bar-ka ciwaanka oo eeg qaybta "Graphics" ee WebGL 2.
:::

:::safari
Cusbooneysii macOS iyo Safari. Nooca cusub ee Safari had iyo jeer WebGL 2 ayuu shid. Haddii aad beddeshay astaamaha tijaabada ee hoos **Safari**, kadibna **Settings**, kadibna **Advanced** (ama **Feature Flags**), dib u deji.
:::

Kombiyuutarka shaqada, desktop-ka fog ama mashiinka virtual-ka, sawirka 3D siyaasad ayaa laga xannibi karaa. Isku day kombiyuutar kale. Eeg [Browsers iyo kombiyuutarada](common:browsers).

## Furayaasha waxba ma sameynayaan, ama sanduuq ayay ku qorayaan

**Sababta:** xulashada keyboard-ka waxay ku jirtaa goob guddi ah: liiska {{ui:Dusha}} ee {{ui:Habka}}, dejinta qorraxda, goobta {{ui:Magac}} ee {{ui:Macluumaadka}}, ama doorashada cutubyada. Xarfaha iyo furayaasha fallaadhaha markaas goobtaas ayay gaadhaan.

**Xalka:** riix dhex muuqaalka 3D, kadibna mar kale riix furaha. Furayaashu waxba ma sameynayaan inta uu sanduuq wada-hadal furan yahay.

## Qorista lambar waxba ma sameyso

- **Weli jihada ma jirto.** Dherer la qoray wuxuu raacaa jihada tusaha ka bilaabmay riixitaankii koowaad. Tusaha si yar ugu dhaqaaq jihada aad rabto, kadibna qor.
- **Waqtiga khaldan.** Qalabyada badankood qiime la qoray kaliya ka dib riixitaankii koowaad: marka hore dhufo geeska koowaad, dusha ama dhibcaha ka guuri. {{ui:Goobo}} iyo {{ui:Poligon}} waxay qaataan tirada dhinacyada ka hor riixitaankii koowaad.
- **"Qor dherer sida 3m, 10'6" ama 4m,3m."** ModelCraft ma akhrin karin. Hubi calaamadda tobanka ee koomada (`2,5`): isticmaal dhibic.

## Qaabka wax ka bilaabma meel khalad ah shaashad taabasho

**Calaamad:** farta ku jirta, afar-geeslaha koowaad waa fiican yahay, laakiin kan xiga, goobada ama xariiqdu waxay ka bilaabataa meeshii taabashadii hore ku dhammaatay, halkii ay ka bilaabi lahaayeen.

**Sababta:** cilad ku jirta dhismahan: shaashad taabasho, qalabku wuxuu xasuustaa dhibicda ugu dambeysay ee isku dhejinta ee isku daygii hore.

**Xalka:** taabo badhanka qalabka toolbar-ka mar kale ka hor qaab kasta oo cusub. Taasi qalabka mar kale ayuu bilaabaa, dhibicda koowaadna waxay ku dhacaysaa meeshii aad taabatay.

## Kooxda hal mid wax ka beddelay mid kale ayaa wax ka beddelay

**Calaamad:** waxaad nuqul ka sameysay kooxda {{ui:Guuri}} iyo {{key:Ctrl}}, mid ka mid ah nuqullada ayaad furtay oo wax ka beddeshay, kii kalena wuu isbeddelay. {{ui:Liiska}} labadaba isku magac ayuu muujinayaa.

**Sababta:** qalabkan, nuqulka kooxdu waa goob labaad oo isku mid ah, sida qayb. Badhanka {{ui:Ka dhig gaar ah}} waxaa loo soo bandhigaa qaybaha oo keliya.

**Xalka:** dooro nuqulka aad rabto inaad wax ka beddesho, riix {{ui:Samee qayb}} gudaha {{ui:Macluumaadka}}, kadibna {{ui:Ka dhig gaar ah}}. Nuqulkaas hadda waxyaabihiisa gaar ayuu u leeyahay. Ama {{ui:Kala bax}}.

## Riix/jiid ma samaynayo waxa aan filayay

- **"Riix/jiid wuxuu ka shaqeeyaa dusha. Dhufo dusha."** Waxaad dhufatay geesta ama meel banaan. Tusaha ku dhaaf ilaa dusha iftiimo, kadibna dhufo.
- **Dusha kooxda gudaheeda ayuu ku jiraa.** Marka hore ku dhufo laba jeer kooxda si aad u furto.
- **Daaqadda darbiga ma jeexin.** Afar-geeslaha waa in lagu sawiraa dusha darbiga, ma aha hortiisa, darbiguna waa inuu lahaadaa dusha dambe. Eeg [Ku jeex furitaan darbi](topic:openings#if-it-did-not-cut-through).
- **Laba sanduuq isku dhejinmaya ma isku daraan.** Jirmaallada lagu riixay isku mid ma jeexaan, ma isku xidhaan dhismahan.

## Xariiq ama qaab dusha ma samayn

Dusha wuxuu buuxmaa kaliya marka geesuhu xidhaan wareeg siman. Hubi in dhibicda ugu dambaysa lagu dhejiyay bilowga ("Endpoint"), iyo in geesuhu dhammaantood ku jiraan hal diyaar. Wareeg jaban diyaarka ka baxsan wuxuu ku sii jiraa xariiqyo. Mid ka mid ah geeskiisa mar kale sawir, idinkoo geeska ku dhejinaya.

## Ma dooran karo ama ma tirtiri karo dusha

- Dooro ahaan, riix oo u dhow geesta waxay qaadaa geeska. Riix dhexda dusha oo u dhow.
- {{ui:Tirtiraha}} ma qaado dusha. Dusha dooro, kadibna riix {{key:Delete}}, ama tirtir mid ka mid ah geeskeeda.
- Haddii ay qayb ama kooxda ku jirto, riixitaanku wuxuu doortaa qaybta oo dhan. Ku dhufo laba jeer si aad u furto.

## "Dooro wax marka hore si aad u guurto, ama riix."

{{ui:Guuri}}, {{ui:Wareeji}} iyo {{ui:Miisaan}} waxay u baahan yihiin wax ay ka shaqeeyaan: dooro marka hore, ama bilow qalabka adigoo riixaya shayga laftiisa (ma aha meel banaan ama hage).

## "Marka hore joometri dooro (jiid daaqad, ama saddex jeer dhufo si aad wax kasta oo isku xidhan u doorato)."

{{key:G}} iyo {{key:Shift+G}} waxay u baahan yihiin xulasho. Hagayaashu ma kooxeyn karaan.

## Furayaasha fallaadhaha wareegaan halkii ay ku xidhi lahaayeen

Qufulada waxay shaqeeyaan kaliya ka dib riixitaankii koowaad ee qalabka sawirka ama tafatirka. {{ui:Riix/jiid}} ma lahan qufulo, {{ui:Wareeji}} qufulada ma beddelaan leexinta. Waqtiyada kale furayaasha fallaadhaha muuqaalka ayay wareegaan.

## Esc shaashadda buuxda

Shaashadda buuxda, browserku wuxuu isticmaali karaa {{key:Esc}} koowaad si uu uga baxo shaashadda buuxda. Riix {{key:Esc}} mar kale si aad qalabka u joojiso.

## Badhanka dhexe ma jiro

Riix {{key:O}} si aad {{ui:Wareeg}} u hesho oo jiid, ama isticmaal furayaasha fallaadhaha. Eeg [Wareeg, guuri iyo weynee](topic:orbit-pan-zoom#without-a-middle-button).

## Soo dhoofinta

| Fariinta | Waxa la sameeyo |
|---|---|
| "ModelCraft wuxuu soo dhoofiyaa SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG iyo DXF. … midkoodna ma aha." | Soo saar moodeelka barnaamijka kale mid ka mid ah qaababkan |
| "Faylkan wuxuu ka weyn yahay 300 MB." | Yaree ama kala qaybi moodeelka barnaamijka kale |
| "…aad ayuu u weyn yahay in lagu moodeelo halkan (ka badan 2 milyan dhibic)." | Isla sidaas |
| "Faylka .gltf wuxuu u baahan yahay "…"…" | Dhig `.gltf` oo wata faylalka `.bin` iyo tekstuurada, ama fur nooca `.glb` |
| "Faylka glTF wuxuu u baahan yahay kordhinta …, oo ModelCraft weli ma akhrin." | Dib u soo saar barnaamijka kale adigoo ka saaraya kordhintaas (tekstuurada KTX2 tusaale ahaan) |
| OBJ wuxuu soo galaa isaga oo aan midabkiisa ama tekstuuradiisa lahayn | Dhig `.obj` oo wata `.mtl` iyo sawirradiisa |
| "Faylkan Alembic wuxuu isticmaalaa qaabka hore ee HDF5…" | Dib u kaydi barnaamijka kale sida faylka Ogawa Alembic |
| FBX wuxuu soo galaa isaga oo aan tekstuuradiisa lahayn | Dhig `.fbx` oo wata sawirrada tekstuurka, ama ku dar warbaahinta markaad soo saarayso |
| "Faylka FBX nooca … yahay, taas oo ModelCraft aan akhrin." | Dib u soo saar FBX 2011 ama mid cusub |
| STL ama PLY wuxuu soo galaa 1,000 jeer oo ka weyn ama ka yar | STL waxa loo akhriyaa millimitir, PLY meter: cabbirka ka beddel (eeg [Wareeji iyo cabbir](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Tani ma aha fayl Collada (.dae)…" ama "…XML aan qaab sax ahayn…" | Faylku waa khasaare ama ma aha Collada. Dib u soo saar |
| "Faylka Collada-n ma leh joometri ModelCraft soo dhoofin karto." | Waxay kaliya haysaa kamaradaha, iftiimiyeyaasha ama tixraacyo faylal kale |
| "Tani waa DXF binary ah. Ku kaydi ASCII DXF oo mar kale isku day." | Dib u kaydi ASCII barnaamijka CAD, kadibna isku day mar kale |
| "Tani ma aha naqshad DWG…" | Faylku ma aha DWG, ama waa khasaare |
| "Naqshadda lama akhrin karin (…). Waxay khasaare tahay, ama waxaa lagu kaydiyay nooc DWG ah oo akhriyuhu aanu maamulin…" | Qawsiyada waxay sheegayaan sababta. Ku kaydi DXF, ama DWG AutoCAD 2000 ilaa 2018 barnaamijka CAD |
| "Naqshadda waxay gaadhaa in ka badan 10,000 km asalkeeda…" | Dhig naqshadda agagaarka 0,0 barnaamijka CAD |

### Soo dhoofintu cabbir khalad ah ayay leedahay ama dhinac ayay jiifaa

- **OBJ:** OBJ ma leh unit; ModelCraft wuxuu akhriyaa meter. Moodeel millimitir ah wuxuu soo gali doonaa 1000 jeer oo ka weyn: [cabbir ka beddel](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) adigoo `0.001` ku dhufanaya; moodeel inji ah `0.0254`.
- **OBJ dhinac jiifa:** ModelCraft wuxuu filayaa faylalka OBJ ee Y sare. Fayl loo qoray Z sare wuxuu soo galaa jiifaya. Ku leexi 90° dhidibka casaanka: riix badhanka {{ui:Wareeji}} dhexda dusha ee jihada casaanka wajahan, ama fur faylka barnaamijkiisa oo soo saar Y sare.
- **DWG ama DXF:** unitka khaldan ayaad doorateen sanduuqa "Drawing units". Dib u noqo oo mar kale soo dhoofi.

## Furidda faylalka

| Fariinta | Waxa la sameeyo |
|---|---|
| "Faylkan ma aha moodeel ModelCraft ah (ma aha JSON)." | Isticmaal {{ui:Soo dhoofi}} qaababka kale |
| "Tani ma aha fayl ModelCraft ah oo aan furi karno: …" | Faylku waa khasaare ama gacanta lagu beddelay |
| "Moodeelkan waxaa kaydiyay ModelCraft cusub…" | Ku fur nooca cusub |
| "Faylkan wuxuu ka weyn yahay 200 MB." | Moodeelka aad ayuu u weyn yahay in halkan la furo |

## Shaqo ayaan lumiyay

ModelCraft ma kaydiyo faylal isaga keligiis. Marka aad xirto ama dib u soo rogto tab leh isbeddello aan la kaydin, browserku wuxuu marka hore weydiiyaa ("Ka bax goobta?" ama "Dib u soo rog goobta?"); dooro inaad joogto oo kaydiso. New iyo Open ayaa sidoo kale weydiiya ("Isbeddello aan la kaydin"). Haddii browserka ama kombiyuutarku burburo, mar kale fur ModelCraft isla browserka: wuxuu soo celinayaa shaqada aan la kaydin ("Soo celi shaqadaada?"; eeg [Soo celi shaqadaada](common:recover)). Had iyo jeer kaydi {{key:Mod+S}}.

## Galka soo dejinta waxa ku buuxsamaya nuqullo

Kaydin kasta waa soo dejin cusub, oo magacooda yahay `Untitled (1).modelcraft`, `Untitled (2).modelcraft` iyo sidaas oo kale. Tirtir kuwii hore, ama dhig browserka inuu weydiiyo meesha uu kaydinayo fayl kasta, oo faylkii hore adigu si gacan ah u beddel. Eeg [Fur, kaydi, soo dhoofi iyo soo saar](topic:files#save-a-model).

## Way gaabisaa

- Tallaabo kasta oo ka noqod wuxuu hayaa nuqul moodeelka (a [mesh](topic:meshes) wuxuu hayaa kaliya wixii isbeddelay), sidaas darteed soo dhoofinta weyn ee joometriga riixitaanka, tafatir kasta wakhti dheer buu qaadanayaa. Kala bax ama tirtir waxa aadan u baahnayn, kaydi, kadibna dib u fur: dib u furidu taariikhda ka noqoshada way tirtirtaa.
- Hooska qorraxdu waa wax ugu badan kharashka. Ka saar {{ui:Hooska qorraxda}} intaad moodelaynayso.

## Hooska ma jiro

{{ui:Hooska qorraxda}} waa demsan tahay, qorraxdu waa hoos waqtiga aad dooratay ("Qorraxdu waa hoos wakhtigan."), ama habka waa {{ui:Silig}}, kaasoo aan hooska sawirin.

## "Browserkan shaashadda buuxda uma oggolaan."

Browsers qaarkood iyo muuqaallada ku-dhex-jira qaarkood way diidaan shaashadda buuxda. Isticmaal shaashadda buuxda ee browserka laftiisa, ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft ma furmayo xidhiidh la'aanta

ModelCraft wuxuu u furmaa khadka ka baxsan kaliya ka dib markii loo kaydiyay khadka ka baxsan browserkaas: badhanka app bar-ka waa inuu akhriyo {{ui:Khadka ka baxsan diyaar}}. Furo markaad khadka ku jirto oo riix {{ui:Kaydi khadka ka baxsan}}. Haddii badhanku akhriyo {{ui:Lama kaydin karin}}, mar kale riix xidhiidh wanaagsan; {{ui:Khadka ka baxsan lama heli karo}} waxay tahay in daaqaddan (daaqad gaar ah, ama kombiyuutar la maamulo) aanay koobi u kaydin karin. Eeg [Shaqada khadka ka baxsan](common:offline).
