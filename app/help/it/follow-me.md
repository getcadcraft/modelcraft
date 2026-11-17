---
title: Segui percorso: far scorrere una faccia lungo un percorso
summary: Creare tubi, cavi, corrimano, modanature e anelli facendo scorrere una faccia lungo spigoli, archi o una curva.
keywords: segui percorso, sweep, far scorrere, percorso, tubo, cavo, tubazione, corrimano, modanatura, grondaia, anello, toro, tornitura, estrudi lungo
from: ec7b3839
---

{{ui:Segui percorso}} sposta una faccia lungo un percorso e costruisce il solido che attraversa. La faccia mantiene la sua forma e resta perpendicolare al percorso, e in ogni angolo del percorso i pezzi si incontrano con un taglio a 45° pulito.

## Creare un cavo

1. Disegnare il percorso: una {{ui:Curva}} che passa per i punti attraversati dal cavo (può salire e scendere), oppure {{ui:Linea}} e {{ui:Arco}} collegati di estremo in estremo.
2. All'inizio del percorso, disegnare la sezione del cavo: un piccolo {{ui:Cerchio}} attraverso il percorso. Far iniziare il cerchio sul punto finale del percorso e ruotarlo perché sia orientato lungo il percorso; oppure disegnarlo su una faccia che attraversa il percorso lì.
3. Selezionare il percorso (un clic seleziona un'intera curva o un arco; {{key:Ctrl}}+clic aggiunge altri spigoli).
4. Fare clic su {{ui:Segui percorso}} nel gruppo {{ui:Modifica}}, poi fare clic sul cerchio.

Il tubo è un solido chiuso, con lati lisci (morbidi).

## Senza selezionare prima il percorso

Fare clic su {{ui:Segui percorso}}, fare clic sulla faccia, poi fare clic su uno spigolo qualsiasi del percorso. Il percorso è la catena di spigoli attraverso quello spigolo, fino al punto in cui si incontrano tre o più spigoli.

## Da sapere

- **Percorsi chiusi** (un cerchio, una curva chiusa, il contorno di un rettangolo) creano un anello: la faccia viene consumata e l'anello si chiude su se stesso. Disegnare un cerchio sul terreno come percorso e un piccolo cerchio in verticale attraverso di esso per una ciambella.
- **Fuori dal percorso:** la faccia non deve toccare il percorso. Un profilo disegnato accanto a un percorso scorre accanto ad esso, come una modanatura lungo la parte alta di un muro.
- **Il percorso non deve diramarsi** e deve essere una sola catena connessa. ModelCraft lo segnala quando non lo è.
- **Una faccia che giace lungo il percorso** (nello stesso piano del primo spigolo del percorso) non può essere fatta scorrere: ruotarla in modo che attraversi il percorso.
- È un solo passo di annullamento.
