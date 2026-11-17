---
title: Freeform surfaces (NURBS)
summary: Makinis na curve at surface para sa product shell, car body at boat hull: loft, sweep, curve network, four-edge patch, blend, trim, na may G0, G1 at G2 continuity na sinusukat sa eksaktong surface, solid na may union, subtract at intersect, zebra at curvature view, face na isinasaayos sa scan na may sinukat na error, at mga file na STEP o IGES.
keywords: nurbs, scan, reverse engineering, fit, mesh to surface, point cloud, stl, trim, trimmed, hole, cut, solid, solids, boolean, union, subtract, intersect, difference, sew, closed, freeform, free-form, surface, surfaces, b-spline, bspline, curve, spline, loft, sweep, rail, network, coons, patch, blend, match, continuity, g0, g1, g2, tangent, curvature, zebra, control points, knots, degree, step, iges, class a
from: 09887405
---

Ang panel na **Surfaces** ay gumagawa ng makinis na mga curve at surface na ginagamit sa product shell, car body at boat hull: NURBS, ang parehong matematika na ginagamit ng ibang surface modeler. Lahat ay sinusukat sa eksaktong surface, hindi kailanman sa mga triangle na nakikita mo. Ang mga sukat sa panel ay nasa **millimetre**, anuman ang unit na ipinapakita ng model.

Buksan ito mula sa panel sa kanan: {{ui:Surfaces}} › {{ui:Open the Surfaces panel}}. Kusa itong bumubukas kapag may surface na ang model.

## Paano gumagana ang isang command

1. Pindutin ang isang command (halimbawa, **Loft**). Sinasabi ng panel kung ano pa ang kailangan nito: mga punto, curve, gilid ng surface o dulo ng curve.
2. Pumili ng mga ito: i-click sa 3D view, o pindutin ang **Pick** (o ang mga button ng edge at dulo) sa tabi ng bawat isa sa listahan. Para sa edge, i-click malapit sa gilid na iyon ng surface.
3. Suriin ang mga opsyon (degree, tolerance, continuity, …) at pindutin ang **Make**.

Ang mga curve mula sa punto ay tumatanggap ng mga punto na tina-type, isa bawat linya (`x, y, z` sa mm), o ang **Pick points in the view**: bawat click ay gumagamit ng parehong snapping ng mga drawing tool; pindutin ang <kbd>Enter</kbd> o i-double-click para tapusin, <kbd>Esc</kbd> para huminto.

## Mga curve

- Ang **Curve through points** ay dumadaan sa bawat punto. Ang **Curve by control points** ay sumusunod sa isang hawla ng mga punto sa halip.
- Ang **Insert knot**, **Raise degree** at **Lower degree** ay nagbabago kung paano inilalarawan ang curve nang hindi ito inililipat (tumatanggi ang lowering kapag lalampas sa tolerance ang galaw ng curve). Ang **Rebuild curve** ay nagbibigay dito ng bagong bilang ng control point at sinasabi kung gaano ito lumipat.
- Ang **Match curve** ay nagpapadikit sa dulo ng isang curve sa dulo ng iba na may G0 (nagdidikit), G1 (parehong direksyon) o G2 (pareho rin ang curvature). Ang **Blend curve** ay nagdadagdag ng bagong curve sa pagitan ng dalawang dulo.
- **Join curves** at **Split curve**.

## Mga surface

- **Loft** sa pagitan ng dalawa o higit pang curve, **Ruled surface** sa pagitan ng dalawa, **Extrude curve**, **Revolve curve**.
- Ang **Sweep along one rail** ay nagdadala ng profile sa kahabaan ng landas nang hindi pinipilipit, at ang **Sweep along two rails** ay pinananatili ang mga dulo ng profile sa parehong rail. Ang mga sweep ay isinasaayos: sinasabi ng status line kung gaano kalapit ito nanatili sa tunay na sweep.
- Ang **Surface from a curve network** ay dumadaan sa isang grid ng mga curve (ang unang pinili ay mga profile, ang natitira ay mga guide). Pinupunan ng **Patch from four edges** ang apat na curve na nagtatagpo sa kanilang mga sulok.
- Ang **Match surface** ay nagpapadikit ng gilid ng surface sa kapitbahay nito na may G0, G1 o G2; ang **Blend surface** ay nagdadagdag ng surface sa pagitan ng dalawang edge.
- Ang **Offset surface**, **Extend surface** (nagpapatuloy ang surface sa dating direksyon nito), **Rebuild surface**, at mga knot at degree para sa mga surface.

