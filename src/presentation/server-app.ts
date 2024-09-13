import {CreateTable} from "../domain/use-cases/create-table.use-case";
import {SaveFile} from "../domain/use-cases/save-file.use-case";

type File = {
  name?: string
  destination?: string
}

type Arguments = {
  base: number
  limit: number
  show: boolean
  file: File
}

export class ServerApp {

  constructor(private readonly args: Arguments) {
  }

  run() {
    const table = new CreateTable()
    .execute({ base: this.args.base, limit: this.args.limit })

    const wasCreated = new SaveFile()
    .execute({
      file: {
        name: this.args.file.name,
        destination: this.args.file.destination,
        content: table
      }
    })

    if (this.args.show) {
      console.log(table)
    }

    if (wasCreated) {
      console.log('Table created successfully!')
    } else {
      console.log('Table could not be created!')
    }
  }
}