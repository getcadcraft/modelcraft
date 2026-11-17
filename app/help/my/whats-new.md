---
title: 0.9 တွင် အသစ်ဖြစ်သည်
summary: ကိုယ်ပိုင် slicer နှင့် USB၊ Klipper၊ OctoPrint နှင့် PrusaLink သို့ ပို့ခြင်းပါသော print အဆင့်၊ resin slicing နှင့် ဖိုင် add-ons၊ material flow၊ digital twin နှင့် factory floor add-ons၊ NURBS fillets၊ thickening နှင့် scan fitting၊ AR on site နှင့် arc နည်းလမ်း ဆယ်မျိုး။
keywords: whats new, what's new, release notes, changelog, 0.9, print stage, 3d print, printer သို့ ပို့ခြင်း, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resin, resin printing, goo, sl1, ctb, anycubic, exposure test, material flow, digital twin, factory floor, plc, conveyor, nurbs, fillet, thicken, scan fit, ar, on site, arc methods, ယူနစ်များ, ဗားရှင်း မှတ်စု, ပြောင်းလဲမှုမှတ်တမ်, ပြောင်းလဲမှုများ, 0.8, 0.8.1, ဗားရှင်း, အသစ်အင်္ဂါရပ်များ, render engine, engine, open in, usd, gltf, unreal, add-on engine, nurbs, မျက်နှာပြင်များ, loft, sweep, continuity, g0, g1, g2, zebra, step, iges, scene ပြော, scene, weather, time of day, season, assistant, material from a photo, photo, sketch photo, furnish, furnish a room, slant, slanted cut, split, print check, problems, property grid, lamps, languages, input devices, toolbar rows, dwg, live
from: 169048a2
---

ဤသည်မှာ ModelCraft 0.9 တွင် 0.8.1 နှင့် နှိုင်းယှဉ်၍ ပြောင်းလဲသွားခဲ့သည်များ ဖြစ်သည်။ ModelCraft သည် ယခု printer နှင့် စက်ရုံကြမ်းပြင်သို့ ရောက်ပြီ: print bed ပေါ်တွင် အရာများ ထားနိုင်ပြီး export မလုပ်ဘဲ ပို့နိုင်သည်၊ filament သို့မဟုတ် resin အတွက် slice လုပ်နိုင်သည်၊ နှင့် ပစ္စည်းကိုင်တွယ်ရေး လိုင်းတစ်ခု ပြင်ဆင်နိုင်သည်။ ဤသည်မှာ CadCraft Studio 0.9 နှင့် ၎င်း၏ apps ရှစ်ခု ဖြစ်ပြီး အောက်ပါ အင်္ဂါရပ်အသစ်အများစုမှာ add-ons များ ဖြစ်သည်။

## အသစ်

### 3D printing

