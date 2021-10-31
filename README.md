# Jeux-de-la-vie

jeux de la vie avec automate cellulaire imaginé par John Horton Conway
Regle: chaue cellule estevaluer en vie(noir) ou  morte (blanche) tour par tour.

À chaque étape, l’évolution d’une cellule est entièrement déterminée par l’état de ses huit voisines de la façon suivante :

+ une cellule morte possédant exactement trois voisines vivantes devient vivante (elle naît) ;
+ une cellule vivante possédant deux ou trois voisines vivantes le reste, sinon elle meurt.


## Fonction grille

Genere une grille de de taille definie par l'utilisateur
L'utilisateur peux modifier les cellules pour changer le status vivante/morte.
Cette fonction est bloquee pendant les tours d'evaluation.

## Evaluation tour

Utilisateur fixe le nombre de tours et peux lancer levaluation des cellule tour par tour. un bouton stop arrete le prossesus si l'utilisateur le desir.

A chaque tour les cellules sont evalue individuellenemt
