import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

   try {
      // //! SAVE DATA municipios Guanajuato
      // const result = await prisma.municipio.createMany({
      //    data:
      //    [
      //       { c_municipio: 'Abasolo', estadoId: 11 },
      //       { c_municipio: 'Acámabaro', estadoId: 11 },
      //       { c_municipio: 'Apaseo el Alto', estadoId: 11 },
      //       { c_municipio: 'Apaseo el Grande', estadoId: 11 },
      //       { c_municipio: 'Atarjea', estadoId: 11 },
      //       { c_municipio: 'Celaya', estadoId: 11 },
      //       { c_municipio: 'Comonfort', estadoId: 11 },
      //       { c_municipio: 'Coroneo', estadoId: 11 },
      //       { c_municipio: 'Cortazar', estadoId: 11 },
      //       { c_municipio: 'Cuerámaro', estadoId: 11 },
      //       { c_municipio: 'Doctor Mora', estadoId: 11 },
      //       { c_municipio: 'Dolores Hidalgo Cuna de la Independencia Nacional', estadoId: 11 },
      //       { c_municipio: 'Guanajuato', estadoId: 11 },
      //       { c_municipio: 'Huanímaro', estadoId: 11 },
      //       { c_municipio: 'Irapuato', estadoId: 11 },
      //       { c_municipio: 'Jaral del Progreso', estadoId: 11 },
      //       { c_municipio: 'Jerécuaro', estadoId: 11 },
      //       { c_municipio: 'León', estadoId: 11 },
      //       { c_municipio: 'Manuel Doblado', estadoId: 11 },
      //       { c_municipio: 'Moroléon', estadoId: 11 },
      //       { c_municipio: 'Ocampo', estadoId: 11 },
      //       { c_municipio: 'Pénjamo', estadoId: 11 },
      //       { c_municipio: 'Pueblo Nuevo', estadoId: 11 },
      //       { c_municipio: 'Purísima del Rincón', estadoId: 11 },
      //       { c_municipio: 'Romita', estadoId: 11 },
      //       { c_municipio: 'Salamanca', estadoId: 11 },
      //       { c_municipio: 'Salvatierra', estadoId: 11 },
      //       { c_municipio: 'San Diego de la Unión', estadoId: 11 },
      //       { c_municipio: 'San Felipe', estadoId: 11 },
      //       { c_municipio: 'San Francisco del Rincón', estadoId: 11 },
      //       { c_municipio: 'San José Iturbide', estadoId: 11 },
      //       { c_municipio: 'San Luis de la Paz', estadoId: 11 },
      //       { c_municipio: 'San Miguel de Allende', estadoId: 11 },
      //       { c_municipio: 'Santa Catarina', estadoId: 11 },
      //       { c_municipio: 'San Cruz de Juventino Rosas', estadoId: 11 },
      //       { c_municipio: 'Santiago Maravatío', estadoId: 11 },
      //       { c_municipio: 'Silao de la Victoria', estadoId: 11 },
      //       { c_municipio: 'Tarandecuao', estadoId: 11 },
      //       { c_municipio: 'Tarimoro', estadoId: 11 },
      //       { c_municipio: 'Tierra Blanca', estadoId: 11 },
      //       { c_municipio: 'Uriangato', estadoId: 11 },
      //       { c_municipio: 'Valle de Santiago', estadoId: 11 },
      //       { c_municipio: 'Victoria', estadoId: 11 },
      //       { c_municipio: 'Villagrán', estadoId: 11 },
      //       { c_municipio: 'Xichú', estadoId: 11 },
      //       { c_municipio: 'Yuriria', estadoId: 11 },
      //    ]
      // })
      // console.log(result);

      //! GET Municipios
      // const municipios = await prisma.municipio.findMany({
      //    where: {
      //       estadoId: 11
      //    },
      //    include: {
      //       estado: true
      //    }
      // })
      // console.log(municipios)


      //! GET Estados
      // const estadosWithMun = await prisma.estado.findMany({
      //    where: {
      //       id: 11
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
