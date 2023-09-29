import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

   try {

      //! SAVE DATA municipios Coahuila de Zaragoza
      // const result = await prisma.municipio.createMany({
      //    data:
      //    [
      //       { c_municipio: 'Abasolo', estadoId: 5 },
      //       { c_municipio: 'Acuña', estadoId: 5 },
      //       { c_municipio: 'Allende', estadoId: 5 },
      //       { c_municipio: 'Arteaga', estadoId: 5 },
      //       { c_municipio: 'Candela', estadoId: 5 },
      //       { c_municipio: 'Castaños', estadoId: 5 },
      //       { c_municipio: 'Cuatro Ciénegas', estadoId: 5 },
      //       { c_municipio: 'Escobedo', estadoId: 5 },
      //       { c_municipio: 'Francisco I. Madero', estadoId: 5 },
      //       { c_municipio: 'Frontera', estadoId: 5 },
      //       { c_municipio: 'General Cepeda', estadoId: 5 },
      //       { c_municipio: 'Guerrero', estadoId: 5 },
      //       { c_municipio: 'Hidalgo', estadoId: 5 },
      //       { c_municipio: 'Jiménez', estadoId: 5 },
      //       { c_municipio: 'Juárez', estadoId: 5 },
      //       { c_municipio: 'Lamdrid', estadoId: 5 },
      //       { c_municipio: 'Matamoros', estadoId: 5 },
      //       { c_municipio: 'Monclova', estadoId: 5 },
      //       { c_municipio: 'Morelos', estadoId: 5 },
      //    ]
      // })
      // console.log(result);

      //! GET Municipios
      // const municipios = await prisma.municipio.findMany({
      //    where: {
      //       estadoId: 5
      //    },
      //    include: {
      //       estado: true
      //    }
      // })
      // console.log(municipios)


      //! GET Estados
      // const estadosWithMun = await prisma.estado.findMany({
      //    where: {
      //       id: 5
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