- **Print အဆင့်။** toolbar ရှိ {{ui:Print stage}} ကို click လုပ်ပါ။ Library ပစ္စည်းများကို printer ၏ bed သို့ ထည့်ပါ၊ စီစဉ်ပါ၊ sliced layers များကို ကြည့်ပြီး {{ui:Send to 3D printer}} ကို နှိပ်ပါ၊ STL ဖိုင်ကို export မလုပ်ဘဲ။ ၎င်းသည် 3D Print add-on အတွက်ဖြစ်ပြီး ပုံမှန်ဖွင့်ထားသည်၊ add-on အခြားတစ်ခုလို ဖယ်ရှားနိုင်သည်။ ကြည့်ရန် [print bed ပေါ် အရာများထားပြီး printer သို့ ပို့ခြင်း](topic:print-stage)။
- **ကိုယ်ပိုင် filament slicer။** {{ui:CadCraft basic (included, fastest)}} သည် ကတ်၏ **Slicer** စာရင်းရှိ slicer ဖြစ်ပြီး နံရံများ၊ အပေါ်ဖုံးများ၊ infill၊ supports နှင့် skirt ပါဝင်သည်၊ စာမျက်နှာ အသုံးပြုနိုင်ရန် worker ပေါ်တွင် run သည်။ {{ui:Preview layers}} ကို **Layer** slider ဖြင့် ပို့မီ layers များကို ကြည့်နိုင်သည်။ Ender-3 နှင့် Prusa MK4 ပုံစံ printer profiles များသည် ၎င်းတို့၏ ကိုယ်ပိုင် start G-code ပါဝင်သည်။
- **ပို့ခြင်း။** USB မှတစ်ဆင့် (ကွန်ပျူတာပေါ် Chrome သို့မဟုတ် Edge၊ စာမျက်နှာ ဖွင့်ထားရန်)၊ သို့မဟုတ် သင့်ကွန်ရက်ပေါ်ရှိ Klipper (Moonraker)၊ OctoPrint သို့မဟုတ် PrusaLink သို့။ click မရှိဘဲ ဘာမျှ ချိတ်ဆက်ခြင်း သို့မဟုတ် ပို့ခြင်း မရှိပါ၊ ပို့ခြင်းသည် အရင် မေးသည်။
- **အခြား slicers။** Kiri:Moto၊ PrusaSlicer နှင့် OrcaSlicer တို့သည် ကိုယ်ပိုင် add-ons များဖြစ်ပြီး ပုံမှန်ပိတ်ထားသည်; ကတ်မှ သို့မဟုတ် {{ui:ထပ်ဆောင်းများ}} ဆက်တင်များမှ ထည့်ပါ။ PrusaSlicer နှင့် OrcaSlicer သည် CadCraft Studio မှ သင့်ကိုယ်ပိုင် ထည့်သွင်းထားသော မိတ္တူကို သုံးသည်။ Bambu Lab printers add-on သည် သင့် OrcaSlicer နှင့် ၎င်း၏ P2S presets ဖြင့် slice လုပ်ပြီး ကွန်ပျူတာပေါ်ရှိ Studio လိုအပ်သည်။
- **Resin printing။** resin add-ons (ပုံမှန်ပိတ်ထား) သည် သင့် printer ၏ မျက်နှာပြင်အတွက် layer ပုံများ ပြုလုပ်သည်၊ hollowing နှင့် vent holes၊ raft နှင့် supports၊ layer preview နှင့် အချိန်၊ resin နှင့် ကုန်ကျစရိတ်။ ဖိုင်-ပုံစံ add-ons များက Elegoo GOO၊ SL1၊ Chitubox (CBDDLP နှင့် CTB 2 မှ 5) နှင့် Anycubic (PWMX နှင့် PWS) ကို ရေးသည်။ resin exposure test သည် exposures ငါးခုအတွက် ladder တစ်ခု ပြုလုပ်သည်။ ကြည့်ရန် [resin printer အတွက် slice လုပ်ခြင်း](topic:resin-printing)။
- **မပြောင်းလဲသေးသည်။** {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}၊ print tools နှင့် Split for printing တို့သည် 0.8 ကဲ့သို့ အလုပ်လုပ်သည်။ ကြည့်ရန် [3D ပုံနှိပ်ရန် မော်ဒယ်ကို ပြင်ဆင်ခြင်း](topic:print-3d)။

### Material flow၊ Digital twin နှင့် Factory floor

ဤသုံးခုသည် add-ons ဖြစ်ပြီး {{ui:ဆက်တင်များ}} › {{ui:ထပ်ဆောင်းများ}} တွင် ဖွင့်မချင်း ပိတ်ထားသည်၊ ဖွင့်ပြီးနောက် တစ်ခုစီတွင် ကိုယ်ပိုင် help ရှိသည်။

- **Material flow။** Material flow အမည်ရှိ panel သည် 3D မြင်ကွင်းတွင် conveyors၊ stations၊ buffers နှင့် AGV လမ်းကြောင်းများ ပြင်ဆင်သည်၊ seeded simulation ကို run သည်၊ ပြန်ဖွင့်ပြီး throughput၊ lead times နှင့် queues ကို ပြသည်၊ ရလဒ်များကို CSV အဖြစ် သိမ်းသည်။ မှာယူမှုများကို CSV ဖိုင်မှ ယူနိုင်သည်။ Robot cells များကို စစ်ဆေးပြီး export လုပ်နိုင်သည်။ PLC link တွင် soft mode နှင့် Modbus TCP အပေါ် real mode ရှိသည်၊ CadCraft Studio တွင်သာ အလုပ်လုပ်သည်။
- **Digital twin။** Material flow ပြင်ဆင်ချက်ကို ဖတ်ပြီး ၎င်းပေါ်တွင် soft PLC ကို run သည်၊ ဖယ်ကြဉ်နိုင်သော faults၊ stock tests၊ layout နှိုင်းယှဉ်ချက်နှင့် bill of materials ပါသည်။
- **Factory floor။** stations များကို စက်များနှင့် cells များအဖြစ် ပြောင်းပြီး ၎င်းတို့ကို တိုက်ရိုက် သို့မဟုတ် simulator မှ ဖတ်သည်၊ job queue နှင့် ရိုးရှင်းသော OEE ကို ထိန်းသည်။ ဖတ်ခြင်းသာ လုပ်သည်: ဤ build သည် စက် သို့မဟုတ် PLC သို့ ရေးနိုင်ခြင်း မရှိပါ။

