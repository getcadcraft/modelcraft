---
title: node များဖြင့် material ပြုလုပ်ခြင်း
summary: texture၊ ပုံနှင့် သင်္ချာတို့မှ Shading workspace တွင် material တည်ဆောက်ပါ၊ တည်းဖြတ်ရင်း view တွင် ကြည့်ပါ၊ မျက်နှာများကို ၎င်းဖြင့် ဆေးသုတ်ပါ။
keywords: shading, bake, baking, texture baking, ambient occlusion, ao, curvature, normal bake, high poly, low poly, light map, decal, decals, sticker, logo, label, texture painting, paint texture, brush, material, materials, materialx, mtlx, openpbr, standard surface, material library, librarycraft, texture set, pbr, import textures, zip, cc0, drag, node, nodes, node editor, shader, texture, procedural, noise, checker, voronoi, cells, waves, bricks, tiles, wood, marble, gradient, dirt, edge wear, color ramp, mix, bump, normal map, roughness, metalness, opacity, cut-out, emission, glow, displacement, box mapping, triplanar, uv, picture, image texture
from: d7368b21
---

**Shading** workspace တွင် ပြုလုပ်သော material သည် ဖိုင်နှင့်အတူ ရှိနေသည်။ ၎င်းသည် texture၊ ပုံနှင့် နံပါတ်များ ပြုလုပ်သော **nodes** များကို **ပစ္စည်းအထွက်** (Material output) သို့ ချိတ်ထားသော ငယ်သော graph တစ်ခု ဖြစ်သည်၊ ၎င်း၏ input များက မျက်နှာ၏ အသွင်- base color၊ roughness၊ metalness၊ normal၊ opacity၊ emission နှင့် OpenPBR မော်ဒယ်၏ အခြားအရာများ ဖြစ်သည်။ စာကြည့်တိုက် material မည်သည့်တစ်ခုကဲ့သို့ မျက်နှာများကို ၎င်းဖြင့် ဆေးသုတ်နိုင်ပြီး၊ ပြောင်းလဲမှု တိုင်းကို view တွင် ချက်ချင်း မြင်ရသည်။

## ဖွင့်ခြင်း

Workspace စာရင်းမှ {{ui:Shading}} ကို ရွေးပါ။ 3D view သည် မျက်နှာပြင်အပေါ်ပိုင်းကို ထိန်းထားပြီး **node editor** က အောက်ပိုင်းကို ယူသည်။ ညာဘက် panel တွင် ဖိုင်၏ ကိုယ်ပိုင် material များ ဖော်ပြသည်။

- {{ui:New material}} သည် Material output တစ်ခုတည်းပါသော မီးခိုးရောင် material တစ်ခု ပြုလုပ်သည်။
- **စာကြည့်တိုက် material တစ်ခု၏ တည်းဖြတ်နိုင်သော မိတ္တူ ပြုလုပ်ပါ** သည် အုတ်၊ သစ်၊ ကြွေပြား နှင့် အခြားများကို ပြောင်းလဲနိုင်သော graph အဖြစ် ပြောင်းသည်: texture သည် Library texture node မှ၊ bump များသည် Bump node မှ ဝင်လာသည်။
- {{ui:Paint with it}} သည် ရွေးထားသော မျက်နှာများ သို့မဟုတ် group များကို ဆေးသုတ်သည် သို့မဟုတ် Paint ကိရိယာအတွက် material ကို ရွေးသည်။ Paint ကိရိယာ၏ material များတွင် ဖိုင်၏ ကိုယ်ပိုင် material များကို **In this file** အောက်တွင် ဖော်ပြသည်။
- {{ui:Duplicate}} နှင့် {{ui:Delete}} သည် တည်းဖြတ်နေသော material အပေါ် အလုပ်လုပ်သည်။ ဖျက်ခြင်းကို ပြန်ဖျက်၍ မရပါ: ၎င်းဖြင့် ဆေးထားသော မျက်နှာများသည် ထပ်ဆေးသည်အထိ မူရင်းအရောင်ကို ပြသည်။

## စာကြည့်တိုက်မှ material များ

