import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './components/ui/input'
import UserInfo from './components/UserInfo/UserInfo'
import { COLLECTION_DETAIL} from './gql'
import { useQuery } from '@apollo/client'
import ExploreItem from './components/CollectionItem/ExploreItem'
import TrendItem from './components/CollectionItem/TrendItem'
import Tone from './components/CollectionItem/Tone'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import myInteractiveShape from './components/InteractiveShape/InteractiveShape'


function App() {
  const [count, setCount] = useState(0)
  const { loading, error, data } = useQuery(COLLECTION_DETAIL, {
    variables: {
      'collection' : '662a0bc83299e201e7a74f2f'
    },
});




  const onInputChange = (e) => {
    console.log(e?.target?.value)
  }

  const COLLECTION_ITEM_MAPPER = {
    'ExploreItem' : ExploreItem,
    'TrendItem' : TrendItem, 
    'Tone' : Tone, 
  }


  // const calculatePosition = (index, x,y) => {
  //   if(index % 2 && x){

  //       return 10 + (index* 300) 
  //   }
  //   if(index % 2 && y) {
  //     return 420* index
  //   }
  // }


  const collectionItemsMapper = (item,index) => {
    
    return {
      type: `my-interactive-shape`,
      id: `shape:${index}`,
      x:  (10 + ( (index % 2 + 1)  * 300) ), y: (420* (index%2 + index)) ,
      props: {
        w: 300, 
        h:400,
        type: item?.item?.__typename, 
        title: item?.item?.__typename === 'Tone' ?  item?.item?.name :  item?.item?.title,
        image: item?.item?.__typename === 'Tone' ?  item?.item?.hex :  item?.item?.image?.url 
      },
    }
  }


  const renderCollectionDrawer = (data, editor) => {
    return data?.map((node,index) => {
       editor.createShape(collectionItemsMapper(node,index) )
    })
  }
  const customShapeUtils = [myInteractiveShape]

  return (
    <div className='grid gap-4 grid-cols-1' style={{height:'100vh'}}> 
      {data !== undefined ? 
      <Tldraw
				shapeUtils={customShapeUtils}
        style={{width:'100%', height:'100%'}}
				onMount={(editor) => {
          renderCollectionDrawer(data?.collectionItemsMerged?.data, editor);
				}}
			/>: ''}
    </div>
  )
}

export default App
