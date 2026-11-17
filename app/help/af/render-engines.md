---
title: Kies watter program die prent teken
summary: Die Enjin-keuse in die Weergee-dialoog: ons eie twee enjins, ander programme in CadCraft Studio, en wat die web in plaas daarvan doen.
keywords: weergee, enjin, renderer, renderenjin, inprop, plugin, studio, eksterne program, geteken deur, wagrij, byvoeging-enjin
from: be4b056a
---

{{ui:Weergee 'n prent…}} het 'n **Enjin**-keuse bokant Modus. Ons eie twee enjins is altyd daar en werk oral; byvoegings kan meer byvoeg, en in CadCraft Studio hou die lys ook die programme wat die toneel oorneem.

| Enjin | Wat dit doen | Waar |
|---|---|---|
| Ingebou: Vinnig | Die vinnige stilbeeld: dagligt, sagte skaduwees, glas- en metaalvoorkomste, in sekondes | Die blaaier en Studio |
| Ingebou: Padtraseerder | Lig wat tussen oppervlaktes terugkaats, op jou grafiese kaart of verwerker, die weergee-wagrij en die ander rekenaars op jou netwerk | Die blaaier en Studio |
| 'n Byvoeging se enjin | Dit teken en gee die prent terug: sien [Teken die prent met 'n ander program](topic:render-other-program) | Die blaaier ('n enjin in JavaScript) of Studio ('n enjin wat 'n program laat loop) |
| 'n Program wat die toneel oorneem | Studio sit die toneel in sy vouer en hou dit gelyk | Studio |
| Maak oop in … | Stoor die toneel en open dit in 'n program; niks kom terug nie: sien [Open die toneel in 'n ander program](topic:render-open-in) | Die web stoor die lêer |

## Hoe die keuse werk

- As jy Vinnig of die Padtraseerder kies, verander Modus saam daarmee, en andersom. Niks anders aan die dialoog verander vir mense wat nooit 'n ander enjin gebruik nie.
- 'n Enjin wat nie beskikbaar is nie, bly in die lys met die rede ("not found", "needs a newer version"); jy kan dit nie kies nie. In die blaaier wys 'n enjin wat net in Studio loop "saves a file": {{ui:Weergee 'n prent…}} stoor dan die toneel en sy instellings in 'n lêer wat jy na daardie program neem.
- Die keuse word saam met die lêer se weergee-instellings gestoor, en die enjin wat jy laas gekies het, is die beginenjin vir lêers wat nie hul eie keuse het nie.
- 'n Prent van 'n ander program sê watter program dit geteken het en sy weergawe, in die dialoog en in die weergee-wagrij. Die beloftes op die [Weergee](topic:render)-bladsy dek slegs **ons eie** enjins: 'n ander program belig, toon en monster op sy eie manier, so twee prente van een toneel lyk eenders in kamera, son, lampe en beligting, nie piksel vir piksel nie.

## Wat elke enjin kry

Die toneel gaan na 'n ander program as 'n **pakket**: die model as 'n USD-lêer (dieselfde lêer wat [Stoor as USD](topic:usd) skryf), en 'n instellingslêer wat hou wat 'n USD-invoerder nie betroubaar kan hanteer nie: die presiese materiaalwaardes, die lampe wat aan is met hul krag en ligprofiele, die son, die lug, die beligting en die kamera soos die dialoog dit sou teken. Niks word êrens opgelaai nie.

## Die weergee-wagrij

'n Prent of animasie vir 'n ander program kan in [die weergee-wagrij](topic:render#the-render-queue) wag soos ons eie; die taak onthou vir watter enjin dit is. 'n Animasie gaan in een keer na die program.
