---
title: Zobrazení modelu na stavbě v telefonu s Androidem (AR)
summary: Zvedněte telefon s Androidem a Chrome a uvidíte model v plné velikosti nad obrazem kamery, zarovnaný na budovu podle dvou bodů, na kterých stojíte, s rentgenovou čočkou a rychlou kontrolou při další návštěvě. Slouží k prohlížení, ne k vytyčování.
keywords: ar, rozšířená realita, telefon, android, chrome, webxr, na stavbě, stavba, kamera, plná velikost, rentgen, zarovnání, zarovnat, seřídit, kontrola, znovu zkontrolovat, arcore
from: 0f43b50b
---

{{ui:View on site (AR, phone)}} v nabídce {{ui:Views}} zobrazí model ve skutečné velikosti nad obrazem kamery telefonu. Funguje na **telefonu s Androidem a Chrome**, na zabezpečené stránce (https), tam, kde telefon AR podporuje. Na iPhonu nebo iPadu, na počítači nebo v aplikaci pro Android, která jen zobrazuje webovou stránku, položka řekne, proč nemůže začít; použijte tam 3D pohled, nebo otevřete tuto stránku v Chrome na telefonu.

**Telefon slouží k prohlížení.** Nic neměřte, nevytyčujte ani neřežte podle toho, co ukazuje obrazovka: telefon při chůzi driftuje a chyba ukazování roste se vzdáleností od dvou bodů, podle kterých jste zarovnali (několik centimetrů poblíž nich, víc dál). Nic tady nemá geodetickou přesnost.

## Zarovnání modelu

1. Otevřete model v telefonu a zvolte {{ui:View on site (AR, phone)}}. Povolte přístup ke kameře.
2. Panel dole pojmenuje první bod (rohový bod modelu u země). Postavte se tam na stavbě, zamiřte zelený kroužek na zem a klepněte na {{ui:Place point}}.
3. Dojděte ke druhému bodu, aspoň půl metru daleko (čím dál, tím lepší přesnost), a udělejte totéž.
4. Model se objeví v plné velikosti, natočený a posunutý tak, aby seděl na obě místa. Panel ukáže, jak dobře se oba body shodují.

{{ui:Start over}} body vymaže. Zarovnání se ukládá do souboru modelu, takže až příště model na stavbě otevřete, začne už zarovnaný.

## Rentgenová čočka

{{ui:X-ray lens}} ukáže celý model uvnitř kvádru před telefonem (asi metr a půl široký a tři metry hluboký) a jinde jen slabý přízrak, takže můžete vidět, co je za zdí, aniž byste ztratili skutečnou zeď.

## Příští návštěva

Postavte se k prvnímu bodu, klepněte na {{ui:Re-check}} a pak na {{ui:Place point}}. Pokud je odchylka pod 5 centimetrů, zarovnání zůstane. Pokud je až půl metru, model se posune o rozdíl. Je-li větší, panel vás požádá, abyste znovu ukázali na ta dvě místa.

## Ukončení

{{ui:Leave AR}} ukončí relaci. Obraz z kamery zůstává v prohlížeči: nic se nenahrává.
