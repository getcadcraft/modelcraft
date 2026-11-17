---
title: မလုပ်ရသေးသော အရာများ
summary: ဤ ModelCraft build သည် ယခုအချိန်တွင် မလုပ်နိုင်သေးသော အရာများနှင့် ယနေ့ ပြုလုပ်ရန် အနီးဆုံး နည်းလမ်းကို ဖော်ပြသည်။
keywords: missing, not yet, limitations, roadmap, materials, textures, text, layers, trim, split, cloud, desktop
from: 179fa5e4
---

ModelCraft သည် အစောပိုင်း build ဖြစ်သည်။ ဤစာမျက်နှာသည် ၎င်းမလုပ်နိုင်သေးသော အရာများကို စာရင်းပြုစုထားပြီး၊ ထို့ကြောင့် မရှာဖွေမိစေရန်နှင့် ယနေ့ အလုပ်ကို ပြီးမြောက်စေမည့် အနီးဆုံး နည်းလမ်းကို ပြသည်။

## ပုံဆွဲကိရိယာများ

| မလုပ်ရသေးသော အရာ | ယနေ့ အစားထိုး နည်း |
|---|---|
| လက်ဖြင့် ဆွဲခြင်း | {{ui:Curve}} ဖြင့် အမှတ်များကို နှိပ်ပါ |
| ဆွဲပြီးနောက် arc သို့မဟုတ် စက်ဝိုင်း၏ segment အရေအတွက် ပြောင်းခြင်း | ဖျက်ပြီး `24s` ကို ရိုက်ပြီးနောက် ပြန်ဆွဲပါ |
| [3D text](topic:text3d) အတွက် စာလုံးပုံစံ ရွေးခြင်း၊ သို့မဟုတ် ချပြီးနောက် စာသား ပြင်ခြင်း | ဖျက်ပြီး စာသားကို ပြန်ထည့်ပါ |
| angle dimension တွင် ရိုက်၍ angle ပြောင်းခြင်း၊ သို့မဟုတ် ၎င်း၏ စက်ဝိုင် dimension မှ cylinder အရွယ်အစား ပြောင်းခြင်း | အစွန်းများကို {{ui:Rotate}} ဖြင့် လှည့်ပါ; cylinder ကို {{ui:Scale}} ဖြင့် ချဲ့/ချုံ့ပါ |
| ထုတ်ထားသော model ဖိုင်များရှိ dimension များ | Dimension များသည် view ၏ ပုံများ၊ print များနှင့် PDF များတွင် ပေါ်သည်; model ဖိုင်များသည် ဂျီဩမေတြီကိုသာ သယ်ဆောင်သည် |
| Trim၊ Split နှင့် Outer shell | [Union၊ Subtract နှင့် Intersect](topic:solids) ဖြင့် ပိတ်ထားသော အုပ်စုများ၊ သို့မဟုတ် [မျက်နှာများကို ဖြတ်ခြင်း](topic:intersect) ပြီး မလိုသည်ကို ဖျက်ပါ |
| မြား key များဖြင့် လှည့်သည့် ဝင်ရိုး ရွေးခြင်း | မျက်နှာတစ်ခုပေါ်ရှိ {{ui:Rotate}} အလယ်ဗဟိုကို နှိပ်ပါ၊ ဝင်ရိုးက ညွှန်ရမည့် ဘက်သို့ မျက်နှာ ရှိရမည် |
| အမြင်လိုင်းတစ်ခုထက် ပိုသော inference များကို တစ်ပြိုင်နက် လော့ခ်ချခြင်း | မြား key ဖြင့် ဦးတည်ချက် တစ်ခုကို လော့ခ်ချပြီး နောက် အမှတ်သို့ ကပ်ပါ |
| စောင်းသော သို့မဟုတ် ထောင့်မဟုတ်သော dimension အဆုံးမှ အရွယ်ပြောင်းခြင်း | Dimension ကို ထောင့်နှစ်ခုပေါ်၊ အစွန်းတစ်လျှောက်၊ သို့မဟုတ် red၊ green၊ blue တစ်လျှောက် ထားပါ |

