---
title: Mga group at component
summary: Pigilang magdikit-dikit ang mga bagay, i-edit ang isang kopya para mabago silang lahat, at gamitin ang mga panel na Outliner at Components.
keywords: group, component, gumawa ng group, gumawa ng component, explode, gawing natatangi, outliner, instances, kopya, block, nested, i-edit ang group, ilagay
from: 7cb925f3
---

Ang loose geometry sa ModelCraft ay nagdidikit-dikit: ang mga linyang nagdadampi ay naghahati sa isa't isa, at ang mga face na may magkabahaging gilid ay sabay gumagalaw. Ito ang dahilan kung bakit gumagana ang pagguhit sa mga face, pero ibig din nitong sabihin na kapag gumuhit ka ng kahon sa tabi ng isa pang kahon, nagsasama ang dalawa. Pinaghihiwalay ng **group** at **component** ang mga bagay.

- Ang **group** ay bumabalot sa ilang geometry para kumilos ito bilang iisang bagay. Walang bagay sa labas nito ang makakadikit dito.
- Ang **component** ay group na maaaring ilagay nang maraming beses. Pareho ang laman ng bawat kopya: kapag in-edit mo ang isa, nagbabago silang lahat. Gamitin ang component para sa anumang paulit-ulit: bintana, haligi, desk, puno.

## Gumawa ng group o component

1. Piliin ang geometry. Ang triple-click sa isang face ay pumipili ng buong konektadong bagay; ang window drag ay pumipili ng lahat sa loob ng kahon.
2. Pindutin ang {{key:Shift+G}} para sa group, o {{key:G}} para sa component. Maaari ka ring mag-click ng {{ui:Group}} o {{ui:Component}} sa pangkat na {{ui:Organize}} ng toolbar, o ng {{ui:Make group (Shift+G)}} o {{ui:Make component (G)}} sa {{ui:Entity info}}.

   Sinasabi ng status bar ang "Pinangkat bilang Group#1." o "Ginawang component Component#1.", napipili ang bagong bagay, at lumalabas ito sa {{ui:Outliner}}.

3. Para pangalanan ito, i-type ang pangalan sa field na {{ui:Name}} ng {{ui:Entity info}} at pindutin ang {{key:Enter}} o mag-click sa labas.

Kapag pumili ka ng face, kasama ring napipili ang mga gilid nito. Kung walang napili, sinasabi ng status bar: "Pumili muna ng geometry (mag-drag ng window, o mag-triple-click para piliin ang lahat ng konektado)."

Maaari ka ring mag-group ng mga group: pumili ng ilang group at pindutin ang {{key:Shift+G}}. Ipinapakita ng {{ui:Outliner}} ang pagkaka-nest.

:::note
Tugma ang mga letra ng key sa mga default ng SketchUp: ang {{key:G}} ay gumagawa ng component, ang {{key:Shift+G}} ng group.
:::

## I-edit sa loob ng group o component

1. I-double-click ito (sa view o sa {{ui:Outliner}}), o piliin ito at i-click ang {{ui:Edit}} sa {{ui:Entity info}}.

   Mawawala sa paningin ang iba pang bahagi ng model, lilipat ang mga axis sa sarili nitong axes ng group, at mababasa ng {{ui:Outliner}} ang "Ine-edit: Model › Group#1". Sinasabi ng status bar ang "Ine-edit ang Group#1. Pindutin ang Esc o mag-double-click sa labas para isara."

2. Gumuhit, mag-push/pull, gumalaw, at magbura gaya ng dati. Mananatili sa loob ng group ang lahat ng ginagawa mo.
3. Isara ito: pindutin ang {{key:Esc}} (dalawang beses kung may napili), mag-double-click sa walang lamang espasyo, o i-click ang {{ui:Close group}} sa {{ui:Outliner}}.

Habang bukas ang component, nagbabago ang bawat kopya nito habang nagtatrabaho ka.

## Maglagay pa ng kopya ng component

- Kopyahin ito gamit ang {{ui:Move}} at {{key:Ctrl}} (tingnan ang [Move and copy](topic:move-copy)). Ang bawat kopya ay panibagong placement ng parehong component.
- O i-click ang {{ui:Place}} sa tabi nito sa panel na {{ui:Components}}, pagkatapos i-click kung saan ito ilalagay. Ang origin nito, ang pinakamababang sulok ng kahon sa paligid ng pinili mo noong ginawa ito, ang lalapag kung saan ka nag-click. Babalik ang tool sa {{ui:Select}}.

