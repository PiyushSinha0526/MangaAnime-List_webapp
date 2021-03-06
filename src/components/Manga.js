import React from 'react'

export default function Manga({resource}) {
    return (
        <>
        <div className="details__body-info">
            <h1 className="details__body-title">{resource.title}</h1>
          <div className="details__body-data">
          <h4>Rank: <span>{resource.rank}</span></h4>
          <h4>Popularity: <span>{resource.popularity}</span></h4>
          <h4>Chapters: <span>{resource.chapters? resource.chapters: "Unknown"}</span></h4>
          <h4>Volumes: <span>{resource.volumes? resource.volumes: "Unknown"}</span></h4>
          <h4>Published: <span>{resource.published.string}</span></h4>
          <h4>Genres: {resource.genres.map(gen=><span key={gen.name}>{gen.name}, </span>)}</h4>
          </div>
        </div>
          <img src={resource.image_url} alt="not found" />
        </>
    )
}
