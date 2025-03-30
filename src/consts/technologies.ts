import ReactIcon from '../icons/React.astro';
import TailwindIcon from '../icons/Tailwind.astro';
import AstroIcon from '../icons/AstroBuild.astro';
import TypescriptIcon from '../icons/Typescript.astro';
import VSCodeIcon from '../icons/VSCode.astro';
import JavascriptIcon from '../icons/Javascript.astro';
import FigmaIcon from '../icons/Figma.astro';
import GitIcon from '../icons/Git.astro';
import GitHubIcon from '../icons/GitHub.astro';
import QwenIcon from '../icons/Qwen.astro';
import VercelIcon from '../icons/Vercel.astro';
import NodeJsIcon from '../icons/NodeJs.astro';
import NextJsIcon from '../icons/NextJs.astro';
import PythonIcon from '../icons/Python.astro';
import MySqlIcon from '../icons/MySql.astro';

export const TECHS = {
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
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: JavascriptIcon,
  },
  VSCODE: {
    name: 'VS Code',
    icon: VSCodeIcon,
  },
  FIGMA: {
    name: 'Figma',
    icon: FigmaIcon,
  },
  GIT: {
    name: 'Git',
    icon: GitIcon,
  },
  GITHUB: {
    name: 'GitHub',
    icon: GitHubIcon,
  },
  QWEN: {
    name: 'Qwen',
    icon: QwenIcon,
  },
  VERCEL: {
    name: 'Vercel',
    icon: VercelIcon,
  },
  NODEJS: {
    name: 'Node Js',
    icon: NodeJsIcon,
  },
  NEXTJS: {
    name: 'Next.Js',
    icon: NextJsIcon,
  },
  PYTHON: {
    name: 'Python',
    icon: PythonIcon,
  },
  MYSQL: {
    name: 'MySql',
    icon: MySqlIcon,
  },
} as const;

export const STACKS = [
  {
    title: 'Front-End',
    techs: [
      TECHS.REACT,
      TECHS.ASTRO,
      TECHS.TAILWIND,
      TECHS.JAVASCRIPT,
      TECHS.TYPESCRIPT,
      TECHS.FIGMA,
    ],
  },
  {
    title: 'Herramientas',
    techs: [TECHS.VSCODE, TECHS.GIT, TECHS.GITHUB, TECHS.QWEN, TECHS.VERCEL],
  },
  {
    title: 'Aprendiendo',
    techs: [TECHS.NODEJS, TECHS.NEXTJS, TECHS.PYTHON, TECHS.MYSQL],
  },
] as const;
