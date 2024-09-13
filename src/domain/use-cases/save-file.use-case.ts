import fs from "node:fs";

type File = {
  name?: string
  content: string
  destination?: string
}

type SaveFileOptions = {
  file: File
}

interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean
}

export class SaveFile implements SaveFileUseCase {
    execute(options: SaveFileOptions) {
      const { destination = 'outputs', name = 'table', content } = options.file

      try {
        fs.mkdirSync(destination, { recursive: true })
        fs.writeFileSync(`${ destination }/${ name }.txt`, content)
      } catch (error) {
        return false
      }

      return true
    }
}