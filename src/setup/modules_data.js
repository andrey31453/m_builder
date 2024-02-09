import fs from 'fs'
import { dir_names } from '../assets/env.js'

export class Modules_Data {
  #paths = []
  #manifests = []
  #data = []

  constructor() {
    this.#create_paths()
    this.#create_manifests()
    this.#create_data()
  }

  #create_paths = () => {
    const git_modules_content = fs
      .readFileSync('.gitmodules', 'utf8')
      .toString()
    const match_all = [...git_modules_content.matchAll(/path = (.*)/gi)]
    this.#paths = match_all.map((match) => `./${match[1]}`)
  }

  #create_manifest = (module_path) => {
    return JSON.parse(
      fs.readFileSync(`${module_path}/${dir_names.manifest}`, 'utf8')
    )
  }

  #create_manifests = () => {
    this.#manifests = this.#paths.map(this.#create_manifest)
  }

  #create_data = () => {
    this.#data = this.#paths.reduce((data, _, i) => {
      data.push({
        path: this.#paths[i],
        manifest: this.#manifests[i],
      })

      return data
    }, [])
  }

  get value() {
    return this.#data
  }
}