panel ရှိ **Material library (Library)** သည် စာကြည့်တိုက်၏ material များကို ဖော်ပြသည်၊ တစ်ခုစီတွင် CadCraft ၏ path tracer ဖြင့် ရေးဆွဲထားသော အစမ်းကြည့်ပုံ ရှိသည်။ ၎င်းတို့သည် CC0 အောက်တွင် ထုတ်ပြန်ထားသော texture အစုများ ဖြစ်ပြီး ပြုလုပ်သူများကို ဖော်ပြထားသည်။

- တစ်ခုကို နှိပ်လျှင် ဖိုင်ထဲသို့ ယူသည် (ပုံများပါ အတူလာသည်) ပြီး၊ မျက်နှာ သို့မဟုတ် group များကို ရွေးထားလျှင် ၎င်းတို့ကို ဆေးသုတ်နိုင်သည်။
- view ရှိ မျက်နှာ သို့မဟုတ် group ပေါ်သို့ တစ်ခုကို ဆွဲချလျှင် ထိုအရာကိုသာ ဆေးသုတ်သည်။
- ၎င်းသည် ဖိုင်၏ material တစ်ခု ဖြစ်လာသည်: node များကို အခြား material ကဲ့သို့ ပြောင်းနိုင်သည်။ ၎င်း၏ credit ကို panel တွင် ပြပြီး ဖိုင်တွင် ဆက်ရှိနေသည်။

## Texture set တစ်ခု သွင်းခြင်း

**Import a texture set** အောက်ရှိ {{ui:Pictures or a zip…}} သို့မဟုတ် {{ui:A folder…}} သည် map အစုတစ်ခုမှ material တစ်ခု ပြုလုပ်သည်။ map များကို ဖိုင်အမည်ရှိ စကားလုံးများဖြင့် ရှာသည်: color၊ albedo၊ diffuse သို့မဟုတ် basecolor; roughness (သို့မဟုတ် gloss၊ roughness သို့ ပြောင်းသည်); metalness သို့မဟုတ် metallic; normal (OpenGL သို့မဟုတ် DirectX၊ အမည်ရှိ `gl` / `dx` မှ); height သို့မဟုတ် displacement; ambient occlusion; opacity; emission။ Packed map (ARM၊ ORM) များကို ချန်ထားသည်။ tile သည် 1 × 1 m ဖြင့် စတင်သည်: ၎င်း၏ အမှန်အရွယ်ကို ပစ္စည်းအထွက်တွင် သတ်မှတ်ပါ။ Height သည် scale 0 ဖြင့် displacement သို့ သွားသည် — mesh များပေါ် သုံးရန် scale ကို မြှင့်ပါ။

## MaterialX

MaterialX သည် အခြား 3D နှင့် rendering program များက material များကို ပေးပို့ရန် သုံးသော open format ဖြစ်သည်။

- {{ui:Export as MaterialX…}} သည် တည်းဖြတ်နေသော material ကို သိမ်းသည်: ၎င်း၏ တန်ဖိုးများနှင့် texture တိုင်းကို `.mtlx` ဖိုင်နှင့်အတူ PNG ပုံအဖြစ် (zip ထဲတွင်) သိမ်းသည်။ ရေးမည့် shader ကို ရွေးပါ: **OpenPBR Surface** (MaterialX 1.39၊ ModelCraft သုံးသော မော်ဒယ်တူ) သို့မဟုတ် **Standard Surface** (MaterialX 1.38၊ ယခု program ပိုများက ဖတ်နိုင်သည်)။ texture များကို UV coordinates ဖြင့် မီတာတွင် နေရာချသည်; box နှင့် triplanar နေရာချမှုကို UV အဖြစ် ရေးသည်။
- {{ui:Import MaterialX…}} (သို့မဟုတ် {{ui:From a folder…}}) သည် OpenPBR၊ Standard Surface၊ UsdPreviewSurface သို့မဟုတ် glTF PBR shader ပါသော `.mtlx` ဖိုင်များကို ဖတ်သည်။ ပုံများကိုလည်း ပေးပါ၊ သို့မဟုတ် အားလုံးပါသော zip တစ်ခု ပေးပါ: ပုံကို path၊ အမည်၊ သို့မဟုတ် အခြား ပုံအမျိုးအစား နှင့် ၎င်း၏ အမည်ဖြင့် ရှာသည် (ဖိုင်က `.exr` ဟု ဖော်ပြထားသော်လည်း ဘေးတွင် `.jpg` ရှိနိုင်သည်)။ Texture၊ normal map၊ arithmetic၊ mix နှင့် displacement များသည် node အဖြစ် ဝင်လာသည်; အခြားအရာများသည် ၎င်း၏ တန်ဖိုးကို ထိန်းထားပြီး၊ ချန်ထားသည်များကို status line က ပြောသည်။