### မျက်နှာပြင်များ၊ မော်ဒယ်များနှင့် ပုံဆွဲခြင်း

- **NURBS ပေါ်ရှိ fillets၊ thickening နှင့် booleans။** {{ui:Surfaces}} panel တွင် {{ui:Fillet between faces}}၊ {{ui:Fillet several edges}}၊ {{ui:Thicken into a solid}} နှင့် Union၊ Subtract နှင့် Intersect ရှိပြီး တစ်ခုစီတွင် တိုင်းတာထားသော သွေဖည်မှု ပါသည်။ ကြည့်ရန် [လွတ်လပ်သော ပုံသဏ္ဍာန် မျက်နှာပြင်များ (NURBS)](topic:nurbs-surfaces)။
- **မျက်နှာပြင်များကို scan သို့ ကိုက်ညီစေခြင်း။** scan လုပ်ထားသော mesh ကို ရွေး၍ **Scan** အုပ်စုရှိ {{ui:Fit surfaces to the scan}} ကို သုံးပြီး ထို့နောက် {{ui:Stitch the surfaces to a solid}}။ ၎င်းသည် ပထမဆုံး ကိုက်ညီမှုဖြစ်ပြီး reverse-engineering package အပြည့်အစုံ မဟုတ်ပါ။
- **.3dm modeller မှ live link။** တစ်ဖက်သတ်၊ Rhino 8 သို့မဟုတ် Grasshopper မှ၊ ကွန်ပျူတာတစ်ခုတည်းပေါ်ရှိ CadCraft Studio လိုအပ်သည်။ ကြည့်ရန် [.3dm မော်ဒယ်ကို live ထားခြင်း](topic:live-3dm-link)။
- **မော်ဒယ်ကို site ပေါ်တွင် ကြည့်ခြင်း။** {{ui:Views}} menu ရှိ {{ui:View on site (AR, phone)}} သည် Chrome ပါသော Android ဖုန်းတွင် အလုပ်လုပ်သည်။ ကြည့်ရန် [Android ဖုန်းဖြင့် မော်ဒယ်ကို site ပေါ်တွင် ကြည့်ခြင်း (AR)](topic:ar-on-site)။
- **Arc နည်းလမ်းများ။** {{ui:Arc methods}} drop-down တွင် arc ဆွဲရန် နည်းလမ်း ဆယ်မျိုး ရှိပြီး {{ui:3-Point}} နှင့် {{ui:Start, Center, End}} ပါဝင်သည်။
- **ယူနစ်ပိုများ။** အလေးချိန် (kg၊ lb၊ t၊ ton) နှင့် အပူချိန် (degrees C၊ F၊ K နှင့် R) ကို ယူနစ်ဖြင့် တန်ဖိုးများ ရိုက်ထည့်သည့်နေရာတွင် နားလည်သည်။

## အက်ပ်အားလုံးတွင်

- **Tooltips။** ခလုတ်များပေါ်ရှိ hover စာသားနှင့် ဖြတ်ထားသော label များသည် Bootstrap tooltip ဖြစ်သည်။
- **ပိတ်နိုင်သော စတင် အကြံပြုချက်။** ဗလာ ပုံဆွဲနေရာပေါ်ရှိ အကြံပြုချက် ကတ်တွင် အသေးစား x ပိတ်ခလုတ် ရှိသည်။ ၎င်း ပိတ်ထားသည်ဆိုလျှင် ပိတ်ထားနေမည်၊ command palette က ပြန်ပြနိုင်သည်။
- **Scroll လုပ်နိုင်သော tab အစုများ။** panel ၏ tab အစုသည် မကိုက်ညီပါက ဖြတ်ခံရမည့်အစား scroll လုပ်သည်။
- **Tab ခေါင်းစဉ်များ။** စာရွက်စာတမ်းဖွင့်ထားချိန်တွင် browser tab သည် စာရွက်စာတမ်းအမည်ဖြင့် စတင်ပြီး၊ ထို့နောက် ModelCraft နှင့် CadCraft။ မသိမ်းရသေးပါက အစက်တစ်ခု ရှေ့ဆုံးတွင် ပေါ်သည်။
- **အပြင်အဆင်။** {{ui:ဆက်တင်များ}} › {{ui:အထွေထွေ}} › Layout တွင် drop-down ဖြင့် အပြင်အဆင်များ ရှိပြီး ထို app တစ်ခုတည်းအတွက် အပြင်အဆင် သုံးရန် ရွေးချယ်မှုနှင့် အပြင်အဆင် ပြန်သတ်မှတ်ရန် ခလုတ် ပါဝင်သည်။
- **ဘာသာစကားများ။** Settings ရှိ ဘာသာစကား စာရင်းသည် build တွင်ပါသော ဘာသာစကား ဖိုင်များကို လိုက်သည်။ အင်္ဂလိပ်မှ အခြားဘာသာစကားများသည် စက်ဖြင့် ပြုလုပ်ထားသော မူကြမ်းများ ဖြစ်သည်။
- **Live နှင့် Library။** Live TeamWork သည် live cursors နှင့် နာမည်များ ပြသည်၊ Library collections သည် app တိုင်းကို မူလ collection ပေးသည်။

