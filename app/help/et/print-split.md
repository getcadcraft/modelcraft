---
title: Suure mudeli jagamine printimiseks
summary: Lõika printerile liiga suur mudel tükkideks, mis mahuvad printimislauale, koos tappide, võtmete, vääkliidete, tüübli- või magnetiaukude ja liite numbriga mõlemal tahul ning laadi kõik tükid ja koosteleht ühes zip-failis alla.
keywords: 3D-printimine, jagamine, kaldlõige, nurgaline lõige, kaldus lõige, lõikur, lõige, liiga suur, lauasuurus, printimisruum, tükid, osad, ühendid, tapid, võtmed, vääkliide, tüüblid, magnet, liitevaru, toleerants, detailinumbrid, koost, lahtivõetud vaade, zip, stl, 3mf, litsents, license, USB-võti, dongle
from: ee96ba77
---

Kui mudel on suurem kui printeri lauapind, lõikab **Jaga printimiseks** selle mahtuvateks tükkideks, lisab ühendid, et tükid joonduksid kokkupanekul, ning graveerib sama numbri iga liite mõlemale tahule. Ava {{ui:Ekspordi}} › {{ui:Kontrolli 3D-printimist (STL või 3MF)…}}; dialoogi rea **Printimise tööriistad** juures on {{ui:Jaga printimiseks}}. See avaneb vaate kohal kaardina.

