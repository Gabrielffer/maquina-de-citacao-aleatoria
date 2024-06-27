
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './App.scss';
import './dispositivosMoveis.css';
import {useState, useRef} from 'react';

  function App(){
    const citacoes = [
      {
        frase: 'E conhecereis a verdade e a verdade vos libertará.',
        autor: 'Jesus Cristo',
        url: process.env.PUBLIC_URL + '/imgs_app/jesus.jpg',
        link: 'https://pixabay.com/photos/jesus-christ-religion-jesus-898330/'
      },
      {
        frase: 'Aquele que domina os outros é forte, mas aquele que domina a si mesmo é ainda mais poderoso.',
        autor: 'Lao-Tsé',
        url: process.env.PUBLIC_URL + '/imgs_app/tao.jpg',
        link: 'https://pixabay.com/photos/zen-yin-yang-spirituality-harmony-5533487/'
      },
      {
        frase: 'É a própria mente de um homem, e não seu inimigo ou adversário, que o seduz para caminhos maléficos.',
        autor: 'Siddharta Gautama (Buda)',
        url: process.env.PUBLIC_URL + '/imgs_app/buda.jpg',
        link: 'https://pixabay.com/photos/lord-budha-teaching-pictures-1991239/'
      },
      {
        frase: 'Querias ser livre. Para essa liberdade, só há um caminho: o desprezo das coisas que não dependem de nós.',
        autor: 'Epicteto',
        url: process.env.PUBLIC_URL + '/imgs_app/epicteto.png',
        link: 'https://pixabay.com/illustrations/ai-generated-stoicism-man-greece-8445711/'
      },
      {
        frase: 'Quando você se ofender com as faltas de alguém, vire-se e estude os seus próprios defeitos. Cuidando deles, você esquecerá a sua raiva e aprenderá a viver sensatamente.',
        autor: 'Marco Aurélio',
        url: process.env.PUBLIC_URL + '/imgs_app/marco.jpg',
        link: 'https://pixabay.com/photos/philosopher-stoic-stoicism-7992125/'
      },
      {
        frase: 'Se vives de acordo com as leis da natureza, nunca serás pobre; se vives de acordo com as opiniões alheias, nunca serás rico.',
        autor: 'Sêneca',
        url: process.env.PUBLIC_URL + '/imgs_app/seneca.jpg',
        link: 'https://pixabay.com/photos/seneca-philosopher-statue-8026623/'
      }
    ];

    const ttlCitacoes = citacoes.length;

    const [indice, atIndice] = useState(Math.floor(Math.random() * ttlCitacoes));

    const spanIcone = useRef();

    const mudarCitacao = () => {
      atIndice(mudarIndice());
    }

    const mudarIndice = () => {
      let nvIndice;
      do{
        nvIndice = Math.floor(Math.random() * ttlCitacoes);
      }while(nvIndice === indice);
      atIndice(nvIndice);
      return nvIndice;
    }

    const gerenciarBt = () => {
      spanIcone.current.className = 'spinner-grow spinner-grow-sm';
      setTimeout(() => {
        mudarCitacao();
        spanIcone.current.className = '';
      }, 1300);
    }

    return (
      <div>
      <header className='container-fluid bg-dark text-secondary'>
        <h1>Máquina de Citação Aleatória</h1>
      </header>
      <main id='quote-box'>
        <div className='row'>
          <div className='col-sm-8'>
            <blockquote id='citacao'>
              <p id='text'>{citacoes[indice].frase}</p>
            </blockquote>
            <div id='div_autor'>
              <span id='author'>
                - {citacoes[indice].autor}
              </span>
            </div>
            <div id='div_bts'>
              <a href='http://twitter.com/intent/tweet' target='_blank' id='tweet-quote'>
                <button className='btn btn-sm btn-primary'>
                  <i className='bi bi-twitter-x'></i>
                </button>
              </a>
              <button id='new-quote' className='btn btn-success' onClick={() => gerenciarBt()}>
                Nova Citação &nbsp;
                <span ref={spanIcone}></span>
              </button>
            </div>
          </div>
          <div className='col-sm-4'>
            <a href={citacoes[indice].link} target='_blank'>
              <img src={citacoes[indice].url} id='img_cartao' className='card-img-top rounded-circle'/>
            </a>
          </div>
        </div>
      </main>
      <footer className='container-fluid bg-dark text-info'>
        <p>Desenvolvido por <a href='https://github.com/Gabrielffer' target='_blank' className='text-primary'>Gabriel F.F</a></p>
      </footer>
      </div>
    );
  }

export default App;