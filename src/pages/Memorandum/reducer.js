import {SearchMusic,SearchMusicPlayList,PlayMusicListList,ShowCommentList,BannerList} from './actionTypes'

const defaultStates={
      
     value:{
        songs:[{
           name:'',
           artists:[{
            img1v1Url:''
           }],
           album:{
               name:'曲曲空空如也'
           }
       }] 
     } ,
     listvalue:{
         playlists:[{
              name: ' ',
              coverImgUrl: ' ',
              creator:{
                  nickname: ' ',
                  avatarUrl: " "
              }
         }    
         ]
     },
     mp3Id: '',
     commentId:{
         comments:{
            user:{
            nickname: ' ',
            avatarUrl: " ",
            likedCount:0
         },
         content:"目前没有评论噢！",
         commentId:123
         }
     },
     banners:{
          banners: [{
        picUrl:''
         }
         ]
     }
       
     
     
}
export default (state=defaultStates,action)=>{
   switch(action.type){
         case SearchMusic:
         return{
               ...state,
               ...action
         }
         case SearchMusicPlayList:
         return{
             ...state,
             ...action
         }
         case PlayMusicListList:
         return{
             ...state,
             ...action
         }
         case ShowCommentList:
         return{
             ...state,
             ...action
         }
         case BannerList:
         return{
             ...state,
             ...action
         }

      default:return state
   }

}