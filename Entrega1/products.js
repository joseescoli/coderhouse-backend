class ProductManager {
    
    constructor() {
        this.products = []
    }

    #id = 0
    
    addProduct(title, description, price, thumbnail, code, stock) {
        this.title = title              // nombre del producto
        this.description = description  // descripción del producto
        this.price = price              // precio
        this.thumbnail = thumbnail      // ruta de imagen
        this.code = code                // código identificador
        this.stock = stock              // número de piezas disponibles

        //console.log( this.products.length );

    //static id = this.products.length

    if ( ( this.products.some( p => p.code !== this.code) ) || this.products.length === 0 ) {
            if ( !!title || !!description || !!price || !!code || !!thumbnail || !!stock ) {
                this.#id++
                this.products.push( { id: this.#id, title, description, price, thumbnail, code, stock } )
            }
        } else {
            console.log('¡Dato code repetido! Deberá ingresar otro.');
        }
    }

    getProducts() {
        console.log(this.products);
    }

    getProductById(ID) {
        let filtro = 0
        if ( this.products.some( p => p.id === ID) ) {
            filtro = this.products.find(p => p.id === ID)
            console.log(filtro)
        } else {
            console.log("Not found")
        }
    }
    
}

const instancia1 = new ProductManager()
instancia1.addProduct("TEST1", "description1", 100, "./img/imagen1.jpg", "T0001", 10)
instancia1.addProduct("TEST2", "description2", 200, "./img/imagen2.jpg", "T0002", 20)
instancia1.addProduct("TEST3", "description3", 300, "./img/imagen3.jpg", "T0003", 30)
instancia1.addProduct("TEST4", "description4", 400, "./img/imagen4.jpg", "T0004", 40)
instancia1.addProduct("TEST5", "description5", 500, "./img/imagen5.jpg", "T0005", 50)

console.log(`Listado de productos:
---------------------------------------`)
instancia1.getProducts()

console.log(`
#########################################
Filtro por ID:
---------------------------------------`)
instancia1.getProductById(1)