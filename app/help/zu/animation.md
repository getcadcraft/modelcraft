---
title: Yenza i-animation yekhamera nezinto, bese uqopha ividiyo
summary: Setha izikhiye zekhamera namaqembu namakhompoment ethalini lesikhathi, uwadlale ku-view, bese uqopha i-animation ibe yividiyo ye-WebM ngesibhakabhaka, ilanga, izinto nezinto zokuqopha ezifanayo.
keywords: i-animation, animate, ithala lesikhathi, ukhiye, izikhiye, ifreyimu yokhiye, indlela yekhamera, ukundiza, ukuhamba, ividiyo, ifilimu, webm, qopha ividiyo, izinhlaka, izinga lezinhlaka, i-playhead, ukhiye ozenzakalelayo, ukuthamba, ukubushelelezisa, ukubamba, izigcawu, izithombe ze-png, ukunyakaza
from: d3a58249
---

**Ithala lesikhathi** linyakazisa ikhamera namaqembu noma amakhompoment noma yiliphi phakathi nesikhathi. Usetha **izikhiye** (lapho okuthile kukhona ngesikhathi esithile); i-ModelCraft iyinyakazisa ngokushelelayo ukusuka kukhiye kuye kwelandelayo. Yidlale ku-view, bese uyiqopha ibe yividiyo ngesibhakabhaka, ilanga, izinto namalambu afanayo nakwe-[isithombe esiqoshiwe](topic:render).

## Vula ithala lesikhathi

Chofoza {{ui:Views}} eqenjini le-{{ui:Camera}}, bese {{ui:Animation timeline}}. Ithala lesikhathi livula ngaphansi kwe-view: izilawuli eziphezulu, bese umugqa we-**Camera** kanye nomugqa ngamunye weqembu noma ikhompoment elinyakazayo. Amadayimane ngezikhiye; umugqa obomvu ngu-**playhead**, isikhathi esibonakala ku-view.

:::touch
Kufoni ithala lesikhathi livula ngaphansi kwe-view nalo. Izilawuli zalo ziyumugqa owodwa: swayiphela ngokuhlangothi ukuze ufinyelele ezinye; inkinobho evala ithala ihlala ekugcineni kwalo.
:::

Donsa isilayida (noma chofoza emgqeni) ukuze uhambise i-playhead. I-{{ui:Play}} idlala kusuka ku-playhead iphenduke ibe {{ui:Pause}} njengoba idlala; chofoza futhi ukuze umise lapho ikhona. I-{{key:Space}} yenza okufanayo lapho ithala livuliwe (ngethala elingavuliwe, i-Space isaba yi-Select). I-{{ui:Previous key}} ne-{{ui:Next key}} zigxuma phakathi kwezikhiye. Isitayela sakho singanikeza ukudlala nokumisa ukhiye omusha: {{ui:Settings}}, bese imenyu, izinkinobho ne-mouse, umyalo *Dlala noma misa i-animation*.

## Hambisa ikhamera

1. Hambisa i-playhead uye lapho ukudubula kuqala khona (0 s), lungisa i-view, bese uchofoza {{ui:Key camera}}.
2. Hambisa i-playhead ngokuya kwesikhathi (ake sithi 4 s), zungeza, pan noma hamba i-view uye endaweni elandelayo, bese uchofoza futhi {{ui:Key camera}}.
3. Engeza izikhiye ozithandayo, bese {{ui:Play}}.

Ikhamera idlula ngokushelelayo kukho konke ukhiye futhi iqala iphele ekuphumuleni.

:::tip
Sewunezigcawu? I-{{ui:From scenes}} yenza indlela yekhamera kuzo: imisa kuyo ngayinye, bese iya kolandelayo. Uma ithala lesikhathi lingenazo izikhiye, i-{{ui:Render video…}} yenza lokhu yodwa, ngakho izigcawu ezimbili noma ngaphezulu zanele ividiyo yokuhamba.
:::

## Hambisa iqembu noma ikhompoment

1. Khetha iqembu noma ikhompoment (amaqembu aphelele nezikhompoment kuphela ayanyakaza; [yenza iqembu](topic:groups-components) kuqala).
2. Ku-0 s, chofoza {{ui:Key selected}}.
3. Hambisa i-playhead ngokuya kwesikhathi, [hambisa, jikisa noma shintsha usayizi](topic:move-copy) weqembu liye lapho kufanele khona, bese uchofoza futhi {{ui:Key selected}}.

Lishelela, lijike futhi likhule phakathi kwezikhiye zalo. Ukugoqa kuthatha indlela emfushane.

I-**Auto key** isindisa ukuchofoza kwesinyathelo sesi-3: uma i-{{ui:Auto key}} ivulekile, iqembu elikhethiwe oliyihambisayo, oliphendulayo noma oliyishintshayo lithola ukhiye ku-playhead ngokwalo (nokhiye ku-0 s lapho lalikhona, okokuqala).

:::note
Ukunyakaza kweqembu elinezikhiye ngaphandle kokhiye kuhlala kuze kuhambe i-playhead: ngakulandelayo lapho udlala noma uhambisa, ibuyela lapho izikhiye zalo zalibeka khona. Ibha yesimo iyasho lokhu. Cindezela {{ui:Key selected}} ukuze uyigcine.
:::

## Shintsha izikhiye

