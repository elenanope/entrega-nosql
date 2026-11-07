<h1>Ejercicio A1</h1>

1. tabla anuncios:
  - La tabla anuncios debería de tener 13 columnas totales:
      - Anuncio
      - Categoría
      - Marca
      - Modelo
      - Año
      - Kilometraje
      - Combustible
      - Almacenamiento
      - Batería
      - Talla
      - Material
      - Dimensiones
      - Género

2. En la fila de la chaqueta quedarían 8 columnas en NULL
3. Si se añadiera una categoría Deporte, haría falta añadir dos columnas más en la base de datos: tipo (tipo de bici) y medidas_rueda (pulgadas de rueda)
4. Si hubiera una tabla por categoría haría falta utilizar 3 JOIN para listar todos los anuncios de Valencia (4 si contamos la hipotética categoría Deporte)

5.
``` javascript
    { titulo: "iPhone 13", categoria: "Móviles", precio: 380,
      atributos: { marca: "Apple", modelo: "iPhone 13", almacenamientoGB: 128, bateriaPct: 87 } }

    { titulo: "Mesa de comedor", categoria: "Muebles", precio: 350,
      atributos: { material: "roble", medidas: "160 x 90 x 75 cm" } }
```
<br>

---

<h1>Ejercicio A2</h1>

1. No embebemos el usuario completo dentro de anuncio porque:

    - Luis puede tener varios anuncios, así la información de usuario se tendría que repetir en cada anuncio si queremos que se muestre algún dato suyo (y si por ejemplo Luis quiere hacer una oferta a alguien, también será necesario que se muestren datos del usuario, por lo que, de nuevo, haría falta repetirlo)

    - Y, por esta misma razón, si alguno de los datos de Luis cambiara, haría falta cambiar cada uno de los sitios en los que hemos repetido la información

2. Copiamos el nombre del vendedor y no el email o su ciudad porque esos datos los podremos consultar si accedemos a su perfil, en el anuncio no son necesarios, además de que su nombre muy rara vez cambiará, mientras que no podemos decir lo mismo de los otros datos, se debe copiar lo imprescindible

3. Si Luis cambia su nombre, habría que actualizar cada uno de sus anuncios (además de cualquier otro documento que también haya desnormalizado su nombre)

4. En el gimnasio de SQL, para mostrar el nombre del monitor de cada clase se tenía que hacer un JOIN, uniendo dos tablas a través de claves foráneas y los ids. Aquí sin embargo, la información ya la tenemos en cada anuncio

<br>

---

<h1>Ejercicio A3</h1>

1. Se crearía una colección aparte llamada ofertas, ya que puede haber muchas de estas y si el comprador quiere ver sus ofertas no será necesario recorrer cada anuncio buscando sus posibles ofertas

2. y 3. colección ofertas
``` javascript
{
  anuncio:{
    id: ObjectId("670000000000000000000003"), 
    titulo: 'iPhone 13', 
    precio: 380,
  },
  importe: 340, 
  estado: 'PENDIENTE', 
  fecha: new Date('2026-12-11'),
  comprador: {
    id: ObjectId("660000000000000000000005"),
    nombre: "Sara"
  }
}
```

4. Si mañana Ana baja el precio del iPhone a 350 €, no debe cambiar el precio guardado en la oferta porque este representa el precio en el momento en el que se realizó la oferta, no es lo mismo ofrecer 340€ cuando el precio es 380€ que cuando es 350€

<br>

---

<h1>Ejercicio A4</h1>

1. Guardaría las valoraciones en una colección aparte en vez de embeberlas, ya que pueden ser muchas (y el documento podría crecer sin parar) y no son indispensables para la información del usuario

2. valoraciones
```javascript
{
  valorador:{
    id: ObjectId("660000000000000000000004"),
    nombre: "Hugo"
  },
  valorado:{
    id: ObjectId("660000000000000000000003"),
    nombre: "Marta"
  },
  estrellas: 5,
  anuncio:{
    id: ObjectId("670000000000000000000004"),
    titulo: "Samsung Galaxy A52"
  },
  comentario: "Todo perfecto"
}
```
3. Un usuario solo puede valorar una vez cada compra, por lo que en MongoDB crearía un índice único sobre valorador.id y anuncio.id

```javascript
db.valoraciones.createIndex(
  { "valorador.id": 1, "anuncio.id": 1 },
  { unique: true }
)
```

