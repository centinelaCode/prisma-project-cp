import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

   try {

      //! SAVE DATA municipios Colima
      // const result = await prisma.municipio.createMany({
      //    data:
      //    [
      //       { c_municipio: 'Armería', estadoId: 6 },
      //       { c_municipio: 'Colima', estadoId: 6 },
      //       { c_municipio: 'Comala', estadoId: 6 },
      //       { c_municipio: 'Coquimatlán', estadoId: 6 },
      //       { c_municipio: 'Cuauhtémoc', estadoId: 6 },
      //       { c_municipio: 'Ixtlahuacán', estadoId: 6 },
      //       { c_municipio: 'Manzanillo', estadoId: 6 },
      //       { c_municipio: 'Minatitlán', estadoId: 6 },
      //       { c_municipio: 'Tecomán', estadoId: 6 },
      //       { c_municipio: 'Villa de Álvarez', estadoId: 6 },
      //    ]
      // })
      // console.log(result);

      //! GET Municipios
      // const municipios = await prisma.municipio.findMany({
      //    where: {
      //       estadoId: 6
      //    },
      //    include: {
      //       estado: true
      //    }
      // })
      // console.log(municipios)


      //! GET Estados
      // const estadosWithMun = await prisma.estado.findMany({
      //    where: {
      //       id: 6
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
