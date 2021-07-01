import styles from "./Hi.module.css";

export default function Hi(){
    function gret(){
        alert("환영!");
    }
    function detect(e){
        console.log(e.target.value);
    }


    return( 
    <div>
        <h1 style={{ color: "blue", backgroundColor:"yellow" }}>hi!</h1>
        <button onClick={gret}>안뇽!</button> <br></br> <br></br>
        <button>버튼2</button>
        <input type="text" onChange={detect}></input>
        <div className={styles.box}>여기는 hi.js 컴포넌트 영역입니다.</div>
        
        
        
        
        </div>
    );
}