## Pagsuri sa kalidad

Inililista ng talahanayang **Shared edges** ang bawat edge na pinagsasaluhan ng dalawang surface, kasama ang agwat (mm), ang anggulo sa pagitan nila (°) at ang pagtalon ng curvature (1/mm), at kung ito ay G0, G1 o G2. Ang edge na mas masama sa hiniling mo ay nasa **Problems** din (ang ⚠ button sa app bar) na may ayos na **Match**.

Ang **Show as** › **Zebra stripes** at **Curvature (Gaussian)** ay galing sa eksaktong surface: ang mga guhit na tuloy-tuloy na dumadaan sa edge ay nangangahulugang G1; ang mga guhit na nananatili ring pareho ang lapad ay nangangahulugang G2. Asul ang curvature kung saan ang surface ay saddle, pula kung saan ito ay dome, at puti kung saan ito ay patag. Iginuguhit ng **Control points** ang mga control net.

Sinusukat ang G0–G2 sa 33 punto bawat edge. **Hindi sinusukat ang G3 at ang kalidad na "class A"**, at hindi ito inaangkin.

## I-trim ang surface

Pinuputol ng grupong **Trim** ang surface nang hindi binabago ang hugis nito: pinananatili ng surface ang lahat ng control point nito, at ang bahaging nasa loob ng outline lamang ang ipinapakita, binibilang, at isinusulat. Ang **Trim to a rectangle** at **Trim with a circle** ay gumagana sa bahagi (0 hanggang 1) ng surface sa bawat direksyon, kaya hindi na kailangang pumili sa view; ang **Trim by a curve** ay tumatanggap ng saradong curve na nasa surface (ipinoproject ito sa surface, at tinatanggihan nang may paliwanag kapag bukas ito o higit sa tolerance ang layo). Lagyan ng tsek ang **Cut a hole** para alisin ang loob ng outline; iwan itong walang tsek para panatilihin lamang ang loob. Maaaring may isang pinananatiling outline ang surface at anumang bilang ng butas; tinatanggihan ang outline na tumatawid sa iba. Ipinapakita ng **Remove the trim** muli ang buong surface. Sinusunod ng mga putol na gilid ang outline nang eksakto; kinukuha ng Undo ng panel ang trim pabalik na tulad ng ibang hakbang.

Dinadala ng STEP ang trim bilang bounds ng face at ng IGES bilang trimmed surface (entity 144); binabasa ito pabalik ng dalawa.

## Mga solid at Boolean

Ginagawang saradong katawan ng grupong **Solids** ang mga surface at pinagsasama ang mga ito. Ang solid dito ay isang hanay ng sariling surface ng panel na sama-samang nagsasara ng isang volume; nananatiling eksaktong NURBS surface ang mga face nito, kasama ang kanilang trim.

- Ang **Box solid**, **Cylinder solid** at **Sphere solid** ay gumagawa ng isa mula sa mga sukat na tina-type (sa mm): isang box na may anim na patag na face, isang cylinder na may bilog na gilid at dalawang patag na dulo na naka-trim sa bilog, isang sphere na isang revolved surface.
- Ang **Solid from surfaces** ay nagpapangkat ng mga surface na ginawa mo. Pumili ng mga ito, o huwag pumili ng alinman para gamitin ang bawat ipinakitang surface na wala pa sa solid. Tinatahi ang mga ito sa loob ng tolerance: kapag hindi sila nagsara, walang nagbabago at sinasabi ng panel kung ilang edge ang nananatiling bukas at gaano sila kalapit dapat magtagpo.
- **Union**, **Subtract** (ang pangalawang solid ay tinatanggal sa una) at **Intersect** (tanging ang pinagsasaluhan ng dalawa) ay tumatanggap ng dalawang solid: i-click ang isang face ng bawat isa sa view, o pindutin ang **Pick** sa listahan ng **Solids**. Lagyan ng tsek ang **Keep the two solids** para iwan sila sa tabi ng resulta.