See töötab sellel, mida prinditakse: valiku või kõigel nähtaval, kui midagi pole valitud. Printida tohib ainult suletud tahkist; kui kontroll leiab auke, kasuta enne [Paranda](topic:print-tools#repair).

See töötab ModelCraftis, sinu arvutis: litsentsiserverit, USB-võtit ega üleslaadimist ei ole.

## Kuidas lõigata

- **Mahuta lauale, väikseim arv tükke**: anna laua laius, sügavus ja kõrgus (need võetakse alates {{ui:Sätted}} › ModelCraft › 3D-printer). Kaart ütleb, mitu tükki on vaja ja kui suur iga tükk on; mudel lõigatakse võrdseteks tükkideks, nii vähe kui mahub. Tükk võib failides olla külili, kui see aitab tal mahtuda. Tüki küljest välja ulatuvad ühendid loetakse tema suurusesse.
- **Antud kohtades**: vali lõikejoone telg ja sisesta kohad millimeetrites mudeli madalamast otsast, komadega eraldatult (`100, 200` teeb kolm tükki).
  **Kaldlõige** pöörab lõikeid kuni 60° võrra mööda ühte kahest ülejäänud teljest (näiteks Z-telje suhtes tehtud lõige kaldub X-telje ümber): iga kaldlõige läbib mudeli keskjoont oma kohas, annab tükkidele rohkem liimipinda ja peidab liite kaldpinnal paremini. Ühendid seisavad lõikega risti.

Lõiketasandid joonistatakse mudeli ümber katkendjoontena, kui kaart on avatud.

## Ühendid

Igas kohas, kus kaks tükki puutuvad, tulevad ühendid, mis paigutatakse sinna, kus on kõige rohkem ruumi: välisservast vähemalt **väikseim sein** pluss **liitevaru** pluss ühendi enda mõõt, ning iga teise lõikeni piisavalt kaugele, et kaks auku kunagi ei kohtuks. Pikal pinnal laotatakse kaks ühendit selle peale laiali, et tükid ei saaks pöörduda.

- **Ümarad tapid**: tapp ühel tükil (otsast faasitud), auk teisel.
- **Ruudukujulised võtmed**: sama, ruudukujuline, nii et tükk saab peale panna ainult ühel viisil.
- **Vääkliited**: ahel, mis libiseb pesasse külje pealt. Kui pesa ühe otsa juures jõuaks teine lõige, jääb vääkliide lühemaks ja libiseb sisse lahtisest otsast. Vääkliited sobivad ühes suunas tehtud lõigetele (rida viile); ruudustikus kasuta tappe või tüübleid.
- **Tüübliaugud**: auk igal pool; tüüblid prinditakse samuti (zip-failis).
- **Magnetisüvendid**: süvend igal pool ümarale magnetile, mille läbimõõdu ja paksuse sina annad. Kontrolli poolusi enne nende liimimist.
- **Puudub (liimitakse)**.

**Liitevaru** on tapi ja tema augu vaheline vahe igal pool (alguses 0,2 mm). See vastab sinu antud arvule: ümaraid auke tehakse veidi suuremaks, et vahe jääks alles nende lamedatele külgedele, mitte nurkadele. Suurenda seda, kui printeri detailid tulevad liiga kinni.

Kui liitel pole ühendi jaoks ruumi (õhuke sein, väike puutepind), ütleb kaart seda: liimi see liide kokku.

## Detailide numbrid

Kui **Graveeri liidete numbrid mõlemale tahule** on sisse lülitatud, saab iga liide kahe tüki numbri, näiteks `3-4`, mis graveeritakse mõlemale tahule 0,6 mm sügavusele, kumbki õigesti loetavana. Numbrid algavad 5 mm kõrgusena ja muutuvad väiksemaks, et mahtuda, kuni 2,5 mm-ni; liide, kus numbrile ruumi pole, kantakse nimekirja. Tükid nummerdatakse alt kihilt üles.

## Eelvaade, allalaadimine, mudeli jagamine

1. {{ui:Eelvaade}} lõikab mudeli ja ütleb, mitu tükki, liidet ja ühendit on, kas iga tükk läbib 3D-printimise kontrolli ja mahub lauale, ning loetleb iga tüki mõõdud. Vaates märgib rõngas iga ühendi ja numbri.
2. {{ui:Laadi osad alla (.zip)}} salvestab ühe zip-faili: iga tüki kohta ühe faili (STL või 3MF, nagu valid jaotises **Failid**), mis seisab laual; tüübliaukude tüüblid; ning **koosteleht** — pilt tükkidest lahti tõmmatuna nende numbritega (`assembly.svg` ja `assembly.png`) ning tükkide ja liidete loend (`assembly.txt`).
3. {{ui:Jaga mudel}} paneb tükid mudelisse valitud rühmade või komponentide asemele, nimetatud nagu koostelehel, ühe sammuga: {{ui:Võta tagasi}} paneb originaali tagasi. Selleks on vaja jagatavaid rühmi või komponente valida; allalaadimine töötab sellega, mida saab printida.

## Liiguta ühendid ise

Pärast eelvaadet võimaldab **Ühendid käsitsi** parandada, kuhu ühendid lähevad:

- {{ui:Teisalda üks}}: klõpsa vaates punasel rõngal (see muutub roheliseks), seejärel klõpsa kohal lõikel, kuhu see peaks minema.
- {{ui:Lisa üks}}: klõpsa vaates kohta, kuhu ühend peaks minema. See läheb lõiketasandile, mille su klõps tabab, kahe tüki vahele.
- {{ui:Eemalda üks}}: klõpsa punasel rõngal, et see ühend eemaldada.

Iga muudatus kontrollitakse uuesti nagu automaatseidki: liiga äärele lähedal asuvat kohta, teist lõiget või teist ühendit ei tehta ning kaart ütleb seda. {{ui:Jälle automaatne}} unustab sinu kohad. Need säilivad, kuni mudel, valik ja lõiked jäävad samaks.

Eelvaade jääb kehtima, kuni muutub mudel, valik või säte; siis küsib kaart eelvaadet uuesti.

:::note
Iga tükk kontrollitakse nii, nagu kontrollib 3D-printimise kontroll enne allalaadimist. Viilutaja otsustab ikka, kuidas iga tükk prinditakse: vaata neid seal üle ning prindi enne üks liide, et näha, kuidas su printer liitevaruga hakkama saab.
:::
