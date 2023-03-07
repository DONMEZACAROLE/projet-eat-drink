`<div class="food1">
                <div class="food2">
                    <div><img src="images/product_2.3.jpg" alt="" width="150"></div>
                    <p>Chicken Burger</p>
                </div>
                <div class="food3">
                    <p>3000 fcfa</p> <button class="btn">add to card</button>
                </div>
            </div>
            `
//affichage automatique des produits:le produit est considéré comme objet

let tab = [
    { nom: 'Chicken Burger', prix: 3000, image: 'images/product_2.3.jpg' },
    { nom: 'Sheese Burger', prix: 1500, image: 'images/product_01.1.jpg' },
    { nom: 'Sheese Burger1', prix: 1500, image: 'images/product_01.1.jpg' },
    { nom: 'Sheese Burger2', prix: 1500, image: 'images/product_01.1.jpg' },
    { nom: 'Sheese Burger3', prix: 1500, image: 'images/product_01.1.jpg' },
    { nom: 'Sheese Burger4', prix: 1500, image: 'images/product_01.1.jpg' }
]


tab.forEach(element => {

    //createElement permet de creer une nouvelle balise.
    let divProduit = document.createElement('div');
    divProduit.setAttribute('class', 'food1');//donner un attribut à une balise

    let divNouris = document.createElement('div');
    divNouris.setAttribute('class', 'food2');

    let imageProduit = document.createElement('img');
    imageProduit.setAttribute('src', element.image);
    imageProduit.setAttribute('width', '150');

    let pProduit = document.createElement('p');
    pProduit.innerHTML = element.nom// afficher le contenu de la balise creer

    let divBurger = document.createElement('div');
    divBurger.setAttribute('class', 'food3');


    let pPrix = document.createElement('p');
    pPrix.innerHTML = element.prix + ' fcfa'//afficher le contenu de la balise créee

    let bouton = document.createElement('button');
    bouton.setAttribute('class', 'btn');
    bouton.innerHTML = 'add to card'

    //ici on associt chaque enfant à son parent

    divBurger.appendChild(pPrix);
    divBurger.appendChild(bouton);
    divNouris.appendChild(imageProduit);
    divNouris.appendChild(imageProduit);
    divNouris.appendChild(pProduit);
    divProduit.appendChild(divNouris);
    divProduit.appendChild(divBurger);

    //on reccupere l'elément dans le document html donc l'identifiant est food
    let mange = document.getElementById('food');
    mange.appendChild(divProduit);


}); 
