type CreateTableOptions = {
  base: number
  limit?: number
}

export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string
}

export class CreateTable implements CreateTableUseCase {
    execute(options: CreateTableOptions)  {
      const { base, limit = 10 } = options

      let headerMessage: string = `
==================================== 
Table of ${base} limit ${limit}
====================================
`
      let outputMessage: string = ''

      for (let index: number = 1; index <= limit; index++) {
        outputMessage += `${ base } x ${ index } = ${ base * index }\n`
      }

      return headerMessage + outputMessage
    }
}