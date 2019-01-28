import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet' wait for this to be used;


const phrases = {
  en: {
    work: 'Belarusian photographer',
    linkToWiki: 'More info on Wiki',
    timeline: 'Quick timeline',
    gallery: 'A small photo gallery',
    video: 'Checkout the video about Photographer:',
    geo: 'Geographical location of work',
    biography: 'Full biography',
    checkout: 'Checkout'
  },
  ru: {
    work: 'Белорусский фотограф',
    linkToWiki: 'Больше информации',
    timeline: 'Краткая история',
    gallery: 'Небольшая галлерея',
    video: 'Видео о фотографе:',
    geo: 'Географическое место работы',
    biography: 'Полная биография',
    checkout: 'Посмотреть'
  },
  by: {
    work: 'Беларускі фатограф',
    linkToWiki: 'Больш інфармацыі',
    timeline: 'Кароткая гісторыя',
    gallery: 'Невялікая галерэя',
    video: 'Відэа пра фатографа:',
    geo: 'Геаграфічнае месца працы',
    biography: 'Поўная біяграфія',
    checkout: 'Паглядзець'
  }
}

const character = {
  "id" : "1",
  "avatar" : "",
  "status" : "normal",
  "person": "Міхаіл Уладзіміравіч Анемпадыстаў",
  "birthday": "16 сакавіка 1964",
  "motherland": "Мінск, СССР",
  "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Aniempadystau_Michal_2012.jpg/1280px-Aniempadystau_Michal_2012.jpg",
  "quote": "У мяне няма каханага колеру, каханай песні, каханай стравы, таму што мне больш падабаецца разнастайнасць і спалучэнне",
  "pictures": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Aniempadystau_Michal_2012.jpg/1280px-Aniempadystau_Michal_2012.jpg",
      "caption": "Міхаіл Уладзіміравіч Анемпадыстаў"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Aniempadystau_Michal_2012.jpg/1280px-Aniempadystau_Michal_2012.jpg",
      "caption": "Міхаіл Уладзіміравіч Анемпадыстаў"
    },
  ],
  "video": "https://www.youtube.com/watch?v=-A-1kSc2IXc",
  "died": "23 студзеня 2018",
  "about": {
    "life": [
      "Міхаіл Уладзіміравіч Анемпадыстаў нарадзіўся 16 сакавіка 1964 г. у Мінску ў рускай сям’і[2]. Спачатку Міхал з бацькамі жыў у Мінску на бульвары Шаўчэнкі а пасля сям’я пераехала ў раён Камароўкі (г. Мінск). Міхал лічыў Мінск сваім горадам: «Я мянчук. Жылі мы на бульвары Шаўчэнкіа пасля пераехалі на Камароўку. Так што для мяне Менскбезумоўнародны горадякі я люблю і нават ведаю»[3]. Маці Міхала нарадзілася ў Львовеале сваімі каранямі паходзіць з-пад горада Варонежадзе яе дзеда і бабулю раскулачылі пасля Кастрычніцкага перавароту ў Расіі ў 1917 г.: Міхалавага прадзеда саслалі на Салаўкіа прабабулю і пяць яе дачок (у тым ліку і бабулю Міхала) выселілі ў найбліжэйшы населены пункт каля Варонежа[4].",

      "Бабуля Міхала выйшла замуж за чыгуначніказ якім у 1945 г. пераехала на сталае жыхарства ў далучаны да Савецкага Саюза горад Львоў[5]. Маці Міхала працавала на геаграфічным факультэце БДУ ў Мінску[6]. Бацька Міхала нарадзіўся ў горадзе Рагачовекуды сям’я бацькі патрапіла ў час Першай сусветнай вайныпераехаўшы ў Рагачоў з Падмаскоўя[7]. 6 верасня 1937 г. у Рагачове дзед Міхала быў арыштаваны супрацоўнікамі ГПУ і расстраляны ў кастрычніку 1937 г.калі бацька Міхала (Уладзімір) быў першакласнікам[8]. Бацька Уладзімір у часы Другой сусветнай вайны знаходзіўся ў Баранавічаха пасля вайны паступіў у Маскоўскі горны інстытут[9]. Частка Міхалавых рускіх сваякоў (стрыечная бабуля) пераехала ў Польшчу[10]. Прозвішча «Анемпадыстаў» утворана ад мужчынскага імя «Анемпадыст»якое маецца ў праваслаўных святцах[11]. Па выказванні Міхалаяго «досыць экзатычнае» прозвішча «цяжка кладзецца на вуха»а таму Міхалу прыходзілася чуць ад прачытання іншымі людзьмі нават такія версіі яго прозвішча як «Антыфашыстаў» ці «Апладысмэнтаў»да чаго сам Міхал адносіцца з гумарам і разуменнем[12]. Яго сапраўднае імя «Міхаіл»але яшчэ ў часы навучання ў мастацкім вучылішчы з падачы сяброў за ім замацаваўся неафіцыйны «польскі» варыянт імя «Міхал» (з націскам на першы склад)бо Міхаіл Аменпадыстаў часта выязджаў у савецкія часы за мяжу да сваякоў (па стрыечнай бабулі) у Польшчушто для савецкага часу было вялікім прэстыжам і «дэфіцытам»[13]. ",

      "З таго часу ён пачаў публічна карыстацца варыянтам «Міхал» (з націскам на другі склад)а не «Міхаіл»хоць не мае этнічна польскіх каранёў[14].Жонкай Міхала Анемпадыстава была Алена Георгіеўна Дашкевіч. У дзяцінстве Міхал марыў стаць заолагам альбо біёлагамвандроўнікам і шукальнікам скарбаў[18]. Добра маляваць пачаў у дзяцінстве — свае першыя малюнкі Міхал размяшчаў ў сваіх энцыклапедыях пра жывёлякія рабіў сам: рабіў старонкі з уласна намаляванымі малюскамііншымі рознымі жывёламі і асабіста падпісваў[19]. Рос у рускамоўным асяроддзіале яшчэ ў школьныя часы захапіўся беларускай мовай і беларускай культурайчаму ён пачаў надаваць вялікую ўвагу і што пачаў даследваць і пазней развіваць ужо сам[20]. Глебай гэтага была спрыяльная атмасфера ў коле яго знаёмых: адным з лепшых сяброў Міхала быў тады Андрэй Занеўскічый бацька працаваў на факультэце архітэктуры ў Беларускім політэхнічным інстытуце і запрашаў да сябе дамоў беларускіх мастакоўякія ўжывалі беларускую мову ў гасцях[21]. Спрыялі таксама і падарожжы па беларускай правінцыідзе Міхал непасрэдна пазнаёміўся з багатай і цікавай беларускай народнай культурай[22]. ",

      "Вучыўся ў дзіцячай народнай студыі выяўленчага мастацтва пры Палацы культуры тэкстыльшчыкаў (1965—1985) у Мінскуякой кіраваў беларускі жывапісец Васіль Сумараў[23]. У 1979—1983 гг. вучыўся і скончыў Мінскае мастацкае вучылішча (цяпер — Мінскі дзяржаўны мастацкі каледж імя А. К. Глебава)дзе панавала пэўная свабода і плюралізма само вучылішча стала прыкметнай кузняй творчых асоб[24]. На першым курсе яшчэ не вельмі добра ведаў беларускую мову і здаў іспыт па беларускай мове на 3 балы з 5 мажлівыхале на трэцім курсе ўжо чытаў з захапленнем Уладзіміра Караткевічаа на чацвёртым курсе спецыяльна папрасіў настаўніцу пераздаць іспыт па беларускай мове і пераздаў яго на «пяцёрку»[25]. Дыпломная работа ў вучылішчы была па плакату[26]. Непрацяглы час уваходзіў у склад мінскай нефармальнай маладзёжнай суполкіякая мела назву «пацыфісты» (неахіпі)і пачаў з таго часу насіць звычайна доўгія валасы. Усе нефармальныя маладзёжныя суполкі аж да распаду СССР знаходзіліся пад пільнай увагай КДБ ці міліцыітаму за доўгія валасы быў аднойчы схоплены міліцыяй і меў непрыемнасці[27]. Па ўласным прызнанніМіхал своечасова перастаў цікавіцца «пацыфістамі» (неахіпі)бо там прысутнічалі наркотыкіі многія юнакіхто своечасова не выйшаў з суполкіна жальзагінулі ад наркотыкаў[28]. ",

      "У вучылішчы бачыўякі робіцца пераслед з боку міліцыі і дырэктара вучылішча юнакамшто размаўлялі без аніякіх крамольных думак на беларускай мове ў вучылішчы і па-за яго межамі[29]. Удзельнічаў у маладзёжным грамадскім аб’яднанні «Беларуская Майстроўня» (1979—1984)уступіўшы ў суполку ў 1982 г.[30] Прывёў Міхала ў суполку Тодар Кашкурэвіч[31]. Пазней Міхал сам прывёў у «Беларускую Майстроўню» сваіх сяброў — Сяргея Харэўскага і Андрэя Лапцёнка (апошнія два з’яўляюцца адзін аднаму стрыечнымі братамі і ім было па 15 год)[32]Юлію Лыскову[33]. Міхал Анемпадыстаў вельмі цаніў свой досвед і сувязіатрыманыя ў «Беларускай Майстроўні». У «Майстроўні» ёнпаводле ўласнага сведчаннязнайшоў для сябе тоешто цікавіла — магчымасць свабодна дакрануцца да беларускай мовыгісторыі і культуры і жыць імі[34]. Яму асабліва падабалася слухаць у суполцы даклады і мець мажлівасць размаўляць па-беларуску[35]. Анемпадыстаў адзначаешто ў «Беларускую Майстроўню» (1979—1984) людзей вяла цікавасць моладзі да нацыянальнай культурыа не нейкі пратэст супраць афіцыйнай улады[36]. У 1983—1985 гг. прайшоў тэрміновую службу ва Узброеных сілах СССР[37]. У час службы ў войску ліставаўся са сваімі сябрамі з «Беларускай Майстроўні»асабліва з Сяргеем Харэўскім і Вінцуком Вячоркам: Харэўскі з радасцю паведамляў Міхалушто ў Мінску партыйныя ўлады зацвердзілі план рэстаўрацыі гістарычнай забудовы цэнтра Мінска — абнавіць і аднавіць усе каталіцкія і ўніяцкія кляштары мінскага Верхняга горадау Траецкім прадмесці адкрыць музейцалкам рэстаўраваць Татарскае прадмесце[38][39]. Аб сваіх густах Міхал выказаўся: «У мяне няма любімага колерулюбімай песнілюбімай стравытаму што мне болей падабаецца разнастайнасць і спалучэнне»"
    ],
    "timeline": [
      {
        "date": '16 сакавіка 1964',
        "content": "Радзіўся ў Мінску, СССР"
      },
      {
        "date": "1987",
        "content": "выстаўка аб’яднання «Галіна» на Рэспубліканскай выстаўцы плаката (г. Мінск, Беларусь)."
      },
      {
        "date": "1988",
        "content": "выстаўка «Мы» (г. Мінск, Беларусь)."
      },
      {
        "date": "1990",
        "content": "выстаўка «Грюнвальд» (г. Мінск, Беларусь)."
      },
      {
        "date": "1992",
        "content": "выстаўка «Калядная Выстава» (г. Мінск, Беларусь)."
      },
      {
        "date": "2008 — 2011",
        "content": "выстаўка «Беларускі плакат» (г. Варшава; г. Берлін; г. Дрэздэн; г. Брусель; г. Тулуза; г. Бон)."
      },
      {
        "date": "2010",
        "content": "выстаўка «Рэканструкцыя Перабудовы» (г. Вільнюс, Літва)."
      },
      {
        "date": "2011",
        "content": "выстаўка «Перабудова. Афіша на свабодзе» (г. Морж, Швейцарыя)."
      },
      {
        "date": "23 студзеня 2018",
        "content": "Памёр"
      }
    ]
  }
}

