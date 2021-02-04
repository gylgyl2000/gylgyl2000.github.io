/* ReactJS */
import React from 'react';
import './style.css';
/* ReactJS */

/* Codepen */
import React from "https://cdn.skypack.dev/react";
/* Codepen */

const quotes = [
  {
    quote:
      "Tant qu'on fait rire, c'est des plaisanteries. Dès que c'est pas drôle, c'est des insultes.",
    author: "Coluche"
  },
  {
    quote: "Du sublime au ridicule, il n'y a qu'un pas.",
    author: "Napoléon Bonaparte"
  },
  {
    quote: "Un éclat de rire sinistre accompagne alors chacun de vos gestes.",
    author: "Emil Michel Cioran"
  },
  {
    quote: "C'est pas parce qu'on a rien à dire qu'il faut fermer sa gueule.",
    author: "Michel Audiard"
  },
  {
    quote:
      "Pourquoi essayer de faire semblant d'avoir l'air de travailler ? C'est de la fatigue inutile !",
    author: "Pierre Dac"
  },
  {
    quote:
      'Socrate disait : "Je sais que je ne sais rien", donc chacun de nous en sait plus que Socrate, puisque nous savons au moins que Socrate ne savait rien.',
    author: "Jean Amadou"
  },
  {
    quote: "Les femmes viennent de Venus. Les hommes mangent des Mars.",
    author: "MC Solar"
  },
  {
    quote:
      "On dit que le ridicule tue. Est-ce vrai ? Pas du tout ! Regardez autour de vous, il n'y a que des gens bien portants.",
    author: "Raymond Devos"
  },
  {
    quote:
      "Il n'y a rien de plus ridicule qu'un médecin qui ne meurt pas de vieillesse.",
    author: "Voltaire"
  },
  {
    quote: "La moquerie est la fumée des coeurs petits.",
    author: "Lord Alfred Tennyson"
  },
  {
    quote:
      "Si le ridicule se mettait à tuer, les problèmes démographiques seraient vite réglés.",
    author: "Gaëtan Faucer"
  },
  {
    quote: "Je me presse de rire de tout, de peur d'être obligé d'en pleurer.",
    author: "Pierre-Augustin Caron Beaumarchais"
  },
  {
    quote:
      "Le ridicule est l'arme favorite du vice. C'est par elle qu'en attaquant dans le fond des coeurs le respect qu'on doit à la vertu, il éteint enfin l'amour qu'on lui porte.",
    author: "Jean-Jacques Rousseau"
  },
  {
    quote:
      "Le martyre, c’est le seul moyen de devenir célèbre quand on n’a pas de talent.",
    author: "Pierre Desproges"
  },
  {
    quote:
      "Les amoureux campent rarement sur leurs positions : ils passent vite de l’inclination du cœur à l’inclinaison des corps...",
    author: "Daniel Confland"
  },
  {
    quote:
      "Tu vois ce vide au-dessus de nos têtes? C'est Dieu... Le silence, c'est Dieu, l'absence c'est Dieu. Dieu, c'est la solitude des hommes.",
    author: "Jean-Paul Sartre"
  },
  {
    quote:
      "Quand les hommes politiques ouvrent leur parapluie, leur niveau de précipitation à réformer devient nettement inférieur à la moyenne saisonnière.",
    author: "Daniel Confland"
  },
  {
    quote:
      "Les marques d’estime sont comme les promesses : elles n’engagent que ceux qui en font cas !",
    author: "Daniel Confland"
  },
  {
    quote:
      "La fête des pères est comme la fête des mères, sauf pour le cadeau qui coûte moins cher.",
    author: "Georges Herbert"
  },
  {
    quote:
      'Ce sont généralement les types qui disent "laissez-moi rire" qui ne se marrent jamais.',
    author: "Pierre Perret"
  },
  {
    quote:
      "Directeur pompes funèbres cherche personnel ayant le sens de l'humour, connaissant particulièrement la mise en boîte.",
    author: "Pierre Dac"
  },
  {
    quote: "L'humour est le plus court chemin d'un homme à un autre.",
    author: "Georges Wolinski"
  },
  {
    quote:
      "À la télé ils disent tous les jours : \"Y a trois millions de personnes qui veulent du travail.\" C'est pas vrai : de l'argent leur suffirait.",
    author: "Coluche"
  },
  {
    quote: "Les gens disent qu'ils sont seuls ? Mais à qui le disent-ils ?",
    author: "Charles de Leusse"
  },
  {
    quote:
      "Il faut cueillir les cerises avec la queue. J'avais déjà du mal avec la main !",
    author: "Coluche"
  },
  {
    quote: "Quand on mettra les cons sur orbite, t'as pas fini de tourner.",
    author: "Michel Audiard"
  },
  {
    quote: "Un pigeon, c'est plus con qu'un dauphin, d'accord... mais ça vole.",
    author: "Michel Audiard"
  },
  {
    quote:
      "Quand on voit tous ces top models anorexiques et qu'on sait ce qu'on les paye on se dit que ça fait cher le kilo.",
    author: "Philippe Geluck"
  },
  {
    quote:
      "- Quelle heure est-il ? - Midi cinq. - Dans une minute ce sera l'heure de Catherine. - Comment cela ? - Catherine de midi six !",
    author: "Pierre Dac"
  },
  {
    quote:
      "Je suis adroit de la main gauche et je suis gauche de la main droite.",
    author: "Raymond Devos"
  },
  {
    quote: "Il a un côté sympathique, seulement on le voit toujours de face.",
    author: "Francis Blanche"
  },
  {
    quote:
      "Je me suis marié deux fois : deux catastrophes. Ma première femme est partie, la deuxième est restée.",
    author: "Francis Blanche"
  },
  {
    quote:
      "Mille cinq cents oies du Périgord ont entamé une grève de la faim à quelques jours de Noël. On ignore encore les causes d'une telle décision.",
    author: "Daniel Prévost"
  },
  {
    quote:
      "Les deux caractéristiques essentielles de l'Anglais sont l'humour et le gazon. L'Anglais tond toujours son gazon très court, ce qui permet à son humour de voler au ras des pâquerettes.",
    author: "Pierre Desproges"
  },
  {
    quote:
      "Le travail c'est bien une maladie, puisqu'il y a une médecine du travail.",
    author: "Coluche"
  },
  {
    quote:
      "Les conneries c'est comme les impôts, on finit toujours par les payer.",
    author: "Michel Audiard"
  },
  {
    quote: "Heureux soient les fêlés, car ils laisseront passer la lumière.",
    author: "Michel Audiard"
  },
  {
    quote:
      "Quand on parle pognon, à partir d'un certain chiffre, tout le monde écoute.",
    author: "Michel Audiard"
  },
  {
    quote: "L'idéal quand on veut être admiré, c'est d'être mort.",
    author: "Michel Audiard"
  },
  {
    quote:
      "Le football n'intéresse que les politiciens, les enfants, et les fabricants de ballons.",
    author: "Michel Audiard"
  },
  {
    quote:
      "Dans les situations critiques, quand on parle avec un calibre bien en pogne, personne ne conteste plus. Y'a des statistiques là-dessus.",
    author: "Michel Audiard"
  }
];