4. El perfil muestra la nota media del usuario. Calcularla cada vez recorriendo todas sus valoraciones es lento, así que para que se mostrara más rápido, guardaría valoracionMedia y numValoraciones en el documento de usuario

<br>

---

<h1>Ejercicio A5</h1>

1. Un usuario normal tendrá muchos favoritos y quizá miles usuarios pueden tener en favoritos un anuncio popular

2. Con eso, descartaría crear un array de usuarios en el anuncio, ya que si un anuncio es popular, el número de usuarios que tendría que guardar sería muchos

3. La opción que hace más fácil la pantalla «Mis favoritos» es la a), un array de anuncios en el usuario

4. Con la opción a), para saber cuántos usuarios tienen un anuncio en favoritos tendría que filtrar si algun id de los anuncios guardados de un usuario coincide con el id del anuncio a buscar, también sería recomendable poner un índice en favoritos

5. El operador que usaría para añadir un favorito sin que se repita si el usuario pulsa dos veces sería $addToSet, ya que añade un elemento al array si este aún no se encuentra en él

<br>

---

<h1>Ejercicio A6</h1>

1. Los mensajes de chat entre comprador y vendedor sobre un anuncio.

  -> Referenciaría, los mensajes pueden crecer sin límites

2. La dirección de envío de una compra.

-> La embebería en la compra, normalmente al consultar una compra quieres ver adónde se envía, además de que si cambiara en un futuro podrías consultar adónde se envió sin que la información se actualizara erróneamente

3. Las etiquetas de un anuncio (["urgente", "negociable"]).

-> Las embebería en cada anuncio, las etiquetas forman parte de las características del anuncio

4. Las categorías, si cada una tiene nombre, icono y lista de atributos obligatorios.

-> Las referenciaría, las categorías aparecen en muchos anuncios, no sería nada óptimo repetir toda la información embebida una y otra vez

5. El historial de cambios de precio de un anuncio (fecha y precio).

-> Lo embebería en el propio anuncio, es información relevante, no tiene sentido sin un anuncio y a no ser que fuera un caso muy excepcional, no crecería casi

6. Los anuncios de un usuario, dentro del documento del usuario.

-> Los referenciaría, puede tener bastantes y podemos necesitar acceder a ellos desde fuera más habitualmente

7. Furniro: las líneas de un pedido.

-> Las embebería en el propio pedido, sin pedido no tienen sentido y si cambia un producto no debe actualizarse, debería de ser una imagen del momento en el que se realizó el pedido

8. Furniro: las reseñas de un producto.

-> Las referenciaría, pueden crecer sin límites y ser miles, y no siempre las necesitas

<br>

---

<h1>Ejercicio B2.3</h1>

Aunque la categoría "Deporte" no existía antes, en MongoDB no he tenido que hacer nada, sin embargo si se tratara de PostgreSQL tendría que haber creado otra tabla con todos sus parámetros o ALTER TABLE para añadir más columnas

<br>

---

<h1>Ejercicio B4</h1>

1. Un usuario con el email de Ana

No permitirá que se inserte, ya que en usuarios, el campo "email" es un índice único
```javascript
rastro> db.usuarios.insertOne({ nombre: "Ana Copia", email: "ana@rastro.es", ciudad: "Valencia", fechaAlta: new Date(), favoritos: [], valoracionMedia: 0, numValoraciones: 0 })
| 
MongoServerError: E11000 duplicate key error collection: rastro.usuarios index: email_1 dup key: { email: "ana@rastro.es" }
```

2. Hugo valora otra vez a Marta por el mismo anuncio

Tampoco se permitirá, un autor no puede valorar dos veces el mismo anuncio (de nuevo por el índice único, en este caso de varios campos)
```javascript
rastro> db.valoraciones.insertOne({ anuncioId: ObjectId("670000000000000000000004"), autor: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" }, valoradoId: ObjectId("660000000000000000000003"), estrellas: 1, comentario: "Cambio de opinión", fecha: new Date() })
| 
MongoServerError: E11000 duplicate key error collection: rastro.valoraciones index: autor.id_1_anuncioId_1 dup key: { autor.id: ObjectId('660000000000000000000004'), anuncioId: ObjectId('670000000000000000000004') }
```

3. Un anuncio de un vendedor que no existe

