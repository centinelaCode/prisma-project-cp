import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

   try {
      // //! SAVE DATA municipios Chihuahua
      // const result = await prisma.municipio.createMany({
      //    data:
      //    [
      //       { c_municipio: 'Ahumada', estadoId: 8 },
      //       { c_municipio: 'Aldama', estadoId: 8 },
      //       { c_municipio: 'Allende', estadoId: 8 },
      //       { c_municipio: 'Aquiles Serdán', estadoId: 8 },
      //       { c_municipio: 'Ascensión', estadoId: 8 },
      //       { c_municipio: 'Bachíniva', estadoId: 8 },
      //       { c_municipio: 'Balleza', estadoId: 8 },
      //       { c_municipio: 'Batopilas de Manuel Gómez Morín', estadoId: 8 },
      //       { c_municipio: 'Bocoyna', estadoId: 8 },
      //       { c_municipio: 'Buenaventura', estadoId: 8 },
      //       { c_municipio: 'Camargo', estadoId: 8 },
      //       { c_municipio: 'Carichí', estadoId: 8 },
      //       { c_municipio: 'Casas Grandes', estadoId: 8 },
      //       { c_municipio: 'Chihuahua', estadoId: 8 },
      //       { c_municipio: 'Chínipas', estadoId: 8 },
      //       { c_municipio: 'Coronado', estadoId: 8 },
      //       { c_municipio: 'Coyame del Sotol', estadoId: 8 },
      //       { c_municipio: 'Cuauhtémoc', estadoId: 8 },
      //       { c_municipio: 'Cusihuiriachi', estadoId: 8 },
      //       { c_municipio: 'Delicias', estadoId: 8 },
      //       { c_municipio: 'Dr. Belisario Dominguez', estadoId: 8 },
      //       { c_municipio: 'El Tule', estadoId: 8 },
      //       { c_municipio: 'Galeana', estadoId: 8 },
      //       { c_municipio: 'Gómez Farias', estadoId: 8 },
      //       { c_municipio: 'Gran Morelos', estadoId: 8 },
      //       { c_municipio: 'Guachochi', estadoId: 8 },
      //       { c_municipio: 'Guadalupe', estadoId: 8 },
      //       { c_municipio: 'Guadalupe y Calvo', estadoId: 8 },
      //       { c_municipio: 'Guazapares', estadoId: 8 },
      //       { c_municipio: 'Guerrero', estadoId: 8 },
      //       { c_municipio: 'Hidalgo del Parral', estadoId: 8 },
      //       { c_municipio: 'Huejotitán', estadoId: 8 },
      //       { c_municipio: 'Ignacio Zaragoza', estadoId: 8 },
      //       { c_municipio: 'Janos', estadoId: 8 },
      //       { c_municipio: 'Jiménez', estadoId: 8 },
      //       { c_municipio: 'Juárez', estadoId: 8 },
      //       { c_municipio: 'Julimez', estadoId: 8 },
      //       { c_municipio: 'La Cruz', estadoId: 8 },
      //       { c_municipio: 'López', estadoId: 8 },
      //       { c_municipio: 'Madera', estadoId: 8 },
      //       { c_municipio: 'Maguarichi', estadoId: 8 },
      //       { c_municipio: 'Manuel Benavides', estadoId: 8 },
      //       { c_municipio: 'Matachí', estadoId: 8 },
      //       { c_municipio: 'Matamoros', estadoId: 8 },
      //       { c_municipio: 'Meoquí', estadoId: 8 },
      //       { c_municipio: 'Morelos', estadoId: 8 },
      //       { c_municipio: 'Moris', estadoId: 8 },
      //       { c_municipio: 'Namiquipa', estadoId: 8 },
      //       { c_municipio: 'Nonoava', estadoId: 8 },
      //       { c_municipio: 'Nuevo Casas Grandes', estadoId: 8 },
      //       { c_municipio: 'Ocampo', estadoId: 8 },
      //       { c_municipio: 'Ojinaga', estadoId: 8 },
      //       { c_municipio: 'Praxedis G. Guerrero', estadoId: 8 },
      //       { c_municipio: 'Riva Palacio', estadoId: 8 },
      //       { c_municipio: 'Rosales', estadoId: 8 },
      //       { c_municipio: 'Rosario', estadoId: 8 },
      //       { c_municipio: 'San Francisco de Borja', estadoId: 8 },
      //       { c_municipio: 'San Francisco de Conchos', estadoId: 8 },
      //       { c_municipio: 'San Francisco del Oro', estadoId: 8 },
      //       { c_municipio: 'Santa Bárbara', estadoId: 8 },
      //       { c_municipio: 'Santa Isabel', estadoId: 8 },
      //       { c_municipio: 'Satevó', estadoId: 8 },
      //       { c_municipio: 'Saucillo', estadoId: 8 },
      //       { c_municipio: 'Temósachic', estadoId: 8 },
      //       { c_municipio: 'Urique', estadoId: 8 },
      //       { c_municipio: 'Urachi', estadoId: 8 },
      //       { c_municipio: 'Valle de Zaragoza', estadoId: 8 },
      //    ]
      // })
      // console.log(result);

      //! GET Municipios
      // const municipios = await prisma.municipio.findMany({
      //    where: {
      //       estadoId: 8
      //    },
      //    include: {
      //       estado: true
      //    }
      // })
      // console.log(municipios)


      //! GET Estados
      // const estadosWithMun = await prisma.estado.findMany({
      //    where: {
      //       id: 8
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
