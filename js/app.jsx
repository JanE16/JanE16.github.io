import React from 'react';
import ReactDOM from 'react-dom';
import rawSamples from "./sample_modules";

document.addEventListener('DOMContentLoaded', function () {
    // landing
    class FirstPage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                display : 'none',
            }
        }
        render() {
            return <div className={'back'}>
                <div className={'first_page_container'}>
                    <div className={'name_wrap'}>
                        <div className={'trade'}></div>
                        <h1 className={'h1'}>rApp</h1>
                    </div>

                </div>
            </div>
        }
    }

    class Lists extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                samplesActive: [],
                title: this.title,
                artist: this.artist,
                url: this.url,
                divClass: ''
            }
        }

        previev =(e) => {
            e.target.previousElementSibling.play()

        }
        render(){
            return <div className={"div_choose"}>
                <p className={"p_sample_list"}>{this.props.title} ({this.props.artist})</p>
                <a href={this.props.url}></a>
                <button className={"btn_choose"} onClick={() =>this.props.addPattern(this.props.id)}>add to pattern</button>
                <audio src={this.props.url}></audio>
                <button className={'prev_btn'} onClick={e=> this.previev(e)}>prev</button>
            </div>
        }
    }

    class Sample extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                playback: 1,
                tune: this.props,
            }
        }
        componentDidMount(){
            this.sample = soundManager.createSound({
                url:  this.props.tune,
                autoLoad: true,
                autoPlay: false,
                multiShot: false,
                stream: true,
                position: 0
            });
        }
        playbackRate = event => {
            this.setState({
                playback : event.target.value/this.props.bpm
            })
        }
        play = event => {
            this.sample.setPlaybackRate(this.state.playback)
            this.sample.play()
        }


        render() {
            return <div className={'div33'}>
                <div className={'artist_box'}>
                    <div className={'button_sample'} onTouchStart={this.play}  onMouseDown={this.play}>
                        <p className={"p_sample_description"}>{this.props.title}</p>
                    </div>
                </div>
                <input onChange={this.playbackRate} type="text" placeholder={"enter BPM value"}/>
                {/*tutaj dodaję guzik z eventem remove (metoda removePattern)*/}
                <button onClick={() => this.props.remove(this.props.id)} className={'delete'}>{'delete'}</button>
            </div>
        }
    }

    // class ShowLibrary extends React.Component {
    //     constructor(props) {
    //         super(props)
    //         this.state = {
    //             display: 'none'
    //         }
    //     }
    //     render() {
    //         return <button className={'show'}>show library</button>
    //     }
    // }

    class App extends React.Component {
        constructor(props) {
            super(props)
            this.state ={
                samplesActive: [],
            }
        }

        // ta metoda ma usuwać guzik z samplem z patternu
        removePattern = (id) => {
            console.log(id)
            function findId(el) {
                return el.id ===id
            }

            let chuj=this.state.samplesActive.findIndex(findId)
            console.log(chuj)
            // console.log(this.state.samplesActive)
            this.setState({
                samplesActive: [
                    ...this.state.samplesActive.slice(0, chuj),
                        ...this.state.samplesActive.slice(chuj+1, this.state.samplesActive.length)
                ]
            })
        }

        addPattern = (id) => {
            // console.log(id)
            // console.log(this.state.samplesActive)
            // console.log(rawSamples)
            // if (this.state.samplesActive.forEach(function (el) {
            //         el.id !==id
            //     }))
            this.setState({
                samplesActive: [...this.state.samplesActive, rawSamples[id-1]]
            });
        };
        render(){
            const buttons = rawSamples.map((sample, id) => {
                return <Lists addPattern={this.addPattern} id={sample.id} key={sample.url} url={sample.url} title={sample.title} artist={sample.artist}/>
            });
            const samples = this.state.samplesActive.map((sample, id) => {
                // tutaj dodana jako props metoda this.removePattern
               return <Sample remove={this.removePattern} id={sample.id} key={sample.title} tune={sample.url} bpm={sample.bpm} title={sample.title}/>
            });
            return <section>
                <FirstPage/>
                {/*<ShowLibrary/>*/}
                <div className={'list_section'}>{buttons}</div>
                <div className={'second_section'}>{samples}</div>
            </section>;
        }
    }

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );
});

// uwagi : poprawić usuwanie buttonów tak żeby nie musieć przepisywać id całej bazy danych za każdym razem jak będzie coś dodawane.
//     to słabe rozwiązanie. Id tablicy odpowiada jej indeksowi, nie trzeba dodawać id do bazy danych sampli