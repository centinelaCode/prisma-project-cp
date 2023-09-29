import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

   try {

      //! SAVE DATA municipios Baja California Sur
      // const result = await prisma.municipio.createMany({
      //    data:
      //    [
      //       { c_municipio: 'Comondú', estadoId: 3 },
      //       { c_municipio: 'La paz', estadoId: 3 },
      //       { c_municipio: 'Loreto', estadoId: 3 },
      //       { c_municipio: 'Los Cabos', estadoId: 3 },
      //       { c_municipio: 'Mulegé', estadoId: 3 },
      //    ]
      // })
      // console.log(result);

      //! GET Municipios
      // const municipios = await prisma.municipio.findMany({
      //    where: {
      //       estadoId: 3
      //    },
      //    include: {
      //       estado: true
      //    }
      // })
      // console.log(municipios)


      //! GET Estados
      // const estadosWithMun = await prisma.estado.findMany({
      //    where: {
      //       id: 3
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
