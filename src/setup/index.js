import { Modules_Data } from './modules_data.js'
import { Generate_File } from './generate_file.js'
import { Generate_Dir } from './generate_dir.js'

export const setup = () => {
  const modules_data = new Modules_Data().value
  new Generate_Dir(modules_data)
  const generate_file = new Generate_File(modules_data)

  generate_file.do((m) => `${m.manifest.name}`, 'do.txt')
}
