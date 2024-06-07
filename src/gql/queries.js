import { gql } from '@apollo/client';


export const FETCH_USER = gql`
    query Me {
        me {
        email
        fullName
        id
        }
    }
`;



export const COLLECTION_DETAIL = gql`
  query collectionItems ($collection : ID!) {
    collectionItemsMerged(collection: $collection) {
      data {
        item {
          ... on ExploreItem {
            id
           
          
            image {
              url
              width
              urlKey
              source
              height
              exploreItemId
            }
            title
          }
          ... on TrendItem {
            id
            trendItemId
            tiId
            tiType
            apparel
            apparelName
            tiColor
            reach
            optimalLaunch
            trendType
            title
            score
            isLiked
            image {
              url
            }
          }
          ... on Tone {
            id
            name
            code
            hex
            main
            weight
            isLiked
            collections
          }
        }
      }
    }
  }
  
`;