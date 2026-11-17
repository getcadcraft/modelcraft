---
title: "Gumuhit ng face gamit ang linya, rectangle, bilog at arko"
summary: "Gumawa ng patag na face sa lupa o sa ibang face, hatiin ang mga ito gamit ang linya, at gumuhit ng bilog at polygon na may gusto mong bilang ng gilid."
keywords: "gumuhit, linya, rectangle, bilog, polygon, offset, inset, frame, border, arko, curve, spline, makinis, cable, path, bulge, radius, face, plano ng sahig, footprint, split, gilid, segment, outline, pencil"
from: b6d7b7dd
---

Nagsisimula ang lahat sa ModelCraft bilang isang patag na **face**: surface na sarado ng mga edge. Maaari kang direktang gumuhit ng face gamit ang {{ui:Rectangle}}, {{ui:Bilog}} o {{ui:Polygon}}, o balangkasin ang isang edge sa bawat pagkakataon gamit ang {{ui:Linya}}. Ang mga face ang ginagawang solid ng [Push/pull](topic:push-pull).

## Gumuhit ng rectangle

1. Pindutin ang {{key:R}}.
2. I-click ang unang corner: sa lupa, o sa alinmang face ng model.
3. Igalaw ang pointer. Nananatili ang rectangle sa lupa (o sa face na sinimulan mo), at ipinapakita ng value box ({{ui:Dimension}}) ang lapad at lalim nito. Sinasabi ng tip na "Parisukat" kapag magkakapantay ang mga gilid.

   Para gumuhit sa ibang eroplano, ituro ito: ang face na dumadaan sa unang corner ay naglalagay ng rectangle sa face na iyon, at ang pag-snap sa punto sa labas ng eroplano (isang endpoint, isang edge, ang blue axis) ay pinatatayo ang rectangle sa pamamagitan ng dalawang corner. I-snap pabalik sa punto sa unang eroplano at muli itong hihiga. Para panatilihin ang isang eroplano, pindutin ang arrow key: pinapanatili ng {{key:Up}} na pahalang ang rectangle (ang blue na eroplano), {{key:Right}} sa red na eroplano, {{key:Left}} sa green na eroplano. Pindutin muli ang parehong key para i-unlock.
4. I-click ang kabilang corner, o mag-type ng dalawang sukat na pinaghihiwalay ng kuwit at pindutin ang {{key:Enter}}: `4m,3m`, `4000,3000` sa model na nasa millimeter, o `12',10'6"` sa feet at inches.

   Lilitaw ang isang face na may apat na edge sa paligid nito.

Ang mga na-type na sukat ay pupunta sa direksyong itinuturo mo: kung nasa kaliwa ng unang corner ang pointer habang nagta-type ka, lalaki ang rectangle pakaliwa.

:::warning
Ang kuwit ang naghihiwalay sa dalawang sukat, kaya hindi ito puwedeng maging decimal mark. I-type ang `2.5m,3m`, huwag kailanman `2,5m`.
:::

## Gumuhit ng bilog o polygon

1. Pindutin ang {{key:C}} para sa bilog o {{key:N}} para sa polygon.
2. Para baguhin ang bilang ng gilid, i-type ito bago mag-click: `12s` (o `12` lang) at {{key:Enter}}. Nagsisimula ang bilog sa 24 na gilid at ang polygon sa 6. Ipinapakita ng tip ang kasalukuyang bilang, at itinatanda ito ng ModelCraft para sa susunod na bilog hanggang baguhin mo ito o magpalit ng tool.
3. I-click ang center, sa lupa o sa face. Para i-center ito sa face, ituro ang gitna ng face ("Center ng face") o ang gitna ng isa sa mga edge nito ("Midpoint") habang nasa loob lang ng face ang pointer: iguguhit ang bilog sa face na iyon, kahit sa makitid na dulo ng mahabang box.
4. I-click para itakda ang radius, o i-type ito ({{ui:Radius}} sa value box) at pindutin ang {{key:Enter}}.

Ang bilog ay polygon na maraming gilid. Kapag hinila mo ang bilog pataas gamit ang Push/pull, pinapalambot ang mga gilid nito para magmukhang isang makinis na surface ang silindro.

## Gumuhit ng arko

