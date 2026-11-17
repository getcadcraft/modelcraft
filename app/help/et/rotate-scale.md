---
title: Pööramine ja mõõtkava
summary: Pööra asju punkti ümber, klõpsates või sisestades kraade, ja muuda suurust ühtlaselt teguri järgi.
keywords: mõõtkava käepidemed, venita, mittühtlane, telje kaupa, peegelda, peegelkoopia, pööra, keera, nurk, kraadid, nurgik, mõõtkava, muuda suurust, suurenda, vähenda, tegur, ühtlane mõõtkava
from: 45cdcb49
---

## Pööramine

{{ui:Pööra}} ({{key:Q}}) keerab valiku ümber keskpunkti. See võtab kolm klõpsu: keskpunkt, alguse suund ja lõppsuund.

1. Vali, mida soovid keerata. Kui midagi pole valitud, võtab pööramine selle, millele esimesena klõpsad.
2. Vajuta {{key:Q}}. Hiire järel liigub rõngas, mis näitab tasandit, milles keerad.
3. Klõpsa pööramise keskpunktil.
   - Maapinnal või tühjas ruumis lamab rõngas tasaselt (sinine): pööre toimub vertikaalse telje ümber, nagu hoone pööramine oma krundil.
   - Tahul lamab rõngas selle tahu tasandil: pööre toimub tahu enda suuna ümber. Klõpsa seinal, et keerata midagi horisontaalse telje ümber.
4. Klõpsa punktil, mis määrab, kust nurk algab, näiteks pööratava asja serva järgi.
5. Liiguta hiirt keskpunkti ümber. Nurk kuvatakse tipus ja väärtuste kastis ({{ui:Angle}}). Kui oled ühe lähedal, klõpsab see 15° sammudena.
6. Klõpsa lõpetamiseks või sisesta nurk kraadides ja vajuta {{key:Enter}}: `90`, `45`, `-30`.

   Positiivsed nurgad keeravad vastupäeva, vaadatuna rõnga suunatud poolelt.

Vajuta {{key:Ctrl}} (või {{key:Alt}}) pööramise ajal, et keerata **koopiat** ja jätta originaal paika, nagu teisaldamisel; tipp ütleb, kas koopia on sisse lülitatud, ja klahvi uuesti vajutamine lülitab selle välja. Sisesta `3x` kohe pärast pööratud koopiat, et saada veel koopiaid samale keskpunktile.

Nagu teisaldamisel, keerutab ühendatud geomeetria osa pööramine selle külge kinnitatud tahke. Grupeeri asjad enne, et keerata need tervikuna.

:::note
Tipp ütleb, et nooleklahvid valivad pööramisvelje, kuid selles versioonis tiirlevad nad enne esimest klõpsu hoopis vaadet. Telje valimiseks klõpsa keskpunkt tahul, mis on suunatud soovitud suunas. Vaata [Pole veel valmis](topic:not-built-yet).
:::

## Mõõtkava

{{ui:Scale}} ({{key:S}}) muudab valiku suurust. Vali enne, mida soovid suurust muuta, siis vajuta {{key:S}}: väikesed ruudud (käepidemed) ilmuvad selle kasti nurkadele, servadele ja külgede keskkohtadele.

### Venita või muuda mõõtkava käepidemetega

- **Nurga** käepide muudab mõõtkava võrdselt igas suunas, vastasnurga suhtes.
- Käepide **külje** keskel venitab ainult selle suuna järgi, vastasküljest: muudad kasti pikemaks, tegemata seda kõrgemaks.
- Käepide **kasti serva** keskel venitab kahes suunas, mis on sellest üle.
- Hoia {{key:Ctrl}} all, kui klõpsad käepidemel, et muuta mõõtkava kasti keskpunkti suhtes.

Klõpsa käepidemel, liiguta hiirt ja klõpsa uuesti; või klõpsa käepidemel ja sisesta tegur (`2` kahekordistab, `0.5` poolitab) ning vajuta {{key:Enter}}. Et anda igale suunale oma tegur, sisesta kolm, punase, rohelise ja sinise jaoks: `2,1,0.5`. Avatud grupi sees on suunad grupi enda omad.

### Mõõtkava suvalise punkti suhtes

Klõpsa mujale kui käepidemele, et muuta mõõtkava ühtlaselt enda valitud punkti suhtes. See võtab kolm klõpsu:

1. Vali, mida soovid suurust muuta. Kui midagi pole valitud, võtab mõõtkava selle, millele esimesena klõpsad.
2. Vajuta {{key:S}}.
3. Klõpsa punktil, mis jääb paigale (mitte käepidemel), näiteks alumisel nurgal.
4. Klõpsa viitepunktil. Selle kaugus esimesest punktist loetakse 1×.
5. Liiguta hiirt esimese punkti poole või sellest eemale. Tegur kuvatakse tipus ja väärtuste kastis ({{ui:Scale}}).
6. Klõpsa lõpetamiseks või sisesta tegur ja vajuta {{key:Enter}}: `2` kahekordistab suuruse, `0.5` poolitab selle.

### Mõõtkava täpsele suurusele

Et teha midagi täpseks pikkuseks, arvuta tegur: uus pikkus jagatud praeguse pikkusega. Kolme klõpsu režiimis teeb väärtuste kast arvutust, nii et sisesta `4.2/3.6`, et teha 3.6 m seinast 4.2 m pikk. Käepideme väärtuste kast võtab ainult lihtsaid numbreid: arvuta tegur enne välja (4.2 jagatud 3.6 on umbes 1.1667). Vali serv enne, et lugeda selle praegune pikkus {{ui:Entity info}} alt.

### Vale suurusega imporditud faili parandamine

OBJ failidel ühikut pole, nii et millimeetrites joonistatud mudel tuleb 1000 korda liiga suurena. Vali imporditud grupp, vajuta {{key:S}}, klõpsa nurga käepidet, sisesta `0.001` ja vajuta {{key:Enter}}. Tollides joonistatud mudeli puhul sisesta `0.0254`.

## Asjad, mida teada

- Mõõtkava muutmine punkti suhtes kolme klõpsuga on ühtlane. Et venitada ainult ühes suunas, kasuta külje- või serva käepidet (vt ülal).
- Grupi või komponendi mõõtkava muutmine muudab koopiat, mida muutsid; komponendi teised koopiad säilitavad oma suuruse.
- Vajuta {{key:Esc}} enne viimast klõpsu, et tühistada.

## Peegeldamine

{{ui:Edit}} › {{ui:More}} › {{ui:Flip along red}}, {{ui:Flip along green}} või {{ui:Flip along blue}} peegeldab valiku kohapeal läbi selle kasti keskkoha: vasakukäeline trepp muutub parempoolseks. Tahud jäävad väljapoole suunatuks ning grupp või komponent peegeldatakse tervikuna (selle sisemust ei kirjutata ümber).

{{ui:Flipped copy along red}} (ja rohelise, sinise) jätab originaali paika ja paneb selle kõrvale peegelkoopia valiku kasti kaugema külje taha: paari teine uks, hoone teine tiib. Seal puudutav lahtine geomeetria ühineb originaaliga, nagu puutuv geomeetria alati teeb; tee originaal enne grupiks, et need eraldi hoida.

Avatud grupi sees on punane, roheline ja sinine grupi enda teljed.
