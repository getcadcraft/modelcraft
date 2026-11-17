---
title: I-animate ang anumang property, hubugin bilang curves, at paghaluin ang clips
summary: Ang Animate workspace ay nagla-key ng posisyon, ikot at sukat ng object, liwanag, saklaw at kulay ng lamp, ang lens, at mga shape key ng mesh; binabaluktot ng armature ang mesh gamit ang bones at pininturahang weights; pinapaabot, pinapatingin, kinokopya, pinananatili sa limits, pinapabitin o pinasusunod ng IK at constraints ang bones at object; ang rigid bodies ay bumabagsak, nagsasalansan at nagbabanggaan at ginagawang keys; ang drivers ay nagtatakda ng value mula sa iba; ang Curves view ng timeline ay humuhubog ng bawat pagbabago gamit ang Bézier handles at cycles, at ang Clips view nito ay nagse-save ng animations bilang actions na muling inilalagay at pinaghahalo.
keywords: physics, rigid body, rigid bodies, simulation, simulate, bumagsak, mahulog, gravity, magbanggaan, collision, isalansan, talbog, friction, bake, baked, ik, inverse kinematics, constraint, constraints, tumingin sa, track to, aim, copy transforms, copy location, copy rotation, limit rotation, limits, child of, parent, follow path, path, pole, fabrik, chain, armature, armatures, rig, rigging, bones, bone, skeleton, skin, skinning, weights, weight paint, weight painting, vertex groups, automatic weights, bone heat, pose, pose mode, dual quaternion, linear blend, shape keys, shape key, morph, morphs, morph targets, blend shapes, blendshapes, facial, expression, driver, drivers, expressions, animate workspace, animate, animation, keyframe, key, keys, property, properties, transform, location, rotation, scale, lamp, light, liwanag, kulay, color, lens, field of view, fov, graph editor, curves, curve, bezier, handles, tangent, interpolation, cycle, cycles, ulitin, loop, ping pong, offset, dope sheet, piliin ang keys, box select, kopyahin ang keys, i-paste ang keys, i-stretch ang keys, i-scale ang keys, clips, actions, nla, paghalo, blend, influence, stash
from: 16d8e12f
---

Ginagalaw ng [timeline](topic:animation) ang camera at ang buong group at component. Ang **Animate** workspace ay nagla-key ng higit pa riyan, at may dalawa pang view ang timeline para hubugin at muling gamitin ang mga na-key mo.

## Buksan ito

Piliin ang {{ui:Animate}} sa workspace list sa toolbar. Bubukas ang timeline sa ilalim ng view, ipinapakita ng toolbar ang mga group ng Animate ({{ui:Keys}}, {{ui:Play}}, {{ui:Timeline}}), at nakalista sa panel sa kanan ang mga maaari mong i-key sa playhead.

## I-key ang isang property

Nakalista sa panel, sa playhead:

- **Piniling object**: ang {{ui:Place}}, {{ui:Turn (°)}} at {{ui:Size}}, tig-tatlong numero. Mag-type ng numero at pindutin ang {{key:Enter}}: ika-key ito sa playhead at lilipat doon ang object. Ang diamond sa tabi ng row ay nagke-key ng value sa kasalukuyang estado nito; ang punong diamond ay nangangahulugang may key na sa playhead.
- **Mga lamp**: ang {{ui:Brightness (lm)}}, {{ui:Spread (°)}} (spot lamps) at {{ui:Colour}} ng bawat lamp.
- **Camera**: ang {{ui:Lens angle (°)}}, para sa zoom habang gumagalaw ang camera.

Ang {{ui:Key transform}} (o {{key:I}}) ay sabay-sabay na nagke-key ng place, turn at size ng bawat napiling group o component; ang {{ui:Key camera}} (o {{key:K}}) ay nagke-key ng camera. Kapag naka-on ang {{ui:Auto key}}, ang group na may na-key na place, turn at size sa ganitong paraan ay makakakuha ng bagong key sa tuwing ililipat mo ito.

Tatlong anggulo ang turn: sa paligid ng X, pagkatapos Y, pagkatapos Z. Ang turn na na-key na lampas 180° ay nagpapatuloy sa parehong direksyon (ang 190° ay nananatiling 190°, hindi −170°), kaya maaaring umikot nang ilang beses ang gulong.

:::tip
Ang group na na-key gamit ang {{ui:Key selected}} sa timeline ay may buong-placement keys. Ang curve button sa row nito ay ginagawa itong place, turn at size curves (parehong placement sa bawat key) para mahubog mo sila sa {{ui:Curves}}.
:::

