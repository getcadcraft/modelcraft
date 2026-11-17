---
title: Rrjetat
summary: Shndërro një grup ose komponent në rrjetë — llojin e objektit me të cilin modelojnë veglat e përmbajtjes 3D — dhe kthe përsëri në gjeometri shtyj/tërhiq.
keywords: rrjetë, rrjeta, shumëkëndësh, n-gon, katërkëndësh, katërkëndësha, kulme, gjysmë-skaj, uv, shndërro, shndërro në rrjetë, shndërro në gjeometri, nënndarje, skulpturë, modelim, përmbajtje 3D
from: e32363e8
---

ModelCraft ka dy lloje gjeometrie. **Gjeometria shtyj/tërhiq** është ajo që vizaton: sipërfaqe të sheshta që ngjiten së bashku, priten me njëra-tjetrën dhe shërohen. Një **rrjetë** është llojin e objektit me të cilin modelojnë veglat e përmbajtjes 3D: sipërfaqe me çfarëdo numri qoshesh, me secilën qoshe që mund të mbajë koordinatat e veta të teksturës (UV), normalet dhe ngjyrat, dhe secili kulm vlera si peshat. Një rrjetë vendoset si një grup ose komponent, dhe qëndron pranë gjeometrisë shtyj/tërhiq në të njëjtin model.

## Shndërro një grup ose komponent në rrjetë

1. Zgjidh një grup ose komponent.
2. Te {{ui:Informacioni i entitetit}}, kliko {{ui:Shndërro në rrjetë}}.

Sipërfaqet e tij bëhen sipërfaqe të rrjetës (një sipërfaqe me vrima vjen si trekëndësha), skajet e ngurta mbeten të mprehta, skajet e buta lyhen me hije të butë, dhe bojat, materialet dhe teksturat e importuara mbeten te sipërfaqet e tyre. Grupet dhe komponentët brenda tij bashkohen në një rrjetë të vetme. Skajet e lira lihen jashtë: një rrjetë mban sipërfaqe. Çdo vendosje e një komponenti tregon rrjetën. Është një hap zhbërjeje.

## Çfarë tregon Informacioni i entitetit

Zgjidh një rrjetë për të parë sipërfaqet, kulmet dhe skajet e saj, nëse është solid i mbyllur (dhe vëllimin e tij), dhe përmasën e saj si e vendosur. Një rrjetë me skaje të hapura tregon sa janë.

## Shndërro një rrjetë përsëri në gjeometri shtyj/tërhiq

Zgjidh rrjetën dhe kliko {{ui:Shndërro në gjeometri}}. Sipërfaqet e sheshta kthehen ashtu si ishin; një sipërfaqe ku qoshet nuk janë në një plan kthehet si trekëndësha. Skajet e mprehta janë të ngurta, të tjerat të buta. {{ui:Çmonto}} vendos sipërfaqet e një rrjete drejt e në grupin që e rrethon.

## Gjëra për t'u ditur

- Kliko dy herë një rrjetë për ta [redaktuar kulmet, skajet dhe sipërfaqet](topic:mesh-edit) në hapësirën e punës Rrjetë. Shndërroje në gjeometri për ta redaktuar me shtyj/tërhiq; zhvendos, rrotullo, shkallëzo, kopjo, lyej, fshih dhe etiketo si çdo grup.
- Eksportimet, printimi 3D, renderimet dhe VR e shohin rrjetën si sipërfaqet e saj.
- Një skedar që mban një rrjetë ruhet si version më i ri i skedarit `.modelcraft`, kështu që ModelCraft 0.6 dhe më të vjetrit nuk mund ta hapin; skedarët pa rrjetë hapen në to si më parë. Shndërro rrjetat në gjeometri së pari për të ndarë një skedar me dikë që ka një version më të vjetër.
- Zhbërja në një rrjetë mban vetëm atë që ndryshoi çdo hap, kështu që edhe një rrjetë shumë e madhe zhbëhet shpejt.

Shih edhe [Grupet dhe komponentët](topic:groups-components) dhe [Nuk është ndërtuar ende](topic:not-built-yet).
