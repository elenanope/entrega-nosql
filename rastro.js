//Ejercicio B1
db.usuarios.insertMany([
  { _id: ObjectId("660000000000000000000001"), nombre: "Ana García",  email: "ana@rastro.es",   ciudad: "Valencia",  fechaAlta: new Date("2025-03-10"), favoritos: [ObjectId("670000000000000000000008")], valoracionMedia: 0, numValoraciones: 0 },
  { _id: ObjectId("660000000000000000000002"), nombre: "Luis Martín", email: "luis@rastro.es",  ciudad: "Valencia",  fechaAlta: new Date("2024-11-02"), favoritos: [], valoracionMedia: 0, numValoraciones: 0 },
  { _id: ObjectId("660000000000000000000003"), nombre: "Marta Ruiz",  email: "marta@rastro.es", ciudad: "Alicante",  fechaAlta: new Date("2025-06-21"), favoritos: [], valoracionMedia: 5, numValoraciones: 1 },
  { _id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz",   email: "hugo@rastro.es",  ciudad: "Castellón", fechaAlta: new Date("2026-01-15"), favoritos: [], valoracionMedia: 0, numValoraciones: 0 },
  { _id: ObjectId("660000000000000000000005"), nombre: "Sara López",  email: "sara@rastro.es",  ciudad: "Valencia",  fechaAlta: new Date("2026-09-30"), favoritos: [ObjectId("670000000000000000000001"), ObjectId("670000000000000000000003"), ObjectId("670000000000000000000008")], valoracionMedia: 0, numValoraciones: 0 }
])

db.anuncios.insertMany([
  { _id: ObjectId("670000000000000000000001"), titulo: "Seat Ibiza 2015", descripcion: "Siempre en garaje, ITV pasada.", precio: 6500, categoria: "Coches", estado: "DISPONIBLE", ciudad: "Valencia", fechaPublicacion: new Date("2026-10-01"), visitas: 340,
    vendedor: { id: ObjectId("660000000000000000000002"), nombre: "Luis Martín" },
    fotos: [ { url: "https://img.rastro.es/a1-1.jpg", orden: 1 }, { url: "https://img.rastro.es/a1-2.jpg", orden: 2 } ],
    atributos: { marca: "Seat", modelo: "Ibiza", anio: 2015, km: 98000, combustible: "gasolina" } },
  { _id: ObjectId("670000000000000000000002"), titulo: "Ford Focus 2012", descripcion: "Correa cambiada hace un año.", precio: 4200, categoria: "Coches", estado: "DISPONIBLE", ciudad: "Castellón", fechaPublicacion: new Date("2026-10-12"), visitas: 95,
    vendedor: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" },
    fotos: [ { url: "https://img.rastro.es/a2-1.jpg", orden: 1 } ],
    atributos: { marca: "Ford", modelo: "Focus", anio: 2012, km: 165000, combustible: "diésel" } },
  { _id: ObjectId("670000000000000000000003"), titulo: "iPhone 13 128 GB", descripcion: "Con funda y cargador.", precio: 380, categoria: "Móviles", estado: "DISPONIBLE", ciudad: "Valencia", fechaPublicacion: new Date("2026-10-20"), visitas: 512,
    vendedor: { id: ObjectId("660000000000000000000001"), nombre: "Ana García" },
    fotos: [ { url: "https://img.rastro.es/a3-1.jpg", orden: 1 }, { url: "https://img.rastro.es/a3-2.jpg", orden: 2 }, { url: "https://img.rastro.es/a3-3.jpg", orden: 3 } ],
    atributos: { marca: "Apple", modelo: "iPhone 13", almacenamientoGB: 128, bateriaPct: 87 } },
  { _id: ObjectId("670000000000000000000004"), titulo: "Samsung Galaxy A52", descripcion: "Pantalla sin rayas.", precio: 150, categoria: "Móviles", estado: "VENDIDO", ciudad: "Alicante", fechaPublicacion: new Date("2026-09-05"), visitas: 210,
    vendedor: { id: ObjectId("660000000000000000000003"), nombre: "Marta Ruiz" },
    fotos: [ { url: "https://img.rastro.es/a4-1.jpg", orden: 1 } ],
    atributos: { marca: "Samsung", modelo: "Galaxy A52", almacenamientoGB: 128, bateriaPct: 80 } },
  { _id: ObjectId("670000000000000000000005"), titulo: "Xiaomi Redmi Note 10", descripcion: "Funciona perfecto.", precio: 90, categoria: "Móviles", estado: "DISPONIBLE", ciudad: "Valencia", fechaPublicacion: new Date("2026-10-22"), visitas: 48,
    vendedor: { id: ObjectId("660000000000000000000002"), nombre: "Luis Martín" },
    fotos: [ { url: "https://img.rastro.es/a5-1.jpg", orden: 1 } ],
    atributos: { marca: "Xiaomi", modelo: "Redmi Note 10", almacenamientoGB: 64, bateriaPct: 91 } },
  { _id: ObjectId("670000000000000000000006"), titulo: "Chaqueta vaquera Levi's", descripcion: "Poco uso.", precio: 25, categoria: "Ropa", estado: "DISPONIBLE", ciudad: "Alicante", fechaPublicacion: new Date("2026-10-25"), visitas: 12,
    vendedor: { id: ObjectId("660000000000000000000003"), nombre: "Marta Ruiz" },
    fotos: [],
    atributos: { talla: "M", marca: "Levi's", genero: "unisex" } },
  { _id: ObjectId("670000000000000000000007"), titulo: "Zapatillas Nike Air", descripcion: "Talla 42, como nuevas.", precio: 40, categoria: "Ropa", estado: "RESERVADO", ciudad: "Valencia", fechaPublicacion: new Date("2026-10-18"), visitas: 77,
    vendedor: { id: ObjectId("660000000000000000000001"), nombre: "Ana García" },
    fotos: [ { url: "https://img.rastro.es/a7-1.jpg", orden: 1 } ],
    atributos: { talla: "42", marca: "Nike", genero: "hombre" } },
  { _id: ObjectId("670000000000000000000008"), titulo: "Mesa de comedor de roble", descripcion: "Para 6 personas.", precio: 120, categoria: "Muebles", estado: "DISPONIBLE", ciudad: "Castellón", fechaPublicacion: new Date("2026-10-26"), visitas: 160,
    vendedor: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" },
    fotos: [ { url: "https://img.rastro.es/a8-1.jpg", orden: 1 } ],
    atributos: { material: "roble", ancho: 160, fondo: 90, alto: 75 } }
])

db.ofertas.insertMany([
  { _id: ObjectId("680000000000000000000001"), importe: 340, estado: "PENDIENTE", fecha: new Date("2026-10-27"),
    anuncio: { id: ObjectId("670000000000000000000003"), titulo: "iPhone 13 128 GB", precio: 380 },
    comprador: { id: ObjectId("660000000000000000000005"), nombre: "Sara López" } },
  { _id: ObjectId("680000000000000000000002"), importe: 6000, estado: "RECHAZADA", fecha: new Date("2026-10-05"),
    anuncio: { id: ObjectId("670000000000000000000001"), titulo: "Seat Ibiza 2015", precio: 6500 },
    comprador: { id: ObjectId("660000000000000000000001"), nombre: "Ana García" } },
  { _id: ObjectId("680000000000000000000003"), importe: 6200, estado: "PENDIENTE", fecha: new Date("2026-10-26"),
    anuncio: { id: ObjectId("670000000000000000000001"), titulo: "Seat Ibiza 2015", precio: 6500 },
    comprador: { id: ObjectId("660000000000000000000005"), nombre: "Sara López" } },
  { _id: ObjectId("680000000000000000000004"), importe: 150, estado: "ACEPTADA", fecha: new Date("2026-09-10"),
    anuncio: { id: ObjectId("670000000000000000000004"), titulo: "Samsung Galaxy A52", precio: 150 },
    comprador: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" } },
  { _id: ObjectId("680000000000000000000005"), importe: 35, estado: "ACEPTADA", fecha: new Date("2026-10-27"),
    anuncio: { id: ObjectId("670000000000000000000007"), titulo: "Zapatillas Nike Air", precio: 40 },
    comprador: { id: ObjectId("660000000000000000000002"), nombre: "Luis Martín" } }
])

db.valoraciones.insertOne({
  anuncioId: ObjectId("670000000000000000000004"),
  autor: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" },
  valoradoId: ObjectId("660000000000000000000003"),
  estrellas: 5, comentario: "Todo perfecto", fecha: new Date("2026-09-15")
})

//Ejercicio B2
db.anuncios.insertOne({
    titulo: "Bicicleta de montaña Orbea",
    descripcion: "Revisada en taller.", 
    precio: 300, 
    categoria: "Deporte", 
    estado: "DISPONIBLE", 
    ciudad: "Castellón",
    fechaPublicacion: new Date("2026-10-27"), 
    visitas: 0,
    vendedor: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" },
    fotos: [ { url: "https://img.rastro.es/bici-1.jpg", orden: 1 } ],
    atributos: { talla: "L", tipo: "montaña", pulgadasRueda: 29}
})

db.anuncios.insertOne({
    titulo: "Google Pixel 7",
    descripcion: "Libre, con caja.", 
    precio: 260, 
    categoria: "Móviles", 
    estado: "DISPONIBLE", 
    ciudad: "Valencia",
    fechaPublicacion: new Date("2026-10-28"), 
    visitas: 0,
    vendedor: { id: ObjectId("660000000000000000000005"), nombre: "Sara López" },
    fotos: [ { url: "https://img.rastro.es/pixel-1.jpg", orden: 1 }, { url: "https://img.rastro.es/pixel-2.jpg", orden: 2 } ],
    atributos: { marca: "Google", modelo: "Pixel 7", almacenamientoGB: 128, bateriaPct: 92}
})

//Ejercicio B3
db.usuarios.createIndex({email: 1}, {unique: true})
db.valoraciones.createIndex({"autor.id": 1, anuncioId: 1 }, {unique: true})
db.anuncios.createIndex({categoria: 1, precio: 1})

db.usuarios.getIndexes()
db.valoraciones.getIndexes()
db.anuncios.getIndexes()

db.anuncios.find({ categoria: "Coches" }).sort({ precio: 1 }).explain().queryPlanner.winningPlan

//Ejercicio B4
// B4.1 Un usuario con el email de Ana
db.usuarios.insertOne({ nombre: "Ana Copia", email: "ana@rastro.es", ciudad: "Valencia", fechaAlta: new Date(), favoritos: [], valoracionMedia: 0, numValoraciones: 0 })

// B4.2 Hugo valora otra vez a Marta por el mismo anuncio
db.valoraciones.insertOne({ anuncioId: ObjectId("670000000000000000000004"), autor: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" }, valoradoId: ObjectId("660000000000000000000003"), estrellas: 1, comentario: "Cambio de opinión", fecha: new Date() })

// B4.3 Un anuncio de un vendedor que no existe
db.anuncios.insertOne({ titulo: "Prueba fantasma", precio: 10, categoria: "Libros", estado: "DISPONIBLE", ciudad: "Valencia", fechaPublicacion: new Date(), visitas: 0, vendedor: { id: ObjectId("660000000000000000000099"), nombre: "Nadie" }, fotos: [], atributos: {} })

// B4.4 Un anuncio con el precio escrito como texto
db.anuncios.insertOne({ titulo: "Prueba lámpara", precio: "75", categoria: "Muebles", estado: "DISPONIBLE", ciudad: "Valencia", fechaPublicacion: new Date(), visitas: 0, vendedor: { id: ObjectId("660000000000000000000001"), nombre: "Ana García" }, fotos: [], atributos: { material: "metal" } })
db.anuncios.find({ precio: { $lt: 100 } }, { titulo: 1, precio: 1, _id: 0 })

// B4.5 Cambiar el precio del Xiaomi sin operador
db.anuncios.updateOne({ _id: ObjectId("670000000000000000000005") }, { precio: 80 })

// B4.6 Buscar el iPhone por su id escrito como texto
db.anuncios.findOne({ _id: "670000000000000000000003" })

db.anuncios.deleteMany({ titulo: /^Prueba/ })

//Ejercicio B5
db.anuncios.find({ estado: "DISPONIBLE", ciudad: "Valencia" }, { titulo: 1, precio: 1, _id: 0 }).sort({ precio: 1 })

db.anuncios.find({ categoria: "Coches", "atributos.km": { $lt: 100000 } }, { titulo: 1, precio: 1, _id: 0, "atributos.km": 1 }).sort({ precio: 1 }) 
// o simplemente: db.anuncios.find({ categoria: "Coches", "atributos.km": { $lt: 100000 } })

db.anuncios.find({ categoria: "Móviles", "atributos.almacenamientoGB": { $gte: 128 } }, { titulo: 1, precio: 1, _id: 0, "atributos.almacenamientoGB": 1 }) 

db.anuncios.find({ precio: { $gte: 50, $lte: 400 } }, { titulo: 1, precio: 1, _id: 0, categoria: 1 })

db.anuncios.find({ titulo: /nike/i }, { titulo: 1, precio: 1, _id: 0, categoria: 1 })

db.anuncios.find({ "vendedor.id": ObjectId("660000000000000000000002")}, { titulo: 1, precio: 1, _id: 0, categoria: 1, "vendedor.nombre":1})
//es mejor buscarlo por su id en vez de su nombre porque el id no cambia y el nombre podría sí hacerlo

db.anuncios.find({fotos: {$size: 0}}, { titulo: 1, precio: 1, _id: 0, categoria: 1, fotos:1})

db.ofertas.find({estado: "PENDIENTE", "anuncio.id": ObjectId("670000000000000000000001")})

db.usuarios.find({favoritos: ObjectId("670000000000000000000008")}, {nombre: 1, _id: 0})

db.anuncios.countDocuments({estado: "VENDIDO"})

db.anuncios.find({},{titulo: 1, visitas: 1, _id: 0}).sort({visitas: -1}).limit(3)


//Ejercicio B6
db.anuncios.aggregate([{ $group: { _id: "$categoria", total: { $sum: 1 } } },{ $sort: { total: -1 } }])

db.anuncios.aggregate([{ $group: { _id: "$categoria", precioMedio: { $avg: "$precio" } } }])

db.anuncios.aggregate([{ $group: { _id: "$ciudad", total: { $sum: 1 } } }])

db.anuncios.aggregate([{ $match: {estado: "DISPONIBLE"} }, { $group: { _id: "$vendedor.nombre", total: { $sum: "$precio" } } }])

db.anuncios.aggregate([{ $group: { _id: "$categoria", total: { $sum: "$visitas" } } }, { $sort : { total: -1 } }, { $limit: 1 }])


//Ejercicio B7
db.anuncios.updateOne({ _id: ObjectId("670000000000000000000003") }, { $push: { fotos: { url: "https://img.rastro.es/a3-4.jpg", orden: 4 } } } )

db.anuncios.updateOne({ _id: ObjectId("670000000000000000000005") }, { $inc: { visitas: 1 } })

db.usuarios.updateOne({ _id: ObjectId("660000000000000000000005") }, { $pull: { favoritos: ObjectId("670000000000000000000001") } } )
db.usuarios.updateOne({ _id: ObjectId("660000000000000000000005") }, { $addToSet: { favoritos: ObjectId("670000000000000000000002") } } )

//si se corta la luz, no se llevaría a cabo la segunda instrucción, por lo que estaría desincronizado, para que esto no pase hay que usar transacciones
db.ofertas.updateOne({ _id: ObjectId("680000000000000000000003") }, { $set: { estado: "ACEPTADA" } } )
db.anuncios.updateOne({ _id: ObjectId("670000000000000000000001") }, { $set: { estado: "RESERVADO" } } )

db.anuncios.updateMany({ categoria: "Coches" }, { $mul: { precio: 0.9 } } )

db.usuarios.updateOne({ _id: ObjectId("660000000000000000000002") }, { $set: { nombre: "Luis M. Martín" } } )
db.anuncios.updateMany({ "vendedor.id": ObjectId("660000000000000000000002") }, { $set: { "vendedor.nombre": "Luis M. Martín" } } )
db.ofertas.updateMany({ "comprador.id": ObjectId("660000000000000000000002") }, { $set: { "comprador.nombre": "Luis M. Martín" } } )