## ပြင်ဆင်ပြီး

- {{ui:ဖွင့်ရန်}} သည် ဝင်းဒိုးမှ animation ဖွင့်နေချိန်တွင် {{ui:ရပ်ရန်}} သို့ ပြောင်းသည်၊ ၊ timeline ဖွင့်ထားချိန်တွင် {{key:Space}} က ဖွင့်/ရပ် လုပ်သည်။
- graphics card က path tracer ကို မစတင်နိုင်သောအခါ still render သည် WebGL သို့ ပြန်ကျသည်။ live render view သည် အမှားကို ပြနေနိုင်ဆဲ ဖြစ်ပြီး ထို driver ပါသော Windows စက်တွင် မစစ်ဆေးရသေးပါ။
- Material flow real mode သည် PLC exception အဖြေများပေါ် link ပြတ်ပြီးနောက် ပြန်ချိတ်ဆက်သည်။

## ရိုးရိုးသားသား ကန့်သတ်ချက်များ

- printer တစ်ခုပေါ်တွင် ဘာမျှ မပုံနှိပ်ရသေးပါ: filament မဟုတ်၊ resin မဟုတ်၊ Bambu Connect မှတစ်ဆင့်လည်း မဟုတ်။ Resin ဖိုင်များကို CadCraft ၏ ကိုယ်ပိုင် reader များဖြင့်သာ ပြန်ဖတ်ခဲ့သည်။
- digital twin နှင့် Factory floor ကို simulators နှင့် သိထားသော အဖြေများဖြင့်သာ စမ်းသပ်ခဲ့ပြီး အမှန်တကယ် PLC၊ လိုင်း သို့မဟုတ် protocol မရှိပါ။ ၎င်းတို့သည် စစ်ဆေးရေး ကိရိယာများ ဖြစ်ပြီး ဘေးကင်းရေး အတည်ပြုချက် မဟုတ်ပါ။ Physics က boxes များကိုသာ ဖုံးလွှမ်းပြီး load ၈ ခုအထိ။
- Rhino နှင့် Grasshopper link ကို အမှန်တကယ် program များတွင် ဘယ်တော့မျှ မ run ခဲ့ပါ။
- အင်္ဂလိပ်မှ အခြားဘာသာစကားများသည် စက်ဖြင့် ပြုလုပ်ထားသော မူကြမ်းများ ဖြစ်သည်။

## ယခင်: 0.8 နှင့် 0.8.1

ဤသည်မှာ ModelCraft 0.8 (2026-11-01) နှင့် 0.8.1 (2026-11-02) တွင် 0.7 နှင့် နှိုင်းယှဉ်၍ ပြောင်းလဲသွားခဲ့သည်များ ဖြစ်သည်။ {{ui:ပုံရိပ် ထုတ်ရန်…}} dialog သည် ယခု scene ကို အခြား program သို့ ပို့နိုင်ပြီး၊ Surfaces panel သည် ချောမွေ့သော freeform မျက်နှာပြင်များ ပြုလုပ်ပြီး၊ သင် ချိတ်ဆက်ထားသော အကူအညီပေးသူက scene တစ်ခုလုံးကို စာကြောင်းတစ်ခုဖြင့် သတ်မှတ်နိုင်သည်။

### အသစ်

**ရေးဆွဲခြင်း**

