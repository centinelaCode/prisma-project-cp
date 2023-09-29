model Codigos {
   estado            Estado    @relation(fields: [estadoId], references: [id])
   estadoId          Int
   municipio         Municipio @relation(fields: [municipioId], references: [id])
   municipioId       Int
   cp                String
   asentamiento      String
   tipo_asentamiento String
   tipo_localidad    String

   @@id([estadoId, municipioId])
}
