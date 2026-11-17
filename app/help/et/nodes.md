---
title: Sõlmed: mudeli loomine ühendamise teel
summary: Ühenda arvud punktideks, punktid kõveriteks ja kõverad pindadeks. Muuda arvu ja kõik allavoolu uuenevad. Iga sõlm on ka CraftScripti rida ning graafik salvestatakse faili.
keywords: sõlmed, sõlmede redaktor, visuaalne skriptimine, parameetriline, graafik, juhtmed, pordid, vabakuju, freeform, nurbs, loft, väljapressimine, pööramine, ring, kõver, pind, seeria, vahemik, juhuslik, loend, skript, craftscript, grasshopper
from: 9c8e254f
---

Redaktor **{{ui:Sõlmed}}** loob geomeetria, ühendades kaste omavahel. Iga kast (sõlm) teeb ühe väikese töö: loob arvu, punkti, ringi või loft'i. Ühendad ühe tulemuse järgmise sisendiga ning mudel järgib, kui muudad algul olevat arvu.

Ava see paremal paneelil: {{ui:Sõlmed}} › {{ui:Sõlmed…}}. Fail, millel on juba graafik, avab selle ise. See on aken 3D-vaate kohal: lohista pealkirjariba, et seda liigutada, ja nurka, et suurust muuta.

## Ühendamine

1. Vali sõlm vasakul olevast loendist (otsingukasti sisestades saad loendit kitsendada; <kbd>Enter</kbd> lisab esimese vaste). Sõlm ilmub kanvase keskele.
2. Lohista ühe sõlme ümmargusest **väljundpunktist** paremal teise sõlme ümmargusele **sisendpunktile** vasakul. Punkt muutub roheliseks, kui see sobib, ja punaseks, kui ei sobi; põhjuse saamiseks vii kursor selle peale.
3. Sisendile, millele pole midagi ühendatud, ilmub kast sisestatud väärtuse jaoks. Sisesta arv ja vajuta <kbd>Tab</kbd>: tulemus ehitatakse uuesti.
4. Sõlme pealkirjaribal olev väike ring on selle **silm**. Silmaga sõlm joonistatakse 3D-vaates: kõverad joontena, pinnad varjutatuna, punktid täppidena.

Sõlme lohistamiseks haara pealkirjaribast. Taustale lohistamine nihutab vaadet, hiireratas suumib. <kbd>Delete</kbd> kustutab valitud sõlme. {{ui:Korrasta}} paigutab sõlmed veergudesse, {{ui:Mahuta}} toob need kõik vaatesse, {{ui:Võta tagasi}} ja {{ui:Tee uuesti}} liiguvad läbi sinu muudatuste.

## Tüübid ja ühikud

Portidel on tüüp: arv, jah/ei, punkt, vektor, kõver, pind, võrk, tahkis või „geomeetria“ mis tahes neist. Punkt võib anda sisendi vektorile ja vastupidi. Arvud kannavad ühikut: **pikkus** on millimeetrites ja **nurk** kraadides. Pikkust ei saa sööta nurga sisendisse ning pikkus korrutatuna pikkusega (pindala) keeldub, nii et vale juhe peatatakse juba ühendamisel.

Ruudukujuline punkt on **loend**. Kui loend jõuab ühe väärtusega sisendini, jookseb sõlm iga elemendi jaoks eraldi ja tulemus muutub loendiks. Lühem loend kordab oma viimast elementi. Näiteks **Seeria** kõrgustest, mis läheb **Teisaldamisse**, teeb koopiate virna.

## Tahkised ja Boolean-tehted sõlmedena

Rühm **Tahkised** loob suletud kehi samadest täpsetest pindadest, mis pindade paneelil: **Kasti tahkis**, **Silindri tahkis** ja **Kuuli tahkis** (mõõdud mm-des), **Ühenda**, **Lahuta** ja **Lõikumine** (teine tahkis võetakse esimesest; tolerants on see, kui kaugele tahkismootori kolmnurgad tohivad täpsetest pindadest jääda), **Ümardus tahkude vahel** (tahud oma numbri järgi tahkises, 1 on esimene; raadius ning, kui see on üle 0, raadius lõpus), **Tahkise maht** (mm³) ja **Tahkis võrguks** (et seda näha või fikseerida). Tahkisel on oma pordi tüüp: punkt või arv ei saa tahkise sisendisse ühenduda ja punkt jääb punaseks. Boolean- ja ümardussõlmed kasutavad programmi enda tahkismootorit, mis laaditakse esimest korda, kui redaktor avaneb.

## Vead

Sõlm, mis ei suuda oma tööd teha, ütleb punaselt oma nime all, miks („Raadius peab olema suurem kui null.“), ning sellele järgnevad sõlmed ootavad. Sama teade on paneelil **Probleemid**, nii et leiad selle sealt.

## Iga sõlm on skriptirida

Vajuta {{ui:Skript}}, et näha graafikut CraftScriptina: üks rida sõlme kohta, näiteks `n3 = nd_circle(n2, n1, [0 0 1]);`. Muuda teksti ja vajuta {{ui:Koosta graafik sellest skriptist}}, et see tagasi graafikuks tuua. Samad `nd_` funktsioonid töötavad ka CraftScriptis PartCraftis, nii et graafikut saab seal käivitada, tsüklitesse panna ja testida. Juhuarvudel on alati **seeme**, nii et sama graafik annab igas arvutis sama tulemuse.

## Salvestatud failiga koos

Graafik salvestatakse mudelifaili. Sõlmed loovad oma kõverad, pinnad ja võrgud: need ei muuda mudeli tahke, kuni sa seda ei küsi.

## Fikseeri mudelisse

Lülita sisse selle sõlme silm, mis teeb pinna või võrgu, ja vajuta sõlmede aknas {{ui:Fikseeri mudelisse}}. Iga näidatud pind või võrk muutub mudelis tahkude grupiks, mida saab muuta nagu iga teist, mõõtudes meetrites. See on üks tagasivõtmise samm. Graafik jääb alles, kuid koopia ei järgi seda enam: muuda arvu ja fikseeri uuesti, et saada uus koopia. Punkte ja kõveraid ei loeta tahkisteks, seega need jäetakse välja ja teade ütleb, mitu neid oli.
