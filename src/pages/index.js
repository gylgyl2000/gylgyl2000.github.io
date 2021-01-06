import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css'; 



const resources = [
  {
    title: 'Bootstrap',
    imageUrl: 'https://docsearch.algolia.com/img/logos/bootstrap.jpg',
    siteUrl: 'https://getbootstrap.com/docs/4.1/getting-started/introduction/',
  },
  {
    title: 'Babel',
    imageUrl: 'https://docsearch.algolia.com/img/logos/babel.jpg',
    siteUrl: 'https://babeljs.io/docs/en/',
  },
  {
    title: 'Docusaurus',
    imageUrl: 'https://docsearch.algolia.com/img/logos/docusaurus.svg',
    siteUrl: 'https://docusaurus.io/',
  },
  {
    title: 'GitLab',
    imageUrl: 'https://docsearch.algolia.com/img/logos/gitlab.svg',
    siteUrl: 'https://docs.gitlab.com/',
  },
  {
    title: 'React',
    imageUrl: 'https://docsearch.algolia.com/img/logos/react.jpg',
    siteUrl: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    title: 'Yarn',
    imageUrl: 'https://docsearch.algolia.com/img/logos/yarn.jpg',
    siteUrl: 'https://yarnpkg.com/lang/en/docs/',
  },
  {
    title: '',
    imageUrl: '',
    siteUrl: '',
  },
  {
    title: '',
    imageUrl: '',
    siteUrl: '',
  },
  {
    title: '',
    imageUrl: '',
    siteUrl: '',
  },
  {
    title: '',
    imageUrl: '',
    siteUrl: '',
  },
  {
    title: '',
    imageUrl: '',
    siteUrl: '',
  },
  {
    title: '',
    imageUrl: '',
    siteUrl: '',
  },
];


const features = [
  {
    title: 'Propulsé par Markdown',
    imageUrl: 'img/undraw_typewriter.svg',
    description: (
      <>
        Gagner du temps et se concentrer sur la documentation de du projet.
        Écrire simplement des documents et des articles de blog avec Markdown / MDX
        et Docusaurus publiera un ensemble de fichiers HTML statiques prêts à être diffusés.
        Je peux même intégrer des composants JSX dans mon Markdown grâce à MDX.
      </>
    ),
  },
  {
    title: 'Construit avec React',
    imageUrl: 'img/undraw_react.svg',
    description: (
      <>
        Étendre ou personnaliser la mise en page du projet en réutilisant React.
        Docusaurus peut être étendu tout en réutilisant le même en-tête et le même pied de page.
      </>
    ),
  },
  {
    title: 'Prêt pour les traductions',
    imageUrl: 'img/undraw_around_the_world.svg',
    description: (
      <>
        La localisation est préconfigurée. Utiliser Crowdin pour traduire les documents dans plus de 70 langues.
      </>
    ),
  },
  {
    title: 'Gestion des versions de document',
    imageUrl: 'img/undraw_version_control.svg',
    description: (
      <>
        Soutenir les utilisateurs sur toutes les versions du projet.
        La gestion des versions de document aide à synchroniser la documentation avec les versions du projet.
      </>
    ),
  },
  {
    title: 'Recherche de contenu',
    imageUrl: 'img/undraw_algolia.svg',
    description: (
      <>
        Aider la communauté à trouver facilement ce dont elle a besoin dans la documentation.
        Nous soutenons fièrement la recherche de documentation Algolia.
      </>
    ),
  },
];

function Resources({imageUrl, title, siteUrl}) {
  return (
    <div className="col ta-center w-20p">
      <a href={siteUrl} rel="noreferrer" target="_blank" alt={title}>
        <img class="h-50" src={imageUrl} alt={title} />
          <p>{title}</p>
      </a>
    </div>
  );
}

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}