- **Engine ရွေးချယ်မှု။** {{ui:ပုံရိပ် ထုတ်ရန်…}} တွင် Mode အပေါ်ရှိ **Engine** စာရင်း ရှိသည်။ ကိုယ်ပိုင် engines နှစ်ခုဖြစ်သော Fast နှင့် Path tracer သည် မူလဖြစ်ပြီး အရာရာတွင် အလုပ်လုပ်သည်။ အခြားရွေးချယ်မှုများက scene ကို package အဖြစ် သိမ်းသည် (မော်ဒယ်ကို USD ဖိုင်အဖြစ်၊ အတိအကျ ပစ္စည်းတန်ဖိုးများ၊ ဖွင့်ထားသော မီးများ၊ နေ၊ ကောင်းကင်၊ exposure နှင့် ကင်မရာ ပါဝင်သော settings ဖိုင်) အခြား program သို့ ယူသွားရန်။ အခြား program ဆွဲသော ပုံသည် မည်သည့် program နှင့် ဗားရှင်း ဖြင့် ပြုလုပ်ခဲ့သည်ကို ပြောသည်။ ကြည့်ရန် [ပုံကို ဆွဲသော engine ကို ရွေးချယ်ခြင်း](topic:render-engines)။
- **အခြား program ဖြင့် ဖွင့်ခြင်း။** Engine စာရင်းသည် scene ကို USD ဖိုင်၊ glTF ဖိုင် (`.glb`) သို့မဟုတ် Unreal project folder (`.zip`) အဖြစ် သိမ်းနိုင်သည်၊ browser နှင့် CadCraft Studio တွင်။ Studio တွင် ဖိုင်အတွက် usdview သို့မဟုတ် ကွန်ပျူတာ၏ ကိုယ်ပိုင် program ကို စတင်နိုင်သည်။ ကြည့်ရန် [scene ကို အခြား program တွင် ဖွင့်ခြင်း](topic:render-open-in)။
- **Studio မှ game engine သို့ ပို့ခြင်း။** Studio သည် scene ကို Unreal Engine project အဖြစ် ရေးပြီး ပို့တိုင်း ထိုအတိုင်း ထိန်းသည်၊ တစ်လမ်းသွားသာ။ သင့်ကိုယ်ပိုင် တည်းဖြတ်မှုများသည် CadCraft ဘယ်တော့မျှ မရေးသော layer တွင် ရှိသည်။ ကြည့်ရန် [scene ကို game engine သို့ ပို့ခြင်း](topic:render-unreal)။
- **Add-ons မှ engines။** add-on တစ်ခုက engine ကို စာရင်းတွင် ထည့်နိုင်သည်။ JavaScript ဖြင့်ရေးထားသည်မှာ browser နှင့် Studio တွင် ဆွဲသည်; program run သော engine တစ်ခုသည် Studio တွင် သင့်ခွင့်ပြုချက် လိုအပ်သည်။ ကြည့်ရန် [အခြား program ဖြင့် ပုံဆွဲခြင်း](topic:render-other-program) နှင့် [add-on ဖြင့် render engine ထည့်ခြင်း](topic:render-engine-addons)။
- **Scene ကို ပြောခြင်း။** ချိတ်ဆက်ထားသော အကူအညီပေးသူကို "dusk၊ light rain၊ autumn trees၊ people on the plaza" ဟု ပြောပါ၊ ModelCraft က တစ်ဆင့်တည်းဖြင့် ပြင်ဆင်ပေးသည်: နေသည် ရက်စွဲနှင့် အချိန်သို့ ရွှေ့သဖြင့် အရိပ်များ လိုက်သည်၊ ကောင်းကင် ပြောင်းသည်၊ စိုသော မျက်နှာပြင်များ ပေါ်လာသည်၊ သစ်ပင်များနှင့် လူများကို ဖျောက်/ရွှေ့/ဖျက်နိုင်သော tags ပါ အစစ်အမှန် အရာများအဖြစ် ထားသည်။ နေ့ရက်အချိန်၊ ရက်စွဲ သို့မဟုတ် ရာသီ၊ နှင့် ရာသီဥတု (ရှင်းလင်း၊ တိမ်ဖုံး၊ မှိုင်း၊ ပေါ့ပါး သောမိုး၊ မိုးရွာ၊ မုန်တိုင်း) လည်း သီးခြား အလုပ်လုပ်သည်၊ နောက်ပိုင်း တောင်းဆိုချက်က scene တူတူကို ပြောင်းသည်။ မှိုင်းသည် graphics card ပေါ်ရှိ အရည်အသွေးမြင့် ပုံတွင် ပေါ်သည်; အခြား engines များက ကောင်းကင်၊ အလင်းနှင့် စိုသော မျက်နှာပြင်များကို ပြသည်။ မိုးကို ကျသော မျဉ်းများအဖြစ် မဆွဲပါ။

