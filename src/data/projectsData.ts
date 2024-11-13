type Images = {
  src: string
}

export type TProjectsData = {
  id: number,
  title: string,
  details: string,
  technologies: string[],
  liveLink: string
  sourceCode: string
  thumbnail: string,
  images: Images[],
  video: string
  isUnderDevelopment:boolean
  
}

export const projectsData: TProjectsData[] = [
  {
    id: 1,
    title: "Password Generator",
    details:
      "A front-end mentor challenge, which enables user to generate a password depending on selected checkbox option and range slider for the password's length.",
    technologies: ["ReactJS", "React Hot Toast"],
    liveLink: "https://pwgeneratorx.netlify.app/",
    sourceCode:
      "https://github.com/russellbanares322/password-generator-fem-challenge",
    thumbnail:
      "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1679665956/ProjectImages/PasswordGenerator/landing_dahk3i.jpg",
    images: [
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1679665956/ProjectImages/PasswordGenerator/landing_dahk3i.jpg",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1679664737/ProjectImages/PasswordGenerator/validation_oqotg2.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1679664737/ProjectImages/PasswordGenerator/clipboard_copy_rkcw84.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1679664737/ProjectImages/PasswordGenerator/generated_password_f1hwvp.png",
      },
    ],
    video: "../assets/project-videos/password_generator.mp4",
    isUnderDevelopment: false
  },
  {
    id: 2,
    title: "Netflix Clone",
    details:
      "Web application that mimics the UI of Netflix, displays different types of movies using TMDB Api. And allows the user to save movie to favorites.",
    technologies: ["ReactJS", "Axios", "Firebase", "ReactSplide"],
    liveLink: "https://netflix-clone-d2z2.onrender.com/",
    sourceCode: "https://github.com/russellbanares322/netflix-clone",
    thumbnail:
      "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1678018753/ProjectImages/NetflixClone/netflix-cover_sibtvr.jpg",
    images: [
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1678017842/ProjectImages/NetflixClone/netflix-landing_gh52fp.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687254/ProjectImages/NetflixClone/signup_page_rp2f05.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687246/ProjectImages/NetflixClone/signin_page_upbhyo.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1678017827/ProjectImages/NetflixClone/netflix-details-page1_myluyi.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1678017825/ProjectImages/NetflixClone/netflix-details-page_kushl4.png",
      },
    ],
    video: "../assets/project-videos/netflix_clone.mp4",
    isUnderDevelopment: false
  },
  {
    id: 3,
    title: "DevNotesve",
    details:
      "Save and organize your development notes easily, keeping track of your coding ideas, progress, and solutions all in one place.",
    technologies: ["ReactJS", "NodeJs", "PostgreSQL", "Clerk Authentication", "TailwindCSS", "ShadcnUi"],
    liveLink: "https://dev-notesve.vercel.app",
    sourceCode: "https://github.com/russellbanares322/dev-notesve",
    thumbnail:
      "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1727702402/ProjectImages/DevNoteSve/login-page.png",
    images: [
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1731497719/ProjectImages/DevNoteSve/Authenticated_Initial_Page_vx1krb.png"
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1731497728/ProjectImages/DevNoteSve/Create_Note_Modal_le2zb5.png"
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1731497732/ProjectImages/DevNoteSve/Created_Note_ocggbm.png"
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1731497743/ProjectImages/DevNoteSve/Paginated_View_ynqsd1.png"
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1731497737/ProjectImages/DevNoteSve/Paginated_View_Dark_Mode_lxo11r.png"
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1731497747/ProjectImages/DevNoteSve/Update_Note_Modal_b3argk.png"
      },
    ],
    video: "",
    isUnderDevelopment: false
  },
  // {
  //   id: 3,
  //   title: "ReactJS Firebase Crud",
  //   details:
  //     "A project that you can create, read, update and delete record. It also has an image upload functionality.",
  //   technologies: ["ReactJS", "Firebase"],
  //   liveLink: "https://russcrud.netlify.app/",
  //   sourceCode: "https://github.com/russellbanares322/react-firebase-crud",
  //   thumbnail:
  //     "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687217/ProjectImages/FirebaseCrud/firebase_crud_uaps5d.jpg",
  //   images: [
  //     {
  //       src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687217/ProjectImages/FirebaseCrud/firebase_crud_uaps5d.jpg",
  //     },
  //     {
  //       src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687217/ProjectImages/FirebaseCrud/add_page_adrcgi.png",
  //     },
  //     {
  //       src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687217/ProjectImages/FirebaseCrud/update_page_hmwbjq.png",
  //     },
  //   ],
  //   video: "../assets/project-videos/firebase_crud.mp4",
  // },
  {
    id: 4,
    title: "Property Finder",
    details:
      "Our capstone project which display different kinds of property, and allowing the user to set an appointment.",
    technologies: ["ReactJS", "Firebase", "EmailJS", "Tawk.to Live Chat"],
    liveLink: "https://onehomeph.onrender.com/",
    sourceCode: "https://github.com/russellbanares322/propertyfinder-app",
    thumbnail:
      "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687262/ProjectImages/PropertyFinder/property_finder_k578cd.jpg",
    images: [
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687281/ProjectImages/PropertyFinder/landing_page_lpeziy.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687266/ProjectImages/PropertyFinder/login_page_p7lo5q.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687263/ProjectImages/PropertyFinder/registration_page_r3jult.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687264/ProjectImages/PropertyFinder/forgot_password_kxkriw.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687279/ProjectImages/PropertyFinder/property_page_fdrwdf.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687266/ProjectImages/PropertyFinder/favorites_page_qmpx22.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687267/ProjectImages/PropertyFinder/listed_property_page_fw4lpy.png",
      },
    ],
    video: "../assets/project-videos/property_management_system.mp4",
    isUnderDevelopment: false
  },
  {
    id: 5,
    title: "Trackeroo",
    details:
      "Displays crypto currency prices, allow user to view price change that happened using a graph.",
    technologies: ["ReactJS", "Axios", "CoingeckoAPI"],
    liveLink: "https://trackeroo.vercel.app/",
    sourceCode: "https://github.com/russellbanares322/cryptotrackerapp",
    thumbnail:
      "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687198/ProjectImages/CryptoApp/crypto_currency_tracker_app_voejlu.jpg",
    images: [
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687200/ProjectImages/CryptoApp/landing_page_z1kxdq.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687198/ProjectImages/CryptoApp/crypto_price_table_qj78uj.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687197/ProjectImages/CryptoApp/trending_coins_lai6p2.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687198/ProjectImages/CryptoApp/details_page_ium8gw.png",
      },
    ],
    video: "../assets/project-videos/crypto_app.mp4",
    isUnderDevelopment: false
  },
  {
    id: 6,
    title: "Games List App",
    details:
      "Displaying different types of games with pagination, and axios library for api fetching.",
    technologies: ["ReactJS", "Axios", "RapidAPI"],
    liveLink: "https://games-list-viewer.vercel.app/",
    sourceCode: "https://github.com/russellbanares322/games-list-app",
    thumbnail:
      "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687297/ProjectImages/GamesList/game_app_g5fam1.jpg",
    images: [
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687303/ProjectImages/GamesList/landing_page_ruuvho.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687299/ProjectImages/GamesList/light_mode_nnmw2b.png",
      },
    ],
    video: "../assets/project-videos/games_list_app.mkv",
    isUnderDevelopment: false
  },
];
