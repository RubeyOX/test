import React, { useState } from 'react'
import { data } from './data.js'
import Detail from './Detail.jsx'

export default function Homepage() {
  let [id,setId]=useState({
    "id": "1",
    "movieName": "Weather With You",
    "description": "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: “Này, từ bây giờ trời hãy hửng nắng đi nào.” Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.",
    "image": "https://static2.vieon.vn/vieplay-image/poster_v4/2023/01/13/hq8xeuu9_660x946-duaconcuathoitiet.png",
    "episode": "01",
    "background":"https://static2.vieon.vn/vieplay-image/poster_v4/2023/01/13/hq8xeuu9_660x946-duaconcuathoitiet.png"
})

  const render = () => {
    return data.map((anime) => {
      return (<div className='anime' key={anime.id} onClick={()=>tranfer(anime.id)}>
        <div className='mask'>
          <img src={anime.image} alt="avt" />
          <div className='ep'>EP {anime.episode}</div>
        </div>
        <h4>{anime.movieName}</h4>
      </div>)
    })
  }
  const tranfer=(user_id)=>{
    let user=data.find((find_user)=>{
      return user_id==find_user.id
    })
    setId(user)
  }
  return (
    <div className='background'>
      <div className="header">
        <h1>Anonime</h1>
        <div className="button-header">
          <p>Home</p>
          <p>List anime</p>
        </div>
        <div className="search">
          <input type="text" placeholder='Search anime or movie' />
        </div>
      </div>
      <div className="body">
        <Detail anime={id}/>
        <div className="New-Release">
          <h1>New Release</h1>
          <div className="anime-list">
            {render()}
          </div>
        </div>
      </div>
    </div>
  )
}
