import { BaseBoxShapeUtil, HTMLContainer, T } from 'tldraw'
import ExploreItem from '../CollectionItem/ExploreItem'
import TrendItem from '../CollectionItem/TrendItem'
import Tone from '../CollectionItem/Tone'


class myInteractiveShape extends BaseBoxShapeUtil {
	static type = 'my-interactive-shape'
	static props = {
		w: T.number,
		h: T.number,
		checked: T.boolean,
		text: T.string,
        title: T.string,
        type: T.string,
        image: T.string,
	}

	getDefaultProps() {
		return {
			w: 230,
			h: 230,
			checked: false,
			text: '',
            title: '',
            type: '',
            image: '',
		}
	}

	// [1]
	component(shape) {
        let renderComp;
        switch (shape.props.type) {
            case 'ExploreItem':
                renderComp =  <ExploreItem item={shape?.props} />
                break
            case 'TrendItem':
                renderComp =  <TrendItem  item={shape?.props} /> 
                break;
            default:
                renderComp = <Tone  item={shape?.props}  />
                break;
        }

		return (
			<HTMLContainer
				style={{
					padding: 16,
					height: shape.props.h,
					width: shape.props.w,
					// [a] This is where we allow pointer events on our shape
					pointerEvents: 'all',
					backgroundColor: '#efefef',
					overflow: 'hidden',
				}}
			>
                {renderComp}
                
			</HTMLContainer>
		)
	}

	// [5]
	indicator(shape) {
		return <rect width={shape.props.w} height={shape.props.h} />
	}
}



export default myInteractiveShape;