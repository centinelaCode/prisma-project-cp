import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

   try {

      //! SAVE DATA municipios Chiapas
      // const result = await prisma.municipio.createMany({
      //    data:
      //    [
      //       { c_municipio: 'Acacoyagua', estadoId: 7 },
      //       { c_municipio: 'Acala', estadoId: 7 },
      //       { c_municipio: 'Acapetahua', estadoId: 7 },
      //       { c_municipio: 'Aldama', estadoId: 7 },
      //       { c_municipio: 'Altamirano', estadoId: 7 },
      //       { c_municipio: 'Amatán', estadoId: 7 },
      //       { c_municipio: 'Amatenango de la Frontera', estadoId: 7 },
      //       { c_municipio: 'Amatenango del Valle', estadoId: 7 },
      //       { c_municipio: 'Ángel Albino Corzo', estadoId: 7 },
      //       { c_municipio: 'Arriaga', estadoId: 7 },
      //       { c_municipio: 'Bejucal del Campo', estadoId: 7 },
      //       { c_municipio: 'Bella Vista', estadoId: 7 },
      //       { c_municipio: 'Benemérito de la Américas', estadoId: 7 },
      //       { c_municipio: 'Berriozabál', estadoId: 7 },
      //       { c_municipio: 'Bochil', estadoId: 7 },
      //       { c_municipio: 'Cacahoatán', estadoId: 7 },
      //       { c_municipio: 'Capitán Luis Ángel Vidal', estadoId: 7 },
      //       { c_municipio: 'Catazajá', estadoId: 7 },
      //       { c_municipio: 'Chalchihuitán', estadoId: 7 },
      //       { c_municipio: 'Chamula', estadoId: 7 },
      //       { c_municipio: 'Chanal', estadoId: 7 },
      //       { c_municipio: 'Chapultenango', estadoId: 7 },
      //       { c_municipio: 'Chenalhó', estadoId: 7 },
      //       { c_municipio: 'Chiapa de Corzo', estadoId: 7 },
      //       { c_municipio: 'Chiapilla', estadoId: 7 },
      //       { c_municipio: 'Chicoasén', estadoId: 7 },
      //       { c_municipio: 'Chicomuselo', estadoId: 7 },
      //       { c_municipio: 'Chilón', estadoId: 7 },
      //       { c_municipio: 'Cintalapa de Figueroa', estadoId: 7 },
      //       { c_municipio: 'Coapilla', estadoId: 7 },
      //       { c_municipio: 'Comitán de Domínguez', estadoId: 7 },
      //       { c_municipio: 'Copainalá', estadoId: 7 },
      //       { c_municipio: 'El Bosque', estadoId: 7 },
      //       { c_municipio: 'El Parral', estadoId: 7 },
      //       { c_municipio: 'El Porvenir', estadoId: 7 },
      //       { c_municipio: 'Emiliano Zapata', estadoId: 7 },
      //       { c_municipio: 'Escuintla', estadoId: 7 },
      //       { c_municipio: 'Francisco de Léon', estadoId: 7 },
      //       { c_municipio: 'Frontera Comalapa', estadoId: 7 },
      //       { c_municipio: 'Frontera Hidalgo', estadoId: 7 },
      //       { c_municipio: 'Honduras de la Sierra', estadoId: 7 },
      //       { c_municipio: 'Huehuetán', estadoId: 7 },
      //       { c_municipio: 'Huitiupán', estadoId: 7 },
      //       { c_municipio: 'Huixtán', estadoId: 7 },
      //       { c_municipio: 'Huixtla', estadoId: 7 },
      //       { c_municipio: 'Ixhuatán', estadoId: 7 },
      //       { c_municipio: 'Ixtacomitán', estadoId: 7 },
      //       { c_municipio: 'Ixtapa', estadoId: 7 },
      //       { c_municipio: 'Ixtapangajoya', estadoId: 7 },
      //       { c_municipio: 'Jiquipilas', estadoId: 7 },
      //       { c_municipio: 'Jitotol', estadoId: 7 },
      //       { c_municipio: 'Juárez', estadoId: 7 },
      //       { c_municipio: 'La Concordia', estadoId: 7 },
      //       { c_municipio: 'La Grandeza', estadoId: 7 },
      //       { c_municipio: 'La Independencia', estadoId: 7 },
      //       { c_municipio: 'La Libertad', estadoId: 7 },
      //       { c_municipio: 'La Trinitaria', estadoId: 7 },
      //       { c_municipio: 'Larráinzar', estadoId: 7 },
      //       { c_municipio: 'Las Margaritas', estadoId: 7 },
      //       { c_municipio: 'Las Rosas', estadoId: 7 },
      //       { c_municipio: 'Mapastepec', estadoId: 7 },
      //       { c_municipio: 'Maravilla Tenejapa', estadoId: 7 },
      //       { c_municipio: 'Marqués de Comillas', estadoId: 7 },
      //       { c_municipio: 'Mazapa de Madero', estadoId: 7 },
      //       { c_municipio: 'Mazatán', estadoId: 7 },
      //       { c_municipio: 'Metapa', estadoId: 7 },
      //       { c_municipio: 'Mezcalapa', estadoId: 7 },
      //       { c_municipio: 'Mitontic', estadoId: 7 },
      //       { c_municipio: 'Montecristo de Guerrero', estadoId: 7 },
      //       { c_municipio: 'Motozintla', estadoId: 7 },
      //       { c_municipio: 'Nicolás Ruíz', estadoId: 7 },
      //       { c_municipio: 'Ocosingo', estadoId: 7 },
      //       { c_municipio: 'Ocotepec', estadoId: 7 },
      //       { c_municipio: 'Ocozocoautla de Espinosa', estadoId: 7 },
      //       { c_municipio: 'Ostuacán', estadoId: 7 },
      //       { c_municipio: 'Osumacinta', estadoId: 7 },
      //       { c_municipio: 'Oxchuc', estadoId: 7 },
      //       { c_municipio: 'Palenque', estadoId: 7 },
      //       { c_municipio: 'Pantelhó', estadoId: 7 },
      //       { c_municipio: 'Pantepec', estadoId: 7 },
      //       { c_municipio: 'Pichucalco', estadoId: 7 },
      //       { c_municipio: 'Pijijiapan', estadoId: 7 },
      //       { c_municipio: 'Pueblo Nuevo Solistahuacán', estadoId: 7 },
      //       { c_municipio: 'Rayón', estadoId: 7 },
      //       { c_municipio: 'Reforma', estadoId: 7 },
      //       { c_municipio: 'Rincón Chamula San Pedro', estadoId: 7 },
      //       { c_municipio: 'Sabanilla', estadoId: 7 },
      //       { c_municipio: 'Salto de Agua', estadoId: 7 },
      //       { c_municipio: 'San Andrés Duraznal', estadoId: 7 },
      //       { c_municipio: 'San Cristóbal de las Casas', estadoId: 7 },
      //       { c_municipio: 'San Fernando', estadoId: 7 },
      //       { c_municipio: 'San Juan Cancuc', estadoId: 7 },
      //       { c_municipio: 'San Lucas', estadoId: 7 },
      //       { c_municipio: 'Santiago el Pinar', estadoId: 7 },
      //       { c_municipio: 'Siltepec', estadoId: 7 },
      //       { c_municipio: 'Simojovel', estadoId: 7 },
      //       { c_municipio: 'Sitalá', estadoId: 7 },
      //       { c_municipio: 'Socoltenango', estadoId: 7 },
      //       { c_municipio: 'Solosuchiapa', estadoId: 7 },
      //       { c_municipio: 'Soyaló', estadoId: 7 },
      //       { c_municipio: 'Suchiapa', estadoId: 7 },
      //       { c_municipio: 'Suachiate', estadoId: 7 },
      //       { c_municipio: 'Sunuapa', estadoId: 7 },
      //       { c_municipio: 'Tapachula', estadoId: 7 },
      //       { c_municipio: 'Tapalapa', estadoId: 7 },
      //       { c_municipio: 'Tapilula', estadoId: 7 },
      //       { c_municipio: 'Tecpatán', estadoId: 7 },
      //       { c_municipio: 'Tenejapa', estadoId: 7 },
      //       { c_municipio: 'Teopisca', estadoId: 7 },
      //       { c_municipio: 'Tila', estadoId: 7 },
      //       { c_municipio: 'Tonalá', estadoId: 7 },
      //       { c_municipio: 'Totolapa', estadoId: 7 },
      //       { c_municipio: 'Tumbalá', estadoId: 7 },
      //       { c_municipio: 'Tuxtla Chico', estadoId: 7 },
      //       { c_municipio: 'Tuxtla Gutiérrez', estadoId: 7 },
      //       { c_municipio: 'Tuzantán', estadoId: 7 },
      //       { c_municipio: 'Tzimol', estadoId: 7 },
      //       { c_municipio: 'Unión Juárez', estadoId: 7 },
      //       { c_municipio: 'Venustiano Carranza', estadoId: 7 },
      //       { c_municipio: 'Villa Comaltitlán', estadoId: 7 },
      //       { c_municipio: 'Villa Corzo', estadoId: 7 },
      //       { c_municipio: 'Villaflores', estadoId: 7 },
      //       { c_municipio: 'Yajalón', estadoId: 7 },
      //       { c_municipio: 'Zinacatán', estadoId: 7 },
      //    ]
      // })
      // console.log(result);

      //! GET Municipios
      // const municipios = await prisma.municipio.findMany({
      //    where: {
      //       estadoId: 7
      //    },
      //    include: {
      //       estado: true
      //    }
      // })
      // console.log(municipios)


      //! GET Estados
      // const estadosWithMun = await prisma.estado.findMany({
      //    where: {
      //       id: 7
      //    },
      //    include: {
      //       municipio: true
      //    }
      // })
      // console.log(estadosWithMun[0])



   } catch (error) {
      // console.log(error.meta.cause)
      // if(error.code === 'P2025'){
      //    console.log("Se genero un error - " + error.meta.cause)
      // }

      console.log(error)
   }

}

main()
