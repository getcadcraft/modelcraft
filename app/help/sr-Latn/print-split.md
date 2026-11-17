---
title: Podela velikog modela za štampu
summary: Isecite model koji je prevelik za štampač na delove koji stanu na podlogu, sa klinovima, ključevima, lastinim repovima, rupama za moždanike ili magnete i brojem spoja na obe strane, i preuzmite svaki deo i list za sklapanje u jednom zip-u.
keywords: 3D štampa, podela, kosi rez, nagnuti rez, ugaoni rez, koso, delilac, rez, prevelik, veličina podloge, radna zapremina, delovi, komponente, spojnice, klinovi, ključevi, lastin rep, moždanik, magnet, zazor, tolerancija, brojevi delova, sklop, raspregnuti prikaz, zip, stl, 3mf, licenca, USB ključ, dongl
from: ee96ba77
---

Kada je model veći od podloge štampača, **Podeli za štampu** ga seče na delove koji stanu, dodaje spojnice da se delovi poklope kad ih složite i urezuje isti broj na obe strane svakog spoja. Otvorite {{ui:Izvezi}} › {{ui:Proveri za 3D štampanje (STL ili 3MF)…}}; u dijalogu red **Alati za štampu** ima {{ui:Podeli za štampu}}. Otvara se kao kartica preko prikaza.

Radi nad onim što se štampa: izborom, ili svim što je prikazano kad ništa nije izabrano. Ono što se štampa mora biti zatvoreno čvrsto telo; ako provera nađe rupe, prvo koristite [Popravka](topic:print-tools#repair).

Radi u ModelCraft-u, na vašem računaru: nema servera licenci, nema USB ključa, ništa se ne šalje.

## Kako seći

- **Uklopi u podlogu, najmanje delova**: unesite širinu, dubinu i visinu podloge (polaze od {{ui:Podešavanja}} › ModelCraft › 3D štampač). Kartica kaže koliko delova treba i kolika je svaki; model seče na jednake delove, što manje moguće da stanu. Deo može ležati na boku u datotekama ako tako stane. Spojnice koje vire iz dela ulaze u njegovu veličinu.
- **Na mestima koja zadajete**: izaberite osu preko koje se seče i upišite gde, u milimetrima od niže strane modela, odvojeno zarezima (`100, 200` pravi tri dela).
  **Kos rez** okreće rezove za do 60° oko jedne od dve preostale ose (na primer rez preko Z nagnut oko X): svaki nagnuti rez prolazi kroz srednju liniju modela na svom mestu, daje delovima veću površinu za lepljenje i bolje skriva spoj na kosoj površini. Spojnice stoje normalno na rez.

Ravni rezova se crtaju oko modela isprekidanim linijama dok je kartica otvorena.

## Spojnice

Svako mesto gde se dva dela dodiruju dobija spojnice, postavljene same tamo gde ima najviše mesta: bar **najmanji zid** plus **zazor** plus sopstvena veličina od spoljašnje strane, i dovoljno daleko od svakog drugog reza da se dve rupe nikad ne spoje. Na dugoj strani postavljaju se dve spojnice razmaknute duž nje, da se delovi ne mogu okretati.

- **Okrugli klinovi**: klin na jednom delu (zaobljen na vrhu), rupa na drugom.
- **Kvadratni ključevi**: isto, kvadratno, pa deo može da se nasadi samo na jedan način.
- **Lastin rep**: jezičak koji klizi u žleb sa strane. Gde bi jedan kraj žleba dodirnuo drugi rez, lastin rep staje kratko i uklizava sa otvorenog kraja. Lastin rep odgovara rezovima u jednom pravcu (red kriški); u mreži koristite klinove ili moždanike.
- **Rupe za moždanike**: rupa na svakoj strani; čepovi se takođe štampaju (u zip-u).
- **Džepovi za magnete**: džep na svakoj strani za okrugli magnet prečnika i debljine koje zadate. Proverite polove pre lepljenja.
- **Ništa (lepljenje)**.

**Zazor** je razmak sa svake strane između klina i njegove rupe (za početak 0.2 mm). Tačan je onom brojem koji zadate: okrugle rupe se prave malo veće da njihove ravne strane, a ne uglovi, zadrže taj razmak. Povećajte ga ako delovi štampača ispadnu tesno.

Kad spoj nema mesta za spojnicu (tanak zid, mali dodirni deo), kartica to kaže: taj spoj slepite.

## Brojevi delova

Uz uključeno **Urezuj brojeve spojeva na obe strane**, svaki spoj dobija broj svoja dva dela, na primer `3-4`, urezan 0.6 mm duboko na obe strane, čitljiv s ispravne strane. Brojevi počinju visoki 5 mm i smanjuju se da stanu, do 2.5 mm; spoj bez mesta za broj biće naveden. Delovi se numerišu od donjeg sloja naviše.

## Pregled, preuzimanje, podela modela

1. {{ui:Preview}} seče model i kaže koliko ima delova, spojeva i spojnica, da li svaki deo prolazi proveru za 3D štampu i staje na podlogu, i navodi veličinu svakog dela. Prsten obeležava svaku spojnicu i broj u prikazu.
2. {{ui:Download the pieces (.zip)}} čuva jedan zip: datoteku za svaki deo (STL ili 3MF, kako izaberete pod **Datoteke**), svaki stoji na podlozi; čepove za moždanike; i **list za sklapanje**, sliku delova razdvojenih sa njihovim brojevima (`assembly.svg` i `assembly.png`) i spisak delova i spojeva (`assembly.txt`).
3. {{ui:Split the model}} stavlja delove u model umesto izabranih grupa ili komponenti, nazvanih kao na listu za sklapanje, u jednom koraku: {{ui:Undo}} vraća original. Potrebno je da izaberete grupe ili komponente koje treba podeliti; preuzimanje radi nad onim što se može štampati.

## Sami pomerite spojnice

Posle pregleda, **Spojnice ručno** vam omogućava da ispravite gde idu spojnice:

- {{ui:Move one}}: kliknite crveni prsten u prikazu (postaje zelen), zatim kliknite gde treba da ide na rezu.
- {{ui:Add one}}: kliknite u prikazu gde treba da bude spojnica. Ide na ravan reza koju vaš klik pogodi, između dva dela tamo.
- {{ui:Remove one}}: kliknite crveni prsten da uklonite tu spojnicu.

Svaka promena se ponovo proverava kao automatske: mesto preblizu konturi, drugi rez ili druga spojnica se ne pravi, i kartica to kaže. {{ui:Automatic again}} zaboravlja vaša mesta. Ona ostaju dok god model, izbor i rezovi ostaju isti.

Pregled ostaje dok se model, izbor ili podešavanje ne promeni; tada kartica traži da ponovo pregledate.

:::note
Svaki deo se proverava kao što bi ga proveravala provera za 3D štampu pre preuzimanja. Vaš slajser i dalje odlučuje kako se svaki deo štampa: pogledajte svaki tamo i odštampajte prvo jedan spoj da vidite kako vaš štampač podnosi zazor.
:::
