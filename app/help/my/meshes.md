---
title: Mesh များ
summary: group သို့မဟုတ် component ကို 3D content ကိရိယာများ မော်ဒယ်ဆွဲသည့် အမျိုးအစားဖြစ်သော mesh အဖြစ် ပြောင်းပြီး push/pull geometry သို့ ပြန်ပြောင်းပါ။
keywords: mesh, meshes, polygon, polygons, n-gon, quad, quads, vertices, half-edge, uv, uvs, convert, convert to mesh, convert to geometry, subdivision, sculpt, modeling, 3d content
from: e32363e8
---

ModelCraft တွင် geometry အမျိုးအစား နှစ်မျိုး ရှိသည်။ **Push/pull geometry** သည် သင်ဆွဲသော အပြား face များ ဖြစ်ပြီး ကပ်နေ၊ တစ်ခုကိုတစ်ခု ဖြတ်၊ ပြန်ပေါင်းသည်။ **Mesh** သည် 3D content ကိရိယာများ မော်ဒယ်ဆွဲသော အမျိုးအစား object ဖြစ်သည်- ထောင့်အရေအတွက် မည်မျှမဆို ရှိသော face များ၊ ထောင့်တစ်ခုစီက ၎င်း၏ကိုယ်ပိုင် texture coordinate (UV)၊ normal နှင့် အရောင်ကို သယ်နိုင်ပြီး vertex တစ်ခုစီက အလေးချိန်ကဲ့သို့ တန်ဖိုးများ ရှိသည်။ mesh ကို group သို့မဟုတ် component ကဲ့သို့ ထားသည်၊ တူညီသော မော်ဒယ်ထဲ push/pull geometry ဘေးတွင် ရှိသည်။

## Group သို့မဟုတ် component ကို mesh အဖြစ် ပြောင်းရန်

1. group သို့မဟုတ် component ကို ရွေးပါ။
2. {{ui:Entity info}} တွင် {{ui:Convert to mesh}} ကို နှိပ်ပါ။

၎င်း၏ face များသည် mesh ၏ face များ ဖြစ်လာသည် (အပေါက်ပါသော face သည် တြိဂံများအဖြစ် ဝင်လာသည်)၊ ထက်မြက်သော edge များ ထက်မြက်နေဆဲ၊ ပျော့သော edge များ ချောမွေ့စွာ အရိပ်ထည့်သည်၊ သုတ်ချက်၊ ပစ္စည်းနှင့် တင်သွင်းထားသော texture များ ၎င်းတို့၏ face များပေါ် ကျန်ရှိသည်။ အတွင်းရှိ group နှင့် component များကို mesh တစ်ခုတည်းအဖြစ် ပေါင်းသည်။ ကွက်လပ် edge များ ချန်ထားသည်- mesh သည် face များကိုသာ သိမ်းသည်။ component ၏ placement တိုင်းက mesh ကို ပြသည်။ undo အဆင့် တစ်ခု။

## Entity info ပြသသည်များ

mesh တစ်ခုကို ရွေးလျှင် ၎င်း၏ face၊ vertex နှင့် edge များ၊ ပိတ်ထားသော solid ဟုတ်မဟုတ် (နှင့် ထုထည်)၊ နေရာချထားသည့် အရွယ်အစားကို ပြသည်။ ဖွင့်ထားသော edge ရှိသော mesh သည် မည်မျှရှိသည်ကို ပြသည်။

## Mesh ကို push/pull geometry သို့ ပြန်ပြောင်းရန်

mesh ကို ရွေး၍ {{ui:Convert to geometry}} ကို နှိပ်ပါ။ အပြား face များသည် မူလအတိုင်း ပြန်လာသည်၊ ထောင့်များ တစ်ပြားတည်း မဟုတ်သော face သည် တြိဂံများအဖြစ် ပြန်လာသည်။ ထက်မြက်သော edge များက hard ဖြစ်ပြီး အခြားများက soft ဖြစ်သည်။ {{ui:Explode}} က mesh ၏ face များကို ၎င်းပတ်လည်ရှိ group ထဲ တိုက်ရိုက် ထည့်သည်။

## သိထားသင့်သည်များ

- mesh ကို နှစ်ချက်နှိပ်ပါက Mesh workspace တွင် [vertex၊ edge နှင့် face များကို တည်းဖြတ်ရန်](topic:mesh-edit) ဖွင့်သည်။ push/pull ဖြင့် တည်းဖြတ်ရန် geometry သို့ ပြောင်းပါ၊ ရွှေ့၊ လှည့်၊ အတိုင်းအတာ၊ ကူး၊ သုတ်၊ ဖျောက်၊ tag တပ်ခြင်းကို group တစ်ခုကဲ့သို့ လုပ်ပါ။
- Export၊ 3D print၊ render နှင့် VR တို့သည် mesh ကို face များအဖြစ် မြင်သည်။
- mesh ပါသော ဖိုင်ကို `.modelcraft` ဖိုင်၏ ဗားရှင်းအသစ်အဖြစ် သိမ်းသည်၊ ထို့ကြောင့် ModelCraft 0.6 နှင့် အဟောင်းများက ဖွင့်၍ မရပါ၊ mesh မပါသော ဖိုင်များကတော့ ယခင်အတိုင်း ဖွင့်နိုင်သည်။ ဗားရှင်းဟောင်းရှိ တစ်စုံတစ်ဦးနှင့် ဖိုင်မျှဝေရန် mesh များကို အရင် geometry သို့ ပြောင်းပါ။
- mesh ပေါ် undo သည် အဆင့်တစ်ခုစီက ပြောင်းလဲခဲ့သည်ကိုသာ သိမ်းသောကြောင့် အလွန်ကြီးသော mesh ပင် မြန်မြန် undo လုပ်နိုင်သည်။

ဆက်ကြည့်ရန် [အုပ်စုများနှင့် component များ](topic:groups-components) နှင့် [မတည်ဆောက်ရသေးသည်များ](topic:not-built-yet)။
