import type {Project} from "~/models/Project";

/**
 * Project Service used to manage project simply.
 */
export class ProjectService {
  private projects: Project[] = [
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
      frameworks: ["Spring Boot", "Angular"]
    },
    {
      id:2,
      name:"GymExercisesAPI",
      path:"gym-api",
      description:"Une API qui recense l'ensemble des exercices de musculation",
      urlGithub:"https://github.com/Ashzuu/GymExercisesAPI",
      status:"En cours",
      languages:["Java", "PostgreSQL"],
      frameworks: ["Spring Boot", "Quarkus"]
    },
    {
      id:3,
      name:"MusculAshzboard",
      path:"musculashz",
      description:"Un petit projet pour une (encore) autre passion : la musculation.",
      urlGithub:"https://github.com/Ashzuu/MusculAshzboard",
      status:"En cours",
      languages:["TypeScript"],
      frameworks: ["Angular"]
    },
    {
      id:4,
      name:"Site de vente de solutions",
      path:"commercial-website",
      description:"Site commercial ou je fais la promotion de mes services",
      urlWebsite:"https://website.evandynak.me/",
      urlImage:"/img/commercial_illustration.png",
      urlGithub:"https://github.com/Ashzuu/CommercialWebsite",
      status:"Terminé",
      languages:["Java", "TypeScript", "Neo4J"],
      frameworks: ["Spring Boot", "Angular"]
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
      frameworks: ["Nuxt.Js"]
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
      frameworks: []
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