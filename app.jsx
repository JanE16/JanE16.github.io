// import React from 'react';
// import ReactDOM from 'react-dom';
//
//
// document.addEventListener('DOMContentLoaded', function () {
//
//
//     class Header extends React.Component {
//         render() {
//             return  <div className={'button_div'}>
//                 <video id="bg" autoPlay muted loop>
//                     <source src="video/sofi_back.mp4" type="video/mp4" />
//                 </video>
//                 <button className={'x_button'}>X</button>
//                 {/*<div className={'box'}></div>*/}
//             </div>
//
//         }
//     }
//     // class X extends React.Component {
//     //     render(){
//     //         return <div className={'button_div'}>
//     //
//     //         </div>
//     //     }
//     // }
//
//
//
//
//
//
//
//
//     class App extends React.Component {
//         render(){
//             return <Header/>;
//
//         }
//     }
//
//     ReactDOM.render(
//         <App/>,
//
//         document.querySelector('#app')
//     );
//
//
//
//
//
// })

// polish RApp


import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function () {

    // landing page

    // class FirstPage extends React.Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             display : 'none'
    //         }
    //     }
    //
    //         render() {
    //             return <div className={'back'}>
    //                 <div className={'first_page_container'}>
    //                     <h1 className={'h1'}>Polish RApp</h1>
    //                     <p className={'app_description'}>Najważniejsze sample w polskim rapie</p>
    //                 </div>
    //                 <button className={'enter_button'}>START
    //                     <a href="../index2.html"></a>
    //                 </button>
    //
    //             </div>
    //         }
    //     }

        class RapperSection extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    playback : 1,
                }
            }

                playbackRat = (event) => {
                console.log(event.target.value/50)
                this.setState({
                    playback : event.target.value/50

                })

                }
                playThis = (event) => {
                    event.target.firstChild.playbackRate = this.state.playback
                    event.target.firstChild.play();
                console.log(event.target.firstChild)


                }



                render() {
                    return <div className={'section'}>
                        <input onChange={event => this.playbackRat(event)} type="range" min={'1'} max={'100'} style={{width: '80%'}}/>
                        <div onClick={this.playThis}  className={'box1'}>
                            <audio  style={{width: '100%', height: '100%'}} src={'audio/hity.mp3'}></audio>
                        </div>
                        <input onChange={event => this.playbackRat(event)} type="range" min={'1'} max={'100'} style={{width: '80%'}}/>
                        <div onClick={this.playThis}  className={'box1'}>
                            <audio  style={{width: '100%', height: '100%'}} src={'audio/pieklo.mp3'}></audio>
                        </div>
                        <input onChange={event => this.playbackRat(event)} type="range" min={'1'} max={'100'} style={{width: '80%'}}/>
                        <div onClick={this.playThis}  className={'box1'}>
                            <audio  style={{width: '100%', height: '100%'}} src={'audio/sekundy.mp3'}></audio>
                        </div>
                        {/*<div onClick={this.playThis}   className={'box4'}>*/}
                            {/*<audio onClick={this.playThis}  style={{width: '100%', height: '100%'}} src={'audio/1.mp3'}></audio>*/}
                            {/*<input onChange={event => this.playbackRat(event)}type="range" min={'1'} max={'100'} style={{width: '80%'}}/>*/}
                        {/*</div>*/}
                        {/*<div onClick={this.playThis}   className={'box5'}>*/}
                            {/*<audio onClick={this.playThis}  style={{width: '100%', height: '100%'}} src={'audio/1.mp3'}></audio>*/}
                            {/*<input onChange={event => this.playbackRat(event)} type="range" min={'1'} max={'100'} style={{width: '80%'}}/>*/}
                        {/*</div>*/}
                        {/*<div onClick={this.playThis}   className={'box6'}>*/}
                            {/*<audio onClick={this.playThis}  style={{width: '100%', height: '100%'}} src={'audio/1.mp3'}></audio>*/}
                            {/*<input onChange={event => this.playbackRat(event)} type="range" min={'1'} max={'100'} style={{width: '80%'}}/>*/}
                        {/*</div>*/}
                    </div>
                }
        }







    class App extends React.Component {
        render(){
            return <RapperSection/>;
            // return <FirstPage/>

        }
    }

    ReactDOM.render(
        <App/>,

        document.querySelector('#app')
    );





})