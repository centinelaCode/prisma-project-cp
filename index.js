import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/*
[
            { c_estado: 'Baja California', cp_base: '21000', total: 2619 },
            { c_estado: 'Baja California Sur', cp_base: '23000', total: 1057 },
            { c_estado: 'Campeche', cp_base: '24000', total: 1289 },
            { c_estado: 'Coahuila de Zaragoza', cp_base: '25000', total: 4463 },
            { c_estado: 'Colima', cp_base: '28000', total: 2619 },
            { c_estado: 'Chiapas', cp_base: '29000', total: 8971 },
            { c_estado: 'Chihuahua', cp_base: '31000', total: 10052 },
            { c_estado: 'Ciudad de México', cp_base: '01000', total: 1522 },
            { c_estado: 'Durango', cp_base: '34000', total: 7223 },
            { c_estado: 'Guanajuato', cp_base: '36000', total: 10172 },
            { c_estado: 'Guerrero', cp_base: '39000', total: 5060 },
            { c_estado: 'Hidalgo', cp_base: '42000', total: 6115 },
            { c_estado: 'Jalisco', cp_base: '44000', total: 6049 },
            { c_estado: 'México', cp_base: '50000', total: 8287 },
            { c_estado: 'Michoacán del Campo', cp_base: '58000', total: 10316 },
            { c_estado: 'Morelos', cp_base: '62000', total: 1820 },
            { c_estado: 'Nayarit', cp_base: '63000', total: 2014 },
            { c_estado: 'Nuevo León', cp_base: '64000', total: 5187 },
            { c_estado: 'Oaxaca', cp_base: '68000', total: 6733 },
            { c_estado: 'Puebla', cp_base: '72000', total: 5889 },
            { c_estado: 'Querétaro', cp_base: '76000', total: 3124 },
            { c_estado: 'Quintana Roo', cp_base: '77000', total: 1190 },
            { c_estado: 'San Luis Potosí', cp_base: '78000', total: 6323 },
            { c_estado: 'Sinaloa', cp_base: '80000', total: 4438 },
            { c_estado: 'Sonora', cp_base: '83000', total: 8943 },
            { c_estado: 'Tabasco', cp_base: '86000', total: 2821 },
            { c_estado: 'Tamaulipas', cp_base: '87000', total: 3442 },
            { c_estado: 'Tlaxcala', cp_base: '90000', total: 1433 },
            { c_estado: 'Veracruz de Ignacio de la Llave', cp_base: '91000', total: 10214 },
            { c_estado: 'Yucatán', cp_base: '97000', total: 1641 },
            { c_estado: 'Zacatecas', cp_base: '98000', total: 2687 },
         ]
*/