Ipinapakita ng {{ui:Components}} kung ilang kopya ang nailagay ("4×"), at ipinapakita ng {{ui:Outliner}} ang bilang sa tabi ng pangalan.

## Ayusin sa Outliner

I-drag ang isang row sa {{ui:Outliner}} para baguhin kung saan ito nabibilang. Walang gumagalaw sa view: nananatili sa lugar nito sa model ang isang group.

- **Papasok sa group:** ibagsak ito sa gitna ng row ng isang group (lalabas ang dashed na outline sa row). Papasok ito at mapupunta sa huli.
- **Ibang pagkakasunod:** ibagsak ito sa itaas o ibabang gilid ng row (may linyang lalabas doon). Mapupunta ito bago o pagkatapos ng row na iyon, sa loob ng parehong group ng row na iyon, kaya napapasok din ito sa group sa napiling lugar.
- **Palabas sa pinakataas na antas:** ibagsak ito sa heading ng {{ui:Outliner}}. Mapupunta ito sa huli.

Bawat drop ay isang hakbang: ibinabalik ito ng {{key:Mod+Z}}. Walang ibinabagsak ang {{key:Esc}} habang nagda-drag. Hindi maaaring pumasok ang group sa sarili nito o sa group na hawak nito. Naka-off ang pag-drag habang may teksto ang {{ui:Find by name}}.

:::touch
Idiin nang sandali ang daliri sa isang row, pagkatapos i-drag. Ang mabilis na swipe ay nag-i-scroll sa listahan.
:::

## Gawing iba ang isang kopya

Piliin ang kopya at i-click ang {{ui:Make unique}} sa {{ui:Entity info}} (lumalabas ito kapag higit sa isang beses nailagay ang component). Magkakaroon ng sariling definition ang kopyang iyon, na may pangalang kapareho ng orihinal at bagong numero. I-edit ito nang hindi ginagalaw ang iba.

## I-convert ang group sa component

Piliin ang group at i-click ang {{ui:Make component}} sa {{ui:Entity info}}. Bibigyan ito ng bagong pangalan, gaya ng Component#2, kahit pinangalanan mo na ang group; i-type muli ang pangalan sa {{ui:Name}}.

## Explode

Piliin ang group o component at i-click ang {{ui:Explode}} (sa toolbar o sa {{ui:Entity info}}). Ang laman nito ay magiging loose geometry sa dating lugar, at didikit sa mga bagay na nakadampi dito. Mananatiling group ang mga group sa loob nito.

## Solid at volume

Kapag pumili ka ng group o component, ipinapakita ng {{ui:Entity info}} ang **Solid: Oo** kung sarado ang mga face nito nang walang puwang (bawat gilid ay pinagsasaluhan ng eksaktong dalawang face) at walang group na nakapasok dito. Kapag ganoon, ipinapakita rin nito ang **volume**. Solid ang kahon, ang pader na may butas na dinaanan ng bintana, at ang hinilang silindro; hindi solid ang kahon na binura ang itaas.

## Kapag nabura ang huling kopya

Ang pagbura sa huling kopya ng component ay inaalis din ito sa panel na {{ui:Components}}. Ibinabalik ito ng {{key:Mod+Z}}.

## Mga dapat malaman

- Ang mga kopya ng **group** na ginawa gamit ang Move ay nagbabahagi ng laman sa build na ito, gaya ng mga kopya ng component: kapag in-edit ang isa, nagbabago ang iba. Para gawing hiwalay ang isa, i-click ang {{ui:Make component}}, pagkatapos {{ui:Make unique}}. Tingnan ang [Troubleshooting](topic:troubleshooting#editing-one-group-changed-another).
- Hindi nag-uukit ng butas sa mga pader ang mga component, hindi sila dumidikit sa mga face, at walang library ng mga handang component. Ikaw ang gagawa ng sarili mo, o mag-i-import.
- Ang mga na-import na file ay dumarating bilang group. Pinapanatili ng mga Collada file ang sarili nilang group at component sa loob nito.
