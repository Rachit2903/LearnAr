import { useEffect } from 'react';
import { Howl, Howler } from 'howler';

const Sounds = {
    A: new Howl({ src: ['/sounds/A.mp3'] }),
    B: new Howl({ src: ['/sounds/B.mp3'] }),
    C: new Howl({ src: ['/sounds/C.mp3'] }),
    D: new Howl({ src: ['/sounds/D.mp3'] }),
    E: new Howl({ src: ['/sounds/E.mp3'] }),
    F: new Howl({ src: ['/sounds/F.mp3'] }),
    G: new Howl({ src: ['/sounds/G.mp3'] }),
    H: new Howl({ src: ['/sounds/H.mp3'] }),
    I: new Howl({ src: ['/sounds/I.mp3'] }),
    J: new Howl({ src: ['/sounds/J.mp3'] }),
    K: new Howl({ src: ['/sounds/K.mp3'] }),
    L: new Howl({ src: ['/sounds/L.mp3'] }),
    M: new Howl({ src: ['/sounds/M.mp3'] }),
    N: new Howl({ src: ['/sounds/N.mp3'] }),
    O: new Howl({ src: ['/sounds/O.mp3'] }),
    P: new Howl({ src: ['/sounds/P.mp3'] }),
    Q: new Howl({ src: ['/sounds/Q.mp3'] }),
    R: new Howl({ src: ['/sounds/R.mp3'] }),
    S: new Howl({ src: ['/sounds/S.mp3'] }),
    T: new Howl({ src: ['/sounds/T.mp3'] }),
    U: new Howl({ src: ['/sounds/U.mp3'] }),
    V: new Howl({ src: ['/sounds/V.mp3'] }),
    W: new Howl({ src: ['/sounds/W.mp3'] }),
    X: new Howl({ src: ['/sounds/X.mp3'] }),
    Y: new Howl({ src: ['/sounds/Y.mp3'] }),
    Z: new Howl({ src: ['/sounds/Z.mp3'] })
};

