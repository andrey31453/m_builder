import fs from 'fs'
import { dir_names } from '../assets/env.js'

export class Generate_File {
  #modules_data = null

  constructor(modules_data) {
    this.#modules_data = modules_data
  }

  #get_file_path = (module_data, file_name) => {
    return `${module_data.path}/${dir_names.generate}/${file_name}`
  }

  #get_error_message = (file_name) => {
    return `Не удалось создать файл ${file_name}`
  }

  #create_error = (message) => {
    return new Error(message)
  }

  #get_files_data = (create_data_method) => {
    return this.#modules_data.map((md) => create_data_method(md))
  }

  #create_files = (files_data, file_name) => {
    files_data.forEach((file_data, i) => {
      const file_path = this.#get_file_path(this.#modules_data[i], file_name)
      const error_message = this.#get_error_message(file_name)

      fs.writeFileSync(file_path, file_data, this.#create_error(error_message))
    })
  }

  do = (create_data_method, file_name) => {
    const files_data = this.#get_files_data(create_data_method)
    this.#create_files(files_data, file_name)
  }
}
