import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

   try {

      //! SAVE DATA municipios Campeche
      // const result = await prisma.municipio.createMany({
      //    data:
      //    [
      //       { c_municipio: 'Calakmul', estadoId: 4 },
      //       { c_municipio: 'Calkiní', estadoId: 4 },
      //       { c_municipio: 'Campeche', estadoId: 4 },
      //       { c_municipio: 'Candelaria', estadoId: 4 },
      //       { c_municipio: 'Carmen', estadoId: 4 },
      //       { c_municipio: 'Champotón', estadoId: 4 },
      //       { c_municipio: 'Dzitbalché', estadoId: 4 },
      //       { c_municipio: 'Escárcega', estadoId: 4 },
      //       { c_municipio: 'Hecelchakán', estadoId: 4 },
      //       { c_municipio: 'Hopelchén', estadoId: 4 },
      //       { c_municipio: 'Palizada', estadoId: 4 },
      //       { c_municipio: 'Seybaplaya', estadoId: 4 },
      //       { c_municipio: 'Tenabo', estadoId: 4 },
      //    ]
      // })
      // console.log(result);

      //! GET Municipios
      // const municipios = await prisma.municipio.findMany({
      //    where: {
      //       estadoId: 4
      //    },
      //    include: {
      //       estado: true
      //    }
      // })
      // console.log(municipios)


      //! GET Estados
      const estadosWithMun = await prisma.estado.findMany({
         where: {
            id: 4
         },
         include: {
            municipio: true
         }
      })
      console.log(estadosWithMun[0])



   } catch (error) {
      // console.log(error.meta.cause)
      // if(error.code === 'P2025'){
      //    console.log("Se genero un error - " + error.meta.cause)
      // }

      console.log(error)
   }

}

main()
