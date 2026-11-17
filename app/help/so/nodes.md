---
title: Nuqadaha: samee moodeel adigoo isku xidhaya
summary: Lambaro tirooyin ku xidh barta, barta ku xidh khadadka, khadadka ku xidh dusha. Tiro beddel oo wax kasta oo ka dambeeya ayaa dib u dhisma. Nuqad walba waa khad CraftScript, jaantuskuna waxa uu ku kaydsan yahay faylka.
keywords: nuqadaha, tafatirka nuqadaha, qoraal muuqaal, cabbir, jaantus, silig, isku xidhka, xuduudaha, bilaa qaab, freeform, nurbs, loft, extrude, revolve, goobo, khad, dusha, taxane, kala duwan, random, liis, script, craftscript, grasshopper
from: 9c8e254f
---

**Tafatirka nuqadaha** wuxuu dhisaa joomitari isagoo isku xidhaya sanduuqyo. Sanduuq kasta (nuqad) wuxuu qabtaa shaqo yar: wuxuu sameeyaa tiro, barta, goobo, loft. Natiijada mid ayaad ku xidhaysaa geliska xigta, moodeelkuna wuu raacaa marka aad tiro bilowga ku beddesho.

Ka fur bar-ka midig: {{ui:Nuqadaha}} › {{ui:Nuqadaha…}}. Fayl horey u leh jaantus ayaa isla gaarkiisa furmaysa. Waa daaqad ku taal muuqaalka 3D: jiid cinwaanka si aad u guurto, jiid geeska si aad u cabbirto.

## Xidhka

1. Dooro nuqad liiska bidix (ku qor sanduuqa raadinta si aad u yareyso, <kbd>Enter</kbd> wuxuu ku daraa kan ugu horreeya ee iswaafaqa). Waxay ka soo muuqataa bartanka dhexe.
2. Ka jiid dhibic wareegsan **wax-soo-saar** oo ku taal midig nuqad, ilaa dhibic wareegsan **geli** oo ku taal bidix nuqad kale. Dhibicdu waxay noqotaa cagaar marka ay ku habboonaato, casaan marka aysan habboonayn; u tilmaam si aad sababta u hesho.
3. Geli aan wax lagu xidhin wuxuu muujiyaa sanduuq qiimo qori karo. Qor tiro oo riix <kbd>Tab</kbd>: natiijadu dib ayey u dhisma.
4. Wareeggii yar ee ku taal cinwaanka nuqadda waa **indhaha**. Nuqad indhaha lagu daray waxay ku muuqataa muuqaalka 3D, khadad ahaan khadadka, dusha iftiin-ku-wareegsan, dhibcaha dhibic ahaan.

Nuqad jiid cinwaankeeda. Jiid asalka si aad u dhaqaaqdo, dabka wheel-ka si aad u weynayso. <kbd>Delete</kbd> wuxuu tirtiraa nuqadda la doortay. {{ui:Nadiifi}} wuxuu nuqadaha u habeeyaa tiirar, {{ui:Ku habee}} wuxuu dhammaantood ku keenaa aragga, {{ui:Ka noqo}} iyo {{ui:Samee mar kale}} waxay ku socdaan tafatirradaada.

## Noocyada iyo cabbirrada

Geliyada waxay leeyihiin nooc: tiro, haa/maya, barta, vector, khad, dusha, mesh, jidh, ama "joomitari" oo ah mid kasta oo kuwaas ka mid ah. Barta waxay quudin kartaa geli vector ah iyo dib. Tirooyinku waxay leeyihiin cabbir: **dherer** wuxuu ku qoran yahay millimitir, **xagal** wuxuu ku qoran yahay darajo. Dherer ma quudin karo xagal, dherer marka lagu dhufto dherer (sare) waa la diidaa, sidaas darteed silig qaldan waa la joojiyaa markaad sameysid.

