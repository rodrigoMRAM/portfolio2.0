import Trello from '../assets/img/trello.png'; 
import Trello1 from '../assets/img/trello1.png'; 
import Trello2 from '../assets/img/trello2.png'; 
import Ayuda from '../assets/img/ayuda.png'; 
import Ayuda2 from '../assets/img/ayuda2.png'; 
import Ayuda3 from '../assets/img/ayuda3.png'; 
import Digital from '../assets/img/digital_money.png'; 
import Digital2 from '../assets/img/digital_house2.png'; 
import Digital3 from '../assets/img/digital_house3.png'; 
import Otto from '../assets/img/otto.png'; 
import Otto1 from '../assets/img/otto1.png'; 
import Otto2 from '../assets/img/otto2.png'; 
import Turnero from '../assets/img/turnero.png'; 
import Turnero1 from '../assets/img/turnero1.png'; 
import Turnero2 from '../assets/img/turnero2.png'; 
import Barber from '../assets/img/barber.png'; 
import Barber1 from '../assets/img/barber1.png'; 
import Barber2 from '../assets/img/barber2.png'; 
import Irish from '../assets/img/irish.png'; 
import Irish1 from '../assets/img/irish2.png'; 
import Irish2 from '../assets/img/irish3.png'; 
import Video from '../assets/videos/ayuda.mp4'; 
import OttoVideo from '../assets/videos/otto.mp4'; 
import TrelloVideo from '../assets/videos/trello.mp4'; 
import TurneroVideo from '../assets/videos/turnero.mp4'; 
import IrishVideo from '../assets/videos/irish.mp4'; 


 export const projects = (t) => [
    
    {
      title: "Digital Money",
      description: (t("projects_dh")),
      image:[Digital, Digital2, Digital3],
      technologies: ["Next JS", "Tailwind"],
      github: "https://github.com/rodrigoMRAM/digital_money",
      demo: "https://digital-money-seven.vercel.app",
      // video: Video
    },
     {
      title: "Estudio Irish",
      description: (t("projects_irish")),
      image: [Irish, Irish1, Irish2],
      technologies: ["Java", "React"],
      github: "https://github.com/rodrigoMRAM/art-irish",
      
      video: IrishVideo
    },
    {
      title: "Ayuda animal",
      description: (t("projects_ayuda")),
      image: [Ayuda, Ayuda2, Ayuda3],
      technologies: ["Django", "JS", "CSS"],
      github: "https://github.com/LeanEze/Ayuda-Animal",
      
      video: Video
    },
    
    {
      title: "Chapa y pintura",
      description: (t("projects_otto")),
      image: [Otto, Otto1, Otto2],
      technologies: ["Django", "JS"],
      github: "https://github.com/rodrigoMRAM/Web-Otto",
      
      video: OttoVideo
    },
    {
      title: "Barber shop",
      description: (t("barber_description")),
      image: [Barber, Barber1, Barber2],
      technologies: ["Next JS", "Tailwind"],
      github: "https://github.com/rodrigoMRAM/barber-shop",
      demo: "https://barber-shop-azure.vercel.app/",
    },
    {
      title: "Trello",
      description: (t("projects_trello")),
      image: [Trello, Trello1, Trello2],
      technologies: ["Django", "React", "DRF"],
      github: "https://github.com/rodrigoMRAM/Trello",
      
      video: TrelloVideo
    },
    {
      title: "Turnero",
      description: (t("projects_turnero")),
      image: [Turnero, Turnero1, Turnero2],
      technologies: ["Django", "JS", "Bootstrap"],
      github: "https://github.com/rodrigoMRAM/turnero",
      
      video: TurneroVideo
    }
   
    
  ];