import fs from 'fs'
import path from 'path'

const exclude_paths = ['node_modules', 'src', 'public', '.git']

const is_file = (full_path) => !fs.statSync(full_path).isDirectory()

const create_file_names = (full_path) => {
  if (is_file(full_path)) {
    return full_path
  }

  return get_files(full_path)
}

const get_files = (dir) => {
  return fs.readdirSync(dir).reduce((files, dir_or_file_name) => {
    if (exclude_paths.includes(dir_or_file_name)) return files

    const full_path = dir + '/' + dir_or_file_name

    return [...files, create_file_names(full_path)]
  }, [])
}

export const setup = () => {
  console.log('setup: ')
  console.log(get_files('../').flat())
}
