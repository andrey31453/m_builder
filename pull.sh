while getopts ":o:" option; do
  case $option in o) opt_arg="$OPTARG";;
    \?) echo "Invalid option: -$OPTARG" >&2
        exit 1
        ;;
    :) echo "Option -$OPTARG requires an argument." >&2
       exit 1
       ;;
  esac
done

echo "Option value is: $opt_arg"

# git submodule foreach 'git add *' 
# git submodule foreach 'git commit -m '1'' 
# git submodule foreach 'git push' 