**ပစ္စည်းများ**

- **ဓာတ်ပုံတစ်ပုံမှ ပစ္စည်း။** မျက်နှာပြင် (နံရံ၊ ကြမ်းပြင်၊ ကျောက်) ဓာတ်ပုံတစ်ပုံ ပေးလျှင် ModelCraft က tiling ပစ္စည်းတစ်ခု ပြုလုပ်သည်: ဓာတ်ပုံပေါ်ရှိ အလင်းကို ညီညာစေပြီး အစွန်းများကို ပေါင်းစေသည်၊ color map၊ roughness map နှင့် normal map ကို ပုံမှ ထုတ်သည်။ ၎င်းသည် trained model မပါဘဲ သင့်ကိုယ်ပိုင်ပုံပေါ်တွင် ရိုးရှင်းသော ပုံ processing ဖြစ်သည်။ Roughness သည် ခန့်မှန်းချက်ဖြစ်သည်။ ရိုးရှင်း၊ စတုရန်း၊ တည့်တည့် ဓာတ်ပုံက အကောင်းဆုံး tile ပေးသည်; အုတ်ကဲ့သို့ ပြင်းထန်သော ပုံစံက join ရာတွင် ပျော့သော ghost ပြနိုင်သည်။

**မျက်နှာပြင်များ**

- **လွတ်လပ်သော ပုံသဏ္ဍာန် မျက်နှာပြင်များ။** {{ui:Surfaces}} panel သည် NURBS curves နှင့် untrimmed surfaces ပြုလုပ်သည်: အမှတ်များမှတစ်ဆင့် curves၊ loft၊ ruled၊ extrude၊ revolve၊ rails တစ်ခု သို့မဟုတ် နှစ်ခုတစ်လျှောက် sweeps၊ curve ကွန်ရက်မှ မျက်နှာပြင်များ၊ အစွန်းလေးခုမှ patches၊ match နှင့် blend။ မျှဝေသော အစွန်းတိုင်းကို G0၊ G1 သို့မဟုတ် G2 (ကွာဟချက်၊ ထောင့်၊ ကွေးမှု ခုန်ချက်) အဖြစ် တိကျသော မျက်နှာပြင်များပေါ် တိုင်းတာသည်၊ သင်တောင်းသည်ထက် ဆိုးသော အစွန်းသည် **Match** ပြင်ဆင်ချက်ဖြင့် Problems panel တွင် ပေါ်သည်။ Zebra stripes နှင့် curvature အရောင်များကို တိကျသော မျက်နှာပြင်များမှ ဆွဲသည်။ STEP နှင့် IGES ဖိုင်များ ထွက်ပြီး ဝင်သည်။ ကြည့်ရန် [လွတ်လပ်သော ပုံသဏ္ဍာန် မျက်နှာပြင်များ (NURBS)](topic:nurbs-surfaces)။

**Site နှင့် အခန်းများ**

- **လက်ရေးပုံကြမ်းဓာတ်ပုံကို မြေပြင်ပေါ်သို့။** {{ui:File}} › {{ui:Import a sketch photo…}} က လက်ရေးပုံကြမ်း၏ ဖုန်းဓာတ်ပုံကို သင်ပြောသော အတိုင်းအတာဖြင့် မြေပြင်ပေါ်ရှိ အစွန်းများအဖြစ် ပြောင်းသည်: group တစ်ခု၊ ဘောပင်အရောင်တစ်ခုစီအတွက် tag တစ်ခု။ စက္ကူကို ကွန်ပျူတာပေါ်တွင် ရှာပြီး ဖြောင့်စေသည်၊ ဘယ်နေရာသို့မျှ မပို့ပါ။ ကြည့်ရန် [site plan ပေါ် မော်ဒယ်ပြုလုပ်ခြင်း](topic:site-plan)။
- **အခန်း ပရိဘောဂဖြင့် ပြင်ဆင်ခြင်း။** ကြမ်းပြင်တစ်ခုကို ရွေးပြီး {{ui:Organize}} › {{ui:Furnish a room…}} ကို သုံးပါ။ အိပ်ခန်း၊ ဧည့်ခန်း၊ စားပွဲခန်း၊ မီးဖိုချောင်၊ ရေချိုးခန်း သို့မဟုတ် ရုံးခန်း ပရိဘောဂများကို စည်းမျဉ်းများဖြင့် နံရံများအနီး ထားပြီး တံခါးနှင့် ပြတင်းပေါက်များမှ ရှင်းသည်၊ ခြေလှမ်းတစ်ခုတည်းဖြင့် ဖယ်နိုင်သော group တစ်ခုတွင်။ ၎င်းသည် သုံးသပ်ရန် ပုံသေ အပြင်အဆင်ဖြစ်ပြီး ဒီဇိုင်း မဟုတ်ပါ။ ကြည့်ရန် [စတင် စာကြည့်တိုက်](topic:starter)။

