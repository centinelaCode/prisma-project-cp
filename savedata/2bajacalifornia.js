import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

   try {

      //! SAVE DATA municipios Baja California
      // const result = await prisma.municipio.createMany({
      //    data:
      //    [
      //       { c_municipio: 'Ensenada', estadoId: 2 },
      //       { c_municipio: 'Mexicali', estadoId: 2 },
      //       { c_municipio: 'Playas de Rosarito', estadoId: 2 },
      //       { c_municipio: 'San Felipe', estadoId: 2 },
      //       { c_municipio: 'San Quintín', estadoId: 2 },
      //       { c_municipio: 'Tecate', estadoId: 2 },
      //       { c_municipio: 'Tijuana', estadoId: 2 }
      //    ]
      // })
      // console.log(result);

      //! GET Municipios
      // const municipios = await prisma.municipio.findMany({
      //    where: {
      //       estadoId: 2
      //    },
      //    include: {
      //       estado: true
      //    }
      // })
      // console.log(municipios)


      //! GET Estados
      // const estadosWithMun = await prisma.estado.findMany({
      //    where: {
      //       id: 2
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