Laba-jibbaaran oo madow waa **liis**. Liis marka uu gaaro geli hal qiimo ah, nuqaddu waxay ku shaqeysaa mar kasta oo shay walba oo liiska ka mid ah, natiijadeedna waxay noqotaa liis. Liiska gaaban qiimihiisii ugu dambeeyay ayuu ku celiyaa. Tusaale ahaan, **Taxane** oo dhererro ah oo gashay **Guuri** wuxuu sameeyaa xidh koobiyo ah.

## Jidh iyo Boolean nuqadahaan

Kooxda **Jidhka** waxay sameysaa jidhar xidhan oo ka yimid dusha isku mid ah sida bartanka Dusha: **Sanduuqa jidhka**, **Silinda jidhka** iyo **Kuraha jidhka** (cabbirada millimitir), **Isku geyn**, **Ka jar** iyo **Isgoys** (jidhka labaad waxaa laga qaadaa kan koowaad; cidhibta waa fogaanta ay saxanaanta ku dhacdaan ee jidhka injineriyaha ay ka durkaan dusha saxda ah), **Gees-ku-xidhka ka dhexeeya wajiyada** (wajiyada iyada oo lambarkooda ku jira jidhka, 1 waa kan koowaad; halkan waxaa ku jira radius iyo, ka weyn 0, radius dhamaadka), **Mugga jidhka** (mm³) iyo **Jidhka u beddel mesh** (si loo arko ama loo kaydiyo). Jidhka wuxuu leeyahay nooc gaar ah oo geli ah: dhibic ama tiro ma xidhmi karaan geli jidh, dhibicna waxay ahaanaysaa casaan. Nuqadaha Boolean iyo Gees-ku-xidhka waxay isticmaalaan injineriyada jidhka ee barnaamijka, oo la soo rari karo markii ugu horreysay ee tafatirku furmo.

## Qaladaad

Nuqad aan qabanin shaqadeeda waxay sheegaa sababta magaceeda hoostiisa, casaan ahaan ("Radiusku waa inuu ka weyn yahay eber."), nuqadaha ka dambeeyana way sugaan. Isla fariintaas waxay ku muuqataa Dhibaato bartanka Dhibaatooyinka, halkaas laga heli karo.

## Nuqad walba waa khad qoraal

Riix {{ui:Qoraal}} si aad u aragto jaantuska sida CraftScript: hal khad nuqad kasta, sida `n3 = nd_circle(n2, n1, [0 0 1]);`. Qoraalka wax ka beddel, kadibna riix {{ui:Ka samee jaantuska qoraalkan}} si aad jaantuska dib ugu soo celiso. Shaqooyinka `nd_` ee isla CraftScript-ka ee PartCraft ayey shaqeeyaan, sidaas darteed jaantuska waa la socon karaa, wareegi karaa, ama tijaabin karaa halkaas. Tirooyinka random had iyo jeer waxay qaadaan **seed**, sidaas darteed isla jaantuska wuxuu siiyaa isla natiijada kombuterka kasta.

## Waxa lagu kaydiyay faylka

Jaantuska waxa lagu kaydiyaa faylka moodeelka. Nuqadaha waxay sameeyaan khadad, dusha iyo mesh gaar ah: ma beddelayaan wejiyada moodeelka ilaa aad weydiisato.

## Ku dhex dhig moodeelka

Indhaha nuqad dusha ama mesh sameysa u shid, kadibna riix {{ui:Ku dhex dhig moodeelka}} daaqadda Nuqadaha. Dusha ama mesh kasta oo la muujiyay wuxuu noqonayaa kooxda wejiyada moodeelka, oo ku qoran mitir, sida qayb kasta oo kale. Waa hal tallaabo oo Ka noqo. Jaantuska ayuu hadhaa, laakiin nuqulka ma raacayo tan: tiro beddel oo ku dhex dhig mar kale si aad mid cusub u hesho. Dhibcaha iyo khadadka lama dhigi karo jidh, sidaas darteed waa laga tagaa, fariintuna waxay sheegaysaa tirada.
