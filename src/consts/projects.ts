import ReactIcon from '../icons/React.astro';
import TailwindIcon from '../icons/Tailwind.astro';
import AstroIcon from '../icons/AstroBuild.astro';
import JavascriptIcon from '../icons/Javascript.astro';
import GitIcon from '../icons/Git.astro';
import GitHubIcon from '../icons/GitHub.astro';
import TypescriptIcon from '../icons/Typescript.astro';
import RocketIcon from '../icons/Rocket.astro';

export const TAGS = {
  REACT: {
    name: 'React',
    icon: ReactIcon,
  },
  TAILWIND: {
    name: 'Tailwind Css',
    icon: TailwindIcon,
  },
  ASTRO: {
    name: 'Astro',
    icon: AstroIcon,
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: JavascriptIcon,
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  GIT: {
    name: 'Git',
    icon: GitIcon,
  },
  GITHUB: {
    name: 'GitHub',
    icon: GitHubIcon,
  },
} as const;

export const URLS = {
  LAVELADAV: {
    source: 'https://github.com/OrlandoDev17/la-velada-v',
    project: 'https://la-velada-v.vercel.app/',
  },
  ECOMMERCE: {
    source: 'https://github.com/OrlandoDev17/e-commerce-web',
    project: 'https://e-commerce-web-eight-gules.vercel.app/',
  },
} as const;

export const PROJECTS = [
  {
    title: 'La Velada del Año V | Proyecto no oficial',
    description:
      'Esta no es la web oficial!! En el proyecto se muestra un contador de los dias, horas, minutos y segundos que faltan para que empiece el evento, además tiene una seccion en donde se muestran todos los participantes con un efecto hover muy interesante. EN DESARROLLO!!',
    links: [
      {
        label: 'Codigo Fuente',
        url: URLS.LAVELADAV.source,
        icon: GitHubIcon,
      },
      {
        label: 'Ver Proyecto',
        url: URLS.LAVELADAV.project,
        icon: RocketIcon,
      },
    ],
    image: './projects/la-velada-v.webp',
    tags: [
      TAGS.ASTRO,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.JAVASCRIPT,
      TAGS.GIT,
      TAGS.GITHUB,
    ],
  },
  {
    title: 'SneakerStore | La Mejor tienda online de venta de de Sneakers',
    description:
      'SneakerStore es una tienda en línea dedicada exclusivamente a la venta de calzado deportivo, urbano y de moda. Su diseño moderno y minimalista está pensado para ofrecer una experiencia de compra intuitiva y atractiva, especialmente dirigida a los amantes de las zapatillas (sneakers).',
    links: [
      {
        label: 'Codigo Fuente',
        url: URLS.ECOMMERCE.source,
        icon: GitHubIcon,
      },
      {
        label: 'Ver Proyecto',
        url: URLS.ECOMMERCE.project,
        icon: RocketIcon,
      },
    ],
    image: './projects/sneakerstore.webp',
    tags: [
      TAGS.ASTRO,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.JAVASCRIPT,
      TAGS.TYPESCRIPT,
      TAGS.GIT,
      TAGS.GITHUB,
    ],
  },
] as const;