async function main() {

   try {

      //! DATA Codigos postales
      // await prisma.codigo.create({
      //    data: {
      //       cp: '20800',
      //       asentamiento: 'Unión Antorchista',
      //       tipo_asentamiento: 'Fraccionamiento',
      //       tipo_localidad: 'Rural',
      //       estadoId: 1,
      //       municipioId: 3,
      //    }
      // })



      //! DATA Estados
      // await prisma.estado.createMany({
      //    data:
      //    [
      //       { c_estado: 'Aguascalientes', cp_base: '20000', total: 1425 },
      //       { c_estado: 'Baja California', cp_base: '21000', total: 2619 },
      //       { c_estado: 'Baja California', cp_base: '21000', total: 2619 },
      //       { c_estado: 'Baja California Sur', cp_base: '23000', total: 1057 },
      //       { c_estado: 'Campeche', cp_base: '24000', total: 1289 },
      //       { c_estado: 'Coahuila de Zaragoza', cp_base: '25000', total: 4463 },
      //       { c_estado: 'Colima', cp_base: '28000', total: 2619 },
      //       { c_estado: 'Chiapas', cp_base: '29000', total: 8971 },
      //       { c_estado: 'Chihuahua', cp_base: '31000', total: 10052 },
      //       { c_estado: 'Ciudad de México', cp_base: '01000', total: 1522 },
      //       { c_estado: 'Durango', cp_base: '34000', total: 7223 },
      //       { c_estado: 'Guanajuato', cp_base: '36000', total: 10172 },
      //       { c_estado: 'Guerrero', cp_base: '39000', total: 5060 },
      //       { c_estado: 'Hidalgo', cp_base: '42000', total: 6115 },
      //       { c_estado: 'Jalisco', cp_base: '44000', total: 6049 },
      //       { c_estado: 'México', cp_base: '50000', total: 8287 },
      //       { c_estado: 'Michoacán del Campo', cp_base: '58000', total: 10316 },
      //       { c_estado: 'Morelos', cp_base: '62000', total: 1820 },
      //       { c_estado: 'Nayarit', cp_base: '63000', total: 2014 },
      //       { c_estado: 'Nuevo León', cp_base: '64000', total: 5187 },
      //       { c_estado: 'Oaxaca', cp_base: '68000', total: 6733 },
      //       { c_estado: 'Puebla', cp_base: '72000', total: 5889 },
      //       { c_estado: 'Querétaro', cp_base: '76000', total: 3124 },
      //       { c_estado: 'Quintana Roo', cp_base: '77000', total: 1190 },
      //       { c_estado: 'San Luis Potosí', cp_base: '78000', total: 6323 },
      //       { c_estado: 'Sinaloa', cp_base: '80000', total: 4438 },
      //       { c_estado: 'Sonora', cp_base: '83000', total: 8943 },
      //       { c_estado: 'Tabasco', cp_base: '86000', total: 2821 },
      //       { c_estado: 'Tamaulipas', cp_base: '87000', total: 3442 },
      //       { c_estado: 'Tlaxcala', cp_base: '90000', total: 1433 },
      //       { c_estado: 'Veracruz de Ignacio de la Llave', cp_base: '91000', total: 10214 },
      //       { c_estado: 'Yucatán', cp_base: '97000', total: 1641 },
      //       { c_estado: 'Zacatecas', cp_base: '98000', total: 2687 },
      //    ]
      // })

      //! DATA
      // await prisma.municipio.createMany({
      //    data:
      //    [
      //       { c_estado: 'Aguascalientes', cp_base: '20000', total: 1425 },
      //       { c_estado: 'Baja California', cp_base: '21000', total: 2619 },
      //       { c_estado: 'Baja California', cp_base: '21000', total: 2619 },
      //       { c_estado: 'Baja California Sur', cp_base: '23000', total: 1057 },
      //       { c_estado: 'Campeche', cp_base: '24000', total: 1289 },
      //       { c_estado: 'Coahuila de Zaragoza', cp_base: '25000', total: 4463 },
      //       { c_estado: 'Colima', cp_base: '28000', total: 2619 },
      //       { c_estado: 'Chiapas', cp_base: '29000', total: 8971 },
      //       { c_estado: 'Chihuahua', cp_base: '31000', total: 10052 },
      //       { c_estado: 'Ciudad de México', cp_base: '01000', total: 1522 },
      //       { c_estado: 'Durango', cp_base: '34000', total: 7223 },
      //       { c_estado: 'Guanajuato', cp_base: '36000', total: 10172 },
      //       { c_estado: 'Guerrero', cp_base: '39000', total: 5060 },
      //       { c_estado: 'Hidalgo', cp_base: '42000', total: 6115 },
      //       { c_estado: 'Jalisco', cp_base: '44000', total: 6049 },
      //       { c_estado: 'México', cp_base: '50000', total: 8287 },
      //       { c_estado: 'Michoacán del Campo', cp_base: '58000', total: 10316 },
      //       { c_estado: 'Morelos', cp_base: '62000', total: 1820 },
      //       { c_estado: 'Nayarit', cp_base: '63000', total: 2014 },
      //       { c_estado: 'Nuevo León', cp_base: '64000', total: 5187 },
      //       { c_estado: 'Oaxaca', cp_base: '68000', total: 6733 },
      //       { c_estado: 'Puebla', cp_base: '72000', total: 5889 },
      //       { c_estado: 'Querétaro', cp_base: '76000', total: 3124 },
      //       { c_estado: 'Quintana Roo', cp_base: '77000', total: 1190 },
      //       { c_estado: 'San Luis Potosí', cp_base: '78000', total: 6323 },
      //       { c_estado: 'Sinaloa', cp_base: '80000', total: 4438 },
      //       { c_estado: 'Sonora', cp_base: '83000', total: 8943 },
      //       { c_estado: 'Tabasco', cp_base: '86000', total: 2821 },
      //       { c_estado: 'Tamaulipas', cp_base: '87000', total: 3442 },
      //       { c_estado: 'Tlaxcala', cp_base: '90000', total: 1433 },
      //       { c_estado: 'Veracruz de Ignacio de la Llave', cp_base: '91000', total: 10214 },
      //       { c_estado: 'Yucatán', cp_base: '97000', total: 1641 },
      //       { c_estado: 'Zacatecas', cp_base: '98000', total: 2687 },
      //    ]
      // })


      //! Get all Users (findMany)
      // const users = await prisma.user.findMany()
      // console.log(users)
      // users.map(user => {
      //    console.log(`${user.id} - ${user.name}`)
      // })


      //! Get one User (findFirst)
      // const user = await prisma.user.findFirst({
      //    // where: {
      //    //    id: 2
      //    // }

      //    where: {
      //       OR: [
      //          { id: 10 },
      //          { email: 'maria@gmail.com' },
      //       ]
      //    }
      // })
      // console.log(user)


      //! Delete User (delete and deleteMany)
      // const userDelete = await prisma.user.delete({
      //    where: {
      //       id: 2
      //    }
      // })
      // console.log(userDelete)


      //! Update User (update and updateMany)
      // const userUpdate = await prisma.user.update({
      //    where: {
      //       id: 5
      //    },
      //    data: {
      //       lastname: "Perez",
      //       name: "Maria"
      //    }
      // })
      // console.log(userUpdate)

      // const result = await prisma.user.updateMany({
      //    where: {
      //       name: 'Martha'
      //    },
      //    data: {
      //       lastname: "Mendez",
      //    }
      // })
      // console.log(result)


      //! upset
      // const userUpSet = await prisma.user.upsert({
      //    where: {
      //       //? Busca el usuario con email="joe@gmail.com"
      //       email: "joe123@gmail.com"
      //    },
      //    create: {
      //       //? Si no lo encuerntra lo crea
      //       name: "Joe007",
      //       email: "joe007@correo.com"
      //    },
      //    update: {
      //       //? Pero si lo encuentra lo actualiza
      //       lastname: "update lastname"
      //    }
      // })
      // console.log(userUpSet)


      //! creando datos en tablas relacionadas
      // creamos un nuevo usario
      // const newUser = await prisma.user.create({
      //    data: {
      //       name: "Tonny",
      //       email: "kuko07@correo.com"
      //    }
      // })

      // console.log(newUser)

      // // creamos un post que estara conectado al nueUser
      // const newPost = await prisma.post.create({
      //    data: {
      //       title: "Fourteen Post ",
      //       content: "Contente of my fourteen post... ",
      //       // authorId: newUser.id
      //       author: {
      //          connect: {
      //             id: newUser.id
      //          }
      //       }
      //    }
      // })
      // console.log(newPost)


      //! Creando post desde la creación de user
      // const newUserWithPost = await prisma.user.create({
      //    data: {
      //       name: "Cameron",
      //       email: "cameron@gmail.com",
      //       post: {
      //          create: {
      //             title: "Tutorial Primsa ORM for javascript",
      //             content: "Tutorial en youtube que explica como empezar a usar este orm...."
      //          }
      //       }
      //    }
      // })
      // console.log(newUserWithPost)

      //! Incluir en User los post que han realizado
      // const users = await prisma.user.findMany({
      //    include: {
      //       post: true
      //    }
      // })
      // console.log(users)

      // users.forEach(user => {
      //    console.log(`--------------`)
      //    console.log(`User: ${user.name}`)
      //    console.log(`Email: ${user.email}`)

      //    if(user.post.length > 0) {
      //       user.post.forEach((post, i)=> {
      //          console.log(`${i}: ${post.title} - ${post.content}`)
      //       })
      //    console.log(`<============================================================>`)
      //    } else {
      //       console.log('========== NO Posts ==============')
      //    }
      // })

      //! Incluir en los post la data de cada user que lo realizo
      // const codigos_all = await prisma.codigo.findMany({
      //    where: {
      //       id: 1
      //    },
      //    include: {
      //       estado: true,
      //       municipio: true,
      //    }
      // })
      // console.log(codigos_all)

       //! Incluir en los post la data de cada user que lo realizo
       const cp_with_select = await prisma.codigo.findMany({
         select: {
            cp: true,
            asentamiento:true,
            tipo_asentamiento: true,
            tipo_localidad: true,
            estado: {
               select: {
                  id: true,
                  c_estado: true,
               }
            },
            municipio:{
               select: {
                  id: true,
                  c_municipio: true,
               }
            }
         },
         // where: {
         //    id: 1
         // },
      })
      console.log(cp_with_select)




   } catch (error) {
      // console.log(error.meta.cause)
      // if(error.code === 'P2025'){
      //    console.log("Se genero un error - " + error.meta.cause)
      // }

      console.log(error)
   }

}

main()
