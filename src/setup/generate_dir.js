import fs from 'fs'
import { dir_names } from '../assets/env.js'

export class Generate_Dir {
  #modules_data = null

  constructor(modules_data) {
    this.#modules_data = modules_data

    this.#rm_dirs()
    this.#mk_dirs()
  }

  #get_dir_path(module_data) {
    const r = `${module_data.path}/${dir_names.generate}`
    console.log('r: ', r)
    return `${module_data.path}/${dir_names.generate}`
  }

  #rm_dir = (module_data) => {
    fs.rmSync(this.#get_dir_path(module_data), { recursive: true, force: true })
  }

  #rm_dirs = () => {
    this.#modules_data.forEach(this.#rm_dir)
  }

  #mk_dir = (module_data) => {
    try {
      fs.mkdirSync(this.#get_dir_path(module_data))
    } catch (e) {}
  }

  #mk_dirs = () => {
    this.#modules_data.forEach(this.#mk_dir)
  }
}