## Animation

| မလုပ်ရသေးသော အရာ | ယနေ့ အစားထိုး နည်း |
|---|---|
| မျက်နှာများ၊ အစွန်းများ၊ နေ၏ နေ့ချိန်၊ style သို့မဟုတ် ဖျောက်ထားသည်များကို animate လုပ်ခြင်း | ရွေ့နေသည့် အပိုင်းကို အုပ်စု သို့မဟုတ် component ဖြစ်အောင် ပြုလုပ်ပါ; အခြား နေ့ချိန်အတွက် ဗီဒီယိုကို သီးခြား render လုပ်ပါ |
| ဆွဲထားသော လမ်းကြောင်းကို လိုက်သော ကင်မရာ၊ သို့မဟုတ် ရွေ့နေသော အရာကို ကြည့်သော ကင်မရာ | လမ်းတစ်လျှောက် ကင်မရာ key များ ထပ်ထည့်ပါ ([Animate](topic:animation)) |
| ဗီဒီယိုရှိ အသံ၊ နှင့် WebGPU မရှိဘဲ အရည်အသွေးမြင့် (path-traced) ဗီဒီယိုများ | ဗီဒီယို editor တွင် အသံ ထည့်ပါ; WebGPU မရှိပါက fast renderer ဖြင့် ဗီဒီယို render လုပ်ပါ ([ဗီဒီယို render လုပ်ခြင်း](topic:animation#render-the-video)) |
| render ထားသော ဗီဒီယိုရှိ မီးအလင်းတောက်ပမှု၊ ပျံ့နှံ့မှု၊ အရောင် (animated lamps)၊ ကင်မရာ key မပါဘဲ ဗီဒီယိုတွင် lens angle animate လုပ်ခြင်း၊ materials သို့မဟုတ် render settings animate လုပ်ခြင်း | မီးများသည် view တွင် animate ဖြစ်သည်; zoom အတွက် ဗီဒီယိုတွင် ကင်မရာကိုလည်း key လုပ်ပါ; မတူညီသော မီးဆက်တင်များအတွက် ဗီဒီယို သီးခြား render လုပ်ပါ ([Animate any property](topic:animate)) |
| အခြားဘက်သို့ weight သို့မဟုတ် bone များကို ကူးခြင်း၊ မြင်နိုင်သော bone envelope များ၊ weight များကို အမှတ်တစ်ခုချင်းစီ အရိပ်ထည့်ပြခြင်း (၎င်းတို့သည် မျက်နှာအလိုက် ပြသည်)၊ weight ဆေးသုတ်နေစဉ် ပုံသွင်းထားသော mesh ကို မြင်ခြင်း | နှစ်ဘက်စလုံး ဆေးသုတ်ပါ၊ သို့မဟုတ် တစ်ဝက်ကို ပြုလုပ်ပြီး armature မထည့်မီ Mirror modifier ကို သုံးပါ; စစ်ဆေးရန် Paint weights နှင့် Pose ကြား ပြောင်းပါ |
| glTF၊ FBX သို့မဟုတ် USD ဖိုင်များမှ armature အဖြစ် ဖတ်သော bone များ၊ နှင့် ထိုဖိုင်များသို့ ရေးသော armature များ | Skinned model များသည် ဖိုင်၏ weight များနှင့်အတူ rest အနေအထားဖြင့် ဝင်လာသည်; bone များကို ဖိုင်၏ joint အစီအစဉ်အတိုင်း ထည့်ပြီး {{ui:Use the file's weights}} ([Animate](topic:animate)) |
| IK target သို့မဟုတ် pole ကို view တွင် ဆွဲ၍ ရွှေ့ခြင်း၊ constraint ၏ ကိုယ်ပိုင်နေရာ (local သို့မဟုတ် world) ရွေးခြင်း၊ IK ကွင်းများကို ဆန့်ခြင်း၊ မျဉ်းကွေးတစ်လျှောက် IK | Target ၏ အမှတ်ကို ရိုက်ပါ၊ သို့မဟုတ် အရာတစ်ခုကို ချိန်ပြီး ၎င်းကို ရွှေ့ပါ; ကွင်းများကို ၎င်းတို့၏ အရှည်တွင် ထားပါ |
| Cloth၊ fluid၊ soft body၊ rigid body များကြား joint နှင့် hinge၊ အရာ၏ တိကျသော ပုံသဏ္ဍာန်နှင့် တိုက်မိခြင်း (သေတ္တာနှင့် ဘောလုံးသာ ပတ်လည်တွင်)၊ ဖွင့်နေစဉ် live simulation၊ စတင်အမြန်နှုန်း သို့မဟုတ် လှည့်နှုန်း (bodies သည် rest မှ စတင်သည်) | Rigid body များကို bake လုပ်ပြီး key များကို ဖွင့်ပါ; key များဖြင့် hinge တည်ဆောက်ပါ; ထူးခြားသော ပုံသဏ္ဍာန်ကို သေတ္တာများ (အုပ်စုများ) အဖြစ် ခွဲပါ |
| Animation ကို glTF သို့မဟုတ် အခြား model ဖိုင်များသို့ ထုတ်ခြင်း | ဗီဒီယို render လုပ်ပါ; `.modelcraft` ဖိုင်နှင့် ModelCraft သိမ်းထားသော [USD ဖိုင်](topic:usd) သည် ModelCraft အတွက် ထားပါ |
| VR တွင် issue တစ်ခုပေါ် မှတ်ချက် သို့မဟုတ် ခေါင်းစဉ် ရိုက်ခြင်း၊ အသံ မှတ်စု၊ VR တွင် section plane ကို လက်ဖြင့် ရွှေ့ခြင်း | VR တွင် issue ကို ချထားပြီး စာသားကို BCF program တွင် ထည့်ပါ; VR ထဲ မဝင်မီ view တွင် section plane ကို သတ်မှတ်ပါ: [VR headset ဖြင့် model ကို ပြန်သုံးသပ်ခြင်း](topic:vr-review) ကို ကြည့်ပါ |
| VR ရှိ ဒက်စ်ခုံတွင် လူများကို မြင်ခြင်း (VR ထဲ ရှိသော လူများသာ ပေါ်သည်)၊ VR လမ်းလျှောက်ခြင်းကို မှတ်တမ်းတင်ခြင်း | VR တွင် ပါဝင်ရန် တောင်းဆိုပါ၊ သို့မဟုတ် လမ်းလျှောက်ခြင်းကို [animation](topic:animation) အဖြစ် ပြုလုပ်ပါ |

## Mesh များ

| မလုပ်ရသေးသော အရာ | ယနေ့ အစားထိုး နည်း |
|---|---|
| အဆင့်ဆင့် sculpt လုပ်ခြင်း (multiresolution) နှင့် သေးငယ်လာသော တြိဂံများကို ဖယ်ရှားသော Detail | Subdivide လုပ်ထားသော mesh ကို [Sculpt](topic:sculpt) လုပ်ပါ; ပြန်ညီအောင် {{ui:Remesh}} |
| ပုံသဏ္ဍာန်ကို လိုက်သော လေးထောင့် မျက်နှာများသို့ remesh လုပ်ခြင်း | {{ui:Remesh}} (တြိဂံညီများ) ပြုလုပ်ပြီး [Retopology](topic:mesh-edit#retopology) ဖြင့် ပြန်တည်ဆောက်ပါ |
| Modifier များအတွက် vertex များပေါ် weight ဆေးသုတ်ခြင်း (Displace၊ Smooth နှင့် Shrinkwrap သည် mesh တစ်ခုလုံးပေါ် အလုပ်လုပ်သည်) | Modifier ကို apply လုပ်ပြီး လိုအပ်သော အပိုင်းများကို sculpt သို့မဟုတ် တည်းဖြတ်ပါ |
| Vertex၊ အစွန်း သို့မဟုတ် မျက်နှာများကို ကူးခြင်းနှင့် ကူးထည့်ခြင်း၊ မျက်နှာတစ်ခုအတွင်း အဆုံးသတ်သော knife ဖြတ်၊ မျက်နှာမရှိသော wire အစွန်းများ | Model တွင် mesh ကို ပွားပါ; အစွန်းမှ အစွန်းသို့ knife သုံးပါ; ဖွင့်ထားသော အစွန်းများကို မျက်နှာများအဖြစ် [Extrude](topic:mesh-edit#change-the-shape) လုပ်ပါ |

## စီမံခြင်းနှင့် ကြည့်ရှုခြင်း

| မလုပ်ရသေးသော အရာ | ယနေ့ အစားထိုး နည်း |
|---|---|
| DWG နှင့် DXF site plan များ၏ အလွှာများကို tag အဖြစ် | Site plan သည် အုပ်စုတစ်ခုအဖြစ် ဝင်လာသည်: ၎င်းကို explode လုပ်ပြီး tag လုပ်လိုသော အပိုင်းများကို အုပ်စုဖွဲ့ပါ |
| Section cut အများအပြား တစ်ပြိုင်နက်၊ section box သို့မဟုတ် section ၏ outline ကို ပုံဆွဲအဖြစ် ထုတ်ခြင်း | တစ်ကြိမ်လျှင် [section plane](topic:sections) တစ်ခုသာ ဖြတ်သည်; view ကို ပုံအဖြစ် ထုတ်ပါ |
| Soft edge များကို အစင်းကြောင်းဖြင့် ပြခြင်း၊ slider ဆွဲနေစဉ် ပျော့ညံ့အောင်လုပ်ခြင်း | Entity info တွင် [Soften by angle](topic:soften) လုပ်ပြီး အခြား angle ကို စမ်းရန် undo လုပ်ပါ |
| ရှာဖွေနိုင်သော အွန်လိုင်း model စာကြည့်တိုက်၊ သို့မဟုတ် ရွေးချယ်စရာ (အရောင်၊ style) ရှိသော component များ | [Starter library](topic:starter); Collada၊ OBJ သို့မဟုတ် glTF model များကို import လုပ်ပါ; မိတ္တူကို အရွယ်အစားသို့ [stretch](topic:stretch) လုပ်ပါ |
| Plant library မှ အပင်များ ချခြင်း | Live view တွင် [Scatter](topic:live-view#scatter-plants-rocks-and-people) အပင်များ၊ သို့မဟုတ် starter library မှ သစ်ပင် ချပါ |
| အုပ်စု၏ သီးခြား မိတ္တူများ | Component ဖြစ်အောင် ပြုလုပ်ပြီး {{ui:Make unique}} (see [Troubleshooting](topic:troubleshooting#editing-one-group-changed-another)) |

## Rendering

| မလုပ်ရသေးသော အရာ | ယနေ့ အစားထိုး နည်း |
|---|---|
| View ထဲတွင် render လုပ်ခြင်း ({{ui:Render}} workspace)၊ render queue၊ နှင့် WebGPU မရှိဘဲ ကင်မရာ၊ sky ပုံ၊ fog နှင့် အလင်းရောင် ရောစပ်ခြင်း ရွေးချယ်စရာများ | {{ui:High quality}} တွင် {{ui:Render a picture…}} သည် ထိုနေရာတွင် WebGL path tracer ကို သုံးပြီး ထိုရွေးချယ်စရာများ မပါဘဲ လုပ်သည် ([ပုံ render လုပ်ခြင်း](topic:render#high-quality)) |
| Render-engine add-on မရှိဘဲ အခြား program က Render picture ကို ဆွဲခြင်း (CadCraft သည် GNU GPL လိုင်စင်ရှိ program ကို ဘယ်တော့မှ မrun ပါ)၊ အခြား program မှ panorama သို့မဟုတ် stereo ကင်မရာများနှင့် sky ပုံ၊ Unreal Engine plug-in (ဖိုင်များ ရေးပြီးသော်လည်း ဖွင့်သော plug-in ကို မထုတ်ပြန်ရသေး) | ကိုယ်ပိုင် Fast နှင့် Path tracer engine များ; add-on ၏ engine ([အခြား program ဖြင့် ပုံဆွဲခြင်း](topic:render-other-program)); Engine စာရင်းမှ USD၊ glTF သို့မဟုတ် Unreal folder ဖိုင် တစ်ခုကို program မည်သည့်တစ်ခုသို့မဆို သယ်ယူရန် |
| {{ui:Render a picture…}} တွင် ကျဲထားသော အပင်များနှင့် ကျောက်များ | [Live view](topic:live-view) ၊ ၎င်း၏ panorama များ၊ viewer နှင့် ဗီဒီယိုတွင် ပေါ်သည် |

## Materials နှင့် အရောင်များ

| မလုပ်ရသေးသော အရာ | ယနေ့ အစားထိုး နည်း |
|---|---|
| အခြေခံအရောင်၊ roughness၊ metalness၊ opacity၊ normal နှင့် emission မှလွဲ၍ အခြား input များသည် အရည်အသွေးမြင့် ပုံများတွင် မျက်နှာပြင်တစ်လျှောက် ပြောင်းလဲခြင်း (ပျမ်းမျှကို သုံးသည်) | [Node များဖြင့် materials ဖန်တီးခြင်း](topic:shading): ဘယ်လိုပင် ချိတ်ပါ၊ view တွင် ပြောင်းလဲသည်ကို ပြသည် |
| Push/pull မျက်နှာများပေါ်ရှိ displacement | Displacement အတွက် object ကို mesh အဖြစ် ပြောင်းပါ |
| App မှ သင့်ကိုယ်ပိုင် materials ကို Library သို့ မျှဝေခြင်း၊ သို့မဟုတ် import လုပ်ထားသော texture set တွင် packed (ARM/ORM) သို့မဟုတ် EXR map များ | ဖိုင်တွင် ထားပါ; သီးခြား map များကို PNG သို့မဟုတ် JPEG အဖြစ် import လုပ်ပါ |
| Live TeamWork session များရှိ ဖိုင်၏ materials (ထုတ်လုပ်ခဲ့သော ကွန်ပျူတာတွင်သာ ရှိနေသည်) | ဖိုင်ကို သိမ်းပြီး မျှဝေပါ |
| Decal များ ကွေးသော မျက်နှာပြင်ပတ်လည် ကွေးခြင်း၊ Undo ထဲရှိ decal များ၊ သို့မဟုတ် seam တစ်လျှောက် မျက်နှာများစွာ၏ texture များကို တစ်ပြိုင်နက် ဆေးခြင်း | Decal သေးသေးများကို အပိုင်းတိုင်းပေါ် ထားပါ; seam ၏ တစ်ဘက်တစ်ခုစီကို သီးခြား ဆေးပါ |
| မျက်နှာပြင်များပေါ် ဖုတ်ခြင်း (push/pull မျက်နှာများ)၊ အရာများစွာကို ပုံတစ်ခုတည်းသို့ ဖုတ်ခြင်း၊ လက်ဖြင့် ပုံသွင်းသော cage၊ သို့မဟုတ် မီးအလင်းမှ ဖုတ်ထားသော အလင်း | Mesh သို့ ပြောင်းပြီး unwrap လုပ်ပါ; အရာတစ်ခုစီကို ဖုတ်ပါ; ရှာဖွေမှု အကွာအဝေးကို မြှင့်ပါ; မီးအလင်းအတွက် ပုံ render လုပ်ပါ |
| Roughness၊ metalness သို့မဟုတ် height ဆေးခြင်း၊ ပုံများဖြင့် ဆေးခြင်း (stamps) နှင့် 512 × 512 ထက်ကြီးသော texture ဆေးခြင်း | အခြေခံအရောင်ကို ဤနေရာတွင် ဆေးပါ; အခြား map များကို ပုံ editor တွင် ပြုလုပ်ပြီး texture set အဖြစ် import လုပ်ပါ |
| Collada၊ STL၊ PLY၊ 3MF၊ IFC၊ DWG နှင့် DXF export များရှိ texture များ၊ ထုတ်ထားသော model များရှိ ဖိုင်၏ ကိုယ်ပိုင် materials ၏ node graph များ | ထို format များသည် material တစ်ခုစီ၏ အရောင်ကို ရရှိသည်; glTF နှင့် OBJ သည် import လုပ်ထားသော texture များကို သယ်ဆောင်သည်; material တစ်ခုတည်းကို [MaterialX](topic:shading#materialx) အဖြစ် ထုတ်ပါ; [USD](topic:usd) သည် ModelCraft အတွက် model အပြည့်အစုံကို ထားသည် |
| Collada ဖိုင်များရှိ texture များ | Import လုပ်သောအခါ ရေတွက်ပြီး ချန်ထားသည်; `.skp` နှင့် `.glb` ဖိုင်များရှိ texture များ ဝင်လာသည် |

## ဖိုင်များ

| မလုပ်ရသေးသော အရာ | ယနေ့ အစားထိုး နည်း |
|---|---|
| SketchUp ဖိုင်များကို သိမ်းခြင်း၊ နှင့် ၎င်းမှ စာသားနှင့် dimension များ | [Import](topic:import-sketchup-files) သည် မျက်နှာများ၊ အရောင်များနှင့် texture များကို ထိန်းသည်; SketchUp သို့ ပြန်သွားရန် Collada (`.dae`) ထုတ်ပါ |
| DWG နှင့် DXF export များရှိ dimension များနှင့် လမ်းညွှန်များ | Export ပြီးနောက် CAD program တွင် ထည့်ပါ |
| DWG နှင့် DXF မှ အမှတ်များ၊ ဇယားများနှင့် multileader များ | ရေတွက်ပြီး ချန်ထားသည်; စာသားသည် ပုံ၏ font မဟုတ်ဘဲ တစ်စင်းတည်း စာလုံးပုံစံ အဖြစ် ဝင်လာသည် |
| DWG နှင့် DXF မှ မျက်နှာပြင်များ၊ mesh များ၊ ဇယားများနှင့် multileader များ; swept၊ lofted သို့မဟုတ် အခြား freeform မျက်နှာပြင်များပေါ်ရှိ 3D solid မျက်နှာများ | ၎င်းတို့လည်း ရေတွက်ပြီး ချန်ထားသည် (3D solid များကိုယ်တိုင် ဝင်လာသည်)။ ထိုအပိုင်းများကို CAD program မှ OBJ သို့မဟုတ် Collada အဖြစ် ထုတ်ပြီး ထို့ကို import လုပ်ပါ |
| IFC type များ၊ property များ သို့မဟုတ် materials | IFC export တွင် [storeys](topic:formats#ifc-ifc) နှင့် generic element များ ရှိသည်; ကျန်သည်များကို BIM program တွင် ထည့်ပါ |
| Model ကို BimCraft သို့ တိုက်ရိုက် ပို့ခြင်း | {{ui:IFC for BimCraft (.ifc)}} ကို ထုတ်ပြီး BimCraft တွင် ဖွင့်ပါ |
| glTF နှင့် STL ရှိ ချိတ်မထားသော အစွန်းများ | မျဉ်းဆွဲ လုပ်ငန်းအတွက် OBJ သို့မဟုတ် Collada သုံးပါ |
| အခြေခံအရောင်ထက် ပိုသော glTF နှင့် FBX materials (metal၊ roughness၊ normal map များ၊ ဖန်၊ clear coat၊ sheen…) | ၎င်းတို့ကို ဖတ်ပြီး စာရင်းပြုစုသည်; ModelCraft သည် အခြေခံအရောင် သို့မဟုတ် texture ကို ထိန်းသည်။ [Shading workspace](topic:shading) တွင် look ကို ပြန်တည်ဆောက်ပါ |
| glTF bone များ၊ animation များနှင့် morph target များ | Skinned model များသည် rest အနေအထားဖြင့် ဝင်လာသည်; [timeline](topic:animation) တွင် animate လုပ်ပါ |
| STEP ဖိုင်များမှ အရောင်များနှင့် assembly ၏ အပိုင်းအမည်များ | အပိုင်းများသည် တိကျသော အရွယ်အစားဖြင့် mesh အဖြစ် ဝင်လာသည်; import ပြီးနောက် [ဆေးခြင်း](topic:paint) နှင့် အမည်ပေးပါ |
| `.3dm` ဖိုင်များမှ SubD object များ၊ စာသား၊ dimension များနှင့် မီးများ | [ဘာကို ချန်ထားသလဲ](topic:import-3dm-files#what-is-left-out-and-said) ကို ကြည့်ပါ; SubD ကို ဖိုင်ကို ဖန်တီးခဲ့သော program တွင် mesh အဖြစ် ပြောင်းပါ |
| glTF ရှိ KTX2 texture များနှင့် material variant များ | PNG သို့မဟုတ် JPEG texture ဖြင့် export လုပ်ပါ; default variant ကို သုံးသည် |
| glTF instancing (EXT_mesh_gpu_instancing) ရေးခြင်း | Component များကို တစ်ကြိမ်ရေးပြီး အကြိမ်များစွာ နေရာချသည်၊ ၎င်းကို viewer အားလုံး ဖတ်နိုင်သည် |
| Alembic animation (cache ၏ sample အားလုံး)၊ Alembic အမှတ်များနှင့် curve များ၊ Alembic ရေးခြင်း | ပထမ sample ဝင်လာသည်; [timeline](topic:animation) တွင် animate လုပ်ပါ; glTF၊ USD သို့မဟုတ် OBJ ရေးပါ |
| OBJ materials ရှိ bump နှင့် normal map များ | အရောင်ပုံ (`map_Kd`) သာ ဝင်လာသည် |
| FBX bone များနှင့် animation၊ FBX export၊ FBX 6 ဖိုင်များ | Skinned model များသည် rest အနေအထားဖြင့် ဝင်လာသည်; glTF ထုတ်ပါ; ဟောင်းဖိုင်များကို FBX 2011 သို့မဟုတ် အသစ်ဖြင့် သိမ်းပါ |
| Collada skin များ၊ morph များ၊ ကင်မရာများ၊ မီးများ၊ look-at နှင့် skew transform များ၊ external reference များ | Import တွင် ချန်ထားပြီး မက်ဆေ့ချ်တွင် ရေတွက်သည် |
| Backup ဖိုင်များ | {{ui:Save as}} ({{key:Mod+Shift+S}}) သည် မိတ္တူတစ်ခု ထပ်သိမ်းသည်။ ပျက်ကျသွားပြီးနောက် ModelCraft က မသိမ်းရသေးသော အလုပ်ကို ပြန်ပေးရန် ကမ်းလှမ်းသည် ("Recover your work?") |
| Cloud သိမ်းခြင်းနှင့် ကွန်ပျူတာများကြား sync | ယခု မရရှိနိုင်သေးပါ။ ဖိုင်များကို ကွန်ပျူတာတွင် သိမ်းပြီး လိုအပ်ရာသို့ ကူးပါ |

## 3D ပုံနှိပ်ခြင်း

| မလုပ်ရသေးသော အရာ | ယနေ့ အစားထိုး နည်း |
|---|---|
| အမှန်တကယ် slicer ထောက်ခံချက်များ (interface၊ raft၊ တိကျသော support pattern) | [Supports preview](topic:print-tools#supports-preview) က အဲဒီနေရာနှင့် ခန့်မှန်းပမာဏကို ပြသည်; slicer ၏ preview က အမှန်ကို ပြသည် |
| ကိုယ်ဖြင့် ဖြတ်ကျော်သော အပိုင်းကို ဖြေခြင်း၊ သို့မဟုတ် မျက်နှာသုံးခု သို့မဟုတ် ထို့ထက်ပိုသော မျက်နှာများ ထိပ်တွေ့သော အစွန်းများ | [Repair](topic:print-tools#repair) က နေရာနှင့်အတူ စာရင်းပြုစုသည်; [မျက်နှာများကို ဖြတ်ခြင်း](topic:intersect) ကို သုံးပြီး အတွင်းပိုင်းကို ဖျက်ပါ |
| Hollow အတွင်းရှိ infill pattern နှင့် lattice | [Hollow](topic:print-tools#hollow) က ဗလာ ထားသည်; slicer က solid အပိုင်းတွင် infill ထည့်သည် |
| နozzle အတွက် သေးလွန်းသော အသေးစိတ်များ (နံရံမှလွဲ၍) | [Wall thickness](topic:print-tools#wall-thickness) က ပါးသော နံရံများကို ရှာသည်; slicer ၏ layer preview က ကျန်သည်ကို ပြသည် |

## စွမ်းဆောင်ရည်

Undo သည် အဆင့်တစ်ခုစီအတွက် model ၏ မိတ္တူကို သိမ်းထားသည် ([mesh](topic:meshes) သည် ပြောင်းလဲခဲ့သည်ကိုသာ သိမ်းသည်)၊ ထို့ကြောင့် push/pull ဂျီဩမေတြီ၏ အလွန်ကြီးမားသော import များသည် တည်းဖြတ်မှုတိုင်းကို နှေးစေသည်။ Import များကို ပေါ့ပါးအောင် ထားပါ၊ ပြီးလျှင် သိမ်း၍ ပြန်ဖွင့်ခြင်းဖြင့် history ကို ရှင်းပါ။

## Apps နှင့် platform များ

- **Desktop:** ModelCraft သည် Mac၊ Windows နှင့် Linux တွင် browser ဖြင့် လည်ပတ်သည်၊ နှင့် install တစ်ခုတည်းတွင် app ရှစ်ခုလုံးပါသော desktop app CadCraft Studio တွင်လည်း လည်ပတ်သည်။ Android တွင် CadCraft Studio ကို getcadcraft.com/download မှ APK ဖြင့် install လုပ်သည်။ iPad သို့မဟုတ် iPhone build မရှိသေးပါ။
- **Touch:** လက်ချောင်းဖြင့် gesture များအတွက် [Orbit, pan နှင့် zoom](topic:orbit-pan-zoom) ကို ကြည့်ပါ။ ဘောလ်ပန်၏ ဖိအားက [Sculpt](topic:sculpt) တွင် brush ကို သတ်မှတ်သည်; အခြားနေရာတွင် ဖိအားနှင့် pen tilt ကို မသုံးပါ။
- **စာရွက်များ:** ModelCraft သည် view တစ်ခုကို စာမျက်နှာတစ်ခုတွင် [ပုံနှိပ်သည်](topic:export-model#print-the-view-or-save-it-as-a-pdf); view များစွာနှင့် title block ပါသော စာရွက် layout မရှိပါ။ အတိုင်းအတာကျသော ပုံဆွဲများအတွက် CadCraft-friendly DWG/DXF သို့ ထုတ်ပါ။
