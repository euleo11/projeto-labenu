const pizzaria = [
    {Sabor:'Calabresa', Descrição: 'Salgada' , Ingredientes:'Calabresa, Queijo, Molho de Tomate e Catupiry' , Preço: 40 , vegetariano: false },

    {Sabor:'Brócolis', Descrição: 'Salgada' , Ingredientes:'Brócolis, Queijo, Molho de Tomate e Catupiry' , Preço: 40 , vegetariano: true },

    {Sabor:'Frango', Descrição: 'Salgada' , Ingredientes:'Frango, Azeitona Preta, Queijo, Molho de Tomate e Catupiry' , Preço: 40 , vegetariano: false },

    {Sabor:'Palmito', Descrição: 'Salgada' , Ingredientes:'Palmito, Queijo, Molho de Tomate e Oregano' , Preço: 40 , vegetariano: true },

    {Sabor:'Ninho com Nutella', Descrição: 'Doce' , Ingredientes:'Leite Ninho, Nutella, Queijo ' , Preço: 45 , vegetariano: false },

    {Sabor:'Banana Nevada', Descrição: 'Doce' , Ingredientes:'Banana, Chocolate Branco, Queijo' , Preço: 45 , vegetariano: false }
]
console.log("Menu de pizzas:", pizzaria)

function adoroPizza(pizza){
   return (pizza[0].Preço + pizza[1].Preço + pizza[2].Preço + pizza[3].Preço + pizza[4].Preço + pizza[5].Preço)/6
}

adoroPizza(pizzaria)
console.log("Média dos preços:",adoroPizza(pizzaria))

const vegan = pizzaria[0].vegetariano && pizzaria[1].vegetariano && pizzaria[2].vegetariano && pizzaria[3].vegetariano && pizzaria[4].vegetariano; 
console.log("Todas as pizzas são vegetarianas?",vegan)

const bordas = ["Catupiry","Cream Cheese","Cheddar","Chocolate","Nutella"]
pizzaria.push("Bordas:",bordas)

// -------------FUNCTION------------

imprimeSaboresPizzaVegana(pizzaria)

function imprimeSaboresPizzaVegana(pizzas){
    const pizzasVeganas = [];

    for(let sabores of pizzas){
        if(sabores.vegetariano === true){
            pizzasVeganas.push(sabores);
            alert(`Temos sabores vegetarianos, aproveite`);
        }
    }
    
    for(let i = 0; i < pizzasVeganas.length; i++){
        console.log(`
          Sabor: ${pizzasVeganas[i].Sabor} 
          Descrição: ${pizzasVeganas[i].Descrição}
          Ingredientes:${pizzasVeganas[i].Ingredientes}
          Preço: ${pizzasVeganas[i].Preço}
          Vegetariano: ${pizzasVeganas[i].vegetariano}
        `);
    }
}