## Decal များ

decal သည် မျက်နှာတစ်ခုပေါ် ချထားသော ပုံ ဖြစ်သည် — လိုဂို၊ ဆိုင်းဘုတ်၊ တံဆိပ်၊ အစွန်းအထင်း — ကိုယ်ပိုင် material ဖြင့်။

- **New decal width** ကို သတ်မှတ်ပြီး {{ui:Place a decal…}} (သို့မဟုတ် toolbar ရှိ {{ui:Decal}}) ကို နှိပ်ကာ PNG၊ JPEG သို့မဟုတ် WebP ပုံ ရွေးပြီး မျက်နှာကို နှိပ်ပါ။ ပုံကို ထိုနေရာရှိ မျက်နှာများပေါ် ပြင်ဆင်ထားပြီး အချိုးအစား ထိန်းထားသည်; PNG ၏ ပွင့်လင်းသော အပိုင်းများသည် ပွင့်လင်းနေသည်။
- ၎င်းသည် နှိပ်လိုက်သော group သို့မဟုတ် component နှင့် ပိုင်ပြီး ၎င်းနှင့်အတူ ရွှေ့သည်။ ၎င်း၏ ဘောင်အတွင်း တူညီသော ဘက်သို့ မျက်နှာ ရှိသည်များကို ဖုံးသည်၊ ၎င်းတင်ထားသော အရာ၏ အစွန်းများတွင် ရပ်သည်။
- decal တစ်ခုစီ၏ ကိုယ်ပိုင် material ရှိပြီး ဖိုင်၏ စာရင်းတွင် **Decal: <picture>** ဟု အမည်ပေးသည်- အခြား material ကဲ့သို့ ပြင်ပါ (roughness၊ bump၊ glow)။ decal ဘေးရှိ {{ui:Material}} က ၎င်းကို ဖွင့်သည်။
- decal တစ်ခုစီ၏ ဘေးတွင်: ၎င်း၏ width (height က ပုံကို လိုက်သည်)၊ {{ui:Turn}} (ပြည့်ပတ်၏ လေးပုံတစ်ပုံ) နှင့် {{ui:Delete}}။ Decal များကို ဖိုင်၏ material များနှင့်အတူ သိမ်းထားပြီး Undo ၏ အပြင်တွင် ရှိသည်။
- ၎င်းတို့ကို shaded view၊ အမြန် render များနှင့် အရည်အသွေးမြင့် ပုံများတွင် ပြသသည်။

## Texture ပေါ် ဆေးခြယ်ခြင်း

{{ui:Paint texture}} (သို့မဟုတ် **Paint on the texture** အောက်ရှိ {{ui:Paint}}) သည် ကာဆာကို စက်ဝိုင်း brush အဖြစ် ပြောင်းသည်။ ဤဖိုင်၏ material တစ်ခုကို ဝတ်ထားသော မျက်နှာပေါ် ဆွဲပါ: brush သည် base color နောက်ကွယ်ရှိ ပုံကို ဆေးသည်။

- mesh ပေါ်တွင် ၎င်း၏ UV များအတိုင်း ဆေးသည် (UV workspace တွင် အရင် unwrap လုပ်ပါ); အခြား မျက်နှာများပေါ်တွင် မျက်နှာတစ်ခုလုံးကို ဖြတ်၍ ဆေးသည်၊ ထို့ကြောင့် ဆေးချက်သည် material ၏ tile နှင့်အတူ ထပ်ခါတလဲလဲ ဖြစ်သည်။
- base color သည် အရောင်တစ်ခုတည်း ဖြစ်သော material သည် ပထမဆေးသည့်အခါ ထိုအရောင်ဖြင့် 512 × 512 ပုံအသစ် ရသည်။ base color သည် အခြား node များမှ ဝင်လာသော material သည် Base color သို့ ချိတ်ထားသော Picture node လိုအပ်သည်။
- brush အရောင်၊ အရွယ်အစား (ပုံ pixel ဖြင့်)၊ အား နှင့် မာကျောမှုကို panel တွင် သတ်မှတ်ပါ။ {{ui:Undo stroke}} သို့မဟုတ် Ctrl+Z (ဆေးနေစဉ်) က ဆေးချက် တစ်ကြိမ်ကို ပြန်ဖျက်သည်၊ နောက်ဆုံး 20 အထိ။
- ဆေးထားသော ပုံကို ဖိုင်တွင် သိမ်းသည်။ စာကြည့်တိုက် material များကို ဆေး၍ မရပါ: ပထမဆုံး တည်းဖြတ်နိုင်သော မိတ္တူ ပြုလုပ်ပါ။