**3D printing**

- **ထောင့်ဖြတ်ထားသော အဖြတ်များ။** ပုံနှိပ်ရန် ခွဲခြင်း (Split for printing) သည် ဖြတ်ချက်များကို 60 ဒီဂရီအထိ ထောင့်ဖြတ်နိုင်ပြီး အပိုင်းများအတွက် ကော်ကပ်ရန် နေရာ ပိုရသည်။ Connectors များသည် ဖြတ်ချက်နှင့် ထောင့်မှန် ရပ်သည်။ ကြည့်ရန် [ပုံနှိပ်ရန် မော်ဒယ်ကို ခွဲခြင်း](topic:print-split)။
- **Problems ရှိ print စစ်ဆေးချက်။** 3D print စစ်ဆေးချက်၏ တွေ့ရှိချက်များကို Problems panel တွင် မော်ဒယ်ပေါ်ရှိ အမှတ်အသားများဖြင့် ပြသပြီး Repair က ထိုနေရာမှ ပြင်ပေးသည်။ ကြည့်ရန် [Supports၊ နံရံထူ၊ hollowing နှင့် repair](topic:print-tools)။

**အက်ပ်အားလုံးတွင်**

- **ဘာသာစကားများ။** အကူအညီနှင့် apps များသည် ဘာသာစကား 54 မျိုးဖြင့် ရှိသည်။ ၁၀ ခု အသစ်: Lithuanian၊ Latvian၊ Bosnian၊ Marathi၊ Telugu၊ Albanian၊ Afrikaans၊ Filipino၊ Swahili နှင့် Uzbek။ အင်္ဂလိပ်မှ အခြားဘာသာစကားများသည် ဇာတိစကားပြောသူက မဖတ်ရသေးမချင်း စက်ဖြင့် ပြုလုပ်ထားသော မူကြမ်းများ ဖြစ်ပြီး help topics များ အင်္ဂလိပ်ဖြစ်နေနိုင်သည်။
- **Input devices။** trackpad၊ pen၊ 3D mouse၊ game controller နှင့် MIDI controls တို့သည် apps များကို အားလုံး သို့မဟုတ် တစ်ခုအတွက် ထိန်းနိုင်သည်။
- **Toolbar အတန်းများ။** {{ui:ဆက်တင်များ}} › {{ui:အထွေထွေ}} › Toolbar rows တွင် Wrap (ယခင်အတိုင်း)၊ 2 rows သို့မဟုတ် 1 row ရှိသည်။ မကိုက်ညီသော bar သည် ပုံဆွဲနေရာမှ မယူဘဲ ဘေးသို့ scroll လုပ်သည်။ Wrap သည် မူလ ဖြစ်ဆဲ။
- **Property grid။** ModelCraft ၏ မီးအကွက်များသည် မျှဝေ grid ကို သုံးသည်: ခေါက်နိုင်သော အမျိုးအစားများ၊ label နှင့် တန်ဖိုး column များနှင့် Compact သိပ်သည်းမှု။ `2*450` ကဲ့သို့ ရိုက်ထားသော arithmetic ဆက်အလုပ်လုပ်သည်။
- **Problems။** Problems panel (app bar ရှိ သတိပေးချက်ခလုတ်) ကို apps အားလုံး မျှဝေသည်။ ModelCraft တွင် print စစ်ဆေးချက်နှင့် မျက်နှာပြင် ဆက်တိုက်မှု သတိပေးချက်များ ပါဝင်သည်။
- **Live။** Live TeamWork session သည် ဘယ်သူဘယ်မှာ ရှိသည်ကို ပြသည်။ ကြည့်ရန် [Live TeamWork ဖြင့် အတူ မော်ဒယ်ပြုလုပ်ခြင်း](topic:work-live)။
- **Add-ons။** Add-ons များက အထက်ပါအတိုင်း render engines ထည့်နိုင်သည်။
- **AI ကို ချိတ်ဆက်ခြင်း။** tool contract နှင့် apps ရှစ်ခု၏ စစ်ဆေးချက်များ အောင်မြင်ပြီး tools စုစုပေါင်း 454။ Studio အတွင်း တစ်ချက်နှိပ်ချိတ်ဆက်မှု၊ browser အကူအညီပေးသူများအတွက် hosted connector၊ Studio အတွင်း သင့်ကိုယ်ပိုင် key နှင့် ထုတ်ပြန်ထားသော package တို့ကို ကတိမပေးရသေးပါ။ apps တွင် ကိုယ်ပိုင် AI မပါပါ။ ကြည့်ရန် [AI အကူအညီပေးသူများနှင့် ModelCraft ကို အသုံးပြုခြင်း](topic:use-with-ai-assistants)။

