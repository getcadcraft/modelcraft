---
title: Rozdelenie hrany alebo krivky na rovnaké časti
summary: Rozdeľte úsečku na rovnaké časti alebo dajte oblúku či kružnici nový počet segmentov nástrojom Rozdeliť.
keywords: rozdeliť, rozdeliť hranu, rovnaké časti, rovnaké segmenty, rozdeliť hrany, segmenty, rozdeliť, oblúk, kružnica, body pozdĺž čiary
from: 5c3ce3ed
---

{{ui:Rozdeliť}} rozreže hranu na rovnaké časti a na každom reze vznikne roh. Rohy použite na prichytenie, na začatie úsečiek alebo na tlač a ťah častí plochy.

## Rozdelenie hrany

1. Kliknite na {{ui:Rozdeliť}} na paneli nástrojov, alebo vyberte hranu a kliknite na {{ui:Rozdeliť…}} v {{ui:Informácie o entite}}.
2. Ukážte kurzorom na hranu. Značky ukazujú, kde budú rezy: uprostred hrany vzniknú dve časti; ak sa posuniete ku koncu, časti pribudnú.
3. Kliknutím rozdeľte hranu na zobrazený počet častí. Alebo napíšte číslo, napríklad `5` (alebo `5s`, alebo `/5`), a stlačte {{key:Enter}}: hrana sa rozdelí hneď.

Časti zostanú vybraté a rozdelenie sa dá vrátiť jedným krokom späť. Plocha, ku ktorej hrana patrí, si zachová svoj tvar a získa nové rohy.

## Rozdelenie oblúka alebo kružnice

Ukážte na ľubovoľný segment oblúka alebo kružnice: rozdelí sa celý.

- Oblúk alebo kružnica, ktorých rohy nepoužíva nič iné a ležia rovno na svojej ploche, sa **nakreslia znova s týmto počtom segmentov** na skutočnom oblúku. Ich konce ostanú na mieste a zostanú jednou krivkou, takže ich môžete vybrať jedným kliknutím a zmeniť ich polomer v {{ui:Informácie o entite}}. Kružnica s 24 stranami rozdelená na 8 sa zmení na osemuholník.
- Akákoľvek iná krivka – okraj vytiahnutého valca, krivka nakreslená nástrojom {{ui:Krivka}}, oblúk s čiarami napojenými na rohy – dostane nové rohy v rovnakých dĺžkach pozdĺž seba a nič sa nepohne.

## S klávesmi modelovača

Nástroj je rovnaký aj pri klávesových skratkách modelovača (Nastavenia › ModelCraft › Klávesy alebo štýl ponuky Modelovač), kde je v ponuke {{ui:Sieť}} ako {{ui:Rozdeliť hrany}}.

## Čo treba vedieť

- Napísané čísla môžu byť od 2 do 1000; pri pohybe kurzora sa dá rozdeliť najviac na 100.
- Krivka nakreslená nástrojom {{ui:Krivka}} si zachová svoje body: po {{ui:Upraviť body}} sa nakreslí znova z nich a nové rohy zaniknú.

Pozrite aj [Kreslenie plôch úsečkami, obdĺžnikmi, kružnicami a oblúkmi](topic:draw-faces) a [Zadanie presných rozmerov do poľa hodnoty](topic:value-box).
