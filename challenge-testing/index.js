class CarritoCompra {
    constructor(){
        this.products = []
    }

    agregarProducto(producto){
        this.products.push(producto)
    }

    calcularTotal(){
        let total = 0

        for (let item of this.products) {
            total = total + (item.price * item.quantity)
            
        }
        return total
    }

    aplicarDescuento(porcentaje){
        return this.calcularTotal() - (this.calcularTotal() * (porcentaje/100))
    }
}

module.exports = CarritoCompra