export default class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, modal: false };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.language = phrases.by;
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === character.pictures.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? character.pictures.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  getRandomColor() {    
    const colors = ['#e86971', '#76bb7f', '#61b8ff'];
  
    return { 'background' : `${colors[Math.floor(Math.random ()*3 )]}`, 'color' : '#ffffff' }
  }

  changeLanguage(language) {
    if(language === 'english') {
      this.language = phrases.en;
    }
    if(language === 'russian') {
      this.language = phrases.ru;
    }
    if(language === 'belarussian') {
      this.language = phrases.by;
    }
  }

  render() {
    const { activeIndex } = this.state;
    
    // slides
    const slides = character.pictures.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    // timeline elements
    const timeLine = character.about.timeline.map((item, index) => {
      const color = this.getRandomColor();
      return (
        <TimelineItem
          className="duraa"
          key= {index}
          dateText={item.date}
          style={{ color: '#ddd'}}
          dateInnerStyle={color}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 1px black',
          }}
        >
          <p>{item.content}</p>          
        </TimelineItem>
      )
    });
    
    // biography elements
    const biography = character.about.life.map((item) => {
      return (
        <p>{item}</p>
      )
    });    

    return(
      <div>
        <Row>
          <Col md="8">
            <div className="person-first-info">
              <h1 className="person-name">{character.person}</h1>
              <p className="person-quote">{character.quote}</p>
              <p className="person-title">{this.language.work}</p>
              <a className="card-link" href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0">{this.language.linkToWiki}</a>
            </div>
          </Col>        
          <Col md="4">
            <img src={character.imageSrc} className="personal-avatar" alt={/* person.name */ 'avatar'}/>
          </Col>
        </Row>
        <Row style={{ marginTop: '100px'}}>
          <Col md="8">
            <h4>{this.language.timeline}</h4>
            <Timeline lineColor={'#ddd'}>
              {timeLine}
            </Timeline>
          </Col> 
          <Col md="4">
            <div>
              <h6>{this.language.video}</h6>
              <img style={{ marginTop: '12px', cursor: 'pointer', maxWidth: '100%'}} src={character.imageSrc} alt="video-background" onClick={this.toggle}/>
            </div>
            <div style={{ marginTop: '50px' }}>
              <h6>{this.language.geo}</h6>
              <div id="map"></div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: '60px'}}>
          <Col md="12">
            <h4 style={{ marginBottom: '40px' }}>{this.language.gallery}</h4>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}>
              <CarouselIndicators items={character.pictures} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
            <div>
              <h4 style={{ marginTop: '30px' }}>{this.language.biography}</h4>
              <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                {this.language.checkout}
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    {biography}
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
          </Col>
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{character.person}</ModalHeader>
          <ModalBody>
             <iframe style={{margin: '0 auto'}} width="600" height="400" src="https://www.youtube.com/embed/-A-1kSc2IXc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}