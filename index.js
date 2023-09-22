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
      const userUpSet = await prisma.user.upsert({
         where: {
            //? Busca el usuario con email="joe@gmail.com"
            email: "joe123@gmail.com"
         },
         create: {
            //? Si no lo encuerntra lo crea
            name: "Joe007",
            email: "joe007@correo.com"
         },
         update: {
            //? Pero si lo encuentra lo actualiza
            lastname: "update lastname"
         }
      })
      console.log(userUpSet)


   } catch (error) {
      // console.log(error.meta.cause)
      // if(error.code === 'P2025'){
      //    console.log("Se genero un error - " + error.meta.cause)
      // }

      console.log(error)
   }

}

main()