Pinananatili ng Boolean ang bawat face sa sarili nitong eksaktong surface at pinuputol ito ng bagong trim outline sa kahabaan ng intersection. Ibinibigay ng result line ang mga sinukat na numero: gaano kalayo kailangang lumipat ang mga punto ng solid engine para tumama sa eksaktong surface (hindi kailanman lampas sa tolerance), gaano kalapit ang mga intersection point sa parehong surface (karaniwang ilang milyonsa ng isang milimetro), ang volume, at kung nagsasara ulit ang mga bagong face kapag tinahi silang muli mula sa eksaktong surface. Sinusukat ang mga volume sa triangle sa loob ng tolerance (0.05 mm maliban kung magtakda ka ng iba), kaya bahagyang mas mababa ang volume ng sphere o cylinder kaysa sa eksakto: mas malapit ito kapag mas maliit ang tolerance. Tinatanggihan nang may paliwanag at walang binabago ang Boolean na hindi malinis na magagawa (walang pinagsasaluhan ang mga solid, o tatawid sa sarili nito ang outline). Isang hakbang ng **Undo** ng panel ang isang Boolean.

Sa listahan ng **Solids**, pinananatili ng **Ungroup** ang mga face bilang simpleng surface; inaalis ng bin ang solid at ang mga face nito.

Ang **Add to the model** (sa listahan ng **Solids**) ay naglalagay ng kopya ng solid sa model bilang isang saradong group, ang mga face nito ay triangle sa loob ng 0.05 mm, sa isang hakbang ng Undo ng model. Pagkatapos nito, gumagana na ito sa sariling **Union**, **Subtract** at **Intersect** ng model, sa push-pull, at sa 3D-print check; nananatili ang eksaktong solid sa panel.

## Fillet at pagpapakapal

Pinapabilugan ng **Fillet between faces** ang gilid kung saan nagtatagpo ang dalawang face ng isang solid: pumili ng dalawang face (sa view, o gamit ang **Pick** sa listahan), i-type ang **radius** at, para sa radius na nagbabago sa kahabaan ng gilid, ang **radius at the end** (ang 0 ay nagpapanatili ng isang radius). Ginugulong ang bola ng radius na iyon sa kahabaan ng gilid habang dumidikit sa parehong face; ang fillet ay ang eksaktong circular arc na iniiwan nito sa bawat punto, pinagdugtong sa isang surface, at ang dalawang face ay pinuputol kung saan sila dinidikit ng bola. Nawawalan ng materyal ang panlabas na gilid, at nakakakuha ng materyal ang panloob na sulok. Ibinibigay ng result line ang sinukat: gaano kalayo ang fillet surface sa rolling ball sa pagitan ng mga punto kung saan ito itinayo (nagdadagdag ng punto hanggang nasa loob ito ng isang-kapat ng tolerance), ang pinakamalaking anggulo sa pagitan ng fillet at ng bawat face sa kahabaan ng touch line, at ang parehong numero ng Union. Tinatanggihan ang radius na hindi kasya (ang bola ay aalis sa face, o may face na mas hihigpit ang kurba kaysa sa radius), at pinangalanan ang face, at walang nagbabago.

