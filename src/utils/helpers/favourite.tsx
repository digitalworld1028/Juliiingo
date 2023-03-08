import { get, save } from '../services/localstorage'

interface character {
  id: string
}

function favouriteCharacterList(): character[] | [] {
  let favouriteCharacters: string | null = get('characters')
  if (!favouriteCharacters) return []
  else return JSON.parse(favouriteCharacters)
}

function favouriteCharacterIndex(
  characters: character[] | [],
  currentCharacter: character,
): number {
  return characters.findIndex(function (character: character): boolean {
    return character.id === currentCharacter.id
  })
}

function favouriteACharacter(character: character): void {
  let characters: character[] | never = favouriteCharacterList()
  const isCharacterFavourite: number = favouriteCharacterIndex(
    characters,
    character,
  )
  if (isCharacterFavourite === -1) {
    characters.push(character)
    save('characters', JSON.stringify(characters))
  } else {
    characters.splice(isCharacterFavourite, 1)
    save('characters', JSON.stringify(characters))
    characters.push(character)
  }
}

function isCharacterFavourite(character: character): any {
  let characters: character[] | never = favouriteCharacterList()
  const isCharacterFavourite: number = favouriteCharacterIndex(
    characters,
    character,
  )
  if (isCharacterFavourite === -1) {
    return false
  }
  return true
}

export {
  favouriteCharacterList,
  favouriteCharacterIndex,
  favouriteACharacter,
  isCharacterFavourite,
}
