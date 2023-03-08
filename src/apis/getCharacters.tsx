import http from "../utils/services/http";

const characters = http(`https://rickandmortyapi.com/api/character`, {})

export {characters}