Se guardará, porque MongoDB no necesita referenciar a otra tabla como en SQL, aquí solo es un dato más
```javascript
rastro> db.anuncios.insertOne({ titulo: "Prueba fantasma", precio: 10, categoria: "Libros", estado: "DISPONIBLE", ciudad: "Valencia", fechaPublicacion: new Date(), visitas: 0, vendedor: { id: ObjectId("660000000000000000000099"), nombre: "Nadie" }, fotos: [], atributos: {} })
| 
{
  acknowledged: true,
  insertedId: ObjectId('6aeca54de8699641138340f0')
}
```

4. Un anuncio con el precio escrito como texto

Se guardará ya que no hay ninguna comprobación por cada uno de los documentos
```javascript
rastro> db.anuncios.insertOne({ titulo: "Prueba lámpara", precio: "75", categoria: "Muebles", estado: "DISPONIBLE", ciudad: "Valencia", fechaPublicacion: new Date(), visitas: 0, vendedor: { id: ObjectId("660000000000000000000001"), nombre: "Ana García" }, fotos: [], atributos: { material: "metal" } })
| 
{
  acknowledged: true,
  insertedId: ObjectId('6aeca55fe8699641138340f1')
}

rastro> db.anuncios.find({ precio: { $lt: 100 } }, { titulo: 1, precio: 1, _id: 0 })
| 
[
  { titulo: 'Xiaomi Redmi Note 10', precio: 90 },
  { titulo: "Chaqueta vaquera Levi's", precio: 25 },
  { titulo: 'Zapatillas Nike Air', precio: 40 },
  { titulo: 'Prueba fantasma', precio: 10 }
]
```

5. Cambiar el precio del Xiaomi sin operador

No se cambiará porque sin el operador se borraría todo el anuncio y este sería solo precio
```javascript
rastro> db.anuncios.updateOne({ _id: ObjectId("670000000000000000000005") }, { precio: 80 })
| 
MongoInvalidArgumentError: Update document requires atomic operators
```

6. Buscar el iPhone por su id escrito como texto

No lo podrá buscar, es necesario especificar que es un ObjectId para que lo identifique como tal
```javascript
rastro> db.anuncios.findOne({ _id: "670000000000000000000003" })
null
```

7. En el gimnasio, si intentaras insertar una fila con un plan_id inexistente no te dejaría, ya que necesita poder relacionarlo (comprobando que efectivamente existe)

    En rastro es el programador quien tiene que comprobar que el vendedor exista

8. La lámpara de 75€ no saldrá porque se ha guardado como texto y al filtrar precios se busca por números

9. B4.3 y B4.4 tienen en común que puedes insertar lo que quieras en cada valor aunque la clave sea la misma que en otros objetos, como MongoDB no lo va a comprobar por ti, necesitas asegurarte de que los datos que escribes son coherentes entre si

<br>

---

<h1>Ejercicio B5.12</h1>

En la consulta 2 has filtrado por atributos.km. ¿Qué pasa con los anuncios que no tienen ese campo, como el iPhone? ¿Dan error?
No, simplemente se ignoran, solo se tienen en cuenta los que tengan esa variable

<br>

---

<h1>Ejercicio B8</h1>

1. MongoDB encaja en Rastro porque los anuncios pueden tener una categoría de varias, cada una con atributos distintos, lo cual en SQL sería un problema, teniendo que crear muchas columnas con muchos campos en NULL o muchas tablas distintas

    Además, en MongoDB se puede leer un anuncio completo sin necesidad de JOINs y consultas entre tablas

2. La parte que guardaría en SQL sería la gestión de pagos, datos más estructurados y no variables en tamaño por ejemplo

3. Las fotos van embebidas porque forman parte del anuncio, sin este no tienen mucho sentido, sin embargo las ofertas pueden crecer mucho y tienen sentido como un componente suelto y, sobre todo, si un usuario quiere ver todas sus ofertas podrá acceder a ellas a la vez que estas también se podrán visualizar en un anuncio, listando todas las ofertas hacia él 

4. La oferta guarda una copia del precio del anuncio porque es información relevante para el contexto, no es lo mismo hacer una oferta por la mitad del precio original que hacerla y después aparezca el precio rebajado a la mitad (haciendo parecer que tu oferta es igual al precio original), no tendría sentido

5. Desnormalizar es duplicar un dato en varios documentos

    Una ventaja es que no se necesitan varios movimientos para acceder a un dato (leerlo, ir a su referencia, devolverlo), sino que es fácilmente accesible.

    Una desventaja es que si el "dato original" cambia, tendrás que cambiar los datos copiados manualmente ya que no existe una referencia

6. En MongoDB el programador tendría que comprobar que no se referencia algo que no existe