Ang **Fillet several edges** ay nagpapabilog ng maraming gilid sa isang hakbang: pumili ng dalawang face ng unang edge, saka ng dalawang face ng susunod, at iba pa (maaaring nasa ilang pares ang isang face, halimbawa ang itaas na face ng box sa apat sa mga ito); lahat ng edge ay makakakuha ng radius na tina-type mo. Ang bawat pagbilog ay kinukuwenta sa solid gaya ng dati, saka pinuputol nang sunud-sunod, kaya hindi mahalaga ang pagkakasunod-sunod. Kung saan nagtatagpo ang dalawang bilog na edge sa isang sulok na ang ibang edge ay nananatiling matalim, magsasalubong ang dalawang fillet sa kanilang intersection curve (isang crease). Kung saan nagtatagpo ang tatlong bilog na panlabas na edge ng tatlong patag na face na patayo sa isa't isa, na may iisang radius, ang sulok ay isang **sphere patch** na tangent sa tatlong fillet (alisin ang tsek sa **Corners** para makuha ang sulok na may crease); ang edge ay dapat hindi bababa sa dalawang beses ang radius ang haba kung saan ang magkabilang dulo nito ay ganitong sulok. Sinasabi ng result line kung ilang edge ang nabilugan at kung paano lumabas ang mga sulok. Maaaring bilugan nang sabay ang mga panloob na edge, pero ang resultang hindi nagsasara muli ay iniuulat lamang (sinasabi ito ng line), kaya suriin ito.

Ang **Thicken into a solid** ay nagbibigay ng kapal sa surface: piliin ito, i-type ang **thickness**, at lagyan ng tsek ang **Other side** para palakihin ito sa kabilang direksyon. Ang offset face ay isinasaayos sa surface at sinusukat laban dito (ibinibigay ng result line ang pinakamalaking pagkakaiba sa kapal); sinusunod ng mga wall ang bawat edge at bawat trim outline. Kung kumukurba ang surface nang mas hihigpit kaysa sa kapal sa panig na iyon, o may ibang bahagi nito na mas malapit kaysa sa kapal, tinatanggihan ito, pinangalanan ang surface at ang lugar, at walang nagbabago.

## Undo, file, STEP at IGES

May sariling **Undo** at **Redo** ang panel (isang hakbang bawat command). Naka-save ang mga surface sa file na `.modelcraft` kasama ng model; hindi sila bahagi ng sariling undo ng model, gaya ng mga materyal ng file.

Ang **STEP…** (AP242) at **IGES…** ay nagse-save ng mga curve at surface nang eksakto kung ano sila (B-spline curve at surface, walang ginawang triangle). Ang bawat surface ay sarili nitong face, na may trim; ang solid ay isinusulat bilang isang saradong shell, bawat edge ay pinagsasaluhan ng dalawang face nito gaya ng inaasahan ng ibang CAD program (sinasabi ng status line kung ilang solid ang nailabas nang ganoon). Sa IGES, ang parehong solid ay isang manifold solid B-rep (entity 186 sa saradong shell 514, mga face 510, mga loop 508, isang edge list 504 at isang vertex list 502); ang solid na hindi nagpapares ng mga face edge sa edge ay isinusulat bilang hiwalay na mga face, at sinasabi ito ng line. Binabasa ng **Import…** pabalik ang ganoong solid bilang solid, mula sa STEP at mula sa IGES. Binabasa nito ang mga curve at surface na isinulat nang ganito, at ang mga `.ccnurbs` patch set; ang mga STEP solid ng ibang programa ay binubuksan gamit ang File › Import bilang mesh.

## Mga surface mula sa scan (reverse engineering)

Piliin ang na-scan na mesh sa model (kung walang napili, lahat ng ipinakita), buksan ang **Surfaces**, at sa grupong **Scan** piliin ang **Fit surfaces to the scan**. Hinahanap ng tool ang **planes**, **cylinders**, **spheres** at **cones** (ang eksaktong surface na binubuo ng isang machined na bahagi; ipinapakita ng bawat row ang radius o half-angle na nahanap nito), hinahanap ang **fillets** (mga bilog na edge at sulok: isang maliit na cylinder o sphere na dumidikit nang tangent sa dalawa o higit pang face, ipinapakita kasama ng radius nito at ng mga face na pinagdudugtong nito), **rim fillets** (isang torus: ang bilog na edge kung saan nagtatagpo ang patag na face at cylinder o cone, ipinapakita kasama ng radius nito at ng ring radius nito), at **variable fillets** (bilog na edge na nagbabago ang radius sa kahabaan, ipinapakita ang radius sa bawat dulo), isinasaayos ang **isang free-form patch** sa makinis at bahagyang kurbadong piraso, at pinuputol ang bawat face sa outline ng bahagi ng scan kung saan ito galing, kaya nananatili ang mga butas at sulok. Mga opsyon: ang **tolerance** (gaano kalayo, sa mm, ang maaaring nasa plane o cylinder na scan point at kabilang pa rin dito, at ang target para sa free-form patch), ang **smallest piece** (bahagi ng lawak ng surface) at ang **most faces**. Palaging nagbibigay ang parehong scan at parehong opsyon ng parehong mga face.

