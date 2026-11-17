---
title: Dërgo masën te BimCraft
summary: Dorëzo masat e shtyjes/tërheqjes te BimCraft si opsione masash, me katet, gjurmën, sipërfaqen bruto dhe vëllimin të llogaritur nga çdo solid.
keywords: masë, masa, koncept, opsione, bimcraft, ifc, bim, shtyj tërhiq, kate, nivele, sipërfaqe bruto, gjurmë, vëllim, dërgo, dorëzo, masë ndërtese, faza 2
from: 73c51f3f
---

## Çfarë do të bësh

Kthe blloqet që ke modeluar me shtyj/tërhiq në opsione masash që BimCraft i kupton, që koncepti të vazhdojë si model ndërtese.

## Përpara se të nisësh

Bëje çdo masë një **grup** ose **komponent** dhe emëroje. Çdo një bëhet një opsion. Gjeometria e lirë nuk dërgohet.

## Dërgoje

1. Zgjidh grupet për t'u dërguar. Pa asgjë të zgjedhur, shkojnë çdo grup dhe komponent i nivelit të sipërm.
2. Zgjidh {{ui:Eksporto}}, pastaj {{ui:Masa te BimCraft…}}.
3. Shkruaj {{ui:Emri i grupit të opsioneve}} dhe {{ui:Lartësia e katit}}.
4. Kontrollo listën: katet, gjurmën, sipërfaqen bruto dhe vëllimin e çdo opsioni.
5. Zgjidh **Dërgo te BimCraft** për të hapur BimCraft në një skedë të re me opsionet, ose {{ui:Ruaj si IFC}} për të shkarkuar skedarin dhe ta hapësh atje vetë.

Në BimCraft opsionet listohen nën "Opsionet e masës në model", ku njëra mund të bëhet opsioni aktual dhe të zhvillohet në mure dhe dysheme.

## Si bëhet një solid masë

- **Katet** janë lartësia e solidit e pjesëtuar me lartësinë e katit, e rrumbullakosur, dhe të paktën një. Katet ndajnë pastaj lartësinë e solidit në mënyrë të barabartë, kështu që një bllok 10 m me kate 3 m ka 3 kate prej 3.33 m.
- **Sipërfaqja e një kati** është sipërfaqja e prerjes horizontale të vetë solidit në nivelin e atij kati. Një bllok që tërhiqet mbrapa ka kate të sipërme më të vogla, dhe sipërfaqja bruto është shuma e tyre.
- **Gjurma** është kontura e prerjes menjëherë mbi bazën e solidit.
- **Vëllimi** është i vetë solidit.

Në skedarin IFC çdo opsion është një element proxy i ndërtesës (gjurma e ngritur në lartësinë e solidit) me një hapësirë për kat që mban sipërfaqen bruto të atij kati. Të gjitha opsionet ndajnë një ndërtesë të vetme, me aq kate sa opsioni më i lartë.

## Forma të thjeshtuara

Një bllok i thjeshtë vertikal shkon ashtu siç u modelua. Çdo gjë tjetër dërgohet gjithsesi, dhe lista thotë pse forma e saj është thjeshtuar:

- **Katet e tij nuk janë të gjitha të madhësisë së bazës** (tërhiqet mbrapa ose pjerret): masa në BimCraft është kontura e bazës e ngritur në lartësinë e plotë, por sipërfaqet e kateve dhe vëllimi janë të vetë solidit.
- **Solidi nuk është i mbyllur**: katet, prerjet e të cilave nuk mund të mbyllen, nuk maten dhe llogariten si asgjë. Mbyll solidin ({{ui:Informacioni i entitetit}} shkruan "Solid: Po") për shifra të plota.
- **Baza e tij ka më shumë se një kontur**: përdoret më i madhi si gjurmë.

## Të mirë për t'u ditur

- {{ui:IFC për BimCraft (.ifc)}} është një eksportim tjetër: dërgon vetëm forma dhe emra, pa kate dhe sipërfaqe.
- Asgjë nuk ngarkohet. Skedari i dorëzohet skedës së BimCraft në këtë kompjuter.
