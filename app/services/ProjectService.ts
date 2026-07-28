import type {Project} from "~/models/Project";

/**
 * Project Service used to manage project simply.
 */
export class ProjectService {
  private projects: Project[] = [
    {
      id:4,
      name:"Site de vente de solutions",
      path:"wip",
      description:"Site commercial ou je fais la promotion de mes services informatiques, avec présentation de mon travail, mes services, mes tarifs et un formulaire de contact.",
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
      path:"wip",
      description:"Le site où vous êtes actuellement, pour me présenter, mes projets, et ma passion pour la musique !",
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
      path:"wip",
      description:"Site vitrine pour la société DS Contrôles, qui m'a contacté afin que je fasse une refonte de leur site internet en php, datant de plus de 10 ans, pour un site plus moderne",
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
      path:"wip",
      description:"API REST Pokemon permettant de récupérer les données de n'importe quel Pokémon, des types, des résistances, et tout un tas d'autres données. Il s'agit de mon tout premier projet ! V3 actuellement en bêta.",
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
      path:"wip",
      description:"Une API qui recense l'ensemble des exercices de musculation, permettant ainsi de rendre ceux-ci publiques et accessibles à tous. L'API est actuellement en cours de développement.",
      urlGithub:"https://github.com/Ashzuu/GymExercisesAPI",
      status:"En cours",
      languages:["Java", "PostgreSQL"],
      frameworks: ["Spring Boot", "Quarkus"],
      img: [],
    },
    {
      id:3,
      name:"MusculAshzboard",
      path:"wip",
      description:"Un petit projet pour une (encore) autre passion : la musculation. L'objectif étant de pouvoir contrôler les différents exercices, les séances que l'on fait, pour pouvoir suivre sa progression en temps réel.",
      urlGithub:"https://github.com/Ashzuu/MusculAshzboard",
      status:"En cours",
      languages:["TypeScript"],
      frameworks: ["Angular"],
      img: [],
    },
    {
      id:7,
      name:"Copupitre",
      path:"wip",
      description:"Projet de site Internet permettant de rechercher des musiciens pour un orchestre, du matériel, etc... (dépôt client uniquement, l'API est dans un autre dépôt)",
      urlGithub:"https://github.com/Ashzuu/CopupitreWebsite",
      status:"En cours",
      languages:["TypeScript", "Java"],
      frameworks: ["Angular", "Spring Boot"],
      img: [],
    },
    {
      id:8,
      name:"Challenge-Dev",
      path:"wip",
      description:"Projet Github qui recense tous mes challenges que j'ai fais sur une plateforme très connue, mais que je ne citerai pas ici (pas difficile à trouver, mais si vous le savez merci de ne pas le révéler)",
      urlGithub:"https://github.com/Ashzuu/Challenge-Dev",
      status:"En cours",
      languages:[],
      frameworks: [],
      img: [],
    }
  ];

  private shownProjects: Ref<Project[]> = ref(this.projects.slice(0,6));

  /**
   * Get all projects stored in the service.
   * @return All projects
   */
  public get SummaryProjects():Project[]{
    return this.shownProjects.value;
  }

  public changeProjectMode(){
    if(this.shownProjects.value.length === 6) {
      this.shownProjects.value = this.projects;
    } else {
      this.shownProjects.value = this.projects.slice(0,6);
    }
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