## Shape keys (morphs)

Ang **shape key** ay ibang hugis ng parehong [mesh](topic:meshes): ngiti sa mukha, umbok ng pinto, baluktot na dahon. Humahalo ang slider nito mula sa mesh sa kasalukuyang anyo nito (0) hanggang sa hugis na iyon (1); nagdadagdag-dagdag ang maraming key.

1. Pumili ng mesh sa Animate workspace: ipinapakita ng panel ang {{ui:Shape keys}} nito.
2. I-click ang {{ui:Add shape key}}. Pupunta ang ModelCraft sa [Mesh workspace](topic:mesh-edit) kasama ang bagong key na ine-edit: ilipat ang mga point, i-extrude, i-sculpt — gawing hugis na gusto mo ang mesh.
3. Bumalik sa {{ui:Animate}} at i-click ang {{ui:Done}}. Babalik ang mesh sa dati, at nananatili ang binago mo sa key.

Pagkatapos, i-drag ang slider ng key (o mag-type ng value) para ihalo ito. Ang diamond ay nagke-key ng value sa playhead, kaya puwedeng lumaki at kumupas ang key sa paglipas ng panahon; kapag may track na ito, ang bagong value ay nakakey sa playhead. Ang lapis ay muling nag-e-edit ng hugis ng key (ipinapakita ng mesh ito nang buo hanggang {{ui:Done}}; iniiwan ng {{ui:Cancel}} ang key na katulad ng dati), ang mata ay nagpapatay ng key, at ang basurahan ay nagtatanggal nito.

Ang vertex na idinagdag mo habang nag-e-edit ng key ay bahagi na ng mesh mismo: mananatili ito kung saan mo inilagay, sa bawat hugis.

:::note
Inililipat ng shape keys ang mesh bago ang [modifiers](topic:modifiers) nito: pinapakinis ng Subdivision modifier ang nahalong hugis. Ipinapakita ng mga rendered na larawan at video ang keys sa bawat frame.
:::

## Armatures: bones na bumabaluktot sa mesh

Ang **armature** ay set ng bones sa loob ng [mesh](topic:meshes). I-pose ang bones at susunod ang mesh, bawat point ayon sa sinasabi ng **weights** nito.

1. Pumili ng mesh sa Animate workspace at i-click ang {{ui:Add an armature}} sa panel (o ang {{ui:Add bone}} sa {{ui:Rig}} group): tatakbo ang unang bone paitaas sa gitna ng mesh mula sa paa nito.
2. Kapag may napiling bone, idinadagdag ng {{ui:Add a child bone}} ang susunod mula sa dulo nito. Itakda ang {{ui:Head}}, {{ui:Tip}}, {{ui:Roll (°)}} ng anumang bone at kung saan ito {{ui:Hangs from}} sa panel; ang bone na nakabitin sa iba ay gumagalaw kasama nito. I-untick ang {{ui:Moves the mesh}} para sa bone na nagmamaneho lang sa iba.
3. I-click ang {{ui:Automatic weights}}: hahawakan ng bawat bone ang mga point na pinakamalapit dito, at kakalat nang maayos ang paghawak sa mesh, kaya nagbabahagi ng mga ito ang mga point sa pagitan ng dalawang bone. Ang {{ui:Nearest bones only}} ay mas mabilis at mas matigas na paghahati.

**I-pose** ang bones gamit ang {{ui:Pose}} ({{key:P}}): i-click ang bone para piliin ito, i-drag para paikutin ito sa paligid ng axis ng view, {{key:Shift}}-drag para ilipat ito. O mag-type ng {{ui:Place}}, {{ui:Turn (°)}} at {{ui:Size}} nito sa ilalim ng {{ui:Pose}}; nasa sarili nitong axes ng bone ang turns, mula sa lugar kung saan ito nakapahinga. Ang mga diamond at ang {{ui:Key the whole pose}} ay nagke-key ng pose sa playhead; kapag may keys na ang bone, ang pag-pose dito ay nagke-key na roon. Ibinabalik ng {{ui:Reset this bone}} at {{ui:Reset the pose}} ang bones sa pahinga.

