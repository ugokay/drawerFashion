


function Tone({item, className, ...props}) {
    const {title,image} = item;
    return (
        <> {title}
        <div style={{backgroundColor: image}}>Tone</div>
        </>
    )
}

export default Tone;