1. Pindutin ang {{key:A}} ({{ui:Arko}}).
2. I-click kung saan magsisimula ang arko, pagkatapos kung saan ito magtatapos (o i-type ang haba sa pagitan nila).
3. Igalaw ang pointer para ilabas ang umbok ng arko, at i-click. Sinasabi ng tip na "Kalahating bilog" kapag kalahati ng distansya sa pagitan ng mga dulo ang umbok. O i-type kung gaano kalayo ang gitna: `2` at {{key:Enter}}.

Para gumuhit ng arko sa paligid ng isang punto, gamitin ang {{ui:Arko center}}: i-click ang center, pagkatapos kung saan magsisimula ang arko (o i-type ang radius), pagkatapos kung saan ito magtatapos (o i-type ang anggulo sa degrees, gaya ng `90`). Nagsa-snap ito sa mga hakbang na 15°.

Ang arkong sinimulan sa face ay iginuguhit sa face na iyon; kung hindi, nasa lupa ito, o tumatayo nang patayo kapag magkaiba ang taas ng dalawang dulo nito. May 12 segment ang arko; i-type ang `24s` habang gumuhit para sa mas marami. Nagsasara rin ng face ang mga arko gaya ng linya: ang arkong dumaraan sa corner ng rectangle ay naghahati rito.

## Gumuhit ng makinis na curve

Gumuguhit ang {{ui:Curve}} ng makinis na linya na dumaraan sa bawat punto na i-click mo: isang cable, daanan ng handrail, gilid ng hardin. Maaari itong umalis sa lupa: nagsa-snap ang mga punto sa mga corner, edge at face kahit saan, at nila-lock ng mga arrow key ang red, green o blue, gaya ng {{ui:Linya}}.

1. I-click ang {{ui:Curve}} sa grupong {{ui:Draw}}.
2. I-click ang mga punto na dinadaanan ng curve. I-type ang `<0,0,1>` at {{key:Enter}} para sa punto na 1 sa itaas ng huli, `[x,y,z]` para sa eksaktong lugar, o haba para sa punto na ganoon kalayo patungo sa pointer.
3. Pindutin ang {{key:Enter}} o mag-double-click para tapusin. I-click muli ang unang punto para isara ang curve. Inaalis ng {{key:Backspace}} ang huling punto.

Napipili ang curve bilang isang piraso. Para baguhin ito, piliin ito at i-click ang {{ui:I-edit ang mga punto}} sa {{ui:Impormasyon ng entity}}: lalabas na parisukat ang mga punto nito. I-click ang isa, pagkatapos i-click kung saan ito pupunta (o i-type ang `<dx,dy,dz>`). Ibinabalik ng {{key:Esc}} ang punto sa dati, at tinatapos ang pag-edit. Ang sarado at patag na curve ay nagiging face; ang curve na bumabalangkas sa isang face ay hindi na maaaring i-edit.

## Offset: hangganan sa loob o labas ng face

Kinokopya ng {{ui:Offset}} ang balangkas ng face sa itinakdang distansya sa loob nito (o sa labas), para sa frame, hangganan, sill o salamin ng screen.

1. Pindutin ang {{key:F}} at i-click ang face, o piliin muna ang face at pagkatapos pindutin ang {{key:F}}.
2. Igalaw ang pointer papasok sa face para sa panloob na balangkas, o palabas dito para sa panlabas. Sumusunod ang bagong balangkas, at sinasabi ng tip kung gaano kalayo.
3. I-click, o i-type ang distansya at pindutin ang {{key:Enter}}.

Nahahati sa dalawa ang face: ang panloob na face at isang frame sa paligid nito (o isang bagong singsing sa labas). I-Push/pull ang alinman sa dalawa agad: para sa screen, gumuhit ng box, itulak ito sa kapal nito, i-offset ang harap na face ng 30 mm papasok at itulak nang kaunti ang panloob na face para sa salamin. Naa-offset din ang mga butas sa face, at nananatiling isang curve ang arko o bilog (mas maliit o mas malaki).

- **Mag-double-click** ng face gamit ang {{ui:Offset}} para i-offset ulit ito sa huling distansya.
- **Mga edge:** pumili ng magkakabit na edge sa iisang eroplano (halimbawa, ang dalawang linya ng isang L), pindutin ang {{key:F}}, igalaw sa gustong panig at i-type ang distansya: iguguhit ang isang parallel na kopya, na may mitred na mga corner.
- Kapag mas malaki ang distansya kaysa pinapayagan ng face, sinasabi ito ng ModelCraft at walang iguguhit.

