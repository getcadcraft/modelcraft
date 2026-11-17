---
title: Nodi: jenga modeli kwa kuunganisha
summary: Unganisha namba kuwa nukta, nukta kuwa mikunjo, mikunjo kuwa nyuso. Badilisha namba na kila kinachofuata kinajengwa upya. Kila nodi pia ni mstari wa CraftScript, na grafu inahifadhiwa kwenye faili.
keywords: nodi, mhariri wa nodi, uandishi wa picha, parametriki, grafu, waya, vituo, umbo huru, nurbs, loft, extrude, revolve, duara, mkunjo, uso, mfululizo, masafa, nasibu, orodha, hati, craftscript, grasshopper
from: 9c8e254f
---

Mhariri wa **Nodi** unajenga jiometri kwa kuunganisha masanduku pamoja. Kila sanduku (nodi) linafanya kazi ndogo moja: kutengeneza namba, nukta, duara, loft. Unaunganisha matokeo ya moja na ingizo la nyingine, na modeli inafuata unapobadilisha namba ya mwanzo.

Ifungue kutoka paneli ya kulia: {{ui:Nodi}} › {{ui:Nodi…}}. Faili lenye grafu tayari linaifungua yenyewe. Ni dirisha juu ya mwonekano wa 3D: buruta upau wake wa kichwa kulihamisha, buruta kona yake kubadilisha ukubwa.

## Kuunganisha

1. Chagua nodi kutoka orodha ya kushoto (andika kwenye kisanduku cha utafutaji ili kupunguza; <kbd>Enter</kbd> inaongeza ya kwanza iliyolingana). Inatokea katikati ya turubai.
2. Buruta kutoka nukta ya **matokeo** ya duara upande wa kulia wa nodi moja hadi nukta ya **ingizo** ya duara upande wa kushoto wa nyingine. Nukta inageuka kijani ikikubali na nyekundu isipokubali; elekeza kiashiria kwake upate sababu.
3. Ingizo lisilounganishwa linaonyesha kisanduku cha thamani. Andika namba kisha ubonyeze <kbd>Tab</kbd>: matokeo yanajengwa upya.
4. Duara dogo kwenye upau wa kichwa wa nodi ni **jicho** lake. Nodi yenye jicho lililowashwa inachorwa kwenye mwonekano wa 3D: kama mistari kwa mikunjo, yenye kivuli kwa nyuso, na vitone kwa nukta.

Buruta nodi kwa upau wake wa kichwa. Buruta mandharinyuma kusogeza, zungusha gurudumu kukuza. <kbd>Delete</kbd> inafuta nodi iliyochaguliwa. {{ui:Panga}} inapanga nodi kwenye safu, {{ui:Lingana}} inaleta zote mbele ya macho, na {{ui:Tendua}} na {{ui:Rudia}} zinapitia mabadiliko yako.

## Aina na vipimo

Vituo vina aina: namba, ndiyo/hapana, nukta, vekta, mkunjo, uso, wavu, kigumu, au "jiometri" kwa yoyote kati ya hizo. Nukta inaweza kulisha ingizo la vekta na kurudi. Namba zina kipimo: **urefu** uko kwa milimita na **pembe** iko kwa digrii. Urefu hauwezi kulisha pembe, na urefu mara urefu (eneo) unakataliwa, kwa hiyo waya mbaya inazuiwa unapoitengeneza.

Nukta ya mraba ni **orodha**. Orodha inapofika ingizo la thamani moja, nodi inaendeshwa mara moja kwa kila kipengele, na matokeo yake yanakuwa orodha. Orodha fupi inarudia kipengele chake cha mwisho. Kwa mfano, **Mfululizo** wa urefu ukiingia kwenye **Hamisha** unatengeneza rundo la nakala.

## Vigumu na Boolean kama nodi

Kikundi cha **Vigumu** kinatengeneza miili iliyofungwa kutoka nyuso zile zile sahihi za paneli ya Nyuso: **Kigumu cha boksi**, **Kigumu cha silinda** na **Kigumu cha duara** (vipimo kwa mm), **Unganisha**, **Ondoa** na **Sehemu ya pamoja** (kigumu cha pili kinachukuliwa kutoka cha kwanza; uvumilivu ni umbali ambao pembetatu za injini ya vigumu zinaweza kuwa mbali na nyuso sahihi), **Mviringo kati ya nyuso** (nyuso kwa namba yao ndani ya kigumu, 1 ikiwa ya kwanza; radius na, juu ya 0, radius mwishoni), **Ujazo wa kigumu** (mm³) na **Kigumu hadi wavu** (kuiona au kuihifadhi). Kigumu kina aina yake ya kituo: nukta au namba haziwezi kuunganishwa kwenye ingizo la kigumu, na nukta inabaki nyekundu. Nodi za Boolean na Mviringo zinatumia injini ya vigumu ya programu yenyewe, inayopakiwa mara ya kwanza mhariri unapofunguka.

## Makosa

Nodi isiyoweza kufanya kazi yake inasema kwa nini chini ya jina lake, kwa nyekundu ("Radius lazima iwe kubwa kuliko sifuri."), na nodi zinazofuata zinasubiri. Ujumbe huo huo ni Tatizo kwenye paneli ya Matatizo, kwa hiyo unaweza kuupata kutoka hapo.

## Kila nodi ni mstari wa hati

Bonyeza {{ui:Hati}} kuona grafu kama CraftScript: mstari mmoja kwa kila nodi, kama `n3 = nd_circle(n2, n1, [0 0 1]);`. Hariri maandishi kisha ubonyeze {{ui:Tengeneza grafu kutoka kwenye hati hii}} ili kuirudisha kama grafu. Kazi zile zile za `nd_` zinafanya kazi katika CraftScript ndani ya PartCraft, kwa hiyo grafu inaweza kuendeshwa, kurudiwa au kujaribiwa huko. Namba nasibu daima zinachukua **mbegu**, kwa hiyo grafu ile ile inatoa matokeo yale yale kwenye kila kompyuta.

## Imehifadhiwa na faili

Grafu inahifadhiwa kwenye faili la modeli. Nodi zinatengeneza mikunjo, nyuso na wavu zao wenyewe: hazibadilishi nyuso za modeli hadi uombe.

## Hamishia kwenye modeli

Washa jicho la nodi inayotengeneza uso au wavu, kisha bonyeza {{ui:Hamishia kwenye modeli}} kwenye dirisha la Nodi. Kila uso au wavu unaoonyeshwa unakuwa kikundi cha nyuso kwenye modeli, kwa mita, unaoweza kuhaririwa kama kitu kingine chochote. Ni hatua moja ya {{ui:Tendua}}. Grafu inabaki, lakini nakala haifuati tena: badilisha namba kisha uhamishie tena kupata mpya. Nukta na mikunjo si vigumu, kwa hiyo zinaachwa, na ujumbe unasema ni ngapi.