**Pintahan ang weights** ({{key:W}}) para sa napiling bone: ipinapakita ng mesh ang sarili sa pahinga, bawat face ay kinukulayan ayon sa kung gaano ito hinahawakan ng bone na iyon — pula ang lahat, asul ang wala. Magpinta para magdagdag ng hawak ({{key:Mod}} ang nag-aalis nito, {{key:Shift}} ang nagpapakinis); itinatakda ng {{ui:Size (px)}} at {{ui:Strength}} ang brush. Kapag naka-on ang {{ui:Keep each point's weights adding up to 1}}, ang pagbibigay ng mas maraming sa isang bone ay kumukuha ng katumbas mula sa iba. Ang bawat stroke ay isang hakbang ng undo ng model.

Pinipili ng {{ui:Skin}} kung paano gumagalaw ang point sa pagitan ng bones: ang {{ui:Linear (fast)}} ay humahalo sa galaw ng bones, at medyo kumukurot sa baluktot na kasukasuan; ang {{ui:Dual quaternion (keeps volume at joints)}} ay pinapaikot ang point sa paligid ng kasukasuan, kaya nananatili ang kapal ng siko o tuhod (hindi hinihila ng {{ui:Size}} ng bone ang balat).

:::note
Nauuna ang shape keys, sumusunod ang armature, at pagkatapos ang [modifiers]. Ipinapakita ng view, mga larawan at video ang naka-pose na mesh; kasama ng mesh ang weights nito, at kasama ng animation ang bones at kanilang pose.
:::

## IK at constraints

Ang **constraint** ay gumagalaw sa bone o object pagkatapos ng keys nito, ayon sa isang panuntunan. Piliin ang object (o, sa armature, ang bone) at magdagdag ng isa sa ilalim ng {{ui:Mga constraint ng …}}; sunod-sunod na tumatakbo ang marami ayon sa listahan (binabago ito ng mga arrow), at bawat isa ay may {{ui:How much}} (0 hanggang 1, nakakey gamit ang diamond nito tulad ng alinmang property) at on/off switch.

| Constraint | Para sa | Ano ang ginagawa nito |
|---|---|---|
| {{ui:Reach (IK)}} | Bones | Bumabaluktot ang bone at ang mga bone na kinabibitinan nito ({{ui:Bones in the chain}}) para maabot ng tip nito ang target. Sa dalawang bone at isang {{ui:Pole (the bend points to it)}}, tumuturo ang siko o tuhod sa pole; bumabaluktot nang maayos ang mas mahahabang chain. Kapag hindi abot, tumuturo nang tuwid sa target ang chain. |
| {{ui:Look at}} | Pareho | Umiikot para tumingin ang {{ui:Axis that points}} sa target, habang pinapanatili ang {{ui:Axis kept up}} na kasing-lapit ng pataas hangga't kaya nito. |
| {{ui:Copy transforms}} | Pareho | Kinukuha ang place, turn o size ng target — ang mga may tsek. |
| {{ui:Limits}} | Pareho | Pinapanatili ang sarili nitong place, turn (degrees) o size sa pagitan ng {{ui:min}} at {{ui:max}} bawat axis; iwanang walang laman ang isang pares para malaya ang axis na iyon. |
| {{ui:Child of}} | Pareho | Gumagalaw kasama ng target na para bang nakabitin dito, mula sa kinaroroonan nilang dalawa nang piliin mo ang target. |
| {{ui:Follow path}} | Objects | Nakaupo sa [curve object](topic:curves) sa {{ui:Along the curve}} (0 ang simula nito, 1 ang dulo; i-key ito para bumiyahe), at sa {{ui:Turn along the curve}} ay humaharap sa kahabaan nito. |

Ang target ay ibang object sa bukas na group, bone ng parehong armature, o {{ui:A point}} na tina-type mo (nasa coordinates ng model ang point ng object, nasa mesh nito ang point ng bone). Para sa IK leg, ilagay ang target kung saan dapat ang paa at i-key ang target, o i-key ang {{ui:How much}} para ipasa ang binti sa pagitan ng keys at ng IK.

:::tip
Ang object na tumitingin sa isa na sumusunod sa path ay makikita ito sa path: inuuna ng ModelCraft ang pagkuwenta ng mga target, anuman ang ayos ng mga object.
:::

## Physics: bumagsak, magsalansan at magbanggaan

Hayaang mahulog ang mga object at matamaan ang isa't isa, pagkatapos ay panatilihin ang resulta bilang keys.

1. Pumili ng group, component o mesh at itakda ang {{ui:Rigid body}} nito sa ilalim ng {{ui:Physics}}: {{ui:Falls and collides}} (gumagalaw ito) o {{ui:Stays put, gets in the way}} (mesa, pader, rampa). Bigyan ang bumabagsak na object ng {{ui:Shape}} nito — {{ui:Box (its bounds)}} o {{ui:Ball (round its bounds)}} — ang {{ui:Mass (kg)}} nito, {{ui:Friction}} at {{ui:Bounce}} (0 ay walang talbog, 1 ay tumatalbog pabalik sa parehong taas).
2. Sa ilalim ng {{ui:The whole model}}, itakda ang {{ui:From (s)}} at {{ui:To (s)}}, ang {{ui:Gravity (m/s², down)}} at kung may {{ui:A ground to land on}} (at ang taas nito).
3. I-click ang {{ui:Bake physics}} (sa panel o sa {{ui:Physics}} group). Ang bawat bumabagsak na object ay makakakuha ng place, turn at size key sa bawat frame sa pagitan ng dalawang oras; i-play ito tulad ng alinmang animation.

Ang muling pag-bake ay pumapalit sa mga keys na iyon; tinatanggal ito ng {{ui:Remove baked keys}}. Nagsisimula ang mga object sa pahinga, kung saan sila inilagay ng kanilang keys, curves at constraints sa {{ui:From (s)}} (ang naunang galaw na naka-key ay hindi nagpapatuloy sa pagbagsak). Ang mas maraming {{ui:Steps a frame}} ay nagpapatatag sa matataas na salansan; sinasabi ng status bar kung may gumagalaw pa sa dulo.

:::note
Ang shapes ay box at bola na nakabilog sa mga hangganan ng bawat object; humahawak ang box gamit ang mga sulok, gitna ng gilid at gitna ng face, kaya nagsasalansan at natutumba ang mga box gaya ng inaasahan. Hindi pa naitatayo ang cloth, fluids, joints sa pagitan ng mga object, at eksaktong shapes.
:::

## Drivers

Ang **driver** ay nagtatakda ng shape key mula sa ibang bagay sa halip na manu-mano: buksan ang driver ng key (ang calculator button), sumulat ng **expression**, at ibigay sa bawat pangalan dito kung ano ang binabasa nito ({{ui:Reads}}): ang oras sa segundo, ang frame, ang place, turn o size ng placement sa kahabaan ng X, Y o Z, ang liwanag ng lamp, o ibang shape key. Halimbawa, kapag binabasa ng `v` ang turn ng pinto sa paligid ng Z, binubuksan ng `clamp(v / 90, 0, 1)` ang shape habang bumubukas ang pinto.

Gumagamit ang expressions ng numero, mga pangalan, `+ - * / % ^` at bracket, at ng mga function na `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg`, kasama ang `pi` at `e`. Itinuturo ang pagkakamali at walang nababago. Ipinapakita ng slider ng driven key ang value ng driver; nananaig ang driver sa track ng key hanggang tanggalin mo ito.

## Pumili at baguhin ang keys (Keys view)

Ang {{ui:Keys}} ay nagpapakita ng isang row bawat track: ang camera, bawat gumagalaw na group, at bawat property ("Lamp 2 · Brightness (lm)"; bilog ang property keys).

- I-click ang key para piliin ito; ang {{key:Shift}}-click o {{key:Mod}}-click ay nagdadagdag o nag-aalis ng keys sa pinili. Ang {{key:Shift}}-drag sa ibabaw ng mga row ay gumuguhit ng kahon na nagdadagdag ng bawat key sa loob nito.
- I-drag ang napiling key para ilipat silang lahat; ang {{key:Left}} / {{key:Right}} ay naglilipat sa kanila ng isang frame ({{key:Shift}}: sampu).
- Kinokopya ng {{key:Mod+C}} ang napiling keys, idinidikit ng {{key:Mod+V}} sila mula sa playhead sa parehong tracks (maaari ding mag-paste ng ibang tab ng ModelCraft).
- Ikinakalat ng {{ui:Stretch}} ang napiling keys palayo sa playhead ayon sa numerong nasa tabi nito (2 = dalawang beses ang layo; 0.5 ang humihila sa kanila nang mas malapit).
- Itinatakda ng ease list kung paano gumagalaw ang bawat napiling key.

## Hubugin ang curves (Curves view)

Ang {{ui:Curves}} ay graph ng bawat numero sa paglipas ng panahon: oras sa pahalang, value pataas. I-tick ang mga curve na ipapakita sa listahan sa kaliwa (ang X, Y at Z ay pula, berde at asul).

- I-click ang key (isang parisukat) para piliin ito, {{key:Shift}}-click para sa higit pa, o i-drag ang isang kahon. I-drag ang napiling key para baguhin ang oras at value nito; kapag marami ang napili, inililipat ng pag-drag sila sa oras.
- Ang napiling key ay nagpapakita ng dalawang **handles**. I-drag ang isa para hubugin ang curve sa panig na iyon. Sinasabi ng {{ui:Handles}} kung paano sila kumikilos: {{ui:Automatic}} (makinis na curve na dumadaan sa mga key sa paligid nito), {{ui:Pointing at the next key}}, {{ui:Aligned}} (nananatili ang dalawa sa tuwid na linya, kaya walang sulok ang curve) o {{ui:Free}}.
- Itinatakda ng {{ui:From the chosen keys}} kung paano lumilipat ang bawat napiling key papunta sa susunod: {{ui:Curve (handles)}}, {{ui:Smooth}}, {{ui:Steady}}, {{ui:Slow in and out}} o {{ui:Hold}}.
- Itinatakda ng {{ui:Before}} at {{ui:After}} kung ano ang gagawin ng curve sa labas ng mga key nito: {{ui:Hold}} (nananatili sa una o huling value), {{ui:Repeat}}, {{ui:Back and forth}}, o {{ui:Repeat and carry on}} (bawat ulit ay nagsisimula kung saan natapos ang nauna: patuloy na gumugulong ang gulong, patuloy na lumalakad ang lumalakad).
- Nag-zu-zoom ang gulong ({{key:Mod}}: values lang, {{key:Shift}}: oras lang); i-drag gamit ang gitnang button o ang {{key:Alt}} para mag-pan; ang {{ui:Show all}} o {{key:Home}} ay kumakasya sa bawat ipinapakitang curve. I-click ang bakanteng espasyo para ilipat doon ang playhead. Binubura ng {{key:Delete}} ang napiling keys.

Pinipigilan ang mga handle na magsalubong sa oras, kaya hindi kailanman tumatakbo paatras ang curve.

## Gamitin muli ang animations (Clips view)

Ang **clip** ay nagpapatakbo ng naka-save na animation (isang **action**) sa timeline. Pinaghahalo ang mga clip ayon sa ayos, ang mas mababang row ay nasa ibabaw ng mas mataas; ang sariling tracks ng timeline ay nasa ibabaw ng bawat clip.

1. I-key ang mga group at lamp gaya ng dati, pagkatapos i-click ang {{ui:Make a clip}} sa {{ui:Clips}} at bigyan ng pangalan ang action. Nagiging action ang mga track, at tumatakbo ito ng clip kung saan sila dati (nananatili ang camera sa timeline).
2. Para gamitin ulit, piliin ang action at i-click ang {{ui:Add clip}}: magsisimula ang bagong clip sa playhead.
3. I-drag ang clip sa kahabaan ng row nito para ilipat; i-click ito para itakda ang {{ui:Start (s)}}, {{ui:Speed}} (2 = dalawang beses ang bilis), {{ui:Repeats}}, {{ui:How much}} (0 hanggang 1), {{ui:Mix}} ({{ui:Replace}}, o {{ui:Add on top}} sa mga clip bago nito), {{ui:Outside the clip}} (wala, hawakan ang dulo nito, o hawakan ang dalawang dulo) at {{ui:Mute}}. Binabago ng mga arrow ang ayos; tinatanggal ito ng basurahan (kasama nitong nawawala ang action na wala nang gumagamit na clip).

Ang clip na mas mababa sa buong {{ui:How much}} ay humahalo sa kung ano ang nasa ilalim nito: ang clip bago nito, o ang lamp o placement gaya ng nakatayo kung walang animation.

## Ano ang tumatakbo saan

| Ano | Sa view | Sa rendered na video |
|---|---|---|
| Camera keys, lens angle kasama ng camera keys | Oo | Oo |
| Place, turn at size (keys, curves, clips) | Oo | Oo |
| Brightness, spread at kulay ng lamp | Oo | Hindi pa: gumagamit ang video ng mga lamp gaya ng nakatayo sa simula nito (tingnan ang [what isn't built yet](topic:not-built-yet)) |
| Lens angle nang walang camera keys | Oo | Hindi pa: i-key din ang camera |
| Shape keys at drivers | Oo | Oo |
| Armatures (mga naka-pose na mesh) | Oo | Oo |
| IK at constraints | Oo | Oo |
| Baked physics (keys) | Oo | Oo |

Lahat ay nakasave sa `.modelcraft` file kasama ng iba pang bahagi ng animation, at binabawi ng {{ui:Undo}} at {{ui:Redo}} ng timeline ang alinman dito.
