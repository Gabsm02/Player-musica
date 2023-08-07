import '../Music-Selection/styles.css'

function MusicCard(props){

    return(
        <div className='music-card'>
            <img className='image-music' src={props.foto} alt="capa-musica"/>
            <h1>{props.titulo}</h1>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
        </div>
    )
}


export default MusicCard