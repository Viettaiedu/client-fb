
import Post from '../Post';
import './posts.scss';


function Posts() {
    const posts = [
        {
            id:"",
            desc:"Có rất nhiều cơ hội sẽ đến vào năm 2023, vì vậy bạn cần có sự chuẩn bị ngay từ bây giờ.",
            image:"https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/329968347_470766035121112_4247709180779181734_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=15vlc530YOcAX8N5dz5&_nc_ht=scontent.fdad3-5.fna&oh=00_AfDXKLoWK9jn_WbG-LjVJFdDGk0tw9r6-t2mPRq5yEnKyA&oe=63F0778B",
            createdAt:"3 giờ",
            userId:"",
            name:"Phạm Tuấn Sơn",
            profilePic:"/no-image.webp",

        },
        {
            id:"",
            desc:"Có rất nhiều cơ hội sẽ đến vào năm 2023, vì vậy bạn cần có sự chuẩn bị ngay từ bây giờ.",
            image:"https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/329968347_470766035121112_4247709180779181734_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=15vlc530YOcAX8N5dz5&_nc_ht=scontent.fdad3-5.fna&oh=00_AfDXKLoWK9jn_WbG-LjVJFdDGk0tw9r6-t2mPRq5yEnKyA&oe=63F0778B",
            createdAt:"3 giờ",
            userId:"",
            name:"Phạm Tuấn Sơn",
            profilePic:"/no-image.webp",
        },
    ]
    return ( 
        <div className='posts'>
              {posts.map((post,index )=> (
                  <Post post={post} key={index} />
              ))}  
               
        </div>
     );
}

export default Posts;