## Texture များ bake လုပ်ခြင်း

**Bake textures** သည် mesh ၏ UV များအတိုင်း မျက်နှာတစ်ခုအပေါ် ပုံသဏ္ဍာန်နှင့် မြင်ကွင်းက ပေးသော အရာကို ပုံများအဖြစ် ရေးသည်။

- UV ရှိသော mesh တစ်ခုကို ရွေးပါ (UV workspace တွင် unwrap လုပ်ပါ)၊ လိုချင်သော map များကို အမှတ်ခတ်ပြီး {{ui:Bake}} ကို နှိပ်ပါ:
  - **Ambient occlusion** — အချက်တစ်ခုစီ ဘယ်လောက် ပွင့်လင်းသည်ကို: ထောင့်များ၊ အနက်ကွဲများနှင့် အခြားအရာများအောက်ရှိ နေရာများ ပိုမှောင်သည်။ မော်ဒယ်တွင် ပြထားသည့် အရာအားလုံးက occlusion distance အထိ အရိပ်ပေးသည်။
  - **Curvature** — အပြင်ဘက်အစွန်းများတွင် ဝင်းပသည်၊ အတွင်းထောင့်များတွင် မှောင်သည်၊ ပြားချပ်နှင့် နည်းနည်းကွေးသော အပိုင်းများတွင် မီးခိုးရောင်ရှိသည်၊ သင် သတ်မှတ်သော edge width အတွင်း။
  - **High-detail object မှ Normals** — ပိုအသေးစိတ်သော မိတ္တူတစ်ခုကိုလည်း ရွေးပါ: ၎င်း၏ မျက်နှာအသေးစိတ်ကို ရိုးရှင်းသော တစ်ခုအတွက် normal map အဖြစ် ရေးသည် (ပိုနည်းသော တြိဂံရှိသော object ပေါ် bake လုပ်သည်)။ ရှာဖွေမည့် အကွာအဝေးသည် မျက်နှာနှစ်ခု ဝေးနိုင်သည့် အကွာအဝေး ဖြစ်သည်။
  - **Lighting** — မော်ဒယ်နေရာနှင့် ရက်စွဲ (Style) ၏ နေ နှင့် ၎င်း၏ အရိပ်များ၊ ကောင်းကင်ပါ၊ light map အဖြစ်။
- ပုံများ ဖိုင်ထဲ ဝင်ပြီး Picture node များတွင် ပေါ်သည်။ တည်းဖြတ်နေသော material တွင် **Dirt and edge wear** node ရှိလျှင် အသစ်သော occlusion နှင့် curvature ကို ချက်ချင်း ဖတ်သည်။
- texel တစ်ခုလျှင် ray ပိုများလျှင် occlusion နှင့် lighting ပိုချောမွေ့ပြီး ပိုကြာသည်။ Baking သည် ကွန်ပျူတာ processor core များပေါ်တွင် နောက်ခံတွင် လုပ်သည်; {{ui:Stop baking}} က ရပ်စေသည်။

## Graph တည်ဆောက်ခြင်း

