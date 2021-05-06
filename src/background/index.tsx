import React from 'react'
import Particles from "react-tsparticles";
import MMCLogo from '../theme/images/MMCLogoHvid.png'
import styles from './index.module.scss'

class MyParticles extends React.Component {

    constructor(props: any) {
        super(props);

        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }

    particlesInit(main: any) {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    }

    particlesLoaded(container: any) {
        console.log(container);
    }

    render() {
        return (
            <>
                <Particles
                    id="tsparticles"
                    init={this.particlesInit}
                    loaded={this.particlesLoaded}
                    height="100%"
                    width="100%"
                    options={{
                        fpsLimit: 120,
                        particles: {
                            number: {
                                value: 10,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            color: {
                                value: "#FAFF00",
                            },
                            shape: {
                                type: "circle"
                            },
                            opacity: {
                                value: 1
                            },
                            size: {
                                value: 1,
                                random: {
                                    enable: true,
                                    minimumValue: 0
                                },
                                animation: {
                                    enable: true,
                                    speed: 5,
                                    minimumValue: 3,
                                    sync: false
                                }
                            },
                            move: {
                                enable: true,
                                speed: 1,
                                direction: "none",
                                random: false,
                                straight: false,
                                out_mode: "out",
                                warp: true
                            }
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                resize: true
                            }
                        },
                        retina_detect: true,
                        background: {
                            color: "#02001A"
                        }
                    }}
                />
                <div className={styles['logo-container']}>
                    <img className={styles['mmc-logo']} src={MMCLogo} alt="MMCLogo" />
                </div>
            </>
        )
    }
}

export default MyParticles