const ARapp = () => {
    useEffect(() => {
        const handleMarkerFound = (event) => {
            const markerId = event.target.id;
            console.log(event);
            console.log("hello friends how are you ", markerId);
            if (Sounds[markerId]) {
                Sounds[markerId].play();
            }
        };

        const handleMarkerLost = (event) => {
            const markerId = event.target.id;
            if (Sounds[markerId]) {
                Sounds[markerId].stop();
            }
        };

        const markers = document.querySelectorAll('a-marker');
        // console.log(markers);

        markers.forEach(marker => {
            marker.addEventListener('markerFound', handleMarkerFound);
            marker.addEventListener('markerLost', handleMarkerLost);
        });

        // return () => {
        //     markers.forEach(marker => {
        //         marker.removeEventListener('markerFound', handleMarkerFound);
        //         marker.removeEventListener('markerLost', handleMarkerLost);
        //     });
        // };


    }, []);

    return (
        <>
            <a-scene arjs="detectionMode: pattern;">
                <a-assets>
                    <a-asset-item id="A" src="/models/A-model/A.gltf"></a-asset-item>
                    <a-asset-item id="B" src="/models/B-model/B.gltf"></a-asset-item>
                    <a-asset-item id="C" src="/models/C-model/C.gltf"></a-asset-item>
                    <a-asset-item id="D" src="/models/D-model/D.gltf"></a-asset-item>
                    <a-asset-item id="E" src="/models/E-model/E.gltf"></a-asset-item>
                    <a-asset-item id="F" src="/models/F-model/F.gltf"></a-asset-item>
                    <a-asset-item id="G" src="/models/G-model/G.gltf"></a-asset-item>
                    <a-asset-item id="H" src="/models/H-model/H.gltf"></a-asset-item>
                    <a-asset-item id="I" src="/models/I-model/I.gltf"></a-asset-item>
                    <a-asset-item id="J" src="/models/J-model/J.gltf"></a-asset-item>
                    <a-asset-item id="K" src="/models/K-model/K.gltf"></a-asset-item>
                    <a-asset-item id="L" src="/models/L-model/L.gltf"></a-asset-item>
                    <a-asset-item id="M" src="/models/M-model/M.gltf"></a-asset-item>
                    <a-asset-item id="N" src="/models/N-model/N.gltf"></a-asset-item>
                    <a-asset-item id="O" src="/models/O-model/O.gltf"></a-asset-item>
                    <a-asset-item id="P" src="/models/P-model/P.gltf"></a-asset-item>
                    <a-asset-item id="Q" src="/models/Q-model/Q.gltf"></a-asset-item>
                    <a-asset-item id="R" src="/models/R-model/R.gltf"></a-asset-item>
                    <a-asset-item id="S" src="/models/S-model/S.gltf"></a-asset-item>
                    <a-asset-item id="T" src="/models/T-model/T.gltf"></a-asset-item>
                    <a-asset-item id="U" src="/models/U-model/U.gltf"></a-asset-item>
                    <a-asset-item id="V" src="/models/V-model/V.gltf"></a-asset-item>
                    <a-asset-item id="W" src="/models/W-model/W.gltf"></a-asset-item>
                    <a-asset-item id="X" src="/models/X-model/X.gltf"></a-asset-item>
                    <a-asset-item id="Y" src="/models/Y-model/Y.gltf"></a-asset-item>
                    <a-asset-item id="Z" src="/models/Z-model/Z.gltf"></a-asset-item>
                </a-assets>

                <a-marker id="A" type="pattern" url="/markers/pattern-A.patt">
                    <a-gltf-model src="#A" scale="5 5 5" position="0.5 0 0" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="B" type="pattern" url="/markers/pattern-B.patt">
                    <a-gltf-model src="#B" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="C" type="pattern" url="/markers/pattern-C.patt">
                    <a-gltf-model src="#C" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="D" type="pattern" url="/markers/pattern-D.patt">
                    <a-gltf-model src="#D" scale="0.01 0.01 0.01" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="E" type="pattern" url="/markers/pattern-E.patt">
                    <a-gltf-model src="#E" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="F" type="pattern" url="/markers/pattern-F.patt">
                    <a-gltf-model src="#F" scale="0.5 0.5 0.5" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="G" type="pattern" url="/markers/pattern-G.patt">
                    <a-gltf-model src="#G" scale="20 20 20" position="0 0 0" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="H" type="pattern" url="/markers/pattern-H.patt">
                    <a-gltf-model src="#H" rotation=" 0 90 0" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="I" type="pattern" url="/markers/pattern-I.patt">
                    <a-gltf-model src="#I" scale="0.1 0.1 0.1" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="J" type="pattern" url="/markers/pattern-J.patt">
                    <a-gltf-model src="#J" scale="5 5 5" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="K" type="pattern" url="/markers/pattern-K.patt">
                    <a-gltf-model src="#K" scale="0.01 0.01 0.01" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="L" type="pattern" url="/markers/pattern-L.patt">
                    <a-gltf-model src="#L" rotation=" 0 90 0" scale="1.5 1.5 1.5" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="M" type="pattern" url="/markers/pattern-M.patt">
                    <a-gltf-model src="#M" scale="2 2 2" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="N" type="pattern" url="/markers/pattern-N.patt">
                    <a-gltf-model src="#N" scale="0.5 0.5 0.5" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="O" type="pattern" url="/markers/pattern-O.patt">
                    <a-gltf-model src="#O" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="P" type="pattern" url="/markers/pattern-P.patt">
                    <a-gltf-model src="#P" scale="5 5 5" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="Q" type="pattern" url="/markers/pattern-Q.patt">
                    <a-gltf-model src="#Q" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="R" type="pattern" url="/markers/pattern-R.patt">
                    <a-gltf-model src="#R" scale="0.1 0.1 0.1" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="S" type="pattern" url="/markers/pattern-S.patt">
                    <a-gltf-model src="#S" scale="2 2 2" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="T" type="pattern" url="/markers/pattern-T.patt">
                    <a-gltf-model src="#T" rotation=" 0 90 0" scale="0.01 0.01 0.01" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="U" type="pattern" url="/markers/pattern-U.patt">
                    <a-gltf-model src="#U" scale="0.3 0.3 0.3" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="V" type="pattern" url="/markers/pattern-V.patt">
                    <a-gltf-model src="#V" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="W" type="pattern" url="/markers/pattern-W.patt">
                    <a-gltf-model src="#W" rotation=" 0 90 0" scale="0.003 0.003 0.003" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="X" type="pattern" url="/markers/pattern-X.patt">
                    <a-gltf-model src="#X" scale="3 3 3" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="Y" type="pattern" url="/markers/pattern-Y.patt">
                    <a-gltf-model src="#Y" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker id="Z" type="pattern" url="/markers/pattern-Z.patt">
                    <a-gltf-model src="#Z" scale="0.5 0.5 0.5" rotation="0 90 0" animation-mixer></a-gltf-model>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>
        </>
    );
};

export default ARapp;