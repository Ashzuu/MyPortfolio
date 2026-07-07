import type {Project} from "~/models/Project";

/**
 * Project Service used to manage project simply.
 */
export class ProjectService {
  private projects: Project[] = [
    {
      id:4,
      name:"Site de vente de solutions",
      path:"commercial-website",
      description:"Site commercial ou je fais la promotion de mes services",
      urlWebsite:"https://website.evandynak.me/",
      urlImage:"/img/commercial_illustration.png",
      urlGithub:"https://github.com/Ashzuu/CommercialWebsite",
      status:"Terminé",
      languages:["TypeScript"],
      frameworks: ["NuxtJS"],
      img: ["/img/commercial-website/img.png", "/img/commercial-website/img_1.png", "/img/commercial-website/img_2.png"],
    },
    {
      id:5,
      name:"Mon Portfolio",
      path:"portfolio",
      description:"Le site où vous êtes actuellement !",
      urlWebsite:"https://evandynak.me/",
      urlImage:"/img/portfolio_illustration.png",
      urlGithub:"https://github.com/Ashzuu/MyPortfolio",
      status:"Terminé",
      languages:["TypeScript"],
      frameworks: ["Nuxt.Js"],
      img: ["/img/portfolio/home.png", "/img/portfolio/home_3.png", "/img/portfolio/home_2.png"],
    },
    {
      id:6,
      name:"DS Contrôles",
      path:"ds-controles",
      description:"Site vitrine pour professionnel",
      urlWebsite:"https://dscontroles.com",
      urlImage:"/img/dscont_illustration.png",
      status:"Terminé",
      languages:["HTML/CSS", "JavaScript"],
      frameworks: [],
      img: ["/img/ds-controles/img.png", "/img/ds-controles/img_1.png", "/img/ds-controles/img_2.png"],
    },
    {
      id:1,
      name:"Tyradex",
      path:"tyradex",
      description:"Mon tout premier projet ! V3 actuellement en bêta.",
      urlWebsite:"https://tyradex.app/",
      urlImage:"/img/tyradex_illustration.png",
      urlGithub:"https://github.com/TyradexTeam/Tyradex",
      status:"En cours",
      languages:["Java", "TypeScript", "Neo4J"],
      frameworks: ["Spring Boot", "Angular"],
      img: ["/img/tyradex/img.png","/img/tyradex/img_1.png", "/img/tyradex/img_2.png", "/img/tyradex/img_3.png"],
    },
    {
      id:2,
      name:"GymExercisesAPI",
      path:"gym-api",
      description:"Une API qui recense l'ensemble des exercices de musculation",
      urlGithub:"https://github.com/Ashzuu/GymExercisesAPI",
      status:"En cours",
      languages:["Java", "PostgreSQL"],
      frameworks: ["Spring Boot", "Quarkus"],
      img: [],
    },
    {
      id:3,
      name:"MusculAshzboard",
      path:"musculashz",
      description:"Un petit projet pour une (encore) autre passion : la musculation.",
      urlGithub:"https://github.com/Ashzuu/MusculAshzboard",
      status:"En cours",
      languages:["TypeScript"],
      frameworks: ["Angular"],
      img: [],
    },
    {
      id:7,
      name:"Copupitre",
      path:"copupitre",
      description:"Projet de site Internet permettant de rechercher des musiciens pour un orchestre, du matériel, etc... (dépôt client uniquement, l'API est dans un autre dépôt)",
      urlGithub:"https://github.com/Ashzuu/CopupitreWebsite",
      status:"En cours",
      languages:["TypeScript", "Java"],
      frameworks: ["Angular", "Spring Boot"],
      img: [],
    }
  ]

  /**
   * Get all projects stored in the service.
   * @return All projects
   */
  public get Projects():Project[]{
    return this.projects;
  }

  /**
   * Get a specific project given by an id
   * @param id ID of the project to get
   * @return The project with the given id, or null if it doesn't exist
   */
  public specificProject(id:number):Project|null{
    return this.projects.find(p => p.id === id) ?? null;
  }
}