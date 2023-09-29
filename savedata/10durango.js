import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

   try {
      // //! SAVE DATA municipios Durango
      // const result = await prisma.municipio.createMany({
      //    data:
      //    [
      //       { c_municipio: 'Canatlán', estadoId: 10 },
      //       { c_municipio: 'Canelas', estadoId: 10 },
      //       { c_municipio: 'Coneto de Comonfort', estadoId: 10 },
      //       { c_municipio: 'Cuencamé', estadoId: 10 },
      //       { c_municipio: 'Durango', estadoId: 10 },
      //       { c_municipio: 'El Oro', estadoId: 10 },
      //       { c_municipio: 'General Simón Bolivar', estadoId: 10 },
      //       { c_municipio: 'Gómez Palacio', estadoId: 10 },
      //       { c_municipio: 'Guadalupe Victoria', estadoId: 10 },
      //       { c_municipio: 'Guanaceví', estadoId: 10 },
      //       { c_municipio: 'Hidalgo', estadoId: 10 },
      //       { c_municipio: 'Indé', estadoId: 10 },
      //       { c_municipio: 'Lerdo', estadoId: 10 },
      //       { c_municipio: 'Mapimí', estadoId: 10 },
      //       { c_municipio: 'Mezquital', estadoId: 10 },
      //       { c_municipio: 'Nazas', estadoId: 10 },
      //       { c_municipio: 'Nombre de Dios', estadoId: 10 },
      //       { c_municipio: 'Nuevo Ideal', estadoId: 10 },
      //       { c_municipio: 'Ocampo', estadoId: 10 },
      //       { c_municipio: 'Otáez', estadoId: 10 },
      //       { c_municipio: 'Pánuco de Coronado', estadoId: 10 },
      //       { c_municipio: 'Peñon Blanco', estadoId: 10 },
      //       { c_municipio: 'Poanas', estadoId: 10 },
      //       { c_municipio: 'Pueblo Nuevo', estadoId: 10 },
      //       { c_municipio: 'Rodeo', estadoId: 10 },
      //       { c_municipio: 'San Bernardo', estadoId: 10 },
      //       { c_municipio: 'San DImas', estadoId: 10 },
      //       { c_municipio: 'San Juan de Guadalupe', estadoId: 10 },
      //       { c_municipio: 'San Juan del Río', estadoId: 10 },
      //       { c_municipio: 'San Luis del Cordero', estadoId: 10 },
      //       { c_municipio: 'San Pedro del Gallo', estadoId: 10 },
      //       { c_municipio: 'Santa Clara', estadoId: 10 },
      //       { c_municipio: 'Santiago Papasquiaro', estadoId: 10 },
      //       { c_municipio: 'Súchil', estadoId: 10 },
      //       { c_municipio: 'Tamazula', estadoId: 10 },
      //       { c_municipio: 'Tepehuanes', estadoId: 10 },
      //       { c_municipio: 'Tlahualilo', estadoId: 10 },
      //       { c_municipio: 'Topia', estadoId: 10 },
      //       { c_municipio: 'Vicente Guerrero', estadoId: 10 },
      //    ]
      // })
      // console.log(result);

      //! GET Municipios
      // const municipios = await prisma.municipio.findMany({
      //    where: {
      //       estadoId: 10
      //    },
      //    include: {
      //       estado: true
      //    }
      // })
      // console.log(municipios)


      //! GET Estados
      // const estadosWithMun = await prisma.estado.findMany({
      //    where: {
      //       id: 10
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
