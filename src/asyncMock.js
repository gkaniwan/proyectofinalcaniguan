const products = [
    { id: '1', name: 'Cafe en granos 250 Grs', price: 1000, category: 'Cafe', img: '../img/cafe250grs.png', stock: 25, descripcion: 'Cafe Colombiano En Granos'},
    { id: '2', name: "Cafe En Granos 500Grs", price: 2000, category: 'Cafe', img: "../img/cafe250grs.png", stock: 25, descripcion: 'Cafe Colombiano En Granos'},
    { id: '3', name: "Cafe En Granos 1Kg", price: 3500, category: 'Cafe', img: "../img/cafe250grs.png", stock: 25, descripcion: 'Cafe Colombiano En Granos'},
    { id: '4', name: "Cafe Molido 250Grs", price: 1200, category: 'Cafe', img: "../img/cafeMolido.png", stock: 25, descripcion: 'Cafe Colombiano En Granos'},
    { id: '5', name: "Cafe Molido 500Grs", price: 2200, category: 'Cafe', img: "../img/cafeMolido.png", stock: 25, descripcion: 'Cafe Colombiano En Granos'},
    { id: '6', name: "Cafetera Italiana", price: 10000, category: 'Cafeteras', img: "../img/cafeteraItaliana.png", stock: 10, descripcion: 'Cafetera'},
    { id: '7', name: "Cafetera Francesa", price: 12000, category: 'Cafeteras', img: "../img/cafeteraFrancesa.png", stock: 10, descripcion: 'Cafetera'},
    { id: '8', name: "Cafetera express", price: 15000, category: 'Accesorios', img: "../img/cafeteraExpreso.png", stock: 5, descripcion: 'Cafetera expresso'},
    
]

export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            },500)
        })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosCategoria = products.filter(prod => prod.category === categoryId)
            resolve(productosCategoria)
        }, 500)
    })
}