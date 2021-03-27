$(document).ready( function(){
    $('#datatable').DataTable({
        data: data,
        columnDefs: [
            {
                targets: -1,
                className: 'row-border'
               
            }
          ]
/* dt-body-right stripe hover row-border order-column */
    });
})

var data = [
    [
      "simon esteban gomez",
      "45896574",
      "s.gomez@calificame.edu.co",
    ],
    [
      "Lucia Vargas",
      "1548563952",
      "l.vargas@calificame.edu.co",
    ],
    [
      "Miguel Antonio Castro",
      "8033456",
      "m.castro@calificame.edu.co",
    ],
    [
      "Paola Gómez",
      "1030478521",
      "p.gomez@calificame.edu.co",
    ],
    [
      "Isabella Perez",
      "1112458796",
      "i.perez@calificame.edu.co",
    ],
    [
      "Flor Marina Angarita",
      "19452368",
      "f.angarita@calificame.edu.co",
    ],
    [
      "Jose Antonio Angarita",
      "9045236",
      "j.angarita@calificame.edu.co",
    ],
    [
      "Giovanny Angarita",
      "1035478521",
      "g.angarita@calificame.edu.co",
    ],
    [
      "Karen Natalia Parra",
      "1352478965",
      "k.parra@calificame.edu.co",
    ],
    [
      "Ginna Cabrera",
      "145302789",
      "g.cabrera@calificame.edu.co",
    ],
    [
        "Negrito Gómez",
        "452145789",
        "ngomez@calificame.edu.co"
    ],
    [
        "Mirringo Gómez",
        "145302789",    
        "n.gómez@calificame.edu.co"
    ],
    [
        "Kevin Florez Lara",
        "45289657",
        "k.lara@calificame.edu.co"
    ],
    [
        "Horacio Castro Forero",
        "45214587",
        "h.forero@calificame.edu.co"
    ],
    [
        "Ingrid Castellanos",
        "4635978512",
        "i.castellanos@calificame.edu.co"
    ],
    [
        "Diana Angarita",
        "563699857",
        "d.angarita@calificame.edu.co"
    ],
    [
        "Sara Toledo",
        "52688555",
        "s.toledo@calificame.edu.co"
    ],
    [
        "Carla Jimenez",
        "5632588",
        "c.jimenez@calificame.edu.co"
    ],
    [
        "Sandra Casallas",
        "4589652587",
        "s.casallas@calificame.edu.co"
    ],
    [
        "Margarita Fuentes",
        "4523669745",
        "m.fuentes@calificame.edu.co"
    ],
  ]