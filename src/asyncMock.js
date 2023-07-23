const products = [
    {
        id: '1',
        name: 'Cafe en granos 250 Grs',
        price: 1000,
        category: 'Cafe',
        img: '../public/logo192.png',
        stock: 25,
        descripcion: 'Cafe Colombiano En Granos'
    },
    {
        id: '2',
        name: 'Cafetera Italiana',
        price: 1200,
        category: 'Cafeteras',
        img: '../public/logo192.png',
        stock: 25,
        descripcion: 'Cafetera Italiana'
    },
    {
        id: '3',
        name: 'Moledor de Cafe',
        price: 1000,
        category: 'Accesorios',
        img: '../public/logo192.png',
        stock: 25,
        descripcion: 'Moledor de Cafe'
    },
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