### 0.8.1 တွင် ပြင်ဆင်ပြီး

- **DWG classes အပိုင်း။** DWG ဖိုင်၏ classes အပိုင်းကို မှားသော အမျိုးအစားအဖြစ် ဖတ်ခဲ့ပြီး import လုပ်တွင် ဖိုင်ကို ပျက်စေနိုင်သည်။ ယခု မှန်ကန်စွာ ဖတ်သည်၊ ModelCraft နှင့် DWG ဖတ်သည့် အခြား apps များတွင်။
- **Tablets portrait တွင်။** အလွတ် grid အမြင့်သည် canvas သို့ သွားပြီး sheet layout သည် 760 pixels ကျော်ရှိသည်ဆိုလျှင် စတင်သည်။ ModelCraft ၏ style sheet တွင်လည်း ပြောင်းလဲမှု ရှိသည်။
- **Studio တွင် ဘာသာစကား။** CadCraft Studio နှင့် packed editions များသည် ပြေးနေစဉ် ဘာသာစကား ပြောင်းနိုင်ပြီး၊ ယခင်က အင်္ဂလိပ်သာ ဖြစ်သည်။ ပလက်ဖောင်းအားလုံးတွင် မစမ်းသပ်ရသေးပါ: ဘာသာစကား မပြောင်းပါက ကျွန်ုပ်တို့အား အကြောင်းကြားပါ။

### ဤဗားရှင်းတွင် မရှိသေးသော အရာများ

- **Code-signed မဟုတ်ပါ။** Windows တွင် SmartScreen ပြနိုင်သည်: {{ui:More info}} ကို ရွေးပြီး {{ui:Run anyway}} ကို ရွေးပါ။ Mac တွင် right-click ပြီး {{ui:Open}} ကို ရွေးပါ။ Store builds များ ရပ်ထားပြီး iPad နှင့် iPhone build ကို 0.8.1 အတွက် ပြန်မတည်ဆောက်ရသေးပါ။
- Another program drawing the picture ... အကြောင်း (render-engine add-on မပါဘဲ အခြား program ဖြင့် ပုံဆွဲခြင်း)၊ panorama သို့မဟုတ် stereo ကင်မရာများနှင့် အခြား program မှတစ်ဆင့် ကောင်းကင်ပုံ၊ နှင့် Unreal stage ကို ဖွင့်သော plug-in တို့ ရှိမလာသေးပါ။ ဖိုင်များ ရေးပြီးပြီ; plug-in ကို မထုတ်ပြန်ရသေးပြီး Unreal တွင် မ run ရသေးပါ။
- လွတ်လပ်သော ပုံသဏ္ဍာန် မျက်နှာပြင်များ: G3 နှင့် class A ကို မတိုင်းတာရသေး၊ မဆိုရသေး၊ trimming နှင့် solids နောက်မှ လာမည်။
- အခြား program ဖြင့် ဆွဲသော ပုံများသည် ကျွန်ုပ်တို့ဆွဲသော ပုံနှင့် pixel အတိအကျ မတူပါ: ကင်မရာ၊ နေ၊ မီးများနှင့် exposure သာ ကိုက်ညီသည်။
- Studio ရှိ ဘာသာစကား ပြောင်းခြင်းအတွက် 0.8.1 ပြင်ဆင်ချက်ကို ပလက်ဖောင်းအားလုံးတွင် မစမ်းသပ်ရသေးပါ။

အခြားအရာအားလုံးကို [မတည်ဆောက်ရသေးသော အရာများ](topic:not-built-yet) တွင် ကြည့်ပါ။ ယခင်ဗားရှင်းအတွက် [0.7 တွင် အသစ်ဖြစ်သည်](topic:whats-new-0-7) ကို ကြည့်ပါ။
