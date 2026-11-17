---
title: Mga modifier sa mesh, group o component
summary: I-scale, i-mirror, i-array, pakinisin, i-bevel, putulin at baluktutin ang mesh nang hindi ito binabago; ulitin o i-scale ang group o component gamit ang parehong stack; gawing permanente kapag handa ka na.
keywords: modifier, mga modifier, stack, group, component, scale, bake, edit source, hindi mapanira, mirror, array, radial array, subdivision, subdivision surface, smooth, bevel, solidify, kapal, boolean, cut, displace, noise, weld, decimate, simplify, lattice, cage, curve deform, bend, shrinkwrap, apply
from: dd5ec1cb
---

Binabago ng **modifier** ang ipinapakita ng mesh nang hindi binabago ang mesh mismo. I-mirror ang isang kalahati ng piyesa at kalahating iyon lang ang minomodelo; bilugan ang kahon gamit ang subdivision surface at ipagpatuloy ang pag-e-edit ng kahon. Nakalagay ang mga modifier sa isang **stack** at gumagana ayon sa pagkakasunod-sunod, mula itaas pababa. Ang nakikita mo, ie-export, ipi-print at ire-render ay ang mesh kasama ang bawat modifier na nakabukas.

## Magdagdag ng modifier

1. Pumili ng mesh. Sa Model workspace, nasa {{ui:Entity info}} ang seksyong **Modifiers** nito; sa Mesh workspace, nasa panel sa kanan ito.
2. Pumili ng isa mula sa {{ui:Add a modifier…}}. Mapupunta ito sa ibaba ng stack.
3. Baguhin ang mga setting nito sa ilalim ng pangalan nito. Tumatanggap ang mga haba ng parehong halaga gaya ng Value box, kaya gumagana ang `600mm`, `2'6"` at `(6m)/4`.

Bawat pagbabago ay isang undo step: binabawi ito ng {{key:Mod+Z}}.

## Ang mga button sa bawat modifier

- Pinapaandar o pinapatay ng checkbox ito.
- Ipinapakita o itinatago ito ng screen button sa view (nananatili ito sa stack).
- Ipinapakita o itinatago ito ng camera button sa mga rendered na larawan at video, kaya ang modifier ay maaaring para sa render lamang (o para sa view lamang).
- Inililipat ito ng mga arrow pataas o pababa sa stack. Mahalaga ang pagkakasunod-sunod: ang mirror pagkatapos ay subdivide ay nagbibigay ng makinis na tahi, ang subdivide pagkatapos ay mirror ay hindi.
- Ginagawang bahagi ng mesh ng {{ui:Apply}} ang hugis: ang mga modifier sa itaas nito at ito mismo ay ginagawa sa mismong mesh at inaalis sa stack. Isang undo step ito.
- Inaalis ito ng krus.

## Mga modifier

| Modifier | Ano ang ginagawa nito |
| --- | --- |
| Scale | Nag-scale mula sa origin ng object, isang factor para sa red, green at blue. Gumagana rin sa group o component. |
| Mirror | Nagdadagdag ng mirrored na kopya sa kabila ng red, green o blue sa pamamagitan ng origin ng mesh, at pinagdurugtong ang mga kalahati kung saan sila nagtatagpo. |
| Array | Kumokopya sa isang linya (isang hakbang na sarili nitong laki ang beses sa mga numerong ibinigay mo, dagdag ang nakapirming hakbang), paikot sa isang axis, o sa kahabaan ng curve sa model. Kinukuha ng group o component ang linya. |
| Subdivision surface | Pinapakinis ang mesh sa pamamagitan ng Catmull-Clark subdivision. Nananatiling matalas ang matatalas na edge. Maaaring gumamit ang render ng mas maraming level kaysa sa view. |
| Bevel | Binibilog ang bawat edge na mas matalas kaysa sa anggulong ibibigay mo. |
| Solidify | Binibigyan ng kapal ang isang ibabaw at isinasara ang gilid nito. |
| Boolean | Pinuputol, pinagdurugtong, o pinananatili ang magkapatong sa ibang bagay sa model. Kailangang saradong solid ang pareho. |
| Displace | Itinutulak papasok o palabas ang ibabaw sa pamamagitan ng makinis na noise. Ang parehong seed ay nagbibigay ng parehong bukol sa bawat pagkakataon. |
| Weld | Pinagdurugtong ang mga vertex na mas malapit kaysa sa distansyang ibinigay. |
| Decimate | Pinananatili ang bahagi ng mga triangle, inaalis ang mga nagbabago ng hugis nang pinakakaunti. |
| Smooth | Pinapaluwag ang mga vertex patungo sa kapitbahay nila. |
| Lattice | Binabaluktot ang mesh gamit ang cage: igalaw ang mga punto ng cage at susunod ang mesh. |
| Curve deform | Binabaluktot ang mesh sa kahabaan ng curve sa model, sa red, green o blue. |
| Shrinkwrap | Inililipat ang bawat vertex sa pinakamalapit na punto ng ibang bagay. |

## Sa group o component

Maaari ring magtago ng recipe ang group o component, kaya ang shade ng lampara ay maaaring **Scale** at **Array** ng isang shade, at ang pagbabago ng isang numero ay nagbabago sa lampara.