const animations = [
  "bounce",
  "flash",
  "pulse",
  "rubberBand",
  "shakeX",
  "shakeY",
  "headShake",
  "swing",
  "tada",
  "wobble",
  "jello",
  "heartBeat",
  "backInDown",
  "backInLeft",
  "backInRight",
  "backInUp",
  "bounceIn",
  "bounceInDown",
  "bounceInLeft",
  "bounceInRight",
  "bounceInUp",
  "fadeIn",
  "fadeInDown",
  "fadeInDownBig",
  "fadeInLeft",
  "fadeInLeftBig",
  "fadeInRight",
  "fadeInRightBig",
  "fadeInUp",
  "fadeInUpBig",
  "fadeInTopLeft",
  "fadeInTopRight",
  "fadeInBottomLeft",
  "fadeInBottomRight",
  "flip",
  "flipInX",
  "flipInY",
  "flipOutX",
  "flipOutY",
  "lightSpeedInRight",
  "lightSpeedInLeft",
  "rotateIn",
  "rotateInDownLeft",
  "rotateInDownRight",
  "rotateInUpLeft",
  "rotateInUpRight",
  "hinge",
  "jackInTheBox",
  "rollIn",
  "zoomIn",
  "zoomInDown",
  "zoomInLeft",
  "zoomInRight",
  "zoomInUp",
  "slideInDown",
  "slideInLeft",
  "slideInRight",
  "slideInUp"
];

const animateCSS = (element, animation, prefix = "animate__") => {
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      quoteIndex: undefined
    };
  }

  componentDidMount = () => {
    this.handleClick();
  };

  handleClick = () => {
    let animation = Math.floor(Math.random() * animations.length);
    animateCSS(".animated", animations[animation]);
    let prevIndex = this.state.quoteIndex;
    let index = Math.floor(Math.random() * quotes.length);
    if (prevIndex === index) {
      let newIndex = () => {
        index = Math.floor(Math.random() * quotes.length);
      };
      while (prevIndex === index) {
        newIndex();
      }
    }
    this.setState({
      quote: quotes[index].quote,
      author: quotes[index].author,
      quoteIndex: index
    });
  };

  render() {
    return (
      <div className="px-3" id="wrapper-box">
        <div class="animated">
          <div className="lead" id="quote-box">
            <p id="text">« {this.state.quote} »</p>
            <h5 id="author">{this.state.author}</h5>
            <button className="btn btn-info" id="new-quote" onClick={this.handleClick}>Nouvelle citation</button>
            <a class="btn-o"
              href={`https://twitter.com/intent/tweet?text=${this.state.quote}%20-${this.state.author}`}
              className="btn"
              target="_blank"
              rel="noreferrer"
              id="tweet-quote"
              title="Tweeter cette citation !">
                <i class="bi bi-twitter"></i>
                Tweeter
            </a>
          </div>
        </div>
      </div>
    )
  }
}

/* ReactJS */
export default App;
/* ReactJS */

/* Codepen */
ReactDOM.render(<App />,
document.getElementById('root'));
/* Codepen */