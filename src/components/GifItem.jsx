

export const GifItem = ({ title, url }) => {
    
  
    return (
    <div className="card">
        <img src={url} alt={title} />
        <p className="par">{ title }</p>
    </div>
  )
}
