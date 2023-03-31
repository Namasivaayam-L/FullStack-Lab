import React,{useState} from 'react'
import images from './imgImports'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const ImgSlider = () => {
    const [idx, setIdx] = useState(0)
    const [imgs,] = useState(images)
    const styles = {
        contdiv: {
            width: '95vw',
            height: '95vh',
            display: 'flex',
            overflow:'hidden',
            position:'relative',
            left:'5%',
        },
        arrow: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        dot: {
            // position: 'relative',
            // top:'50%'
        },
        wholediv: {
            justifyContent: 'center',
            alignItems: 'center',
            overflow:'hidden',
            display: 'flex',
            flexDirection:'column'
        },
        dotBtn: {
            all:'unset',
            margin:'10px 0px 0px 0px'
        }
    }
    const prevImg = () => setIdx((idx-1)<0?imgs.length-1+idx:idx-1)
    const nxtImg = () => setIdx((idx + 1) % imgs.length)
    return (
        <div style={styles.wholediv}>
            <div style={styles.contdiv}>
                <button onClick={prevImg} styles={styles.arrow}>
                    <ArrowBackIosNewIcon/>
                </button>
                    <img src={`${imgs[idx]['img']}`} alt={`${imgs[idx]['name']}`} />  
                <button onClick={nxtImg} styles={styles.arrow}>
                    <ArrowForwardIosIcon/>
                </button>
            </div>
            <div>
            {
                imgs.map( img => <button onClick={()=>setIdx(img.idx)} style={styles.dotBtn}><FiberManualRecordIcon styles={ styles.dot } /></button>)
            }
            </div>
        </div>
  )
}

export default ImgSlider