function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img class="logo-index" src="img/otter-solid.svg" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div class="jc-between d-flex m-auto fx-wrap">
            <div class="ta-center w-20p">
              <img class="h-50" src="/img/logos/CSS3.svg" alt="CSS3" />
              <p class="uil-tt-upper uil-fw-semibold uil-lsp-big uil-ff-hind uil-color-telluric uil-fsz-11 lg:uil-fsz-12">CSS</p>
            </div>
            <div class="ta-center w-20p">
              <img class="h-50" src="/img/logos/HTML5.svg" alt="HTML5" />
              <p class="uil-tt-upper uil-fw-semibold uil-lsp-big uil-ff-hind uil-color-telluric uil-fsz-11 lg:uil-fsz-12">HTML</p>
            </div>
            <div class="ta-center w-20p">
              <img class="h-50" src="/img/logos/JavaScript.svg" alt="JavaScript" />
              <p class="uil-tt-upper uil-fw-semibold uil-lsp-big uil-ff-hind uil-color-telluric uil-fsz-11 lg:uil-fsz-12">JavaScript</p>
            </div>
            <div class="ta-center w-20p">
              <img class="h-50" src="/img/logos/Python.svg" alt="Python" />
              <p class="uil-tt-upper uil-fw-semibold uil-lsp-big uil-ff-hind uil-color-telluric uil-fsz-11 lg:uil-fsz-12">Python</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Allons voir !
            </Link>
          </div>
          <div class="topics">
            <style>
              @import url(./src/css/fontawesome/css/all.css);
            </style>
            <div class="topic-wrapper">
              <a class="topic" href="https://getbootstrap.com/" target="_blank">
              <img src="/img/logos/bootstrap.jpg" />
              </a>
              <span class="topic-name">bootstrap</span>
            </div>
            <div class="topic-wrapper">
              <a class="topic" href="https://jquery.com/" target="_blank">
                <img src="/img/logos/jquery.jpg" />
              </a>
              <span class="topic-name">jquery</span>
            </div>
            <div class="topic-wrapper">
              <a class="topic" href="https://sass-lang.com/" target="_blank">
                <img src="/img/logos/sass.png" />
              </a>
              <span class="topic-name">sass</span>
            </div>
            <div class="topic-wrapper">
              <a class="topic" href="https://fr.reactjs.org/" target="_blank">
                <img src="/img/logos/react.jpg" />
              </a>
              <span class="topic-name">react</span>
            </div>
            <div class="topic-wrapper">
              <a class="topic" href="https://redux.js.org/" target="_blank">
                <img src="/img/logos/redux.svg" />
              </a>
              <span class="topic-name">redux</span>
            </div>
            <div class="topic-wrapper">
              <a class="topic" href="https://git-scm.com/" target="_blank">
                <img src="/img/logos/Git.png" />
              </a>
              <span class="topic-name">git</span>
            </div>
            <div class="topic-wrapper">
              <a class="topic" href="https://nodejs.org/fr/" target="_blank">
                <img src="/img/logos/NodeJS.svg" />
              </a>
              <span class="topic-name">nodejs</span>
            </div>
            <div class="topic-wrapper">
              <a class="topic" href="https://classic.yarnpkg.com/fr/" target="_blank">
                <img src="/img/logos/yarn.jpg" />
              </a>
              <span class="topic-name">yarn</span>
            </div>
            <div class="topic-wrapper">
              <a class="topic" href="https://www.npmjs.com/" target="_blank">
                <img src="/img/logos/npm.png" />
              </a>
              <span class="topic-name">npm</span>
            </div>
            <div class="topic-wrapper">
              <a class="topic" href="https://babeljs.io/" target="_blank">
                <img src="/img/logos/babel.jpg" />
              </a>
              <span class="topic-name">babel</span>
            </div>
            
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>          
        )}
        <section className="resources uil-ph-20 uil-ff-hind uil-bgc-white uil-pb-48 lg:uil-pb-80 uil-pt-48 lg:uil-pt-80 css-w9ntn5-Section">
          <div className="uil-mh-auto uil-maw-500 uil-pos-relative uil-z-2 md:uil-maw-1200">
            <header class="md:uil-ta-center uil-mb-48 lg:uil-mb-80 uil-mh-auto md:uil-w-70p lg:uil-w-90p uil-ta-center">
              <h2 class="">Ressources</h2>
            </header>
            <div className="container jc-between d-flex m-auto fx-wrap">
              {resources.map((props, idx) => (
                <Resources key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
