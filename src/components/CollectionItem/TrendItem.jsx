

function TrendItem({item, className, ...props}) {
    const {title, image} = item

    return (
        <>{title}
        <img src={image} className="h-64"/>
        </>
    )
}

export default TrendItem;