Ang resulta ay isang talahanayan, isang row bawat face: ang uri nito, ilang triangle ang pinagmulan nito, at ang error na **sinukat mula sa scan papunta sa face** (rms, ang pinakamalaki, at ang bahagi ng mga punto sa loob ng tolerance). Ang mga sinukat na punto ay ang vertex ng scan at ang gitna ng bawat triangle. Hindi sinusukat ang error sa kabilang direksyon (face papunta sa scan), kaya hindi lalabas ang face na lumalampas sa scan. Sinasabi rin ng note sa ilalim ng talahanayan kung gaano karaming lawak ang masyadong maliit para maisaayos. Sa view, kinukulayan ang mga scan point ayon sa **deviation map** nila: asul sa face, berde sa kalahati ng tolerance, pula sa tolerance o higit pa (alisin ang tsek sa **Show the deviation map** para itago ito). Ang mga piraso na bumabalik sa sarili nila (halimbawa, isang saradong tubo na isinaayos gamit ang free-form patch) ay nakalista bilang hindi naisaayos, at hindi kailanman pinipilit sa iisang surface.

Ang **Stitch the surfaces to a solid** ay tumatahi sa bawat ipinakitang surface na wala pa sa solid tungo sa iisang saradong solid. Nagtatagpo lamang ang mga scan face sa loob ng sariling error ng scan, kaya sinusubukan nito ang pinakamaliit na layo ng pagdugtong na nagsasara (hindi kailanman lampas sa **stitch distance** na itinakda mo) at tumatanggi nang may paliwanag kapag hindi nagsasara ang mga face. Hindi ito kailanman tinatakpan ang agwat. Nagsasara ang box na may bilog na gilid kapag nahanap ang fillet nito bilang sariling mga face; nasa resulta ang layo ng pagdugtong na nagsara. Pagkatapos, gumagana na ang solid kasama ang Union, Subtract, Intersect at **Add to the model**.

Ang hindi nito ginagawa: ang **rim fillet** (isang torus) ay hinahanap lamang sa paligid ng axis ng cylinder o cone na nahanap na; at ang **variable fillet** ay lamang sa medyo tuwid na edge (ang mga seksyon nito ay pinuputol nang patayo sa isang direksyon); sa ibang lugar, nagiging free-form patch ang mga ito kapag sapat na makinis, at iniiwan kapag hindi; ang sphere, cone at fillet ay natatagpuan sa pamamagitan ng random sampling, kaya maaaring makaligtaan ang napakaliit (ilang triangle lamang); ang deviation map ay nagpapakita ng layo mula sa scan papunta sa face, hindi ang kabaligtaran; tinatanggihan dito ang napakalalaking scan (lampas sa 300,000 triangle). Ang mga face ng cylinder na buong ikot ay pinuputol sa paligid ng mga butas, at ang tahi ay inilalagay kung saan walang butas. Suriin ang bawat face laban sa scan mo bago ito pagkatiwalaan.

## Hindi pa nagagawa

Pagbilog ng mga edge na nagtatagpo sa sulok ng kurbadong face o may magkakaibang radius (vertex blend), fillet sa pagitan ng mga face na hindi nagtatagpo, panloob na fillet na nagtatapos sa hilig o kurbadong face, at mga Boolean at fillet na kinukuwenta sa mga surface nang walang triangle (dito, ang solid engine ay gumagana sa mga triangle sa loob ng tolerance, at pagkatapos ay ibinabalik ang bawat punto sa eksaktong surface).
