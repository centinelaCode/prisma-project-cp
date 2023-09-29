import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

   try {

      //! SAVE DATA municipios Aguascalientes
      // await prisma.municipio.createMany({
      //    data:
      //    [
      //       { c_municipio: 'Aguascalientes', estadoId: 1 },
      //       { c_municipio: 'Asientos', estadoId: 1 },
      //       { c_municipio: 'Calvillo', estadoId: 1 },
      //       { c_municipio: 'Cosío', estadoId: 1 },
      //       { c_municipio: 'El Llano', estadoId: 1 },
      //       { c_municipio: 'Jesús María', estadoId: 1 },
      //       { c_municipio: 'Pabellón de Arteaga', estadoId: 1 },
      //       { c_municipio: 'Rincón de Romos', estadoId: 1 },
      //       { c_municipio: 'San Francisco de los Romo', estadoId: 1 },
      //       { c_municipio: 'San José de García', estadoId: 1 },
      //       { c_municipio: 'Tepezalá', estadoId: 1 },
      //    ]
      // })


      //! GET Municipios
      // const agusacalientesMunicipios = await prisma.municipio.findMany({
      //    include: {
      //       estado: true
      //    }
      // })
      // console.log(agusacalientesMunicipios)


      //! GET Estados
      const estadosWithMun = await prisma.estado.findMany({
         include: {
            municipio: true
         }
      })
      console.log(estadosWithMun[0].municipio[0])


   } catch (error) {
      // console.log(error.meta.cause)
      // if(error.code === 'P2025'){
      //    console.log("Se genero un error - " + error.meta.cause)
      // }

      console.log(error)
   }

}

main()