1. {{ui:Add a node…}} (သို့မဟုတ် node editor တွင် {{key:Shift+A}}) သည် editor အလယ်တွင် node တစ်ခု ထည့်သည်။
2. output အစက် (node ၏ ညာဘက်) မှ input အစက် (node ၏ ဘယ်ဘက်) သို့ ဆွဲ၍ ချိတ်ပါ။ input တစ်ခုသို့ ချိတ်ဆက်မှုအသစ်က ပထမကို အစားထိုးသည်; ချိတ်ထားသော input ကို ဆွဲ၍ ဖြုတ်နိုင်သည်။
3. ချိတ်မထားသော input များက ၎င်း၏ တန်ဖိုးကို ပြသည်: နံပါတ် ရိုက်ပါ သို့မဟုတ် အရောင် ရွေးပါ။ ဆက်တင်များသည် node တစ်ခုစီ၏ အောက်ဘက်တွင် ရှိသည်။

node ကို ခေါင်းစဉ်ဖြင့် ဆွဲ၍ ရွှေ့ပါ၊ အလွတ်နေရာကို ဆွဲ၍ pan လုပ်ပါ၊ wheel ဖြင့် zoom လုပ်ပါ။ {{key:Delete}} က ရွေးထားသော node များ သို့မဟုတ် ချိတ်ဆက်မှုကို ဖျက်သည်၊ {{key:Mod+Z}} က ပြန်ဖျက်သည်၊ {{key:Mod+D}} က ပွားသည်၊ {{key:F}} က node အားလုံးကို ပြသည်။ ပြောင်းလဲမှု တိုင်းသည် node editor ၏ undo အဆင့်တစ်ခု ဖြစ်သည်။ မော်ဒယ်၏ ကိုယ်ပိုင် undo သည် material များကို မပြောင်းပါ။

