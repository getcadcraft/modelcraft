---
title: Lungisa ama-UV e-mesh
summary: Maka imiphetho, vula isikhumba, phrojekthela futhi pakisha ama-texture coordinates e-mesh kwi-UV workspace, bese uwahlola ngechekha nemibala yokwelula.
keywords: uv, uvs, vula isikhumba, unwrap, umphetho, imiphetho, ukuthungwa, ama-texture coordinates, atlas, pakisha, ukupakisha, isiqhingi, iziqhingi, ichekha, elula, ukuphambuka, projection yebhokisi, projection yesilinda, projection yebhola, conformal, angle based, lscm, abf
from: 00028f20
---

Ukuthungwa kuyisithombe esilingene; i-mesh ayilingene. Ama-**UV** wayo athi ikhona kuphi ikhona ngayinye yamakhona wanoma yiyiphi inhlangothi esithombeni. I-UV workspace iwenza: usika i-mesh uyivula ngaseceleni **kwemiphetho** (**imiphetho**), ulinganise izingcezu (**vula isikhumba**), bese uzifaka esikwareni (**pakisha**).

## Yivule

Khetha i-mesh bese ukhetha {{ui:UV}} ohlwini lwe-{{ui:Indawo yokusebenza}}. Iqembu noma ingxenye iba yi-mesh kuqala, njengoba kwenziwa ku-Mesh workspace. I-3D view ihamba iye engxenyeni yesobunxele; i-**UV editor** ngakwesokudla ibonisa izinhlangothi ze-mesh zihlelwe esikwareni sokuthungwa. Ukukhetha kusebenza njengasku-Mesh workspace, futhi okukhethwe kolunye olubonweni kukhethwa nakolunye.

## Maka imiphetho

Imiphetho yindawo i-mesh okungasikwa kuyo ivulwe; ibonakala ibomvu kokubili imibono.

- Khetha imiphetho ({{ui:Umphetho}}, noma {{key:2}}) bese ucindezela {{ui:Maka umphetho}} ({{key:Ctrl+E}}). {{ui:Sula umphetho}} ({{key:Ctrl+Shift+E}}) iyawususa.
- {{ui:Imiphetho ebukhali}} imaka yonke imiphetho ebukhali nayo yonke imiphetho lapho izinhlangothi zihlangana ngaphezu kuka-60°: ibhokisi liwela ezinhlangothini zalo eziyisithupha.
- {{ui:Imiphetho yokuhlanganisa kusuka ku-UV}} imaka imiphetho lapho ama-UV sewaphuke khona, isibonelo ngemva kwe-projection.

Isakhiwo esivaliwe sidinga imiphetho ukuze silale phansi: ibhola lidinga okungenani ukusika okukodwa, nethubhu idinga ukusika ngobude bayo.

## Vula isikhumba

Khetha izinhlangothi ozolinganisa (noma azikho, ukuze kube yi-mesh yonke) bese ucindezela {{ui:Vula isikhumba}} ({{key:U}}). Isiqhingi ngasinye phakathi kwemiphetho silinganiswa phansi, sigcine izingodo zaso zinembile kangangoba kungenzeka (ukulinganisa okusekelwe ezingodweni), bese izingcezu zipakishwa esikwareni. {{ui:Conformal}} ivula isikhumba ngamamephu conformal angama-least-squares: iyashesha, ibe incane kancane inembile ezingxenyeni ezigoba kakhulu. Umumo owenziwa ushidi olulingene, njengohlangothi lwesilinda olusikwe kanye, uvuleka ngaphandle kokwelula nakancane.

## Phrojekthela

Emumweni olula, ukuphrojekthela okuvamile kuyanele:

| Projection | Okwenzayo |
| --- | --- |
| {{ui:Ibhokisi}} | Inhlangothi ngayinye ibheka eceleni lebhokisi elibheke kakhulu kuyo |
| {{ui:Isilinda}} | Izungeza i-axis eluhlaza okwesibhakabhaka: ngokuthwala kuyi-engeli ezungezayo, phezulu kuyubude |
| {{ui:Ibhola}} | Kusukela esikhungweni: ngokuthwala kuyi-engeli ezungezayo, phezulu kuyububanzi |
| {{ui:Kusukela embonweni}} | Njengoba izinhlangothi zibonakala ku-3D view manje |

Inhlangothi ehlangana ngaphezulu kwesilinda noma kwebhola ihlala iyisiqeshana esisodwa, ngakho ama-UV ayo angadlula kancane umphetho wesokudla wesikwele; izithungo ziphindaphinda lapho.

## Hlela izindawo

- {{ui:Pakisha}} ifaka izingcezu (izihlephu) esikwareni ngosayizi weteksela munye, ngayinye iphendulwa ukuze ithathe indawo encane. I-panel imisa isikhala esisele phakathi kwazo.
- {{ui:Phendula ngama-90°}} ne-{{ui:Bonisa}} zijikisa noma zibonise ama-UV wezinhlangothi ezikhethiwe.
- Ku-UV editor, donsa inhlangothi ekhethiwe ukuze uhambise ama-UV wokukhethiwe, noma uyinikeze i-editor bese ucindezela {{key:R}} noma {{key:S}} bese uhambisa ukuze uwajikise noma uwashintshe usayizi (ukuchofoza kuwagcina, {{key:Esc}} iyayekisa). {{key:G}} uhambisa ngaphandle kokudonsa. Chofoza kabili inhlangothi (noma {{key:L}}) ukukhetha isiqhingi sayo sonke. Iwheel isondeza; donsa ngenkinobho ephakathi noma yesokudla ukushelelisa; {{key:F}} ibuyisela isikwele.

Lonke ushintsho luyisinyathelo esisodwa sokuhlehlisa.

## Hlola

- {{ui:Ichekha}} ibonisa ichekha elibhalwe kumaUV ayo: amachekha alinganayo asikwele avumela ukuthi ukuthungwa kulale ngokulinganayo; amalebula akhombisa ukuthi kuhamba kuphi.
- {{ui:Elula}} ikhalaza ngemibala ngayinye ngokuthi ama-UV ayo ayiyelula kangakanani: okuluhlaza okwesibhakabhaka akukho ukwelula, kuye kuluhlaza, kuye kubomvu kakhulu. I-panel ikhetha ukuthi ukulinganisa kukhombisa **ama-engeli agobile** noma **usayizi oshintshile**, futhi ibonisa isilinganiso sendlela.

Bheka futhi [Hlela i-mesh](topic:mesh-edit), [Ama-mesh](topic:meshes) no [Izinguquli ku-mesh](topic:modifiers).