1. Pumili ng group o component. Sa {{ui:Entity info}}, nakalista sa seksyong **Modifiers** nito ang stack (walang laman sa simula).
2. Pumili ng {{ui:Scale}} o {{ui:Array}} mula sa {{ui:Add a modifier…}}. Nagiging component ang group na **ang orihinal, na inilagay ng stack**. Pinananatili ang orihinal: i-edit ito at susunod agad ang bawat kopya.
3. Ang Scale ay tumatanggap ng factor para sa red, green at blue (ang `1, 1, 2` ay dinodoble ang taas). Ang Array ay tumatanggap ng bilang ng kopya, hakbang bilang bahagi ng kasalukuyang laki ng resulta, at dagdag na hakbang sa haba.

Tumatakbo ang stack mula itaas pababa sa sariling axis ng orihinal sa paligid ng origin nito, kaya mahalaga ang pagkakasunod-sunod: ang Array ng tatlong kopyang 3 m ang layo, saka Scale 2 sa red, ay naglalagay sa mga kopya na 6 m ang layo; ang Scale muna at saka Array ay pinananatili silang 3 m ang layo. Gumagana ang checkbox, mga arrow at krus gaya sa mesh; hindi gumagana ang view at camera button at ang Apply sa isang modifier, dahil isang bagay ang stack sa group.

- {{ui:Edit source}} ay binubuksan ang orihinal sa lugar. Lumilitaw ang mga pagbabago sa bawat kopya; ang pagsasara nito ay bumabalik sa dating kinaroroonan mo.
- {{ui:Bake modifiers}} ay ginagawang simpleng edge at face ang resulta at inaalis ang stack, sa isang undo step. Ang mga kopyang nagsasapawan ay nananatiling hiwalay na geometry: hindi union ang Bake.
- Nagbabahagi ng recipe ang mga kopya ng component; ihihiwalay ito ng {{ui:Make unique}} (nananatiling shared ang orihinal).
- Naka-save ang stack sa file, dinadala ng copy at paste at ng undo, at pinananatili ng Purge unused ang orihinal. Ipinapakita pa rin ng program na hindi kilala ang modifier ang mga kopya.
- Hanggang sa Bake, hindi maaaring pasukin, i-explode, baguhin ang laki o i-stretch ang resulta: muling bubuuin ito sa susunod na pagbabago. Sinasabi ito ng bawat isa.
- Ang mga limit ay 32 modifier at 1,000 kopya. Hindi pa maaaring magbahagi ng definition ang component na ginawang i-stretch (Stretch) at ang stack.

## Subdivision surface

Pinapakinis ng subdivision ang mesh sa pamamagitan ng Catmull-Clark: nagiging four-sided na face ang bawat face, at bawat level ay nagdadala ng apat na beses na mas marami. Mukha nang bilog na hugis ang kahon na may dalawa o tatlong level, at patuloy mong ine-edit ang kahon.

- **Mga level sa view** ang nagtatakda kung gaano kakinis ito.
- **Mga level sa render** ang nagtatakda kung gaano kakinis ang mga rendered na larawan at video; maaaring gumamit ang render ng mas maraming level kaysa sa view.
- **Mga render sa tunay na makinis na ibabaw** ay naglalagay ng mga punto ng rendered na mesh sa limit surface na tinutumbok ng mga level, kaya kahit dalawang level ay mukhang kasing-kinis ng marami.
- **Ang crease** ang nagpapanatiling matalas ang edge: sa Mesh workspace, pumili ng edge at gamitin ang {{ui:Crease}} (1 ay nananatiling matalas, 0.5 ay bahagyang bilog, 0 ay makinis). Tingnan ang [I-edit ang mesh](topic:mesh-edit).
- **Ibaba ang view level sa malaking mesh:** kapag ang mga level na hiniling mo ay magbibigay ng mas maraming face kaysa kayang hawakan nang maayos ng view ng computer na ito, ipinapakita ng view ang mas mababang level at sinasabi kung alin. Palaging ginagamit ng {{ui:Apply}} ang lahat ng level. Itinatakda ang bilang ng face ayon sa klase ng iyong machine sa {{ui:Settings}} › Rendering › Ang iyong machine.
- Pinananatili ng bukas na hangganan ang mga sulok nito at nananatili sa linya ng kanilang edge.

## Yumuko gamit ang lattice cage

1. Magdagdag ng modifier na {{ui:Lattice}} at pindutin ang {{ui:Add a lattice cage round the mesh}}. Lumilitaw ang cage na 3 × 3 × 3 na punto sa paligid ng mesh, iginuguhit bilang wire.
2. Buksan ang cage sa Mesh workspace (i-double-click ito) at igalaw ang mga punto nito. Makinis na susunod ang mesh.

:::tip
Mesh ang cage gaya ng iba: itago ito gamit ang tag nito kapag tapos ka na.
:::

## Malalaking mesh

Ang maliliit na stack ay kinukuwenta agad. Ang malaki ay kinukuwenta sa background sa bawat core ng computer mo: patuloy na ipinapakita ng view ang huling resulta hanggang handa na ang bago. Ini-load ng Boolean ang solid modeler sa unang pagkakataon; sinasabi ito ng view sandali.

## Ano ang hindi pa ginagawa ng modifier

- Mga weight bawat vertex (falloff na pininta sa mesh) para sa Displace, Smooth at Shrinkwrap.
- Mga modifier maliban sa Scale at linear Array sa push/pull geometry (group at component): gawing mesh muna ({{ui:Convert to mesh}}). Darating pa ang Mirror, round o curve Array, Bend at Taper sa mga group.
