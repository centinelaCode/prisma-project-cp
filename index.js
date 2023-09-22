import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

   try {
      //! Create User (create)
      // const newUser = await prisma.user.create({
      //    data: {
      //       name: 'Martha',
      //       email: "marta2@gmail.com"
      //    }
      // })
      // console.log(newUser)


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
      const users = await prisma.user.findMany({
         include: {
            post: true
         }
      })
      console.log(users)

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
      const posts = await prisma.post.findMany({
         include: {
            author: true
         }
      })
      console.log(posts)


   } catch (error) {
      // console.log(error.meta.cause)
      // if(error.code === 'P2025'){
      //    console.log("Se genero un error - " + error.meta.cause)
      // }

      console.log(error)
   }

}

main()
