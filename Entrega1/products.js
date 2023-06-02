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

    //  TESTING
    //  console.log( `Iteración ${this.#id}` );
    //  console.log(`Chequeo codigo distinto: ${( this.products.some( p => p.code !== code) )} `);
    //  console.log(`Chequeo atributos: ${!!title} ${!!description} ${!!price} ${!!code} ${!!thumbnail} ${!!stock}`)

    if ( ( this.products.some( p => p.code !== code) ) || this.products.length === 0 ) {
            if ( !!title && !!description && !!price && !!code && !!thumbnail && !!stock ) {
                this.#id++
                this.products.push( { id: this.#id, title, description, price, thumbnail, code, stock } )
            } else {
                console.log('Algunos de los datos no posee información. Favor rectificarlo');
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
            //return filtro
            console.log(filtro)
        } else {
            console.log(`ID: ${ID} Not found`)
        }
    }
    
}

// TESTING propuesto en documento "Clase 2 - Testing de Entregable"
console.log("TESTING propuesto en documento -- Clase 2 - Testing de Entregable\n\n");

// Instancia 1 de clase definida
const instancia1 = new ProductManager()

// Listado de productos. Para este caso vacío.
console.log("Listado de productos. Para este caso vacío.\n======================================================");
instancia1.getProducts()
console.log("======================================================\n");

// Carga de producto
console.log("\nCarga de producto\n======================================================");
instancia1.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "acb123", 25)
console.log("======================================================\n");

// Listado de productos. Para este caso un único producto.
console.log("\nListado de productos\n======================================================\n");
instancia1.getProducts()
console.log("\n======================================================\n");

console.log("\nCarga producto repetido\n======================================================");
// Carga de producto repetido. Se rechaza por código repetido.
instancia1.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "acb123", 25)
console.log("======================================================\n");

// Consulta de producto por ID inexistente
console.log("\nConsulta por ID inexistente\n======================================================");
instancia1.getProductById(3)
console.log("======================================================\n");

// Consulta de producto por ID existente
console.log("\nConsulta por ID Existente\n======================================================");
instancia1.getProductById(1)
console.log("======================================================\n");


// TESTING ADICIONAL - Segunda instancia de la clase
console.log("\n\nTESTING ADICIONAL\n\n");
const instancia2 = new ProductManager()


instancia2.addProduct("", "description1", 100, "./img/imagen1.jpg", "T0001", 10)
instancia2.getProducts()
instancia2.addProduct("TEST1", "", 100, "./img/imagen1.jpg", "T0001", 10)
instancia2.getProducts()
instancia2.addProduct("TEST1", "description1", 0, "./img/imagen1.jpg", "T0001", 10)
instancia2.getProducts()
instancia2.addProduct("TEST1", "description1", 100, "", "T0001", 10)
instancia2.getProducts()
instancia2.addProduct("TEST1", "description1", 100, "./img/imagen1.jpg", "", 10)
instancia2.getProducts()
instancia2.addProduct("TEST1", "description1", 100, "./img/imagen1.jpg", "T0001", 0)
instancia2.getProducts()

// INGRESOS CORRECTOS
console.log("\n\INGRESO DE INFORMACIÓN CORRECTA\n\n");

instancia2.addProduct("TEST1", "description1", 100, "./img/imagen1.jpg", "T0001", 10)
instancia2.addProduct("TEST2", "description2", 200, "./img/imagen2.jpg", "T0002", 20)
instancia2.addProduct("TEST3", "description3", 300, "./img/imagen3.jpg", "T0003", 30)
instancia2.addProduct("TEST4", "description4", 400, "./img/imagen4.jpg", "T0004", 40)
instancia2.addProduct("TEST5", "description5", 500, "./img/imagen5.jpg", "T0005", 50)

console.log(`Listado de productos:
---------------------------------------`)
instancia2.getProducts()

console.log(`
#########################################
Filtro por ID:
---------------------------------------`)
instancia2.getProductById(3)
