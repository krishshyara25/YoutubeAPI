const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors())

const data=[
     {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",ThumbName:'Bulbuli|Coke Studio Bangla Season One|Ritu Raj X Nandita',CName:'Coke Studio Bangla',views:'1.5M views 2 days ago'},
     {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",ThumbName:'Infinix Note 12: AMOLED Helio G88 SoC!',CName:'ATC Andriod ToTo Company',views:'1.5Mviews 2 days ago'},
     {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",ThumbName:'My first UX Design case study - This got me my first job.',CName:'Saptarshi Prakash',views:'4.8K views 1 years ago'},
     {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",ThumbName:'My Mix',CName:'Lopamudra Mitra, Anupam Roy'},
     {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",ThumbName:'UX Design - What is it? (From AJ &Smart)',CName:'AJ&Smar',views:'150K views 3 years ago'},
     {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",ThumbName:'Mix - Mombati | Mohon Sharif ',CName:'Mohon Sharif, Odd Signature'},
     {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",ThumbName:'| 48 VISA-FREE',CName:'Nadir On The Go',views:'1.7M views 1 years ago'},
     {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",ThumbName:'14 Advanced Tips to Design FASTER in Figma',CName:'Mizko',views:'53K views 1 years ago'},
     {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true"},
     {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true"},
     {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true"},
     {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true"}
   ]


  app.get("/data",(req,res) => {
    res.json(data);
  });
  



app.get("/data")
    const PORT = 3001;
app.listen(PORT,() => {
        console.log(`Server running on port ${PORT}`);
})







// const express = require("express");
// const app = express();
// app.use(express.json()); // Middleware to parse JSON bodies


// const videos = [
//     {
//         id: 1, 
//         img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', 
//         title: 'Bulbuli | Coke Studio Bangla | Season One | RItu Raj X Nandita',
//         description: 'Coke Studio Bangla',
//          views: "1.5M views • 2 days ago", 
//          channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true'

//     }, {
//         id: 2,
//          img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true', 
//          title: 'Infinix Note 12:       AMOLED    Helio G88 SoC!',
//         description: 'ATC Android ToTo Company', 
//         views: "42M views • 2 days ago", 
//         channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true'

//     }, {
//         id: 3,
//          img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true', 
//          title: 'My first UX Design case study - This got me my first job.',
//         description: 'Saptarshi Prakash', views: "48K views 1 • 5years ago", 
//         channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true'

//     }, {
//         id: 4, 
//         img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true', 
//         title: "My Mix", 
//         views: "Lopamudra Mitra, Anupam Roy, and more"
//     }, {
//         id: 5, 
//         img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true', 
//         title: "UX Design - What is it? (From AJ&Smart)", 
//         description:'AJ&Smart',
//          views: "150KM views • 3 years ago", 
//          channel:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true"
//     },
//     {
//         id: 6,
//          img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true', 
//          title: 'Mix - Mombati | Mohon Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika',
    

//     }, {
//         id: 7, 
//         img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true', 
//         title: '  Nadir on the goto| 48 VISA-FREE',
//         description: '',
//          channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true',description: 'Nadir On the Go', views: "1.7M views • 1 years ago",

//     }, {
//         id: 8, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true', title: '14 Advanced Tips to Design FASTER in Figma',
//         description: 'Mizko', views: "53K views • 1 years ago", channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true'

//     }, {
//         id: 9, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true', title: "My Mix", views: "Lopamudra Mitra, Anupam Roy, and More"
//     },
//     {
//         id: 10, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true', title: 'Bulbuli | Coke Studio Bangla | Season One | RItu RajX Nandita',
//         description: 'Coke Studio Bangla', views: "1.5M views 2 days ago", channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true'

//     }, {
//         id: 11, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true', title: 'Infinix Note 12: <br> AMOLED    Helio G88 SoC!',
//         description: 'ATC Android ToTo Company', views: "42M views 2 days ago", channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true'

//     }, {
//         id: 12, 
//         img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true', 
//         title: 'My first UX Design case study - This got me my first job.',
//         description: 'Saptarshi Prakash', 
//         views: "48K views 1 years ago", 
//         channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true'

//     }

// ]

// app.get("/videos", (req, res) => {
//     res.json(videos);
//   });




//   const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port https://localhost${PORT}`);
// });