## Ang arko, bilog at polygon ay curve

I-click ang alinmang segment ng arko, bilog o polygon at buo nang mapipili ang curve. Ipinapakita pagkatapos ng {{ui:Impormasyon ng entity}} ang radius nito, mga segment, anggulo (para sa arko) at haba nito. I-type doon ang bagong radius para baguhin ang laki nito mula sa center; sumusunod ang mga face na iginuhit sa eroplano nito. Kapag naitulak o nahila na ang face ng curve, nananatili ang radius nito gaya ng dati.

## Gumuhit gamit ang linya

1. Pindutin ang {{key:L}}.
2. I-click kung saan magsisimula ang linya.
3. I-click kung saan ito magtatapos, o mag-type ng haba at pindutin ang {{key:Enter}}. Ang na-type na haba ay pupunta sa direksyong ipinapakita ng pointer.
4. Patuloy na mag-click. Sinisimulan ng bawat click ang susunod na linya mula sa dulo ng huli.
5. Isara ang balangkas sa pamamagitan ng pag-click muli sa unang punto. Kapag nagsara ang mga linya ng patag na loop, napupuno ito ng face at humihinto sa pagkakabit ang tool. Pindutin ang {{key:Esc}} para huminto anumang oras.

Sumusunod ang mga linya sa red, green at blue na direksyon kapag malapit ka sa mga ito; nagiging kulay na iyon ang linya at sinasabi ng tip na "Nasa red axis". Tingnan ang [Inference at snapping](topic:inference) para malaman kung paano i-lock ang direksyon at mag-snap sa mga punto.

### Saan pupunta ang linya kapag walang nakadikit

- Ang linyang nagsisimula sa face ay nananatili sa eroplano ng face na iyon.
- Ang linyang nagsisimula sa lupa, o sa bakanteng espasyo, ay nananatiling pantay sa punto ng simula nito. Kung tinitingnan mo ang model nang patagilid, mapupunta ito sa patayong eroplanong nakaharap sa iyo.
- Para gumuhit ng linya sa eksaktong lugar, mag-type ng punto: `[x,y,z]` para sa punto sa model, o `<dx,dy,dz>` para sa offset mula sa simula. Tingnan ang [I-type ang eksaktong sukat sa value box](topic:value-box).

## Hatiin ang face

Gumuhit ng linya sa ibabaw ng face, mula sa isang edge papunta sa isa pa (o mula edge hanggang edge sa pamamagitan ng ibang linya). Nahahati ang face sa dalawang face. Nananatili ang bawat isa sa sarili nitong panig at kulay. Ganoon din kapag rectangle o bilog ang iginuhit sa face: ang hugis ay nagiging sariling face sa loob ng mas malaking face, na may butas na ngayon.

Ganito mo inilalatag ang mga silid sa slab ng sahig, bintana sa pader, o hakbang sa hagdan: iguhit ang balangkas sa face, pagkatapos itulak o hilahin ang bagong face.

## Mga face na nakaharap sa maling direksyon

May harap at likod ang bawat face. Ang likod ay ipinapakitang blue-grey. Ang mga face na iginuhit sa lupa ay nakaharap pataas; ang mga face na iginuhit sa ibang face ay nakaharap sa parehong direksyon ng face na iyon.

Kung ang face ay nagpapakita ng likod nito kung saan mo inaasahan ang harap, piliin ito at i-click ang {{ui:Baligtarin ang face}} sa {{ui:Impormasyon ng entity}}.

## Ano ang makikita mo habang gumuguhit

- Isang kulay na marker kung saan nagsa-snap ang pointer, at ang pangalan nito sa tip sa kaliwang ibaba.
- Preview ng linya o hugis.
- Ang live na sukat sa value box. Maaari mo itong i-type ulit anumang oras.

## Kung wala sa inaasahan mong lugar ang hugis

- Sa touch screen, tingnan ang [Pag-troubleshoot](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Kung nag-snap ang linya sa isang bagay na malayo sa likod, bahagyang mag-orbit: hindi nagsa-snap ang mga punto na nakatago sa likod ng face, pero nagsa-snap ang mga punto sa gilid nito.
- Pindutin ang {{key:Mod+Z}} para i-undo ang huling hugis; isang undo ang nag-aalis ng isang linya o isang hugis.
