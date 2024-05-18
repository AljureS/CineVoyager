/*
    -carrito compra deberia ser una clase
    -carrito combr deberia ser una instancia de carrito Compra 
    -Guardar productos en lista 
    -Deberia tener un metodo llamado agregarProducto
    -Deberia tener un metodo llamado calcularTotal
    -Deberia tener un metodo llamado aplicarDescuento

    -agregarProducto deberia poder agregar un producto a la lista 
    -El metodo calcularTotal deberia poder calcular el total de la compra 
    -El metodo aplicarDescuento deberia poder aplicar un descuento al total de la compra 

 */

const CarritoCompra = require('../index')

describe ('Clase Carrito compra ', () =>{
    let carritoCompra;

    beforeEach(() =>{
        carritoCompra = new CarritoCompra()
    })

    describe('', ()=>{
        it('CarritoCompra clase', ()=>{
            expect(typeof CarritoCompra.prototype.constructor).toBe('function')
        })

        it('carritoCompra es una instancia de la clase', ()=>{
            expect(carritoCompra instanceof CarritoCompra).toBe(true)
        })

        it('Deberia agregar rodcutor en la lista', ()=>{

        })

    })

    describe('metodos de CarritoCompra', ()=>{
        const product1  ={
            id:1,
            name: 'Lapicero Axul',
            price: 1000,
            quantity: 3
        }

        const product2  ={
            id:2,
            name: 'Lapicero Rodo',
            price: 900,
            quantity: 5
        }

        it('deberia tener un metodo agregarProducto ', ()=>{
            expect(typeof carritoCompra.agregarProducto).toBe('function')
        })

        it('deberia tener un metodo calcularTotal ', ()=>{
            expect(typeof carritoCompra.calcularTotal).toBe('function')
        })

        it('deberia tener un metodo aplicarDescuento ', ()=>{
            expect(typeof carritoCompra.aplicarDescuento).toBe('function')
        })

        //Test de que si se agregen los elementos al array 
        it('agreagarProdcuto deberia agregar productos a al array products ', ()=>{
            carritoCompra.agregarProducto(product1)
            expect(carritoCompra.products).toContain(product1)
        })

        //Falta el que testea el total de la compra
        it('calcularTotal deberia darnos el total de la compra', ()=>{
            carritoCompra.agregarProducto(product1)
            carritoCompra.agregarProducto(product2)

            const totalExpect = product1.price * product1.quantity + product2.price * product2.quantity

            const total = carritoCompra.calcularTotal()
            
            expect(total).toBe(totalExpect)
        })

        //EL que testea el descuento 
        it('aplicarDescuento, aplica un descuento al total de la compra', ()=>{
            carritoCompra.agregarProducto(product1)
            carritoCompra.agregarProducto(product2)

            const subTotal = product1.price * product1.quantity + product2.price * product2.quantity

            const discount = 15

            const totalExpect = subTotal -(subTotal * (discount/100))

            const total =carritoCompra.aplicarDescuento(discount)

            expect(totalExpect).toBe(total)

        })
    })


})