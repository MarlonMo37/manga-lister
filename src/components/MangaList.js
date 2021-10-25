import React from "react"
import Manga from "/.Manga"

const MangaList = ({mangas}) => (
    <div>
        {mangas.map((manga) => (
            <Manga />
        ))}
    </div>
)

export default MangaList