| Node များ | ပြုလုပ်သော အရာ |
|---|---|
| Texture coordinates | tile ပေါ်တွင် အမှတ်တစ်ခု ဘယ်နေရာ: ထပ်ခါတလဲလဲ၊ ရွှေ့၊ ပြည့်ပတ်၏ လေးပုံတစ်ပုံ လှည့်။ |
| Value, Color | နံပါတ်၊ အရောင်။ |
| Picture | ဖိုင်၏ ပုံတစ်ပုံ (ဝင်လာသော မော်ဒယ်နှင့်အတူ ပါလာသော သို့မဟုတ် {{ui:Add a picture…}} ဖြင့် ထည့်သော)။ ဓာတ်ပုံအတွက် **Colors** ကို၊ roughness သို့မဟုတ် normal map အတွက် **Data** ကို ရွေးပါ။ |
| Library texture | စာကြည့်တိုက် material ၏ texture၊ roughness နှင့် height။ |
| Checker, Noise | စတုရန်းများ၊ ချောမွေ့သော fractal noise ၎င်း၏ အသေးစိတ်၊ roughness နှင့် seed ဖြင့်။ |
| Voronoi cells, Waves, Gradient | Cell များ (အနီးဆုံး အမှတ်အထိ အကွာအဝေး၊ cell များကြား အစွန်းများ၊ cell တစ်ခုစီအတွက် အရောင်); ဘောင်ကျော်၊ အပေါ် သို့မဟုတ် ဖြတ်ဆင့် ဆို့ အစင်းကြောင်းများ၊ sine၊ saw သို့မဟုတ် triangle အဖြစ်၊ noise ဖြင့် ကွေးသည်; linear၊ quadratic၊ radial နှင့် spherical gradient များ။ |
| Bricks, Tiles | အုတ်ခုံးအတန်းများ (ပြေးသော offset ဖြင့်) သို့မဟုတ် ကြွေပြား ကွက်ကွက်: အရောင်များ၊ mortar သို့မဟုတ် grout၊ မီတာဖြင့် gap နှင့် bevel၊ bump အတွက် height၊ အစိတ်အပိုင်းတစ်ခုစီအတွက် ကျပန်း နံပါတ်။ |
| Wood, Marble | သစ်မျှင်ကောင်းများဖြင့် ကြိုးပေါ်ရှိ သစ်ကြိုး ကွင်းများ; turbulence ဖြင့် ကွေးသော အကြောင်းများ။ |
| Dirt and edge wear | mesh ၏ curvature နှင့် occlusion ပုံများမှ ထောင့်ကွေးသော အစွန်းများကို ပွန်းစေပြီး အတွင်းများကို ညစ်ပေနစေသည် ([Bake textures](topic:shading#bake-textures) က ပြုလုပ်ပေးသည်; သို့မဟုတ် ၎င်း၏ ပုံဆက်တင် နှစ်ခုကို mesh ၏ UV layout တွင် သတ်မှတ်ပါ: material ကို UV coordinates ဖြင့် နေရာချပါ)။ ၎င်းတို့ မရှိလျှင် ဘာမှ မပြောင်းပါ။ |
| Mix colors, Color ramp, Hue/saturation/value, Brightness and contrast, Invert, Gamma, Separate and Combine RGB | အရောင် လုပ်ဆောင်ချက်များ။ |
| Math, Map range | နံပါတ်များပေါ် ပေါင်း၊ မြှောက်၊ power၊ smooth step နှင့် အခြား arithmetic။ |
| Bump, Normal map | height (Bump) မှ သို့မဟုတ် normal-map ပုံ (Normal map: အစိမ်းရောင် channel ၏ ဦးတည်ချက်ကို ရွေးပါ) မှ normal။ |

## ပစ္စည်းအထွက် (Material output)

၎င်း၏ ဆက်တင်များက texture သည် မျက်နှာများပေါ် မည်သို့ ခင်းသည်ကို ပြောသည်:

- **Tile width** နှင့် **Tile height**: texture ၏ tile တစ်ခုက မီတာ မည်မျှ ဖုံးသည်။ graph ပြုလုပ်သည် အရာအားလုံး tile တစ်ခုလုံးတွင် အဆစ်မရှိဘဲ ထပ်ခါတလဲလဲ ဖြစ်သည်။
- **Placed by**: **UV coordinates** က မျက်နှာများကို လိုက်သည် (push/pull မျက်နှာများ: မျက်နှာတစ်ခုစီအတိုင်း; mesh များ: ၎င်းတို့၏ UV များ၊ UV unit တစ်ခု = tile တစ်ခု)၊ **Box** က axis သုံးခုထဲမှ အနီးဆုံးမှ ပုံဖော်သည်၊ **Triplanar** က စောင်းနေသော မျက်နှာများပေါ်တွင် ပုံဖော်မှု သုံးခုကို ရောစပ်သည် (**Blend sharpness**: မြင့်လေ၊ ပိုမာသော ရောစပ်မှု)။
- **Normal strength** က normal input ကို စကေးချသည်။ **Displacement scale** က displacement input က mesh ၏ vertex များကို မည်မျှ ရွှေ့မည်ကို သတ်မှတ်သည်။
- {{ui:More inputs}} က OpenPBR input ကျန်များ ပြသသည်: coat၊ fuzz၊ subsurface၊ thin film၊ transmission နှင့် ၎င်းတို့၏ အရောင်များ။

## အရည်အသွေးမြင့် ပုံများတွင်

path tracer သည် graph မှ base color၊ roughness၊ metalness၊ opacity၊ normal နှင့် emission ကို မျက်နှာတစ်လျှောက် ပြောင်းလဲသည့်အတိုင်း ဖတ်သည်။ သင် ချိတ်သော အခြား input (ဥပမာ ကွဲပြားသော coat) ကို ၎င်း၏ ပျမ်းမျှဖြင့် သုံးသည်; panel က ဘာတွေဖြစ်သည်ကို ပြသည်။ opacity texture မှ cut-out သည် ၎င်း၏ ပုံသဏ္ဍာန်ကို ပြပြီး ၎င်း၏ အရိပ်သည် တူညီစွာ ပွင့်လင်းသည်။ ထင်ရှားသော texture သည် မျက်နှာဆိုင်ရာ အရာများကို မီးထိုးပေးသည်၊ မီးချောင်းအဖြစ် နမူနာမယူခြင်း မရှိပါ။

**Displacement** သည် mesh များ၏ vertex များကိုသာ ရွှေ့သည်၊ ထို့ကြောင့် အသေးစိတ်အတွက် Subdivision modifier ကို ထည့်ပါ ([Modifiers](topic:modifiers))။ Push/pull မျက်နှာများသည် ပုံသဏ္ဍာန်ကို ထိန်းပြီး bump များကို normal မှ ရသည်။

:::tip
WebGPU ပါသော ကွန်ပျူတာတွင် graph ကို graphics card ပေါ်တွင် တွက်ချက်သည်; မပါလျှင် processor ပေါ်တွင်။ ရလဒ်သည် တူညီသည်။
:::
