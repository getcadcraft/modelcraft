---
title: Hópar og einingar
summary: Haltu hlutum aðskildum, breyttu einu eintaki til að breyta þeim öllum, og notaðu spjöldin Yfirlit og Einingar.
keywords: hópur, eining, búa til hóp, búa til einingu, sundurliða, gera einstaka, yfirlit, tilvik, eintök, blokk, innfelldur, breyta hópi, staðsetja
from: 7cb925f3
---

Laus rúmfræði í ModelCraft festist saman: línur sem snertast skipta hver annarri, og fletir sem deila jaðri hreyfast saman. Það gerir teikningu á flötum mögulega, en það þýðir líka að kassi sem teiknaður er við annan kassa sameinast honum. **Hópar** og **einingar** halda hlutum aðskildum.

- **Hópur** umlykur rúmfræði svo hún virki sem einn hlutur. Ekkert utan hans getur fests við hann.
- **Eining** er hópur sem hægt er að staðsetja margoft. Sérhvert eintak deilir sama innihaldi: breyttu einu og þau breytast öll. Notaðu einingar fyrir allt sem endurtekst: glugga, súlur, skrifborð, tré.

## Búa til hóp eða einingu

1. Veldu rúmfræðina. Þrísmellur á flöt velur allan tengda hlutinn; dráttur með glugga velur allt í kassanum.
2. Ýttu á {{key:Shift+G}} fyrir hóp, eða {{key:G}} fyrir einingu. Þú getur líka smellt á {{ui:Hópur}} eða {{ui:Eining}} á tækjastikunni í hópnum {{ui:Skipuleggja}}, eða {{ui:Búa til hóp (Shift+G)}} eða {{ui:Búa til einingu (G)}} í {{ui:Upplýsingar um eind}}.

   Stöðustikan segir „Hópur#1 búinn til.“ eða „Eining#1 búin til.“, nýi hluturinn er valinn og birtist í {{ui:Yfirlit}}.

3. Til að nefna hann skaltu skrifa heiti í reitinn {{ui:Heiti}} í {{ui:Upplýsingar um eind}} og ýta á {{key:Enter}} eða smella annars staðar.

Þegar flötur er valinn fylgja jaðrar hans með. Ef ekkert er valið segir stöðustikan: „Veldu fyrst rúmfræði (dragðu glugga, eða þrísmelltu til að velja allt sem er tengt).“

Þú getur einnig sett hópa í hópa: veldu nokkra hópa og ýttu á {{key:Shift+G}}. {{ui:Yfirlit}} sýnir innfellinguna.

:::note
Lyklastafirnir passa við sjálfgefnar stillingar SketchUp: {{key:G}} býr til einingu, {{key:Shift+G}} hóp.
:::

## Breyta inni í hópi eða einingu

1. Tvísmelltu á hann (í sýninni eða í {{ui:Yfirlit}}), eða veldu hann og smelltu á {{ui:Breyta}} í {{ui:Upplýsingar um eind}}.

   Restin af líkaninu dofnar, ásarnir færast yfir á eigin ása hópsins, og {{ui:Yfirlit}} sýnir „Breytir: Líkan › Hópur#1“. Stöðustikan segir „Breytir Hópur#1. Esc eða tvísmellur utan við lokar honum.“

2. Teiknaðu, ýttu/togaðu, færðu og eyddu eins og venjulega. Allt sem þú gerir helst inni í hópnum.
3. Lokaðu honum: ýttu á {{key:Esc}} (tvisvar ef eitthvað er valið), tvísmelltu á autt svæði, eða smelltu á {{ui:Loka hópi}} í {{ui:Yfirlit}}.

Meðan eining er opin breytast öll eintök hennar um leið og þú vinnur.

## Staðsetja fleiri eintök af einingu

- Afritaðu hana með {{ui:Færa}} og {{key:Ctrl}} (sjá [Færa og afrita](topic:move-copy)). Hvert eintak er önnur staðsetning sömu einingar.
- Eða smelltu á {{ui:Staðsetja}} við hana í spjaldinu {{ui:Einingar}}, og smelltu síðan þar sem hún á að vera. Upphafspunktur hennar, neðsta horn kassans utan um það sem þú valdir þegar hún var búin til, lendir þar sem þú smellir. Verkfærið fer þá aftur í {{ui:Velja}}.