- **Khetha ukhiye** ngokuchofoza idayimane lawo: i-playhead iyaya kuwo.
- **Hambisa ukhiye** ngokudonsa idayimane lawo emugqeni walo, noma nge-{{key:Left}} ne-{{key:Right}} (ifreyimu eyodwa; nge-{{key:Shift}}, eyishumi).
- **Susa** nge-{{ui:Delete key}} (ukhiye okhethiwe, noma zonke izikhiye ku-playhead) noma {{key:Delete}} kudayimane okhethiwe.
- **Ukuthi uhamba kanjani kulandelayo**, ukhiye okhethiwe: {{ui:Smooth}} (ijika elidlula ezikhiyeni eziseduze), {{ui:Steady}} (umugqa oqondile ngejubane elilodwa), {{ui:Slow in and out}} (ufika ekuphumuleni kulo khiye) noma {{ui:Hold}} (ihlala ize kufike ukhiye olandelayo).
- I-**Ubude (s)** isetha ukuthi i-animation inde kangakanani; ukhiye osethwe ngemva kwesiphetho wenza ibeide. Ukuze uyifinyeze, hambisa noma susa izikhiye ezidlula isiphetho esisha kuqala.
- I-**×** ohlwini lweqembu iyayiyeka ukuyianimeyita.

Ithala lesikhathi linalo lalo {{ui:Undo}} ne-{{ui:Redo}}: i-{{key:Mod+Z}} yemodeli ishintsha imodeli, hhayi izikhiye. I-animation igcinwa ku-fayela le-`.modelcraft`. Ukuvala ithala kubuyisela amaqembu anyakazayo ekumeni kwawo kokuqala.

## Qopha ividiyo

1. Chofoza {{ui:Render video}} ethalini lesikhathi (noma {{ui:Export}} › {{ui:Render video…}}).
2. Khetha {{ui:Size}}, {{ui:Frame rate}}, {{ui:Quality of each frame}} kanye {{ui:File}}.
3. Chofoza {{ui:Render video}}. Ifreyimu ngayinye iyabonakala njengoba yenziwa, nesikhathi esisele.
4. Lapho isiqedile, chofoza {{ui:Save video}}.

{{ui:Stop}} (noma {{key:Esc}}) iyayiphelisa ngaphambi kwesikhathi; {{ui:Save video}} bese igcina izinhlaka ezisele njengevidiyo emfushane.

Isibhakabhaka, ilanga, izinto, amalambu nokukhanya kuyizinto ezisethwe ku-{{ui:Render a picture…}}: zisethe lapho kuqala, uhlole isithombe esimi. Ifreyimu ngayinye iqoshwa kulolu komputha; akukho lutho oluthunyelwa.

| Isilungiselelo | Okwenzayo |
|---|---|
| {{ui:Size}} | 480p, 720p HD, 1080p Full HD, noma isimo se-view siqu (kuze kufike kumapikseli angu-1920 ububanzi) |
| {{ui:Frame rate}} | 24, 25, 30 noma 60 izinhlaka ngomzuzwana. Izinhlaka eziphindwe kabili zithatha isikhathi esiphindwe kabili |
| {{ui:Quality of each frame}} | {{ui:Quick}} (ukudlula okungu-4), {{ui:Draft}} (16) noma {{ui:Good}} (64): ukudlula okuningi kwenza izithunzi nemiphetho ibushelelezile |
| {{ui:File}} | {{ui:WebM video}}, {{ui:MP4 video (H.264)}} lapho isiphequluli singayibhala khona, noma {{ui:PNG pictures, one per frame (ZIP)}} kubahleli bevidiyo (nakuma-browser angenawo umshini wamavidiyo) |

:::tip
Ividiyo yemizuzwana engu-10 ngama-30 izinhlaka ngomzuzwana inezinhlaka ezingu-301. Zama {{ui:Quick}} ku-480p kuqala ukuhlola ukunyakaza, bese uqopha {{ui:Draft}} noma {{ui:Good}} ngosayizi omkhulu.
:::

I-WebM ivula ezisiphequluli ne-VLC, nabahleli bevidiyo bayiguqula. I-{{ui:MP4 video (H.264)}} iyatholakala lapho isiphequluli singayibhala khona. I-{{ui:Render video}} isebenzisa umqoshi osheshayo; ukuze ifreyimu ngayinye iqoshwe ngokugcwele ngokukhanya, khetha {{ui:Add this animation to the queue}} kuleyo nkulumo: izinhlaka ziqoshwa ku-[uhlu lokuqopha](topic:render#the-render-queue), okudinga i-WebGPU.

:::firefox safari
Ukuqopha ividiyo kudinga isiphequluli esenza ividiyo ngaso (WebCodecs): i-Chrome yakamuva, i-Edge, i-Firefox kanye ne-Safari 17. Ngaphandle kwalokho, khetha {{ui:PNG pictures, one per frame (ZIP)}}.
:::

## Okunye okufanele ukwazi

- Kuphela amaqembu aphelele nezikhompoment ayanyakaza. Ubuso, imiphetho, isikhathi selanga nesitayela azikashintshi ngesikhathi.
- I-{{ui:Export animation}} ngaphansi kwe-[Imiboniso](topic:scenes) isabhala i-view njengoba ikhona esikrinini, ngesikhathi sangempela; i-{{ui:Render video}} iqopha ifreyimu ngayinye ngesibhakabhaka, nezithunzi nezinto.
