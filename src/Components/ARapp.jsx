
const ARapp = () => {
    return (
        <>
            <a-scene arjs="detectionMode: pattern;" >

                <a-assets>
                    <a-asset-item id="A" src="/models/A-model/A.gltf"></a-asset-item>
                    <a-assest-item id="B" src="/models/B-model/B.gltf"></a-assest-item>
                    <a-assest-item id="C" src="/models/C-model/C.gltf"></a-assest-item>
                    <a-assest-item id="D" src="/models/D-model/D.gltf"></a-assest-item>
                    <a-assest-item id="E" src="/models/E-model/E.gltf"></a-assest-item>
                    <a-assest-item id="F" src="/models/F-model/F.gltf"></a-assest-item>
                    <a-assest-item id="G" src="/models/G-model/G.gltf"></a-assest-item>
                    <a-assest-item id="H" src="/models/H-model/H.gltf"></a-assest-item>
                    <a-assest-item id="I" src="/models/I-model/I.gltf"></a-assest-item>
                    <a-assest-item id="J" src="/models/J-model/J.gltf"></a-assest-item>
                    <a-assest-item id="K" src="/models/K-model/K.gltf"></a-assest-item>
                    <a-assest-item id="L" src="/models/L-model/L.gltf"></a-assest-item>
                    <a-assest-item id="M" src="/models/M-model/M.gltf"></a-assest-item>
                    <a-assest-item id="N" src="/models/N-model/N.gltf"></a-assest-item>
                    <a-assest-item id="O" src="/models/O-model/O.gltf"></a-assest-item>
                    <a-assest-item id="P" src="/models/P-model/P.gltf"></a-assest-item>
                    <a-assest-item id="Q" src="/models/Q-model/Q.gltf"></a-assest-item>
                    <a-assest-item id="R" src="/models/R-model/R.gltf"></a-assest-item>
                    <a-assest-item id="S" src="/models/S-model/S.gltf"></a-assest-item>
                    <a-assest-item id="T" src="/models/T-model/T.gltf"></a-assest-item>
                    <a-assest-item id="U" src="/models/U-model/U.gltf"></a-assest-item>
                    <a-assest-item id="V" src="/models/V-model/V.gltf"></a-assest-item>
                    <a-assest-item id="W" src="/models/W-model/W.gltf"></a-assest-item>
                    <a-assest-item id="X" src="/models/X-model/X.gltf"></a-assest-item>
                    <a-assest-item id="Y" src="/models/Y-model/Y.gltf"></a-assest-item>
                    <a-assest-item id="Z" src="/models/Z-model/Z.gltf"></a-assest-item>

                </a-assets>


                <a-marker type="pattern" url="/markers/pattern-A.patt">
                    <a-gltf-model src="#A" scale="5 5 5" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-B.patt">
                    <a-gltf-model src="#B" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-C.patt">
                    <a-gltf-model src="#C" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-D.patt">
                    <a-gltf-model src="#D" scale="0.01 0.01 0.01" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-E.patt">
                    <a-gltf-model src="#E" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-F.patt">
                    <a-gltf-model src="#F" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-G.patt">
                    <a-gltf-model src="#G" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-H.patt">
                    <a-gltf-model src="#H" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-I.patt">
                    <a-gltf-model src="#I" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-J.patt">
                    <a-gltf-model src="#J" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-K.patt">
                    <a-gltf-model src="#K" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-L.patt">
                    <a-gltf-model src="#L" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-M.patt">
                    <a-gltf-model src="#M" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-N.patt">
                    <a-gltf-model src="#N" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-O.patt">
                    <a-gltf-model src="#O" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-P.patt">
                    <a-gltf-model src="#P" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-Q.patt">
                    <a-gltf-model src="#Q" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-R.patt">
                    <a-gltf-model src="#R" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-S.patt">
                    <a-gltf-model src="#S" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-T.patt">
                    <a-gltf-model src="#T" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-U.patt">
                    <a-gltf-model src="#U" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-V.patt">
                    <a-gltf-model src="#V" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-W.patt">
                    <a-gltf-model src="#W" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-X.patt">
                    <a-gltf-model src="#X" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-Y.patt">
                    <a-gltf-model src="#Y" animation-mixer></a-gltf-model>
                </a-marker>

                <a-marker type="pattern" url="/markers/pattern-Z.patt">
                    <a-gltf-model src="#Z" animation-mixer></a-gltf-model>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>
        </>
    );
}

export default ARapp;