{{ui:Einingar}} sýnir hversu mörg eintök eru staðsett („4×“), og {{ui:Yfirlit}} sýnir fjöldann á eftir heitinu.

## Raða upp í Yfirlitinu

Dragðu röð í {{ui:Yfirlit}} til að breyta því hvar hún tilheyrir. Ekkert hreyfist í sýninni: hópur heldur sínum stað í líkaninu.

- **Inn í hóp:** slepptu honum á miðja röð hóps (röðin fær strikaða umgjörð). Hann fer inn í hópinn, aftast.
- **Í annarri röð:** slepptu honum á efri eða neðri jaðar raðar (lína sýnir það). Hann fer rétt fyrir eða eftir þá röð, inni í sama hópi og sú röð, þannig að þetta setur hann líka í hóp á völdum stað.
- **Út á efsta stig:** slepptu honum á fyrirsögn {{ui:Yfirlit}}. Hann fer aftast.

Hver sleppun er eitt skref: {{key:Mod+Z}} skilar henni til baka. {{key:Esc}} meðan dregið er sleppir engu. Hópur getur ekki farið inn í sjálfan sig né inn í hóp sem hann geymir. Drag er óvirkt á meðan {{ui:Finna eftir heiti}} hefur texta í sér.

:::touch
Haltu fingri á röð augnablik, og dragðu hana síðan. Hröð strokhreyfing flettir listanum í staðinn.
:::

## Gera eitt eintak öðruvísi

Veldu eintakið og smelltu á {{ui:Gera einstaka}} í {{ui:Upplýsingar um eind}} (birtist þegar einingin er staðsett oftar en einu sinni). Það eintak fær sína eigin skilgreiningu, nefnd eins og upprunalega með nýju númeri. Breyttu því án þess að snerta hin.

## Breyta hópi í einingu

Veldu hópinn og smelltu á {{ui:Búa til einingu}} í {{ui:Upplýsingar um eind}}. Hún fær nýtt heiti, til dæmis Eining#2, jafnvel þótt þú hafir nefnt hópinn; skrifaðu heitið aftur í {{ui:Heiti}}.

## Sundurliða

Veldu hóp eða einingu og smelltu á {{ui:Sundurliða}} (á tækjastikunni eða í {{ui:Upplýsingar um eind}}). Innihald hennar verður laus rúmfræði á sama stað og festist við það sem það snertir. Hópar inni í henni haldast hópar.

## Fast efni og rúmmál

Þegar þú velur hóp eða einingu sýnir {{ui:Upplýsingar um eind}} **Heilt efni: Já** ef fletir hennar lokast án bila (sérhver jaðar er deilt af nákvæmlega tveimur flötum) og engir hópar eru innfelldir í henni. Þá sýnir hún líka **rúmmálið**. Kassi, veggur með glugga skorinn í gegnum sig, og dreginn strokkur eru föst efni; kassi með eytt efri hlið er það ekki.

## Þegar síðasta eintakið hverfur

Ef þú eyðir síðasta eintaki einingar fjarlægist hún líka úr spjaldinu {{ui:Einingar}}. {{key:Mod+Z}} skilar henni.

## Gott að vita

- Afrit af **hópi** sem gerð eru með {{ui:Færa}} deila innihaldi sínu í þessari útgáfu, eins og eintök eininga gera: breyting á einu breytir hinum. Til að gera eitt sjálfstætt, smelltu á {{ui:Búa til einingu}}, og síðan {{ui:Gera einstaka}}. Sjá [Úrræðaleit](topic:troubleshooting#editing-one-group-changed-another).
- Einingar skera ekki op í veggi og límast ekki við fleti, og það er ekkert safn tilbúinna eininga. Þú býrð til þínar eigin, eða flytur þær inn.
- Innfluttar skrár koma sem hópur. Collada-skrár halda sínum eigin hópum og einingum inni í honum.
