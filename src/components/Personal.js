import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Map from './Map.js';


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
    const nextIndex = this.state.activeIndex === 4 - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? 4 - 1 : this.state.activeIndex - 1;
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

  getCharacter = () => {
    const { match, data, toName } = this.props;

    const name = toName(match.params.id);
    return data.find(el => el.person == name);
  }

  render() {
    const { activeIndex } = this.state;
    const character = this.getCharacter();    
    
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
              <a className="card-link" href={character.wikiLink}>{this.language.linkToWiki}</a>
            </div>
          </Col>        
          <Col md="4">
            <img src={character.avatar} className="personal-avatar" alt={character.person}/>
          </Col>
        </Row>
        <Row style={{ marginTop: '100px'}}>
          <Col md="8">
            <h4>{this.language.timeline}</h4>
            {timeLine != "" ? 
            <Timeline lineColor={'#ddd'}>
              {timeLine}
            </Timeline> : <div>Empty :(</div>
            }
          </Col> 
          <Col md="4">
            <div>
              <h6>{this.language.video}</h6>
              {
                character.video != "" ? 
              <img style={{ marginTop: '12px', cursor: 'pointer', maxWidth: '50%'}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fb.png" alt="video-background" onClick={this.toggle}/> : <div>Empty :(</div>
              }
            </div>
            <div style={{ marginTop: '50px' }}>
              <h6>{this.language.geo}</h6>              
              <Map location={character.location.center} marker={character.location.marker}/>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: '60px'}}>
          <Col md="6" style={{ margin: '0 auto' }}>
            <h4 style={{ marginBottom: '40px' }}>{this.language.gallery}</h4>
            {
              character.pictures != "" ? 
                <Carousel
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}>
                  <CarouselIndicators items={character.pictures} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel> : <div>Empty :(</div>
            }            
          </Col>
          <Col md="6">
          <div>
              <h4 style={{ marginBottom: '40px' }}>{this.language.biography}</h4>
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
             <iframe style={{margin: '0 auto', width: '100%', height: '400px'}}  src={character.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}