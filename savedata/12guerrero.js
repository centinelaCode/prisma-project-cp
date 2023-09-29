import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

   try {
      // //! SAVE DATA municipios Guerrero
      // const result = await prisma.municipio.createMany({
      //    data:
      //    [
      //       { c_municipio: 'Acapulco de Juárez', estadoId: 12 },
      //       { c_municipio: 'Acatepec', estadoId: 12 },
      //       { c_municipio: 'Ahuacuotzingo', estadoId: 12 },
      //       { c_municipio: 'Ajuchitán del Progreso', estadoId: 12 },
      //       { c_municipio: 'Alcozauca de Guerrero', estadoId: 12 },
      //       { c_municipio: 'Alpoyeca', estadoId: 12 },
      //       { c_municipio: 'Apaxtla', estadoId: 12 },
      //       { c_municipio: 'Arcelia', estadoId: 12 },
      //       { c_municipio: 'Atenango del Río', estadoId: 12 },
      //       { c_municipio: 'Atlamajalcingo del Monte', estadoId: 12 },
      //       { c_municipio: 'Atlixtac', estadoId: 12 },
      //       { c_municipio: 'Atoyac de Álvarez', estadoId: 12 },
      //       { c_municipio: 'Ayutla de los Libres', estadoId: 12 },
      //       { c_municipio: 'Azoyú', estadoId: 12 },
      //       { c_municipio: 'Benito Juárez', estadoId: 12 },
      //       { c_municipio: 'Buena Vista de Cuéllar', estadoId: 12 },
      //       { c_municipio: 'Chilapa de Álvarez', estadoId: 12 },
      //       { c_municipio: 'Chilpancingo de los Bravos', estadoId: 12 },
      //       { c_municipio: 'Coahuayutla de José María Izazaga', estadoId: 12 },
      //       { c_municipio: 'Cochoapa el Grande', estadoId: 12 },
      //       { c_municipio: 'Cocula', estadoId: 12 },
      //       { c_municipio: 'Copala', estadoId: 12 },
      //       { c_municipio: 'Copalillo', estadoId: 12 },
      //       { c_municipio: 'Copanatoyac', estadoId: 12 },
      //       { c_municipio: 'Coyuca de Benítez', estadoId: 12 },
      //       { c_municipio: 'Coyuca de Catalán', estadoId: 12 },
      //       { c_municipio: 'Cuajinicuilapa', estadoId: 12 },
      //       { c_municipio: 'Cualác', estadoId: 12 },
      //       { c_municipio: 'Cuautepec', estadoId: 12 },
      //       { c_municipio: 'Cuentzala del Progreso', estadoId: 12 },
      //       { c_municipio: 'Cutzamala de Pizón', estadoId: 12 },
      //       { c_municipio: 'Eduardo Neri', estadoId: 12 },
      //       { c_municipio: 'Florencio Villarreal', estadoId: 12 },
      //       { c_municipio: 'General Canuto A. Neri', estadoId: 12 },
      //       { c_municipio: 'General Heliodoro Castillo', estadoId: 12 },
      //       { c_municipio: 'Huamuxtitlán', estadoId: 12 },
      //       { c_municipio: 'Huitzuco de los Figueroa', estadoId: 12 },
      //       { c_municipio: 'Iguala de la Independencia', estadoId: 12 },
      //       { c_municipio: 'Igualapa', estadoId: 12 },
      //       { c_municipio: 'Lliatenco', estadoId: 12 },
      //       { c_municipio: 'Ixcateopan de Cuauhtémoc', estadoId: 12 },
      //       { c_municipio: 'José Joaquín de Herrera', estadoId: 12 },
      //       { c_municipio: 'Juan R. Escudero', estadoId: 12 },
      //       { c_municipio: 'Juchitán', estadoId: 12 },
      //       { c_municipio: 'La Unión de Isidoro Montes de Oca', estadoId: 12 },
      //       { c_municipio: 'Las Vigas', estadoId: 12 },
      //       { c_municipio: 'Leonardo Bravo', estadoId: 12 },
      //       { c_municipio: 'Milinaltepec', estadoId: 12 },
      //       { c_municipio: 'Marquelia', estadoId: 12 },
      //       { c_municipio: 'Mártir de Cuilapan', estadoId: 12 },
      //       { c_municipio: 'Metlatónoc', estadoId: 12 },
      //       { c_municipio: 'Mochitlán', estadoId: 12 },
      //       { c_municipio: 'Ñuu Savi', estadoId: 12 },
      //       { c_municipio: 'Olinalá', estadoId: 12 },
      //       { c_municipio: 'Ometepec', estadoId: 12 },
      //       { c_municipio: 'Pedro Ascencio Alquisiras', estadoId: 12 },
      //       { c_municipio: 'Petatlán', estadoId: 12 },
      //       { c_municipio: 'Pilcaya', estadoId: 12 },
      //       { c_municipio: 'Pungarabato', estadoId: 12 },
      //       { c_municipio: 'Quechultenango', estadoId: 12 },
      //       { c_municipio: 'San Luis Acatlán', estadoId: 12 },
      //       { c_municipio: 'San Marcos', estadoId: 12 },
      //       { c_municipio: 'San Miguel Totolapan', estadoId: 12 },
      //       { c_municipio: 'San Nicolás', estadoId: 12 },
      //       { c_municipio: 'Santa Cruz del Rincón', estadoId: 12 },
      //       { c_municipio: 'Taxco de Alarcón', estadoId: 12 },
      //       { c_municipio: 'Tecoanapa', estadoId: 12 },
      //       { c_municipio: 'Técpan de Galeana', estadoId: 12 },
      //       { c_municipio: 'Teloloapan', estadoId: 12 },
      //       { c_municipio: 'Tepecoacuilco de Trujano', estadoId: 12 },
      //       { c_municipio: 'Tetipac', estadoId: 12 },
      //       { c_municipio: 'Tixtla de Guerrero', estadoId: 12 },
      //       { c_municipio: 'Tlacoachistlahuaca', estadoId: 12 },
      //       { c_municipio: 'Tlacoapa', estadoId: 12 },
      //       { c_municipio: 'Tlalchapa', estadoId: 12 },
      //       { c_municipio: 'Tlalixtaquilla de Maldonado', estadoId: 12 },
      //       { c_municipio: 'Tlapa de Confort', estadoId: 12 },
      //       { c_municipio: 'Tlapehuala', estadoId: 12 },
      //       { c_municipio: 'Xalpatláhuac', estadoId: 12 },
      //       { c_municipio: 'Xochihuehuetlán', estadoId: 12 },
      //       { c_municipio: 'Xochislahuaca', estadoId: 12 },
      //       { c_municipio: 'Zapotitlán Tablas', estadoId: 12 },
      //       { c_municipio: 'Zihuatanejo de Azueta', estadoId: 12 },
      //       { c_municipio: 'Zirándaro', estadoId: 12 },
      //       { c_municipio: 'Zitlala', estadoId: 12 },
      //    ]
      // })
      // console.log(result);

      //! GET Municipios
      // const municipios = await prisma.municipio.findMany({
      //    where: {
      //       estadoId: 12
      //    },
      //    include: {
      //       estado: true
      //    }
      // })
      // console.log(municipios)


      //! GET Estados
      // const estadosWithMun = await prisma.estado.findMany({
      //    where: {
      //       id: 12
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
