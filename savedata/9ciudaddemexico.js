import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

   try {
      // //! SAVE DATA municipios Ciudad de Mexico
      // const result = await prisma.municipio.createMany({
      //    data:
      //    [
      //       { c_municipio: 'Álvaro Obregón', estadoId: 9 },
      //       { c_municipio: 'Azcapotzalco', estadoId: 9 },
      //       { c_municipio: 'Benito Juárez', estadoId: 9 },
      //       { c_municipio: 'Coyoacán', estadoId: 9 },
      //       { c_municipio: 'Cuajimalpa de Morelos', estadoId: 9 },
      //       { c_municipio: 'Cuauhtémoc', estadoId: 9 },
      //       { c_municipio: 'Gustavo A. Madero', estadoId: 9 },
      //       { c_municipio: 'Iztacalco', estadoId: 9 },
      //       { c_municipio: 'Iztapalapa', estadoId: 9 },
      //       { c_municipio: 'La Magdalena Contreras', estadoId: 9 },
      //       { c_municipio: 'Miguel Hidalgo', estadoId: 9 },
      //       { c_municipio: 'Milpa Alta', estadoId: 9 },
      //       { c_municipio: 'Tláhuac', estadoId: 9 },
      //       { c_municipio: 'Tlalpán', estadoId: 9 },
      //       { c_municipio: 'Venustiano Carranza', estadoId: 9 },
      //       { c_municipio: 'Xochimilco', estadoId: 9 },
      //    ]
      // })
      // console.log(result);

      //! GET Municipios
      // const municipios = await prisma.municipio.findMany({
      //    where: {
      //       estadoId: 9
      //    },
      //    include: {
      //       estado: true
      //    }
      // })
      // console.log(municipios)


      //! GET Estados
      // const estadosWithMun = await prisma.estado.findMany({
      //    where: {
      //       id: 9
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
