import {SearchMusic,SearchMusicPlayList,PlayMusicListList,ShowCommentList,BannerList} from './actionTypes'
import axios from 'axios'
axios.defaults.withCredentials = true;

export const searchMusicList=(list)=>({
    value: list,
    type: SearchMusic
})

export const searchMusicPlayListList=(list)=>({
    listvalue: list,
    type: SearchMusicPlayList
})

export const playMusicList=(musicid)=>({
     mp3Id: musicid,
     type: PlayMusicListList
})

export  const showCommentList=(commentsinfo)=>({
     commentId: commentsinfo,
     type: ShowCommentList
})

export const  showbanner=(banner)=>({
    banners:banner,
    type:BannerList
})
export const searchMusic=(page,musicName)=>{
    return(dispatch)=>{
        axios({method:'get',url:'http://139.196.82.33:3000/search?limit=9&offset='+page+'&keywords='+musicName}).then(function(response) { dispatch(searchMusicList(response.data.result))}); 
    }
}

export const searchMusicPlayList=()=>{
    return(dispatch)=>{
        axios({method:'get',url:'http://139.196.82.33:3000/top/playlist?limit=10&order=new'}).then(function(response) { dispatch(searchMusicPlayListList(response.data))}); 
    }
}

export const playMusic=(musicId)=>{
    return(dispatch)=>{
       axios({method:'get',url:'http://139.196.82.33:3000/music/url?id='+musicId}).then(function(response){dispatch(playMusicList(response.data.data[0].url))})
    }
}

export const showLyric=(musicId)=>{
    return(dispatch)=>{

    }
}

export const showComments=(offset,musicId)=>{
    return(dispatch)=>{
         axios({method:'get',url:'http://139.196.82.33:3000/comment/music?id='+musicId+'&limit=5&offset='+offset}).then(function(response){dispatch(showCommentList(response.data))})
    }
}

export const likes=(commentId,musicId)=>{
    return(dispatch)=>{
    axios({method:'get',url:'http://139.196.82.33:3000/comment/like?id='+musicId+'&cid='+commentId+'&t=1&type=0'}).then(function(response){console.log(response)})
    }
}


export const getbanner=()=>{
    return(dispatch)=>{
    axios({method:'get',url:'http://139.196.82.33:3000/banner'}).then(function(response){dispatch(showbanner(response.data))})
    }
}


